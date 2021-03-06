const fs = require('fs')
const path = require('path')
const loadJsonFile = require('load-json-file');

const dotNext = path.resolve(__dirname, './.next')
const target = path.resolve(__dirname, './.next/service-worker.js')

function bundles(app) {
  return new Promise((resolve, reject) => {
    fs.readdir(`${dotNext}/bundles/pages`, (err, files) => {
      if (err) {
        resolve(app)
      }

      if (files) {
        const root = `/_next/${app.buildId}/page`
        app.precaches = app.precaches.concat(files
          .map(file => {
            return path.join(root, file)
          })
        )
      }

      resolve(app)
    })
  })
}

function chunks(app) {
  return new Promise((resolve, reject) => {
    fs.readdir(`${dotNext}/chunks`, (err, files) => {
      if (err) {
        resolve(app)
      }

      if (files) {
        const root = `/_next/webpack/chunks`
        app.precaches = app.precaches.concat(files
          .filter(file => /\.js$/.test(file))
          .map(file => {
            return path.join(root, file)
          })
        )
      }

      resolve(app)
    })
  })
}

function app() {
  const app = {
    buildId: fs.readFileSync(`${dotNext}/BUILD_ID`, 'utf8'),
    precaches: []
  }

  return loadJsonFile(`${dotNext}/build-stats.json`).then(stats => {
    Object.keys(stats).map(src => {
      // /_next/9265fa769281943ee96625770433e573/app.js
      app.precaches.push(`/_next/${stats[src].hash}/${src}`)
    })

    return app
  })
}

const swSnippet = (precache) =>
`importScripts('https://unpkg.com/workbox-sw@2.1.2/build/importScripts/workbox-sw.prod.v2.1.2.js')

const workboxSW = new WorkboxSW({clientsClaim: true, skipWaiting: true})

// set precache listed item
workboxSW.precache(${precache})

workboxSW.router.registerRoute(
  new RegExp('/static/.*'),
  workboxSW.strategies.cacheFirst()
)

workboxSW.router.registerRoute(
  new RegExp('/'),
  workboxSW.strategies.staleWhileRevalidate()
)

workboxSW.router.registerRoute(
  new RegExp('/resume'),
  workboxSW.strategies.staleWhileRevalidate()
)
`

app()
  .then(chunks)
  .then(bundles)
  .then(app => {
    fs.writeFileSync(target,
      swSnippet(JSON.stringify(app.precaches, null, 2)),
      'utf8'
    )
  })
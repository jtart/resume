const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')
const compression = require('compression')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60
})

app.prepare()
.then(() => {
  const server = express()
  server.use(compression())

  server.get('/', (req, res) => {
    renderAndCache(req, res, '/')
  })

  server.get('/resume', (req, res) => {
    renderAndCache(req, res, '/resume')
  })

  server.get('/service-worker.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript')
    res.sendFile(`${__dirname}/.next/service-worker.js`);
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

function getCacheKey (req) {
  return `${req.url}`
}

async function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT')
    res.send(ssrCache.get(key))
    return
  }

  try {
    const html = await app.renderToHTML(req, res, pagePath, queryParams)

    if (res.statusCode !== 200) {
      res.send(html)
      return
    }

    ssrCache.set(key, html)

    res.setHeader('x-cache', 'MISS')
    res.send(html)
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams)
  }
}
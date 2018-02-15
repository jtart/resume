import Document, { Head, Main, NextScript } from 'next/document'
import { renderStatic } from 'glamor/server'
import ServiceWorker from './service-worker'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = renderStatic(() => page.html)
    return { ...page, ...styles }
  }

  constructor (props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }

  render() {
    return (
      <html lang='en'>
        <Head>
          <meta key='charset' charSet='utf-8'/>
          <meta key='viewport' name='viewport' content='initial-scale=1.0, width=device-width'/>
          <meta name="theme-color" content="#f26a6b"/>
          <meta name="description" content="Website and Resume/CV of Jordan Tart. A full-stack Web Developer working for BBC News."/>
          <link rel="shortcut icon" href="/static/img/icon-72x72.png"/>
          <link rel="manifest" href="/static/manifest.json"/>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }}/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <ServiceWorker />
        </body>
      </html>
    )
  }
}
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

          <link rel="preload" href="/fonts/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2" crossOrigin="anonymous" as="font" type="font/woff2" />
          <link rel="preload" href="/fonts/L0x-DF02iFML4hGCyMqlbS0.woff2" crossOrigin="anonymous" as="font" type="font/woff2" />
          <link rel="preload" href="/fonts/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2" crossOrigin="anonymous" as="font" type="font/woff2" />
          <link rel="stylesheet" href="/fonts/inter.css" />
          <link rel="stylesheet" href="/fonts/opensans.css" />
          <link rel="stylesheet" href="/fonts/urbanist.css" />
          <link rel="preload" href="/landing-page/background-vector.svg" crossOrigin="anonymous" as="image" type="image/svg+xml" />
          <link rel="preload" href="/landing-page/2-background-vector-right.svg" crossOrigin="anonymous" as="image" type="image/svg+xml" />

          <link rel="preload" href="/landing-page/2-background-vector-left.svg" crossOrigin="anonymous" as="image" type="image/svg+xml" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

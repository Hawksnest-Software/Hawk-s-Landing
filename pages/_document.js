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
          {/* Basic Meta Tags */}
          <meta name="description" content="Next-generation AI-powered cybersecurity. Hawksnest Software protects against malware, phishing, scams, and zero-day threats with Security Hawk." />
          
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Hawksnest Software - Defending Your Digital Nest" />
          <meta property="og:description" content="Next-generation AI-powered cybersecurity protecting you against malware, phishing, scams, and zero-day threats." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://hawksnestsoftware.com/images/hawk nest.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Hawksnest Software - Cybersecurity Protection" />
          
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Hawksnest Software - Defending Your Digital Nest" />
          <meta name="twitter:description" content="Next-generation AI-powered cybersecurity protecting you against malware, phishing, scams, and zero-day threats." />
          <meta name="twitter:image" content="/images/hawk nest.jpg" />
          <meta name="twitter:image:alt" content="Hawksnest Software - Cybersecurity Protection" />
          
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

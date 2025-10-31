import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
                 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 
                 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #0a0a0a;
    color: white;
    min-height: 100%;
    /* Only hide horizontal overflow, allow vertical scrolling */
    overflow-x: hidden;
    /* Enable momentum scrolling on iOS */
    -webkit-overflow-scrolling: touch;
    /* Prevent zoom on iOS */
    touch-action: manipulation;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Scrollbar styles - hide on mobile */
  @media (min-width: 769px) {
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #1a1a1a;
    }

    ::-webkit-scrollbar-thumb {
      background: #4ecdc4;
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #45b7d1;
    }
  }
  
  
  /* Mobile optimizations */
  @media (max-width: 768px) {
    /* Hide scrollbars on mobile */
    ::-webkit-scrollbar {
      display: none;
    }
    
    /* Critical mobile performance fixes */
    * {
      -webkit-tap-highlight-color: transparent;
    }
    
    /* Prevent text selection issues */
    body {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      /* Critical: prevent white/black flashing */
      -webkit-overflow-scrolling: touch;
      overflow-scrolling: touch;
    }
    
    /* Allow text selection for readable content */
    p, h1, h2, h3, h4, h5, h6, span, div[class*="Description"], div[class*="Subtitle"] {
      -webkit-user-select: text;
      -moz-user-select: text;
      -ms-user-select: text;
      user-select: text;
    }
    
    /* Simplify expensive effects on mobile */
    [class*="blur"], [style*="filter: blur"] {
      filter: none !important;
    }
    
    /* Reduce motion for better performance */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

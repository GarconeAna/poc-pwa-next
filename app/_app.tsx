import { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

// import GlobalStyles from 'app/global'

function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/serviceWorker.js')
          .then(registration => {
            console.log('Service Worker registrado com sucesso:', registration);
          })
          .catch(error => {
            console.error('Erro ao registrar o Service Worker:', error);
          });
      });
    }
  }, []);


  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/icon-raio.png" />
        <link rel="apple-touch-icon" href="/img/icon-raio.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name='theme-color' content='#fff'/>
        <meta name='description' content='A simple project'/>
      </Head>
      {/* <GlobalStyles /> */}
      <Component {...pageProps} />
    </>
  )
}

export default App
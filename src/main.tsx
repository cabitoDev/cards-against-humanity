import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { CardsApp } from './CardsApp'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { StompSessionProvider } from 'react-stomp-hooks'

declare global {
  interface Window {
    global: any
  }
}

// Polyfill para 'global'
window.global = window

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <ThemeProvider defaultTheme='dark'>
        <StompSessionProvider url={'http://localhost:8080/ws-endpoint'}>
          <Provider store={store}>
            <CardsApp />
          </Provider>
        </StompSessionProvider>
      </ThemeProvider>
    </NextUIProvider>
  </React.StrictMode>
)

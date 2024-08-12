import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { CardsApp } from './CardsApp'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <ThemeProvider defaultTheme='dark'>
        <Provider store={store}>
          <CardsApp />
        </Provider>
      </ThemeProvider>
    </NextUIProvider>
  </React.StrictMode>
)

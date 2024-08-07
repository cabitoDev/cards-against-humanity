import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { CardsApp } from './CardsApp'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <ThemeProvider defaultTheme='dark'>
        <CardsApp />
      </ThemeProvider>
    </NextUIProvider>
  </React.StrictMode>,
)

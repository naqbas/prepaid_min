import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import landing_ru from "./app/locale/ru/landing.json"
import landing_kz from "./app/locale/kz/landing.json"
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'


i18next.init({
  interpolation: { escapeValue: false },
  lng: "ru",
  resources: {
    ru: {
      landing: landing_ru
    },
    kz: {
      landing: landing_kz
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)

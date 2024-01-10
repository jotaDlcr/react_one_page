import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import translate_en from './languages/en/translate.json';
import translate_es from './languages/es/translate.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation:{escapeValue:false},
  lng: "en",
  resources:{
    en:{global: translate_en},
    es:{global: translate_es},
  },
  returnObjects: true
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();

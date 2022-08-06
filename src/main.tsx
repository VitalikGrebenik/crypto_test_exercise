import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style/index.scss';

import { Provider } from "mobx-react"

import store from './stores/index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider {...store}>
      <App />
    </Provider>
)

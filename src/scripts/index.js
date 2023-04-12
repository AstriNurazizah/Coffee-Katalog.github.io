import 'regenerator-runtime'
import '../styles/main.css'
import App from './views/app'
import swRegister from './utils/sw-register'
import WebSocketInitiator from './utils/websocket-initiator'
import CONFIG from './globals/config'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent')

})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  // eslint-disable-next-line no-undef
  swRegister()
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER)
})

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import NotificationHelper from './notification-helper'
import CONFIG from '../globals/config'

const WebSocketInitiator = {
  init (url) {
    const webSocket = new WebSocket(url)
    webSocket.onmessage = this._onMessageHandler
  },

  _onMessageHandler (message) {
    // eslint-disable-next-line no-unused-vars
    const movie = JSON.parse(message.data)
    NotificationHelper.sendNotification({
      title: `${restaurants.name} is open!`,
      options: {
        body: restaurants.description,
        // eslint-disable-next-line no-undef
        image: `${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}`
      }
    })
  }
}

export default WebSocketInitiator

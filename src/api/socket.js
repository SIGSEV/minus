import socketIo from 'socket.io'

import config from 'config'

class SocketServer {

  constructor () {
    this._io = socketIo({ serveClient: false })
    this._io.listen(config.socketPort)
  }

}

let io = null

export const initSocketServer = () => {
  io = new SocketServer()
}

export const getSocketServer = () => {
  return io
}

export default getSocketServer()

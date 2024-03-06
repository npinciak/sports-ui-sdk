export class WebSocketBuilder {
    constructor(websocket, path) {
        this._path = '';
        this._websocket = websocket;
        this._path = path;
    }
    get websocketUri() {
        return `${this._protocolIpPort}${this._path}?${this._params}`;
    }
    get _params() {
        return `TrafficManager-Token=${this._websocket.token}`;
    }
    get _protocolIpPort() {
        return `${WebSocketBuilder._protocol}${this._websocket.ip}:${this._websocket.securePort}`;
    }
}
WebSocketBuilder._protocol = 'wss://';
//# sourceMappingURL=websocket-connection-builder.model.js.map
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.SocketIOProvider = void 0;
var React = __importStar(require("react"));
var socket_io_client_1 = __importDefault(require("socket.io-client"));
var context_1 = require("./context");
var SocketIOProvider = function (_a) {
    var url = _a.url, opts = _a.opts, children = _a.children;
    var socketRef = React.useRef();
    if (typeof window === "undefined") {
        return React.createElement(React.Fragment, null, children);
    }
    if (!socketRef.current) {
        socketRef.current = (0, socket_io_client_1["default"])(url, opts || {});
    }
    return (React.createElement(context_1.SocketIOContext.Provider, { value: socketRef.current }, children));
};
exports.SocketIOProvider = SocketIOProvider;

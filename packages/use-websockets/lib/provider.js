"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.__esModule = true;
exports.WebSocketProvider = void 0;
var React = __importStar(require("react"));
var context_1 = require("./context");
exports.WebSocketProvider = function (_a) {
    var url = _a.url, protocols = _a.protocols, children = _a.children, onOpen = _a.onOpen;
    var ws = React.useRef();
    var onOpenRef = React.useRef();
    if (!window) {
        return React.createElement(React.Fragment, null, children);
    }
    if (!ws.current) {
        ws.current = new WebSocket(url, protocols);
    }
    onOpenRef.current = onOpen;
    React.useEffect(function () {
        if (onOpenRef === null || onOpenRef === void 0 ? void 0 : onOpenRef.current) {
            ws.current.onopen = onOpenRef.current;
        }
        return function () {
            var _a;
            (_a = ws === null || ws === void 0 ? void 0 : ws.current) === null || _a === void 0 ? void 0 : _a.close();
        };
    }, []);
    return (React.createElement(context_1.WebsocketContext.Provider, { value: ws.current }, children));
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var PARADOX_mp4_1 = require("@assets/PARADOX.mp4");
function VideoIntro() {
    var videoRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);
    return ((0, jsx_runtime_1.jsx)("video", { ref: videoRef, src: PARADOX_mp4_1.default, muted: true, style: { width: "100%", height: "auto" } }));
}
exports.default = VideoIntro;

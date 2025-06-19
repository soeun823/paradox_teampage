"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var VideoIntro_tsx_1 = require("@/components/VideoIntro.tsx");
function App() {
    var _a = (0, react_1.useState)(true), showVideo = _a[0], setShowVideo = _a[1];
    (0, react_1.useEffect)(function () {
        var timer = setTimeout(function () {
            setShowVideo(false);
        }, 9000); // 5초
        return function () { return clearTimeout(timer); };
    }, []);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: showVideo && (0, jsx_runtime_1.jsx)(VideoIntro_tsx_1.default, {}) }));
}
exports.default = App;

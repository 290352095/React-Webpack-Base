// 入口文件

import React from "react";
import ReactDOM from "react-dom";
import "./app/static/css/app.less";
import App from "./app/app";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("app"));
registerServiceWorker();
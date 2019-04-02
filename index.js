import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Button } from "antd";
import { Input } from "antd";
//import App from "./App";
import New from "./new";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(
//   <div>
//     <Button type="primary" shape="circle" icon="search" />
//     <Button type="primary" icon="search">
//       Search
//     </Button>
//     <Button shape="circle" icon="search" />
//     <Button icon="search">Search</Button>
//     <br />
//     <Button shape="circle" icon="search" />
//     <Button icon="search">Search</Button>
//     <Button type="dashed" shape="circle" icon="search" />
//     <Button type="dashed" icon="search">
//       Search
//     </Button>
//   </div>,
//   document.getElementById("container")
// );
ReactDOM.render(<New />, document.getElementById("root"));
//ReactDOM.render(<App />, document.getElementById("container"));

serviceWorker.unregister();

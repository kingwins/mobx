import React from "react"
import ReactDOM from "react-dom"
import './style.css'
import store from "./store/"
import App from "./App"


ReactDOM.render(<App store={store}/>, document.querySelector("#root"))

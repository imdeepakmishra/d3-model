import React from "react"
import Config from "./config"
import App from "./App"

export default class Main extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        console.log(this.props.display);
        return(
            <div id="display">
                <Config />
                <App/>
            </div>
        )
    }
}
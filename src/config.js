import React from "react"
import App from "./App"
export default class Config extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ip: "localhost",
            password: "12345",
            port: "7474",
            hidden: false,
            display: "Config"
        }
        this.handleClick = this.handleClick.bind(this)
        this.toggleShow = this.toggleShow.bind(this)
        this.paramChange = this.paramChange.bind(this)
    }

    handleClick(e) {
        this.setState({ display: "dashboard" })
    }

    toggleShow() {
        this.setState({ hidden: !this.state.hidden })
    }

    paramChange(e) {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    render() {

        return (
            <div className="row">
                <div className="col col-12 col-md-12 form-inline">

                    <input onChange={this.paramChange} type="password" name="password" value={this.state.password} className="form-control form-control-sm" size="40px" placeholder="Enter Password" />&nbsp;&nbsp;
              <input onChange={this.paramChange} type="text" name="ip" value={this.state.ip} className="form-control form-control-sm" size="40px" placeholder="Enter IP" />&nbsp;&nbsp;
              <input onChange={this.paramChange} type="text" name="port" value={this.state.port} className="form-control form-control-sm" size="40px" placeholder="Enter Port Number" />&nbsp;&nbsp;
                    <button onClick={this.handleClick} type="button" className="btn btn-outline-primary btn-sm"> submit </button>
                </div>
                <div id="graphDock">
                    <App data={this.state} />
                </div>
            </div>
        )
    }
}


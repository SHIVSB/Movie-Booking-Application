import React, {Component} from "react";
import "./header.css";
import logo from "../../assets/logo.svg";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-title header-logo">
                        <img height={35} width={35} src={logo} />
                </div>
                
            </div>
        );
    }
}

export default Header;
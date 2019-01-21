import React, { Component } from 'react';
import '../App.css';
import logo from '../images/logo.png';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

class HeaderBloc extends Component {
    render() {
        return (
            <header>
                <img src={logo} className="logoHeader" />
                <div className="navigation">
                    <span className="arrowLeft"><FaArrowLeft style={{color: '#fff',fontSize: 13, fontWeight: 'lighter'}}/></span>
                    <span className="arrowRight"><FaArrowRight style={{color: '#fff',fontSize: 13, fontWeight: 'lighter'}}/></span>
                </div>
            </header>
        );
    }
}

export default HeaderBloc;

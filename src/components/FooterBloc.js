import React, { Component } from 'react';
import '../App.css';
import logoFooter from '../images/logo-footer.svg';
import { FaAngleRight } from "react-icons/fa";

class FooterBloc extends Component {
    render() {
        return (
            <footer>
                <img src={logoFooter} className="logoFooter" />
                <span className="voirProfil">Voir le profil <FaAngleRight className="iconFooterRight"/></span>
            </footer>
        );
    }
}

export default FooterBloc;

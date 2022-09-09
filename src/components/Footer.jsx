import React from "react";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";


function Footer() {
    return (
        <div className="footer">
            <a href="http://twitter.com/errbodylovslola" target="_blank"><FaTwitter className="footer-icons"/></a>
            <a href="http://instagram.com/errbodyluvslola" target="_blank"><FaInstagram className="footer-icons"/></a>
            <a href="http://github.com/lhorla" target="_blank"><FaGithub className="footer-icons"/></a>
        </div>
    )
}

export default Footer
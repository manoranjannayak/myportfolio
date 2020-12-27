import React, { Component } from "react";

import logo from'../logo/jurado-logo.png'
import './logo.css'
import Image from 'react-bootstrap/Image'

function Logo () {
    return(
        <div className="logo">
            {/* <Image src={logo} fluid /> */}
            <img src={logo} alt="logo" class="img-fluid"></img>
        </div>
    )
}

export default Logo
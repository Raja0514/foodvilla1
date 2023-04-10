import React from "react";

import {useRouteError} from 'react-router-dom';

import image from '../assets/img/error.jpeg'

const Error=()=>{

    const err=useRouteError();
    //console.log(err);
    return(
        <>
        <h1>Oops!</h1>
        <h2>Something went Wrong!</h2>
        <h2>{err.status +":"+err.statusText}</h2>
        <img src={image} alt="errimg"/>

        </>
    )
}

export default Error;
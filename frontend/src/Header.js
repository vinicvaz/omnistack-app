import React, { useState } from 'react';


export default function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}


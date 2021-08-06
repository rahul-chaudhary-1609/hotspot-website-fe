
import React, { useEffect, useRef } from "react";


export function Frame(props) {

    let frameRef=useRef()

    return (
        <>
            <iframe ref={Ref} src={props.url}></iframe>
        </>
    )
}


import * as React from "react"
import { Link } from "gatsby"
import { useRef } from 'react';
import HeaderCell from "./headerCell";

export default function tableRow ({header, subtitle, children}){

    return(
        <>
        <tr class="bg-slate-50 border-b">
            <HeaderCell title={header} subtitle={subtitle}/>
        {children}
        </tr>
        </> 
    )
}

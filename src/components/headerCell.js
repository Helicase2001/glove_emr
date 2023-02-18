import * as React from "react"
import { Link } from "gatsby"
import { useRef } from 'react';

export default function HeaderCell ({title, subtitle, subtitleVisibility = "hidden"}){

    return(
        <th scope="col" class="px-6 py-3 border-b border-r border-slate-300 ">
                
        <p className="mx-0 my-0 px-0 py-0 text-slate-600">{title}
        <span className={`${subtitleVisibility} text-slate-400`}>{' '+subtitle}</span></p>
        </th>
    )
}

import * as React from "react"
import { Link } from "gatsby"
import { useRef } from 'react';

export default function Cell ({value}){
    
    return(
        <td className={`text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap transform hover:bg-cyan-400/50 transition duration-500 border-b border-r border-slate-300 even:bg-slate-100`}>
                {value}
        </td>
    )
}



import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useRef } from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Cell from '../components/cell'
import HeaderCell  from "../components/headerCell";
import tableRow from "../components/tableRow";
import RecommendedTable from "../components/recommendTable";


const cellConfig = {
  // Colors
  primary: {
    bgColor: 'bg-rose-500',
    color: 'text-white',
    outline:
      'border-primary-500 text-primary-500 bg-opacity-0 hover:bg-opacity-10',
  },
  secondary: {
    bgColor: 'bg-indigo-500',
    color: 'text-white',
    outline:
      'border-secondary-500 text-secondary-500 bg-opacity-0 hover:bg-opacity-10',
  },

  // Sizes
  small: 'px-3 py-2',
  medium: 'px-4 py-2',
  large: 'px-5 py-2',
};


export default function IndexPage(){
  var isMouseOver = false;
  var isMouseDown = false;

  const myRef = useRef(null);
  const pageRef = useRef(null);

  var down = false;
  
  var table_col = "bg-rose-500"
  const table_de_col = "bg-indigo-500"

 

  var table_col = "bg-rose-500"

  return (
  
  <Layout ref={pageRef} >
      <span className='bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-500 animate-text lg:text-6xl md:text-5xl text-4xl mt-16'> GlovEMR </span>
      <p className="text-4xl font-bold text-black pt-8 mb-0">Laboratory Results</p>
      <p className ="text-xl ">Patient: <span className="text-cyan-500">Steve Steffensen</span> | DOB: 02/18/2000</p>
      <div class="flex flex-col">
    <RecommendedTable></RecommendedTable>
      




<div class="relative overflow-x-auto shadow-lg sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark: bg-slate-200">
            <tr>
                <HeaderCell title="Marker"/>
                <HeaderCell title="2/18/23"/>
                <HeaderCell title="1/06/23"/>
                <HeaderCell title="12/2/22"/>
                <HeaderCell title="11/12/22"/>
                <HeaderCell title="10/05/22"/>
                <HeaderCell title="09/08/22"/>
                <HeaderCell title="08/10/22"/>
            </tr>
        </thead>
        <tbody >
            <tr ><HeaderCell title="Glucose" subtitle="mg/dL" subtitleVisibility="visible"/>
              <Cell value={102}/>
              <Cell value={103}/>
              <Cell value={114}/>
              <Cell value={116}/>
              <Cell value={115}/>
              <Cell value={104}/>
              <Cell value={101}/>
            </tr>

            <tr><HeaderCell title="A1C" subtitle="%" subtitleVisibility="visible"/>
              <Cell value={5.8}/>
              <Cell value={5.9}/>
              <Cell value={6.6}/>
              <Cell value={6.7}/>
              <Cell value={6.6}/>
              <Cell value={6.0}/>
              <Cell value={5.8}/>
            </tr>

            <tr><HeaderCell title="Sodium" subtitle="mmol/L" subtitleVisibility="visible"/>
              <Cell value={136}/>
              <Cell value={137}/>
              <Cell value={138}/>
              <Cell value={139}/>
              <Cell value={140}/>
              <Cell value={139}/>
              <Cell value={138}/>
            </tr>

            <tr><HeaderCell title="Potassium" subtitle="mmol/L" subtitleVisibility="visible"/>
              <Cell value={3.8}/>
              <Cell value={3.9}/>
              <Cell value={3.8}/>
              <Cell value={4.0}/>
              <Cell value={3.8}/>
              <Cell value={3.9}/>
              <Cell value={3.9}/>
            </tr>

            <tr><HeaderCell title="Chloride" subtitle="mmol/L" subtitleVisibility="visible"/>
              <Cell value={102}/>
              <Cell value={100}/>
              <Cell value={100}/>
              <Cell value={100}/>
              <Cell value={102}/>
              <Cell value={102}/>
              <Cell value={101}/>
            </tr>

            <tr><HeaderCell title="Calcium" subtitle="mmol/L" subtitleVisibility="visible"/>
              <Cell value={9.8}/>
              <Cell value={9.9}/>
              <Cell value={9.9}/>
              <Cell value={9.8}/>
              <Cell value={9.7}/>
              <Cell value={9.8}/>
              <Cell value={9.8}/>
            </tr>

            <tr><HeaderCell title="eGFR" subtitle="mL/min/1.73" subtitleVisibility="visible"/>
              <Cell value={106}/>
              <Cell value={106}/>
              <Cell value={107}/>
              <Cell value={107}/>
              <Cell value={106}/>
              <Cell value={107}/>
              <Cell value={106}/>
            </tr>

            <tr><HeaderCell title="BUN/Creatine Ratio" subtitle="" subtitleVisibility="visible"/>
              <Cell value={16}/>
              <Cell value={15}/>
              <Cell value={16}/>
              <Cell value={16}/>
              <Cell value={15}/>
              <Cell value={16}/>
              <Cell value={16}/>
            </tr>

            <tr><HeaderCell title="Albumin" subtitle="g/dL" subtitleVisibility="visible"/>
              <Cell value={4.8}/>
              <Cell value={4.8}/>
              <Cell value={4.9}/>
              <Cell value={5.0}/>
              <Cell value={5.0}/>
              <Cell value={4.8}/>
              <Cell value={4.9}/>
            </tr>

            <tr><HeaderCell title="Globulin, Total" subtitle="g/dL" subtitleVisibility="visible"/>
              <Cell value={2.3}/>
              <Cell value={2.4}/>
              <Cell value={2.3}/>
              <Cell value={2.3}/>
              <Cell value={2.2}/>
              <Cell value={2.2}/>
              <Cell value={2.2}/>
            </tr>

            <tr><HeaderCell title="Triglycerides" subtitle="mg/dL" subtitleVisibility="visible"/>
              <Cell value={62}/>
              <Cell value={64}/>
              <Cell value={58}/>
              <Cell value={58}/>
              <Cell value={59}/>
              <Cell value={65}/>
              <Cell value={65}/>
            </tr>

            <tr><HeaderCell title="Cholesterol, Total" subtitle="mg/dL" subtitleVisibility="visible"/>
              <Cell value={142}/>
              <Cell value={145}/>
              <Cell value={146}/>
              <Cell value={148}/>
              <Cell value={149}/>
              <Cell value={148}/>
              <Cell value={147}/>
            </tr>

            <tr><HeaderCell title="HDL Cholesterol" subtitle="mg/dL" subtitleVisibility="visible"/>
              <Cell value={53}/>
              <Cell value={54}/>
              <Cell value={52}/>
              <Cell value={51}/>
              <Cell value={50}/>
              <Cell value={52}/>
              <Cell value={53}/>
            </tr>

            <tr><HeaderCell title="LDL Cholesterol" subtitle="mg/dL" subtitleVisibility="visible"/>
              <Cell value={88}/>
              <Cell value={87}/>
              <Cell value={89}/>
              <Cell value={90}/>
              <Cell value={91}/>
              <Cell value={90}/>
              <Cell value={88}/>
            </tr>

            <tr><HeaderCell title="VLDL Cholesterol" subtitle="mg/dL" subtitleVisibility="visible"/>
              <Cell value={13}/>
              <Cell value={14}/>
              <Cell value={15}/>
              <Cell value={15}/>
              <Cell value={13}/>
              <Cell value={13}/>
              <Cell value={13}/>
            </tr>

            <tr><HeaderCell title="TSH" subtitle="uIU/mL" subtitleVisibility="visible"/>
              <Cell value={3.89}/>
              <Cell value={3.85}/>
              <Cell value={3.83}/>
              <Cell value={3.82}/>
              <Cell value={3.89}/>
              <Cell value={3.81}/>
              <Cell value={3.91}/>
            </tr>

            <tr><HeaderCell title="Platelets" subtitle="x10E3/uL" subtitleVisibility="visible"/>
              <Cell value={187}/>
              <Cell value={192}/>
              <Cell value={193}/>
              <Cell value={194}/>
              <Cell value={185}/>
              <Cell value={183}/>
              <Cell value={188}/>
            </tr>

            <tr><HeaderCell title="Neutrophils" subtitle="%" subtitleVisibility="visible"/>
              <Cell value={50}/>
              <Cell value={49}/>
              <Cell value={51}/>
              <Cell value={52}/>
              <Cell value={51}/>
              <Cell value={52}/>
              <Cell value={50}/>
            </tr>

            <tr><HeaderCell title="Monocytes" subtitle="%" subtitleVisibility="visible"/>
              <Cell value={9}/>
              <Cell value={8}/>
              <Cell value={8}/>
              <Cell value={8}/>
              <Cell value={8}/>
              <Cell value={9}/>
              <Cell value={9}/>
            </tr>
            <tr><HeaderCell title="Lymphs" subtitle="%" subtitleVisibility="visible"/>
              <Cell value={40}/>
              <Cell value={41}/>
              <Cell value={42}/>
              <Cell value={42}/>
              <Cell value={41}/>
              <Cell value={42}/>
              <Cell value={42}/>
            </tr>

        </tbody>
    </table>
</div>

      </div>
  </Layout>
)
    }
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />



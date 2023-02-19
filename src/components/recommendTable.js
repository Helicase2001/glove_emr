import { Disclosure } from '@headlessui/react'
import * as React from "react"
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Cell from '../components/cell'
import HeaderCell  from "../components/headerCell";
import tableRow from "../components/tableRow";
import MyModal from '../components/modalPrompt';



export default function RecommendedTable() {
  return (
    <div className="w-full py-16">
      <div className="mx-auto w-full rounded-2xl bg-white p-2">
        <Disclosure defaultOpen='true'>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-teal-100 px-4 py-2 text-left text-sm font-medium text-teal-900 hover:bg-teal-200 focus:outline-none focus-visible:ring focus-visible:ring-teal-500 focus-visible:ring-opacity-75">
                <span>Suggested</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-emerald-500`}
                />
              </Disclosure.Button>
              
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-teal-500">
                <div className='relative overflow-x-auto shadow-lg sm:rounded-lg'>
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-teal-200">
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
        <tbody className='bg-cyan-50'>
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

            
            <tr><HeaderCell title="eGFR" subtitle="mL/min/1.73" subtitleVisibility="visible"/>
              <Cell value={106}/>
              <Cell value={106}/>
              <Cell value={107}/>
              <Cell value={107}/>
              <Cell value={106}/>
              <Cell value={107}/>
              <Cell value={106}/>
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

        </tbody>
    </table>
    <span className={`flex flex-row`}>
                      <span className={`underline mr-2 break-words pl-2 pt-2`}>
        
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg>
                      </span>
                      <MyModal></MyModal>
                    </span>
                    </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

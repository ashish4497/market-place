import './style.css'

import React from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react'

export default function FaqAccordian() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['1']))

  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  return (
    <div className="container m-auto w-full py-20">
      <div className="flex">
        <div className="w-[50%] flex items-center">
          <h2 className="leading-loose	 text-3xl font-bold	antialiased	text-left my-6">
            Frequently <br/>Asked Question
          </h2>
        </div>
        <div className="w-[50%]">
          <Accordion
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

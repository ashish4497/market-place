import './style.css'

import React from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react'

export default function FaqAccordian() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['1']))

  const defaultContent =
    ', sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    const faqQuestions = [
      {
        title:"How does it works?",
        subTitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        title:"Do you offer pool service?",
        subTitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        title:"How does it works?",
        subTitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        title:"What’s the closure time?",
        subTitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        title:"Do I get full refund if I cancel?",
        subTitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
    ]
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
            {
              faqQuestions?.map((faq,index) => {
                return(
                  <AccordionItem key={index} aria-label={faq.title} title={faq.title}>
                    <p className='py-2 text-base font-normal capitalize'>{faq.subTitle}</p>
                </AccordionItem>
                )
              })
            }        
          </Accordion>
        </div>
      </div>
    </div>
  )
}

import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')

        return <div>
            <AccordionTitle title={props.titleValue} collapsedMenu={props.collapsed} />
            { !props.collapsed && <AccordionBody/> }
        </div>
    }


type AccordionTitlePropsType = {
    title: string
    collapsedMenu: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;
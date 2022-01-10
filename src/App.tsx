import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Select} from "./components/Select/Select";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    const onClickCallback = () => {
        alert('I was clicked on')
    }

    return (
        <div className={'App'}>
            {/*<OnOff on={switchOn} onChange={setSwitchOn} />*/}
            <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}

            {/*<UncontrolledAccordion titleValue={'Menu'} />*/}

            <UncontrolledRating/>

            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
                       onClick={onClickCallback}
                       items={[{title:'Alexandr', value: 1}, {title:'Dimych', value: 2},
                           {title:'Andrew', value: 3}, {title:'Aleksey', value: 4}]}/>
            <Select value={} onChange={} items={}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;

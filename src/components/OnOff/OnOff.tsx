import React, {useState} from "react";

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export function OnOff(props: PropsType) {


    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        cursor: 'pointer',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        cursor: 'pointer',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        background: props.on ? 'green' : 'red'
    }


    const OnButtonClick = () => props.onChange(true)


    const OffButtonClick = () => props.onChange(false)


    return (
        <div>
            <div onClick={OnButtonClick} style={onStyle}>On</div>
            <div onClick={OffButtonClick} style={offStyle}>Off</div>
            <div style={indicatorStyle}/>
        </div>
    )
}

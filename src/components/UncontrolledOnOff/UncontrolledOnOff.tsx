import React, {useState} from "react";

type PropsType = {
    onChange: (on: boolean) => void
}

export function UncontrolledOnOff(props: PropsType) {


    let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        cursor: 'pointer',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        cursor: 'pointer',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        background: on ? 'green' : 'red'
    }


    const ButtonHandler = () => {
        if (on) {
            setOn(false)
            props.onChange(false)
        } else {
            setOn(true)
            props.onChange(true)
        }
    }

    return (
        <div>
            <div onClick={ButtonHandler} style={onStyle}>On</div>
            <div onClick={ButtonHandler} style={offStyle}>Off</div>
            <div style={indicatorStyle}/>
        </div>
    )
}

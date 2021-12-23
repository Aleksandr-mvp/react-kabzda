import React, {useState} from "react";

type RatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {

    let [value, setValue] = useState(0)

let clickButtonHandler = () => {
    setValue(value + 1)
}

    return (
        <div>
            <Star selected={value > 0} clickButtonHandler={clickButtonHandler}/>
            <Star selected={value > 1} clickButtonHandler={clickButtonHandler}/>
            <Star selected={value > 2} clickButtonHandler={clickButtonHandler}/>
            <Star selected={value > 3} clickButtonHandler={clickButtonHandler}/>
            <Star selected={value > 4} clickButtonHandler={clickButtonHandler}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    clickButtonHandler: () => void
}



function Star(props: StarPropsType) {
    return props.selected ?  <span onClick={() => props.clickButtonHandler()}><b>star</b></span> : <span>star</span>
}
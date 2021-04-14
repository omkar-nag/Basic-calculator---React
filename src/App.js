import React from "react"

function Button(props) {
    var style = (props.answer === 'Computational error' ? {fontSize:"15px"} : null) 

    return (
        <div>
            <div  id="calc" onMouseDown={(event) => props.handlechange(event)}>  
            <input id="ans" style={style} value={props.answer} disabled={true}/>
            <br />
            <button value="<-">←</button>
            <button value="C" >C</button>
            <button value="%" >%</button>
            <button value="/" >/</button>
            <br />
            <button value="1" >1</button>
            <button value="2" >2</button>
            <button value="3" >3</button>
            <button value="*" >*</button>
            <br />
            <button value="4" >4</button>
            <button value="5" >5</button>
            <button value="6" >6</button>
            <button value="-" >-</button>
            <br />
            <button value="7" >7</button>
            <button value="8" >8</button>
            <button value="9" >9</button>
            <button value="+" >+</button>
            <br />
            <button value="0" >0</button>
            <button value="." >.</button>
            <button className="btn" value="=" >=</button>
            </div>
        </div>
    )
}

export default Button
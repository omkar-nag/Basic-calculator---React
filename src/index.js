import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Button from "./App"
import logo from "./calc.png"


class Calculator extends React.Component {
    constructor() {
        super()
        this.state = {
            input:[],
            answer: ""
        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(event) {

        if (event.target.value === "<-") {
            
            var replica=this.state.input

            if (replica.length > 0) {
                replica = replica.substring(0, replica.length - 1);
                this.setState({
                    answer:"",
                    input : replica
                }); 
            }

            else {
                this.setState({answer:""})
            }
             
        }
        else if(event.target.value === 'C') {
            this.setState({
                answer:"",
                input : ""
            }); 
        }
        
        else if (event.target.value==='=') {
            var eqn=this.state.input.toString();
            eqn=eqn.replace("++","+")
            eqn=eqn.replace("--","+")
            try {
                this.setState({
                    answer:eval(eqn),
                    input:[]
                })
            }
            catch {
                this.setState({
                    answer:"Computational error",
                    input:[]
                })
            }
        }

        else {
            this.setState({
                answer:"",
                input : [...this.state.input, event.target.value].join('')
            })
        }
    }
    
    inputhandle= (event) => {
        this.setState({
            answer:"",
            input : [...this.state.input, event.target.value].join('')
        })
    }

    render() {
        var element=""
        if (this.state.answer===""){
            element=this.state.input
        }
        else {
            element=this.state.answer
        }
        return (
            <div style={{textAlign: "center"}}>
            <Button  handlechange={this.handleClick} answer={element} inputHandle={this.inputhandle} />
            {/* <div><img src={logo} alt=""></img></div> */}
            </div>
        )
    }
}
ReactDOM.render(<Calculator />, document.getElementById("root"))
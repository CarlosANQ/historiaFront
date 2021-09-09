import data from "../data.json";
import React, {Component} from "react";
import Opciones from "../Opciones/Opciones";
import Recordatorio from "../Recordatorio/Recordatorio";

const record = [];

export default class Historia extends Component{

    constructor(props){
        super(props);
        this.state = {
            contador: 0,
            previousOption: "",
        };
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.contador !== this.state.contador) {
            record.push(this.state.previousOption);            
        }
    }

    handleClick = (event)=>{
        const id = event.target.id;
        if (this.state.contador >= 7) {
            alert('FIN.');            
        }else if (id==="A" && this.state.previousOption !=="A" ){
            this.setState({
                contador: this.state.contador + 1,
                previousOption: "A"
            });
        }else if (id==="B" && this.state.previousOption==="B") {
            this.state({
                contador: this.state.contador +2,
                previousOption: "B"
            });
        }else if (id === "B" && this.state.previousOption === "A") {
            this.setState({
                contador: this.state.contador + 3,
                previousOption: "B"
            });            
        }else if (id === "B") {
            this.setState({
                contador: this.state.contador + 2,
                previousOption: "B"
            });            
        }
        console.log(record);
    };

    render() {
        return (
            <div className="layout">
                <h1 className="historia">{data[this.state.contador].historia}</h1>
                <Opciones
                    handleClick={this.handleClick}
                    optionA={data[this.state.contador].opciones.a}
                    optionB={data[this.state.contador].opciones.b} />
                <Recordatorio
                    previousOption={this.state.previousOption}
                    record={record.map(
                        (event,index)=>(
                            <li key={index}>{event}</li>),
                            data[this.state.contador].id
                    )} />
                
            </div>
        )
    }
}
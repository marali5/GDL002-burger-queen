import React from "react";
import EnviarOrden from './enviarOrden';

class Comanda extends React.Component{
    render(){
        const order = this.props.orden.map((menu, i) => {
            return(
                <div>
                    <ul key={i} className="list-group col-md-12">
                        <li className="list-group-item d-flex justify-content-between align-items-center col-md-6">
                            <p>{menu.item}</p>
                            <span className="btn-success">{"$"+ menu.price}</span>
                        </li>
                    </ul>
                </div>
                
                )
            })
            return(
                <div>
                {order}
                <EnviarOrden orden={this.props.orden} />
                </div>
        )
    }
}

export default Comanda;
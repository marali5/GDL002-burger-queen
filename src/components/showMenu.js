import React, {Component} from 'react';
import MenuData from './menu.json';
import Comanda from '../components/orden';



class MenuList extends Component{

		constructor(props){
			super(props);
			this.state = {
			   orders:[],
			   total:0
			}; 
			this.submit=this.submit.bind (this);
			this.sumaTotal=this.sumaTotal.bind(this);      
	};
	
	submit = (menu) => {
		   const order = {
		   "item": menu.Name,
		   "price": menu.Price
		 }
	 this.setState({
		 orders:[...this.state.orders,order]
	 });
	};	

	sumaTotal (){
		const priceArr=this.state.orders.map((el)=> el.price)
		console.log(this.state.orders)
		const items=priceArr.reduce((sum,result)=>{
			return sum + result;
		}, 0);
		this.setState({
			total:items
		});
	};

	render (){
		console.log(this.state.total);
	//	console.log(this.state.orders)
		return (
			<div className="container">
				<div className= "row">
					<div className= "col">
					<div className="col">Name<input id="nombre"></input></div>
						<div className="list-group col-md-12">{MenuData.map((MenuDetail,index)=>
									<button onClick={() => {this.submit(MenuDetail)}}>
										<div key={index}>
											<h3 className="card-title">{MenuDetail.Name}</h3>
											<p className="card-info card-overdue">{MenuDetail.Sabores}</p>
											<h4 className="card-price right">{MenuDetail.Price}</h4>
										</div>
									</button>
									
							)
							
						}
					
						</div>
					</div>
					<div className="col">
	
					<Comanda orden={this.state.orders}/>
					
					<button onClick={this.sumaTotal}>Total: ${this.state.total}</button>
					</div>
				</div>
			</div>
		);
	}
}

export default MenuList;
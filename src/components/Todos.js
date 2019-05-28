import React, {Component} from 'react';
import firebase from '../FirestoreConfig'; 



export default class Todos extends Component{
    state = {
        items:[]
    }
    componentDidMount(){
         let db = firebase.firestore();
        db.collection('todos').onSnapshot((snapShots)=>{
            this.setState({
                items:snapShots.docs.map(doc=>{
                    return{id:doc.id,data:doc.data()}
                   
                })
            })
    
        
    }, error=>{console.error();
    });
};

deleteItem=(id)=>{
    let db = firebase.firestore();
    db.collection("todos").doc(id).delete();
}
    
    render(){
        const {items}= this.state;
        
        return(
            <div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Alimento</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody>
      {items &&items!==undefined ? items.map((item,key)=>(
<tr key={key}>
    
    <td>{item.data.name}</td>
    <td>{item.data.item}</td>
    <td><button onClick={()=>this.deleteItem(item.id)}>Eliminar</button></td>
</tr>
      )):null}
  </tbody>
  </table>
            </div>
        )
    }
}


import React, { Component } from 'react'
import firebase from 'firebase'; 

class enviarOrden extends Component {
    constructor() {
        super()
        this.state = {
            item:'',
            data: []
        };
    }

updateInput = e => {
    this.setState({
        [e.target.item]:e.target.value
    });
}

addData = () => {
    console.log(this.props)
        let db = firebase.firestore();
            db.collection('todos').add({
                orden: this.props.orden,
                date: new Date(),
              })
                .then((docRef) => {
                  console.log('Document written with ID: ', docRef.id);
                })
                .catch(function(error) {
                  console.error('Error adding document: ', error);
                }); 
};


    render (){
       return(
           <div>
               <button onClick={this.addData}>Enviar</button>
           </div>
       )
    }
}

export default enviarOrden;
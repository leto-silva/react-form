import React, { Component } from 'react';

class MyForm2 extends Component{

    constructor(props){
       super(props);

       this.inputName = React.createRef();
       this.handleSubmit = this.handleSubmit.bind(this);
    }   

    handleSubmit(event){
        console.log(this.inputName.current.value);
        event.preventDefault();
    }

    render(){

          return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name"  ref={this.inputName}/>
                    </label>
                    <input type="submit" name="enviar" />
                </div>
               
            </form>
        )
    }
}

export default MyForm2;
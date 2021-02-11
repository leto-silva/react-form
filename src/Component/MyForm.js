import React, { Component } from 'react';

class MyForm extends Component{

    constructor(props){
       super(props);

       this.state = {
           name: 'ABC',
           fruit: 'orange',
           message: ''
       }

       this.fruits = [
           {name: 'apple' , value: 'Apple'},
           {name: 'banana', value: 'Banana'},
           {name: 'orange', value: 'Orange'},
       ]

       this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){

        const target = event.target,
            value = target.type === 'checkbox' ? target.checked : target.value,
            name = target.name;

        this.setState({
            [name]: value
        })
    }

    render(){

        const { state } = this;

        return(
            <form>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name"  value={state.name} onChange={this.handleChange} />
                    </label>
                </div>
                <div>  
                    <label>
                        Fruit:
                        <select name="fruit" value={state.fruit} onChange={this.handleChange}>
                            { 
                                this.fruits.map(fruit => <option value={fruit.value}>{fruit.name}</option>)
                            }
                        </select>
                    </label>
                </div>
                <div>    
                    <label>
                        Message:
                        <textarea name="message" value={state.message} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" name="enviar" />
                </div>    
            </form>
        )
    }
}

export default MyForm;
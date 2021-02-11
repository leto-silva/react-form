import { Component } from 'react';
import './App.css';
import MyForm from './Component/MyForm';
import MyForm2 from './Component/MyForm2';

class App extends Component {

  render(){

    return(
      <div>
        <div>
          <MyForm />
        </div>
        <hr/>
        <div>  
          <MyForm2 />
        </div>
     </div> 
    )
   
  }
}

export default App;

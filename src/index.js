import React,{Component} from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Link } from "react-router-dom";
import ne from "../src/db.json"
import Newss from "../src/Components/news"

class App extends Component{
      state={
        newss:ne,
        fnews:[]
      }
   getKey = (event) => {
    let word=event.target.value;
    console.log(word);
  
    let filtred = this.state.newss.filter((item)=>
      {
        return item.title.indexOf(word) > -1
      });
     

    this.setState({
      fnews:filtred
    });
}
  render(){
    return (
    <div>
      <BrowserRouter>
      <Route path="/news" render={()=>(<Newss keyWord={this.getKey} n={this.state.fnews.length===0 ? this.state.newss : this.state.fnews} />)}/>
     </BrowserRouter>
  </div>   );
  }
}

ReactDOM.render(
  
    <App />,
    
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

import React,{Component} from 'react';
import "../css/style.css"
import { BrowserRouter, Route, Link } from "react-router-dom";

class Header extends Component{
    render()
   
    {
   
    return (
        <header className="header">
            Hello From Header
            <br/>
            <input  type="text"
            onChange={this.props.keyWord}
            />
            <br/>
            <Link to="/">Home</Link>
        </header>
    )
    }

    

}
export default Header;
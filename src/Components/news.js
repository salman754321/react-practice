import Header from '../Components/header'
import NewsList from "../Components/news-List"
import React,{Component} from "react"

class news extends Component{
render(){
    return ( 
    <div>
        <Header keyWord={this.props.keyWord}/>
        <NewsList new={this.props.n} />
      </div>)
}
}


export default news;
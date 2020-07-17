import React,{Component} from 'react';
import NewsItem from "../Components/News-Items"

class NewsList extends Component{
render(){
   

    const items=this.props;
    console.log(this.props)
    const item=items.new.map((itemss)=>{
        return (
            <NewsItem  itemq={itemss}/>
        )
    });
     return (
         <div>
            {item}
        </div>
     )
  
}
}

export default NewsList;
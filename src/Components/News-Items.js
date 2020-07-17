import React,{Component} from 'react';
import "../css/style.css"

class NewsItem extends Component{
    render(){
       
        return (
        <div className="newsitem">
            <h1 className="heading">{this.props.itemq.title}</h1>
             <div className="feed">{this.props.itemq.feed}</div>
        </div>
        )
    }

    
}

export default NewsItem;
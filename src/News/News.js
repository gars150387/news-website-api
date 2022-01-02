import { render } from '@testing-library/react';
import React, {Component} from 'react'
// import { NewSingle } from './NewSingle'

class News extends Component{
    constructor(props){
        super(props);
        this.state = {
            news: []
        }
    }
};

function renderItems() {
    return this.props.items.map((item)=>{
        <NewSingle key={item.id} item={item} />
    });
};

function render(){
    return (
        <ul>
            {this.renderItems()}
        </ul>
    )
}

export default News;
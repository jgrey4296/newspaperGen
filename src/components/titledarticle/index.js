import { h, Component } from 'preact';
import React from 'react'; //aliased, for proptypes
import style from './style';
import ColumnBox from '../columnbox';

export default class TitleArticle extends Component {
    //snippet::proptypes

    constructor(props){
        super(props);
        //modify with this.setState
        this.state = {
            
        };

        //if necessary, bind methods
        //this.aFunc = this.aFunc.bind(this)
    }

    //Don't forget to destructure:
    render({title,children}, state){
        return (
                <div class={style.mainArticle}>
                <h1 class={style.articleTitle}>{title}</h1>
                <ColumnBox value="main">
                {children}
            </ColumnBox>
                <div class={style.hline}></div>
                </div>
        );
    }


}

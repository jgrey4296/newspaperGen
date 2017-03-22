import { h, Component } from 'preact';
import React from 'react'; //aliased, for proptypes
import style from './style';

export default class ColumnBox extends Component {
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
    render({children}, state){
        return (
                <div className={style.columnizedBox}>
                {children}
            </div>
                
        );
    }


}

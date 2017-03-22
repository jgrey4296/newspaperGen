import { h, Component } from 'preact';
import React from 'react'; //aliased, for proptypes
import style from './style';
import _ from 'lodash';
import loremipsum from 'lorem-ipsum';
import loremtemplate from 'loremtemplate';

export default class SubArticle extends Component {
    //snippet::proptypes

    constructor(props){
        super(props);
        //modify with this.setState
        this.state = {
            
        };

        //if necessary, bind methods
        //this.aFunc = this.aFunc.bind(this)
    }

    names = [
        "Barbara Thropewood",
        "Kinglsey Armlet",
        "Bob Griddle",
        "Elanor Fidget"
    ];
    
    //Don't forget to destructure:
    render({ title }, state){
        let name = _.sample(this.names);
        return (
            <span>
            <div className={style.wrapper}>
            <h2>{title}</h2>
            <h4> by {name}</h4>
            </div>
            <div className={style.text}>
            {loremipsum(loremtemplate)}
            <div className={style.hline_light} />
            </div>
            </span>
        );
    }


}

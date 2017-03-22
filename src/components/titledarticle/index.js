import { h, Component } from 'preact';
import React from 'react'; //aliased, for proptypes
import style from './style';
import ColumnBox from '../columnbox';
import loremipsum from 'lorem-ipsum';
import loremtemplate from 'loremtemplate';
import _ from 'lodash';

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
    render({title, lede, quotes}, state){
        let picture = (
            <div style="display:block; page-break-inside: avoid">
            <div class={style.hline} />
            <img src="assets/8eye.png" alt="There should be an image here"/>
            <div class={style.hline} />
            </div>
        ),
            quoteHeadings = quotes.map(d=><h3>{d}</h3>),
            loremParagraphs = _.fill(Array(quotes.length + 1),0).map(d=><div className={style.text}>{loremipsum(loremtemplate)}</div>),
            interleaved = _.flatten(_.zip(loremParagraphs,quoteHeadings));
        //add the picture in somewhere in the story
        interleaved.splice(_.random(interleaved.length),0,picture);
        
        
        return (
                <div className={style.mainArticle}>
                <h1>{title}</h1>
                <h4> by Moist Von Lipwig </h4>
                <ColumnBox value="main">
                <h2>{lede}</h2>
                {interleaved}
            </ColumnBox>
                <div className={style.hline}></div>
                </div>
        );
    }


}

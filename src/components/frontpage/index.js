import { h, Component } from 'preact';
import React from 'react'; //aliased, for proptypes
import style from './style';
import loremipsum from 'lorem-ipsum';
import ColumnBox from '../columnbox';
import TitledArticle from '../titledarticle';

export default class FrontPage extends Component {
    //snippet::proptypes

        loremTemplate = {
            count: 3,
            units: 'paragraphs',
            sentenceLowerBound: 5,
            sentenceUpperBound: 15,
            paragraphLowerBound: 3,
            paragraphUpperBound: 7,
            format: 'plain',
            suffix: null
        };
    
    constructor(props){
        super(props);
        //modify with this.setState
        this.state = {
            
        };

        //if necessary, bind methods
        //this.aFunc = this.aFunc.bind(this)
    }

    genMainAndArticles() {
        return (
            <span>
            <TitledArticle title="Patrician Accused of Murder">
            <h2>Found Unconscious With A Bloody Dagger</h2> 
            <div class={style.text}>{loremipsum(this.loremTemplate)}</div>
            <h3>"I saw nuffink" Says Street Urchin (age 12)</h3>
            <div class={style.text}>{loremipsum(this.loremTemplate)}</div>
            </TitledArticle>
            <div class={style.divLine}/>
            <ColumnBox>
            {this.genSubArticle()}
            {this.genSubArticle()}
            {this.genSubArticle()}
            </ColumnBox>
            </span>
        );
    }

    genSubArticle(){
        return (
            <span>
            <h2>Man Bites Dog</h2>
            <div class={style.text}>
                {loremipsum(this.loremTemplate)}
                <div class={style.hline_light} />
            </div>
            </span>
        );
    }
    
    
    //Don't forget to destructure:
    render(props, state){
        return (
            <div class={style.frontpage}>
            {this.genMainAndArticles()}
            </div>
        );
    }
}

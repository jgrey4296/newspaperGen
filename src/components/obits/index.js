import { h, Component } from 'preact';
import React from 'react'; //aliased, for proptypes
import style from './style';
import ColumnBox from '../columnbox';
import _ from 'lodash';
import SubArticle from '../subarticle';

export default class Obits extends Component {
    //snippet::proptypes

    constructor(props){
        super(props);
        //modify with this.setState
        this.state = {
            
        };

        //if necessary, bind methods
        //this.aFunc = this.aFunc.bind(this)
    }

    titles = [
        "Lord Selachi, Dead at 60",
        "Mrs Windingthorpe, Leaves everything to her cats"
    ];

    
    //Don't forget to destructure:
    render(props, state){
        //add a title,
        //then a columnbox of a bunch of obits. Name, Age...
        let num = 3+ _.random(3),
            subarticles = _.fill(Array(5),0).map((d)=><SubArticle title={_.sample(this.titles)}/>);
        return (
                <div className={style.obituaries}>
                <h1>Obituaries</h1>
                <ColumnBox>
                {subarticles}
            </ColumnBox>
            </div>
        );
    }


}

import { h, Component } from 'preact';
import React from 'react'; //aliased, for proptypes
import style from './style';
import _ from 'lodash';
import ColumnBox from '../columnbox';
import SubArticle from '../subarticle';

export default class Sports extends Component {
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
        "Grouchy Street Lads Beat Nobbin Clout 5-2",
        "Troll Team get into brawl with Dwarf Spectator"
    ];
    
    //Don't forget to destructure:
    render(props, state){
        let articles = _.fill(Array(3+_.random(3)),0).map((d)=><SubArticle title={_.sample(this.titles)}/>);
        
        //similar to front page, pictures, names of games, scores. money.
        return (
                <div className={style.sports}>
                <h1>Sport Results</h1>
                <ColumnBox>
                {articles}
            </ColumnBox>
            </div>
        );
    }


}

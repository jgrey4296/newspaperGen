import { h, Component } from 'preact';
import React from 'react'; //aliased, for proptypes
import style from './style';
import loremipsum from 'lorem-ipsum';
import loremtemplate from 'loremtemplate';
import ColumnBox from '../columnbox';
import TitledArticle from '../titledarticle';
import _ from 'lodash';
import SubArticle from '../subarticle';

export default class FrontPage extends Component {
    //snippet::proptypes

    
    constructor(props){
        super(props);
        //modify with this.setState
        this.state = { };

        //if necessary, bind methods
        //this.aFunc = this.aFunc.bind(this)
    }

    titles = [
        "Man Bites Dog",
        "Robbery at Thieves Guild",
        "Senior Fools Guild Member Commits Suicide",
        "Another Barbarian Invasion?"
    ];

    
    genMainAndArticles() {
        let subarticles = _.fill(Array(4),0).map((d)=><SubArticle title={_.sample(this.titles)}/>);
        
        return (
            <span>
            <TitledArticle title="Patrician Accused of Murder" lede="Found Unconscious with a Bloody Dagger" quotes={['"I saw nuffink" says Street Urchin (about age 12)']} />
            <div className={style.divLine}/>
            <ColumnBox>
                {subarticles}
            </ColumnBox>
            </span>
        );
    }
    
    //Don't forget to destructure:
    render(props, state){
        return (
            <div className={style.frontpage}>
            {this.genMainAndArticles()}
            </div>
        );
    }
}

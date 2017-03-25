import { h, Component } from 'preact';
import React from 'react'; //aliased, for proptypes
import style from './style';
import loremipsum from 'lorem-ipsum';
import loremtemplate from 'loremtemplate';
import ColumnBox from '../columnbox';
import TitledArticle from '../titledarticle';
import _ from 'lodash';
import SubArticle from '../subarticle';
import tracery from 'tracery-grammar';

export default class FrontPage extends Component {
    //snippet::proptypes

    
    constructor(props){
        super(props);
        //modify with this.setState
        this.state = { };
        this.grammar = tracery.createGrammar({
            creature : "Man Dog Cat Demon Werewolf Vampire Ghoul Zombie Aristocrat Lawyer".split(' '),
            crime : "Murder Theft Robbery Mugging Assault Corruption Graft Insanity".split(' '),
            guild : 'Thieves Assassins Bakers Seamstresses Musicians'.split(' '),
            guildhall : '#guild# Guild',
            temple : "Small Gods",
            location: "#guildhall# Palace #temple#".split(' '),
            title : [
                "#creature# bites #creature#",
                '#crime# at #location#',
                'Senior Fools Guild Member Commits Suicide',
                'Another Barbarian Invasion?'
            ],
        });

        
        //if necessary, bind methods
        //this.aFunc = this.aFunc.bind(this)
    }

    genMainAndArticles() {
        let subarticles = _.fill(Array(4),0).map((d)=><SubArticle title={this.grammar.flatten('#title#')}/>);
        
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

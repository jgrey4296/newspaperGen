import { h, Component } from 'preact';
import { Link } from 'preact-router';
import React from 'react'; //aliased, for proptypes
import style from './style';

export default class Header extends Component {
    //snippet::proptypes

    constructor(props){
        super(props);
        //modify with this.setState
        this.state = {
            
        };

        //if necessary, bind methods
        //this.aFunc = this.aFunc.bind(this)
    }

    genTitle(){
        return "The Ankh-Morpork Times";
    }

    genQuote(){
        return "The Truth Shall Make Yee Fret";
    }
    
    genDate(){
        return "4th Grune, Century of the Fruitbat.";
    }

    genCost(){
        return <span className={style.cost}>$0 3p</span>;
    }
    
    //Don't forget to destructure:
    render(props, state){
        return (
                <header>
                <div className={style.vline}><h1>{this.genTitle()}</h1></div>
                <h2>{this.genQuote()}</h2>
                <div className={style.wrapper_head}>
            <div className={style.navBox}>
                <h3>{this.genDate()}{this.genCost()}</h3>
                <nav>
                <Link href="/">Front Page</Link>
                <Link href="/obits/">Obituaries</Link>
                <Link href="/ads/">Advertisements</Link>
                <Link href="/sports/">Sport Results</Link>
            </nav>
                </div>
                </div>
            <div className={style.divLine} />
            <div className={style.divLine} />
            </header>
        );
    }


}

import { h, Component } from 'preact';
import React from 'react'; //aliased, for proptypes
import style from './style';
import _ from 'lodash';
import ColumnBox from '../columnbox';

export default class Ads extends Component {
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
    render(props, state){
        let ads = _.fill(Array(3+_.random(3)),0).map((d)=><div>This will be an advert</div>);
        
        //title, column box of separated boxes, hlines, vlines, content, images..
        return (
                <div className={style.ads}>
                <ColumnBox>
                {ads}
            </ColumnBox>
            </div>
        );
    }


}

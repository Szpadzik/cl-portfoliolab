import React, {Component} from 'react';
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeMainSection from "./HomeMainSection";
import Columns from "./columnsSection";

export default class Home extends Component {
    render() {
        return (

            <div className="container">
                <HomeHeader/>
                <HomeMainSection/>
                <Columns/>

            </div>
        );
    }
}
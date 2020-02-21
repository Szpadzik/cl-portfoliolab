import React, {Component} from 'react';
import HomeHeaderEntry from "./HomeHeaderEntry";
import HomeHeaderNav from "./HomeHeaderNav";

export default class HomeHeader extends Component {
    render() {
        return (
            <header className='header'>
                <HomeHeaderEntry entryActive ={this.props.entryActive}  />
                <HomeHeaderNav entryActive ={this.props.entryActive}/>
            </header>
        );
    }
}
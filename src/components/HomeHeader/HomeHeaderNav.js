import React, {Component} from "react";
import {Link} from 'react-scroll'
import {Link as LinkRouter} from "react-router-dom";
import HomeHeaderEntry from "./HomeHeaderEntry";

export default class HomeHeaderNav extends Component {
    state = {
        entryActive: this.props.entryActive,
        mobileMenu : false
    };


    componentWillMount() {
        document.addEventListener("mousedown", this.handleClickOutside, false)
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside, false)
    }
    handleClick = (e) => {
        document.querySelector('.header__panel.header__panel--nav').classList.add('active');
        this.setState({
            mobileMenu : true
        })
    };
    handleClickOutside = (e) => {
        if (this.node.contains(e.target)) {
        } else {
            document.querySelector('.header__panel.header__panel--nav').classList.remove('active');
            this.setState({
                mobileMenu : false
            })
        }
    };
    hideMenu = ()=>{
        document.querySelector('.header__panel.header__panel--nav').classList.remove('active');
    };
    render() {

        if (!this.state.entryActive) {
            return (
                <>
                    <div onClick={this.handleClick} className="header__burger">
                        <i className="material-icons">
                            menu
                        </i>
                    </div>
                    <div className='header__panel header__panel--nav' ref={node => this.node = node}>
                        <nav className="header__panel-nav">
                            <ul className='panel-nav__list'>
                                <i onClick={this.hideMenu} className="material-icons menu__open">
                                    menu_open
                                </i>
                                {this.state.mobileMenu ? <HomeHeaderEntry entryActive={this.props.entryActive}/> : null}
                                <Link onClick={this.hideMenu} smooth={true} to='' className='panel-nav__list--item active'>Start</Link>
                                <Link onClick={this.hideMenu} smooth={true} to='columns' className='panel-nav__list--item'>O co chodzi?</Link>
                                <Link onClick={this.hideMenu} smooth={true} to='aboutUs' className='panel-nav__list--item'>O nas</Link>
                                <Link onClick={this.hideMenu} smooth={true} to='whoWeHelp' className='panel-nav__list--item'>Fundacja i
                                    organizacje</Link>
                                <Link smooth={true} to='' className='panel-nav__list--item'>Kontakt</Link>
                            </ul>
                        </nav>
                    </div>
                </>
            )
        } else {
            return (
                <>
                <div onClick={this.handleClick} className="header__burger">
                    <i className="material-icons">
                        menu
                    </i>
                </div>
                <div className='header__panel header__panel--nav' ref={node => this.node = node}>
                    <nav className="header__panel-nav">
                        <ul className='panel-nav__list'>
                            <i onClick={this.hideMenu} className="material-icons menu__open">
                                menu_open
                            </i>
                            {this.state.mobileMenu ? <HomeHeaderEntry entryActive={this.props.entryActive}/> : null}
                            <LinkRouter onClick={this.hideMenu} style={{'textDecoration': 'none'}} to='/'
                                        className='panel-nav__list--item'>Start</LinkRouter>
                            <LinkRouter onClick={this.hideMenu} style={{'textDecoration': 'none'}} to='/'
                                        className='panel-nav__list--item '>O co chodzi?</LinkRouter>
                            <LinkRouter onClick={this.hideMenu} style={{'textDecoration': 'none'}} to='/'
                                        className='panel-nav__list--item '>O nas</LinkRouter>
                            <LinkRouter onClick={this.hideMenu} style={{'textDecoration': 'none'}} to='/'
                                        className='panel-nav__list--item '>Fundacja i
                                organizacje</LinkRouter>
                            <LinkRouter onClick={this.hideMenu} style={{'textDecoration': 'none'}} to='/'
                                        className='panel-nav__list--item '>Kontakt</LinkRouter>
                        </ul>
                    </nav>
                </div>
                    </>
            )
        }
    }
}

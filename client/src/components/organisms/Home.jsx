import React, { Component } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from '../molecules/home/Header'
import Section from '../molecules/home/Section'

export default class Home extends Component {
    render() {
        return (
            <div className="container-home">
                <ParallaxProvider>
                    <Header />
                    <Section />
                </ParallaxProvider>
            </div>
        )
    }
}

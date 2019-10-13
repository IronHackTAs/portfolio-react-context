import React, { Component } from 'react'
import Header from '../molecules/home/Header'
import Section from '../molecules/home/Section'

export default class Home extends Component {
    render() {
        return (
            <div className="container-home">
                <Header />
                <Section />
            </div>
        )
    }
}

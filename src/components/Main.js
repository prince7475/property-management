import React, { Component } from 'react'
import Navbar from './Pages/nav/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
export default class Main extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                </Router>
            </div>
        )
    }
}

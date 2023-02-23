import React, { Component } from 'react'
import AppForm from './AppForm'
import AppNav from './AppNav'
import AppCards from './AppCards'

class App extends Component {
    state = {
        cardsData: [],
    }

    addInfo = (props) => {
        const cardsData = [...this.state.cardsData, props]
        this.setState({
            cardsData,
        })
    }

    render () {
        return (
            
            <React.Fragment>
                <AppNav/> 
                <AppForm addInfo={this.addInfo}/>
                <AppCards cardsData={this.state.cardsData}/>
            </React.Fragment>
        )
    }
} 

export default App
import React from 'react'
import { Select, MenuItem } from '@material-ui/core';

import { CountrySummary, StateSummary, StateTimeline } from './components'
import statesList from './data/statesList'

import styles from './App.module.css'

class App extends React.Component {
    state = {
        selectedState: 'Karnataka'
    }

    handleStateChange = (e) => {
        this.setState({ selectedState: e.target.value })
    }

    render () {
        const { selectedState } = this.state
        return (
            <div className={styles.container}>
                <CountrySummary />
                <div className={styles.selectComponent}>
                <Select
                    onChange={this.handleStateChange}
                    value={selectedState}
                >
                    {statesList.map((stateName, index) => (
                        <MenuItem
                            key={index}
                            value={stateName}
                        >
                            {stateName}
                        </MenuItem>
                    ))}
                </Select>
                </div>
                <StateSummary
                    selectedState={selectedState}
                />
                <StateTimeline
                    selectedState={selectedState}
                />
            </div>
        )
    }
}

export default App

import React from 'react'
import { Select, MenuItem, Box, Typography } from '@material-ui/core';

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
            <Box className={styles.container}>
                <Box className={styles.heading}>
                    <Typography variant="h4" align="center" color="textPrimary">India Covid-19 Tracker</Typography>
                </Box>
                <CountrySummary />
                <Box className={styles.heading}>
                    <Typography variant="h4" align="center" color="textPrimary">State Stats</Typography>
                </Box>
                <Box className={styles.selectComponent}>
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
                </Box>
                <StateSummary
                    selectedState={selectedState}
                />
                <Box className={styles.heading}>
                    <Typography variant="h4" align="center" color="textPrimary">State Timeseries</Typography>
                </Box>
                <StateTimeline
                    selectedState={selectedState}
                />
            </Box>
        )
    }
}

export default App

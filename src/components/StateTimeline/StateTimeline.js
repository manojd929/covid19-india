import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core'

import Loader from '../Loader/Loader'
import LineGraph from './LineGraph'
import styles from './StateTimeline.module.css'
import { fetchStateTimeline } from '../../data/api'

const StateTimeline = ({ selectedState }) => {
    const [data, setData] = useState(selectedState)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData () {
            const result = await fetchStateTimeline(selectedState)
            setData(result)
            setLoading(false)
        }
        setLoading(true)
        fetchData()
    }, [selectedState])

    if (loading) {
        return (
            <Loader />
        )
    }
    return (
        <Box className={styles.container}>
            <LineGraph
                data={data}
            />
        </Box>
    )
}

export default StateTimeline

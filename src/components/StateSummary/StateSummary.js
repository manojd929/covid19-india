import React, { useEffect,  useState } from 'react'
import { Box, Typography } from '@material-ui/core'

import { fetchStateSummary } from '../../data/api'
import BarGraph from './BarGraph'
import Loader from '../Loader/Loader'
import styles from './StateSummary.module.css'

const StateSummary = ({ selectedState }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        async function fetchData() {
            const result = await fetchStateSummary(selectedState)
            setData(result)
            setLoading(false)
        }
        fetchData()
    }, [selectedState])

    if (loading) {
        return (
            <Loader />
        )
    }

    return (
        <Box className={styles.container}>
            <Typography variant="h6" color="textPrimary">Total: {data[0].Total}</Typography>
            <BarGraph
                data={data}
            />
        </Box>
    )
}

export default StateSummary

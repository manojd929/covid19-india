import React, { useState, useEffect } from 'react'
import { Box, Grid, Card, CardContent, Typography } from '@material-ui/core'

import styles from './CountrySummary.module.css'
import Loader from '../Loader/Loader'
import { fetchCountrySummary } from '../../data/api'

const CountrySummary = () => {
    const [summary, setSummary] = useState({
        confirmed: 0,
        death: 0,
        cured: 0,
        total: 0
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData () {
            const data = await fetchCountrySummary()
            setSummary(data)
            setLoading(false)
        }
        setLoading(true)
        fetchData()
    }, [])

    if (loading) {
        return (
            <Loader />
        )
    }

    return (
        <Box color="text.primary" className={styles.container}>
            <Grid container spacing={3} justify="center" className={styles.cardcontainer}>
                <Grid item md={2.5} component={Card} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4">Total Cases</Typography>
                        <Typography variant="h6">{summary.total}</Typography>
                    </CardContent>
                </Grid>
                <Grid item md={2.5} component={Card} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4">Active</Typography>
                        <Typography variant="h6">{summary.confirmed}</Typography>
                    </CardContent>
                </Grid>
                <Grid item md={2.5} component={Card} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4">Recovered</Typography>
                        <Typography variant="h6">{summary.cured}</Typography>
                    </CardContent>
                </Grid>
                <Grid item md={2.5} component={Card} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4">Deaths</Typography>
                        <Typography variant="h6">{summary.death}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CountrySummary

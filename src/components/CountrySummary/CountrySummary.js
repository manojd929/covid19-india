import React, { useState, useEffect } from 'react'
import { fetchCountrySummary } from '../../data/api'
import styles from './CountrySummary.module.css'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'

const CountrySummary = () => {
    const [summary, setSummary] = useState({
        confirmed: 0,
        death: 0,
        cured: 0,
        total: 0
    })

    useEffect(() => {
        async function fetchData () {
            const data = await fetchCountrySummary()
            setSummary(data)
        }
        fetchData()
    }, [])

    if (!summary.total) {
        return 'Loading...'
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={12} justify="center">
                <Grid item md={3} component={Card} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4">Total Cases</Typography>
                        <Typography variant="h6">{summary.total}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid container spacing={3} justify="center">
                <Grid item md={3} component={Card} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4">Deaths</Typography>
                        <Typography variant="h6">{summary.death}</Typography>
                    </CardContent>
                </Grid>
                <Grid item md={3} component={Card} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4">Active cases</Typography>
                        <Typography variant="h6">{summary.confirmed}</Typography>
                    </CardContent>
                </Grid>
                <Grid item md={3} component={Card} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4">Recovered</Typography>
                        <Typography variant="h6">{summary.cured}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default CountrySummary

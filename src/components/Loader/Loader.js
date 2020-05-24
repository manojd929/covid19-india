import React from 'react'
import { Box, CircularProgress } from '@material-ui/core'
import styles from '../Loader/Loader.css'

const Loader = () => {
    return (
        <Box className={styles.container}>
            <CircularProgress />
        </Box>
    )
}

export default Loader;


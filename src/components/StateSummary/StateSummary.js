import React, { useEffect,  useState } from 'react'
import styles from './StateSummary.module.css'
import BarGraph from './BarGraph'
import { fetchStateSummary } from '../../data/api'

const StateSummary = ({ selectedState }) => {
    const [data, setData] = useState(selectedState)

    useEffect(() => {
        async function fetchData() {
            const result = await fetchStateSummary()
            setData(result)
        }
        fetchData()
    }, [selectedState])

    return (
        <div className={styles.container}>
            <BarGraph
                data={data}
            />
        </div>
    )
}

export default StateSummary

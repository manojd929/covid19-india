import React, { useEffect,  useState } from 'react'
import styles from './StateTimeline.module.css'
import LineGraph from './LineGraph'
import { fetchStateTimeline } from '../../data/api'

const StateTimeline = ({ selectedState }) => {
    const [data, setData] = useState(selectedState)

    useEffect(() => {
        async function fetchData() {
            const result = await fetchStateTimeline()
            setData(result)
        }
        fetchData()
    }, [selectedState])

    return (
        <div className={styles.container}>
            <LineGraph
                data={data}
            />
        </div>
    )
}

export default StateTimeline

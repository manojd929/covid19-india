import axios from 'axios'

const COUNTRY_SUMMARY_URL = 'https://covid19-india-adhikansh.herokuapp.com/states'
const STATE_SUMMARY_URL = 'https://covid19-india-adhikansh.herokuapp.com/state/'
const STATE_TIMELINE_URL = 'http://covid-india-cases.herokuapp.com/statetimeline/'

const axiosConfig = {
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
}
export const fetchCountrySummary = async () => {
    try {
        const { data: { state } } = await axios(COUNTRY_SUMMARY_URL, axiosConfig);
        let result = {
            confirmed: 0,
            cured: 0,
            death: 0,
            total: 0
        };
        result = state.reduce((acc, s) => ({
            confirmed: s.confirmed + acc.confirmed,
            cured: s.cured + acc.cured,
            death: s.death + acc.death,
            total: s.total + acc.total
        }), result);
        return result
    } catch (err) {
        console.error(err)
        return null
    }
}

export const fetchStateSummary = async (state = 'Karnataka') => {
    try {
        const API_URL = encodeURI(STATE_SUMMARY_URL + state);
        const { data: { data } } = await axios(API_URL, axiosConfig)
        return data[0]
    } catch (err) {
        console.error(err)
        return null
    }
}

export const fetchStateTimeline = async (state = 'Karnataka') => {
    try {
        const { data } = await axios(STATE_TIMELINE_URL, axiosConfig)
        let result = data.filter((stateData) => {
            if (stateData['State UT'] === state) {
                delete stateData['State UT']
                return true
            }
            return false
        })
        return result
    } catch (err) {
        console.error(err)
        return null
    }
}


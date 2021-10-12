import axios from "axios"

// https://api.spacexdata.com/v4/launches
// https://api.spacexdata.com/v4/rockets

const BASE = "https://api.spacexdata.com"
const VERSION = "v4"
const LAUNCHES = "launches"
const ROCKETS = "rockets"

export const getAllLaunches = () => {
    return axios.get(`${BASE}/${VERSION}/${LAUNCHES}`)
}

export const getRocketById = (id) => {
    return axios.get(`${BASE}/${VERSION}/${ROCKETS}/${id}`)
} 

export const getAllRockets = () => {
    return axios.get(`${BASE}/${VERSION}/${ROCKETS}`)
}
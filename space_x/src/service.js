import axios from "axios"

// https://api.spacexdata.com/v4/launches
// https://api.spacexdata.com/v4/rockets

const BASE = "https://api.spacexdata.com"
const VERSION = "v4"
const LAUNCHES = "launches"
const ROCKETS = "rockets"

export const getAllLaunches = () => axios.get(`${BASE}/${VERSION}/${LAUNCHES}`)

export const getRocketById = (id) => axios.get(`${BASE}/${VERSION}/${ROCKETS}/${id}`)

export const getAllRockets = () => axios.get(`${BASE}/${VERSION}/${ROCKETS}`)

export const getAllUsers = () => axios.get(`https://my-spacex-project.herokuapp.com/users`)

export const postUser = (username, email, password) => axios.post(`https://my-spacex-project.herokuapp.com/users`, { username, email, password })

// export const getVotes = () => axios.get(`http://localhost:3005/voteCount`)
// export const postVotes = (id, count) => axios.post(`http://localhost:3005/voteCount`, { id, count })

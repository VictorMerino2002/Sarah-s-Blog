import axios from 'axios'

const postApi = axios.create({
    baseURL: 'http:localhost:8000/api/'
})

export const getAllTourismPosts = () => postApi.get('/')

export const getTourismPost = (id) => postApi.get(`/${id}`)

export const createTourismPost = ({location, content}) => {
    const date = new Date()
    postApi.post('/',{location, date, content})
}

export const deleteTourismPost = (id) => postApi.delete(`/${id}`)

export const updateTourismPost = ({id, location, content}) => {
    const date = new Date()
    postApi.put(`/${id}/`, {location, date, content})
}
import axios from 'axios'

const tourismApi = axios.create({
    baseURL: 'http://localhost:8000/api/tourism/posts/'
})

export const getAllPosts = () => tourismApi.get('/')

export const getPost = (id) => tourismApi.get(`/${id}`)

export const createPost = ({location, content}) => {
    const date = new Date()
    tourismApi.post('/',{location, date, content})
}

export const deletePost = (id) => tourismApi.delete(`/${id}`)

export const updatePost = ({id, location, content}) => {
    const date = new Date()
    tourismApi.put(`/${id}/`, {location, date, content})
}
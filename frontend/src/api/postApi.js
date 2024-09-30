import axios from 'axios'

const tourismApi = axios.create({
    baseURL: 'http://localhost:8000/api/tourism/posts/'
})

tourismApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Token ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export const getAllPosts = () => tourismApi.get('/')

export const getPost = (id) => tourismApi.get(`/${id}/`)

export const createPost = ({location, content}) => {
    const date = new Date()
    return tourismApi.post('/',{location, date, content})
}

export const deletePost = (id) => tourismApi.delete(`/${id}/`)

export const updatePost = ({id, location, content}) => {
    const date = new Date()
    return tourismApi.put(`/${id}/`, {location, date, content})
}

const tokenApi = axios.create({
    baseURL: 'http://localhost:8000/api/token/',
    headers : {'Content-Type': 'application/json',}
})

export const getToken = async ({username, password}) => tokenApi.post('/', {username, password})
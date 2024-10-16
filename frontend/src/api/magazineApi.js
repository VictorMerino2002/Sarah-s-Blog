import axios from 'axios'

const magazineApi = axios.create({
    baseURL: 'http://localhost:8000/api/magazines/'
})

magazineApi.interceptors.request.use(
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

export const getAllMagazine = () => magazineApi.get('/')

export const getMagazine = (id) => magazineApi.get(`/${id}/`)

export const createMagazine = ({ title, content }) => {
    const formData = new FormData()
    formData.append('title', title) 
    formData.append('date', new Date().toISOString()) 
    formData.append('content', content) 

    return magazineApi.post('/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data' 
        }
    })
}

export const deleteMagazine = (id) => magazineApi.delete(`/${id}/`)

export const updateMagazine = ({ id, title, content }) => {
    const formData = new FormData()
    formData.append('title', title) 
    formData.append('date', new Date().toISOString()) 
    formData.append('content', content) 

    return magazineApi.put(`/${id}/`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

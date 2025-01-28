import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'http://localhost:8000/api/journal/'
})

journalApi.interceptors.request.use(
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

export const getAllMagazine = () => journalApi.get('/')

export const getMagazine = (id) => journalApi.get(`/${id}/`)

export const createMagazine = ({ title, content }) => {
    const formData = new FormData()
    formData.append('title', title) 
    formData.append('date', new Date().toISOString()) 
    formData.append('content', content) 

    return journalApi.post('/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data' 
        }
    })
}

export const deleteMagazine = (id) => journalApi.delete(`/${id}/`)

export const updateMagazine = ({ id, title, content }) => {
    const formData = new FormData()
    formData.append('title', title) 
    formData.append('date', new Date().toISOString()) 
    formData.append('content', content) 

    return journalApi.put(`/${id}/`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

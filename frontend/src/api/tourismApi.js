import axios from 'axios'

const tourismApi = axios.create({
    baseURL: 'http://localhost:8000/api/tourism/'
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

export const getAllMagazine = () => tourismApi.get('/')

export const getMagazine = (id) => tourismApi.get(`/${id}/`)

export const createMagazine = ({ title, content }) => {
    const formData = new FormData()
    formData.append('title', title) 
    formData.append('date', new Date().toISOString()) 
    formData.append('content', content) 

    return tourismApi.post('/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data' 
        }
    })
}

export const deleteMagazine = (id) => tourismApi.delete(`/${id}/`)

export const updateMagazine = ({ id, title, content }) => {
    const formData = new FormData()
    formData.append('title', title) 
    formData.append('date', new Date().toISOString()) 
    formData.append('content', content) 

    return tourismApi.put(`/${id}/`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

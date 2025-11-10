import axiosInstance from "../../config/axios.config";

export const fetchCitiesApi = async () => {
    try {
        const response = await axiosInstance.get('/cities');
        return response.data;
    } catch (error) {
        return error;
    }
}

export const addCityApi = async (payload) => {
    try {
        const response = await axiosInstance.post('/add-city', payload);
        return response;
    } catch (error) {
        return error;
    }
}
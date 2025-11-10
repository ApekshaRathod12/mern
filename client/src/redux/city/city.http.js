import axiosInstance from "../../config/axios.config";

export const fetchCitiesApi = async () => {
    try {
        const response = await axiosInstance.get('/cities');
        return response.data;
    } catch (error) {
        return error;
    }
}
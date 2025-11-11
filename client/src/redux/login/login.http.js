import axiosInstance from "../../config/axios.config";

export const loginApi = async (payload) => {
    try {
        const response = await axiosInstance.post('/login',payload);
        return response.data;
    } catch (error) {
        return error;
    }
}
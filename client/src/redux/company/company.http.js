import axiosInstance from "../../config/axios.config";

export const getCompaniesApi = async () => {
    try {
        const response = await axiosInstance.get('/companies');
        return response.data;
    } catch (error) {
        console.error();
        return error;
    }
}

export const addCompanyApi = async (payload) => {
    try {
        const response = await axiosInstance.post('/companies/add-company',payload);
        console.log(response);
        
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}
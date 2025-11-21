import axiosInstance from "../../config/axios.config";

export const getCompaniesListApi = async () => {
    try {
        const response = await axiosInstance.get('/companies/companies-list');
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}
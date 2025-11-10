import axios from 'axios';

const API_END_POINT = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const axiosInstance = axios.create({
    baseURL: `${API_END_POINT}/api`,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Get token from localStorage
        const token = localStorage.getItem('token');
        
        // If token exists, add it to headers
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Log requests in development
        // if (process.env.NODE_ENV === 'development') {
        //     console.log('Request:', {
        //         method: config.method?.toUpperCase(),
        //         url: config.url,
        //         data: config.data
        //     });
        // }

        return config;
    },
    (error) => {
        // Handle request errors
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // Log responses in development
        // if (process.env.NODE_ENV === 'development') {
        //     console.log('Response:', {
        //         status: response.status,
        //         data: response.data
        //     });
        // }

        // You can transform response data here if needed
        return response;
    },
    (error) => {
        // Handle different error scenarios
        if (error.response) {
            // Server responded with error status
            switch (error.response.status) {
                case 401:
                    // Unauthorized - clear local storage and redirect to login
                    localStorage.clear();
                    window.location.href = '/login';
                    break;
                
                case 403:
                    // Forbidden - redirect to home or show error message
                    console.error('Access Forbidden');
                    break;
                
                case 404:
                    // Not Found
                    console.error('Resource not found');
                    break;
                
                case 500:
                    // Server Error
                    console.error('Server error occurred');
                    break;
                
                default:
                    console.error('API Error:', error.response.data);
            }
        } else if (error.request) {
            // Request was made but no response received
            console.error('Network Error - No response received');
        } else {
            // Error in request configuration
            console.error('Request Config Error:', error.message);
        }

        // Show error notification (you can integrate with your notification system)
        // Example: toast.error(error.response?.data?.message || 'An error occurred');

        return Promise.reject(error);
    }
);

// Helper methods for common API calls
const api = {
    get: (url, config = {}) => axiosInstance.get(url, config),
    post: (url, data = {}, config = {}) => axiosInstance.post(url, data, config),
    put: (url, data = {}, config = {}) => axiosInstance.put(url, data, config),
    delete: (url, config = {}) => axiosInstance.delete(url, config),
    patch: (url, data = {}, config = {}) => axiosInstance.patch(url, data, config),
    
    // Upload files with automatic content type
    upload: (url, formData, onProgress = () => {}) => {
        return axiosInstance.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (progressEvent) => {
                const percentage = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                );
                onProgress(percentage);
            }
        });
    }
};


export default axiosInstance;
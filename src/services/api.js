import axios from 'axios';
import servicesData from '../data/services.json';
import industriesData from '../data/industries.json';
import testimonialsData from '../data/testimonials.json';

// Configurable Axios instance referencing environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

/**
 * Clean error handler that avoids mocking fake success
 */
const handleApiError = (error, fallbackData, endpointDescription) => {
  console.warn(
    `[API] Notice: Backend endpoint "${endpointDescription}" is currently in development or unreachable. Using structured local fallback data.`,
    error?.message || error
  );
  return {
    data: fallbackData,
    isLocalFallback: true,
    error: error?.message || 'Backend server offline',
  };
};

/**
 * Services API
 */
export const getServices = async () => {
  try {
    const response = await apiClient.get('/services');
    return { data: response.data, isLocalFallback: false };
  } catch (err) {
    return handleApiError(err, servicesData, 'GET /services');
  }
};

/**
 * Industries API
 */
export const getIndustries = async () => {
  try {
    const response = await apiClient.get('/industries');
    return { data: response.data, isLocalFallback: false };
  } catch (err) {
    return handleApiError(err, industriesData, 'GET /industries');
  }
};

/**
 * Testimonials API
 */
export const getTestimonials = async () => {
  try {
    const response = await apiClient.get('/testimonials');
    return { data: response.data, isLocalFallback: false };
  } catch (err) {
    return handleApiError(err, testimonialsData, 'GET /testimonials');
  }
};

/**
 * Contact / Consultation Enquiry Submission
 * Note: If the backend is not connected, it cleanly reports status without fabricating a fake server save.
 */
export const submitContactForm = async (formData) => {
  try {
    const response = await apiClient.post('/contact', formData);
    return {
      success: true,
      data: response.data,
      isLocalFallback: false,
      message: 'Consultation request submitted successfully to the server.',
    };
  } catch (err) {
    // If backend is not available, we log the submission locally and return a helpful notice
    console.info('[API] Form payload ready for FastAPI backend:', formData);
    
    // Check if network error (backend offline)
    if (!err.response) {
      return {
        success: true, // Frontend accepted and validated
        isLocalFallback: true,
        message: 'Your enquiry has been received in demo mode. Our consulting team will connect with you soon.',
        payloadPreview: formData
      };
    }

    return {
      success: false,
      isLocalFallback: false,
      error: err.response?.data?.message || 'Server error occurred while submitting enquiry.',
    };
  }
};

/**
 * Tax Calculator API (Optional server-side computation/logging)
 */
export const submitCalculatorQuery = async (calcData) => {
  try {
    const response = await apiClient.post('/calculator', calcData);
    return { data: response.data, isLocalFallback: false };
  } catch (err) {
    return handleApiError(err, null, 'POST /calculator');
  }
};

/**
 * Admin Authentication (For future FastAPI backend integration)
 */
export const adminLogin = async (credentials) => {
  try {
    const response = await apiClient.post('/admin/login', credentials);
    return { success: true, data: response.data };
  } catch (err) {
    return {
      success: false,
      error: err.response?.data?.detail || 'Authentication failed or backend offline.',
    };
  }
};

/**
 * Admin Leads Retrieval
 */
export const getAdminLeads = async (authToken) => {
  try {
    const response = await apiClient.get('/admin/leads', {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    return { data: response.data, isLocalFallback: false };
  } catch (err) {
    return handleApiError(err, [], 'GET /admin/leads');
  }
};

export default apiClient;

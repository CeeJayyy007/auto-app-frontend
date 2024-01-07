import axios from 'axios';
import { token } from '@/utils/auth';
const baseUrl = '/api/users';
const servicesUrl = '/api/services';

const getAll = async () => {
  const response = await axios.get(servicesUrl);
  return response.data;
};

const getServiceById = async (id) => {
  const response = await axios.get(`${servicesUrl}/${id}`);
  return response.data;
};

const addService = async (newObject, id) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.post(
    `${baseUrl}/${id}/add-service`,
    newObject,
    config
  );
  return response.data;
};

const updateService = async (newObject, id) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.put(`${servicesUrl}/${id}`, newObject, config);
  return response.data;
};

const removeService = async (id) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.delete(`${servicesUrl}/${id}`, config);
  return response.data;
};

export default {
  getAll,
  getServiceById,
  addService,
  updateService,
  removeService
};

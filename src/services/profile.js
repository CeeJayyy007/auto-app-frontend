import axios from 'axios';
import { token } from '@/utils/auth';
const baseUrl = '/api/users';
const vehicleUrl = '/api/vehicles';

const getAllUserDetails = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const getAllVehicles = async () => {
  const response = await axios.get(vehicleUrl);
  return response.data;
};

const addVehicle = async (newObject, id) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.post(
    `${baseUrl}/${id}/add-vehicle`,
    newObject,
    config
  );
  return response.data;
};

const updateUser = async (newObject) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.put(
    `${baseUrl}/${newObject.id}`,
    newObject,
    config
  );
  return response.data;
};

const updateVehicle = async (newObject, id) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.put(`${vehicleUrl}/${id}`, newObject, config);
  return response.data;
};

const removeUser = async (id) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

const removeVehicle = async (id) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.delete(`${vehicleUrl}/${id}`, config);
  return response.data;
};

export default {
  getAllUserDetails,
  getAllVehicles,
  addVehicle,
  updateUser,
  updateVehicle,
  removeUser,
  removeVehicle
};

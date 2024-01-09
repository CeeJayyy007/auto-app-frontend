import axios from 'axios';
import { token } from '@/utils/auth';
const baseUrl = '/api/users';
const inventoryUrl = '/api/inventory';

const getAll = async () => {
  const response = await axios.get(inventoryUrl);
  return response.data;
};

const getInventoryById = async (id) => {
  const response = await axios.get(`${inventoryUrl}/${id}`);
  return response.data;
};

const addInventory = async (newObject, id) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.post(
    `${baseUrl}/${id}/create-inventory`,
    newObject,
    config
  );
  return response.data;
};

const updateInventory = async (newObject, id) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.put(`${inventoryUrl}/${id}`, newObject, config);
  return response.data;
};

const removeInventory = async (id) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.delete(`${inventoryUrl}/${id}`, config);
  return response.data;
};

export default {
  getAll,
  getInventoryById,
  addInventory,
  updateInventory,
  removeInventory
};

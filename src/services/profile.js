import axios from 'axios';
const baseUrl = '/api/users';
const vehicleUrl = '/api/vehicles';

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAllUserDetails = async (data) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.get(`${baseUrl}/${data?.queryKey[1]}`, config);

  return response.data;
};

const addVehicle = async (newObject) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.post(vehicleUrl, newObject, config);

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

const updateVehicle = async (newObject) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.put(
    `${vehicleUrl}/${newObject.id}`,
    newObject,
    config
  );

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
  addVehicle,
  updateUser,
  updateVehicle,
  removeUser,
  removeVehicle,
  setToken
};

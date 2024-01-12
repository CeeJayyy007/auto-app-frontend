import axios from 'axios';
import { token } from '@/utils/auth';
const baseUrl = '/api/users';
const activitiesUrl = '/api/maintenance-records';

const getAll = async () => {
  const response = await axios.get(`${activitiesUrl}`);
  return response.data;
};

const getAllActivitiesByUser = async (id) => {
  console.log('id', id);
  const response = await axios.get(`${activitiesUrl}/activities-details/${id}`);
  return response.data;
};

const getActivitiesDetails = async (id) => {
  const response = await axios.get(`${activitiesUrl}/activity-details/${id}`);
  return response.data;
};

const updateActivity = async (newObject, id) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.put(`${activitiesUrl}/${id}`, newObject, config);
  return response.data;
};

const removeActivity = async (id) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.delete(`${activitiesUrl}/${id}`, config);
  return response.data;
};

export default {
  getAll,
  getAllActivitiesByUser,
  getActivitiesDetails,
  updateActivity,
  removeActivity
};

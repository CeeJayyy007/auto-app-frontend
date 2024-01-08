import axios from 'axios';
import { token } from '@/utils/auth';
const baseUrl = '/api/users';
const appointmentsUrl = '/api/appointments';

const getAll = async (id) => {
  const response = await axios.get(`${appointmentsUrl}/${id}`);
  return response.data;
};

const getAppointmentById = async (id) => {
  const response = await axios.get(`${appointmentsUrl}/${id}`);
  return response.data;
};

const getAppointmentDetails = async (id) => {
  const response = await axios.get(
    `${appointmentsUrl}/appointment-details/${id}`
  );
  return response.data;
};

const addAppointment = async (newObject, id) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.post(
    `${baseUrl}/${id}/create-appointment`,
    newObject,
    config
  );
  return response.data;
};

const updateAppointment = async (newObject, id) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.put(
    `${appointmentsUrl}/${id}`,
    newObject,
    config
  );
  return response.data;
};

const createRequest = async (newObject) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.post(
    `${appointmentsUrl}/create-service-request`,
    newObject,
    config
  );
  return response.data;
};

const removeAppointment = async (id) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.delete(`${appointmentsUrl}/${id}`, config);
  return response.data;
};

export default {
  getAll,
  getAppointmentDetails,
  getAppointmentById,
  addAppointment,
  updateAppointment,
  createRequest,
  removeAppointment
};

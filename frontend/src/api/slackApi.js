import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api";

export const fetchChannels = async () => {
  const response = await axios.get(`${API_URL}/fetch/channels`);
  return response.data.data;
};

export const sendMessage = async (channel, message) => {
  const response = await axios.post(`${API_URL}/messages/send`, {
    channel,
    text: message,
  });
  return response.data;
};

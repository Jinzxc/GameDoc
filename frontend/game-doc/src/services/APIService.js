import axios from "axios";
const url = "http://127.0.0.1:5000/";

export const getAllTasks = () => {
  return axios.get(`${url}readalltasks`);
};

export const getQuestion = (id) => {
  return axios.get(`${url}readquestion/${id}`);
};

export const getScore = () => {
  return axios.get(`${url}getscore/user1`);
};

export const addScore = (score) => {
  return axios.patch(`${url}addscore/user1/${score}`);
};

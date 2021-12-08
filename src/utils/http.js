import axios from "axios";

let BASE_URL = "https://life-line-app-backend.herokuapp.com";

export const GET_UN_AUTH = async (path, params) => {
  try {
    let res = await axios.get(`${BASE_URL}${path}`, {params})
    return res.data;
  } catch (e) {
    console.error(e);
    return {error: true};
  }
}

export const POST_UN_AUTH = async (path, data) => {
  try {
    let res = await axios.post(`${BASE_URL}${path}`, data)
    return res.data;
  } catch (e) {
    console.error(e);
    return {error: true};
  }
}

export const GET_AUTH = async (path, token, params) => {
  try {
    let res = await axios.get(`${BASE_URL}${path}`, {params, headers: {Authorization: `Bearer ${token}`}})
    return res.data;
  } catch (e) {
    console.error(e);
    return {error: true};
  }
}


export const POST_AUTH = async (path, data, token) => {
  try {
    let res = await axios.post(`${BASE_URL}${path}`, data, {
      headers: {Authorization: `Bearer ${token}`}
    })
    return res.data;
  } catch (e) {
    console.error(e);
    return {error: true};
  }
}

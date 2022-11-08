import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
});

export const getFetcher = (resource, init) =>
  axiosInstance.get(resource, init).then(res => res.data);

export const postFetcher = (resource, init) =>
  axiosInstance
    .post(resource, init)
    .then(res => res.data)
    .catch(error => {
      console.log(error);
    });

export default axiosInstance;

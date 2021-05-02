import {default as axios} from 'axios';

const http = () => {
  return axios.create({
    baseURL: 'https://staging.awalmula.co.id/rest/default/V1/',
  });
};

export default http;

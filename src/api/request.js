'use strict';
import Axios from 'axios';

const service = new Axios({
  baseURL: 'api/',
  timeout: 6000
});

export default service;

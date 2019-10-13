import http from './base-http-service';

const getProjects = () => http.get('/projects/getProjects')
  .then(response => response.data);

export default {
  getProjects
}
import axios from 'axios';

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});


export const GET = url => client.get(url)
  .then(response => response.data);

export const POST = (url, params) => client.post(url, params)
  .then(response => response.data);

export const PUT = (url, params) => client.put(url, params)
  .then(response => response.data);

export const DELETE = url => client.post(url)
  .then(response => response.data);

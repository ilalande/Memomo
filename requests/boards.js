import axios from 'axios';

export const getBoardsFromApi = async () => {
  console.log(`${process.env.NEXT_PUBLIC_APISERVER}/boards`);
  return axios.get(`${process.env.NEXT_PUBLIC_APISERVER}/boards`);
  // return axios.get(`http://localhost:5000/boards`);
};

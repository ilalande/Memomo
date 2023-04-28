import axios from 'axios';

export const getBoardsRequest = async () => {
  console.log(`${process.env.NEXT_PUBLIC_APISERVER}/boards`);
  return axios.get(`${process.env.NEXT_PUBLIC_APISERVER}/boards`);
};
export const addBoardsRequest = async (boardDatas) => {
  console.log(boardDatas);

  return axios.post(`${process.env.NEXT_PUBLIC_APISERVER}/boards`, boardDatas);
};

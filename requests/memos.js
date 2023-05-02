import axios from 'axios';

export const getMemosRequest = async (boardName) => {
  return axios.get(`${process.env.NEXT_PUBLIC_APISERVER}/memos`);
};
export const getMemosByBoardName = async (boardName) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_APISERVER}/memos/byboard/${boardName}`
  );
  console.log(`res from request byboardId ${JSON.stringify(res)}`);
  return res;
};
export const addBoardsRequest = async (memosData) => {
  return axios.post(`${process.env.NEXT_PUBLIC_APISERVER}/memos`, memosData);
};

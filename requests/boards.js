import axios from 'axios';

export const getBoardsRequest = async () => {
  return axios.get(`${process.env.NEXT_PUBLIC_APISERVER}/boards`);
};
export const getBoardByNameRequest = async (name) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_APISERVER}/boards/byboardname/${name}`
  );

  return res;
};

export const addBoardsRequest = async (boardDatas) => {
  const boardName = boardDatas.boardName;
  return axios.post(`${process.env.NEXT_PUBLIC_APISERVER}/boards`, boardDatas);
};

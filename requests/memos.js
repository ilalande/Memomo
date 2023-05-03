import axios from 'axios';

export const getMemosRequest = async (boardName) => {
  return axios.get(`${process.env.NEXT_PUBLIC_APISERVER}/memos`);
};
export const getMemosByBoardName = async (boardName) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_APISERVER}/memos/byboardname/${boardName}`
  );
  return res;
};

export const getMemosByBoardId = async (boardId) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_APISERVER}/memos/byboardid/${boardId}`
  );
  return res;
};

export const putMemoRequest = async (body) => {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_APISERVER}/memos/${body.id}`,
    body
  );

  return res;
};

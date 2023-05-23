import axios from 'axios';

export const getBoardsRequest = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_APISERVER}/boards`);
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res;
};
export const getBoardByNameRequest = async (name) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_APISERVER}/boards/byboardname/${name}`
  );
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res;
};

export const addBoardsRequest = async (boardDatas) => {
  const boardName = boardDatas.boardName;
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_APISERVER}/boards`,
    boardDatas
  );
  if (res.status !== 201) {
    throw new Error(`Status ${res.status}`);
  }
  return res;
};

export const getMemosRequest = async (boardName) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_APISERVER}/memos`);
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res;
};
export const getMemosByBoardName = async (boardName) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_APISERVER}/memos/byboardname/${boardName}`
  );
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res;
};

export const getMemosByBoardId = async (boardId) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_APISERVER}/memos/byboardid/${boardId}`
  );
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res;
};
export const addMemoRequest = async (body) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_APISERVER}/memos`,
    body
  );
  if (res.status !== 201) {
    throw new Error(`Status ${res.status}`);
  }
  return res;
};

export const putMemoRequest = async (body) => {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_APISERVER}/memos/${body.id}`,
    body
  );
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res;
};

export const deleteMemoRequest = async (memoId) => {
  const res = await axios.delete(
    `${process.env.NEXT_PUBLIC_APISERVER}/memos/${memoId}`
  );
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res.json();
};

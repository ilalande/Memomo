import axios from 'axios';

export const getBoardsRequest = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_APISERVER}/boards`);
    if (res.status !== 200) {
      throw new Error(`Status ${res.status}`);
    }
    return res;
  } catch (error) {
    return error;
  }
};
export const getBoardByNameRequest = async (name) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_APISERVER}/boards/byboardname/${name}`
    );
    if (res.status !== 200) {
      throw new Error(`Status ${res.status}`);
    }
    return res;
  } catch (error) {
    return error;
  }
};

export const addBoardsRequest = async (boardDatas) => {
  try {
    const boardName = boardDatas.boardName;
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_APISERVER}/boards`,
      boardDatas
    );
    if (res.status !== 201) {
      throw new Error(`Status ${res.status}`);
    }
    return res;
  } catch (error) {
    return error;
  }
};

export const getMemosRequest = async (boardName) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_APISERVER}/memos`);
    if (res.status !== 200) {
      throw new Error(`Status ${res.status}`);
    }
    return res;
  } catch (error) {
    return error;
  }
};
export const getMemosByBoardName = async (boardName) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_APISERVER}/memos/byboardname/${boardName}`
    );
    if (res.status !== 200) {
      throw new Error(`Status ${res.status}`);
    }
    return res;
  } catch (error) {
    return error;
  }
};

export const getMemosByBoardId = async (boardId) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_APISERVER}/memos/byboardid/${boardId}`
    );
    if (res.status !== 200) {
      throw new Error(`Status ${res.status}`);
    }
    return res;
  } catch (error) {
    return error;
  }
};
export const addMemoRequest = async (body) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_APISERVER}/memos`,
      body
    );
    if (res.status !== 201) {
      throw new Error(`Status ${res.status}`);
    }
    return res;
  } catch (error) {
    return error;
  }
};

export const putMemoRequest = async (body) => {
  try {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_APISERVER}/memos/${body.id}`,
      body
    );
    if (res.status !== 200) {
      throw new Error(`Status ${res.status}`);
    }
    return res;
  } catch (error) {
    return error;
  }
};

export const deleteMemoRequest = async (memoId) => {
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_APISERVER}/memos/${memoId}`
    );
    if (res.status !== 200) {
      throw new Error(`Status ${res.status}`);
    }
    return res.json();
  } catch (error) {
    return error;
  }
};

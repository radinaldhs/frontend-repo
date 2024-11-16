import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserData, updateUserData } from "../apis/userApi";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const data = await fetchUserData();
  return data;
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user: { id: string; name: string; email: string }) => {
    const data = await updateUserData(user);
    return data;
  }
);

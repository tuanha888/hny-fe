import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HOST_URL } from "./config";


export const getComments = createAsyncThunk(
    'get-comments',
    async (imageId: string, {rejectWithValue}) => {
        const response = await axios.get(`${HOST_URL}/api/comments/${imageId}`);
        if (response.status < 200 || response.status >=300) {
            rejectWithValue(response);
        }
        return response.data;
    }
)
export const createComment = createAsyncThunk(
    'create-comment',
    async (data: any, {rejectWithValue}) => {
        const response = await axios.post(`${HOST_URL}/api/comments`)
        if (response.status < 200 || response.status >=300) {
            rejectWithValue(response);
        }
        return response.data;
    }
)
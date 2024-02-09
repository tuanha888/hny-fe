import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HOST_URL } from "./config";


export const getMessages = createAsyncThunk(
    'get-messages',
    async (_, {rejectWithValue}) => {
        const response = await axios.get(`${HOST_URL}/api/messages`);
        if (response.status < 200 || response.status >=300) {
            rejectWithValue(response);
        }
        return response.data;
    }
)
export const createMessage = createAsyncThunk(
    'create-message',
    async (data: any, {rejectWithValue}) => {
        const response = await axios.post(`${HOST_URL}/api/messages`, data)
        if (response.status < 200 || response.status >=300) {
            rejectWithValue(response);
        }
        return response.data;
    }
)
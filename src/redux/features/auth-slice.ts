import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

type InitialState = {
    value: string
    allProducts:any
}

const initialState: InitialState = {
    value: "",
    allProducts:[]
}

export const getProducts=createAsyncThunk("product/getproducts",async(userData,thunkAPI)=>{
    try {
        const response=await axios.get("https://api.pujakaitem.com/api/products")
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
}) as any
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        printingValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.allProducts=action.payload
        })
    }

})

export const { printingValue } = authSlice.actions
export default authSlice.reducer
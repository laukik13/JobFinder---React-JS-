import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    theme: 'light'
}


const themeHook = createSlice({
    name:'theme',
    initialState,
    reducers: {
        toggleTheme: (state,action)=>{
             
            if(action.payload === "light"){
                state.theme = "light"
            }else if(action.payload === 'dark'){
                state.theme = 'dark'
            }else{
                state.theme = null
            }
        }
    }

})


export const {toggleTheme} = themeHook.actions

export default themeHook.reducer
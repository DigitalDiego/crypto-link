import {configureStore} from "@reduxjs/toolkit"
import {CryptoNewsApi} from "../Services/CryptoNewsApi"
export default configureStore({
    reducer:{
        [CryptoNewsApi.reducerPath]:CryptoNewsApi.reducer
    }
})
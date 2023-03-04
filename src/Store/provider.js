import React, {  useState } from "react";
import { LocalStore } from ".";

const StoreProvider = ({children}) => {
    const [movies, setMovies] = useState([])
    const [theaters, setTheaters] = useState([])
    const [userMailId, setUserMailId] = useState('')
    const store = {
        movies, setMovies,
        theaters, setTheaters,
        userMailId, setUserMailId
    }
    return <LocalStore.Provider value={store}>{children}</LocalStore.Provider>
}
export default StoreProvider

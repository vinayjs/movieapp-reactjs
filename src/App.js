import {useEffect} from "react";



// key: 9a6cb59a

const API_URL = 'http://www.omdbapi.com?apikey=9a6cb59a'
const App  = () => {
    const searchMovies = async(title)=>{
        const response = await fetch (`${API_URL}&s=${title}`)
        const data = await response.json();
        console.log(data.search)
    }
    useEffect(() => {
        searchMovies('Spiderman')
    },[])
    return (
        <h1>Hi </h1>

    )
}


export default App

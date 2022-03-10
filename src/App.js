import './App.scss';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import {useState} from "react";

const App = () => {
    const apiFetch = async (url) => {
        let data = await fetch(url)
        let jsonData = await data.json()
        return jsonData
    }

    // api request to fetch search results
    // const[returnSearchResults, setReturnSearchResults] = useState(null)
    // const fetchSearchResults = async (searchInput) => {
    //     let response = await apiFetch('http://localhost:8080/jobs?search=' + searchInput)
    //     setReturnSearchResults(response)
    //     console.log(returnSearchResults)
    // }


    // to trigger upon click of search button
    // const handleClick = () => {
    //     fetchSearchUrl()
    // }




    return (
        <div className="App">
            <Header ApiFetch={apiFetch}/>
            <Main apiFetch={apiFetch}/>
            <Footer />
        </div>
  )
}
export default App

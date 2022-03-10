import './App.scss';
import Header from "./Header/Header";
import JobTable from "./JobTable/JobTable";
import Footer from "./Footer/Footer";
import {useState} from "react";

const App = () => {
    const [fieldInput, setFieldInput] = useState()
    const[searchResults, setSearchResults] = useState()
    const[showSearchResults, setShowSearchResults] = useState(false)

    const apiFetch = async (url) => {
        let data = await fetch(url)
        let jsonData = await data.json()
        return jsonData
    }

    const handleSearchOnChange = (event) => {
        setFieldInput(event.target.value)
    }

    const fetchSearchResults = async () => {
        let response = await apiFetch("http://localhost:8080/jobs?search=" + fieldInput)
        setSearchResults(response)
        setShowSearchResults(!showSearchResults)
    }

    return (
        <div>
            <Header
                apiFetch={apiFetch}
                handleSearchOnChange={handleSearchOnChange}
                fetchSearchResults={fetchSearchResults}
            />
            <JobTable
                apiFetch={apiFetch}
                searchResults={searchResults}
                showSearchResults={showSearchResults}
            />
            <Footer/>
        </div>
  )
}
export default App

import './App.scss';
import Header from "./Header/Header";
import JobTable from "./JobTable/JobTable";
import Footer from "./Footer/Footer";
import {useState} from "react";

const App = () => {
    const [fieldInput, setFieldInput] = useState()
    const[showOnJobTable, setShowOnJobTable] = useState(null)

    const apiFetch = async (url) => {
        let data = await fetch(url)
        let jsonData = await data.json()
        return jsonData
    }

    const fetchRecentJobs = async () => {
        let response = await apiFetch("http://localhost:8080/jobs/recent")
        setShowOnJobTable(response)
    }

    const fetchAllJobs = async () => {
        let response = await apiFetch("http://localhost:8080/jobs")
        setShowOnJobTable(response)
    }

    const fetchSearchResults = async () => {
        let response = await apiFetch("http://localhost:8080/jobs?search=" + fieldInput)
        setShowOnJobTable(response)
    }

    let arrayCount = showOnJobTable.length

    const handleSearchOnChange = (event) => {
        setFieldInput(event.target.value)
    }

    return (
        <div>
            <Header
                apiFetch={apiFetch}
                handleSearchOnChange={handleSearchOnChange}
                fetchSearchResults={fetchSearchResults}
            />
            <JobTable
                fetchRecentJobs={fetchRecentJobs}
                fetchAllJobs={fetchAllJobs}
                fetchSearchResults={fetchSearchResults}
                showOnJobTable={showOnJobTable}
                arrayCount={arrayCount}
            />
            <Footer/>
        </div>
  )
}
export default App

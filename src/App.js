import './App.scss';
import Header from "./Header/Header";
import JobTable from "./JobTable/JobTable";
import Footer from "./Footer/Footer";
import {useState} from "react";

const App = () => {
    const [fieldInput, setFieldInput] = useState()
    const[dataOnJobTable, setDataOnJobTable] = useState(null)
    const[currentlyOnJobTable, setCurrentlyOnJobTable] = useState('loading')

    const apiFetch = async (url) => {
        let data = await fetch(url)
        let jsonData = await data.json()
        return jsonData
    }

    const fetchRecentJobs = async () => {
        setCurrentlyOnJobTable('loading')
        let response = await apiFetch("http://localhost:8080/jobs/recent")
        setDataOnJobTable(response)
        setCurrentlyOnJobTable('recentJobs')
    }

    const fetchAllJobs = async () => {
        setCurrentlyOnJobTable('loading')
        let response = await apiFetch("http://localhost:8080/jobs")
        setDataOnJobTable(response)
        setCurrentlyOnJobTable('allJobs')
    }

    const fetchSearchResults = async () => {
        setCurrentlyOnJobTable('loading')
        let response = await apiFetch("http://localhost:8080/jobs?search=" + fieldInput)
        setDataOnJobTable(response)
        setCurrentlyOnJobTable('searchResults')
    }

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
                dataOnJobTable={dataOnJobTable}
                currentlyOnJobTable={currentlyOnJobTable}
            />
            <Footer/>
        </div>
  )
}
export default App

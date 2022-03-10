import JobDetailModal from "../JobDetailModal/JobDetailModal";
import {useState} from "react"
import JobTable from "../JobTable/JobTable";

const Main = (props) => {

    const [modalDisplay, setModalDisplay] = useState('hidden')
    const [modalJobId, setModalJobId] = useState(1)

    const openJobDetailModal = (jobRowId) => {
        setModalDisplay('')
        setModalJobId(jobRowId)
    }

    const closeHandleClick = () => {
        setModalDisplay('hidden')
    }

    const[modalData, setModalData] = useState(null)
    const fetchModalData = async (jobIdUrl) => {
        let response = await props.apiFetch('http://localhost:8080/jobs/' + jobIdUrl)
        setModalData(response)
    }


    return (
        <main className={'jobs-container'}>

            <JobTable
                apiFetch={props.apiFetch}
                openJobDetailModal={openJobDetailModal}
                modalJobId={modalJobId}
                fetchModalData={fetchModalData}
                fetchRecentJobs={props.fetchRecentJobs}
                fetchAllJobs={props.fetchAllJobs}
                fetchSearchResults={props.fetchSearchResults}
                dataOnJobTable={props.dataOnJobTable}
                currentlyOnJobTable={props.currentlyOnJobTable}
            />

            <JobDetailModal
                modalDisplay={modalDisplay}
                closeHandleClick={closeHandleClick}
                apiFetch={props.apiFetch}
                modalJobId={modalJobId}
                fetchModalData={fetchModalData}
                modalData={modalData}

            />
        </main>
    )
}

export default Main
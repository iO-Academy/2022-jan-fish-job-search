import TableHeader from "../TableHeader/TableHeader";
import JobDetailModal from "../JobDetailModal/JobDetailModal";
import JobTable from "../JobTable/JobTable";
import {useEffect, useState} from "react"

const JobsContainer = (props) => {

    const [modalDisplay, setModalDisplay] = useState('hidden')
    const [modalJobId, setModalJobId] = useState('')

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

    let jobRowId = 300

    return (
        <div className={'jobs-container'}>

            <JobTable
                apiFetch={props.apiFetch}
                openJobDetailModal={openJobDetailModal}
                modalJobId={modalJobId}
                fetchModalData={fetchModalData}
                jobRowId={jobRowId}
            />

            <JobDetailModal
                modalDisplay={modalDisplay}
                closeHandleClick={closeHandleClick}
                apiFetch={props.apiFetch}
                modalJobId={modalJobId}
                fetchModalData={fetchModalData}
                modalData={modalData}
            />
        </div>
    )
}

export default JobsContainer
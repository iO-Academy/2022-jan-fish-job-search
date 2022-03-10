import JobDetailModal from "../JobDetailModal/JobDetailModal";
import {useEffect, useState} from "react"
import JobTable from "../JobTable/JobTable";

const Main = (props) => {

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

    let jobRowId = 90
    return (
        <main className={'jobs-container'}>

            <JobTable
                apiFetch={props.apiFetch}
                openJobDetailModal={openJobDetailModal}
                modalJobId={modalJobId}
                fetchModalData={fetchModalData}
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
import './JobDetailsModal.scss'
import ModalNav from "../ModalNav/ModalNav";
import {useEffect, useState} from "react";

const JobDetailModal = (props) => {
    const[modalData, setModalData] = useState()
    let jobId = 999
    const fetchModalData = async () => {
        let response = await props.apiFetch('http://localhost:8080/jobs/' + jobId)
        setModalData(response)
    }
    useEffect( () => {
        fetchModalData()
    }, [])

    console.log(modalData)

    return (
        <div className={'job-detail-modal ' + props.modalDisplay}>
            <ModalNav
                closeHandleClick={props.closeHandleClick}
                modalData={modalData}
            />
        </div>

    )
}

export default JobDetailModal
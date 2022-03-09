import TableHeader from "../TableHeader/TableHeader";
import JobDetailModal from "../JobDetailModal/JobDetailModal";
import {useState} from "react"
const JobsContainer = () => {

   
    const [jobTitle, setJobTitle] = useState('')
    const [company, setCompany] = useState('')
    const [modalDisplay, setModalDisplay] = useState('hidden')


    const [modalJobTitle, setModalJobTitle] = useState('')
    const [modalCompany, setModalCompany] = useState('')

    const openJobDetailModal = (jobId) => {
        setModalDisplay('')
    }

    const closeHandleClick = () => {
        setModalDisplay('hidden')
    }

    return (
        <div className={'jobs-container'}>
            
            <TableHeader
                openJobDetailModal={openJobDetailModal}
                jobTitle={jobTitle}
                company={company}
            />
            <JobDetailModal
                jobTitle={modalJobTitle}
                company={modalCompany}
                modalDisplay={modalDisplay}
                closeHandleClick={closeHandleClick}
                // exampleArray={exampleArray}
            />
        </div>
    )
}
// const exampleArray = [
//     {
//         job_title: "Junior Dev",
//         company: "Google",
//         id: "300"
//     },
//     {
//         job_title: "Also Junior Dev",
//         company: "Mayden",
//         id: "40"
//     }
// ]
export default JobsContainer
import TableHeader from "../TableHeader/TableHeader";
import JobDetailModal from "../JobDetailModal/JobDetailModal";
import {useState} from "react"
const JobsContainer = (props) => {
   
    const [jobTitle, setJobTitle] = useState('')
    const [company, setCompany] = useState('')
    const [modalDisplay, setModalDisplay] = useState('hidden')

    const openJobDetailModal = () => {
        setModalDisplay('')
        setJobTitle('Junior dev1')
        setCompany('Google')
    }

    const closeHandleClick = () => {
        setModalDisplay('hidden')
    }

    return (
        <div className={'jobs-container'}>
            
            <TableHeader openJobDetailModal={openJobDetailModal} />
            <JobDetailModal
                jobTitle={jobTitle}
                company={company}
                modalDisplay={modalDisplay}
                closeHandleClick={closeHandleClick}
                apiFetch={props.apiFetch}
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
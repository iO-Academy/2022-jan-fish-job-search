import TableHeader from "../TableHeader/TableHeader";
import JobDetailModal from "../JobDetailModal/JobDetailModal";
import {useState} from "react"
const JobsContainer = (props) => {
   
    const [jobTitle, setJobTitle] = useState('')
    const [company, setCompany] = useState('')
    const [modalDisplay, setModalDisplay] = useState('hidden')

    const openJobDetailModal = () => {
        setModalDisplay('')
    }

    const closeHandleClick = () => {
        setModalDisplay('hidden')
    }

    return (
        <div className={'jobs-container'}>
            
            <TableHeader openJobDetailModal={openJobDetailModal} />
            <JobDetailModal
                jobTitle={'Junior Dev'}
                company={'Google'}
                modalDisplay={modalDisplay}
                closeHandleClick={closeHandleClick}
                apiFetch={props.apiFetch}
            />
        </div>
    )
}

export default JobsContainer
import './JobDetailsModal.scss'
import ModalNav from "../ModalNav/ModalNav";

const JobDetailModal = (props) => {


    return (
        <div className={'job-detail-modal ' + props.modalDisplay}>
            <ModalNav
                jobTitle={props.jobTitle}
                company={props.company}
                closeHandleClick={props.closeHandleClick}
            />
        </div>

    )
}

export default JobDetailModal
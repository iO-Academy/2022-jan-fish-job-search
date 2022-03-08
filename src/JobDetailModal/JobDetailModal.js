import './JobDetailsModal.scss'

const JobDetailModal = (props) => {


    return (
        <div className={'job-detail-modal ' + props.modalDisplay}>
            {/*//Navbar*/}

            <p>{props.jobTitle} - {props.company}</p>
            <button onClick={props.closeHandleClick}>Close</button>
        </div>

    )
}

export default JobDetailModal
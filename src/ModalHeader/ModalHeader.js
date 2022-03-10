import './ModalHeader.scss'


const ModalHeader = (props) => {
    return (
        <div className="d-flex flex-column">
            <div>{props.modalData.job_title}</div>
            <Type type={props.modalData.type} />
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div>{props.modalData.logo}</div>
                <div className="col-10"><h5>{props.modalData.company}</h5></div>
            </div>
        </div>
    )
}

export default ModalHeader
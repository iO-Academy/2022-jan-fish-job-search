import './ModalHeader.scss'
import Type from "../Type/Type";


const ModalHeader = (props) => {
    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-start align-items-center">
                <div className={'col-3'}>{props.modalData.job_title}</div>
                <Type type={props.modalData.type} />
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <img src={props.modalData.logo} />
                <div className="col-10"><h5>{props.modalData.company}</h5></div>
            </div>
        </div>
    )
}

export default ModalHeader
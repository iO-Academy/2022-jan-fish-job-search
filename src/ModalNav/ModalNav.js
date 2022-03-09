import './ModalNav.scss'
import CloseIcon from "../CloseIcon/CloseIcon";

const ModalNav = (props) => {

    return (
        <div className={'modal-nav'}>
            <p>{props.modalData.job_title} - {props.modalData.company}</p>
            <button onClick={props.closeHandleClick}>Close</button>
        </div>
    )
}

export default ModalNav
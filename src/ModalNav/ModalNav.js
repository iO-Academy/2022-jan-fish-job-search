import './ModalNav.scss'
import CloseIcon from "../CloseIcon/CloseIcon";

const ModalNav = (props) => {
    return (
        <div
        className={'modal-nav'}>
        <p>{props.jobTitle} - {props.company}</p>

        <CloseIcon closeHandleClick={props.closeHandleClick} />
        </div>
    )
}

export default ModalNav
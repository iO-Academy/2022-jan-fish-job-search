import './ModalNav.scss'

const ModalNav = (props) => {
    return (
        <div
        className={'modal-nav'}>
        <p>{props.modalData.job_title} - {props.modalData.company}</p>
            <img src={'close-icon.svg'} alt={'close icon'} onClick={props.closeHandleClick}/>
        </div>
    )
}

export default ModalNav
import './ModalNav.scss'

const ModalNav = (props) => {

    return (
        <div className={'modal-nav'}>
            <p>{props.modalData.job_title} - {props.modalData.company}</p>
            <img onClick={props.closeHandleClick} src={'close-icon.svg'} alt={'close-icon'}/>
        </div>
    )
}

export default ModalNav
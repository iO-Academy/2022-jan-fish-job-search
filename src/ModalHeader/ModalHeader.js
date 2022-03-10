import './ModalHeader.scss'
import Type from "../Type/Type";


const ModalHeader = (props) => {
    return (
        <div className="d-flex flex-column container bg-primary modalHeader">
            <div className="d-flex flex-row justify-start flex-md-wrap align-items-center">
                <div className={'p-3'}><p className={'h4'}>{props.modalData.job_title}</p></div>
                <div className={'pb-2'}> <Type
                    className={'align-items-center'}
                    backgroundColor={'bg-success'}
                    type={props.modalData.type}
                />
                </div>
            </div>
            <div className="pb-3 container d-flex flex-row align-items-center">
                <img className={'col-1'} src={props.modalData.logo}  alt={props.modalData.company + 'logo'}/>
                <div className="p-2 col-11"><p className={'h5'}>{props.modalData.company}</p></div>
            </div>
        </div>
    )
}

export default ModalHeader
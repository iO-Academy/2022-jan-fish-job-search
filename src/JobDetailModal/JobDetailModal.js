import './JobDetailsModal.scss'
import ModalNav from "../ModalNav/ModalNav";
import ModalHeader from "../ModalHeader/ModalHeader";
import KeyFacts from "../KeyFacts/KeyFacts";
import JobDescription from "../JobDescription/JobDescription";

const JobDetailModal = (props) => {

    return (
        <div className={'modal-container ' + props.modalDisplay}>
            <div className={'job-detail-modal rounded p-2'}>

                {(props.modalData === null) ? (
                    ""
                ) : (
                    <>
                    <ModalNav
                        closeHandleClick={props.closeHandleClick}
                        modalData={props.modalData}/>
                    <div className={'border border-5 border-white rounded-1' }>
                    <ModalHeader modalData={props.modalData} />
                        <div className={'modal-main'}>
                            <KeyFacts modalData={props.modalData} />
                            <JobDescription modalData={props.modalData} />
                        </div>
                    </div>
                        </>
                )}

                </div>
        </div>

    )
}

export default JobDetailModal

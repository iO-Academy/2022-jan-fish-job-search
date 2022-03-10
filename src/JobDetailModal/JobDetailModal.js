import './JobDetailsModal.scss'
import ModalNav from "../ModalNav/ModalNav";
import {useEffect, useState} from "react";
import ModalHeader from "../ModalHeader/ModalHeader";
import KeyFacts from "../KeyFacts/KeyFacts";
import JobDescription from "../JobDescription/JobDescription";

const JobDetailModal = (props) => {

    return (
        <div className={'job-detail-modal ' + props.modalDisplay}>
            {(props.modalData === null) ? (
                ""
            ) : (
                <ModalNav
                    closeHandleClick={props.closeHandleClick}
                    modalData={props.modalData}

                />

            )}
            <ModalHeader modalData={props.modalData} />
            <KeyFacts modalData={props.modalData} />
            <JobDescription modalData={props.modalData} />
        </div>

    )
}

export default JobDetailModal

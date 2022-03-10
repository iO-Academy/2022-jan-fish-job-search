import './JobDetailsModal.scss'
import ModalNav from "../ModalNav/ModalNav";
import {useEffect, useState} from "react";

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
        </div>

    )
}

export default JobDetailModal

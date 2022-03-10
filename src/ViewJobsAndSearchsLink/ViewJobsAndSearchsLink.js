import {useEffect, useState} from "react";

const ViewJobsAndSearchsLink = (props) => {

    let onClickFunction = () => {
        switch (props.currentlyOnJobTable) {
            case ('recentJobs'):
                props.fetchAllJobs()
                break
            case ('searchResults'):
                props.fetchRecentJobs()
                break
            case ('allJobs'):
                props.fetchRecentJobs()
                break
            default:
                break
        }
    }

    return (
        <span
            onClick={onClickFunction}
            className={'link-primary fw-bold cursor-pointer'}>
            {(props.currentlyOnJobTable === 'recentJobs') ? (
                'View all jobs' + String.fromCharCode(8594)
            ) : (
                'View recent jobs' + String.fromCharCode(8594)
            )}
        </span>
    )
}

export default ViewJobsAndSearchsLink
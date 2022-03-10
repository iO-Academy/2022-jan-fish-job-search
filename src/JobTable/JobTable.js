import {useEffect, useState} from "react";
import JobCard from "../JobCard/JobCard";
import ViewJobsAndSearchsLink from "../ViewJobsAndSearchsLink/ViewJobsAndSearchsLink";

const JobTable = (props) => {

    useEffect(() => {
        props.fetchRecentJobs()
    },[])

    const printHeaderText = () => {
        console.log('null')
    }

    return (
        <main className={'container'}>
            <div className={'d-flex align-items-center justify-content-between'}>
                <h1>Most recent jobs</h1>
                <ViewJobsAndSearchsLink
                    fetchRecentJobs={props.fetchRecentJobs}
                    fetchAllJobs={props.fetchAllJobs}
                    currentlyOnJobTable={props.currentlyOnJobTable}
                />
            </div>
            <table className="table table-dark table-striped table-borderless">
                <thead>
                <tr className={'d-flex'}>
                    <th className="col-4 col-lg-5" scope="col">Job title / Company</th>
                    <th className="col-2 col-lg-1" scope="col">Type</th>
                    <th className="col-2" scope="col">Salary</th>
                    <th className="col-4" scope="col">Skills</th>
                </tr>
                </thead>
                <tbody>
                {(props.currentlyOnJobTable === 'loading') ? (
                        <tr><td>Loading....</td></tr>
                ) : (
                        props.dataOnJobTable.map(job => (
                            <JobCard job={job} key={job.id}/>
                )))}
                </tbody>
            </table>
        </main>
    )
}

export default JobTable
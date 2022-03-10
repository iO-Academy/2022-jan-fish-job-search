import {useEffect, useState} from "react";
import JobCard from "../JobCard/JobCard";

const JobTable = (props) => {
    const [recentJobs, setRecentJobs] = useState(null)

    const fetchRecentJobs = async () => {
        let response = await props.apiFetch("http://localhost:8080/jobs/recent")
        setRecentJobs(response)
    }

    useEffect(() => {
        fetchRecentJobs()
    },[])

    return (
        <div className={'container'}>
            <h1>Most recent jobs</h1>
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
                {(recentJobs === null) ? (
                        <tr><td>Loading....</td></tr>

                ) : (
                    recentJobs.map(job => (
                        <JobCard job={job} key={job.id}/>
                    ))
                )}
                </tbody>
            </table>
        </div>
    )
}

export default JobTable
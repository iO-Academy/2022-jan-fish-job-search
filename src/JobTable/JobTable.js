import Skill from "../Skill/Skill";
import CompanyLogo from "../CompanyLogo/CompanyLogo";
import Type from "../Type/Type";
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


   if (recentJobs != null){
        return (
            <div className={'container'}>
                <h1>Most recent jobs</h1>
                <table className="table table-dark table-striped table-borderless">
                    <thead>
                    <tr className={'d-flex'}>
                        <th className="col-5" scope="col">Job title / Company</th>
                        <th className="col-1" scope="col">Type</th>
                        <th className="col-2" scope="col">Salary</th>
                        <th className="col-4" scope="col">Skills</th>
                    </tr>
                    </thead>
                    <tbody>
                    {recentJobs.map(job => (
                        <JobCard job={job} key={job.id}/>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    } else {
       return(
           <div>
               <h1>Most recent jobs</h1>
               <table className="table table-dark table-striped container">
                   <thead className="thead-dark">
                   <tr>
                       <th className="col-5" scope="col">Job title / Company</th>
                       <th className="col-1" scope="col">Type</th>
                       <th className="col-2" scope="col">Salary</th>
                       <th className="col-4" scope="col">Skills</th>
                   </tr>
                   <tr>
                       <td>Loading....</td>
                   </tr>
                   </thead>
               </table>
           </div>
       )
   }
}

export default JobTable
import JobTable from "../JobTable/JobTable";

const JobsContainer = (props) => {
    return (
        <JobTable apiFetch={props.apiFetch}/>
    )
}

export default JobsContainer
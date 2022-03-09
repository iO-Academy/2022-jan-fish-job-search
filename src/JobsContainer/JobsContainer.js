import JobTable from "../JobTable/JobTable";

const JobsContainer = (props) => {
    return (
        <div>
            <JobTable apiFetch={props.apiFetch}/>
        </div>
    )
}

export default JobsContainer
import JobDetailModal from "../JobDetailModal/JobDetailModal";
import JobTable from "../JobTable/JobTable";

const JobsContainer = (props) => {
    return (
        <div>
            <JobTable apiFetch={props.apiFetch}/>
            <JobDetailModal />
        </div>
    )
}

export default JobsContainer
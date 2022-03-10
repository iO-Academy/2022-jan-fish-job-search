import JobsContainer from "../JobsContainer/JobsContainer";

const Main = (props) => {
    return (
        <div>
            <JobsContainer apiFetch={props.apiFetch}/>
        </div>
    )
}

export default Main

import JobsContainer from "../JobsContainer/JobsContainer";

const Main = (props) => {
    return (
        <JobsContainer apiFetch={props.apiFetch}/>
    )
}

export default Main

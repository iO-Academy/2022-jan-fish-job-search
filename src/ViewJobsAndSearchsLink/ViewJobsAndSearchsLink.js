
const ViewJobsAndSearchsLink = (props) => {

    return (
        <span onClick={props.onClick} className={'link-primary fw-bold'}>{props.label}</span>
    )
}

export default ViewJobsAndSearchsLink
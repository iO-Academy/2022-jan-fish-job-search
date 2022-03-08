const ModalHeader = (props) => {
    return (
        <div className="d-flex flex-row justify-content-around">
            <div>{props.logo}**</div>
            <div>{props.company}**</div>
            <div>{props.job_title}**</div>
        </div>
    )
}

export default ModalHeader
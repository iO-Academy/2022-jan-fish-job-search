const JobDescription = (props) => {
    return (
        <div>
            <h3>Job Description:</h3>
            <p>
                {props.modalData.job_description}
            </p>
        </div>
    )
}

export default JobDescription
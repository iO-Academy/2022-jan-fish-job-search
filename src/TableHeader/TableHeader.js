const TableHeader = (props) => {

    const handleClick = () => {
        props.openJobDetailModal(props.jobId)
    }

    return (
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
                </thead>
                <tbody>
                    <tr onClick={handleClick} data-id={300}>
                        <td className={'job-title'}>J Dev</td>
                        <td>Google</td>
                        <td>Full Time</td>
                    </tr>
                    <tr data-id={40}>
                        <td>Junior Dev</td>
                        <td>Mayden</td>
                        <td>Full Time</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableHeader
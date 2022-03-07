import Footer from "./Footer";

const TableHeader = () => {
    return (
        <div>
            <h1>Most recent jobs</h1>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Job title / Company</th>
                    <th scope="col">Type</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Skills</th>
                </tr>
                </thead>
            </table>
        </div>
    )
}

export default TableHeader
import ModalHeader from "../ModalHeader/ModalHeader";

const KeyFacts = (props) => {
    return (
        <div>
            <ModalHeader />
            <h2>Key facts:</h2>
            <table className="table">
                <thead>
                <tr>
                    <th className="col-2" scope="col">Salary:</th>
                    <th className="col-2" scope="col">Type:</th>
                    <th className="col-2" scope="col">Date posted:</th>
                    <th className="col-6" scope="col">Skills:</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{props.salary}</td>
                    <td>{props.type}</td>
                    <td>{props.date}</td>
                    <td>{props.skills}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default KeyFacts
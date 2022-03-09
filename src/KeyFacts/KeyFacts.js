import ModalHeader from "../ModalHeader/ModalHeader";

const KeyFacts = (props) => {
    return (
        <div className="container">
            <ModalHeader />
            <h4>Key facts:</h4>
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
                    <td>{props.modalData.salary}</td>
                    <td>{props.modalData.type}</td>
                    <td>{props.modalData.salary}</td>
                    <td>{props.modalData.salary}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default KeyFacts
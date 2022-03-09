import './ModalHeader.scss'
import KeyFacts from "../KeyFacts/KeyFacts";

const ModalHeader = (props) => {
    return (
        <div className="d-flex flex-column">
            <div><h4>Junior Software Dev</h4></div>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div><img src="https://www.logolynx.com/images/logolynx/c6/c64aad88540b8856765c15235a38f0ae.png" width="75" height="75"></img></div>
                <div className="col-10"><h5>Nike</h5></div>
            </div>
        </div>
    )
}

export default ModalHeader
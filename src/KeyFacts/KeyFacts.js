// import CompanyLogo from "../CompanyLogo/CompanyLogo";
// import Type from "../Type/Type";
// import Skill from "../Skill/Skill";
import ModalHeader from "../ModalHeader/ModalHeader";
import Type from "../Type/Type";
import Skill from "../Skill/Skill";


const KeyFacts = (props) => {

        // const [modalData, setModalData] = useState(null)
        //
        // const fetchJobsData = async () => {
        //     let response = await props.apiFetch("http://localhost:8080/jobs/300")
        //     setModalData(response)
        // }
        //
        // useEffect(() => {
        //     fetchJobsData()
        // }, [])

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
                        <td>
                            {props.modalData === null ? (
                                ''
                            ) : (
                                <p>£{parseFloat(props.modalData.salary).toLocaleString('en')}</p>
                            )}
                        </td>
                        <td><Type type={props.modalData.type} /></td>
                        <td>{props.modalData.posted}</td>
                        <td>
                            {props.modalData.skills.map(skillObject => (
                            <Skill jobSkill={skillObject.skill} key={skillObject.id} />
                            ))}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

export default KeyFacts
import CompanyLogo from "../CompanyLogo/CompanyLogo";
import Type from "../Type/Type";
import Skill from "../Skill/Skill";

const JobCard = (props) => {
    return (
        <tr className={'d-flex'} data-id={props.job.id}>
            <td className={'container-fluid col-5'}>
                <div className={'row'}>
                    <div className={'col-3'}>
                        <CompanyLogo logo={props.job.logo} companyName={props.job.company}/>
                    </div>
                    <div className={'col-9'}>
                        <h5 className={'card-title'}>{props.job.job_title}</h5>
                        <h6 className={'card-text'}>{props.job.company}</h6>
                    </div>
                </div>
            </td>
            <td className={'col-1'}>
                <Type type={props.job.type}/>
            </td>
            <td className={'col-2'}>
                {props.job.salary === null ? (
                    ''
                ) : (
                    <p className={'card-text'}>£{parseFloat(props.job.salary).toLocaleString('en')}</p>
                )}
            </td>
            <td className={'col-4'}>
                {props.job.skills.map(skillObject => (
                    <Skill jobSkill={skillObject.skill} key={skillObject.id}/>
                ))}
            </td>
        </tr>
    )
}

export default JobCard
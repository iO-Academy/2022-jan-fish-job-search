import CompanyLogo from "../CompanyLogo/CompanyLogo";
import Type from "../Type/Type";
import Skill from "../Skill/Skill";

const JobCard = (props) => {
    return (
        <div className={'container-fluid'}>
            <div className={'row'}>
                <div className={'col-1 p-1'}>
                    <CompanyLogo logo={props.job.logo} companyName={props.job.company}/>
                </div>
                <div className={'col-4 ps-0'}>
                    <div className={'card-body'}>
                        <h5 className={'card-title'}>{props.job.job_title}</h5>
                        <h6 className={'card-text'}>{props.job.company}</h6>
                    </div>
                </div>
                <div className={'col-1 pt-3'}>
                    <Type type={props.job.type}/>
                </div>
                <div className={'col-2 pt-3'}>
                    <p className={'card-text'}>£{parseFloat(props.job.salary).toLocaleString('en')}</p>
                </div>
                <div className={'col-4 pt-3'}>
                    {props.job.skills.map(skillObject => (
                        <Skill jobSkill={skillObject.skill} key={skillObject.id}/>
                    ))}
                </div>
            </div>
        </div>
    )


}

export default JobCard
import CompanyLogo from "../CompanyLogo/CompanyLogo";
import Type from "../Type/Type";
import Skill from "../Skill/Skill";
import {useEffect} from "react";
import './JobCard.scss'

const JobCard = (props) => {

    const handleClick = () => {
        props.openJobDetailModal(props.job.id)
    }

    useEffect( () => {
        props.fetchModalData(props.modalJobId)

    }, [props.modalJobId])


    return (
        <tr onClick={handleClick} className={'d-flex job-row'} data-id={props.job.id}>
            <td className={'d-flex flex-row col-4 col-lg-5 p-2'}>
                <div className={'col-3 d-none d-lg-block'}>
                    <CompanyLogo
                        logo={props.job.logo}
                        companyName={props.job.company}
                    />
                </div>
                <div className={'col-9 col-md-12'}>
                    <h3 className={'card-title p-1'}>{props.job.job_title}</h3>
                    <h4 className={'card-text p-1'}>{props.job.company}</h4>
                </div>
            </td>
            <td className={'col-2 col-lg-1'}>
                <Type
                    type={props.job.type}
                    backgroundColor={'bg-primary'}
                />
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
                    <Skill
                        jobSkill={skillObject.skill}
                        key={skillObject.id}/>
                ))}
            </td>
        </tr>
    )
}

export default JobCard
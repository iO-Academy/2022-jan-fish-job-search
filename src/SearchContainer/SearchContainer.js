import Button from "../Button/Button";
import TypeCheckbox from "../TypeCheckbox/TypeCheckbox";
import {useEffect, useState} from "react";
import Skill from "../Skill/Skill";

const SearchContainer = (props) => {

    const [allSkills, setAllSkills] = useState(null)
    const [popularSkills, setPopularSkills] = useState(null)
    const [showingPopularSkills, setShowingPopularSkills] = useState(true)

    const getSkillsAndSort = async () => {
        let response = await props.ApiFetch('http://localhost:8080/skills')
        response.sort(function (a, b) {
            return b.job_count - a.job_count
        })
        setAllSkills(response)
        setPopularSkills(response.slice(0, 3))
    }
    const skillsMap = showingPopularSkills ? popularSkills : allSkills

    const handleSeeMoreSkillsClick = () => {
        setShowingPopularSkills(!showingPopularSkills)
    }

    useEffect(() => {
        getSkillsAndSort()
    }, [])

    return(
        <div className={'d-flex flex-column justify-content-start gap-1'}>
            <input type="text" className="form-control" placeholder="job title / keyword / skill / company" aria-label="search bar" aria-describedby="search for jobs here" onChange={ (event) => props.handleSearchOnChange(event)}/>

                <div className={'d-flex gap-1 flex-wrap justify-content-end'}>
                    <p className={'text-white'}>Popular skills:</p>
                    {(skillsMap === null) ? (
                        ''
                    ) : (
                        skillsMap.map(skillObject => (
                            <Skill jobSkill={skillObject.skill} key={skillObject.id}/>
                        ))
                    )}
                    <div>
                        <span onClick={handleSeeMoreSkillsClick} id={'see-more-less-skills-button'} className={'badge m-1 bg-light text-dark'}>{(showingPopularSkills) ? ('See more ' + String.fromCharCode(8594)) : ('See less ' + String.fromCharCode(8592))}</span>
                    </div>
                </div>
            <div>
                <Button buttonLabel={'Search'}/>
            </div>
        </div>
    )
}

export default SearchContainer
import Button from "../Button/Button";
import TypeCheckbox from "../TypeCheckbox/TypeCheckbox";
import {useEffect, useState} from "react";

const SearchContainer = (props) => {

    const [skills, setSkills] = useState(null)

    const getSkills = async () => {
        let response = await props.ApiFetch('http://localhost:8080/skills')
        // take top 3 most used skills from response
        // set to skills array
        // use map to create skills using this array of 3 items
    }

    useEffect(() => {
        getSkills()
    }, [])

    return(
        <div className={'d-flex flex-column justify-content-start gap-1'}>
            <input type="text" className="form-control" placeholder="job title / keyword / skill / company" aria-label="search bar" aria-describedby="search for jobs here" />
            <div className={'d-flex justify-content-between'}>
                <div className={'d-flex gap-3'} id={'type-checkbox-container'}>
                    <TypeCheckbox type={'Full time'}/>
                    <TypeCheckbox type={'Part time'}/>
                    <TypeCheckbox type={'Contract'}/>
                </div>
                <div className={'d-flex gap-1'}>
                    <p className={'text-white'}>Popular skills:</p>
                </div>

            </div>
            <div>
                <Button buttonLabel={'Search'}/>
            </div>
        </div>
    )
}

export default SearchContainer
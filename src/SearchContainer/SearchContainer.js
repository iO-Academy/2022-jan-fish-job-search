import Button from "../Button/Button";
import TypeCheckbox from "../TypeCheckbox/TypeCheckbox";

const SearchContainer = () => {

    return(
        <div className={'d-flex flex-column justify-content-start'}>
            <input type="text" className="form-control" placeholder="job title / keyword / skill / company" aria-label="search bar" aria-describedby="search for jobs here" />
            <div className={'d-flex justify-content-between'}>
                <div className={'d-flex'} id={'type-checkbox-container'}>
                    <TypeCheckbox type={'Full time'}/>
                    <TypeCheckbox type={'Part time'}/>
                    <TypeCheckbox type={'Contract'}/>
                </div>

            </div>
            <div>
                <Button buttonLabel={'Search'}/>
            </div>
        </div>
    )
}

export default SearchContainer
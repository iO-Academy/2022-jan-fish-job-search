import SearchContainer from "../SearchContainer/SearchContainer";
import {useState} from "react";

const Header = (props) => {

    const [fieldInput, setFieldInput] = useState()

    const handleSearchOnChange = (event) => {
        setFieldInput(event.target.value)
    }

    return(
        <header>
            <div className={'container p-5'}>
                <h1 className={'text-white'}>Find your perfect job</h1>
                <SearchContainer
                    ApiFetch = {props.ApiFetch}
                    handleSearchOnChange = {handleSearchOnChange}
                />
            </div>
        </header>
    )
}
export default Header
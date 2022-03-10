import SearchContainer from "../SearchContainer/SearchContainer";

const Header = (props) => {

    return(
        <header>
            <div className={'container p-5'}>
                <h1 className={'text-white'}>Find your perfect job</h1>
                <SearchContainer
                    apiFetch={props.apiFetch}
                    handleSearchOnChange={props.handleSearchOnChange}
                    fetchSearchResults={props.fetchSearchResults}
                />
            </div>
        </header>
    )
}
export default Header
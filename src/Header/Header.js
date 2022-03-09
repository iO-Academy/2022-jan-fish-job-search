import SearchContainer from "../SearchContainer/SearchContainer";

const Header = () => {

    return(
        <header>
            <div className={'container p-5'}>
                <h1 className={'text-white'}>Find your perfect job</h1>
                <SearchContainer />
            </div>
        </header>
    )
}
export default Header
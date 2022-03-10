import './App.scss';
import JobTable from "./JobTable/JobTable";
import Footer from "./Footer/Footer";

const App = () => {
    const apiFetch = async (url) => {
        let data = await fetch(url)
        let jsonData = await data.json()
        return jsonData
    }

    return (
        <div>
            <JobTable apiFetch={apiFetch}/>
            <Footer/>
        </div>
    );
}
export default App

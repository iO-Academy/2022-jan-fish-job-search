import './App.scss';
import Header from "./Header/Header";
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
            <Header ApiFetch={apiFetch}/>
            <JobTable apiFetch={apiFetch}/>
            <Footer/>
        </div>
  )
}
export default App

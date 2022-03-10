import './App.css';
import './App.scss';
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import KeyFacts from "./KeyFacts/KeyFacts";

const App = () => {
    const apiFetch = async (url) => {
        let data = await fetch(url)
        let jsonData = await data.json()
        return jsonData
}
    return (
        <div>
            <Main apiFetch={apiFetch}/>
            <Footer/>
        </div>

  )
}

export default App

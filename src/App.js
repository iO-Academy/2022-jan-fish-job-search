import './App.scss';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const App = () => {
    const apiFetch = async (url) => {
        let data = await fetch(url)
        let jsonData = await data.json()
        return jsonData
    }

    return (
        <div className="App">
            <Header ApiFetch={apiFetch}/>
            <Main apiFetch={apiFetch}/>
            <Footer />

        </div>
  )
}
export default App

import './App.css';
import './App.scss';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";


const ApiFetch = async (url) => {
        let data = await fetch(url)
        let jsonData = await data.json()
        return jsonData
}

function App() {
    ApiFetch('http://localhost:8080/jobs/recent')
    return (
        <div className="App">
            <Header ApiFetch={ApiFetch}/>
            <Main />
            <Footer />

        </div>
  );
}

export default App;

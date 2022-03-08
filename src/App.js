import './App.css';
import './App.scss';
import Main from "./Main";
import Footer from "./Footer";

const ApiFetch = async (url) => {
  let data = await fetch(url)
  let jsonData = await data.json()
  console.log(jsonData)
}

function App() {
  ApiFetch('http://localhost:8080/jobs/recent')
  return (
    <div className="App">

      <Main />
      <Footer />
    
    </div>
  );
}

export default App;

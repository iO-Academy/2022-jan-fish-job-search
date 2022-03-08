import './App.scss';

const ApiFetch = async (url) => {
        let data = await fetch(url)
        let jsonData = await data.json()
        console.log(jsonData)
}

function App() {
    ApiFetch('http://localhost:8080/jobs/recent')
    return (
        <div className="App">

        </div>
  );
}

export default App;

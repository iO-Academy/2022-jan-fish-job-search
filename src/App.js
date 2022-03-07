import logo from './logo.svg';
import './App.css';
import Footer from "./Footer";
import TableHeader from "./TableHeader";
import Main from "./Main";
import JobsContainer from "./JobsContainer";

function App() {
  return (
    <div className="App">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
        <title>App.js</title>
      </head>

      <TableHeader />
      <Footer />
    </div>
  );
}

export default App;

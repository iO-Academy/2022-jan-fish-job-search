
import './App.scss';
import JobCard from "./JobCard/JobCard";

function App() {
  const job = {
    "id": "300",
    "job_title": "Junior software engineer",
    "company": "Demivee",
    "logo": "https://dummyimage.com/250/000000/89e632&text=Logo",
    "salary": "127228",
    "type": 'full-time',
    "skills": [
      {
        "id": "5",
        "skill": "Ruby"
      },
      {
        "id": "8",
        "skill": "Python"
      },
      {
        "id": "18",
        "skill": "XML"
      }
    ]
  }


  return (
    <div>
    </div>
  );
}

export default App;

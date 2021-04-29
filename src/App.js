import './App.css';
import {useEffect,useState} from 'react'
import axios from 'axios';
import ContentBasic from './Components/ContentBasic'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Spinner from './Components/Spinner'
import { BrowserRouter as Router,
          Switch,Route} 
          from 'react-router-dom'


function App() {


  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    axios.get('https://www.scorebat.com/video-api/v1/').then((Response)=>{
            setTeam(Response.data);
            setLoading(false);
        }).catch((Error)=>{
            console.log(Error);
        })
  },[])
  
  const [team,setTeam]=useState([]);
 

  return (
    <Router>
      <div className="App">
       <Nav/>
       <Switch>
          <Route path="/" exact>
              <Home/>
          </Route>
          <Route path="/:nation" children={<ContentBasic/>}>
              {loading ?<Spinner/> : <ContentBasic team={team}></ContentBasic> }
          </Route>
          {/* <Route path="/Spain">
              <h3>hello</h3>
          </Route>
          <Route path="/Germany">
          </Route> */}
          {/* <Route path="/France"></Route>
          <Route path="/Italy"></Route>
          <Route path="/korea"></Route>
          <Route path="/etc"></Route> */}
      </Switch>
      </div>
    </Router>
  );
}

export default App;


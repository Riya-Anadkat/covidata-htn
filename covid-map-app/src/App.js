
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Map, Home } from './components';
// import extrusion from 'extrusion.html';

function App() {
  return (
    <Router>
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    {/* <Route exact path="/map">
                        <Map/>    
                    </Route> */}
                    <Route exact path="/map" render={() => {window.location.href="extrusion.html"}} />
                </Switch>
            </div>
        </Router>
  );
}

export default App;

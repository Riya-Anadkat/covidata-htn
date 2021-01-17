
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Map, Home } from './components';

function App() {
  return (
    <Router>
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/map">
                        <Map/>    
                    </Route>
                </Switch>
            </div>
        </Router>
  );
}

export default App;

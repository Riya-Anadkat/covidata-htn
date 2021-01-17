import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Home, Chart, CountryPicker } from './components';

import { fetchData } from './api';


const App = () => {
    const [data, setData ] = useState({});
    const [country, setCountry] = useState('');

   
    useEffect(() =>{
    const data = fetchData();
    setData(data);
    }, []);

    const handleCountryChange = async (country) => {
        const data = await fetchData(country);
        setData(data);
        setCountry(country);
      }

    return(
        <Router>
        <div >
            <Navbar/>
            <Switch>
                <Route exact path="/">
                
                    <Home/>
                    
                
                </Route>
                <Route exact path="/graph">
                <br /><br /><br /><br /><br />
                    <CountryPicker handleCountryChange={handleCountryChange}/> 
                    <br /><br /><br />
                    <Chart data={data} country={country} />
                </Route>
                ]
                <Route exact path="/map" render={() => {window.location.href="extrusion.html"}} />
            </Switch>
        </div>
    </Router>
    );
}


export default App;

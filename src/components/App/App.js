import React from 'react';
import './App.css';
import Dashboard from "../dashboard/dashboard"
import WelcomePanel from "../welcome-panel/welcome-panel-main";
import {Route, Routes} from 'react-router-dom';
import Funnel from "../funnel/funnel";


class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Routes>
                    <Route exact path='/' element={<WelcomePanel />}/>
                    <Route path='/funnel' element={<Funnel />}/>
                    <Route path='/dashboard' element={<Dashboard />}/>
                </Routes>
            </div>
        );
    }
}


export default App;

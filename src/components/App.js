import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import People from './People/People'
import Admission1 from './Admission/Admission1'
import Admission2 from './Admission/Admission2'
import Admission3 from './Admission/Admission3'
import Branch from './BranchPart1/Branch'

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/department'>
                        <People />
                    </Route>
                    <Route path='/branch'>
                        <Branch />
                    </Route>
                    <Router path ='/governance'>
                        <h1>Governance</h1>
                    </Router>
                    <Route path='/department'>
                        <h1>Deparment</h1>
                    </Route>
                    <Router path ='/sections'>
                        <h1>sections</h1>
                    </Router>
                    <Router path ='/careers'>
                        <h1>careers</h1>
                    </Router>
                    <Router path ='/resources'>
                        <h1>resources</h1>
                    </Router>




                    <Router path ='/admission2021'>
                        <h1>admission2021</h1>
                    </Router>
                    <Router exact path ='/admission/check'>
                        <Admission1 />
                    </Router>
                    <Router exact path ='/admission/sections'>
                        <Admission2 />
                    </Router>
                    <Router exact path ='/admission/table'>
                        <Admission3 />
                    </Router>




                </Switch>
                <Footer />
            </Router>




        </div>
    )
}

export default App

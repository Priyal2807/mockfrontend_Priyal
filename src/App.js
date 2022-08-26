
import './App.css';
import MainPage from './Components/MainPage.js'
import WorkSpace from './Components/WorkSpace.js'
import Use from './Components/Use.js'
import Success from './Components/Success.js'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Scroll from './Components/Scroll.js'


const App=()=>{
    return (

        <HashRouter>
            <div className="imageContainer">
                <img src={require("./Images/logo.png")} alt="Logo" height="40" />
            </div>
            <Scroll/>
            <div className="App">
                
                <Routes>
                    <Route exact path="/" element={<MainPage />}>
                    </Route>
                     <Route exact path="/workspace" element={<WorkSpace />}>
                    </Route>
                    <Route exact path="/use" element={<Use/>}>
                    </Route>
                    <Route exact path="/success" element={<Success />}>
                    </Route>
                </Routes>
            </div>
        </HashRouter>
    )
}

export default App;

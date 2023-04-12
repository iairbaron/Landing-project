import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./components/pages/home/Home.jsx"
import "./app.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

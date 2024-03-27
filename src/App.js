import Main from "./page/Main";
import Success from "./page/Success";
// import "./App.css";
import {BrowserRouter, Route,Routes, } from "react-router-dom";


 function App() {
  return (
  <BrowserRouter>
      
      <Routes>
        
        <Route path="/" element={<Main />}/>
        <Route path="/success" element={<Success />}/>
        {/* <Route path='/main' element={<Main />}/> */}
        
      </Routes>
      
    </BrowserRouter>
  )
}

 export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Error from "./Error";



const App=()=>{
return(
  <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path="home" element={<Home/>}/>
  <Route path="about" element={<About/>}/>
  <Route path="contact" element={<Contact/>}/>
  <Route path="services" element={<Services/>}/>
  <Route path="*" element={<Error/>}/>
  

  </Route>
</Routes>
</BrowserRouter>



  </>
)
 
}
export default App;


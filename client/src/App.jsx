import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import LogIn from "./Pages/LogIn"
import SignUp from "./Pages/SignUp"
import Profile from "./Pages/Profile"
import Head from "./components/Head"


function App() {
  return (
    <BrowserRouter>
    {/*Header*/}
    <Head/>
    
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/log-in" element={<LogIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/profile" element={<Profile/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App

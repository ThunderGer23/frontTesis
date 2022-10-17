import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {
  AboutUs,
  DocumentDetails,
  DocumentList,
  Footer,
  ForgotPass,
  Login,
  NoPage,
  Profile,
  Register,
  NavBar
} from './components'

export const App = () =>{
  return(
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="fotgotpass" element={<ForgotPass />}/>
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="documentlist" element={<DocumentList />} />
          <Route path="documentdetails" element={<DocumentDetails />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="*"     element={<NoPage /> } />
        </Routes>
        <Footer/>
      </BrowserRouter>
  </>
  )
}

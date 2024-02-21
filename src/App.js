import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import UniversityTunis from "./components/Uni/UniversityTunis"
import UniversityZitouna from "./components/Uni/UniversityZitouna"
import UniversityMonastir from "./components/Uni/UniversityMonastir"
import UniversityCarthage from "./components/Uni/UniversityCarthage"
import UniversityManar from "./components/Uni/UniversityManar"



function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/UniversityTunis" component={UniversityTunis} />
          <Route exact path="/UniversityZitouna" component={UniversityZitouna} />
          <Route exact path="/UniversityMonastir" component={UniversityMonastir} />
          <Route exact path="/UniversityCarthage" component={UniversityCarthage} />
          <Route exact path="/UniversityManar" component={UniversityManar} />




          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </> 
  )
}

export default App
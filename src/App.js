import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import "./styles/style.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Termofservice from "./components/Termofservice/Termofservice";
import Commanheadbg from "./components/Commanheadbg";
import Privacypolicy from "./components/PrivacyPolicy/Privacypolicy";
import CustomerGuideline from "./components/CustomerGuidelines/CustomerGuideline";
import RestrictedProducts from "./components/RestrictedProductsList/RestrictedProducts";
import DriverGuidelines from "./components/DriverGuidelines/DriverGuidelines";
import AccessibilityStatement from "./components/AccessibilityStatement/AccessibilityStatement";
import Becomehotspot from "./components/BecomeHotspot/Becomehotspot";
import ContactUs from "./components/ContactUs/ContactUs";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/Termofservice" component={Termofservice} />
          <Route exact path="/Privacypolicy" component={Privacypolicy} />
          <Route exact path="/CustomerGuideline" component={CustomerGuideline} />
          <Route exact path="/RestrictedProducts" component={RestrictedProducts} />
          <Route exact path="/DriverGuidelines" component={DriverGuidelines} />
          <Route exact path="/Becomehotspot" component={Becomehotspot} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/AccessibilityStatement" component={AccessibilityStatement} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

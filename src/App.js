// Global Style
import GlobalStyle from "./components/GlobalStyle";
// Import Pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
// Router
import { Switch, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
                    <Route path="/react-website/" exact>
                        <AboutUs />
                    </Route>
                    <Route path="/react-website/work" exact>
                        <OurWork />
                    </Route>
                    <Route path="/react-website/work/:id">
                        <MovieDetail />
                    </Route>
                    <Route path="/react-website/contact">
                        <ContactUs />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;

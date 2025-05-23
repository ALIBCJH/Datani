import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Hero, Navbar, Works, Footer, Partners, Contact, Testimonial } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import Service from "./pages/Services";
import Quote from "./pages/Quote";
//import Partners from "./components/Partners";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-white min-h-screen">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Works />
                <Partners />
                <Contact />
                <Testimonial/>
                <Footer />
              </>
            }
          />
          <Route path="/services" element={<Service />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

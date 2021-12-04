import portofoliu from "./images/portofoliu.png";
import calculator from "./images/calculator.png";
import Proiect from "./Proiect";
import magazin from "./images/magazin.png";
import Xsi0 from "./images/x-si-0.png";
import { Route, Routes } from "react-router";
import Contact from "./Contact";
import Proiecte from "./Proiecte";
import "./App.css";
import Nav from "./Nav";
function App() {
  function Home() {
    return (
      <div className="home">
        <div className="nume">
          <div>
            <h1>Alexandru Bold</h1>
            <p>Front-end developer</p>
          </div>
        </div>
      </div>
    );
  }

  let proiect1 = {
    nume: "Magazin",
    imagine: magazin,
    tecnologii: ["React", ", ", "React-Router", ", ", "Html", ", ", "Css"],
    pages: "https://alexandrubold.github.io/magazin/",
    repository: "https://github.com/AlexandruBold/magazin",
  };

  let proiect2 = {
    nume: "Xsi0",
    imagine: Xsi0,
    tecnologii: ["React", ", ", "Html", ", ", "Css"],
    pages: "https://alexandrubold.github.io/x-si-0/",
    repository: "https://github.com/AlexandruBold/x-si-0",
  };

  let proiect3 = {
    nume: "Calculator",
    imagine: calculator,
    tecnologii: ["React", ", ", "Html", ", ", "Css"],
    pages: "https://alexandrubold.github.io/calculator/",
    repository: "https://github.com/AlexandruBold/calculator",
  };

  let proiect4 = {
    nume: "Portofoliu",
    imagine: portofoliu,
    tecnologii: ["React", "React-Router", ", ", ", ", "Html", ", ", "Css"],
    pages: "https://alexandrubold.github.io/Portofoliu/",
    repository: "https://github.com/AlexandruBold/Portofoliu",
  };
  let projects = [proiect1, proiect2, proiect3, proiect4];

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Proiecte" element={<Proiecte projects={projects} />} />
        <Route
          path="/Proiecte/:proiect"
          element={<Proiect projects={projects} />}
        />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "../src/components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import GalleryReact from "./components/MenuGallery";
import GoogleNote from "./components/GoogleNote";
import Todo from "../src/components/Todo";
import Pokemon from "../src/components/Pokemon";
import ImageSearch from "./components/ImageSearch";
import Home from './components/Home';
import CoronaTracker from './components/CoronaTracker';

// Creating Components in the same page
// const About = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical About Page</h1>
//       </section>
//     </>
//   );
// };

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route path="/about"><About /></Route> */}
      <Route path="/todo">
        <Todo />
      </Route>
      <Route path="/galleryreact">
        <GalleryReact />
      </Route>
      <Route path="/googlenote">
        <GoogleNote />
      </Route>
      <Route path="/pokemon">
        <Pokemon />
      </Route>
      <Route path="/images">
        <ImageSearch />
      </Route>
      <Route path="/corona">
        <CoronaTracker />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default App;

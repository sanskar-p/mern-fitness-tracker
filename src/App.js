import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ExercisesList from './components/ExercisesList';
import ExerciseEdit from './components/ExerciseEdit';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Route path = "/" exact component = {ExercisesList} />
        <Route path = "/edit/:id" exact component = {ExerciseEdit} />
        <Route path = "/create" exact component = {CreateExercise} />
        <Route path = "/user" exact component = {CreateUser} />
      </Router>
    </div>
  );
}

export default App;

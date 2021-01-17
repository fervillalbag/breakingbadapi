
import React from 'react';
import CharacterScreen from './components/CharacterScreen';
import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";
import Character from './components/Character';

const AppRouter = () => {
   return (
      <Router>
         <Switch>
            <Route
               exact
               path="/"
               component={Character}
            />
            <Route
               exact
               path="/character/:characterId"
               component={CharacterScreen}
            />
         </Switch>
      </Router>
   );
}

export default AppRouter;

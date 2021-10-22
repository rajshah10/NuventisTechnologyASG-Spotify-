import Categories from "./components/Categories";
import SideBar from "./components/SideBar";
import Playlist from "./components/Playlist";
import { BrowserRouter,Route, Switch, useHistory } from 'react-router-dom'//CSS imports 
import "./css/app.css"
function App() {
  return (
    <div className="App"> 
    <SideBar/>
      <BrowserRouter>
        <Switch>
            <Route exact path="/">
              
              <Categories/>
            </Route>

            <Route path="/category/:name">
                <Playlist/>
            </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

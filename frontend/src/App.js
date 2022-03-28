import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Admin } from "./Modules/Admin/Admin";
import { Public } from "./Modules/Public/Public";
import { LogIn } from "./Modules/Admin/Auth/Components/Login/LogIn";
import { Register } from "./Modules/Admin/Auth/Components/Register/Register";
import { Updatepost } from "./Modules/Admin/Postt/Components/Updatepost/Updatepost";

const isLogged =
  localStorage.getItem("access_token") !== null &&
  localStorage.getItem("access_token") !== "";


function App() {
  return (
    <>
    {/* <Admin /> */}
    {/* <Public /> */}
      {/* <BrowserRouter>
        <Switch>
          <Route path="/admin">
            {isLogged ? <Admin /> : <Redirect to="/admin-login" />}
          </Route>
          <Route path="/admin-login">
            {isLogged ? <Redirect to="/admin" /> : <LogIn />}
          </Route>
          <Route path="/admin-register">
            <Register />
          </Route>
          <Route path="/">
            <Public />
          </Route>
        </Switch>
      </BrowserRouter> */}
      <Updatepost />
   
      
    </>
  );
}

export default App;

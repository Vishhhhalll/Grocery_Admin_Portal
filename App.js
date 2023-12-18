import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import ListProduct from "./pages/LIst Product/ListProduct";
import Single from "./pages/single/Single";
import New from "./pages/new/NewProduct";
// import {Crud} from "./pages/new/NewProduct";
import { CrudOrder } from "./pages/new/NewOrder";
import NewUser from "./pages/new/NewUser";
import NewOrder from "./pages/new/NewOrder";
// import Form from "./pages/new/Form";
import Edit from "./pages/Edit/Edit";
import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs, orderInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Order from "./pages/Order/Order"
import Profile from "./pages/profile/Profile";
import Inventory from "./pages/Inventory/Inventory";
import Staff from "./pages/staff/Staff";
import Role from "./pages/Role/Role";
import Protected from "./components/Protected";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Protected Component={Home} />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Protected Component={Profile} />} />
            <Route path="users">
              <Route index element={<Protected Component={List} />} />
              <Route path="view" element={<Single />} />
              
            </Route>
            <Route path="products">
              <Route index element={<ListProduct />} />
              <Route path=":productId" element={<Edit />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="orders">
              <Route index element={<Order />} />
              <Route path=":orderId" element={<Single />} />
              <Route
                path="new"
                element={<NewOrder inputs={orderInputs} title="Add New Order" />}
              />
            </Route>
            <Route path="inventory">
              <Route index element={<Inventory />} />
              <Route path=":inventoryId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={orderInputs} title="Add New Inventory" />}
              />
            </Route>
            <Route path="staff">
              <Route index element={<Staff />} />
              <Route path=":staffId" element={<Single />} />
              <Route
                path="new"
                // element={<NewOrder inputs={orderInputs} title="Add New Order" />}
              />
            </Route>
            <Route path="role">
              <Route index element={<Role />} />
              <Route path=":roleId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={orderInputs} title="Add New Role" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import MenuPage from "./pages/MenuPage";
import ReservationPage from "./pages/ReservationPage";
import MyAccount from "./pages/MyAccount";
import MyReservations from "./pages/MyReservations";
import Logout from "./pages/Logout";
import EditReservation from "./pages/EditReservation";
import DeleteAccount from "./pages/DeleteAccount";

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/nosotros"
          element={<About />}
        />
        <Route
          path="/menu"
          element={<MenuPage />}
        />
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/reservas"
          element={<ReservationPage />}
        />
        <Route
          path="/micuenta"
          element={<MyAccount />}
        />
        <Route
          path="/misreservas"
          element={<MyReservations />}
        />
        <Route
          path="/logout"
          element={<Logout />}
        />
        <Route
          path="/editar-reserva/:id"
          element={<EditReservation />}
        />
        <Route
          path="/eliminar-cuenta"
          element={<DeleteAccount />}
        />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
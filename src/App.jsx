import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import Cadastro from "./components/cadastro/Cadastro";
import AdminController from "./components/admin/AdminController";
import Home from "./components/home/Home";
import NewsPage from "./components/home/NewsPage";
import { CrudUser } from "./components/crud-user/user";
import { ProtectedRoute } from "./routing/ProtectedRoute";
import SendToken from "./components/recovery/SendToken";
import Recovery from "./components/recovery/Recovery";
import NewPassword from "./components/recovery/NewPassword";
import PasswordResetRoute from "./components/recovery/PasswordResetRoute";
import RegisterNews from "./components/admin/RegisterNews";
import UpdateNews from "./components/admin/UpdateNews";
import AdminHome from "./components/admin/AdminHome";
import NewsDetails from "./components/news/NewsDetails";


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<ProtectedRoute children={<Home />} />} />
        <Route path="/" element={<NewsPage />} />
        <Route path="/admin" element={<ProtectedRoute redirectPath="/home" children={<AdminController />} adminOnly />} />
        <Route path="/admin/new-places" element={<ProtectedRoute redirectPath="/home" children={<RegisterNews />} adminOnly />} />
        <Route path="/admin/update-news/:id" element={<ProtectedRoute redirectPath="/" children={<UpdateNews />} adminOnly />} />
        <Route path="/admin/home" element={<ProtectedRoute redirectPath="/home" children={<AdminHome />} adminOnly />} />
        <Route path="/updateUser" element={<ProtectedRoute children={<CrudUser />} />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/recoveryToken" element={<PasswordResetRoute element={<SendToken />} routeName="recoveryToken" />} />
        <Route path="/newPassword" element={<PasswordResetRoute element={<NewPassword />} routeName="newPassword" />} />
        <Route path="/*" element={<Navigate to="/home" />} />
        <Route path="/news/details/:id" element={<NewsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

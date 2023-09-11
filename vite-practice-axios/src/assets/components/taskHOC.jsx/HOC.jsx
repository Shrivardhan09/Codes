import { Navigate, useLocation } from "react-router-dom"

const HOC = ({ children }) => {
    const { pathname } = useLocation()
    const isLoggedIn = localStorage.getItem("isLoggedIn")

    if (!isLoggedIn && pathname !== "/login") {
        return <Navigate replace to="/login" />;
    }

    if (isLoggedIn && pathname === "/login") {
        return <Navigate replace to="/" />;
    }

    return children;
};

export default HOC;


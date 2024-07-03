import { Navigate } from "react-router-dom";
// import Loading from "../components/loading/Loading";
import useAdmin from "../hooks/useAdmin";
import { useAuth } from "../auth/AuthContext";
// import useAuth from "../hooks/useAuth";

const AdminRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const [admin, isAdminPending] = useAdmin();

    if (loading || isAdminPending) {
        // return <Loading />;
        return ('loading');
    }
    if (user && admin) {
        return children;
    }
    return <Navigate to="/login" />;
};

export default AdminRouter;

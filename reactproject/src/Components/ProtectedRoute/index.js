import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAdmin, isLoading }) => {
  const authToken = localStorage.getItem('authToken');

    // Show loading state while checking admin status
    if (isLoading) {
      return (
        <div className="loading-spinner">
          Loading...
        </div>
      );
    }

    // If there's no token or user is not admin, redirect to login
    // !authToken is to save time, since there's no token, it's guaranteed that user is not admin
    if (!authToken || !isAdmin) {
      return <Navigate to="/login" replace />;
    }

    // render protected routes
    return <Outlet />;
};

export default ProtectedRoute;

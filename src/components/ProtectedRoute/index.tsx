import { Navigate } from "react-router-dom";


function ProtectedRoute({ children, auth }: { children?: any; auth?: Boolean }) {
  const token = JSON.parse(localStorage.getItem("token")||"false");
  if (!token) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/" />;
  }

  // authorized so return child components
  return children;
}
export default ProtectedRoute ;

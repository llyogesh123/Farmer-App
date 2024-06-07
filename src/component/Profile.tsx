import { useLocation, useNavigate } from 'react-router-dom';

export default function Profile() {
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location;
    const { loginDetails } = state || {};
  
    if (!loginDetails) {
        // Navigate to login page or show a message
        navigate("/login");
        return null;
      }
  
    console.log('state:', state);
    console.log('loginDetails:', loginDetails);
  
    return (
      <div>
        <h1>Profile</h1>
        {loginDetails && (
          <div>
            <p>Username: {loginDetails.username}</p>
            <p>Password: {loginDetails.password}</p>
          </div>
        )}
      </div>
    );
}
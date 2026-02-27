import { useEffect, useState } from 'react'
import { supabase } from './lib/supabaseClient'
import './App.css';
function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', contact: '', password: '', confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation for Sign Up only
    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        alert("🍃 Nature says: Passwords must match!");
        return;
      }
      if (formData.password.length < 6) {
        alert("Password is too short. Like a sprout, it needs to grow (min 6 chars)!");
        return;
      }
    }

    alert("Welcome to the grove! Redirecting...");
    window.location.href = "/dashboard"; 
  };

  return (
    <div className="auth-wrapper">
      <div className="card p-4 auth-card">
        <div className="text-center mb-4">
            <span style={{fontSize: '40px'}}>🌲</span>
            <h2>{isLogin ? 'Forest Login' : 'Join the Grove'}</h2>
        </div>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="row g-2 mb-3">
              <div className="col"><input type="text" name="firstName" className="form-control" placeholder="First Name" onChange={handleChange} required /></div>
              <div className="col"><input type="text" name="lastName" className="form-control" placeholder="Last Name" onChange={handleChange} required /></div>
            </div>
          )}

          <div className="mb-3">
            <input type="email" name="email" className="form-control" placeholder="Email Address" onChange={handleChange} required />
          </div>

          {!isLogin && (
            <div className="mb-3">
              <input type="tel" name="contact" className="form-control" placeholder="Contact Number" onChange={handleChange} required />
            </div>
          )}

          <div className="mb-3">
            <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} required />
          </div>

          {!isLogin && (
            <div className="mb-3">
              <input type="password" name="confirmPassword" className="form-control" placeholder="Confirm Password" onChange={handleChange} required />
            </div>
          )}

          <button type="submit" className="btn-forest w-100 fw-bold shadow-sm">
            {isLogin ? 'Enter Forest' : 'Plant Your Account'}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="small text-muted">
            {isLogin ? "New to the woods?" : "Already a member?"} 
            <button className="btn btn-link btn-sm text-success-forest p-0 ms-1" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Create an account" : "Login here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
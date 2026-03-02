import React from 'react';

const HeroAndLogin = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row align-items-center">
        {/* Hero Section */}
        <div className="col-lg-6 text-white mb-5 mb-lg-0">
          <h1 className="display-3 fw-bold mb-4">Welcome to User Management System</h1>
          <p className="lead opacity-75">
            The ultimate professional dashboard for managing your team, 
            permissions, and security settings in one sleek interface.
          </p>
        </div>

        {/* Login Form Section */}
        <div className="col-lg-5 offset-lg-1">
          <div className="card sleek-card p-4 p-md-5">
            <h3 className="text-center fw-bold mb-4">Sign In</h3>
            <form>
              <div className="mb-3">
                <label className="form-label small fw-bold">Email Address</label>
                <input type="email" className="form-control form-control-lg" placeholder="name@example.com" />
              </div>
              <div className="mb-4">
                <label className="form-label small fw-bold">Password</label>
                <input type="password" className="form-control form-control-lg" placeholder="••••••••" />
              </div>
              <button className="btn btn-primary btn-lg w-100 mb-3 shadow-sm" style={{background: '#764ba2', border: 'none'}}>
                Login
              </button>
              <div className="text-center">
                <p className="small mb-0">
                  Don't have an account? <a href="#" className="text-decoration-none fw-bold" style={{color: '#667eea'}}>Sign up</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAndLogin;
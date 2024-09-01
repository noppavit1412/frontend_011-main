'use client';
import { useState } from 'react';

export default function Page() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [success, setSuccess] = useState(''); // For handling success

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://backend-main-lyart.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ firstname, lastname, username, password }),
      });

      if (res.ok) {
        setSuccess('ลงทะเบียนสำเร็จ!'); // Show success message
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <>
      <br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header bg-success text-white">
            SignUp Form
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="firstname" className="form-label">First Name</label>
                <div className="input-group">
                  <span className="input-group-text" id="firstname-addon">
                    <i className="bi bi-person-vcard"></i>
                  </span>
                  <input
                    type="text"
                    id="firstname"
                    className="form-control"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">Last Name</label>
                <div className="input-group">
                  <span className="input-group-text" id="lastname-addon">
                    <i className="bi bi-person-vcard-fill"></i>
                  </span>
                  <input
                    type="text"
                    id="lastname"
                    className="form-control"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text" id="username-addon">
                    <i className="bi bi-person-vcard"></i>
                  </span>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text" id="password-addon">
                    <i className="bi bi-person-vcard-fill"></i>
                  </span>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassWord(e.target.value)}
                    required
                  />
                </div>
              </div>
              {success && (
                <div className="col-12">
                  <div className="alert alert-success" role="alert">
                    {success}
                  </div>
                </div>
              )}
              <div className="col-12">
                <button type="submit" className="btn btn-success">
                  <i className="bi bi-box-arrow-right"></i> Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import './PersonalDetails.css'; // Import the updated CSS file

const PersonalDetails = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="full-page-container">
      <div className="personal-details-wrapper">
        {/* Left side: Profile photo */}
        <div className="profile-photo-container">
          {user?.photo && (
            <img 
              src={user.photo} // Display the base64 image
              alt="Profile" 
              className="profile-img" 
            />
          )}
        </div>

        {/* Right side: User information in a table format */}
        <div className="info-table-container">
          <h3 className="title">Personal Details</h3>
          <table className="info-table">
            <tbody>
              <tr>
                <th>Name:</th>
                <td>{user?.name}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{user?.email}</td>
              </tr>
              <tr>
                <th>Mobile:</th>
                <td>{user?.mobile}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;

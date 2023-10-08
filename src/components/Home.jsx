import "../styles/Home.css";
import users from "../dummyData/storiseData";
import PostList from "./PostList";
import Modal from "react-modal";
import { useState } from "react";

const UserProfileSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  {
    {/* Function to open the modal when a user is clicked */}
  }
 
  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  {
    {/* Function to close the modal */}
  }

  const closeModal = () => {
    setSelectedUser(null); 
    setIsModalOpen(false);
  }; 

  return (
    <div className="main-container">
      <div className="lef-side-section">
        <div className="stories-section">
          <div className="stories-container">
            {users.map((user, index) => (
              <div key={index} className="user-profile-card" onClick={() => openModal(user)}>
                <img
                  src={user.profileImg}
                  alt={`User ${index + 1}`}
                  className="profile-image"
                />
                <p>{user.name}</p>
              </div>
            ))}
	   {/* Modal for user-stories */}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className="custom-modal"
            overlayClassName="custom-overlay"
          >
            {selectedUser && (
              <div className="modal-content">
                <img
                  src={selectedUser.storyContent}
                  alt={`User-story`}
                  className="user-story"
                />

                {/* Cris-cross (X) icon for closing */}
                <i className="fas fa-times close-icon" onClick={closeModal}></i>
              </div>
            )}
          </Modal>
          </div>
        </div>

        <div className="random-posts-section">
          <PostList />
        </div>
      </div>
      
    </div>
  );
};

export default UserProfileSection;

// Chat.js
import chatsData from '../dummyData/chatsData';
import '../styles/Chat.css'

const Chat = () => {
  return (
    <div className="chat">
      {chatsData.map((chat) => (
        <div key={chat.id} className="chat-message">
          <img src={chat.user.profileImg} alt={`${chat.user.name}'s profile`} />
          <div className="message-content">
            <p className="user-name-chat">{chat.user.name}</p>
            <p className="message-text">{chat.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chat;

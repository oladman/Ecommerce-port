const Message = ({ type, icon: Icon, message, className }) => {
    if (!message) return null;
  
    return (
      <div className={className}>
        <Icon  /> <p>{message}</p>
      </div>
    );
  };
  
  export default Message;
  
const NormalButton = ({ children, onClick, className, type, name }) => {
    return (
      <button className={className} onClick={onClick} type={type} name={name}>
        {children}
      </button>
    );
  };
  
  export default NormalButton;
  
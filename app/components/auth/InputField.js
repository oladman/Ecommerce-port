const InputField = ({ type, placeholder, register, name, className, value, onChange, ...rest }) => {
  return (
    <input
      {...(register ? register(name) : { value, onChange })} // Use register if available, else fallback to controlled mode
      type={type}
      name={name}
      className={className}
      placeholder={placeholder}
      {...rest} // Pass additional props like `required`, `disabled`
    />
  );
};

export default InputField;

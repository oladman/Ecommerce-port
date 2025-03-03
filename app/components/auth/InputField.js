

const InputField = ({ type, placeholder, register, name, className }) => {
  return (
    <input
      {...register(name)}
      type={type}
      className={className}
      placeholder={placeholder}
    />
  )
}

export default InputField
const CustomInput = ({ placeholder, type, handleChange, value, name }) => {
  return (
    <div className="md:w-[43%] md:h-[50px] lg:w-[33%]">
      <input
        className="outline-none w-full h-10 px-3 font-light md:h-full"
        placeholder={placeholder}
        type={type}
        required
        onChange={handleChange}
        value={value}
        name={name}
      />
    </div>
  )
}

export default CustomInput

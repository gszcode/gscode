const CustomInput = ({ placeholder, type }) => {
  return (
    <div className="md:w-[43%] md:h-[50px] lg:w-[33%]">
      <input
        className="outline-none w-full h-10 px-3 font-light md:h-full"
        placeholder={placeholder}
        type={type}
        required
      />
    </div>
  )
}

export default CustomInput

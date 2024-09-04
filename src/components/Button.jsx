
const Button = ({label, iconURL}) => {
  return (
    <button className="flex px-7 py-4 justify-center items-center text-white bg-coral-red leading-none rounded-full font-montserrat">
      {label}
      <img src={iconURL} alt="arrowRight-icon" 
      className="w-5 h-5 ml-2 rounded-full" />
    </button>
  );
};

export default Button;

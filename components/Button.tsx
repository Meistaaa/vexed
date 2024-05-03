const Button = ({ name }: { name: string }) => {
  return (
    <button className="button-gradient text-xs md:text-xs lg:text-lg   px-5 py-3   md:block  text-white rounded-xl ">
      {name}
    </button>
  );
};

export default Button;

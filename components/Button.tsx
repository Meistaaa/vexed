const Button = ({ name }: { name: string }) => {
  return (
    <button className="button-gradient  px-5 py-3 text-white rounded-xl ">
      {name}
    </button>
  );
};

export default Button;

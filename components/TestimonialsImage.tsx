const TestimonialsImage = ({ image }: { image: string }) => {
  return (
    <div>
      <div className="z-10 text-white relative flex justify-center items-center bg-black">
        <div className="button-gradient h-64 w-64 rotate-45 rounded-[50px] absolute p-6 bottom-[40px] -left-[120px] flex justify-center items-center bg-red">
          <div className="bg-white h-full w-full rounded-[50px] flex justify-center items-center">
            <img src={image} alt="" className="-rotate-45 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsImage;

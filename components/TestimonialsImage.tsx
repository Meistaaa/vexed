const TestimonialsImage = ({ image }: { image: string }) => {
  return (
    <div>
      <div className="z-10 text-white relative flex justify-center items-center bg-black">
        <div className="button-gradient h-24 w-24 md:w-48 md:h-48 lg:h-64 lg:w-64 rotate-45 rounded-[25px] md:rounded-[50px] absolute p-5 md:p-6 bottom-[25px] -left-[53px] md:bottom-[50px] md:-left-[100px] lg:bottom-[40px] lg:-left-[120px] flex justify-center items-center bg-red">
          <div className="bg-white h-full w-full rounded-[12px] md:rounded-[50px] flex justify-center items-center">
            <img
              src={image}
              alt=""
              className="-rotate-45 rounded-full h-8 w-8 md:h-20 md:w-20 lg:w-32 lg:h-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsImage;

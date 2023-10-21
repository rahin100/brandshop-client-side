const Follow = () => {
  return (
    <div className="lg:flex justify-center items-center mb-[100px]">
      <div className="lg:w-1/2">
        <img
          className="h-[130vh] w-full"
          src="https://i.ibb.co/qYWpT2Z/2feeec-772afa4c38664ad1ab57b12541811f90-mv2.jpg"
          alt=""
        />
      </div>
      <div className="bg-[#CC5500] lg:w-1/2 h-[130vh] relative">
        <div className="flex justify-center items-center lg:pt-[180px] pt-[90px]">
          <div className="w-2/3">
            <img
            className="w-full"
              src="https://i.ibb.co/2YvyHtd/shutterstock-1671712186-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="absolute lg:bottom-[35%] bottom-[42%] ">
          <h2 className="lg:text-6xl text-3xl text-white text-center font-extrabold">
            Fashion fades, but style is eternal.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Follow;

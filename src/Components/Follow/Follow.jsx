const Follow = () => {
  return (
    <div className="flex justify-center items-center mb-[100px]">
      <div className="w-1/2">
        <img
          className="h-[130vh] w-full"
          src="https://i.ibb.co/qYWpT2Z/2feeec-772afa4c38664ad1ab57b12541811f90-mv2.jpg"
          alt=""
        />
      </div>
      <div className="bg-[#CC5500] w-1/2 h-[130vh] relative">
        <div className="flex justify-center items-center mt-[250px]">
          <div className="">
            <img
              src="https://i.ibb.co/2YvyHtd/shutterstock-1671712186-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="absolute bottom-[35%]">
          <h2 className="text-6xl text-white text-center font-extrabold">
            Fashion fades, but style is eternal.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Follow;

import "./Discount.css";

const Discount = () => {
  return (
    <div className="relative mb-[60px]">
      <div className="background-image">
      <div className="w-full h-[66vh] absolute inset-0 bg-black opacity-50 "></div>
        <div className="absolute left-[50%] transform -translate-x-1/2">
          <h1 className="text-7xl text-white text-center pt-[80px]">
            SUBSCRIBE FOR A 20% DISCOUNT
          </h1>
          <div className="flex justify-center items-center mt-[80px]">
            <div className="text-center">
              <input
                className="p-3 w-[700px] rounded-md "
                type="email"
                name="email"
                placeholder="Email here..."
                id=""
              />
            </div>
            <button className="btn rounded-r-lg text-white text-[18px] border-0 bg-[#FFDE2E] ml-[-1px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;

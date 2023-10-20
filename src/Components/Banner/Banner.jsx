const Banner = () => {
  return (
    <div className="mb-[100px]">
      <div className="carousel w-full h-[90vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/Lr5Kxck/joyful-girl-with-curly-brown-hair-dancing-purple-background-with-kissing-face-expression.jpg"
            className="w-full"
          />
          <div className="absolute lg:left-[190px] left-[70px]   top-[30%]">
            <h1 className="text-white lg:text-8xl text-2xl mb-3  font-semibold">
              FASHION
            </h1>
            <h2 className="text-white lg:text-8xl text-2xl mb-3 font-semibold">
              CHANGES
            </h2>
            <h3 className="text-white lg:text-8xl text-2xl mb-5 font-semibold">
              ALWAYS...
            </h3>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="btn btn-circle bg-transparent text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/3cwFCT5/cheerful-caucasian-woman-showing-directions-two-ways-pointing-sideways-variants-choices-custo.jpg"
            className="w-full"
          />
          <div className="absolute lg:left-[190px] left-[60px]  top-[30%]">
            <h1 className="text-white lg:text-8xl  text-2xl mb-3  font-semibold">
              FASHION
            </h1>
            <h2 className="text-white lg:text-8xl  text-2xl mb-3 font-semibold">
              CHANGES
            </h2>
            <h3 className="text-white lg:text-8xl  text-2xl mb-3 font-semibold">
              ALWAYS...
            </h3>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/Rv4rwKY/pretty-woman-coat-looking-camera.jpg"
            className="w-full"
          />
          <div className="absolute lg:left-[190px] left-[70px]    top-[30%]">
            <h1 className="text-white lg:text-8xl  text-2xl mb-3  font-semibold">
              FASHION
            </h1>
            <h2 className="text-white lg:text-8xl  text-2xl mb-3 font-semibold">
              CHANGES
            </h2>
            <h3 className="text-white lg:text-8xl   text-2xl mb-3 font-semibold">
              ALWAYS...
            </h3>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent text-white"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-transparent text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/68L9HrJ/two-young-beautiful-blond-smiling-hipster-women-trendy-summer-clothes-sexy-carefree-women-posing-nea.jpg"
            className="w-full"
          />
          <div className="absolute lg:left-[190px]  left-[70px]   top-[30%]">
            <h1 className="text-white lg:text-8xl  text-2xl mb-3  font-semibold">
              FASHION
            </h1>
            <h2 className="text-white lg:text-8xl  text-2xl mb-3 font-semibold">
              CHANGES
            </h2>
            <h3 className="text-white lg:text-8xl  text-2xl mb-3 font-semibold">
              ALWAYS...
            </h3>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

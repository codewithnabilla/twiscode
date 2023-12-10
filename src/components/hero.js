import Image from "next/image";
function Hero() {
  return (
    <div className="container mx-auto px-20 pt-5">
      <div className="flex-row md:flex justify-between ">
        <div className="flex-1 mt-24">
          <h1 className="text-center md:text-left text-6xl font-bold leading-normal">
            We Code <br /> We Deliver
          </h1>
          <p className="text-center md:text-left mt-2">
            Scale your business to new heights of success with modern web app
            solutions that seamlessly grow your user base. We help you launch
            and scale your Mobile and Web Apps. Since 2014 we build custom
            applications loved by millions.
          </p>
          <div className="ml-20 md:ml-0 mt-10">
            <button className="px-10 text-white bg-blue-400 py-3 md:px-5 rounded-md hover:bg-blue-800">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/hero.jpg"
            className="object-contain md:object-scale-down"
            width={500}
            height={500}
            alt="tech"
          />
        </div>
      </div>
    </div>
  );
}
export default Hero;

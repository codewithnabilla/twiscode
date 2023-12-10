import Image from "next/image";
function About() {
  return (
    <div>
      <div className="mt-8 bg-gray-100 pb-15">
        <div className="container mx-auto px-20 pt-5">
          <div className="flex-row md:flex mt-5 py-10 justify-between">
            <div className="mb-10 mt-10 md:mb-0 flex-1 md:mt-20">
              <Image
                src="/team.jpg"
                className="object-contain md:object-scale-down"
                width={500}
                height={500}
                alt="team"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold ">About Us</h1>
              <p className=" mt-5">
                From initial consultation the final product, twiscode attention
                to detail and commitment to excellence is unparalled. Our
                experts combine cutting-edge tech with creative design to
                deliver web apps that exceed expectations.
              </p>
              <div className="mt-5">
                <h1 className="text-lg font-bold ">Company History</h1>
                <p>
                  Since 2014 we build custom applications loved by millions.
                </p>
              </div>
              <div className="mt-5">
                <h1 className="text-lg font-bold ">Our Teams</h1>
                <p>
                  twiscode has a competent and solid team so it is able to
                  create perfect products.
                </p>
              </div>
              <div className="mt-5">
                <h1 className="text-lg font-bold ">Company Culture</h1>
                <p>twiscode is a company that prioritizes work life balance.</p>
              </div>
              <div className="ml-20 md:ml-0 mt-10">
                <button className="px-10 text-white bg-blue-400 py-3 md:px-5 rounded-md hover:bg-blue-800">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

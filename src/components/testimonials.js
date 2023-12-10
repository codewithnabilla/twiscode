import Image from "next/image";
function Testimonial() {
  return (
    <div className="mt-8 bg-gray-100">
      <div className="container mx-auto px-20 pt-5 pb-20">
        <div className="py-10">
          <h1 className="text-4xl font-bold text-center">Testimonials</h1>
          <p className="text-center mt-5">
            We have worked with thousands of amazing people
          </p>
        </div>
        <div className="grid grid-rows md:grid-cols-2 gap-4">
          <div className="p-10 bg-gray-200 rounded-md">
            <p className="text-center md:text-left">
              “The leadership of this organization is impressive. I can not say
              enough about how aligned they have been achieving our business.”
            </p>
            <div className="flex items-center mt-8">
              <div className="mr-5">
                <Image
                  src="/user.jpg"
                  className="rounded-full"
                  width={50}
                  height={50}
                  alt="user"
                />
              </div>
              <div>
                <p className="font-bold">Leslie Alexander</p>
                <p>lesliealexander@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="p-10 bg-gray-200 rounded-md">
            <p className="text-center md:text-left">
              “The result delivery faster than even we are able to keep up with.
              Good work twiscode teams!”
            </p>
            <div className="flex items-center mt-8">
              <div className="mr-5">
                <Image
                  src="/user-2.jpg"
                  className="rounded-full"
                  width={50}
                  height={50}
                  alt="user"
                />
              </div>
              <div>
                <p className="font-bold">Narnia Layla</p>
                <p>narnialayla@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="p-10 bg-gray-200 rounded-md">
            <p className="text-center md:text-left">
              “The App solutions teams has proven to be highly professional,
              flexible, and vey competent”
            </p>
            <div className="flex items-center mt-8">
              <div className="mr-5">
                <Image
                  src="/user-3.jpg"
                  className="rounded-full"
                  width={50}
                  height={50}
                  alt="user"
                />
              </div>
              <div>
                <p className="font-bold">Angela Smith</p>
                <p>angelasmith@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="p-10 bg-gray-200 rounded-md">
            <p className="text-center md:text-left">
              “Working with twiscode is real pleasure. All thei team members are
              friendly, professional, and detail-oriented. A real treat!”
            </p>
            <div className="flex items-center mt-8">
              <div className="mr-5">
                <Image
                  src="/user-4.jpg"
                  className="rounded-full"
                  width={50}
                  height={50}
                  alt="user"
                />
              </div>
              <div>
                <p className="font-bold">John Patrick</p>
                <p>jhonpatrick@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonial;

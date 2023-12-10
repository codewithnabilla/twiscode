import { FaCheck } from "react-icons/fa";
function Products() {
  return (
    <div className="container mx-auto px-20 pt-5">
      <div className="mt-10">
        <h1 className="text-2xl font-bold">Our Services</h1>
        <p className="mt-5">
          Offering a comprehensive range of web app development services, our{" "}
          <br />
          team of experts deep into your business challenges to deliver a <br />
          perfectly products.
        </p>
      </div>
      <div className="flex-row md:flex gap-8 mt-20">
        <div className="flex-1">
          <div className="border border-gray-300 rounded-3xl p-8 mb-5 md:mb-0">
            <h1 className="font-bold text-lg">Web Development</h1>
            <p className="mt-5">
              Building any web application you need. We can build personal blog,
              company profile, E-commerce, and many more. We done have them all
              and we can done them all fast.
            </p>
            <div className="mt-10">
              <div className="flex gap-3 mt-2">
                <p className="mt-1">
                  <FaCheck />
                </p>
                <p>User-Friendly Design.</p>
              </div>
              <div className="flex gap-3 mt-2">
                <p className="mt-1">
                  <FaCheck />
                </p>
                <p>Effective Navigation.</p>
              </div>
              <div className="flex gap-3 mt-2">
                <p className="mt-1">
                  <FaCheck />
                </p>
                <p>Responsive Design.</p>
              </div>
              <div className="flex gap-3 mt-2">
                <p className="mt-1">
                  <FaCheck />
                </p>
                <p>Page Loading Speed.</p>
              </div>
              <div className="flex gap-3 mt-2">
                <p className="mt-1">
                  <FaCheck />
                </p>
                <p>Search Engine Optimization (SEO).</p>
              </div>
            </div>
            <div className="mt-8">
              <button className="text-white bg-slate-800 py-3 px-20 rounded-md hover:bg-slate-500">
                Contact Us
              </button>
            </div>
            <div className="mt-2">
              <button className="text-black bg-inherit py-3 px-20 rounded-md hover:bg-slate-500 border border-slate-500">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="border border-gray-300 rounded-3xl p-8 mb-5 md:mb-0">
            <h1 className="font-bold text-lg">App Development</h1>
            <p className="mt-5">
              Building any web application you need. We can build aplication,
              company profile, E-commerce, and many more. We done have them all
              and we can done them all fast.
            </p>
            <div className="mt-10">
              <div className="flex gap-3 mt-2">
                <p className="mt-1">
                  <FaCheck />
                </p>
                <p>Clear Purpose and Target Audience.</p>
              </div>
              <div className="flex gap-3 mt-2">
                <p className="mt-1">
                  <FaCheck />
                </p>
                <p>Responsive Design.</p>
              </div>
              <div className="flex gap-3 mt-2">
                <p className="mt-1">
                  <FaCheck />
                </p>
                <p>Platform Compatibility.</p>
              </div>
              <div className="flex gap-3 mt-2">
                <p className="mt-1">
                  <FaCheck />
                </p>
                <p>Seamless Onboarding Process.</p>
              </div>
              <div className="flex gap-3 mt-2">
                <p className="mt-1">
                  <FaCheck />
                </p>
                <p>Interactive Elements.</p>
              </div>
            </div>
            <div className="mt-8">
              <button className="text-white bg-slate-800 py-3 px-20 rounded-md hover:bg-slate-500">
                Contact Us
              </button>
            </div>
            <div className="mt-2">
              <button className="text-black bg-inherit py-3 px-20 rounded-md hover:bg-slate-500 border border-slate-500">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="border border-gray-300 rounded-3xl p-8 mb-5 md:mb-0">
            <h1 className="font-bold text-lg">UI/UX Design</h1>
            <p className="mt-5">
              Building any web application you need. We can build personal blog,
              company profile, E-commerce, and many more. We done have them all
              and we can done them all fast.
            </p>
            <div className="mt-10">
              <div className="flex gap-3 mt-2">
                <p className="mt-1">
                  <FaCheck />
                </p>
                <p>User Research.</p>
              </div>
              <div className="flex gap-3 mt-2">
                <p className="mt-1">
                  <FaCheck />
                </p>
                <p>Clear Goals and Objectives.</p>
              </div>
              <div className="flex gap-3 mt-2">
                <p className="mt-1">
                  <FaCheck />
                </p>
                <p>User Testing and Error Handling.</p>
              </div>
              <div className="flex gap-3 mt-2">
                <p className="mt-1">
                  <FaCheck />
                </p>
                <p>Information Architecture and Post-Launch Evaluation.</p>
              </div>
              <div className="flex gap-3 mt-2">
                <p className="mt-1">
                  <FaCheck />
                </p>
                <p>Responsive Design.</p>
              </div>
            </div>
            <div className="mt-8">
              <button className="text-white bg-slate-800 py-3 px-20 rounded-md hover:bg-slate-500">
                Contact Us
              </button>
            </div>
            <div className="mt-2">
              <button className="text-black bg-inherit py-3 px-20 rounded-md hover:bg-slate-500 border border-slate-500">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Products;

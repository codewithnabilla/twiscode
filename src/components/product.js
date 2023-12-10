function Product() {
  return (
    <div className="mt-8 bg-white pb-20">
      <div className="container mx-auto px-20 pt-5">
        <div className="p-10">
          <h1 className="text-4xl font-bold text-center">What We Do?</h1>
          <p className="text-center mt-5">
            We understand the importance of safeguarding your data and
            maintaining the integrity of your web application, which is why we
            prioritize security throughout every stage of the software product
            lifecycle.
          </p>
        </div>
        <div className="flex-row md:flex justify-between mt-10">
          <div className="flex-1">
            <div className="mb-5 md:mb-0 bg-gray-100 p-10 mr-5 rounded-md">
              <p className="font-bold mb-5 text-xl text-center md:text-left">
                Mobile Application
              </p>
              <p className="text-center md:text-left">
                Building mobile application is never easy. We can build P2P
                landing app, logistic app, E-commerce app, and many more. We
                done have them all and we can done them all fast.
              </p>
              <div className="ml-7 md:ml-0 mt-10">
                <button className="px-10 text-white bg-gray-500 py-3 md:px-5 rounded-md hover:bg-gray-800">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-5 md:mb-0 bg-gray-100 p-10 mr-5 rounded-md">
              <p className="font-bold mb-5 text-xl text-center md:text-left">
                Web Application
              </p>
              <p className="text-center md:text-left">
                Building any web application you need. We can build personal
                blog, company profile, E-commerce, and many more. We done have
                them all and we can done them all fast.
              </p>
              <div className="ml-7 md:ml-0 mt-10">
                <button className="px-10 text-white bg-gray-500 py-3 md:px-5 rounded-md hover:bg-gray-800">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-gray-100 p-10 rounded-md">
              <p className="font-bold mb-5 text-xl text-center md:text-left">
                UI/UX Design
              </p>
              <p className="text-center md:text-left">
                All things are designed. We can build personal blog, company
                profile, E-commerce, and many more. We done have them all and we
                can done them all fast.
              </p>
              <div className="ml-7 md:ml-0 mt-10">
                <button className="px-10 text-white bg-gray-500 py-3 md:px-5 rounded-md hover:bg-gray-800">
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

export default Product;

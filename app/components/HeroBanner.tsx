import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center min-h-[calc(100vh-150px)]">
        {/* Text and Call-to-Action */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <div className="bg-green-100 inline-block px-4 py-1 rounded mb-4">
            <span className="text-green-700 font-medium">
              Welcome to Fresh Harvest
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Fresh Fruits and Vegetables
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables.
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600">
            Shop Now
          </button>
        </div>

        {/* Image and Offer */}
        <div className="lg:w-1/2 relative p-8">
          <div className="absolute top-0 right-0 bg-green-700 w-[500px] h-full hidden lg:block"></div>
          <div className="relative z-10">
            <Image
              src="/images/hero.png"
              alt="Fresh Fruits and Vegetables"
              width={500}
              height={500}
              className="rounded-lg"
            />
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-6">
              <h3 className="text-green-700 font-medium">Special Offer</h3>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Fresh Salad{" "}
                <span className="text-orange-500">Up to 70% off</span>
              </h2>
              <p className="text-sm text-gray-600">CODE: FRESH25</p>
            </div>
          </div>
        </div>
      </div>

      {/* App Download Section */}
      <div className="container mx-auto mt-10 lg:mt-20 flex justify-center lg:justify-start">
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
          <span className="text-gray-700">Download App:</span>
          <Image src="/app-store.png" alt="App Store" width={150} height={50} />
          <Image
            src="/google-play.png"
            alt="Google Play"
            width={150}
            height={50}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

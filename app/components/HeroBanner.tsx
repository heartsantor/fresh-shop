import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div
        className="mx-auto flex flex-col lg:flex-row items-center h-screen relative"
        style={{
          background: `linear-gradient(0deg, rgba(255, 255, 255, 0.33), rgba(255, 255, 255, 0.33)), url('/images/hero-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background Mask */}
        <div
          className="absolute top-0 right-0 h-full hidden lg:block"
          style={{
            width: "40%",
            backgroundColor: "#749B3F",
            backgroundImage: `url('/images/side-mask.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

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

          <div className="container mx-auto mt-10 lg:mt-20 flex justify-center lg:justify-start">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
              <span className="text-gray-700">Download App:</span>
              <Image
                src="/images/app-store.png"
                alt="App Store"
                width={150}
                height={50}
              />
              <Image
                src="/images/google-play.png"
                alt="Google Play"
                width={150}
                height={50}
              />
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 relative p-8 flex items-center justify-center">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2  z-10 max-h-[70%] w-auto">
            <Image
              src="/images/hero.png"
              alt="Fresh Fruits and Vegetables"
              width={681}
              height={0}
              className="rounded-lg h-auto max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

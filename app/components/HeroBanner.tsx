import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div
        className="mx-auto h-screen relative"
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
        <Image
          src="/images/leaf-left-crop.png"
          alt="App Store"
          width={55}
          height={0}
          className="absolute top-[10%] left-[0%] "
        />
        {/* Text and Call-to-Action */}
        <div className="lg:w-[60%] py-32 md:ps-24 text-center lg:text-left">
          <div className="bg-green-10 inline-block px-4 py-1 rounded mb-4">
            <span className="text-green-700 font-medium">
              Welcome to Fresh Harvest
            </span>
          </div>
          <h1 className="text-heading-1 font-bold text-black mb-6">
            Fresh Fruits and Vegetables
          </h1>
          <p className="text-[14px] text-gray-100 max-w-[70%] mb-6">
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables.
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600">
            Shop Now
          </button>
          <div className="relative flex justify-end w-[550px]">
            <Image
              src="/images/arrow-point.png"
              alt="App Store"
              width={55}
              height={0}
              className="absolute top-[20%] left-[15%] transform translate-x-1/2 -translate-y-1/2"
            />
            <Image
              src="/images/leaf-right.png"
              alt="App Store"
              width={55}
              height={0}
              className="absolute bottom-[5%] left-0"
            />
            <Image
              src="/images/special-offer.png"
              alt="App Store"
              width={331}
              height={0}
              className=""
            />
          </div>
          <div className="container mx-auto mt-10 lg:mt-20 flex justify-center lg:justify-start">
            <div className="flex flex-col">
              <span className="text-gray-100 font-questrial font-[14px] mb-2">
                Download App:
              </span>
              <div className="flex gap-4">
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
        </div>

        {/* Image */}

        <div className="absolute bottom-0 right-0 w-auto max-w-[50%] 2xl:right-[18%]">
          <Image
            src="/images/hero.png"
            alt="Fresh Fruits and Vegetables"
            width={681}
            height={0}
            className="rounded-lg h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative pt-20 pb-40 bg-white overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 relative flex justify-center">
          <Image
            src="/images/farmer.png"
            alt="Farmer with vegetables"
            width={486}
            height={639}
            className="w-full h-full object-contain"
          />
          <div className="absolute top-10 right-10">
            <Image
              src="/images/leaf-right.png"
              alt="Leaf Decoration"
              width={66}
              height={0}
            />
          </div>

          <div>
            <Image
              src="/images/fresh-harvest.png"
              alt="Arrow Decoration"
              width={190}
              height={45}
              className="absolute bottom-[28%] right-[18%] w-[120px] h-auto md:w-[150px] lg:w-[190px]"
            />

            <div className="absolute -bottom-[4%] right-[12%]">
              <Image
                src="/images/add-to-cart.png"
                alt="Arrow Decoration"
                width={150}
                height={0}
              />
              <Image
                src="/images/offer-arrow.png"
                alt="Arrow Decoration"
                width={50}
                height={50}
                className="absolute -top-[20%] -right-[20%]"
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 lg:ml-5">
          <div className="inline-block px-3 py-1 bg-green/20 rounded-tl-lg mb-4">
            <span className="text-green font-rubik text-sub-heading-1">
              About us
            </span>
          </div>

          <h2 className="text-heading-2 font-rubik font-medium text-black mb-6">
            About Fresh Harvest
          </h2>

          <p className="text-body-3 font-questrial text-gray-100 mb-6">
            Welcome to Fresh Harvest, your premier destination for high-quality
            and fresh produce. We are passionate about providing you with the
            finest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </p>

          <button className="px-8 py-4 border text-[18px] border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

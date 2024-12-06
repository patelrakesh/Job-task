import React from "react";
import Image from "next/image";

const FeaturesSection = () => {
  const features = [
    {
      icon: "/images/tree.png",
      title: "Fresh Product",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultrices turpis proin nulla.",
      iconSize: { width: 17, height: 17 },
    },
    {
      icon: "/images/Vehicle.png",
      title: "Fast Shipping, Always",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultrices turpis proin nulla.",
      iconSize: { width: 25, height: 25 },
    },
    {
      icon: "/images/Product@2x.png",
      title: "Flexible Delivery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultrices turpis proin nulla.",
      iconSize: { width: 25, height: 25 },
    },
  ];

  const FeatureCard = ({ icon, title, description, iconSize }) => {
    return (
      <div className="flex flex-col items-start bg-white bg-opacity-80 shadow-lg rounded-lg p-6 text-left backdrop-blur-sm hover:shadow-2xl transition-shadow duration-300 ease-in-out w-[375px] h-[245px] flex-shrink-0 sm:w-[392px]">
        <div className="bg-white w-[2.5rem] h-[2.5rem] flex items-center justify-center mb-2 rounded-md shadow-sm">
          <Image
            src={icon}
            alt={`${title} Icon`}
            width={iconSize.width}
            height={iconSize.height}
            objectFit="contain"
          />
        </div>

        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-sm md:text-[1.1rem]">{description}</p>
      </div>
    );
  };

  return (
    <div className="relative w-full h-auto py-12">
      {/* Background */}
      <div className="absolute inset-0 bg-[#d1eff2] bg-opacity-60"></div>
      <div className="absolute inset-0">
        <Image
          src="/images/card-background.png"
          alt="Background Pattern"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>

      {/* Card Container */}
      <div className="relative container mx-auto px-4">
        <div className="flex gap-4 overflow-x-auto sm:overflow-visible sm:flex-wrap lg:justify-center">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconSize={feature.iconSize}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

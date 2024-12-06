import Image from "next/image";

const StayConnected = () => {
  return (
    <div className="bg-blue-500 text-white py-8">
      <div className="max-w-[1396px] mx-auto flex justify-between items-center px-6">
        {/* Left content: Text */}
        <div className="w-[536px]">
          <h2 className="text-xl font-bold">Stay connected with us.</h2>
          <p>Some text here on the left</p>
        </div>

        {/* Right content: Dog Image */}
        <div className="w-[404px] md:w-[120px] relative">
          <Image
            src="/images/pet.png"
            alt="Pet"
            width={404}  // You can adjust the width as needed for different screens
            height={200}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default StayConnected;

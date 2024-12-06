import Image from "next/image";

const StayConnectedSection = () => {
  return (
    <div className="bg-blue-500 text-white py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="text-lg">
          <h2 className="text-xl font-bold">Stay connected with us.</h2>
          <p>Some text here on the left</p>
        </div>
        <div className="relative w-1/4">
          <Image
            src="/path/to/dog-image.jpg" // Change this to your actual image path
            alt="Dog Image"
            layout="intrinsic"
            width={200} // You can adjust this width as needed
            height={200} // Adjust the height according to the image aspect ratio
            className="absolute right-0 bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default StayConnectedSection;

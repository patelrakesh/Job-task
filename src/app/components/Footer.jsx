import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-green-500 py-12 relative">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-white text-center">Footer Content</p>
      </div>
      {/* Curve Overlap */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src="/path/to/curve-image.png" // Path to your curve image
          alt="Curve"
          layout="responsive"
          width={1920} // Adjust the width of the curve image
          height={300} // Adjust the height of the curve image
        />
      </div>
    </div>
  );
};

export default Footer;

import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-12 relative bg-[url('/images/footerbg.png')] relative pt-[100px] bg-no-repeat bg-cover bg-center z-[99999]">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Left Section: Logo and Description */}
        <div className="flex justify-between items-start text-white">
          <div className="w-1/4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo.png" // Path to your logo image in the public folder
                alt="Logo"
                width={50} // Adjust the size as needed
                height={50} // Adjust the size as needed
              />
              <span className="text-xl font-bold">Company Name</span>
            </div>
            <p className="text-sm mt-4">
              Short description about the company or service. Something catchy.
            </p>
          </div>

          {/* Middle Section: Links */}
          <div className="w-1/4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="/service1" className="hover:underline">Service 1</a></li>
              <li><a href="/service2" className="hover:underline">Service 2</a></li>
              <li><a href="/service3" className="hover:underline">Service 3</a></li>
            </ul>

            <h3 className="font-semibold text-lg mt-6">Pet-wise Food</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="/pet-food1" className="hover:underline">Pet Food 1</a></li>
              <li><a href="/pet-food2" className="hover:underline">Pet Food 2</a></li>
              <li><a href="/pet-food3" className="hover:underline">Pet Food 3</a></li>
            </ul>
          </div>

          {/* Right Section: Social Media Links */}
          <div className="w-1/4">
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/facebook-icon.png" // Path to the Facebook icon in the public folder
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/twitter-icon.png" // Path to the Twitter icon in the public folder
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/instagram-icon.png" // Path to the Instagram icon in the public folder
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/linkedin-icon.png" // Path to the LinkedIn icon in the public folder
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-green-500 py-12 relative">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-white text-center">Footer Content</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <Image
            src="/images/footerbg.png"
            alt="Curve Image"
            layout="responsive"
            width={1920}
            height={300}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Footer;

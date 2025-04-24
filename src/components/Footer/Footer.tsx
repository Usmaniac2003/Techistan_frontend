import {
  FaApple,
  FaGooglePlay,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import Typography from "@/general/Typography/Typography";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Techistan</h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
              <p className="text-gray-400 mb-3">Get 10% off your first order</p>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
                <p className="text-gray-400 mb-3">
                  Get 10% off your first order
                </p>
                <div className="relative max-w-xs">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 pr-10 bg-gray-800 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer">
                    <HiOutlineMail className="w-5 h-5" />{" "}
                    {/* Import from react-icons/hi */}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Islamabad</li>
              <li>
                <a
                  href="mailto:usmancodepro@gmail.com"
                  className="hover:text-white"
                >
                  usmancodepro@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+88015888889999" className="hover:text-white">
                  +88015-88888-9999
                </a>
              </li>
            </ul>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2 text-gray-400">
              {[
                "My Account",
                "Login / Register",
                "Cart",
                "Wishlist",
                "Shop",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2 text-gray-400">
              {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Download App Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Download App</h3>
              <Typography color={""} className="text-gray-400">Save $3 with App New User Only</Typography>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 px-5 py-3 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-gray-700">
                <FaApple className="text-2xl text-gray-100" />
                <div className="text-left">
                  <span className="text-xs font-light text-gray-400 tracking-wide">
                    Download on the
                  </span>
                  <Typography color={""}>App Store</Typography>

                </div>
              </button>

              <button className="flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 px-5 py-3 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-gray-700">
                <FaGooglePlay className="text-2xl text-gray-100" />
                <div className="text-left">
                  <span className="text-xs font-light text-gray-400 tracking-wide">
                    Get it on
                  </span>
                  <Typography color={""}>Google Play</Typography>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info and Payment Methods */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <SiVisa className="text-3xl text-gray-400" />
              <SiMastercard className="text-3xl text-gray-400" />
              <SiPaypal className="text-3xl text-gray-400" />
            </div>
            <div className="flex gap-4">
              <FaFacebook className="text-gray-400 hover:text-white cursor-pointer" />
              <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" />
              <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <Typography color={""} className="text-gray-400">© 2024 Techistan. All rights reserved.</Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

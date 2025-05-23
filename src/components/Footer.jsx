import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="contact">
      <footer className="bg-white text-[#5B2C91] pt-12 pb-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h4 className="text-2xl font-semibold mb-8">
            For More Info, Follow Us On These Platforms
          </h4>

          {/* Social Icons */}
          <div className="flex justify-center space-x-16 mb-10">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3b5998] transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF size={36} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1DA1F2] transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={36} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E1306C] transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={36} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0077B5] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={36} />
            </a>
            <a
              href="mailto:contact@yourdomain.com"
              className="hover:text-[#D44638] transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={36} />
            </a>
          </div>

          <div className="text-base text-gray-500">
            © 2025 Datani Insurance Agency. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

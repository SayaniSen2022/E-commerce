import { CiFacebook, CiInstagram } from "react-icons/ci";
import { TiSocialPinterest } from "react-icons/ti";
import { FaTiktok } from "react-icons/fa6";
import { MdOutlineCopyright } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t border-gray-200 bg-[#9eb697] text-white px-5">
      <div className="flex gap-5 py-5 border-b border-white">
        <div>
          <div className="text-lg border-b border-white">RETURNS & PRIVACY</div>
          <ul className="text-sm pt-3">
            <li className="mb-1">
              <Link href="#">Track Order</Link>
            </li>
            <li className="mb-1">
              <Link href="#">Contact</Link>
            </li>
            <li className="mb-1">
              <Link href="#">FAQs</Link>
            </li>
            <li className="mb-1">
              <Link href="#">Return Policy</Link>
            </li>
            <li className="mb-1">
              <Link href="#">Shipping</Link>
            </li>
            <li className="mb-1">
              <Link href="#">Blog</Link>
            </li>
            <li className="mb-1">
              <Link href="#">Terms of Use</Link>
            </li>
            <li className="mb-1">
              <Link href="#"></Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-lg border-b border-white">CUSTOMER SERVICE</div>
          <ul className="text-sm pt-3">
            <li className="mb-1">
              For help, email us at help@lashnextdoor.com
            </li>
            <li className="mb-1">
              Business Hours: Monday thru Friday 9am - 5pm CST
            </li>
            <li className="mb-1">
              Text 'ShopLND' to 833-594-2398 for exclusive deals!
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-2 pb-8">
        <ul className="flex gap-4 items-center justify-start">
          <li>
            <Link href="#">
              <CiFacebook className="text-xl" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <CiInstagram className="text-xl" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <TiSocialPinterest className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaTiktok className="text-sm" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-start pb-5 text-xs">
        <div>
          <MdOutlineCopyright />
        </div>
        <div>2025 lashnextdoor.com</div>
      </div>
    </div>
  );
};

export default Footer;

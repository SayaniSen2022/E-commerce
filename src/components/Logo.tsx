import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src="/LND.webp"
          alt="logo"
          width={120}
          height={50}
          className="h-15 w-auto mx-auto"
        />
      </Link>
    </div>
  );
};

export default Logo;

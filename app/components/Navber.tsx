import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "./Button";

const Navber = () => {
  return (
    <header className="h-20 w-full bg-dark border-b flex justify-between items-center fixed left-0 top-0 right-0 z-[1000]">
      <nav>
        <Link href="/" className="text-xl font-semibold text-light">
          sephora
        </Link>
      </nav>

      <nav>
        <ul className="flex gap-5 items-center">
          <li>
            <Link href="/" className="link-item ">
              home
            </Link>
          </li>
          <li>
            <Link href="/products" className="link-item ">
              products
            </Link>
          </li>
          <li>
            <Link href="/offer" className="link-item ">
              offer
            </Link>
          </li>
          <li>
            <Link href="/about" className="link-item ">
              about
            </Link>
          </li>
          <li>
            <Link href="/contact" className="link-item ">
              contact
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="search-bar flex justify-center items-center relative rounded-full ">
        <span>
          <AiOutlineSearch className="absolute right-5 top-3 text-light text-2xl cursor-pointer" />
        </span>
        <input
          type="search"
          className="py-3 px-3 w-48 bg-slate-500 rounded-full outline-none text-dark font-semibold"
          placeholder="Search product"
        />
      </nav>

      <nav className="nav-right flex gap-5 items-center">
        <Link href="/cart" className="relative">
          <span className="bg-white text-dark rounded-full h-5 w-5 flex justify-center items-center shadow-lg text-xs font-bold  absolute left-5 -top-2">
            23
          </span>
          <CiShoppingCart className="text-4xl font-semibold" />
        </Link>

<Button href="/signin" placeholder="Signup"/>
      </nav>
     
    </header>
  );
};

export default Navber;

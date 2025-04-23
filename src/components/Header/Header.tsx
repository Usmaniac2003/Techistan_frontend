"use client";
import Link from "next/link";
import SearchBar from "./components/searchBar/SearchBar";
import Typography from "@/general/Typography/Typography";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const RedirectToWishlist = () => router.push("/wishList");
  const RedirectToCart = () => router.push("/cart");
  const RedirectToProfile = () => router.push("/profile");
  const RedirectToHome = () => router.push("/");

  return (
    <div className="header flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 py-4 border-b border-gray-300 shadow-sm w-full">
      <section className="logo_and_links flex flex-wrap items-center gap-6 sm:gap-10 lg:gap-36 w-full lg:w-auto">
        <div className="logo" onClick={RedirectToHome}>
          <Typography fontSize={"xxl"} weight={"bold"}>
            Techistan
          </Typography>
        </div>
        <div className="navlinks">
          <ul className="flex flex-wrap gap-4 sm:gap-6">
            {["products", "contactUs", "about"].map((path, idx) => (
              <li key={idx}>
                <Link
                  href={`/${path}`}
                  className="relative pb-1 text-gray-600 transition-all hover:text-black
                    before:absolute before:bottom-0 before:left-0 before:h-[2px] 
                    before:w-0 before:bg-black before:transition-all before:duration-300
                    hover:before:w-full"
                >
                  <Typography fontSize={"sm"}>
                    {path === "contactUs" ? "Contact" : path.charAt(0).toUpperCase() + path.slice(1)}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="searchBar_and_Icons flex flex-wrap items-center justify-end gap-4 sm:gap-6 lg:gap-20 w-full lg:w-auto mt-4 lg:mt-0">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="w-full sm:max-w-fit">
            <SearchBar />
          </div>
          <div className="icons flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="heartIcon h-6 w-6 cursor-pointer"
              onClick={RedirectToWishlist}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="cartIcon h-6 w-6 cursor-pointer"
              onClick={RedirectToCart}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
        </div>

        <div className="profile bg-[#db4444] p-1 rounded-full cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="profile h-6 w-6 text-white"
            onClick={RedirectToProfile}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import ThemeToggleButton from "./themeToggleButton";

export default function Navbar() {
  return (
    <div className="flex font-semibold p-4 text-base md:text-xl lg:text-2xl bg-opacity-50 font-sans">
      <div className="px-2">
        <Link href="/about">about</Link>
      </div>
      <div className="px-2">
        <Link href="/">work</Link>
      </div>
      <div className="px-2">
        <Link href="/archive">index</Link>
      </div>
      <div>
      <ThemeToggleButton/>
      </div>
    </div>
  );
}

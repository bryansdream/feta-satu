import Link from "next/link";
import ThemeToggleButton from "./themeToggleButton";

export default function Navbar() {
  return (
    <div className="flex font-semibold p-4 text-2xl fixed z-10 bg-white bg-opacity-50 bottom-0">
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

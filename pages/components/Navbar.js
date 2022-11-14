import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex font-semibold p-4 text-2xl">
      <div className="px-2">
        <Link href="/about">about</Link>
      </div>
      <div className="px-2">
        <Link href="/">work</Link>
      </div>
      <div className="px-2">
        <Link href="/archive">index</Link>
      </div>
    </div>
  );
}

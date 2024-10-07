import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[56px] bg-[#1f2937] text-white flex justify-center items-center z-[99]">
      <nav className="w-full flex justify-around">
        <Link href={"/"}>홈</Link>
        <Link href={"/champions"}>챔피언 목록</Link>
        <Link href={"/items"}>아이템 목록</Link>
        <Link href={"/rotation"}>챔피언 로테이션</Link>
      </nav>
    </header>
  );
};

export default Header;

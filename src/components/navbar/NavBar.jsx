import NavItems from "./client/navItems";

export default function NavBar() {
  return (
    <nav className="w-full h-20  bg-neutral-950 ">
      <div className="w-[90%] h-full m-auto flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between 2xl:w-[50%] 2xl:gap-x-8">
        <h1 className="text-3xl text-slate-50">VideoClub dígital</h1>
        <NavItems />
      </div>
    </nav>
  );
}

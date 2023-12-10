import NavItems from "./client/navItems";

export default function NavBar() {
  return (
    <nav className="w-full h-20 flex flex-col items-center justify-center gap-2 bg-neutral-950">
      <h1 className="text-3xl text-slate-50">VideoClub dígital</h1>
      <NavItems />
    </nav>
  );
}

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full h-20 flex flex-col justify-around items-center">
      <h1 className="text-3xl text-slate-50">VideoClub dígital</h1>
      <ul className="flex gap-4 text-slate-300">
        <li>
          <Link href="/">Películas</Link>
        </li>
        <li>
          <Link href="/watched">Vistas</Link>
        </li>
        <li>
          <Link href="/favorites">Favoritas</Link>
        </li>
      </ul>
    </nav>
  );
}

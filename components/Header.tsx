import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black p-5">
      <nav>
        <ul className="flex justify-center space-x-12">
          <li><Link href="/"><div className="text-light text-2xl hover:text-redAccent font-cinzel">Home</div></Link></li>
          <li><Link href="/about"><div className="text-light text-2xl hover:text-redAccent">About</div></Link></li>
          <li><Link href="/about"><div className="text-light text-2xl hover:text-redAccent">Skills</div></Link></li>
          <li><Link href="/projects"><div className="text-light text-2xl hover:text-redAccent">Projects</div></Link></li>
          <li><Link href="/contact"><div className="text-light text-2xl hover:text-redAccent">Contact</div></Link></li>
        </ul>
      </nav>
    </header>
  );
}

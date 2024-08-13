import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black p-4">
      <nav>
        <ul className="flex justify-center space-x-8">
          <li><Link href="/"><div className="text-light hover:text-redAccent font-cinzel">Home</div></Link></li>
          <li><Link href="/about"><div className="text-light hover:text-redAccent">About</div></Link></li>
          <li><Link href="/projects"><div className="text-light hover:text-redAccent">Projects</div></Link></li>
          <li><Link href="/contact"><div className="text-light hover:text-redAccent">Contact</div></Link></li>
        </ul>
      </nav>
    </header>
  );
}

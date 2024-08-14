import Image from 'next/image';
import bgImage from '@/public/ryuk-death-note-ai-2560x1440-14431.jpg';

export default function Home() {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-5xl text-redAccent mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-light">Inspired by Death Note</p>
      </div>
    </section>
  );
}


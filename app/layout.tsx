import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Death Note Portfolio',
  description: 'A portfolio with a Death Note theme',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}

import { Navbar } from '../../components/Navbar/Navbar';
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-24">
        <h1 className="text-5xl">General Layout</h1>
        {children}
      </div>
    </>
  );
}
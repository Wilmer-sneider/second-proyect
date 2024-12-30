import Navbar from "@/components/navbar/Navbar";

export default function generalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="bg-slate-700 text-center p-4">
        <h1 className="text-white">Hello Root Layout Root general</h1>
        {children}
      </div>
    </>
  );
}

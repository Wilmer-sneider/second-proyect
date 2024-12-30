import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" container mx-auto text-center p-4">
        <h1 className="text-4xl font-semibold py-4">hola mundo</h1>
        <Link className=" bg-cyan-600 text-white p-2 rounded " href="/about">
          {" "}
          Ir A pagina de about
        </Link>
      </div>
    </>
  );
}

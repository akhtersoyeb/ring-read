import DropEffect from "./DropEffect";

export default function Hero() {
  return (
    <>
      <div className="flex justify-end items-center bg-rose-300">
        <a
          href="#"
          className="border border-black inline-flex items-center h-10 px-4 m-4 text-black bg-transparent rounded hover:bg-white"
        >
          Login
        </a>
      </div>
      <section className="w-full flex justify-center items-center flex-col bg-rose-300">
        <DropEffect />
      </section>
    </>
  );
}

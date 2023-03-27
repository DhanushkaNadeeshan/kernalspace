import Image from "next/image";
export default function Loader() {
  return (
    <div className="fixed w-full h-full bg-slate-800 z-50 grid place-items-center">
      <div>
        <Image alt="loader" src="/3298615.png" width={50} height={50} className="mx-auto animate-bounce" ></Image>
        <div className="relative w-3 h-3 mx-auto mb-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        </div>
        <p className="text-slate-200">Loading</p>
      </div>
    </div>
  );
}

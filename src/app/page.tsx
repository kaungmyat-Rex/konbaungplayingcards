import MainCardSwiper from "@/ui/MainCardSwiper";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <section className="w-full h-full flex justify-center items-center px-0 md:px-20 pt-10 overflow-x-hidden">
        <MainCardSwiper />
      </section>
    </main>
  );
}

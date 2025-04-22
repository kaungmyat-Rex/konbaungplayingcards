"use client";
import React from "react";
import king from "../../../public/charatorImg/king.svg";
import Image from "next/image";

interface KingProps {
  refKing: React.RefObject<HTMLDivElement | null>;
}

const King = ({ refKing }: KingProps) => {
  return (
    <div
      id="king"
      ref={refKing}
      className="w-full h-full md:flex justify-center items-start py-20 relative"
    >
      {/* <div
            className="block md:hidden"
            style={{
              backgroundImage: `url('/charatorImg/${character}.svg')`,
              height: "100vh",
              backgroundAttachment: "fixed",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div> */}
      {/* <Image
            src={king}
            alt="king"
            className="w-full h-screen object-contain sticky top-0 -z-[1]"
            width={800}
            height={800}
          /> */}
      <div className="sticky top-20 flex-[5] -z-[1]">
        <div className="flex justify-center items-center relative">
          <Image
            src={king}
            alt="king"
            width={800}
            height={800}
            className="max-w-[400px] w-full h-full object-contain"
          />
          <h4 className="text-white font-bold text-5xl my-10 text-center absolute bottom-0 left-10 font-SourceSerif">
            King
          </h4>
        </div>
      </div>

      <div className="flex-[7] ">
        <p
          className="text-black text-justify bg-white md:bg-transparent md:text-white p-5 rounded-lg text-base font-medium font-Nunito
        "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
          scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
          nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
          aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in
          odio. Praesent convallis urna a lacus interdum ut hendrerit risus
          congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
          In at libero sed nunc venenatis imperdiet sed ornare turpis.
          <br />
          <br />
          Donec vitae dui eget tellus gravida venenatis. Integer fringilla
          congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
          Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
          interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
          venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
          vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
          ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
          urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
          nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
          venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
          gravida venenatis. Integer fringilla
          <br />
          congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
          Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
          consectetur lit. Phasellus imperdiet, nulla et dictum interdum, nisi
          lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
          Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
          luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
          ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum
          ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur lit. Phasellus imperdiet, nulla et dictum
          interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
          venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
          vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
          ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
          urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
          nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
          venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
          gravida venenatis. Integer fringilla congue eros non fermentum. Sed
          dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
          diam velit. Lorem ipsum dolor sit amet, <br /> consectetur vitae
          scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
          nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
          aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in
          odio. Praesent convallis urna a lacus interdum ut hendrerit risus
          congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
          In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec
          vitae dui eget tellus gravida venenatis. Integer fringilla congue eros
          non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo
          purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
          vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
          ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
          augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu,
          lobortis in odio. Praesent convallis urna a lacus interdum ut
          hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consecteturvitae scelerisque enim ligula venenatis dolor.
          Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
          luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
          ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum
          ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper
          ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
          ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer
          fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor
          porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor
          sit amet, consectetur
        </p>
      </div>
    </div>
  );
};

export default King;

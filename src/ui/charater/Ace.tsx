"use client";
import React from "react";
import ace from "../../../public/charatorImg/Ace.svg";
import Image from "next/image";

interface AceProps {
  refAce: React.RefObject<HTMLDivElement | null>;
}

const Ace = ({ refAce }: AceProps) => {
  return (
    <div
      id="Ace"
      ref={refAce}
      className="w-full h-full md:flex justify-center items-start py-20 relative"
    >
      <div className="sticky top-20 flex-[5] -z-[1]">
        <div className="flex justify-center items-center relative">
          <Image
            src={ace}
            alt="ace"
            width={800}
            height={800}
            className="max-w-[400px] w-full h-full object-contain"
          />
          <h4 className="text-white font-bold text-5xl my-10 text-center absolute bottom-0 left-10 font-SourceSerif hidden md:block">
            Ace
          </h4>
        </div>
      </div>

      <div className="flex-[7] relative">
        <h4 className="text-white font-bold text-5xl my-10 text-center absolute -top-[120px] left-0 font-SourceSerif md:hidden">
          Ace
        </h4>
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
        </p>
      </div>
    </div>
  );
};

export default Ace;

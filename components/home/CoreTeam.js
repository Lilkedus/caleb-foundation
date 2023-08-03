import React from "react";

export default function CoreTeam() {
  const cc = [
    {
      avatar: "/team/01.jpg",
      name: "Tenadam G Alemu",
      position: "Founder",
    },
    {
      avatar: "/team/02.jpg",
      name: "DR. DAWIT DEMISSIE",
      position: "Board Member",
    },
    {
      avatar: "/team/03.jpg",
      name: "ADIAH WOLDE",
      position: "Board Member",
    },
    {
      avatar: "/team/04.jpg",
      name: "GENET JOHNSON",
      position: "Board Member",
    },
    {
      avatar: "/team/05.jpg",
      name: "MARTHA DAMTE",
      position: "Board Member",
    },
    {
      avatar: "/team/06.jpg",
      name: "DR. MERON HIPA",
      position: "Board Member",
    },
    {
      avatar: "/team/07.jpg",
      name: "RUTH HAILE",
      position: "Board Member",
    },
    {
      avatar: "/team/08.jpg",
      name: "YITAWES KEBEDE",
      position: "Board Member",
    },
    {
      avatar: "/team/09.jpg",
      name: "NATHAN EYASU",
      position: "Board Member",
    },
    {
      avatar: "/team/010.jpg",
      name: "LIYA YITNA",
      position: "Board Member",
    },
    {
      avatar: "/team/011.jpg",
      name: "SELAMAWIT ZEMENU",
      position: "Board Member",
    },
    {
      avatar: "/team/012.jpg",
      name: "PROF. PETER NORD QUIST",
      position: "Board Member",
    },
    {
      avatar: "/team/013.jpg",
      name: "NARDOS TEKLESELASS",
      position: "Board Member",
    },
    {
      avatar: "/team/014.jpg",
      name: "WOLLELA KEBEDE",
      position: "Board Member",
    }
  ];
  return (
    <div className="flex flex-col w-full items-center my-010 md:my-014 " id="team">
      <p className="text-4xl font-bold">Core Team</p>
      <p className="text-gray-500 text-xl w-full md:w-8/012 text-center my-4">
        Teamwork is the fuel that allows common people to attain uncommon
        results.
      </p>
      <div className="w-max-[90vw] w-full md:w-8/012 overflow-x-auto">
        <div className="flex flex-row w-max flex-wrap">
          {/* Card */}
          {cc.map((cc, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-2 p-4 py-010 brightness-90 rounded-md w-56"
            >
              <img
                src={cc.avatar}
                alt=""
                className="rounded-full w-20 h-20 md:w-28 md:h-28 object-cover ring ring-zinc-200"
              />
              <p className="font-medium mt-2 text-lg opacity-75">{cc.name}</p>
              <p className="text-zinc-500">{cc.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

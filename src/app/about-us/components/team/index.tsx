import CEO from "../../../../../public/images/CEO.png";
import COO from "../../../../../public/images/COO.png";
import CCO from "../../../../../public/images/CCO.png";
import CTO from "../../../../../public/images/CTO.png";
import Image from "next/image";

export const MeetTheTeam = () => {
  const teams = [
    {
      name: "Femi Ogundimu",
      title: "Co-founder, CEO/CFO",
      img: CEO,
    },
    {
      name: "Ademola Amokomowo ",
      title: "Co- founder, COO",
      img: COO,
    },
    {
      name: "Olabode Olajide",
      title: "CCO",
      img: CCO,
    },
    {
      name: "Arogunade Oluwapelumi ",
      title: "CTO",
      img: CTO,
    },
  ];

  return (
    <section className="container flex flex-col w-full gap-12 px-4 py-14 lg:py-20">
      <div className="flex flex-col mx-auto text-center gap-4 lg:gap-6 w-full lg:w-7/12">
        <div className="inline-flex flex-col gap-4 text-sm text-gc_secondary_900 font-normal leading-[1.65rem] lg:text-lg">
          MEET THE TEAM
        </div>
        <h3 className="text-[2rem] text-gc_grey_800 font-bold leading-[2.4rem] lg:text-[3rem] xl:text-[3.5rem] xl:leading-[4.1rem]">
          A team of <span className="text-gc_primary_500"> experts</span>{" "}
          excited to help you grow
        </h3>
      </div>

      <div className="flex flex-wrap items-center gap-8 md:gap-4 lg:gap-6">
        {teams.map((team, id) => (
          <div
            key={id}
            className="flex flex-col gap-6 w-full md:w-[calc(33.33%-10.7px)] lg:w-[calc(33.33%-16px)]"
          >
            <div className="w-full h-[440px] rounded-2xl relative overflow-hidden md:h-[200px]">
              <Image
                src={team.img}
                alt={team.title}
                className="object-cover"
                fill
                quality={100}
              />
            </div>
            <div className="flex flex-col gap-2 w-full lg:gap-3">
              <h4 className="text-gc_grey_900 text-base font-bold lg:text-3xl">
                {team.name}{" "}
              </h4>
              <p className="text-gc_primary_900 text-sm font-normal lg:text-base">
                {team.title}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

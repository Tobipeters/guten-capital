import Image from "next/image";
import AssetManagedImg from "../../../../public/images/assets-managedpng.png";
import PremiumClientImg from "../../../../public/images/premium-clientpng.png";
import SettlementImg from "../../../../public/images/settlement-paidpng.png";

export const EmpoweringSection = () => {
  const stats = [
    {
      name: "$100+ billion",
      title: "In Assets Managed",
      img: AssetManagedImg,
    },
    {
      name: "200+",
      title: "In Assets Managed",
      img: PremiumClientImg,
    },
    {
      name: "$10+ billion",
      title: "In Settlement paid",
      img: SettlementImg,
    },
  ];

  return (
    <section className="container flex flex-col w-full gap-12 px-4 py-14 lg:py-16">
      <div className="flex flex-col w-full gap-4 lg:gap-6">
        <h3 className="text-[2rem] text-gc_grey_800 font-bold leading-[2.4rem] lg:w-9/12 lg:text-[3rem] xl:text-[3.5rem] xl:leading-[4.1rem] xl:w-7/12">
          Empowering Your Financial Future with Expertise & Integrity.
        </h3>
      </div>

      <div className="flex flex-wrap items-center gap-8 md:gap-4 lg:gap-10">
        {stats.map((stat, id) => (
          <div key={id} className="flex flex-col gap-6 w-full md:w-[calc(33.33%-10.7px)] lg:w-[calc(33.33%-26.7px)]">
            <div className="w-full h-[240px] rounded-2xl relative overflow-hidden md:h-[200px] lg:h-[240px]">
              <Image
                src={stat.img}
                alt={stat.title}
                className="object-cover"
                fill
                quality={100}
              />
            </div>
            <div className="flex flex-col gap-2 w-full lg:gap-3">
              <h4 className="text-gc_primary_900 text-[2rem] font-medium lg:text-[2.5rem]">
                {stat.name}{" "}
              </h4>
              <p className="text-gc_grey_400 text-lg font-normal lg:text-3xl">
                {stat.title}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

import CustomerCentricIcon from "../../../../../public/images/customer-centric.png";
import ExcellenceIcon from "../../../../../public/images/excellence.png";
import IntegrityIcon from "../../../../../public/images/integrity.png";
import ProactivenessIcon from "../../../../../public/images/proactiveness.png";
import ExplorationIcon from "../../../../../public/images/exploration.png";
import Image from "next/image";

export const CoreValues = () => {
  const values = [
    {
      imgSrc: CustomerCentricIcon,
      title: "Customer-centric",
      detail:
        "Placing client needs and goals at the forefront of every decision.",
    },
    {
      imgSrc: ExcellenceIcon,
      title: "Excellence",
      detail:
        "Maintaining the highest standards of service, knowledge, and execution",
    },
    {
      imgSrc: IntegrityIcon,
      title: "Integrity",
      detail:
        "Upholding ethical processes, transparency and unwavering trust with clients.",
    },
    {
      imgSrc: ProactivenessIcon,
      title: "Proactiveness",
      detail:
        "Anticipating market trends and client needs to deliver forward-thinking solutions",
    },
    {
      imgSrc: ExplorationIcon,
      title: "Exploration",
      detail:
        "Continuously seeking new opportunities and expanding the scope of our financial capabilities",
    },
  ];

  return (
    <section className="container flex flex-col w-full gap-8 md:gap-12 px-4 py-14 lg:py-16">
      <div className="flex flex-col mx-auto text-start gap-4 lg:gap-6 w-full lg:text-center lg:w-7/12">
        <div className="inline-flex flex-col gap-4 text-sm text-gc_secondary_900 font-normal leading-[1.65rem] lg:text-lg">
          OUR CORE VALUES
        </div>
        <h3 className="text-[2rem] text-gc_grey_800 font-bold leading-[2.4rem] lg:text-[3rem] xl:text-[3.5rem] xl:leading-[4.1rem]">
          What guides Us
        </h3>
      </div>

      <div className="flex justify-center flex-wrap gap-6 md:gap-5 xl:gap-6">
        {values.map((value, id) => (
          <div
            key={id}
            className="px-5 py-8 border border-[#E6E6E6] rounded-lg w-full min-h-[320px] md:w-[calc(50%-10px)] xl:w-[calc(33.33%-16px)]"
          >
            <Image
              src={value.imgSrc}
              alt={value.title}
              width={100}
              height={100}
              className="mx-auto"
            />
            <div className="inline-flex flex-col gap-2 mt-4 text-gc_grey_400 text-center xl:px-6">
              <h4 className="text-xl font-bold lg:text-2xl">
                {value.title}
              </h4>
              <p className="text-base lg:text-xl">{value.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

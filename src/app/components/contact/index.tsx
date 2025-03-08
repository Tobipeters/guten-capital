import { GcButton } from "../button";

export const ContactUs = () => {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex items-center flex-wrap justify-between py-2 border-b border-b-gc_gray_200 lg:py-6 lg:flex-nowrap">
        <label className="text-gc_gray_200 text-sm font-normal w-full lg:font-bold lg:text-2xl lg:text-gc_grey_800">
          Business Name<sup className="text-[#FF0A0A]">*</sup>
        </label>

        <input
          dir="ltr"
          placeholder="Enter business name"
          className="w-full px-0 pb-0 outline-none placeholder:text-[0px]  placeholder:text-left lg:placeholder:text-right lg:placeholder:text-gc_gray_200 lg:placeholder:text-lg"
        />
      </div>

      <div className="flex items-center flex-wrap justify-between py-2 border-b border-b-gc_gray_200 lg:py-6 lg:flex-nowrap">
        <label className="text-gc_gray_200 text-sm font-normal w-full lg:font-bold lg:text-2xl lg:text-gc_grey_800">
          Enter business email<sup className="text-[#FF0A0A]">*</sup>
        </label>

        <input
          dir="ltr"
          placeholder="Enter business email"
          className="w-full px-0 pb-0 outline-none placeholder:text-[0px]  placeholder:text-left lg:placeholder:text-right lg:placeholder:text-gc_gray_200 lg:placeholder:text-lg"
        />
      </div>

      <div className="flex items-center flex-wrap justify-between py-2 border-b border-b-gc_gray_200 mb- lg:py-6 lg:flex-nowrap">
        <label className="text-gc_gray_200 text-sm font-normal w-full lg:font-bold lg:text-2xl lg:text-gc_grey_800">
          How can we help you?<sup className="text-[#FF0A0A]">*</sup>
        </label>

        <input
          dir="ltr"
          placeholder="Enter message"
          className="w-full px-0 pb-0 outline-none placeholder:text-[0px]  placeholder:text-left lg:placeholder:text-right lg:placeholder:text-gc_gray_200 lg:placeholder:text-lg"
        />
      </div>

      <GcButton fullWidth variant="secondary" text="Send" />
    </form>
  );
};

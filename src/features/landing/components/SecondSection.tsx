export function SecondSection() {
  return (
    <section className="w-full max-w-[1294px] mx-auto mt-[72px] mb-[86px] px-[18px] md:px-[62px]">
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-16">
        {/* Left */}
        <div className="flex-1 max-w-[545px]">
          <h2 className="text-[40px] md:text-[52px] lg:text-[66px] font-semibold leading-[1.1] tracking-tight text-soma-black">
            No paper. No email threads.{" "}
            <span className="font-hand font-bold italic text-soma-red">Just school.</span>
          </h2>
        </div>

        {/* Right */}
        <div className="flex-1 max-w-none 2xl:max-w-[456px] flex flex-col gap-6">
          <p className="text-[16px] md:text-[18px] font-normal leading-[1.7] text-gray-4">
            Most school management tools assume you have reliable internet, big
            budgets, and time to train your entire staff. Most schools don&apos;t.
          </p>
          <p className="text-[28px] md:text-[32px] font-hand font-bold italic text-soma-blue leading-[1.3]">
            SOMA was built for the way schools actually work.
          </p>
          <p className="text-[16px] md:text-[18px] font-normal leading-[1.7] text-gray-4">
            It&apos;s a simple, offline-first school operating system that brings
            attendance, results, fees, and announcements into one place — and
            keeps working even when the internet doesn&apos;t. Install it on any
            phone or laptop, and everything syncs across every device your team
            signs in on.
          </p>
        </div>
      </div>
    </section>
  );
}

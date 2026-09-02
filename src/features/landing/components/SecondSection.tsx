export function SecondSection() {
  return (
    <section className="w-full max-w-[1294px] mx-auto mt-[72px] mb-[86px]">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16">
        {/* Left */}
        <div className="flex-1">
          <h2 className="text-[40px] md:text-[52px] lg:text-[66px] font-semibold leading-[1.1] tracking-tight text-soma-black">
            Your school works hard. The system should work{" "}
            <span className="font-hand font-bold italic text-[#CD432F]">harder.</span>
          </h2>
        </div>

        {/* Right */}
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-[16px] md:text-[18px] font-normal leading-[1.7] text-soma-black/70">
            Modern school management is often defined by administrative noise, from
            lost records, delayed billing, and unclear communication between owners,
            staff, and parents.
          </p>
          <p className="text-[28px] md:text-[32px] font-hand font-bold italic text-soma-blue leading-[1.3]">
            Soma was designed to clear that noise.
          </p>
          <p className="text-[16px] md:text-[18px] font-normal leading-[1.7] text-soma-black/70">
            SOMA is a simple, offline-first school operating system that is built to
            simplify every day school operations.
          </p>
        </div>
      </div>
    </section>
  );
}

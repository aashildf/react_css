import logo from "/J-logon.png";
export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-12">
      <div className=" mt-0 w-140 h-50 ">
        <img
          src={logo}
          alt="Signaturrett"
          className="object-cover w-full h-full"
        />
      </div>
      {/* <h2 className="text-8xl font-semibold leading-tight tracking-[-0.015em] text-center text-transparent font-display">
        En smak av innovasjon- denne teksten brukes bare fordi jeg ikke
      </h2> */}

      {/* <p className="mt-4 text-xl md:text-xltex text-yellow-50">
        La Maison.Joblôp().serve("innovation")
      </p> */}

      <div className="mt-12 w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-2xl ">
        <img
          src="/mat1.avif"
          alt="Signaturrett"
          className="object-cover w-full h-full "
        />
      </div>

      <button className="px-10 mt-7 py-4 border-2 border-[#F3E8D8] text-[#F3E8D8] rounded-full hover:bg-[#F3E8D8]/10 transition-all duration-300 backdrop-blur-sm cursor-pointer">
        Book et bord
      </button>
    </div>
  );
}

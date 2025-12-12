import logo from "/J-logon.png";
import plate from "/mat1.avif"
export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-12">
      <div className=" mt-0 w-140 h-50 ">
        <img
          src={logo}
          alt="Restaurant logo"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="mt-12 w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-2xl ">
        <img
          src={plate}
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

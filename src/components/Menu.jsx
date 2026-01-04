


import DishCard from "./DishCard";
import { useState } from "react";


export default function Menu({ dishes}) {
  const [activeTab, setActiveTab] = useState("forrett");

  const forretter = dishes.filter(
    (d) => d.kategori && d.kategori.toLowerCase() === "forrett"
  );
  const hovedretter = dishes.filter(
    (d) => d.kategori && d.kategori.toLowerCase() === "hovedrett"
  );
  const desserter = dishes.filter(
    (d) => d.kategori && d.kategori.toLowerCase() === "dessert"
  );

  return (
    <section className="bg-background-light dark:bg-background-dark pt-32 pb-8">
      {/* Tabs */}
      <div className=" top-0 z-10 bg-background-light dark:bg-background-dark">
        <div className="flex justify-center space-x-6 px-4 ">
          <button
            onClick={() => setActiveTab("forrett")}
            className={`cursor-pointer px-6 py-3 text-3xl font-bold tracking-wide transition-all duration-200 ${
              activeTab === "forrett"
                ? "text-white font-medium"
                : "text-teal-700 hover:text-white"
            }`}
          >
            Forrett
          </button>
          <button
            onClick={() => setActiveTab("hovedrett")}
            className={`cursor-pointer px-6 py-3 text-3xl font-bold tracking-wide transition-all duration-200 ${
              activeTab === "hovedrett"
                ? "text-white font-medium"
                : "text-teal-700 hover:text-white"
            }`}
          >
            Hovedrett
          </button>
          <button
            onClick={() => setActiveTab("dessert")}
            className={`cursor-pointer px-6 py-3 text-3xl font-bold tracking-wide transition-all duration-200 ${
              activeTab === "dessert"
                ? "text-white font-medium"
                : "text-teal-700 hover:text-white"
            }`}
          >
            Dessert
          </button>
        </div>
      </div>

      {/* Content */}

      <div className="p-4 flex flex-col gap-6 mt-8 min-h-[856px] items-center transition-all duration-300">
        {activeTab === "forrett" &&
          forretter.map((dish) => <DishCard key={dish.id} {...dish} />)}

        {activeTab === "hovedrett" &&
          hovedretter.map((dish) => <DishCard key={dish.id} {...dish} />)}

        {activeTab === "dessert" &&
          desserter.map((dish) => <DishCard key={dish.id} {...dish} />)}
      </div>
    </section>
  );
}




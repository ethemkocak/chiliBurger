"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const burgers = [
  {
    src: "amerika_burger.webp",
    title: "America",
    price: "",
  },
  {
    src: "chili_burger.webp",
    title: "Chili",
    price: "",
  },
  {
    src: "danimarka_burger.webp",
    title: "Danimarka",
    price: "",
  },
  {
    src: "meksika_burger.webp",
    title: "Meksika",
    price: "",
  },
  {
    src: "fransa_burger.webp",
    title: "Fransa",
    price: "",
  },
  {
    src: "türkiye_burger.webp",
    title: "Türkiye",
    price: "",
  },
  {
    src: "hindistan_burger.webp",
    title: "Hindistan",
    price: "",
  },
  {
    src: "italya_burger.webp",
    title: "İtalya",
    price: "",
  },
  {
    src: "atlantis_burger.webp",
    title: "Atlantis",
    price: "",
  },
];
const aperatifler = [
  {
    src: "cajun_finger.webp",
    title: "",
    price: "",
  },
  {
    src: "patates_kızartması.webp",
    title: "",
    price: "",
  },
  {
    src: "parmesanlı_trüflü_patates_kızartması.webp",
    title: "",
    price: "",
  },
  {
    src: "cheddarlı_patates_kızartması.webp",
    title: "",
    price: "",
  },
  {
    src: "soğan_halkası.webp",
    title: "",
    price: "",
  },
];
const içecekler = [
  {
    src: "kutu_içecek.webp",
    title: "Kutu içecek",
    price: "",
  },
  {
    src: "ayran.webp",
    title: "Ayran",
    price: "",
  },
];
const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("burgers");

  return (
    <div className="flex flex-col items-center rounded-md  w-2/3 h-auto">
      <div className="flex justify-center items-center mt-10">
        <div className="text-white gap-5 auto-rows-fr flex custom-font2">
          <button
            onClick={() => setActiveCategory("burgers")}
            className={`rounded-lg px-4 py-2 ${
              activeCategory === "burgers" ? "bg-gray-700" : "bg-gray-500"
            }`}
          >
            <Icon icon="stash:burger-light" />
            burgerler
          </button>
          <button
            onClick={() => setActiveCategory("aperatifler")}
            className={`rounded-lg px-4 py-2 ${
              activeCategory === "aperatifler" ? "bg-gray-700" : "bg-gray-500"
            }`}
          >
            <Icon icon="ep:fries" />
            aperatifler
          </button>
          <button
            onClick={() => setActiveCategory("içecekler")}
            className={`rounded-lg px-4 py-2 ${
              activeCategory === "içecekler" ? "bg-gray-700" : "bg-gray-500"
            }`}
          >
            <Icon icon="icon-park-solid:drink" />
            içecekler
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-10 flex-wrap custom-font3">
        {activeCategory === "burgers" &&
          burgers.map((item, index) => (
            <div key={index} className="text-white border p-4 rounded">
              <img
                src={item.src}
                alt={item.title}
                className="h-24 w-24 object-cover"
              />
              <h2>{item.title}</h2>
              <p>{item.price}</p>
            </div>
          ))}

        {activeCategory === "aperatifler" &&
          aperatifler.map((item, index) => (
            <div key={index} className="text-white border p-4 rounded">
              <img
                src={item.src}
                alt={item.title}
                className="h-24 w-24 object-cover"
              />
              <h2>{item.title}</h2>
              <p>{item.price}</p>
            </div>
          ))}

        {activeCategory === "içecekler" &&
          içecekler.map((item, index) => (
            <div key={index} className="text-white border p-4 rounded">
              <img
                src={item.src}
                alt={item.title}
                className="h-24 w-24 object-cover"
              />
              <h2>{item.title}</h2>
              <p>{item.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Menu;

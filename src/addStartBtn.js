import { createElement, addMultipleClasses } from "./utils";
import UpdateView from "./updateView";
import AddQuest from "./addQuest";

export default () => {
  const container = document.querySelector("body");
  addMultipleClasses(container, [
    "flex",
    "h-screen",
    "w-full",
    "items-center",
    "justify-center",
  ]);

  const startBtn = createElement(
    "btn",
    [
      "p-3",
      "m-3",
      "border-2",
      "text-white",
      "hover:bg-yellow-400",
      "hover:border-yellow-400",
      "hover:text-yellow-800",
      "cursor-pointer",
      "rounded-full",
      "z-10",
      "relative",
      "bg-yellow-800",
      "font-extrabold",
    ],
    "Start My Adventure!",
  );

  const questLogInitialized = localStorage.getItem("questLog");

  startBtn.addEventListener("click", () => {
    if (!questLogInitialized) {
      localStorage.setItem("questLog", JSON.stringify([]));
      startBtn.classList.add("hidden");
      AddQuest();
    } else {
      startBtn.classList.add("hidden");
      UpdateView();
    }
  });

  container.appendChild(startBtn);
};

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
      "border",
      "text-white",
      "hover:bg-purple-600",
      "cursor-pointer",
      "rounded-lg",
      "z-10",
      "relative",
    ],
    "Start Adventuring!",
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

import { v4 as uuidv4 } from "uuid";
import { createElement, appendMultipleChildren } from "./utils";
import AddTask from "./addTask";
import AddQuest from "./addQuest";
import RemoveQuest from "./removeQuest";
import ToggleQuestDefault from "./toggleQuestDefault";
import ExpandTask from "./expandTask";

export default () => {
  const container = document.querySelector("body");
  const questLog = JSON.parse(localStorage.getItem("questLog"));
  const questAddBtn = createElement(
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
      "w-1/3",
      "text-center",
      "bg-yellow-800",
      "z-10",
      "absolute",
      "top-[5%]",
      "font-extrabold",
    ],
    "Add Quest",
  );
  questAddBtn.addEventListener("click", () => AddQuest());
  const questList = createElement(
    "div",
    [
      "flex",
      "flex-col",
      "border-2",
      "text-white",
      "z-10",
      "absolute",
      "max-h-[65%]",
      "overflow-y-auto",
      "top-1/2",
      "left-1/2",
      "transform",
      "-translate-x-1/2",
      "-translate-y-1/2",
      "w-1/3",
      "rounded-3xl",
      "bg-yellow-800",
    ],
    "",
    "fullQuestLog",
  );
  questLog.forEach((quest) => {
    const questContainer = createElement(
      "div",
      [
        "flex",
        "flex-col",
        "bg-yellow-600",
        "text-white",
        "p-3",
        "border-2",
        "m-3",
        "rounded-3xl",
      ],
      "",
    );
    const questName = createElement(
      "h1",
      ["text-2xl", "font-semibold", "border-2", "rounded-3xl", "p-2", "text-center"],
      `${quest.name}`,
    );
    const questAddTaskBtn = createElement(
      "btn",
      [
        "p-2",
        "border-2",
        "hover:bg-yellow-800",
        "cursor-pointer",
        "rounded-3xl",
        "w-1/4",
        "text-center",
        "mr-2",
      ],
      "+ Task",
    );
    questAddTaskBtn.addEventListener("click", () => AddTask(quest.id));
    const questRemoveBtn = createElement(
      "btn",
      [
        "border-2",
        "hover:bg-yellow-800",
        "cursor-pointer",
        "rounded-[50%]",
        "w-8",
        "h-8",
        "text-center",
        "mr-2",
      ],
      "x",
    );
    questRemoveBtn.addEventListener("click", () => RemoveQuest(quest.id));
    const questDefaultStatus = createElement(
      "button",
      [
        "border-2",
        "hover:bg-yellow-800",
        "cursor-pointer",
        "rounded-[50%]",
        "w-8",
        "h-8",
        "text-center",
        "mr-2",
      ],
      '',
      'defaultBtn',
      quest,
    );
    questDefaultStatus.addEventListener("click", () => ToggleQuestDefault(quest.id));

    const questOptions = createElement('div', ['flex', 'items-center', 'mt-3'], '');
    appendMultipleChildren(
      questOptions, 
      questAddTaskBtn,
      questRemoveBtn,
      questDefaultStatus,)

    appendMultipleChildren(
      questContainer,
      questName,
      questOptions,
    );

    quest.tasks.forEach((task) => {
      const taskContainer = createElement(
        "div",
        ["flex", "flex-col", "border-2", "bg-yellow-800", "rounded-3xl", "p-3", "mt-3"],
        "",
        uuidv4(),
      );
      const taskTitle = createElement(
        "h1",
        ["text-2xl", "font-semibold", "border-2", "p-2", "rounded-full", "text-center"],
        `${task.title}`,
      );
      const taskDueDate = createElement(
        "pre",
        ["mt-2", "font-sans"],
        `  ↳ Due: ${task.dueDate}`,
      );
      const taskExpansionBtn = createElement(
        "button", 
        [
          "border-2",
          "hover:bg-yellow-600",
          "cursor-pointer",
          "rounded-3xl",
          "w-fit",
          "text-center",
          "p-1",
          "mt-2",
          "text-xs",
          "mx-auto",
        ], 
        "+ expand task",
      )
      taskExpansionBtn.addEventListener("click", () => {
        ExpandTask(quest.id, task.id, taskContainer.id);
        taskExpansionBtn.classList.add('hidden');
      });

      appendMultipleChildren(
        taskContainer,
        taskTitle,
        taskDueDate,
        taskExpansionBtn,
      );

      questContainer.appendChild(taskContainer);
    });
    questList.appendChild(questContainer);
  });
  if (questList.hasChildNodes()) {
    appendMultipleChildren(container, questAddBtn, questList);
  } else {
    container.appendChild(questAddBtn);
  }
  
};

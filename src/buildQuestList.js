import { createElement, appendMultipleChildren } from "./utils";
import AddTask from "./addTask";
import AddQuest from "./addQuest";
import EditTask from "./editTask";
import RemoveTask from "./removeTask";
import RemoveQuest from "./removeQuest";
import ToggleTaskCompletion from "./toggleTaskCompletion";
import ToggleQuestDefault from "./toggleQuestDefault";

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
        "bg-yellow-800",
        "text-white",
        "p-3"
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
        "hover:bg-yellow-400",
        "hover:border-yellow-400",
        "hover:text-yellow-800",
        "cursor-pointer",
        "rounded-3xl",
        "w-1/4",
        "text-center",
        "mt-3",
      ],
      "+ Task",
    );
    questAddTaskBtn.addEventListener("click", () => AddTask(quest.id));
    const questRemoveBtn = createElement(
      "btn",
      [
        "border-2",
        "hover:bg-yellow-400",
        "hover:border-yellow-400",
        "hover:text-yellow-800",
        "cursor-pointer",
        "rounded-[50%]",
        "w-8",
        "h-8",
        "text-center",
        "mt-3",
      ],
      "x",
    );
    questRemoveBtn.addEventListener("click", () => RemoveQuest(quest.id));
    const questDefaultStatus = createElement(
      "button",
      [
        "border-2",
        "hover:bg-yellow-400",
        "hover:border-yellow-400",
        "hover:text-yellow-800",
        "cursor-pointer",
        "rounded-[50%]",
        "w-8",
        "h-8",
        "text-center",
        "mt-3",
      ],
      '',
      'defaultBtn',
      quest,
    );
    questDefaultStatus.addEventListener("click", () => ToggleQuestDefault(quest.id));

    appendMultipleChildren(
      questContainer,
      questName,
      questAddTaskBtn,
      questRemoveBtn,
      questDefaultStatus,
    );

    quest.tasks.forEach((task) => {
      const taskContainer = createElement(
        "div",
        ["flex", "flex-col", "border", "border-red-300", "border-4"],
        "",
      );
      const taskTitle = createElement(
        "h1",
        ["text-2xl", "font-semibold", "border", "border-red-300", "border-4"],
        `Title: ${task.title}`,
      );
      const taskEditBtn = createElement(
        "btn",
        [
          "p-3",
          "m-3",
          "border",
          "hover:bg-purple-600",
          "cursor-pointer",
          "rounded-lg",
          "w-fit",
        ],
        "...",
      );
      taskEditBtn.addEventListener("click", () => EditTask(quest.id, task.id));
      const taskRemoveBtn = createElement(
        "btn",
        [
          "p-3",
          "m-3",
          "border",
          "hover:bg-purple-600",
          "cursor-pointer",
          "rounded-lg",
          "w-fit",
        ],
        "x",
      );
      taskRemoveBtn.addEventListener("click", () =>
        RemoveTask(quest.id, task.id),
      );
      const taskToggleCompletionBtn = createElement(
        "btn",
        [
          "p-3",
          "m-3",
          "border",
          "hover:bg-purple-600",
          "cursor-pointer",
          "rounded-lg",
          "w-fit",
        ],
        "✓",
      );
      taskToggleCompletionBtn.addEventListener("click", () =>
        ToggleTaskCompletion(quest.id, task.id),
      );
      const taskDescription = createElement(
        "p",
        ["border", "border-red-300", "border-4"],
        `Description: ${task.description}`,
      );
      const taskPriority = createElement(
        "p",
        ["border", "border-red-300", "border-4"],
        `Priority: ${task.priority}`,
      );
      const taskDueDate = createElement(
        "p",
        ["border", "border-red-300", "border-4"],
        `Due date: ${task.dueDate}`,
      );

      appendMultipleChildren(
        taskContainer,
        taskTitle,
        taskEditBtn,
        taskRemoveBtn,
        taskToggleCompletionBtn,
        taskDescription,
        taskPriority,
        taskDueDate,
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

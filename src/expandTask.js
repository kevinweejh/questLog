import { createElement, appendMultipleChildren } from "./utils";
import EditTask from "./editTask";
import RemoveTask from "./removeTask";
import ToggleTaskCompletion from "./toggleTaskCompletion";

export default (questId, taskId, taskContainerId) => {
    const initialQuestLog = JSON.parse(localStorage.getItem("questLog"));
    const revisedQuestLog = initialQuestLog.slice();
    const affectedQuest = revisedQuestLog.find((quest) => quest.id === questId);
    const affectedTask = affectedQuest.tasks.find((task) => task.id === taskId);

    const taskEditBtn = createElement(
    "btn",
    [
        "border-2",
        "hover:bg-yellow-600",
        "cursor-pointer",
        "rounded-[50%]",
        "w-8",
        "h-8",
        "text-center",
        "mr-3",
    ],
    "...",
    );
    taskEditBtn.addEventListener("click", () => EditTask(questId, taskId));
    const taskRemoveBtn = createElement(
    "btn",
    [
        "border-2",
        "hover:bg-yellow-600",
        "cursor-pointer",
        "rounded-[50%]",
        "w-8",
        "h-8",
        "text-center",
        "mr-3",
    ],
    "x",
    );
    taskRemoveBtn.addEventListener("click", () =>
    RemoveTask(questId, taskId),
    );
    const taskToggleCompletionBtn = createElement(
    "btn",
    [
        "border-2",
        "hover:bg-yellow-600",
        "cursor-pointer",
        "rounded-[50%]",
        "w-8",
        "h-8",
        "text-center",
        "mr-3",
    ],
    "✓",
    );
    taskToggleCompletionBtn.addEventListener("click", () =>
    ToggleTaskCompletion(questId, taskId),
    );
    const taskDescription = createElement(
    "p",
    ["mt-2"],
    `Description: ${affectedTask.description}`,
    );
    const taskPriority = createElement(
    "p",
    ["mt-2"],
    `Priority: ${affectedTask.priority}`,
    );

    const taskOptions = createElement('div', ['flex', 'items-center', 'mt-3', 'justify-center'], '');
    appendMultipleChildren(
        taskOptions,
        taskToggleCompletionBtn,
        taskEditBtn,
        taskRemoveBtn,
    )

    const taskDetails = createElement('div', ['flex', 'flex-col', 'rounded-3xl'], '')
    appendMultipleChildren(
        taskDetails,
        taskDescription,
        taskPriority,
    )

    const taskContainer = document.getElementById(`${taskContainerId}`);
    appendMultipleChildren(
        taskContainer,
        taskOptions,
        taskDetails,
      );
}
export const createElement = (
  element,
  classList,
  content,
  id = null,
  quest = null,
) => {
  const newElement = document.createElement(element);
  newElement.classList.add(...classList);
  newElement.innerText = content;
  if (id) {
    newElement.id = id;
    if (id === "defaultBtn") {
      newElement.innerText = quest.default ? "★" : "☆";
    }
  } // Add id if provided

  return newElement;
};

export const appendMultipleChildren = (parent, ...children) => {
  children.forEach((child) => {
    parent.appendChild(child);
  });
};

export const addMultipleClasses = (element, classesToAdd) => {
  classesToAdd.forEach((classToAdd) => {
    element.classList.add(classToAdd);
  });
};

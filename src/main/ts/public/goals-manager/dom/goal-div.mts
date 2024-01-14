import type { goal as Goal } from "../../../../prisma/index";

export const createGoalDiv = (goal: Goal): HTMLDivElement =>
{

    // Accomplished
    const accomplishedCheckboxInputId = `goalAccomplished_${goal.id}`;

    const accomplishedCheckboxInput = document.createElement("input");
    accomplishedCheckboxInput.id = accomplishedCheckboxInputId;
    accomplishedCheckboxInput.classList.add("form-check-input", "me-1", "accomplishedCheckbox");
    accomplishedCheckboxInput.name = "goalIsAccomplished";
    accomplishedCheckboxInput.value = "true";
    accomplishedCheckboxInput.dataset.initValue = "false";
    accomplishedCheckboxInput.type = "checkbox";

    const accomplishedCheckboxLabel = document.createElement("label");
    accomplishedCheckboxLabel.classList.add("form-check-label");
    accomplishedCheckboxLabel.htmlFor = accomplishedCheckboxInputId;
    accomplishedCheckboxLabel.textContent = "Accomplished";

    const accomplishedCheckboxDiv = document.createElement("div");

    accomplishedCheckboxDiv.appendChild(accomplishedCheckboxInput);
    accomplishedCheckboxDiv.appendChild(accomplishedCheckboxLabel);

    // Private
    const privateCheckboxInputId = `goalPrivate_${goal.id}`;

    const privateCheckboxInput = document.createElement("input");
    privateCheckboxInput.id = privateCheckboxInputId;
    privateCheckboxInput.classList.add("form-check-input", "goalPrivacyToggle");
    privateCheckboxInput.name = "goalIsPrivate";
    privateCheckboxInput.value = "true";
    privateCheckboxInput.dataset.initValue = String(goal.private);
    privateCheckboxInput.type = "checkbox";
    privateCheckboxInput.checked = goal.private;

    const privateCheckboxLabel = document.createElement("label");
    privateCheckboxLabel.classList.add("form-check-label");
    privateCheckboxLabel.htmlFor = privateCheckboxInputId;
    privateCheckboxLabel.textContent = "Private";

    const privateCheckboxDiv = document.createElement("div");
    privateCheckboxDiv.classList.add("form-check", "form-switch");

    privateCheckboxDiv.appendChild(privateCheckboxInput);
    privateCheckboxDiv.appendChild(privateCheckboxDiv);

    // Milestones Btn
    const milestonesToggleBtnId = `goalMilestones_${goal.id}`;

    const milestonesToggleBtn = document.createElement("button");
    milestonesToggleBtn.classList.add("btn", "btn-outline-primary", "btn-sm", "milestonesToggleBtn");
    milestonesToggleBtn.id = milestonesToggleBtnId;
    milestonesToggleBtn.dataset.goalId = goal.id;
    milestonesToggleBtn.ariaPressed = "false";
    milestonesToggleBtn.type = "button";
    milestonesToggleBtn.textContent = "Milestones";

    const accomplishedPrivateMilestonesDiv = document.createElement("div");
    accomplishedPrivateMilestonesDiv.classList.add("d-flex", "mb-2", "align-items-center", "justify-content-around");

    accomplishedPrivateMilestonesDiv.appendChild(accomplishedCheckboxDiv);
    accomplishedPrivateMilestonesDiv.appendChild(privateCheckboxDiv);
    accomplishedPrivateMilestonesDiv.appendChild(milestonesToggleBtn);

    // Goal title

    const titleInputId = `goalTitle_${goal.id}`;

    const titleLabel = document.createElement("label");
    titleLabel.classList.add("form-label", "d-none");
    titleLabel.htmlFor = titleInputId;
    titleLabel.textContent = "Title";

    const titleInput = document.createElement("input");
    titleInput.classList.add("form-control", "titleInput");
    titleInput.id = titleInputId;
    titleInput.type = "text";
    titleInput.placeholder = "Goal";
    titleInput.value = goal.title;
    titleInput.dataset.initValue = goal.title;
    titleInput.dataset.goalId = goal.id;

    // Root parent
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("border", "rounded-3", "p-3");

    parentDiv.appendChild(accomplishedPrivateMilestonesDiv);
    parentDiv.appendChild(titleLabel);
    parentDiv.appendChild(titleInput);

    return parentDiv;
};

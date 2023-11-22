import { milestonesToggleBtnEventListenerCallback } from "./goals-manager/event-listener-callback/milestones-toggle-button-event-listener-callback.mjs";
import { bindEventTargetInitValueChangeToBtnActiveStatusViaGoalId } from "./goals-manager/event-listener-callback/bind-event-target-init-value-change-to-btn-active-status-via-goal-id.mjs";
import { bindCheckboxEventTargetInitValueChangeToBtnActiveStatusViaGoalId } from "./goals-manager/event-listener-callback/bind-checkbox-event-target-init-value-change-to-btn-active-status-via-goal-id.mjs";

const milestonesToggleButtons = document.getElementsByClassName("milestonesToggleBtn") as HTMLCollectionOf<HTMLButtonElement>;
const updateBtns = document.getElementsByClassName("updateBtn") as HTMLCollectionOf<HTMLButtonElement>;
const titleInputs = document.getElementsByClassName("titleInput") as HTMLCollectionOf<HTMLInputElement>;
const accomplishedCheckboxes = document.getElementsByClassName("accomplishedCheckbox") as HTMLCollectionOf<HTMLInputElement>;
const goalPrivacyCheckboxes = document.getElementsByClassName("goalPrivacyToggle") as HTMLCollectionOf<HTMLInputElement>;
const milestonesDivs = document.getElementsByClassName("milestonesDiv") as HTMLCollectionOf<HTMLDivElement>;
const addMilestoneBtn = document.getElementById("addMilestoneBtn") as HTMLButtonElement;

for (let index = milestonesToggleButtons.length - 1; index >= 0; --index)
{
    const milestonesToggleBtn = milestonesToggleButtons[index];
    milestonesToggleBtn.addEventListener("click", (event) => milestonesToggleBtnEventListenerCallback(event, milestonesToggleButtons, milestonesDivs, addMilestoneBtn));
}

for (let index = titleInputs.length - 1; index >= 0; --index)
{
    const titleInput = titleInputs[index];
    titleInput.addEventListener("keydown", (event) => bindEventTargetInitValueChangeToBtnActiveStatusViaGoalId(event.target, updateBtns, titleInputs, accomplishedCheckboxes, goalPrivacyCheckboxes));
    titleInput.addEventListener("keyup", (event) => bindEventTargetInitValueChangeToBtnActiveStatusViaGoalId(event.target, updateBtns, titleInputs, accomplishedCheckboxes, goalPrivacyCheckboxes));
}

for (let index = accomplishedCheckboxes.length - 1; index >= 0; --index)
{
    const accomplishedCheckbox = accomplishedCheckboxes[index];
    accomplishedCheckbox.addEventListener("change", (event) => bindCheckboxEventTargetInitValueChangeToBtnActiveStatusViaGoalId(event.target, updateBtns, titleInputs, accomplishedCheckboxes, goalPrivacyCheckboxes));
}

for (let index = goalPrivacyCheckboxes.length - 1; index >= 0; --index)
{
    const goalPrivacyCheckbox = goalPrivacyCheckboxes[index];
    goalPrivacyCheckbox.addEventListener("change", (event) => bindCheckboxEventTargetInitValueChangeToBtnActiveStatusViaGoalId(event.target, updateBtns, titleInputs, accomplishedCheckboxes, goalPrivacyCheckboxes));
}

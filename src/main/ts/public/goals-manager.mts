import { milestonesToggleBtnClickHandler } from "./goals-manager/event-listener-callback/milestones-toggle-btn-click-handler.mjs";
import { bindEventTargetInitValueChangeToBtnActiveStatusViaGoalId } from "./goals-manager/event-listener-callback/bind-event-target-init-value-change-to-btn-active-status-via-goal-id.mjs";
import { bindCheckboxEventTargetInitValueChangeToBtnActiveStatusViaGoalId } from "./goals-manager/event-listener-callback/bind-checkbox-event-target-init-value-change-to-btn-active-status-via-goal-id.mjs";

const addGoalBtn = document.getElementById("addGoalBtn") as HTMLButtonElement;
const newGoalForm = document.getElementById("newGoalForm") as HTMLFormElement;
const newGoalFormCancelBtn = document.getElementById("newGoalFormCancelBtn") as HTMLButtonElement;
const milestonesToggleButtons = document.getElementsByClassName("milestonesToggleBtn") as HTMLCollectionOf<HTMLButtonElement>;
const updateGoalBtns = document.getElementsByClassName("updateGoalBtn") as HTMLCollectionOf<HTMLButtonElement>;
const titleInputs = document.getElementsByClassName("titleInput") as HTMLCollectionOf<HTMLInputElement>;
const accomplishedCheckboxes = document.getElementsByClassName("accomplishedCheckbox") as HTMLCollectionOf<HTMLInputElement>;
const goalPrivacyCheckboxes = document.getElementsByClassName("goalPrivacyToggle") as HTMLCollectionOf<HTMLInputElement>;
const milestonesDivs = document.getElementsByClassName("milestonesDiv") as HTMLCollectionOf<HTMLDivElement>;
const addMilestoneBtn = document.getElementById("addMilestoneBtn") as HTMLButtonElement;

addGoalBtn.addEventListener("click", () => newGoalForm.classList.remove("d-none"));

newGoalFormCancelBtn.addEventListener("click", () =>
{
    newGoalForm.reset();
    newGoalForm.classList.add("d-none");
});

newGoalForm.addEventListener("submit", async (event) =>
{
    event.preventDefault();

    const formData = new FormData(newGoalForm);
    const title = formData.get("title");
    const isPrivate = formData.get("isPrivate") === "true";

    await fetch("/goalsmanager",
        {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, isPrivate })
        });

    // newGoalForm.reset();
    // newGoalForm.classList.add("d-none");
});

for (let index = milestonesToggleButtons.length - 1; index >= 0; --index)
{
    const milestonesToggleBtn = milestonesToggleButtons[index];
    milestonesToggleBtn.addEventListener("click", (event) => milestonesToggleBtnClickHandler(event, milestonesToggleButtons, milestonesDivs, addMilestoneBtn));
}

for (let index = titleInputs.length - 1; index >= 0; --index)
{
    const titleInput = titleInputs[index];
    titleInput.addEventListener("keydown", (event) => bindEventTargetInitValueChangeToBtnActiveStatusViaGoalId(event.target, updateGoalBtns, titleInputs, accomplishedCheckboxes, goalPrivacyCheckboxes));
    titleInput.addEventListener("keyup", (event) => bindEventTargetInitValueChangeToBtnActiveStatusViaGoalId(event.target, updateGoalBtns, titleInputs, accomplishedCheckboxes, goalPrivacyCheckboxes));
}

for (let index = accomplishedCheckboxes.length - 1; index >= 0; --index)
{
    const accomplishedCheckbox = accomplishedCheckboxes[index];
    accomplishedCheckbox.addEventListener("change", () => bindCheckboxEventTargetInitValueChangeToBtnActiveStatusViaGoalId(accomplishedCheckbox, updateGoalBtns, titleInputs, accomplishedCheckboxes, goalPrivacyCheckboxes));
}

for (let index = goalPrivacyCheckboxes.length - 1; index >= 0; --index)
{
    const goalPrivacyCheckbox = goalPrivacyCheckboxes[index];
    goalPrivacyCheckbox.addEventListener("change", () => bindCheckboxEventTargetInitValueChangeToBtnActiveStatusViaGoalId(goalPrivacyCheckbox, updateGoalBtns, titleInputs, accomplishedCheckboxes, goalPrivacyCheckboxes));
}

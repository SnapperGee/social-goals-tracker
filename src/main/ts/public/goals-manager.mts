/* eslint-disable @typescript-eslint/naming-convention */
import { milestonesToggleBtnClickHandler } from "./goals-manager/event-listener-callback/milestones-toggle-btn-click-handler.mjs";
import { bindEventTargetInitValueChangeToBtnActiveStatusViaGoalId } from "./goals-manager/event-listener-callback/bind-event-target-init-value-change-to-btn-active-status-via-goal-id.mjs";
import { bindCheckboxEventTargetInitValueChangeToBtnActiveStatusViaGoalId } from "./goals-manager/event-listener-callback/bind-checkbox-event-target-init-value-change-to-btn-active-status-via-goal-id.mjs";

const addGoalBtn = document.getElementById("addGoalBtn") as HTMLButtonElement;
const newGoalForm = document.getElementById("newGoalForm") as HTMLFormElement;
const newGoalFormCancelBtn = document.getElementById("newGoalFormCancelBtn") as HTMLButtonElement;

const addMilestoneBtn = document.getElementById("addMilestoneBtn") as HTMLButtonElement;
const newMilestoneForm = document.getElementById("newMilestoneForm") as HTMLFormElement;
const newMilestoneFormCancelBtn = document.getElementById("newMilestoneFormCancelBtn") as HTMLButtonElement;

const milestonesToggleButtons = document.getElementsByClassName("milestonesToggleBtn") as HTMLCollectionOf<HTMLButtonElement>;
const updateGoalBtns = document.getElementsByClassName("updateGoalBtn") as HTMLCollectionOf<HTMLButtonElement>;
const titleInputs = document.getElementsByClassName("titleInput") as HTMLCollectionOf<HTMLInputElement>;
const accomplishedCheckboxes = document.getElementsByClassName("accomplishedCheckbox") as HTMLCollectionOf<HTMLInputElement>;
const goalPrivacyCheckboxes = document.getElementsByClassName("goalPrivacyToggle") as HTMLCollectionOf<HTMLInputElement>;
const milestonesDivs = document.getElementsByClassName("milestonesDiv") as HTMLCollectionOf<HTMLDivElement>;

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

    try
    {
        const res = await fetch("/goalsmanager",
        {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, isPrivate })
        });

        const resJson = await res.json();

        if ( ! ("message" in resJson))
        {
            window.location.reload();
        }
    }
    catch (error)
    {
        console.log(error);
    }
});

addMilestoneBtn.addEventListener("click", () =>
{
    let goalId: string | undefined;

    for (let i = milestonesToggleButtons.length - 1; i >= 0; --i)
    {
        const milestonesToggleBtn = milestonesToggleButtons[i];
        if (milestonesToggleBtn.classList.contains("active"))
        {
            goalId = milestonesToggleBtn.dataset.goalId;
            break;
        }
    }

    if (goalId)
    {
        newMilestoneForm.dataset.goalId = goalId;
        newMilestoneForm.classList.remove("d-none");
    }
    else
    {
        alert("No active milestone toggle button.");
        throw new Error("No active milestone toggle button.");
    }

});

newMilestoneFormCancelBtn.addEventListener("click", () =>
{
    newMilestoneForm.reset();
    newMilestoneForm.removeAttribute("data-goal-id");
    newMilestoneForm.classList.add("d-none");
});

newMilestoneForm.addEventListener("submit", async (event) =>
{
    event.preventDefault();

    const formData = new FormData(newMilestoneForm);
    const title = formData.get("title");

    try
    {
        const res = await fetch(`/goalsmanager/${newMilestoneForm.dataset.goalId}`,
        {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title })
        });

        const resJson = await res.json();

        if ( ! ("message"  in resJson))
        {
            window.location.reload();
        }
    }
    catch (error)
    {
        console.log(error);
    }
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

/* eslint-disable @typescript-eslint/naming-convention */
import { updateGoalBtnClickHandler } from "./goals-manager/handlers/update-goal-btn-click-handler.mjs";
import { addDeleteGoalBtnHandler } from "./goals-manager/handlers/add-delete-goal-btn-handler.mjs";
import { deleteMilestoneBtnClickHandler } from "./goals-manager/handlers/delete-milestone-btn-click-handler.mjs";
import { milestonesToggleBtnClickHandler } from "./goals-manager/handlers/milestones-toggle-btn-click-handler.mjs";
import { activateUpdateBtnOnChangeHandler } from "./goals-manager/handlers/activate-update-btn-on-change-handler.mjs";
import { activateUpdateBtnOnCheckboxChangeHandler } from "./goals-manager/handlers/activate-update-btn-on-checkbox-change-handler.mjs";

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

const deleteGoalBtns = document.getElementsByClassName("deleteGoalBtn") as HTMLCollectionOf<HTMLButtonElement>;
const deleteMilestoneBtns = document.getElementsByClassName("deleteMilestoneBtn") as HTMLCollectionOf<HTMLButtonElement>;

const goalDivs = document.getElementsByClassName("goalDiv") as HTMLCollectionOf<HTMLDivElement>;

addGoalBtn.addEventListener("click", () => newGoalForm.classList.remove("d-none"));

newGoalFormCancelBtn.addEventListener("click", () =>
{
    newGoalForm.classList.add("d-none");
    newGoalForm.reset();
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
        console.error(error);
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
    newMilestoneForm.classList.add("d-none");
    newMilestoneForm.removeAttribute("data-goal-id");
    newMilestoneForm.reset();
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

        if (res.ok && ! ("message"  in resJson))
        {
            window.location.reload();
        }
    }
    catch (error)
    {
        console.error(error);
    }
});

for (let index = 0; index < updateGoalBtns.length; ++index)
{
    const updateBtn = updateGoalBtns[index];

    for (let index = 0; index < goalDivs.length; ++index)
    {
        const goalDiv = goalDivs[index];

        if (updateBtn.dataset.goalId === goalDiv.dataset.goalId)
        {
            const titleInput = goalDiv.querySelector<HTMLInputElement>(".titleInput");
            const accomplishedCheckbox = goalDiv.querySelector<HTMLInputElement>(".accomplishedCheckbox");
            const privateCheckbox = goalDiv.querySelector<HTMLInputElement>(".goalPrivacyToggle");

            if (titleInput && accomplishedCheckbox && privateCheckbox)
            {
                updateBtn.addEventListener("click", updateGoalBtnClickHandler(updateBtn, titleInput, accomplishedCheckbox, privateCheckbox));
            }
            else
            {
                throw new Error(`missing element(s): titleInput: ${titleInput}, accomplishedCheckbox: ${accomplishedCheckbox}, privateCheckbox: ${privateCheckbox}`);
            }
        }
    }
}

// handlers for milestone visibility toggle buttons
for (let index = 0; index < milestonesToggleButtons.length; ++index)
{
    const milestonesToggleBtn = milestonesToggleButtons[index];
    milestonesToggleBtn.addEventListener("click", milestonesToggleBtnClickHandler(milestonesToggleButtons, milestonesDivs, addMilestoneBtn));
}

// handlers to make update buttons active/inactive when title input fields change
for (let index = 0; index < titleInputs.length; ++index)
{
    const titleInput = titleInputs[index];
    titleInput.addEventListener("keydown", activateUpdateBtnOnChangeHandler(updateGoalBtns, titleInputs, accomplishedCheckboxes, goalPrivacyCheckboxes));
    titleInput.addEventListener("keyup", activateUpdateBtnOnChangeHandler(updateGoalBtns, titleInputs, accomplishedCheckboxes, goalPrivacyCheckboxes));
}

// handlers to make update buttons active/inactive when accomplished checkbox input fields change
for (let index = 0; index < accomplishedCheckboxes.length; ++index)
{
    const accomplishedCheckbox = accomplishedCheckboxes[index];
    accomplishedCheckbox.addEventListener("change", activateUpdateBtnOnCheckboxChangeHandler(updateGoalBtns, titleInputs, accomplishedCheckboxes, goalPrivacyCheckboxes));
}

// handlers to make update buttons active/inactive when private checkbox input fields change
for (let index = 0; index < goalPrivacyCheckboxes.length; ++index)
{
    const goalPrivacyCheckbox = goalPrivacyCheckboxes[index];
    goalPrivacyCheckbox.addEventListener("change", activateUpdateBtnOnCheckboxChangeHandler(updateGoalBtns, titleInputs, accomplishedCheckboxes, goalPrivacyCheckboxes));
}

// handlers for delete goal buttons
for (let index = 0; index < deleteGoalBtns.length; ++index)
{
    const deleteGoalBtn = deleteGoalBtns[index];
    addDeleteGoalBtnHandler(deleteGoalBtn, milestonesDivs);
}

// handlers for delete milestone buttons
for (let index = 0; index < deleteMilestoneBtns.length; ++index)
{
    const deleteMilestoneBtn = deleteMilestoneBtns[index];
    deleteMilestoneBtn.addEventListener("click", deleteMilestoneBtnClickHandler(deleteMilestoneBtn));
}

import { bindEventTargetInitValueChangeToBtnActiveStatusViaGoalId } from "./goals-manager/event-listener-callback/bind-event-target-init-value-change-to-btn-active-status-via-goal-id.mjs";
import { bindCheckboxEventTargetInitValueChangeToBtnActiveStatusViaGoalId } from "./goals-manager/event-listener-callback/bind-checkbox-event-target-init-value-change-to-btn-active-status-via-goal-id.mjs";

const milestonesToggleButtons = document.getElementsByClassName("milestonesToggleBtn");
const updateBtns = document.getElementsByClassName("updateBtn") as HTMLCollectionOf<HTMLButtonElement>;
const titleInputs = document.getElementsByClassName("titleInput") as HTMLCollectionOf<HTMLInputElement>;
const accomplishedCheckboxes = document.getElementsByClassName("accomplishedCheckbox") as HTMLCollectionOf<HTMLInputElement>;
const goalPrivacyCheckboxes = document.getElementsByClassName("goalPrivacyToggle") as HTMLCollectionOf<HTMLInputElement>;
const milestonesDivs = document.getElementsByClassName("milestonesDiv") as HTMLCollectionOf<HTMLDivElement>;

for (let index = milestonesToggleButtons.length - 1; index >= 0; --index)
{
    const milestonesToggleBtn = milestonesToggleButtons[index];

    milestonesToggleBtn.addEventListener("click", (event) =>
    {
        const clickedBtn = event.target;

        if (clickedBtn instanceof HTMLButtonElement)
        {
            if (clickedBtn.classList.contains("active"))
            {
                clickedBtn.classList.remove("active");
                clickedBtn.ariaPressed = "false";

                for (let i = milestonesDivs.length - 1; i >= 0; --i)
                {
                    const milestonesDiv = milestonesDivs[i];

                    if ( clickedBtn.dataset.goalId === milestonesDiv.dataset.goalId && ! milestonesDiv.classList.contains("d-none"))
                    {
                        milestonesDiv.classList.add("d-none");
                    }
                }
            }
            else
            {
                clickedBtn.classList.add("active");
                clickedBtn.ariaPressed = "true";

                for (let i = milestonesToggleButtons.length - 1; i >= 0; --i)
                {
                    const toggleBtn = milestonesToggleButtons[i];

                    if (toggleBtn !== clickedBtn)
                    {
                        toggleBtn.classList.remove("active");
                        toggleBtn.ariaPressed = "false";
                    }
                }

                for (let i = milestonesDivs.length - 1; i >= 0; --i)
                {
                    const milestonesDiv = milestonesDivs[i];

                    if ( clickedBtn.dataset.goalId === milestonesDiv.dataset.goalId && milestonesDiv.classList.contains("d-none"))
                    {
                        milestonesDiv.classList.remove("d-none");
                    }
                }
            }
        }
    });
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

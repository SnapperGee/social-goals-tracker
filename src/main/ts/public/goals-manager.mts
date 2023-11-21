import { bindEventTargetInitValueChangeToBtnActiveStatusViaGoalId } from "./util/bind-event-target-init-value-change-to-btn-active-status-via-goal-id.mjs";
import { bindCheckboxEventTargetInitValueChangeToBtnActiveStatusViaGoalId } from "./util/bind-checkbox-event-target-init-value-change-to-btn-active-status-via-goal-id.mjs";

const milestonesToggleButtons = document.getElementsByClassName("milestonesToggleBtn");
const updateBtns = document.getElementsByClassName("updateBtn") as HTMLCollectionOf<HTMLButtonElement>;
const titleInputs = document.getElementsByClassName("titleInput") as HTMLCollectionOf<HTMLInputElement>;
const accomplishedCheckboxes = document.getElementsByClassName("accomplishedCheckbox") as HTMLCollectionOf<HTMLInputElement>;

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
            }
        }
    });
}

for (let index = titleInputs.length - 1; index >= 0; --index)
{
    const titleInput = titleInputs[index];
    titleInput.addEventListener("keydown", (event) => bindEventTargetInitValueChangeToBtnActiveStatusViaGoalId(event.target, updateBtns, titleInputs, accomplishedCheckboxes));
    titleInput.addEventListener("keyup", (event) => bindEventTargetInitValueChangeToBtnActiveStatusViaGoalId(event.target, updateBtns, titleInputs, accomplishedCheckboxes));
}

for (let index = accomplishedCheckboxes.length - 1; index >= 0; --index)
{
    const accomplishedCheckbox = accomplishedCheckboxes[index];
    accomplishedCheckbox.addEventListener("change", (event) => bindCheckboxEventTargetInitValueChangeToBtnActiveStatusViaGoalId(event.target, updateBtns));
}

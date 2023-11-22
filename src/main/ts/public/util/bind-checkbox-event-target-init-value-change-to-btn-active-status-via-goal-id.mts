import { titleInputValueIsChanged } from "./goals-manager/title-input-value-is-changed.mjs";
import { checkboxValueIsChanged } from "./goals-manager/checkbox-value-is-changed.mjs";

export const bindCheckboxEventTargetInitValueChangeToBtnActiveStatusViaGoalId = (
    eventTarget: EventTarget | null,
    updateButtons: HTMLCollectionOf<HTMLButtonElement>,
    titleInputs: HTMLCollectionOf<HTMLInputElement>,
    accomplishedCheckBoxes: HTMLCollectionOf<HTMLInputElement>): void =>
{
    if (eventTarget instanceof HTMLInputElement)
    {
        if ( checkboxValueIsChanged(eventTarget) )
        {
            for (let index = updateButtons.length - 1; index >= 0; --index)
            {
                const updateBtn = updateButtons[index];

                if (updateBtn.dataset.goalId === eventTarget.dataset.goalId)
                {
                    updateBtn.disabled = false;

                    if (updateBtn.classList.contains("btn-secondary"))
                    {
                        updateBtn.classList.replace("btn-secondary", "btn-primary");
                    }
                }
            }
        }
        else
        {
            let changesPresent = false;

            for (let index = accomplishedCheckBoxes.length - 1; index >= 0; --index)
            {
                const accomplishedCheckbox = accomplishedCheckBoxes[index];

                if (    eventTarget.dataset.goalId === accomplishedCheckbox.dataset.goalId
                     && checkboxValueIsChanged(accomplishedCheckbox) )
                {
                    changesPresent = true;
                    break;
                }
            }

            if ( ! changesPresent)
            {
                for (let index = titleInputs.length - 1; index >= 0; --index)
                {
                    const titleInput = titleInputs[index];

                    if (  eventTarget.dataset.goalId === titleInput.dataset.goalId
                          && titleInputValueIsChanged(titleInput) )
                    {
                        changesPresent = true;
                        break;
                    }
                }
            }

            if ( ! changesPresent)
            {
                for (let index = updateButtons.length - 1; index >= 0; --index)
                {
                    const updateBtn = updateButtons[index];

                    if (updateBtn.dataset.goalId === eventTarget.dataset.goalId)
                    {
                        updateBtn.disabled = true;

                        if (updateBtn.classList.contains("btn-primary"))
                        {
                            updateBtn.classList.replace("btn-primary", "btn-secondary");
                        }
                    }
                }
            }
        }
    }
};

export default bindCheckboxEventTargetInitValueChangeToBtnActiveStatusViaGoalId;

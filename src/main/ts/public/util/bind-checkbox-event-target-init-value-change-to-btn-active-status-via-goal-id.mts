import { titleInputValueIsChanged } from "./goals-manager/title-input-value-is-changed.mjs";
import { checkBoxValueIsChanged } from "./goals-manager/checkbox-value-is-changed.mjs";

export const bindCheckboxEventTargetInitValueChangeToBtnActiveStatusViaGoalId = (eventTarget: EventTarget | null, updateButtons: HTMLCollectionOf<HTMLButtonElement>, titleInputs: HTMLCollectionOf<HTMLInputElement>, checkBoxes: HTMLCollectionOf<HTMLInputElement>): void =>
{
    if (eventTarget instanceof HTMLInputElement)
    {
        if (    eventTarget.dataset.initValue === "true" && ! eventTarget.checked
             || eventTarget.dataset.initValue === "false" && eventTarget.checked )
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

            for (let index = checkBoxes.length - 1; index >= 0; --index)
            {
                const checkBox = checkBoxes[index];

                if (    eventTarget.dataset.goalId === checkBox.dataset.goalId
                     && checkBoxValueIsChanged(checkBox) )
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

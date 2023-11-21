import { TitleInput } from "./goals-manager/title-input.mjs";
import { AccomplishedCheckbox } from "./goals-manager/accomplished-checkbox.mjs";

export const bindEventTargetInitValueChangeToBtnActiveStatusViaGoalId = (eventTarget: EventTarget | null, updateButtons: HTMLCollectionOf<HTMLButtonElement>, titleInputs: HTMLCollectionOf<HTMLInputElement>, checkBoxes: HTMLCollectionOf<HTMLInputElement>): void =>
{
    if (eventTarget instanceof HTMLInputElement)
    {
        if (eventTarget.value !== eventTarget.dataset.initValue)
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

            for (let index = titleInputs.length - 1; index >= 0; --index)
            {
                const titleInput = new TitleInput(titleInputs[index]);

                if (  eventTarget.dataset.goalId === titleInput.goalId
                      && titleInput.valueIsChanged() )
                {
                    changesPresent = true;
                    break;
                }
            }

            if ( ! changesPresent)
            {
                for (let index = checkBoxes.length - 1; index >= 0; --index)
                {
                    const checkBox = new AccomplishedCheckbox(checkBoxes[index]);

                    if (    eventTarget.dataset.goalId === checkBox.goalId
                         && checkBox.valueIsChanged() )
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

export default bindEventTargetInitValueChangeToBtnActiveStatusViaGoalId;

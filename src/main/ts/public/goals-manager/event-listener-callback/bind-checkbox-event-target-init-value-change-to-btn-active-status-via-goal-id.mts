import { titleInputValueIsChanged } from "../title-input-value-is-changed.mjs";
import { checkboxValueIsChanged } from "../checkbox-value-is-changed.mjs";

export const bindCheckboxEventTargetInitValueChangeToBtnActiveStatusViaGoalId = (
    element: Element,
    updateButtons: HTMLCollectionOf<HTMLButtonElement>,
    titleInputs: HTMLCollectionOf<HTMLInputElement>,
    accomplishedCheckboxes: HTMLCollectionOf<HTMLInputElement>,
    goalPrivacyCheckboxes: HTMLCollectionOf<HTMLInputElement> ): void =>
{
    if (element instanceof HTMLInputElement)
    {
        if ( checkboxValueIsChanged(element) )
        {
            for (let index = updateButtons.length - 1; index >= 0; --index)
            {
                const updateBtn = updateButtons[index];

                if (updateBtn.dataset.goalId === element.dataset.goalId)
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

            for (let index = accomplishedCheckboxes.length - 1; index >= 0; --index)
            {
                const accomplishedCheckbox = accomplishedCheckboxes[index];

                if (    element.dataset.goalId === accomplishedCheckbox.dataset.goalId
                     && checkboxValueIsChanged(accomplishedCheckbox) )
                {
                    changesPresent = true;
                    break;
                }
            }

            if ( ! changesPresent)
            {
                for (let index = goalPrivacyCheckboxes.length - 1; index >= 0; --index)
                {
                    const goalPrivacyCheckbox = goalPrivacyCheckboxes[index];

                    if (    element.dataset.goalId === goalPrivacyCheckbox.dataset.goalId
                        && checkboxValueIsChanged(goalPrivacyCheckbox) )
                    {
                        changesPresent = true;
                        break;
                    }
                }
            }

            if ( ! changesPresent)
            {
                for (let index = titleInputs.length - 1; index >= 0; --index)
                {
                    const titleInput = titleInputs[index];

                    if (  element.dataset.goalId === titleInput.dataset.goalId
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

                    if (updateBtn.dataset.goalId === element.dataset.goalId)
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
    else
    {
        throw new TypeError(`${bindCheckboxEventTargetInitValueChangeToBtnActiveStatusViaGoalId.name}: element argument is not an instance of HTMLInputElement: ${element}`);
    }
};

export default bindCheckboxEventTargetInitValueChangeToBtnActiveStatusViaGoalId;

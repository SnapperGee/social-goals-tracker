import { checkboxValueIsChanged, titleInputValueIsChanged } from "./util.mjs";

export const activateUpdateBtnOnChangeHandler = (
    updateButtons: HTMLCollectionOf<HTMLButtonElement>,
    titleInputs: HTMLCollectionOf<HTMLInputElement>,
    accomplishedCheckboxes: HTMLCollectionOf<HTMLInputElement>,
    goalPrivacyCheckboxes: HTMLCollectionOf<HTMLInputElement> ): (event: KeyboardEvent) => void =>
{
    return (event: KeyboardEvent) =>
    {
        if (event.currentTarget instanceof HTMLInputElement)
        {
            const eventTarget = event.currentTarget;

            if ( titleInputValueIsChanged(eventTarget) )
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
                    const titleInput = titleInputs[index];

                    if (  eventTarget.dataset.goalId === titleInput.dataset.goalId
                        && titleInputValueIsChanged(titleInput) )
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

                        if (    eventTarget.dataset.goalId === goalPrivacyCheckbox.dataset.goalId
                            && checkboxValueIsChanged(goalPrivacyCheckbox) )
                        {
                            changesPresent = true;
                            break;
                        }
                    }
                }

                if ( ! changesPresent)
                {
                    for (let index = accomplishedCheckboxes.length - 1; index >= 0; --index)
                    {
                        const accomplishedCheckbox = accomplishedCheckboxes[index];

                        if ( eventTarget.dataset.goalId === accomplishedCheckbox.dataset.goalId
                            && checkboxValueIsChanged(accomplishedCheckbox) )
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
};

export default activateUpdateBtnOnChangeHandler;

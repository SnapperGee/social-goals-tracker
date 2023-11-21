export const bindEventTargetInitValueChangeToBtnActiveStatusViaGoalId = (eventTarget: EventTarget | null, buttons: HTMLCollectionOf<HTMLButtonElement>): void =>
{
    if (eventTarget instanceof HTMLInputElement)
    {
        if (eventTarget.value !== eventTarget.dataset.initValue)
        {
            for (let index = buttons.length - 1; index >= 0; --index)
            {
                const updateBtn = buttons[index];

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
            for (let index = buttons.length - 1; index >= 0; --index)
            {
                const updateBtn = buttons[index];

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
};

export default bindEventTargetInitValueChangeToBtnActiveStatusViaGoalId;

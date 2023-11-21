export const btnDynamicActivationDeactivation = (event: Event, buttons: HTMLCollectionOf<HTMLButtonElement>): void =>
{
    const inputReceiver = event.target;

    if (inputReceiver instanceof HTMLInputElement)
    {
        if (inputReceiver.value !== inputReceiver.dataset.initValue)
        {
            for (let index = buttons.length - 1; index >= 0; --index)
            {
                const updateBtn = buttons[index];

                if (updateBtn.dataset.goalId === inputReceiver.dataset.goalId)
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

                if (updateBtn.dataset.goalId === inputReceiver.dataset.goalId)
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

export default btnDynamicActivationDeactivation;

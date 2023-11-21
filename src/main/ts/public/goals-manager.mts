const milestonesToggleButtons = document.getElementsByClassName("milestonesToggleBtn");
const updateBtns = document.getElementsByClassName("updateBtn") as HTMLCollectionOf<HTMLButtonElement>;
const titleInputs = document.getElementsByClassName("titleInput");

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

    titleInput.addEventListener("keydown", (event) =>
    {
        const inputReceiver = event.target;

        if (inputReceiver instanceof HTMLInputElement)
        {
            if (inputReceiver.value !== inputReceiver.dataset.initValue)
            {
                for (let index = updateBtns.length - 1; index >= 0; --index)
                {
                    const updateBtn = updateBtns[index];

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
                for (let index = updateBtns.length - 1; index >= 0; --index)
                {
                    const updateBtn = updateBtns[index];

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
    });

    titleInput.addEventListener("keyup", (event) =>
    {
        const inputReceiver = event.target;

        if (inputReceiver instanceof HTMLInputElement)
        {
            if (inputReceiver.value !== inputReceiver.dataset.initValue)
            {
                for (let index = updateBtns.length - 1; index >= 0; --index)
                {
                    const updateBtn = updateBtns[index];

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
                for (let index = updateBtns.length - 1; index >= 0; --index)
                {
                    const updateBtn = updateBtns[index];

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
    });
}

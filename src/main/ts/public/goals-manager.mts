const milestoneButtons = document.getElementsByClassName("milestonesBtn");

for (let index = milestoneButtons.length - 1; index >= 0; --index)
{
    const milestoneBtn = milestoneButtons[index];

    milestoneBtn.addEventListener("click", (event) =>
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

                for (let i = milestoneButtons.length - 1; i >= 0; --i)
                {
                    const btn = milestoneButtons[i];

                    if (btn !== clickedBtn)
                    {
                        btn.classList.remove("active");
                        clickedBtn.ariaPressed = "false";
                    }
                }
            }
        }
    });
}

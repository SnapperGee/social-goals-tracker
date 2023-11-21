const milestoneButtons = document.querySelectorAll(".milestonesBtn");

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
            }
            else
            {
                clickedBtn.classList.add("active");
            }

            clickedBtn.ariaPressed = clickedBtn.ariaPressed === "true" ? "false" : "true";
        }
    });
}

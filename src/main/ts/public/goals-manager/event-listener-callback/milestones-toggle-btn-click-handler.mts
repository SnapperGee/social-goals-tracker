/**
 * Call back function for the milestones toggle button click event that makes
 * milestones of a goal and the button to add milestones to a goal visible. Also
 * makes all milestones not associated with the goal invisible.
 *
 * @param event The event object of the milestones toggle button click event.
 * @param milestonesToggleBtns All milestone visibility toggle buttons.
 * @param milestonesDivs All milestone divs.
 * @param addMilestoneBtn Add milestone button.
 */
export const milestonesToggleBtnClickHandler = (
    milestonesToggleBtns: HTMLCollectionOf<HTMLButtonElement>,
    milestonesDivs: HTMLCollectionOf<HTMLDivElement>,
    addMilestoneBtn: HTMLButtonElement ): (event: MouseEvent) => void =>
{
    return (event: MouseEvent) =>
    {
        if (event.currentTarget instanceof HTMLButtonElement)
        {
            const clickedBtn = event.currentTarget;

            if (clickedBtn.classList.contains("active"))
            {
                clickedBtn.classList.remove("active");
                clickedBtn.ariaPressed = "false";

                if ( ! addMilestoneBtn.classList.contains("d-none"))
                {
                    addMilestoneBtn.classList.add("d-none");
                    delete addMilestoneBtn.dataset.goalId;
                }

                for (let i = milestonesDivs.length - 1; i >= 0; --i)
                {
                    const milestonesDiv = milestonesDivs[i];

                    if (clickedBtn.dataset.goalId === milestonesDiv.dataset.goalId && ! milestonesDiv.classList.contains("d-none"))
                    {
                        milestonesDiv.classList.add("d-none");
                    }
                }
            }
            else
            {
                clickedBtn.classList.add("active");
                clickedBtn.ariaPressed = "true";

                if (addMilestoneBtn.classList.contains("d-none"))
                {
                    addMilestoneBtn.classList.remove("d-none");
                    addMilestoneBtn.dataset.goalId = clickedBtn.dataset.goalId;
                }

                for (let i = milestonesToggleBtns.length - 1; i >= 0; --i)
                {
                    const toggleBtn = milestonesToggleBtns[i];

                    if (toggleBtn !== clickedBtn)
                    {
                        toggleBtn.classList.remove("active");
                        toggleBtn.ariaPressed = "false";
                    }
                }

                for (let i = milestonesDivs.length - 1; i >= 0; --i)
                {
                    const milestonesDiv = milestonesDivs[i];

                    if (clickedBtn.dataset.goalId === milestonesDiv.dataset.goalId && milestonesDiv.classList.contains("d-none"))
                    {
                        milestonesDiv.classList.remove("d-none");
                    }
                    else if (clickedBtn.dataset.goalId !== milestonesDiv.dataset.goalId && ! milestonesDiv.classList.contains("d-none"))
                    {
                        milestonesDiv.classList.add("d-none");
                    }
                }
            }
        }
    };
};

export default milestonesToggleBtnClickHandler;

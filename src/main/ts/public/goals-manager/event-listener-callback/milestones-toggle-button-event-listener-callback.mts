export const milestonesToggleBtnEventListenerCallback = (
    event: Event,
    milestonesToggleBtns: HTMLCollectionOf<HTMLButtonElement>,
    milestonesDivs: HTMLCollectionOf<HTMLDivElement>,
    addMilestoneBtn: HTMLButtonElement ): void =>
{
    if (event.target instanceof HTMLButtonElement)
    {
        const clickedBtn = event.target;

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

                if ( clickedBtn.dataset.goalId === milestonesDiv.dataset.goalId && ! milestonesDiv.classList.contains("d-none"))
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

                if ( clickedBtn.dataset.goalId === milestonesDiv.dataset.goalId && milestonesDiv.classList.contains("d-none"))
                {
                    milestonesDiv.classList.remove("d-none");
                }
            }
        }
    }
};

export default milestonesToggleBtnEventListenerCallback;

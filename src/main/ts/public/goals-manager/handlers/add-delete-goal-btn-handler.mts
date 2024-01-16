export const addDeleteGoalBtnHandler = (deleteGoalBtn: HTMLButtonElement, milestonesDivs: HTMLCollectionOf<HTMLDivElement>): void =>
{
    deleteGoalBtn.addEventListener("click", async () =>
    {
        const { goalId } = deleteGoalBtn.dataset;

        if (goalId)
        {
            const res = await fetch(`/goalsmanager/${goalId}`, {
                method: "DELETE"
            });

            const resJson = await res.json();

            if ( ! ("message" in resJson))
            {
                for (let index = 0; index < milestonesDivs.length; ++index)
                {
                    const mileStoneDiv = milestonesDivs[index];

                    if (mileStoneDiv.dataset.goalId === goalId)
                    {
                        mileStoneDiv.remove();
                        break;
                    }
                }

                deleteGoalBtn.parentElement?.parentElement?.remove();
            }
        }
        else
        {
            throw new Error("No goal id.");
        }
    });
};

export default addDeleteGoalBtnHandler;

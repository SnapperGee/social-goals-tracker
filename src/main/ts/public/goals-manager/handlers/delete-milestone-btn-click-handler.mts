export const deleteMilestoneBtnClickHandler = (deleteMilestoneBtn: HTMLButtonElement): () => Promise<void> =>
{
    const { milestoneId } = deleteMilestoneBtn.dataset;

    return async () =>
    {
        if (milestoneId)
        {
            try
            {
                const res = await fetch(`/goalsmanager/milestone/${milestoneId}`,
                {
                    method: "DELETE"
                });

                const resJson = await res.json();

                if (res.ok && ! ("message" in resJson))
                {
                    deleteMilestoneBtn.parentElement?.parentElement?.remove();
                }
            }
            catch (error)
            {
                console.error(error);
            }
        }
    };
};

export default deleteMilestoneBtnClickHandler;

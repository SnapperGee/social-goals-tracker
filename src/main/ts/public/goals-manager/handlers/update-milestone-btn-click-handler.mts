import type { milestone } from "../../../../prisma/index";

export const updateMilestoneBtnClickHandler = (
    updateBtn: HTMLButtonElement,
    milestonesDiv: HTMLDivElement
): (event: MouseEvent) => Promise<void> =>
{
    return async (event: MouseEvent): Promise<void> =>
    {
        if (event.currentTarget instanceof HTMLButtonElement)
        {
            const milestoneListItems = milestonesDiv.querySelectorAll<HTMLLIElement>("li");

            const milestoneElements: Array<{ id: string; titleInput: HTMLInputElement; accomplishedCheckbox: HTMLInputElement }> = [];

            for (let index = 0; index < milestoneListItems.length; ++index)
            {
                const milestoneListItem = milestoneListItems[index];

                const id = milestoneListItem.dataset.milestoneId;
                const titleInput = milestoneListItem.querySelector<HTMLInputElement>("input[type=text]");
                const accomplishedCheckbox = milestoneListItem.querySelector<HTMLInputElement>("input[type=checkbox]");

                if (id && titleInput && accomplishedCheckbox)
                {
                    milestoneElements.push({ id, titleInput, accomplishedCheckbox });
                }
                else
                {
                    throw new Error(`${updateMilestoneBtnClickHandler.name}: missing milestone data: ${milestoneListItem}`);
                }
            }

            const milestones: Array<Pick<milestone, "id" | "title" | "accomplished">> = milestoneElements.map(({ id, titleInput, accomplishedCheckbox }) => ({id, title: titleInput.value, accomplished: accomplishedCheckbox.checked}) );

            try
            {
                const res = await fetch(`/goalsmanager/milestone`,
                {
                    method: "POST",
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(milestones)
                });

                const resJson = await res.json();

                if (res.ok && ! ("message"  in resJson))
                {
                    updateBtn.disabled = true;
                    updateBtn.classList.replace("btn-primary", "btn-secondary");
                }
            }
            catch (error)
            {
                console.error(error);
            }
        }
        else
        {
            throw new Error(`${updateMilestoneBtnClickHandler.name}: event target not an HTMLButtonElement: ${event.currentTarget}`);
        }
    };
};

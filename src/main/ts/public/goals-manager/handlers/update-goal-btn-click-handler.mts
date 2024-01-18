import type { goal } from "../../../../prisma/index";

export const updateGoalBtnClickHandler = (
    titleInput: HTMLInputElement,
    accomplishedCheckbox: HTMLInputElement,
    isPrivateCheckbox: HTMLInputElement
): (event: MouseEvent) => Promise<void> =>
{
    return async (event: MouseEvent): Promise<void> =>
    {
        if (event.currentTarget instanceof HTMLButtonElement)
        {
            const { goalId } = event.currentTarget.dataset;

            if (goalId)
            {
                const data: Pick<goal, "title" | "accomplished" | "private"> = {
                    title: titleInput.value,
                    accomplished: accomplishedCheckbox.checked,
                    private: isPrivateCheckbox.checked
                };

                console.log(`data:\n${JSON.stringify(data, null, 4)}\n\n\n`);

                try
                {
                    const res = await fetch(`/goalsmanager/${goalId}`,
                    {
                        method: "POST",
                        // eslint-disable-next-line @typescript-eslint/naming-convention
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data)
                    });

                    const resJson = await res.json();

                    console.log(`res:\n${JSON.stringify(resJson, null, 4)}\n\n\n`);

                    if (res.ok && ! ("message"  in resJson))
                    {
                        titleInput.value = resJson.title;
                        titleInput.dataset.initValue = resJson.title;
                        accomplishedCheckbox.checked = resJson.accomplished;
                        accomplishedCheckbox.dataset.initValue = String(resJson.accomplished);
                        isPrivateCheckbox.checked = resJson.private;
                        isPrivateCheckbox.dataset.initValue = String(resJson.private);
                    }
                }
                catch (error)
                {
                    console.error(error);
                }
            }
            else
            {
                console.error(`${updateGoalBtnClickHandler.name}: event target missing goalId: ${event.currentTarget}`);
            }
        }
        else
        {
            console.error(`${updateGoalBtnClickHandler.name}: event target not an HTMLButtonElement: ${event.currentTarget}`);
        }
    };
};

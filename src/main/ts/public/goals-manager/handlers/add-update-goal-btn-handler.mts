export const addUpdateGoalBtnHandler = ( updateGoalBtn: HTMLButtonElement,
                                         titleInputs: HTMLCollectionOf<HTMLInputElement>,
                                         accomplishedInputs: HTMLCollectionOf<HTMLInputElement>,
                                         isPrivateInputs: HTMLCollectionOf<HTMLInputElement> ): void =>
{
    updateGoalBtn.addEventListener("click", async () =>
    {
        const { goalId } = updateGoalBtn.dataset;

        if (goalId)
        {
            let titleInput: HTMLInputElement | undefined;
            let accomplishedInput: HTMLInputElement | undefined;
            let isPrivateInput: HTMLInputElement | undefined;

            for (let i = 0; i < titleInputs.length; ++i)
            {
                const _titleInput = titleInputs[i];
                if (_titleInput.dataset.goalId === goalId)
                {
                    titleInput = _titleInput;
                    break;
                }
            }

            for (let i = 0; i < accomplishedInputs.length; ++i)
            {
                const _accomplishedInput = accomplishedInputs[i];
                if (_accomplishedInput.dataset.goalId === goalId)
                {
                    accomplishedInput = _accomplishedInput;
                    break;
                }
            }

            for (let i = 0; i < isPrivateInputs.length; ++i)
            {
                const _isPrivateInput = isPrivateInputs[i];
                if (_isPrivateInput.dataset.goalId === goalId)
                {
                    isPrivateInput = _isPrivateInput;
                    break;
                }
            }

            const res = await fetch(`/goalsmanager/${goalId}`, {
                method: "POST",
                // eslint-disable-next-line @typescript-eslint/naming-convention
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({title: titleInput?.value, accomplished: accomplishedInput?.checked, private: isPrivateInput?.checked})
            });

            const resJson = await res.json();

            if ( ! ("message" in resJson))
            {
                if (titleInput)
                {
                    titleInput.value = resJson.title;
                    titleInput.dataset.initValue = resJson.title;
                }

                if (accomplishedInput)
                {
                    accomplishedInput.checked = resJson.accomplished;
                    accomplishedInput.dataset.initValue = resJson.accomplished.toString();
                }

                if (isPrivateInput)
                {
                    isPrivateInput.checked = resJson.private;
                    isPrivateInput.dataset.initValue = resJson.private.toString();
                }
            }
        }
        else
        {
            throw new Error(`${addUpdateGoalBtnHandler.name}: no goal id.`);
        }
    });
};

export default addUpdateGoalBtnHandler;

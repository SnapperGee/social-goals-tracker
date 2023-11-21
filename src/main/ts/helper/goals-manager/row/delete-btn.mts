export type GoalOrMilestoneId = { goalId: string } | { milestoneId: string };

export type DeleteBtn = HTMLButtonElement;

export const deleteBtn = (opts: GoalOrMilestoneId): DeleteBtn =>
{
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-danger", "btn-sm", "shadow");
    btn.type = "button";
    btn.textContent = "Delete";

    if ("goalId" in opts)
    {
        if (opts.goalId.trim().length === 0)
        {
            throw new Error(`${deleteBtn.name}: goal ID is empty.`);
        }

        btn.dataset.goalId = opts.goalId;
        btn.id = `delete-goal_${opts.goalId}`;
    }
    else if ("milestoneId" in opts)
    {
        if (opts.milestoneId.trim().length === 0)
        {
            throw new Error(`${deleteBtn.name}: milestone ID is empty.`);
        }

        btn.dataset.milestoneId = opts.milestoneId;
        btn.id = `delete-milestone_${opts.milestoneId}`;
    }
    else
    {
        throw new Error(`${deleteBtn.name}: neither goal nor milestone ID provided: ${opts}`);
    }

    return btn;
};

export default deleteBtn;

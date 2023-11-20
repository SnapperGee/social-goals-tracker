export type UpdateBtn = HTMLButtonElement;

export const updateBtn = (goalId: string): UpdateBtn =>
{
    const btn = document.createElement("button");
    btn.id = `update-goal_${goalId}`;
    btn.dataset.goalId = goalId;
    btn.classList.add("btn", "btn-secondary", "shadow", "mb-1");
    btn.type = "submit";
    btn.disabled = true;
    btn.textContent = "Update";
    return btn;
};

export default updateBtn;

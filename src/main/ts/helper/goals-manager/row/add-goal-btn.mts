export type AddGoalBtn = HTMLButtonElement;

export const addGoalBtn = (): AddGoalBtn =>
{
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-primary", "btn-lg", "shadow");
    btn.type = "button";
    btn.textContent = "Add Goal";
    return btn;
};

export default addGoalBtn;

export type GoalPrivateToggle = HTMLDivElement;

export const goalPrivateToggle = (goalId: string): GoalPrivateToggle =>
{
    const id = `private-goal_${goalId}`;

    const checkbox = document.createElement("input");
    checkbox.id = id;
    checkbox.classList.add("form-check-input");
    checkbox.type = "checkbox";
    checkbox.role = "switch";

    const label = document.createElement("label");
    label.classList.add("form-check-label");
    label.htmlFor = id;
    label.textContent = "Private";

    const div = document.createElement("div");
    div.classList.add("form-check", "form-switch");
    div.appendChild(checkbox);
    div.appendChild(label);

    return div;
};

export default goalPrivateToggle;

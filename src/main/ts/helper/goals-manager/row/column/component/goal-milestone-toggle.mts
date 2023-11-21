export interface GoalMilestoneToggle extends HTMLButtonElement
{
    setPressed(): void;
    setNotPressed(): void;
}

export const goalMilestoneToggle = (): GoalMilestoneToggle =>
{
    const btn = document.createElement("button") as GoalMilestoneToggle;
    btn.classList.add("btn", "btn-outline-primary", "btn-sm", "milestoneToggleBtn");
    btn.type = "button";
    btn.dataset.bsToggle = "button";
    btn.ariaPressed = "false";
    btn.textContent = "Milestones";

    btn.setPressed = (): void =>
    {
        btn.classList.add("active");
        btn.ariaPressed = "true";
    };

    btn.setNotPressed = (): void =>
    {
        btn.classList.remove("active");
        btn.ariaPressed = "false";
    };

    return btn;
};

export default goalMilestoneToggle;

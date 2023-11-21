import type { AccomplishedCheckbox } from "./shared.mjs";
import type { GoalPrivateToggle } from "./goal-private-toggle.mjs";
import type { GoalMilestoneToggle } from "./goal-milestone-toggle.mjs";


export type GoalControls = HTMLDivElement;

export const goalControls = ( accomplishedCheckbox: AccomplishedCheckbox,
                              privateToggleSwitch: GoalPrivateToggle,
                              milestoneToggleBtn: GoalMilestoneToggle ): GoalControls =>
{
    const div = document.createElement("div");
    div.classList.add("d-flex", "justify-content-around", "align-items-center", "mb-2");
    div.appendChild(accomplishedCheckbox);
    div.appendChild(privateToggleSwitch);
    div.appendChild(milestoneToggleBtn);
    return div;
};

export default goalControls;

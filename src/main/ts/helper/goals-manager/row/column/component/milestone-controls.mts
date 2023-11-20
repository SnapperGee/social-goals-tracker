import type { AccomplishedCheckbox } from "./shared.mjs";
import type { DeleteBtn } from "../../delete-btn.mjs";

export type MilestoneControls = HTMLDivElement;

export const milestoneControls = (
    accomplishedCheckbox: AccomplishedCheckbox,
    deleteBtn: DeleteBtn ): MilestoneControls =>
{
    const div = document.createElement("div");
    div.classList.add("d-flex", "justify-content-between", "px-4", "mb-2");
    div.appendChild(accomplishedCheckbox);
    div.appendChild(deleteBtn);
    return div;
};

export default milestoneControls;

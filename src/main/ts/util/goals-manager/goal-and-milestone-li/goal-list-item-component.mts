import type { AccomplishedCheckboxDiv } from "./shared-component.mjs";

type HTMLPrivateToggleSwitchDiv = HTMLDivElement;

export const privateToggleSwitchDiv = (switchId: string): HTMLPrivateToggleSwitchDiv =>
{
    const checkbox = document.createElement("input");
    checkbox.id = switchId;
    checkbox.classList.add("form-check-input");
    checkbox.type = "checkbox";
    checkbox.role = "switch";

    const label = document.createElement("label");
    label.classList.add("form-check-label");
    label.htmlFor = switchId;
    label.textContent = "Private";

    const div = document.createElement("div");
    div.classList.add("form-check", "form-switch");
    div.appendChild(checkbox);
    div.appendChild(label);

    return div;
};

export interface MilestonesToggleBtn extends HTMLButtonElement
{
    setPressed(): void;
    setNotPressed(): void;
}

export const milestonesToggleBtn = (): MilestonesToggleBtn =>
{
    const btn = document.createElement("button") as MilestonesToggleBtn;
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

export const togglesAndButtons = ( accomplishedCheckboxDiv: AccomplishedCheckboxDiv,
                                   privateToggleSwitchDiv: HTMLPrivateToggleSwitchDiv,
                                   milestonesToggleBtn: MilestonesToggleBtn ): HTMLDivElement =>
{
    const div = document.createElement("div");
    div.classList.add("d-flex", "justify-content-around", "align-items-center", "mb-2");
    div.appendChild(accomplishedCheckboxDiv);
    div.appendChild(privateToggleSwitchDiv);
    div.appendChild(milestonesToggleBtn);
    return div;
};

export const create = Object.freeze({
    privateToggleSwitchDiv, milestonesToggleBtn
});

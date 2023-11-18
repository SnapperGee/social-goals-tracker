export const accomplishedCheckboxDiv = (checkBoxId: string): HTMLDivElement =>
{
    const checkbox = document.createElement("input");
    checkbox.id = checkBoxId;
    checkbox.classList.add("form-check-input", "me-1");
    checkbox.type = "checkbox";

    const label = document.createElement("label");
    label.classList.add("form-check-label");
    label.htmlFor = checkBoxId;
    label.textContent = "Accomplished";

    const div = document.createElement("div");
    div.appendChild(checkbox);
    div.appendChild(label);

    return div;
};

export const privateToggleSwitchDiv = (switchId: string): HTMLDivElement =>
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

export const goalTitleLabelAndTextInput = (id: string, title: string): { label: HTMLLabelElement; input: HTMLInputElement } =>
{
    const label = document.createElement("label");
    label.htmlFor = id;
    label.classList.add("form-label", "d-none");
    label.textContent = `${title} Goal Title`;

    const input = document.createElement("input");
    input.id = id;
    input.type = "text";
    input.classList.add("form-control");
    input.placeholder = "Goal Title";

    return {label, input};
};

export const create = Object.freeze(
{
    accomplishedCheckboxDiv,
    privateToggleSwitchDiv,
    milestonesToggleBtn,
    goalTitleLabelAndTextInput
});

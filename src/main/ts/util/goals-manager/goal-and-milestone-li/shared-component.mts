export const deleteBtn = (): HTMLButtonElement =>
{
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-danger", "btn-sm", "shadow");
    btn.type = "button";
    btn.textContent = "Delete";
    return btn;
};

export type AccomplishedCheckboxDiv = HTMLDivElement;

export const accomplishedCheckboxDiv = (checkBoxId: string): AccomplishedCheckboxDiv =>
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

export interface TitleLabelAndTextInput
{
    label: HTMLLabelElement;
    input: HTMLInputElement;
}

export const titleLabelAndTextInput = (id: string, type: "goal" | "milestone", title: string): TitleLabelAndTextInput =>
{
    const label = document.createElement("label");
    label.htmlFor = id;
    label.classList.add("form-label", "d-none");
    label.textContent = `${title} ${type} title`;

    const input = document.createElement("input");
    input.id = id;
    input.type = "text";
    input.classList.add("form-control");
    input.placeholder = `${type}`;

    return {label, input};
};

export const create = Object.freeze({
    deleteBtn, accomplishedCheckboxDiv, titleLabelAndTextInput
});

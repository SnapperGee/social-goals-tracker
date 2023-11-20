import type { GoalOrMilestoneId } from "../../delete-btn.mjs";

export type AccomplishedCheckbox = HTMLDivElement;

export const accomplishedCheckboxDiv = (opts: GoalOrMilestoneId): AccomplishedCheckbox =>
{
    const checkbox = document.createElement("input");
    checkbox.classList.add("form-check-input", "me-1");
    checkbox.type = "checkbox";

    const label = document.createElement("label");
    label.classList.add("form-check-label");
    label.textContent = "Accomplished";

    if ("goalId" in opts)
    {
        if (opts.goalId.trim().length === 0)
        {
            throw new Error(`${accomplishedCheckboxDiv.name}: goal ID is empty.`);
        }
        const checkBoxId = `goal-accomplished_${opts.goalId}`;
        checkbox.id = checkBoxId;
        checkbox.dataset.goalId = opts.goalId;
        label.htmlFor = checkBoxId;
    }
    else if ("milestoneId" in opts)
    {
        if (opts.milestoneId.trim().length === 0)
        {
            throw new Error(`${accomplishedCheckboxDiv.name}: milestone ID is empty.`);
        }

        const checkBoxId = `milestone-accomplished_${opts.milestoneId}`;
        checkbox.id = checkBoxId;
        checkbox.dataset.milestoneId = opts.milestoneId;
        label.htmlFor = checkBoxId;
    }
    else
    {
        throw new Error(`${accomplishedCheckboxDiv.name}: neither goal nor milestone ID provided: ${opts}`);
    }

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

export const titleLabelAndTextInput = (title: string, opts: GoalOrMilestoneId): TitleLabelAndTextInput =>
{
    const label = document.createElement("label");
    label.classList.add("form-label", "d-none");
    label.ariaHidden = "true";

    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("form-control");
    input.value = title;

    let titleInputId: string;

    if ("goalId" in opts)
    {
        if (opts.goalId.trim().length === 0)
        {
            throw new Error(`${titleLabelAndTextInput.name}: goal ID is empty.`);
        }

        titleInputId = `goal-title_${opts.goalId}`;

        label.textContent = "Goal Title:";

        input.placeholder = "Goal";
        input.dataset.goalId = opts.goalId;
    }
    else if ("milestoneId" in opts)
    {
        if (opts.milestoneId.trim().length === 0)
        {
            throw new Error(`${titleLabelAndTextInput.name}: milestone ID is empty.`);
        }

        titleInputId = `milestone-title_${opts.milestoneId}`;

        label.textContent = "Milestone Title:";

        input.placeholder = "Milestone";
        input.dataset.milestoneId = opts.milestoneId;
    }
    else
    {
        throw new Error(`${titleLabelAndTextInput.name}: neither goal nor milestone ID provided: ${opts}`);
    }

    label.htmlFor = titleInputId;
    input.id = titleInputId;

    return {label, input};
};

export const create = Object.freeze({
    accomplishedCheckboxDiv, titleLabelAndTextInput
});

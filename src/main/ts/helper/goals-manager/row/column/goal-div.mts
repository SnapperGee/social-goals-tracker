import type { GoalControls } from "./component/goal-controls.mjs";
import type { TitleLabelAndTextInput } from "./component/shared.mjs";

export const goalDiv = ( controls: GoalControls,
                         titleLabelAndTextInput: TitleLabelAndTextInput ): HTMLDivElement =>
{
    const div = document.createElement("div");
    div.classList.add("border", "border-secondary-subtle", "border-opacity-10", "border-2", "rounded-3", "p-3");
    div.appendChild(controls);
    div.appendChild(titleLabelAndTextInput.label);
    div.appendChild(titleLabelAndTextInput.input);
    return div;
};

export default goalDiv;

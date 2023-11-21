import type { MilestoneParagraph } from "./component/milestone-paragraph.mjs";
import type { MilestoneControls } from "./component/milestone-controls.mjs";
import type { TitleLabelAndTextInput } from "./component/shared.mjs";

export const milestoneDiv = ( controls: MilestoneControls,
                              paragraph: MilestoneParagraph,
                              titleLabelAndTextInput: TitleLabelAndTextInput ): HTMLDivElement =>
{
    const div = document.createElement("div");
    div.classList.add("border", "border-secondary-subtle", "border-opacity-10", "border-2", "rounded-3", "p-3");
    div.appendChild(controls);
    div.appendChild(paragraph);
    div.appendChild(titleLabelAndTextInput.label);
    div.appendChild(titleLabelAndTextInput.input);
    return div;
};

export default milestoneDiv;

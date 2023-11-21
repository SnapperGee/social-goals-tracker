export type MilestoneParagraph = HTMLParagraphElement;

export const milestoneParagraph = (goalTitle: string): MilestoneParagraph =>
{
    const span = document.createElement("span");
    span.classList.add("text-body-secondary");
    span.textContent = "milestones";

    const paragraph = document.createElement("p");
    paragraph.classList.add("text-center", "m-0");
    paragraph.innerHTML = `${goalTitle} ${span.outerHTML}`;

    return paragraph;
};

export default milestoneParagraph;

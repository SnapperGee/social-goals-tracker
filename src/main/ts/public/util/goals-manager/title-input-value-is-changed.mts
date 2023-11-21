export const titleInputValueIsChanged = (titleHTMLInputElement: HTMLInputElement): boolean =>
    titleHTMLInputElement.dataset.initValue !== titleHTMLInputElement.value;

export default titleInputValueIsChanged;

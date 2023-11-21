export const checkBoxValueIsChanged = (checkBoxHTMLInputElement: HTMLInputElement): boolean =>
    checkBoxHTMLInputElement.dataset.initValue === "true" && ! checkBoxHTMLInputElement.checked
    || checkBoxHTMLInputElement.dataset.initValue === "false" && checkBoxHTMLInputElement.checked;

export default checkBoxValueIsChanged;

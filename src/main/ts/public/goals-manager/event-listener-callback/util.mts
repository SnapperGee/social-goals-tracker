export const checkboxValueIsChanged = (checkBoxHTMLInputElement: HTMLInputElement): boolean =>
    checkBoxHTMLInputElement.dataset.initValue === "true" && ! checkBoxHTMLInputElement.checked
    || checkBoxHTMLInputElement.dataset.initValue === "false" && checkBoxHTMLInputElement.checked;

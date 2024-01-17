export const titleInputValueIsChanged = (titleHTMLInputElement: HTMLInputElement): boolean =>
    titleHTMLInputElement.dataset.initValue !== titleHTMLInputElement.value;

export const checkboxValueIsChanged = (checkBoxHTMLInputElement: HTMLInputElement): boolean =>
    checkBoxHTMLInputElement.dataset.initValue === "true" && ! checkBoxHTMLInputElement.checked
    || checkBoxHTMLInputElement.dataset.initValue === "false" && checkBoxHTMLInputElement.checked;

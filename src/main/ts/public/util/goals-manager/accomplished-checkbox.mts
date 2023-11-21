export class AccomplishedCheckbox
{
    readonly #htmlInput: HTMLInputElement;

    readonly #initCheckedValue: boolean;

    public constructor(htmlInput: HTMLInputElement)
    {
        this.#htmlInput = htmlInput;
        this.#initCheckedValue = htmlInput.checked;
    }

    public get goalId(): string | undefined { return this.#htmlInput.dataset.goalId; }

    public valueIsChanged(): boolean
    {
        return this.#initCheckedValue !== this.#htmlInput.checked;
    }

    public valueIsSame(): boolean
    {
        return this.#initCheckedValue === this.#htmlInput.checked;
    }
}

export default AccomplishedCheckbox;

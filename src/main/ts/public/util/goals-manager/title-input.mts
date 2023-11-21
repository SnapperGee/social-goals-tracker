export class TitleInput
{
    readonly #htmlInput: HTMLInputElement;

    readonly #initValue: string | undefined;

    public constructor(htmlInput: HTMLInputElement)
    {
        this.#htmlInput = htmlInput;
        this.#initValue = htmlInput.dataset.initValue;
    }

    public get goalId(): string | undefined { return this.#htmlInput.dataset.goalId; }

    public valueIsChanged(): boolean
    {
        return this.#htmlInput.value !== this.#initValue;
    }

    public valueIsSame(): boolean
    {
        return this.#htmlInput.value === this.#initValue;
    }
}

export default TitleInput;

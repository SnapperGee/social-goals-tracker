// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function section(this: any, name: string, options: any): null
{
    if ( ! this._sections) { this._sections = {}; }
    this._sections[name] = options.fn(this);
    return null;
}

export default section;

export class BaseComponent {
	protected isError: boolean;
	protected _error: string;

	set error(value: string) {
		this._error = value;
		this.isError = value !== undefined && value !== null && value != "";
	}

	get error(): string {
		return this._error;
	}
}
import {
	BaseScheduler,
	ComponentOrVirtualComponent,
	GenericRenderer,
} from '@pionjs/pion';
import { noChange } from 'lit-html';
import { AsyncDirective } from 'lit-html/async-directive.js';
import { directive, Part, PartInfo } from 'lit-html/directive.js';

export const asyncDirective = <TPart extends Part, TProps extends unknown[]>(
	hook: (part: TPart, props: TProps) => unknown,
) => {
	class Scheduler<
		P extends object,
		T extends AsyncDirective,
		R extends GenericRenderer<T, P>,
		H extends ComponentOrVirtualComponent<T, P>,
		C extends (result: unknown) => void,
	> extends BaseScheduler<P, T, R, H> {
		_commit: C;
		constructor(renderer: R, host: H, commitCallback: C) {
			super(renderer, host);
			this._commit = commitCallback;
		}

		commit(result: unknown) {
			this._commit(result);
		}
	}

	const x = class extends AsyncDirective {
		_scheduler: Scheduler<
			object,
			AsyncDirective,
			() => unknown,
			this,
			(result: unknown) => void
		>;
		_part?: TPart;
		_props?: TProps;

		constructor(part: PartInfo) {
			super(part);

			this._scheduler = new Scheduler(
				() =>
					this._part && this._props ? hook(this._part, this._props) : noChange,
				this,
				(result: unknown) => this.setValue(result),
			);
		}

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		render(..._props: TProps) {
			return noChange;
		}

		update(_part: TPart, _props: TProps) {
			this._part = _part;
			this._props = _props;
			this._scheduler.update();

			return noChange;
		}

		disconnected() {
			this._scheduler.teardown();
		}

		reconnected(): void {
			this._scheduler.update();
		}
	};

	return directive(x);
};

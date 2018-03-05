import {isMac} from './util'

export const KEY_CODE = {
	ESC: 27,
	SHIFT: 16,
	CTRL: isMac() ? 91: 17
};

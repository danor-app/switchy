module.exports = function($) {
	const smart = $.smart;

	return async function faceList(raw, ctx) {
		ctx.type = 'txt';

		return '[SwitchyOmega Conditions]\r\n' + Object.entries(smart).map(([group, rules]) => `; ${group}\r\n${rules.join('\r\n')}\r\n\r\n`).join('');
	};
};
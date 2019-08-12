module.exports = function($) {
	const smart = $.smart;

	return async function faceList(raw, ctx) {
		const url = (ctx.params.url || '').trim();

		Object.values(smart).forEach(rules => {
			let index = rules.indexOf(url);

			if(index + 1) {
				rules.splice(index, 1);
			}
		});

		_fs.writeFileSync($.C.path.smart, JSON.stringify(smart, null, '\t'));

		return '[SwitchyOmega Conditions]\r\n' + Object.entries(smart).map(([group, rules]) => `; ${group}\r\n${rules.join('\r\n')}\r\n\r\n`).join('');
	};
};
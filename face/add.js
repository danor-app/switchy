module.exports = function($) {
	const smart = $.smart;

	return async function faceList(raw, ctx) {
		const url = (ctx.params.url || '').trim();

		let isFind = false;

		Object.values(smart).forEach(rules => {
			if(rules.indexOf(url) + 1) {
				isFind = true;
			}
		});

		if(!isFind) {
			const group = (ctx.params.group || 'Standalone').replace(/^./, char => (char || '').toUpperCase());
			const rules = smart[group] || (smart[group] = []);

			if(rules.indexOf(url) == -1) {
				rules.push(url);
			}

			_fs.writeFileSync($.C.path.smart, JSON.stringify(smart, null, '\t'));
		}

		return '[SwitchyOmega Conditions]\r\n' + Object.entries(smart).map(([group, rules]) => `; ${group}\r\n${rules.join('\r\n')}\r\n\r\n`).join('');
	};
};
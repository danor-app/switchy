module.exports = async function SimgScan($) {
	let { Harb } = $;

	$.smart = require($.C.path.smart);

	await Harb({
		routs: [
			{ id: 1, type: 1, method: 'get', path: 'config', _stat: {}, func: require('./face/config')($) },
			{ id: 2, type: 1, method: 'get', path: 'smart', _stat: {}, func: require('./face/smart')($) },
			{ id: 3, type: 1, method: 'get', path: 'add/:url', _stat: {}, func: require('./face/add')($) },
			{ id: 4, type: 1, method: 'get', path: 'add/:url/:group', _stat: {}, func: require('./face/add')($) },
			{ id: 5, type: 1, method: 'get', path: 'del/:url', _stat: {}, func: require('./face/del')($) },
		],
	});
};
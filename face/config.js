module.exports = function($) {
	return async function faceList(raw, ctx) {
		ctx.type = 'txt';

		return _fs.readFileSync($.C.path.config);
	};
};
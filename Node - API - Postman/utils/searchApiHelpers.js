var fieldMap = {
	'name': function (arr) { return give$inConfigObj(arr, true) },
	'type': function (arr) { return give$inConfigObj(arr, false) },
	'prize': function (arr) { return givePrizeObj(arr) },
	'info': function (arr) { return give$inConfigObj(arr, true) }
};

function give$inConfigObj(searchStrArr, regExpFlag) {
	if (!Array.isArray(searchStrArr)) searchStrArr = [searchStrArr]; 
	var $inArr = searchStrArr.reduce(function ($inArr, str, index) {
		$inArr.push(regExpFlag ? new RegExp(str, 'i') : str);
		return $inArr;
	}, []);

	return { $in: $inArr };

};

function givePrizeObj(prizeStr) {
	if (Array.isArray(prizeStr)) prizeStr = prizeStr[0]; 
	return { $lte: parseInt(prizeStr) };
};


exports.giveFindConf = function(req) {
	if (Object.keys(req.query).length){ 
		var andArr = [];
		Object.keys(req.query).forEach(function (key) {
			if (['name', 'type', 'prize', 'info'].indexOf(key) > -1) {
				var tempObj = {};
				tempObj[key] = fieldMap[key](req.query[key])
				andArr.push(tempObj);
			}
		});
		return { $and: andArr };
		console.log();
	} else {
		return {}
	}
}
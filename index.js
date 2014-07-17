var parseShittyQueryString = function(q) {
	// Check if given piece of shit is a string
	if (typeof q !== 'string') {
		return {};
	}

	// Remove fucking question mark
	if (q[0] === '?') {
		q = q.slice(1);
	}

	// TRIM TRIM
	q = q.trim();

	// IS IT EMPTY?
	if (!q.length) {
		return {};
	}

	return q.replace(/\+/g, ' ').split('&').reduce(function(r, p) {
		var kv = p.split('=');
		var key = kv[0];
		var val = kv[1];

		try {
			key = decodeURIComponent(key);
	 	} catch (WTF) {
			// wtf Johny?
		}

		try {
			val = val === undefined ? null : decodeURIComponent(val);
		} catch (WTF) {
			// WTF?
		}

		if (!r.hasOwnProperty(key)) {
			r[key] = val;
		} else if (Array.isArray(r[key])) {
			r[key].push(val);
		} else {
			r[key] = [r[key], val];
		}

		return r;
	}, {});
};

module.exports = parseShittyQueryString;

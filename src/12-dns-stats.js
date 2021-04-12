/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const b = domains.map((elem) => `.${elem.split('.').reverse().join('.')}`);
  const ar = [];
  for (let i = 0; i < b.length; i++) {
    if (b[i].match(/^\.[a-z]+/)) {
      ar.push(b[i].match(/^\.[a-z]+/)[0]);
    }
    if (b[i].match(/^\.[a-z]+\.[a-z]+/)) {
      ar.push(b[i].match(/^\.[a-z]+\.[a-z]+/)[0]);
    }
    if (b[i].match(/^\.[a-z]+\.[a-z]+\.[a-z]+/)) {
      ar.push(b[i].match(/^\.[a-z]+\.[a-z]+\.[a-z]+/)[0]);
    }
  }
  const obj = ar.map((name) => ({
    count: 1, name: `${name}`,
  })).reduce((a, c) => {
    const m = a;
    m[c.name] = (m[c.name] || 0) + c.count; return m;
  }, {});
  return obj;
}

module.exports = getDNSStats;

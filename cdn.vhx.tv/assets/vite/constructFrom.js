function o(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof e=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function n(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}export{n as c,o as t};
//# sourceMappingURL=constructFrom.js.map

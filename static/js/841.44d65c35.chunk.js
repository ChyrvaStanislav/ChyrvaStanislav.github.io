"use strict";
(self.webpackChunkexample = self.webpackChunkexample || []).push([[841], {
  841: function (e, n, t) {
    t.r(n);
    var s = t(165), a = t(861), c = t(439), o = t(791), r = t(689), l = t(243), i = t(184);
    n.default = function () {
      var e = (0, r.UO)().id, n = (0, o.useState)(null), t = (0, c.Z)(n, 2), u = t[0], d = t[1];
      return (0, o.useEffect)((function () {
        (0, a.Z)((0, s.Z)().mark((function n() {
          var t, a;
          return (0, s.Z)().wrap((function (n) {
            for (; ;) switch (n.prev = n.next) {
              case 0:
                return n.next = 2, (0, l.Z)("https://ajax.test-danit.com/api/json/posts/".concat(e));
              case 2:
                t = n.sent, a = t.data, console.log(a), d(a);
              case 6:
              case"end":
                return n.stop()
            }
          }), n)
        })))()
      }), []), (0, i.jsxs)("section", { children: [(0, i.jsx)("h1", { children: "Hello from OneBlogPage" }), (0, i.jsx)("h2", { children: null === u || void 0 === u ? void 0 : u.title }), (0, i.jsx)("p", { children: null === u || void 0 === u ? void 0 : u.body })] })
    }
  }
}]);
//# sourceMappingURL=841.44d65c35.chunk.js.map
!function(e) {
    function t(t) {
        for (var n, i, o = t[0], a = t[1], s = 0, c = []; s < o.length; s++)
            i = o[s],
            r[i] && c.push(r[i][0]),
            r[i] = 0;
        for (n in a)
            Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        for (u && u(t); c.length; )
            c.shift()()
    }
    var n = {}
      , r = {
        3: 0
    };
    function i(t) {
        if (n[t])
            return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, i),
        r.l = !0,
        r.exports
    }
    i.e = function(e) {
        var t = []
          , n = r[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var o = new Promise(function(t, i) {
                    n = r[e] = [t, i]
                }
                );
                t.push(n[2] = o);
                var a, s = document.createElement("script");
                s.charset = "utf-8",
                s.timeout = 120,
                i.nc && s.setAttribute("nonce", i.nc),
                s.src = function(e) {
                    return i.p + "" + ({
                        0: "aanwezigheid",
                        1: "activiteiten",
                        2: "agenda",
                        4: "berichten",
                        5: "bronnen",
                        6: "cijfers",
                        7: "examen",
                        8: "leermiddelen",
                        9: "logboeken",
                        10: "modgister",
                        11: "opdrachten",
                        12: "ouderavond",
                        13: "pdf-export",
                        14: "portfolio-beoordeelde-production",
                        15: "portfolio-documenten",
                        16: "portfolio-profiel",
                        18: "profiel",
                        19: "studiewijzer",
                        21: "vakken-pakket-keuze",
                        22: "vandaag",
                        23: "vendors~magister"
                    }[e] || e) + "" + {
                        0: "",
                        1: "",
                        2: "",
                        4: "",
                        5: "",
                        6: "",
                        7: "",
                        8: "",
                        9: "",
                        10: "",
                        11: "",
                        12: "",
                        13: "",
                        14: "",
                        15: "",
                        16: "",
                        18: "",
                        19: "",
                        21: "",
                        22: "",
                        23: ""
                    }[e] + ".js"
                }(e),
                a = function(t) {
                    s.onerror = s.onload = null,
                    clearTimeout(u);
                    var n = r[e];
                    if (0 !== n) {
                        if (n) {
                            var i = t && ("load" === t.type ? "missing" : t.type)
                              , o = t && t.target && t.target.src
                              , a = new Error("Loading chunk " + e + " failed.\n(" + i + ": " + o + ")");
                            a.type = i,
                            a.request = o,
                            n[1](a)
                        }
                        r[e] = void 0
                    }
                }
                ;
                var u = setTimeout(function() {
                    a({
                        type: "timeout",
                        target: s
                    })
                }, 12e4);
                s.onerror = s.onload = a,
                document.head.appendChild(s)
            }
        return Promise.all(t)
    }
    ,
    i.m = e,
    i.c = n,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                i.d(n, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return n
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "",
    i.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var o = window.webpackJsonp = window.webpackJsonp || []
      , a = o.push.bind(o);
    o.push = t,
    o = o.slice();
    for (var s = 0; s < o.length; s++)
        t(o[s]);
    var u = a;
    i(i.s = 42)
}([function(e, t, n) {
    "use strict";
    var r = n(16);
    function i(e) {
        var t = e.toString().replace("0000Z", "Z")
          , n = new Date(t);
        return new Date(n.getFullYear(),n.getMonth(),n.getDate())
    }
    function o() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }
    function a() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e, t) {
            var n = 16 * Math.random() | 0;
            return ("x" === e ? n : 3 & n | 8).toString(16)
        })
    }
    var s = n(17)
      , u = n(2);
    function c(e) {
        return Object(u.c)(e) || l(e)
    }
    function l(e) {
        return isNaN(e)
    }
    var f = n(23)
      , d = n(24);
    function h(e, t) {
        var n = e.split("?");
        if (n.length > 1)
            for (var r = n[1].split("&"), i = 0; i < r.length; ) {
                var o = r[i].split("=");
                if (o[0] === t)
                    return o[1];
                i++
            }
        return ""
    }
    function p(e) {
        window.open(e, "_blank")
    }
    function g() {
        window.print()
    }
    n.d(t, "o", function() {
        return r.b
    }),
    n.d(t, "e", function() {
        return r.a
    }),
    n.d(t, "c", function() {
        return "YYYY-MM-DDTHH:mm:ss.fffffffZ"
    }),
    n.d(t, "l", function() {
        return i
    }),
    n.d(t, "r", function() {
        return o
    }),
    n.d(t, "f", function() {
        return a
    }),
    n.d(t, "a", function() {
        return s.a
    }),
    n.d(t, "j", function() {
        return s.b
    }),
    n.d(t, "k", function() {
        return s.c
    }),
    n.d(t, "m", function() {
        return s.d
    }),
    n.d(t, "b", function() {
        return 10
    }),
    n.d(t, "v", function() {
        return c
    }),
    n.d(t, "s", function() {
        return l
    }),
    n.d(t, "w", function() {
        return u.c
    }),
    n.d(t, "t", function() {
        return u.b
    }),
    n.d(t, "y", function() {
        return u.d
    }),
    n.d(t, "q", function() {
        return u.a
    }),
    n.d(t, "i", function() {
        return f.a
    }),
    n.d(t, "z", function() {
        return f.b
    }),
    n.d(t, "p", function() {
        return d.d
    }),
    n.d(t, "u", function() {
        return d.e
    }),
    n.d(t, "x", function() {
        return d.f
    }),
    n.d(t, "n", function() {
        return d.c
    }),
    n.d(t, "C", function() {
        return d.g
    }),
    n.d(t, "h", function() {
        return d.b
    }),
    n.d(t, "D", function() {
        return d.h
    }),
    n.d(t, "d", function() {
        return d.a
    }),
    n.d(t, "g", function() {
        return h
    }),
    n.d(t, "A", function() {
        return p
    }),
    n.d(t, "B", function() {
        return g
    })
}
, function(e, t, n) {
    (function(t) {
        n(43),
        e.exports = t,
        e.exports = window.angular
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function r(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            if (!o(t) && t.length > 0) {
                for (var r = !1, i = 0; i < t.length; i++)
                    if (o(t[i]) || null === t[i]) {
                        r = !0;
                        break
                    }
                return r || o(e) || null === e
            }
            return o(e) || null === e
        }
        function i(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            if (!o(t) && t.length > 0) {
                for (var r = !0, i = 0; i < t.length; i++)
                    if (o(t[i]) || null === t[i]) {
                        r = !1;
                        break
                    }
                return r && !(o(e) || null === e)
            }
            return !(o(e) || null === e)
        }
        function o(t) {
            return e.isUndefined(t)
        }
        function a(t) {
            return !r(t) && e.isFunction(t)
        }
        n.d(t, "c", function() {
            return r
        }),
        n.d(t, "b", function() {
            return i
        }),
        n.d(t, "d", function() {
            return o
        }),
        n.d(t, "a", function() {
            return a
        })
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    var r;
    (function() {
        var n = this
          , i = n._
          , o = Array.prototype
          , a = Object.prototype
          , s = Function.prototype
          , u = o.push
          , c = o.slice
          , l = a.toString
          , f = a.hasOwnProperty
          , d = Array.isArray
          , h = Object.keys
          , p = s.bind
          , g = Object.create
          , m = function() {}
          , v = function(e) {
            return e instanceof v ? e : this instanceof v ? void (this._wrapped = e) : new v(e)
        };
        e.exports && (t = e.exports = v),
        t._ = v,
        v.VERSION = "1.8.3";
        var $ = function(e, t, n) {
            if (void 0 === t)
                return e;
            switch (null == n ? 3 : n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                }
                ;
            case 2:
                return function(n, r) {
                    return e.call(t, n, r)
                }
                ;
            case 3:
                return function(n, r, i) {
                    return e.call(t, n, r, i)
                }
                ;
            case 4:
                return function(n, r, i, o) {
                    return e.call(t, n, r, i, o)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
          , y = function(e, t, n) {
            return null == e ? v.identity : v.isFunction(e) ? $(e, t, n) : v.isObject(e) ? v.matcher(e) : v.property(e)
        };
        v.iteratee = function(e, t) {
            return y(e, t, 1 / 0)
        }
        ;
        var b = function(e, t) {
            return function(n) {
                var r = arguments.length;
                if (r < 2 || null == n)
                    return n;
                for (var i = 1; i < r; i++)
                    for (var o = arguments[i], a = e(o), s = a.length, u = 0; u < s; u++) {
                        var c = a[u];
                        t && void 0 !== n[c] || (n[c] = o[c])
                    }
                return n
            }
        }
          , w = function(e) {
            if (!v.isObject(e))
                return {};
            if (g)
                return g(e);
            m.prototype = e;
            var t = new m;
            return m.prototype = null,
            t
        }
          , x = function(e) {
            return function(t) {
                return null == t ? void 0 : t[e]
            }
        }
          , E = Math.pow(2, 53) - 1
          , S = x("length")
          , _ = function(e) {
            var t = S(e);
            return "number" == typeof t && t >= 0 && t <= E
        };
        function k(e) {
            return function(t, n, r, i) {
                n = $(n, i, 4);
                var o = !_(t) && v.keys(t)
                  , a = (o || t).length
                  , s = e > 0 ? 0 : a - 1;
                return arguments.length < 3 && (r = t[o ? o[s] : s],
                s += e),
                function(t, n, r, i, o, a) {
                    for (; o >= 0 && o < a; o += e) {
                        var s = i ? i[o] : o;
                        r = n(r, t[s], s, t)
                    }
                    return r
                }(t, n, r, o, s, a)
            }
        }
        v.each = v.forEach = function(e, t, n) {
            var r, i;
            if (t = $(t, n),
            _(e))
                for (r = 0,
                i = e.length; r < i; r++)
                    t(e[r], r, e);
            else {
                var o = v.keys(e);
                for (r = 0,
                i = o.length; r < i; r++)
                    t(e[o[r]], o[r], e)
            }
            return e
        }
        ,
        v.map = v.collect = function(e, t, n) {
            t = y(t, n);
            for (var r = !_(e) && v.keys(e), i = (r || e).length, o = Array(i), a = 0; a < i; a++) {
                var s = r ? r[a] : a;
                o[a] = t(e[s], s, e)
            }
            return o
        }
        ,
        v.reduce = v.foldl = v.inject = k(1),
        v.reduceRight = v.foldr = k(-1),
        v.find = v.detect = function(e, t, n) {
            var r;
            if (void 0 !== (r = _(e) ? v.findIndex(e, t, n) : v.findKey(e, t, n)) && -1 !== r)
                return e[r]
        }
        ,
        v.filter = v.select = function(e, t, n) {
            var r = [];
            return t = y(t, n),
            v.each(e, function(e, n, i) {
                t(e, n, i) && r.push(e)
            }),
            r
        }
        ,
        v.reject = function(e, t, n) {
            return v.filter(e, v.negate(y(t)), n)
        }
        ,
        v.every = v.all = function(e, t, n) {
            t = y(t, n);
            for (var r = !_(e) && v.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                var a = r ? r[o] : o;
                if (!t(e[a], a, e))
                    return !1
            }
            return !0
        }
        ,
        v.some = v.any = function(e, t, n) {
            t = y(t, n);
            for (var r = !_(e) && v.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                var a = r ? r[o] : o;
                if (t(e[a], a, e))
                    return !0
            }
            return !1
        }
        ,
        v.contains = v.includes = v.include = function(e, t, n, r) {
            return _(e) || (e = v.values(e)),
            ("number" != typeof n || r) && (n = 0),
            v.indexOf(e, t, n) >= 0
        }
        ,
        v.invoke = function(e, t) {
            var n = c.call(arguments, 2)
              , r = v.isFunction(t);
            return v.map(e, function(e) {
                var i = r ? t : e[t];
                return null == i ? i : i.apply(e, n)
            })
        }
        ,
        v.pluck = function(e, t) {
            return v.map(e, v.property(t))
        }
        ,
        v.where = function(e, t) {
            return v.filter(e, v.matcher(t))
        }
        ,
        v.findWhere = function(e, t) {
            return v.find(e, v.matcher(t))
        }
        ,
        v.max = function(e, t, n) {
            var r, i, o = -1 / 0, a = -1 / 0;
            if (null == t && null != e)
                for (var s = 0, u = (e = _(e) ? e : v.values(e)).length; s < u; s++)
                    (r = e[s]) > o && (o = r);
            else
                t = y(t, n),
                v.each(e, function(e, n, r) {
                    ((i = t(e, n, r)) > a || i === -1 / 0 && o === -1 / 0) && (o = e,
                    a = i)
                });
            return o
        }
        ,
        v.min = function(e, t, n) {
            var r, i, o = 1 / 0, a = 1 / 0;
            if (null == t && null != e)
                for (var s = 0, u = (e = _(e) ? e : v.values(e)).length; s < u; s++)
                    (r = e[s]) < o && (o = r);
            else
                t = y(t, n),
                v.each(e, function(e, n, r) {
                    ((i = t(e, n, r)) < a || i === 1 / 0 && o === 1 / 0) && (o = e,
                    a = i)
                });
            return o
        }
        ,
        v.shuffle = function(e) {
            for (var t, n = _(e) ? e : v.values(e), r = n.length, i = Array(r), o = 0; o < r; o++)
                (t = v.random(0, o)) !== o && (i[o] = i[t]),
                i[t] = n[o];
            return i
        }
        ,
        v.sample = function(e, t, n) {
            return null == t || n ? (_(e) || (e = v.values(e)),
            e[v.random(e.length - 1)]) : v.shuffle(e).slice(0, Math.max(0, t))
        }
        ,
        v.sortBy = function(e, t, n) {
            return t = y(t, n),
            v.pluck(v.map(e, function(e, n, r) {
                return {
                    value: e,
                    index: n,
                    criteria: t(e, n, r)
                }
            }).sort(function(e, t) {
                var n = e.criteria
                  , r = t.criteria;
                if (n !== r) {
                    if (n > r || void 0 === n)
                        return 1;
                    if (n < r || void 0 === r)
                        return -1
                }
                return e.index - t.index
            }), "value")
        }
        ;
        var A = function(e) {
            return function(t, n, r) {
                var i = {};
                return n = y(n, r),
                v.each(t, function(r, o) {
                    var a = n(r, o, t);
                    e(i, r, a)
                }),
                i
            }
        };
        v.groupBy = A(function(e, t, n) {
            v.has(e, n) ? e[n].push(t) : e[n] = [t]
        }),
        v.indexBy = A(function(e, t, n) {
            e[n] = t
        }),
        v.countBy = A(function(e, t, n) {
            v.has(e, n) ? e[n]++ : e[n] = 1
        }),
        v.toArray = function(e) {
            return e ? v.isArray(e) ? c.call(e) : _(e) ? v.map(e, v.identity) : v.values(e) : []
        }
        ,
        v.size = function(e) {
            return null == e ? 0 : _(e) ? e.length : v.keys(e).length
        }
        ,
        v.partition = function(e, t, n) {
            t = y(t, n);
            var r = []
              , i = [];
            return v.each(e, function(e, n, o) {
                (t(e, n, o) ? r : i).push(e)
            }),
            [r, i]
        }
        ,
        v.first = v.head = v.take = function(e, t, n) {
            if (null != e)
                return null == t || n ? e[0] : v.initial(e, e.length - t)
        }
        ,
        v.initial = function(e, t, n) {
            return c.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }
        ,
        v.last = function(e, t, n) {
            if (null != e)
                return null == t || n ? e[e.length - 1] : v.rest(e, Math.max(0, e.length - t))
        }
        ,
        v.rest = v.tail = v.drop = function(e, t, n) {
            return c.call(e, null == t || n ? 1 : t)
        }
        ,
        v.compact = function(e) {
            return v.filter(e, v.identity)
        }
        ;
        var T = function(e, t, n, r) {
            for (var i = [], o = 0, a = r || 0, s = S(e); a < s; a++) {
                var u = e[a];
                if (_(u) && (v.isArray(u) || v.isArguments(u))) {
                    t || (u = T(u, t, n));
                    var c = 0
                      , l = u.length;
                    for (i.length += l; c < l; )
                        i[o++] = u[c++]
                } else
                    n || (i[o++] = u)
            }
            return i
        };
        function O(e) {
            return function(t, n, r) {
                n = y(n, r);
                for (var i = S(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e)
                    if (n(t[o], o, t))
                        return o;
                return -1
            }
        }
        function C(e, t, n) {
            return function(r, i, o) {
                var a = 0
                  , s = S(r);
                if ("number" == typeof o)
                    e > 0 ? a = o >= 0 ? o : Math.max(o + s, a) : s = o >= 0 ? Math.min(o + 1, s) : o + s + 1;
                else if (n && o && s)
                    return r[o = n(r, i)] === i ? o : -1;
                if (i != i)
                    return (o = t(c.call(r, a, s), v.isNaN)) >= 0 ? o + a : -1;
                for (o = e > 0 ? a : s - 1; o >= 0 && o < s; o += e)
                    if (r[o] === i)
                        return o;
                return -1
            }
        }
        v.flatten = function(e, t) {
            return T(e, t, !1)
        }
        ,
        v.without = function(e) {
            return v.difference(e, c.call(arguments, 1))
        }
        ,
        v.uniq = v.unique = function(e, t, n, r) {
            v.isBoolean(t) || (r = n,
            n = t,
            t = !1),
            null != n && (n = y(n, r));
            for (var i = [], o = [], a = 0, s = S(e); a < s; a++) {
                var u = e[a]
                  , c = n ? n(u, a, e) : u;
                t ? (a && o === c || i.push(u),
                o = c) : n ? v.contains(o, c) || (o.push(c),
                i.push(u)) : v.contains(i, u) || i.push(u)
            }
            return i
        }
        ,
        v.union = function() {
            return v.uniq(T(arguments, !0, !0))
        }
        ,
        v.intersection = function(e) {
            for (var t = [], n = arguments.length, r = 0, i = S(e); r < i; r++) {
                var o = e[r];
                if (!v.contains(t, o)) {
                    for (var a = 1; a < n && v.contains(arguments[a], o); a++)
                        ;
                    a === n && t.push(o)
                }
            }
            return t
        }
        ,
        v.difference = function(e) {
            var t = T(arguments, !0, !0, 1);
            return v.filter(e, function(e) {
                return !v.contains(t, e)
            })
        }
        ,
        v.zip = function() {
            return v.unzip(arguments)
        }
        ,
        v.unzip = function(e) {
            for (var t = e && v.max(e, S).length || 0, n = Array(t), r = 0; r < t; r++)
                n[r] = v.pluck(e, r);
            return n
        }
        ,
        v.object = function(e, t) {
            for (var n = {}, r = 0, i = S(e); r < i; r++)
                t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
            return n
        }
        ,
        v.findIndex = O(1),
        v.findLastIndex = O(-1),
        v.sortedIndex = function(e, t, n, r) {
            for (var i = (n = y(n, r, 1))(t), o = 0, a = S(e); o < a; ) {
                var s = Math.floor((o + a) / 2);
                n(e[s]) < i ? o = s + 1 : a = s
            }
            return o
        }
        ,
        v.indexOf = C(1, v.findIndex, v.sortedIndex),
        v.lastIndexOf = C(-1, v.findLastIndex),
        v.range = function(e, t, n) {
            null == t && (t = e || 0,
            e = 0),
            n = n || 1;
            for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++,
            e += n)
                i[o] = e;
            return i
        }
        ;
        var N = function(e, t, n, r, i) {
            if (!(r instanceof t))
                return e.apply(n, i);
            var o = w(e.prototype)
              , a = e.apply(o, i);
            return v.isObject(a) ? a : o
        };
        v.bind = function(e, t) {
            if (p && e.bind === p)
                return p.apply(e, c.call(arguments, 1));
            if (!v.isFunction(e))
                throw new TypeError("Bind must be called on a function");
            var n = c.call(arguments, 2)
              , r = function() {
                return N(e, r, t, this, n.concat(c.call(arguments)))
            };
            return r
        }
        ,
        v.partial = function(e) {
            var t = c.call(arguments, 1)
              , n = function() {
                for (var r = 0, i = t.length, o = Array(i), a = 0; a < i; a++)
                    o[a] = t[a] === v ? arguments[r++] : t[a];
                for (; r < arguments.length; )
                    o.push(arguments[r++]);
                return N(e, n, this, this, o)
            };
            return n
        }
        ,
        v.bindAll = function(e) {
            var t, n, r = arguments.length;
            if (r <= 1)
                throw new Error("bindAll must be passed function names");
            for (t = 1; t < r; t++)
                e[n = arguments[t]] = v.bind(e[n], e);
            return e
        }
        ,
        v.memoize = function(e, t) {
            var n = function(r) {
                var i = n.cache
                  , o = "" + (t ? t.apply(this, arguments) : r);
                return v.has(i, o) || (i[o] = e.apply(this, arguments)),
                i[o]
            };
            return n.cache = {},
            n
        }
        ,
        v.delay = function(e, t) {
            var n = c.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }
        ,
        v.defer = v.partial(v.delay, v, 1),
        v.throttle = function(e, t, n) {
            var r, i, o, a = null, s = 0;
            n || (n = {});
            var u = function() {
                s = !1 === n.leading ? 0 : v.now(),
                a = null,
                o = e.apply(r, i),
                a || (r = i = null)
            };
            return function() {
                var c = v.now();
                s || !1 !== n.leading || (s = c);
                var l = t - (c - s);
                return r = this,
                i = arguments,
                l <= 0 || l > t ? (a && (clearTimeout(a),
                a = null),
                s = c,
                o = e.apply(r, i),
                a || (r = i = null)) : a || !1 === n.trailing || (a = setTimeout(u, l)),
                o
            }
        }
        ,
        v.debounce = function(e, t, n) {
            var r, i, o, a, s, u = function() {
                var c = v.now() - a;
                c < t && c >= 0 ? r = setTimeout(u, t - c) : (r = null,
                n || (s = e.apply(o, i),
                r || (o = i = null)))
            };
            return function() {
                o = this,
                i = arguments,
                a = v.now();
                var c = n && !r;
                return r || (r = setTimeout(u, t)),
                c && (s = e.apply(o, i),
                o = i = null),
                s
            }
        }
        ,
        v.wrap = function(e, t) {
            return v.partial(t, e)
        }
        ,
        v.negate = function(e) {
            return function() {
                return !e.apply(this, arguments)
            }
        }
        ,
        v.compose = function() {
            var e = arguments
              , t = e.length - 1;
            return function() {
                for (var n = t, r = e[t].apply(this, arguments); n--; )
                    r = e[n].call(this, r);
                return r
            }
        }
        ,
        v.after = function(e, t) {
            return function() {
                if (--e < 1)
                    return t.apply(this, arguments)
            }
        }
        ,
        v.before = function(e, t) {
            var n;
            return function() {
                return --e > 0 && (n = t.apply(this, arguments)),
                e <= 1 && (t = null),
                n
            }
        }
        ,
        v.once = v.partial(v.before, 2);
        var D = !{
            toString: null
        }.propertyIsEnumerable("toString")
          , M = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        function I(e, t) {
            var n = M.length
              , r = e.constructor
              , i = v.isFunction(r) && r.prototype || a
              , o = "constructor";
            for (v.has(e, o) && !v.contains(t, o) && t.push(o); n--; )
                (o = M[n])in e && e[o] !== i[o] && !v.contains(t, o) && t.push(o)
        }
        v.keys = function(e) {
            if (!v.isObject(e))
                return [];
            if (h)
                return h(e);
            var t = [];
            for (var n in e)
                v.has(e, n) && t.push(n);
            return D && I(e, t),
            t
        }
        ,
        v.allKeys = function(e) {
            if (!v.isObject(e))
                return [];
            var t = [];
            for (var n in e)
                t.push(n);
            return D && I(e, t),
            t
        }
        ,
        v.values = function(e) {
            for (var t = v.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++)
                r[i] = e[t[i]];
            return r
        }
        ,
        v.mapObject = function(e, t, n) {
            t = y(t, n);
            for (var r, i = v.keys(e), o = i.length, a = {}, s = 0; s < o; s++)
                a[r = i[s]] = t(e[r], r, e);
            return a
        }
        ,
        v.pairs = function(e) {
            for (var t = v.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++)
                r[i] = [t[i], e[t[i]]];
            return r
        }
        ,
        v.invert = function(e) {
            for (var t = {}, n = v.keys(e), r = 0, i = n.length; r < i; r++)
                t[e[n[r]]] = n[r];
            return t
        }
        ,
        v.functions = v.methods = function(e) {
            var t = [];
            for (var n in e)
                v.isFunction(e[n]) && t.push(n);
            return t.sort()
        }
        ,
        v.extend = b(v.allKeys),
        v.extendOwn = v.assign = b(v.keys),
        v.findKey = function(e, t, n) {
            t = y(t, n);
            for (var r, i = v.keys(e), o = 0, a = i.length; o < a; o++)
                if (t(e[r = i[o]], r, e))
                    return r
        }
        ,
        v.pick = function(e, t, n) {
            var r, i, o = {}, a = e;
            if (null == a)
                return o;
            v.isFunction(t) ? (i = v.allKeys(a),
            r = $(t, n)) : (i = T(arguments, !1, !1, 1),
            r = function(e, t, n) {
                return t in n
            }
            ,
            a = Object(a));
            for (var s = 0, u = i.length; s < u; s++) {
                var c = i[s]
                  , l = a[c];
                r(l, c, a) && (o[c] = l)
            }
            return o
        }
        ,
        v.omit = function(e, t, n) {
            if (v.isFunction(t))
                t = v.negate(t);
            else {
                var r = v.map(T(arguments, !1, !1, 1), String);
                t = function(e, t) {
                    return !v.contains(r, t)
                }
            }
            return v.pick(e, t, n)
        }
        ,
        v.defaults = b(v.allKeys, !0),
        v.create = function(e, t) {
            var n = w(e);
            return t && v.extendOwn(n, t),
            n
        }
        ,
        v.clone = function(e) {
            return v.isObject(e) ? v.isArray(e) ? e.slice() : v.extend({}, e) : e
        }
        ,
        v.tap = function(e, t) {
            return t(e),
            e
        }
        ,
        v.isMatch = function(e, t) {
            var n = v.keys(t)
              , r = n.length;
            if (null == e)
                return !r;
            for (var i = Object(e), o = 0; o < r; o++) {
                var a = n[o];
                if (t[a] !== i[a] || !(a in i))
                    return !1
            }
            return !0
        }
        ;
        var j = function(e, t, n, r) {
            if (e === t)
                return 0 !== e || 1 / e == 1 / t;
            if (null == e || null == t)
                return e === t;
            e instanceof v && (e = e._wrapped),
            t instanceof v && (t = t._wrapped);
            var i = l.call(e);
            if (i !== l.call(t))
                return !1;
            switch (i) {
            case "[object RegExp]":
            case "[object String]":
                return "" + e == "" + t;
            case "[object Number]":
                return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t
            }
            var o = "[object Array]" === i;
            if (!o) {
                if ("object" != typeof e || "object" != typeof t)
                    return !1;
                var a = e.constructor
                  , s = t.constructor;
                if (a !== s && !(v.isFunction(a) && a instanceof a && v.isFunction(s) && s instanceof s) && "constructor"in e && "constructor"in t)
                    return !1
            }
            r = r || [];
            for (var u = (n = n || []).length; u--; )
                if (n[u] === e)
                    return r[u] === t;
            if (n.push(e),
            r.push(t),
            o) {
                if ((u = e.length) !== t.length)
                    return !1;
                for (; u--; )
                    if (!j(e[u], t[u], n, r))
                        return !1
            } else {
                var c, f = v.keys(e);
                if (u = f.length,
                v.keys(t).length !== u)
                    return !1;
                for (; u--; )
                    if (c = f[u],
                    !v.has(t, c) || !j(e[c], t[c], n, r))
                        return !1
            }
            return n.pop(),
            r.pop(),
            !0
        };
        v.isEqual = function(e, t) {
            return j(e, t)
        }
        ,
        v.isEmpty = function(e) {
            return null == e || (_(e) && (v.isArray(e) || v.isString(e) || v.isArguments(e)) ? 0 === e.length : 0 === v.keys(e).length)
        }
        ,
        v.isElement = function(e) {
            return !(!e || 1 !== e.nodeType)
        }
        ,
        v.isArray = d || function(e) {
            return "[object Array]" === l.call(e)
        }
        ,
        v.isObject = function(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }
        ,
        v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
            v["is" + e] = function(t) {
                return l.call(t) === "[object " + e + "]"
            }
        }),
        v.isArguments(arguments) || (v.isArguments = function(e) {
            return v.has(e, "callee")
        }
        ),
        "object" != typeof Int8Array && (v.isFunction = function(e) {
            return "function" == typeof e || !1
        }
        ),
        v.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }
        ,
        v.isNaN = function(e) {
            return v.isNumber(e) && e !== +e
        }
        ,
        v.isBoolean = function(e) {
            return !0 === e || !1 === e || "[object Boolean]" === l.call(e)
        }
        ,
        v.isNull = function(e) {
            return null === e
        }
        ,
        v.isUndefined = function(e) {
            return void 0 === e
        }
        ,
        v.has = function(e, t) {
            return null != e && f.call(e, t)
        }
        ,
        v.noConflict = function() {
            return n._ = i,
            this
        }
        ,
        v.identity = function(e) {
            return e
        }
        ,
        v.constant = function(e) {
            return function() {
                return e
            }
        }
        ,
        v.noop = function() {}
        ,
        v.property = x,
        v.propertyOf = function(e) {
            return null == e ? function() {}
            : function(t) {
                return e[t]
            }
        }
        ,
        v.matcher = v.matches = function(e) {
            return e = v.extendOwn({}, e),
            function(t) {
                return v.isMatch(t, e)
            }
        }
        ,
        v.times = function(e, t, n) {
            var r = Array(Math.max(0, e));
            t = $(t, n, 1);
            for (var i = 0; i < e; i++)
                r[i] = t(i);
            return r
        }
        ,
        v.random = function(e, t) {
            return null == t && (t = e,
            e = 0),
            e + Math.floor(Math.random() * (t - e + 1))
        }
        ,
        v.now = Date.now || function() {
            return (new Date).getTime()
        }
        ;
        var R = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }
          , P = v.invert(R)
          , L = function(e) {
            var t = function(t) {
                return e[t]
            }
              , n = "(?:" + v.keys(e).join("|") + ")"
              , r = RegExp(n)
              , i = RegExp(n, "g");
            return function(e) {
                return e = null == e ? "" : "" + e,
                r.test(e) ? e.replace(i, t) : e
            }
        };
        v.escape = L(R),
        v.unescape = L(P),
        v.result = function(e, t, n) {
            var r = null == e ? void 0 : e[t];
            return void 0 === r && (r = n),
            v.isFunction(r) ? r.call(e) : r
        }
        ;
        var F = 0;
        v.uniqueId = function(e) {
            var t = ++F + "";
            return e ? e + t : t
        }
        ,
        v.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var H = /(.)^/
          , U = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
          , V = /\\|'|\r|\n|\u2028|\u2029/g
          , q = function(e) {
            return "\\" + U[e]
        };
        v.template = function(e, t, n) {
            !t && n && (t = n),
            t = v.defaults({}, t, v.templateSettings);
            var r = RegExp([(t.escape || H).source, (t.interpolate || H).source, (t.evaluate || H).source].join("|") + "|$", "g")
              , i = 0
              , o = "__p+='";
            e.replace(r, function(t, n, r, a, s) {
                return o += e.slice(i, s).replace(V, q),
                i = s + t.length,
                n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"),
                t
            }),
            o += "';\n",
            t.variable || (o = "with(obj||{}){\n" + o + "}\n"),
            o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                var a = new Function(t.variable || "obj","_",o)
            } catch (e) {
                throw e.source = o,
                e
            }
            var s = function(e) {
                return a.call(this, e, v)
            }
              , u = t.variable || "obj";
            return s.source = "function(" + u + "){\n" + o + "}",
            s
        }
        ,
        v.chain = function(e) {
            var t = v(e);
            return t._chain = !0,
            t
        }
        ;
        var B = function(e, t) {
            return e._chain ? v(t).chain() : t
        };
        v.mixin = function(e) {
            v.each(v.functions(e), function(t) {
                var n = v[t] = e[t];
                v.prototype[t] = function() {
                    var e = [this._wrapped];
                    return u.apply(e, arguments),
                    B(this, n.apply(v, e))
                }
            })
        }
        ,
        v.mixin(v),
        v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = o[e];
            v.prototype[e] = function() {
                var n = this._wrapped;
                return t.apply(n, arguments),
                "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0],
                B(this, n)
            }
        }),
        v.each(["concat", "join", "slice"], function(e) {
            var t = o[e];
            v.prototype[e] = function() {
                return B(this, t.apply(this._wrapped, arguments))
            }
        }),
        v.prototype.value = function() {
            return this._wrapped
        }
        ,
        v.prototype.valueOf = v.prototype.toJSON = v.prototype.value,
        v.prototype.toString = function() {
            return "" + this._wrapped
        }
        ,
        void 0 === (r = function() {
            return v
        }
        .apply(t, [])) || (e.exports = r)
    }
    ).call(this)
}
, function(e, t, n) {
    "use strict";
    var r;
    n.d(t, "a", function() {
        return r
    }),
    function(e) {
        e[e.Default = 0] = "Default",
        e[e.Leerling = 1] = "Leerling",
        e[e.Ouder = 2] = "Ouder",
        e[e.Docent = 3] = "Docent",
        e[e.Mentor = 4] = "Mentor",
        e[e["Studiecoördinator"] = 5] = "Studiecoördinator",
        e[e.Decaan = 6] = "Decaan",
        e[e.Klasdocent = 7] = "Klasdocent"
    }(r || (r = {}))
}
, function(e, t, n) {
    "use strict";
    var r;
    n.d(t, "a", function() {
        return r
    }),
    function(e) {
        e[e.NoPrivilege = 0] = "NoPrivilege",
        e[e.Aftekenen = 1] = "Aftekenen",
        e[e.EloOpdracht = 2] = "EloOpdracht",
        e[e.Berichten = 3] = "Berichten",
        e[e.DigitaalLesmateriaal = 4] = "DigitaalLesmateriaal",
        e[e.Contactpersonen = 5] = "Contactpersonen",
        e[e.Studiewijzers = 6] = "Studiewijzers",
        e[e.Projecten = 7] = "Projecten",
        e[e.Roosterwijzigingen = 8] = "Roosterwijzigingen",
        e[e.Kinderen = 9] = "Kinderen",
        e[e.Cijfers = 10] = "Cijfers",
        e[e.Instellingen = 11] = "Instellingen",
        e[e.Afspraken = 12] = "Afspraken",
        e[e.Bronnen = 13] = "Bronnen",
        e[e.Absenties = 14] = "Absenties",
        e[e.Profiel = 15] = "Profiel",
        e[e.Activiteiten = 16] = "Activiteiten",
        e[e.Portfolio = 17] = "Portfolio",
        e[e.ProfielEmail = 18] = "ProfielEmail",
        e[e.ProfielMobiel = 19] = "ProfielMobiel",
        e[e.WachtwoordWijzigen = 20] = "WachtwoordWijzigen",
        e[e.Oauth = 21] = "Oauth",
        e[e.Vakkenpakketkeuze = 22] = "Vakkenpakketkeuze",
        e[e.Ouderavond = 23] = "Ouderavond",
        e[e.Aanmeldingen = 24] = "Aanmeldingen",
        e[e.Logboeken = 25] = "Logboeken",
        e[e.ExamenAfnamemomenten = 26] = "ExamenAfnamemomenten",
        e[e.EigenContactGegevens = 27] = "EigenContactGegevens",
        e[e.Bestellen = 28] = "Bestellen"
    }(r || (r = {}))
}
, function(e, t, n) {
    (function(t) {
        e.exports = {
            /*!
   * Stringify a number.
   */
            stringifyNumber: function(e) {
                return e && t.isNumber(e) ? e.toString() : e
            },
            /*!
   * Return a hash of the keys in the given collection.
   */
            keySet: function(e) {
                var t, n = {};
                for (t in e)
                    e.hasOwnProperty(t) && (n[t] = t);
                return n
            },
            /*!
   * Return an array of the keys in the given collection
   */
            keys: function(e) {
                var t, n = [];
                for (t in e)
                    e.hasOwnProperty(t) && n.push(t);
                return n
            }
        }
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "e", function() {
        return c
    }),
    n.d(t, "n", function() {
        return r
    }),
    n.d(t, "c", function() {
        return i
    }),
    n.d(t, "i", function() {
        return o
    }),
    n.d(t, "g", function() {
        return s
    }),
    n.d(t, "h", function() {
        return u
    }),
    n.d(t, "m", function() {
        return l
    }),
    n.d(t, "a", function() {
        return f
    }),
    n.d(t, "l", function() {
        return d
    }),
    n.d(t, "f", function() {
        return h
    }),
    n.d(t, "j", function() {
        return p
    }),
    n.d(t, "b", function() {
        return g
    }),
    n.d(t, "k", function() {
        return m
    }),
    n.d(t, "d", function() {
        return v
    });
    var r, i, o, a, s, u, c = 4e3;
    !function(e) {
        e[e.Empty = 0] = "Empty"
    }(r || (r = {})),
    function(e) {
        e[e.Checkbox = 0] = "Checkbox",
        e[e.RadioButton = 1] = "RadioButton",
        e[e.Dropdown = 2] = "Dropdown",
        e[e.RadioButtonCheckbox = 3] = "RadioButtonCheckbox"
    }(i || (i = {})),
    function(e) {
        e[e.INFORMATION = 0] = "INFORMATION",
        e[e.WARNING = 1] = "WARNING",
        e[e.ERROR = 2] = "ERROR"
    }(o || (o = {})),
    function(e) {
        e[e.Success = 0] = "Success",
        e[e.Error = 1] = "Error"
    }(a || (a = {})),
    function(e) {
        e[e.POST = 0] = "POST",
        e[e.PUT = 1] = "PUT",
        e[e.GET = 2] = "GET",
        e[e.DELETE = 3] = "DELETE"
    }(s || (s = {})),
    function(e) {
        e[e.SHOW = 0] = "SHOW",
        e[e.HIGHLIGHT = 1] = "HIGHLIGHT",
        e[e.HIDDEN = 2] = "HIDDEN"
    }(u || (u = {}));
    var l = "/Content/app/scripts/magister/views/UI/grid/templates/cell/grid-cell-text-template.html"
      , f = "/Content/app/scripts/magister/views/UI/grid/templates/cell/grid-cell-checkbox-template.html"
      , d = "/Content/app/scripts/magister/views/UI/grid/templates/cell/grid-cell-rowcheckbox-template.html"
      , h = "/Content/app/scripts/magister/views/UI/grid/templates/cell/grid-cell-dropdown-template.html"
      , p = "/Content/app/scripts/magister/views/UI/grid/templates/cell/grid-cell-radiobutton-template.html"
      , g = "/Content/app/scripts/magister/views/UI/grid/templates/header/grid-header-checkbox-template.html"
      , m = "/Content/app/scripts/magister/views/UI/grid/templates/cell/grid-cell-radiobutton-checkbox-layout-template.html"
      , v = "/Content/app/scripts/magister/views/UI/grid/templates/row/grid-row-template.html"
}
, function(e, t, n) {
    "use strict";
    var r;
    n.d(t, "a", function() {
        return r
    }),
    function(e) {
        e[e.Create = 0] = "Create",
        e[e.Read = 1] = "Read",
        e[e.Update = 2] = "Update",
        e[e.Delete = 3] = "Delete"
    }(r || (r = {}))
}
, function(e, t, n) {
    "use strict";
    (function(e, r) {
        n.d(t, "a", function() {
            return a
        });
        var i = n(0)
          , o = n(4)
          , a = function() {
            function t(t, n) {
                this.id = t.Id,
                this.firstName = Object(i.D)(t.Roepnaam),
                this.prefixes = Object(i.D)(t.Tussenvoegsel),
                this.surname = Object(i.D)(t.Achternaam),
                this.officialFirstNames = Object(i.D)(t.OfficieleVoornamen),
                this.initials = Object(i.D)(t.Voorletters),
                this.officialPrefixes = Object(i.D)(t.OfficieleTussenvoegsels),
                this.officialSurname = Object(i.D)(t.OfficieleAchternaam),
                t.Geboortedatum && (this.birthday = e(t.Geboortedatum)),
                this.birthName = Object(i.D)(t.GeboorteAchternaam),
                this.birthNamePrefixes = Object(i.D)(t.GeboortenaamTussenvoegsel),
                this.useBirthName = t.GebruikGeboortenaam,
                this.fullName = this.getFullName(n),
                this.imageUrl = "/api/leerlingen/" + t.Id + "/foto"
            }
            return t.prototype.getFullName = function(e) {
                var t;
                return t = r.all(e, function(e) {
                    return e === o.a.Leerling
                }) ? Object(i.n)(this.firstName) ? Object(i.n)(this.officialFirstNames) ? this.initials : this.officialFirstNames : this.firstName : Object(i.n)(this.initials) ? this.officialFirstNames : this.initials,
                Object(i.h)("{0} {1} {2}", t, this.prefixes, this.surname).replace("  ", " ")
            }
            ,
            t
        }()
    }
    ).call(this, n(14), n(3))
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    var r;
    n.d(t, "a", function() {
        return r
    }),
    function(e) {
        e[e.One = 0] = "One",
        e[e.All = 1] = "All"
    }(r || (r = {}))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(76);
    t.OidcModule = r.OidcModule;
    var i = n(20);
    t.OidcService = i.OidcService,
    t.ERROR_USER_NOT_FOUND = i.ERROR_USER_NOT_FOUND;
    var o = n(21);
    t.UserManagerProvider = o.UserManagerProvider
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", function() {
            return o
        });
        var r = n(9)
          , i = n(4)
          , o = function() {
            function t(t, n) {
                var o = this;
                this.current = t,
                this.persons = [],
                e.forEach(n, function(e) {
                    o.persons.push(new r.a(e,[i.a.Leerling]))
                })
            }
            return t.prototype.getById = function(t) {
                return e.find(this.persons, function(e) {
                    return e.id === t
                })
            }
            ,
            t
        }()
    }
    ).call(this, n(3))
}
, function(e, t, n) {
    (function(t) {
        e.exports = t.moment = n(78)
    }
    ).call(this, n(10))
}
, function(e, t, n) {
    (function(t) {
        e.exports = t.$ = n(44)
    }
    ).call(this, n(10))
}
, function(e, t, n) {
    "use strict";
    (function(e, r) {
        n.d(t, "b", function() {
            return o
        }),
        n.d(t, "a", function() {
            return a
        });
        var i = n(2);
        function o(t) {
            return e.isArray(t) && 0 === t.length
        }
        function a(t, n) {
            var o = r.find(t, function(t) {
                return e.equals(n, t)
            });
            return !Object(i.c)(o)
        }
    }
    ).call(this, n(1), n(3))
}
, function(e, t, n) {
    "use strict";
    (function(e, r) {
        n.d(t, "a", function() {
            return i
        }),
        n.d(t, "b", function() {
            return a
        }),
        n.d(t, "c", function() {
            return s
        }),
        n.d(t, "d", function() {
            return u
        });
        var i, o = n(2);
        function a(e, t) {
            return s(e, i[t])
        }
        function s(t, n) {
            if (Object(o.c)(t))
                return null;
            var i = t[n];
            if (i)
                return i.href;
            var a = e.find(t, function(e) {
                return e.Rel === n || e.Rel === r.lowercase(n)
            });
            return Object(o.c)(a) ? (a = e.find(t, function(e) {
                return e.rel === n
            }),
            Object(o.c)(a) ? null : a.href) : Object(o.c)(a) ? null : a.Href
        }
        function u(e, t) {
            return s(e, t)
        }
        !function(e) {
            e[e.Self = 0] = "Self",
            e[e.self = 1] = "self",
            e[e.Next = 2] = "Next",
            e[e.Prev = 3] = "Prev",
            e[e.Contents = 4] = "Contents",
            e[e.ThumbnailSmall = 5] = "ThumbnailSmall",
            e[e.ThumbnailLarge = 6] = "ThumbnailLarge",
            e[e.Foto = 7] = "Foto",
            e[e.Children = 8] = "Children",
            e[e.children = 9] = "children",
            e[e.Parent = 10] = "Parent",
            e[e.Upload = 11] = "Upload",
            e[e.download = 12] = "download",
            e[e.redirect = 13] = "redirect",
            e[e.toLocal = 14] = "toLocal"
        }(i || (i = {}))
    }
    ).call(this, n(3), n(1))
}
, function(e, t, n) {
    (function(t) {
        function n(e, t, n) {
            for (var r = e[n], i = t(r); n > 0; ) {
                var o = Math.floor((n + 1) / 2) - 1
                  , a = e[o];
                if (i >= t(a))
                    break;
                e[o] = r,
                e[n] = a,
                n = o
            }
        }
        function r(e, t, n) {
            for (var r = e.length, i = e[n], o = t(i); ; ) {
                var a = 2 * (n + 1)
                  , s = a - 1
                  , u = null;
                if (s < r)
                    t(e[s]) < o && (u = s);
                if (a < r)
                    t(e[a]) < (null === u ? o : t(e[s])) && (u = a);
                if (null === u)
                    break;
                e[n] = e[u],
                e[u] = i,
                n = u
            }
        }
        function i(e) {
            if (e && !t.isFunction(e))
                throw new Error("DSBinaryHeap(weightFunc): weightFunc: must be a function!");
            e = e || function(e) {
                return e
            }
            ,
            this.weightFunc = e,
            this.heap = []
        }
        i.prototype.push = function(e) {
            this.heap.push(e),
            n(this.heap, this.weightFunc, this.heap.length - 1)
        }
        ,
        i.prototype.peek = function() {
            return this.heap[0]
        }
        ,
        i.prototype.pop = function() {
            var e = this.heap[0]
              , t = this.heap.pop();
            return this.heap.length > 0 && (this.heap[0] = t,
            r(this.heap, this.weightFunc, 0)),
            e
        }
        ,
        i.prototype.remove = function(e) {
            for (var i = this.heap.length, o = 0; o < i; o++)
                if (t.equals(this.heap[o], e)) {
                    var a = this.heap[o]
                      , s = this.heap.pop();
                    return o !== i - 1 && (this.heap[o] = s,
                    n(this.heap, this.weightFunc, o),
                    r(this.heap, this.weightFunc, o)),
                    a
                }
            return null
        }
        ,
        i.prototype.removeAll = function() {
            this.heap = []
        }
        ,
        i.prototype.size = function() {
            return this.heap.length
        }
        ,
        e.exports = {
            DSBinaryHeapProvider: function() {
                this.$get = function() {
                    return i
                }
            },
            DSBinaryHeap: i
        }
    }
    ).call(this, n(1))
}
, function(e, t) {
    var n = {
        capacity: Number.MAX_VALUE,
        maxAge: Number.MAX_VALUE,
        deleteOnExpire: "none",
        onExpire: null,
        cacheFlushInterval: null,
        recycleFreq: 1e3,
        storageMode: "memory",
        storageImpl: null,
        disabled: !1,
        storagePrefix: "angular-cache.caches."
    };
    function r() {}
    for (var i in n)
        r.prototype["$$" + i] = n[i];
    e.exports = {
        Config: r,
        defaults: n
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ERROR_USER_NOT_FOUND = "User not found by Usermanager",
    t.SILENT_LOGIN_MAX_INTERVAL_SEC = 30,
    t.SILENT_LOGIN_MAX_COUNT = 5;
    var r = function() {
        function e(e, t, n, r, i) {
            var o = this;
            this.$q = e,
            this.$injector = t,
            this.userManager = n,
            this.sessionHandlerServices = i,
            this.querySessionStatus = {
                count: 0,
                last: 0
            },
            r.handleOidcEvents && (this.userManager.events.addUserLoaded(function(e) {
                return o.onUserLoaded(e)
                
            }),
            this.userManager.events.addAccessTokenExpired(function() {
                return o.onAccessTokenExpired()
            }),
            this.userManager.events.addAccessTokenExpiring(function() {
                return o.onAccessTokenExpiring()
            }),
            this.userManager.events.addUserSignedOut(function() {
                return o.onUserSignedOut()
            })),
            this.userManager.addQuerySessionStatusCounter(function() {
                o.checkQuerySessionLoop()
            })
        }
        return e.prototype.getSettings = function() {
            return this.userManager.settings
        }
        ,
        e.prototype.checkQuerySessionLoop = function() {
            var e = (new Date).getTime() / 1e3;
            this.querySessionStatus.last + t.SILENT_LOGIN_MAX_INTERVAL_SEC > e ? this.querySessionStatus.count++ : this.querySessionStatus.count = 1,
            this.querySessionStatus.last = e,
            this.querySessionStatus.count > t.SILENT_LOGIN_MAX_COUNT && this.onQuerySessionLoop()
        }
        ,
        e.prototype.getUser = function() {
            return this.$q.when(this.userManager.getUser()).then(function(e) {
                if (!e)
                    throw new Error(t.ERROR_USER_NOT_FOUND);
                return e
            })
        }
        ,
        e.prototype.getAccessToken = function() {
            var e = this;
            return this.accessToken ? this.$q.resolve(this.accessToken) : this.getUser().then(function(t) {
                return e.accessToken = t.access_token,
                t.access_token
            })
        }
        ,
        e.prototype.getAccessTokenSync = function() {
            return this.accessToken
        }
        ,
        e.prototype.signOut = function() {
            var e = this;
            return this.cleanUpBeforeSignout().then(function() {
                return e.userManager.signoutRedirect()
            })
        }
        ,
        e.prototype.signIn = function() {
            return this.userManager.signinRedirect()
        }
        ,
        e.prototype.reauthenticate = function() {
            var e = this;
            return this.getUser().then(function(t) {
                return e.userManager.signinRedirect({
                    login_hint: t.profile["urn:magister:claims:iam:username"],
                    prompt: "login"
                })
            })
        }
        ,
        e.prototype.onQuerySessionLoop = function() {
            var e = this;
            this.sessionHandlerServices.map(function(t) {
                return e.$injector.get(t)
            }).forEach(function(e) {
                e.onQuerySessionLoop && e.onQuerySessionLoop()
            })
        }
        ,
        e.prototype.onUserLoaded = function(e) {
            var t = this;
            this.sessionHandlerServices.map(function(e) {
                return t.$injector.get(e)
            }).forEach(function(t) {
                t.onRefreshed(e)
            }),
            this.accessToken = e.access_token
        }
        ,
        e.prototype.onAccessTokenExpired = function() {
            this.userManager.signinRedirect()
        }
        ,
        e.prototype.onAccessTokenExpiring = function() {
            this.userManager.signinSilent()
        }
        ,
        e.prototype.cleanUpBeforeSignout = function() {
            var e = this;
            if (this.sessionHandlerServices.length > 0) {
                var t = this.sessionHandlerServices.map(function(t) {
                    return e.$injector.get(t)
                });
                return this.$q.all(t.map(function(e) {
                    return e.onCleanUp()
                })).then(function() {})
            }
            return this.$q.resolve()
        }
        ,
        e.prototype.onUserSignedOut = function() {
            var e = this;
            this.cleanUpBeforeSignout().then(function() {
                return e.userManager.removeUser()
            }).then(function() {
                return e.userManager.signinRedirect()
            })
        }
        ,
        e
    }();
    t.OidcService = r;
    var i = function() {
        function e() {
            this.sessionHandlers = [],
            this.$get.$inject = ["$q", "$injector", "userManager", "oidcConfig"]
        }
        return e.prototype.pushSessionHandler = function(e) {
            this.sessionHandlers.push(e)
        }
        ,
        e.prototype.$get = function(e, t, n, i) {
            return this.oidcServiceInstance || (this.oidcServiceInstance = new r(e,t,n,i,this.sessionHandlers)),
            this.oidcServiceInstance
        }
        ,
        e
    }();
    t.OidcServiceProvider = i
}
, function(e, t, n) {
    "use strict";
    var r, i = this && this.__extends || (r = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(e, t) {
        e.__proto__ = t
    }
    || function(e, t) {
        for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n])
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    );
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e() {
            this.oidcConfig = getOidcConfig()
        }
        return e.prototype.disableMonitorSession = function() {
            this.oidcConfig.monitorSession = !1
        }
        ,
        e.prototype.$get = function() {
            var e = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.querySessionStatusCounterFn = [],
                    t
                }
                return i(t, e),
                t.prototype.addQuerySessionStatusCounter = function(e) {
                    this.querySessionStatusCounterFn.push(e)
                }
                ,
                t.prototype.querySessionStatus = function(t) {
                    return this.querySessionStatusCounterFn.forEach(function(e) {
                        e()
                    }),
                    e.prototype.querySessionStatus.call(this, t)
                }
                ,
                t
            }(Oidc.UserManager);
            return this.userManager || (this.userManager = new e(this.oidcConfig)),
            this.userManager
        }
        ,
        e
    }();
    t.UserManagerProvider = o
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = function() {
        return function() {
            this.StudiewijzerStrings = {
                WIDGET_STUDIEWIJZERS_ACTUEEL: "Actueel",
                WIDGET_STUDIEWIJZERS_ARCHIEF: "Archief"
            },
            this.NotificationStrings = {
                TITLE_SAVE_SUCCES: "Opslaan gelukt!",
                TITLE_SAVE_FAILED: "Opslaan mislukt!",
                DESCRIPTION_SUCCESFULL_SAVE_CONFIGURATION: "Het opslaan van de instellingen is gelukt.",
                DESCRIPTION_FAILED_SAVE_CONFIGURATION: "Het opslaan van de instellingen is mislukt.",
                TITLE_LOGIN_FAILURE: "Inloggen mislukt",
                TITLE_ERROR_DEFAULT: "PROBLEEM!",
                TITLE_WARNING_DEFAULT: "Let op!",
                TITLE_PASSWORD_CHANGE: "Wachtwoord wijzigen",
                CONTENT_PASSWORD_CHANGE_SUCCESS: "Het wachtwoord is gewijzigd.",
                CONTENT_BERICHTEN_SETREAD_FAILURE: "Kan bericht niet op gelezen zetten.",
                CONTENT_UNKNOWN_ERROR: "Er is een onbekende fout opgetreden.",
                CONTENT_FORBIDDEN_ERROR: "Onvoldoende rechten voor deze actie.",
                CONNECTION_LOST_ERROR_TITLE: "Geen verbinding",
                CONNECTION_LOST_ERROR_MESSAGE: "Er is op dit moment geen verbinding met Magister mogelijk. Controleer netwerk verbinding.",
                CONTENT_NOT_FOUND: "De informatie kon niet worden opgehaald.",
                TITEL_FILE_UPLOAD_NOT_SUPPORTED: "Uploaden van bestanden niet mogelijk",
                FILE_UPLOAD_NOT_SUPPORTED: "Het uploaden van bestanden wordt door deze browser of -versie niet ondersteund. <br><br>Zorg er voor dat deze browser ge&#252;pdate is of gebruik een andere browser."
            },
            this.AccountStrings = {
                NO_USERNAME_PASSWORD: "Je gebruikersnaam en wachtwoord zijn niet ingevuld.",
                PASSWORD_USERNAME_INCORRECT: "Je gebruikersnaam en/of wachtwoord is niet correct.",
                NO_USERNAME: "Gebruikersnaam is niet ingevuld.",
                NO_PASSWORD: "Wachtwoord is niet ingevuld.",
                USERNAME_TOO_LONG: "De gebruikersnaam en/of het wachtwoord is niet correct.",
                USERNAME_TOO_SHORT: "De gebruikersnaam en/of het wachtwoord is niet correct.",
                PASSWORD_NOT_EQUAL: "De wachtwoorden zijn niet gelijk.",
                PASSWORD_TOO_SHORT: "Het opgegeven wachtwoord moet meer dan {0} karakters bevatten",
                PASSWORD_TOO_LONG: "De gebruikersnaam en/of het wachtwoord is niet correct.",
                FORGOT_PASSWORD_SUCCESS: "Er is een e-mail verstuurd naar het e-mailadres dat gekoppeld is aan het bijbehorende Magister account.",
                ANONIEME_MODE: "Voor het gebruik van Magister is het noodzakelijk dat de anonieme mode van de browser uit staat. Wijzig de instelling van de browser.",
                COOKIES_INSCHAKELEN: "Voor het gebruik van Magister is het noodzakelijk dat cookies zijn toegestaan. Wijzig de instelling van de browser.",
                LOGIN_FAILED_TITLE: "Inloggen mislukt.",
                LOGIN_FAILED: "Ongeldig account of verkeerde combinatie van gebruikersnaam en wachtwoord. Probeer het nog eens of neem contact op met de applicatiebeheerder van de school.",
                TOKEN_REQUIRED: "Het softtoken is niet ingevuld",
                TOKEN_INVALID: "Het softtoken mag alleen uit cijfers bestaan",
                TOKEN_INVALID_LENGTH: "Het softtoken moet zes tekens lang zijn"
            },
            this.OuderAccountStrings = {
                TITLE_NO_ACTIVE_CHILDREN: "Uitgeschreven",
                MESSAGE_NO_ACTIVE_CHILDREN: "Op dit moment is het niet mogelijk om in te loggen omdat uw kind geen actieve aanmelding heeft.",
                TITLE_NO_VISIBLE_CHILDREN: "Kind 18 jaar of ouder",
                MESSAGE_NO_VISIBLE_CHILDREN: "Op dit moment is het niet mogelijk om in te loggen omdat uw kind daar geen toestemming voor heeft gegeven."
            },
            this.InitStrings = {
                NO_PERSON_ID: "",
                NO_PARENT_ID: "",
                NO_SETTINGS_KEY: "",
                NO_DEVICE_TYPE: ""
            },
            this.AgendaStrings = {
                AGENDA_TITLE: "Agenda",
                HUISWERK_TITLE: "Agenda huiswerk",
                PERSOONLIJKE_AFSPRAAK: "Persoonlijke afspraak",
                PLANNING_AFSPRAAK: "Planning afspraak",
                ONBEKEND: "Onbekend",
                AFSPRAAK: "Afspraak",
                AFSPRAAK_VERWIJDEREN: "Afspraak verwijderen",
                AFSPRAAK_DEFINITIEF_VERWIJDEREN: "De afspraak definitief verwijderen?",
                AFSPRAAK_IS_VERWIJDERD: "Afspraak is verwijderd",
                AFRONDEN_HUISWERK_GOED_GEGAAN: "Het afronden van het huiswerk is goed gegaan",
                AFRONDEN_PLANNING_AFSPRAAK_GOED_GEGAAN: "Het afronden van de afspraak is goed gegaan",
                HUISWERK_AFGEROND: "Huiswerk afgerond",
                PLANNING_AFSPRAAK_AFGEROND: "Afspraak afgerond",
                AFRONDEN_ONGEDAAN_MAKEN_GOED_GEGAAN: "Het afronden ongedaan maken is goed gegaan",
                AFRONDEN_ONGEDAAN_MAKEN: "Afronden ongedaan maken",
                AFRONDEN_HUISWERK_MIS_GEGAAN: "Er ging iets mis bij het afronden van het huiswerk",
                AFRONDEN_PLANNING_AFSPRAAK_MIS_GEGAAN: "Er ging iets mis bij het afronden van de afspraak",
                AFRONDEN_ONGEDAAN_MAKEN_MIS_GEGAAN: "Er ging iets mis bij het ongedaan maken"
            },
            this.CijferStrings = {
                GEEN_INFORMATIE: "Geen informatie op dit moment",
                GEEN_CIJFERS: "geen cijfers",
                LAATSTE: "laatste",
                DETAILS: "Details",
                BEREKENING: "Berekening",
                WEERGAVE: "Weergave",
                TELT_NIET_MEE: "Telt niet mee",
                VRIJSTELLING: "Vrijstelling"
            },
            this.LeermiddelenStrings = {
                LEERMIDDELEN_TITLE: "Leermiddelen"
            },
            this.AanwezigheidStrings = {
                TE_LAAT: "te laat",
                UIT_DE_LES: "uit de les",
                BOEK_VERGETEN: "boek vergeten",
                HUISWERK_VERGETEN: "huiswerk vergeten",
                MAAND: "Maand",
                UITGESTUURD: "Uitgestuurd",
                AANTAL_GEBEURTENISSEN: "Aantal gebeurtenissen",
                ABSENT_GEOORLOOFD: "Absent geoorloofd",
                ABSENT_ONGEOORLOOFD: "Absent ongeoorloofd",
                VRIJSTELLING: "Vrijstelling",
                AANTAL_ABSENTIES: "Aantal absenties",
                ABSENTIETYPE: "AbsentieType",
                ABSENT: "absent",
                ZIEK: "ziek",
                AFWEZIGHEID: "Afwezigheid",
                TOETS: "Toets",
                HUISWERK: "Huiswerk",
                OMSCHRIJVING: "Omschrijving",
                ONENGEOORLOOFD: "(On)geoorloofd",
                GEOORLOOFD: "Geoorloofd2",
                ONGEOORLOOFD: "Ongeoorloofd",
                WEERGAVE: "Weergave",
                PERIODEOVERZICHT_LIJSTWEERGAVE: "periodeoverzicht - lijstweergave",
                PERIODEOVERZICHT_TOTALEN: "periodeoverzicht - totalen",
                GEBEURTENISSEN_STAAFDIAGRAM: "gebeurtenissen - staafdiagram",
                ABSENTIES_STAAFDIAGRAM: "absenties - staafdiagram",
                ABSENTIES_TAARTDIAGRAM: "absenties -taartdiagram",
                SELECTEER_EEN_OPTIE: "selecteer een optie..."
            },
            this.SchoolInformatieStrings = {
                SCHOOLINFORMATIE_NOT_RETRIVED: "Schoolinformatie ophalen is niet mogelijk"
            },
            this.VandaagSchermStrings = {
                WIDGET_MEDEDELINGEN_TITEL: "Berichten",
                WIDGET_NOTIFICATIE_TITEL: "Opdrachten",
                WIDGET_NOTIFICATIE_OPDRACHTOPENSTAAND_PLURAL: "openstaande opdrachten",
                WIDGET_NOTIFICATIE_OPDRACHTOPENSTAAND_SINGULAR: "openstaande opdracht",
                WIDGET_NOTIFICATIE_OPDRACHTBEOORDEELD_PLURAL: "beoordeelde opdrachten",
                WIDGET_NOTIFICATIE_OPDRACHTBEOORDEELD_SINGULAR: "beoordeelde opdracht",
                WIDGET_NOTIFICATIE_OPDRACHTOPENWEEK_PLURAL: "openstaande opdrachten met deadline komende week",
                WIDGET_NOTIFICATIE_OPDRACHTOPENWEEK_SINGULAR: "openstaande opdracht met deadline komende week",
                WIDGET_NOTIFICATIE_ACTIVITEITENNOGINTESCHRIJVEN_PLURAL: "activiteiten waarop nog ingeschreven moet of kan worden",
                WIDGET_NOTIFICATIE_ACTIVITEITENNOGINTESCHRIJVEN_SINGULAR: "activiteit waarop nog ingeschreven moet of kan worden",
                WIDGET_NOTIFICATIE_LOGBOEKEN_PLURAL: "ongelezen logboeken",
                WIDGET_NOTIFICATIE_LOGBOEKEN_SINGULAR: "ongelezen logboek"
            },
            this.OuderavondStrings = {
                OUDERAVOND_AFMELDEN_DIALOG: "Wilt u de ouderavond afzeggen?",
                OUDERAVOND_AFMELDEN_DIALOG_TITLE: "Ouderavond afzeggen",
                OUDERAVOND_OMSCHRIJVING_AFGEMELD: "afgezegd",
                OUDERAVOND_OMSCHRIJVING_VOORKEUR_OPGEGEVEN: "voorkeur opgegeven",
                OUDERAVOND_OMSCHRIJVING_INSCHRIJVING_TOT: "inschrijven tot {0}",
                OUDERAVOND_OMSCHRIJVING_GEROOSTERD: "afspraak op {0} om {1}",
                OUDERAVOND_OMSCHRIJVING_NIET_AANGEMELD: "niet aangemeld",
                OUDERAVOND_OMSCHRIJVING_AFSPRAAK_NIET_MOGELIJK: "Er konden geen afspraken worden gemaakt",
                OUDERAVOND_WIJZIGEN_DIRTY_DIALOG: "De wijziging is nog niet afgerond.",
                OUDERAVOND_INSCHRIJVEN_DIRTY_DIALOG: "De inschrijving is nog niet afgerond."
            },
            this.OpdrachtenStrings = {
                OPDRACHTEN_QUAYN_TOAST_TITLE: "Quayn",
                OPDRACHTEN_QUAYN_TOAST_MESSAGE: "Start een Quayntoets door rechtsbovenin het scherm te klikken op Start",
                EDIT_OPDRACHT_MAX_BEREIKT_MESSAGE: "Je hebt het maximale aantal pogingen bereikt. Neem contact op met de docent als je de toets nogmaals moet maken.",
                QUAYN_LINK_ERROR: "Er is helaas iets misgegaan bij het ophalen van de link naar het toetsportaal. Probeer het later nog eens."
            }
        }
    }()
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function r(e) {
            return e.substr(2 + (~-e.lastIndexOf(".") >>> 0))
        }
        function i(t, n) {
            var i = r(t);
            return e.contains(n, i.toUpperCase())
        }
        n.d(t, "a", function() {
            return r
        }),
        n.d(t, "b", function() {
            return i
        })
    }
    ).call(this, n(3))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "d", function() {
            return i
        }),
        n.d(t, "e", function() {
            return o
        }),
        n.d(t, "f", function() {
            return a
        }),
        n.d(t, "c", function() {
            return s
        }),
        n.d(t, "g", function() {
            return u
        }),
        n.d(t, "b", function() {
            return l
        }),
        n.d(t, "h", function() {
            return f
        }),
        n.d(t, "a", function() {
            return d
        });
        var r = n(2);
        function i(e) {
            return Object(r.c)(e) || s(e) || function(e) {
                if (!Object(r.c)(e))
                    return 0 === e.trim().length;
                return !1
            }(e)
        }
        function o(e) {
            return Object(r.c)(e) || s(e)
        }
        function a(t) {
            return e.isString(t)
        }
        function s(e) {
            return "" === e
        }
        function u(e, t) {
            return !Object(r.c)(e) && 0 === e.indexOf(t)
        }
        function c(e, t, n) {
            var r, i, o = e.substring(t, n), a = o.indexOf(":");
            if (a < 0 ? (r = parseInt(o, 10) + 1,
            i = "") : (r = parseInt(o.substring(0, a), 10) + 1,
            i = o.substring(a + 1)),
            isNaN(r))
                throw new Error("format stringFormatInvalid");
            return {
                index: r,
                format: i
            }
        }
        function l() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            for (var n, r, i = "", o = e[0], a = 0; ; ) {
                var s = o.indexOf("{", a)
                  , u = o.indexOf("}", a);
                if (s < 0 && u < 0) {
                    i += o.slice(a);
                    break
                }
                if (u > 0 && (u < s || s < 0)) {
                    if ("}" !== o.charAt(u + 1))
                        throw new Error("format stringFormatBraceMismatch");
                    i += o.slice(a, u + 1),
                    a = u + 2
                } else if (i += o.slice(a, s),
                a = s + 1,
                "{" !== o.charAt(a)) {
                    if (u < 0)
                        throw new Error("format stringFormatBraceMismatch");
                    var l = c(o, a, u)
                      , f = e[l.index];
                    null == f && (f = ""),
                    i += (n = f,
                    r = l.format,
                    n.toFormattedString ? n.toFormattedString(r) : n.format ? n.format(r) : n.toString()),
                    a = u + 1
                } else
                    i += "{",
                    a++
            }
            return i
        }
        function f(e) {
            return Object(r.c)(e) ? "" : e.trim()
        }
        function d(e) {
            return o(e) ? e : e.substring(0, 1).toUpperCase() + e.substring(1)
        }
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = function() {
        function e(e) {
            this.$resource = e,
            this.apiHost = globalSettings.apiHost
        }
        return e.prototype.get = function() {
            return this.$resource(this.apiHost + "api/sessies", {}, {
                execute: {
                    method: "GET"
                }
            }).execute({}).$promise
        }
        ,
        e.prototype.getCurrent = function() {
            return this.$resource(this.apiHost + "api/sessions/current", {}, {
                execute: {
                    method: "GET"
                }
            }).execute({}).$promise
        }
        ,
        e.prototype.deleteCurrent = function() {
            return this.$resource(this.apiHost + "api/sessions/current", {}, {
                execute: {
                    method: "DELETE"
                }
            }).execute({}).$promise
        }
        ,
        e.prototype.delete = function() {
            return this.$resource(this.apiHost + "api/sessies/huidige", {}, {
                execute: {
                    method: "DELETE"
                }
            }).execute({}).$promise
        }
        ,
        e.prototype.submitToken = function(e, t) {
            return this.$resource(t, {}, {
                execute: {
                    method: "POST"
                }
            }).execute({
                Code: e
            }).$promise
        }
        ,
        e.$inject = ["$resource", e],
        e
    }()
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = function() {
        function e(e) {
            this.$resource = e,
            this.apiHost = globalSettings.apiHost
        }
        return e.prototype.get = function(e) {
            return this.$resource(this.apiHost + "api/account", {
                noCache: "@noCache"
            }, {
                execute: {
                    method: "GET"
                }
            }).execute({
                noCache: e
            }).$promise
        }
        ,
        e.$inject = ["$resource", e],
        e
    }()
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = function() {
        function e(e) {
            this.$cookieStore = e
        }
        return e.prototype.createPersistentCookie = function(e, t, n) {
            var r = "";
            if (n) {
                var i = new Date;
                i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3),
                r = "; expires=" + i.toUTCString()
            }
            document.cookie = encodeURI(e) + "=" + encodeURI(t) + r + "; path=/"
        }
        ,
        e.prototype.readPersistentCookie = function(e) {
            for (var t = encodeURI(e) + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                for (var i = n[r]; " " === i.charAt(0); )
                    i = i.substring(1, i.length);
                if (0 === i.indexOf(t))
                    return decodeURI(i.substring(t.length, i.length))
            }
        }
        ,
        e.prototype.areCookiesEnabled = function() {
            document.cookie = "__verify=1";
            var e = document.cookie.length > 1 && document.cookie.indexOf("__verify=1") > -1
              , t = new Date(1976,8,16);
            return document.cookie = "__verify=1;expires=" + t.toUTCString(),
            e
        }
        ,
        e.prototype.erasePersistentCookie = function(e) {
            this.createPersistentCookie(e, "", -1)
        }
        ,
        e.prototype.createSessionCookie = function(e, t) {
            this.$cookieStore.put(e, t)
        }
        ,
        e.prototype.eraseSessionCookie = function(e) {
            this.$cookieStore.remove(e)
        }
        ,
        e.prototype.readSessionCookie = function(e) {
            return this.$cookieStore.get(e)
        }
        ,
        e.$inject = ["$cookieStore", e],
        e
    }()
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", function() {
            return r
        });
        var r = function() {
            function t() {
                this.messages = {
                    EMPTY_PASSWORD: "Het wachtwoord is leeg.",
                    TOO_SHORT_PASSWORD: "Het wachtwoord is te kort.",
                    TOO_LONG_PASSWORD: "Het wachtwoord is te lang.",
                    FAILED_PASSWORD_POLICY: "Gebruik tenminste 1 kleine letter, 1 hoofdletter, 1 cijfer en 1 speciaal karakter voor het nieuwe wachtwoord."
                },
                this.lengtBoundaries = {
                    MINIMUM_PASSWORD_LENGTH: 5,
                    MAXIMUM_PASSWORD_LENGTH: 1024
                }
            }
            return t.prototype.isValid = function(e, t) {
                return "" === e ? (this.addValidationMessage(this.messages.EMPTY_PASSWORD, t),
                !1) : e.length < this.lengtBoundaries.MINIMUM_PASSWORD_LENGTH ? (this.addValidationMessage(this.messages.TOO_SHORT_PASSWORD, t),
                !1) : !(e.length > this.lengtBoundaries.MAXIMUM_PASSWORD_LENGTH) || (this.addValidationMessage(this.messages.TOO_LONG_PASSWORD, t),
                !1)
            }
            ,
            t.prototype.addValidationMessage = function(t, n) {
                e.isArray(n) && n.push(t)
            }
            ,
            t.$inject = [t],
            t
        }()
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    "use strict";
    (function(e, r) {
        n.d(t, "a", function() {
            return o
        });
        var i = n(37)
          , o = function() {
            function t(e, t, n, r, i, o, a) {
                this.$window = e,
                this.$q = t,
                this.cookieService = n,
                this.accountResource = r,
                this.sessiesResource = i,
                this.oidcService = o,
                this.cacheService = a
            }
            return t.prototype.logoff = function(e) {
                return this.cacheService.clearAll(),
                localStorage.clear(),
                this.cookieService.eraseSessionCookie("HIDE_TOUR_COOKIE"),
                this.cookieService.eraseSessionCookie("HIDE_INVALID_TIMEZONE"),
                e && window.sessionStorage.setItem("redirect_url", e),
                this.oidcService.signOut()
            }
            ,
            t.prototype.getUser = function() {
                var t = this
                  , n = this.$q.defer()
                  , r = this.$window.sessionStorage.getItem("__session_cookie");
                return e.isDefined(r) && null !== r ? (this.$window.sessionStorage.removeItem("__session_cookie"),
                this.getUserImpl(JSON.parse(r)).then(function(e) {
                    return n.resolve(e)
                }, function(e) {
                    return n.reject(e)
                })) : this.sessiesResource.getCurrent().then(function(e) {
                    t.getUserImpl(e).then(function(e) {
                        return n.resolve(e)
                    }, function(e) {
                        return n.reject(e)
                    })
                }).catch(function(e) {
                    n.reject(e)
                }),
                n.promise
            }
            ,
            t.prototype.getUserImpl = function(e) {
                var t = this.$q.defer();
                return "active" === e.state ? this.accountResource.get(this.generateHashCode(this.getAccountLink(e.links))).then(function(n) {
                    t.resolve(new i.a(n,e))
                }, function(e) {
                    t.reject(e)
                }) : t.reject(e),
                t.promise
            }
            ,
            t.prototype.getAccountLink = function(e) {
                var t = r.where(e, {
                    rel: "account"
                });
                return t.length ? t[0].href : ""
            }
            ,
            t.prototype.generateHashCode = function(e) {
                var t, n, r = 0;
                if (0 === e.length)
                    return r;
                for (t = 0,
                n = e.length; t < n; t++)
                    r = (r << 5) - r + e.charCodeAt(t),
                    r |= 0;
                return r
            }
            ,
            t.prototype.getCurrent = function() {
                return this.sessiesResource.getCurrent()
            }
            ,
            t.prototype.deleteCurrent = function() {
                return this.sessiesResource.deleteCurrent()
            }
            ,
            t.$inject = ["$window", "$q", "cookieService", "accountResource", "sessiesResource", "oidcService", "cacheService", t],
            t
        }()
    }
    ).call(this, n(1), n(3))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = function() {
        function e(e) {
            this.$resource = e,
            this.apiHost = globalSettings.apiHost
        }
        return e.prototype.get = function(e, t, n, r) {
            return this.$resource(this.apiHost + "api/m6/personen/:persoonId/instellingen/:deviceType?filter=:naam&nocache=:nocache", {
                persoonId: "@persoonId",
                deviceType: "@deviceType",
                naam: "@naam",
                nocache: "@nocache"
            }, {
                execute: {
                    method: "GET"
                }
            }).execute({
                persoonId: e,
                deviceType: t,
                naam: n,
                nocache: r
            }).$promise
        }
        ,
        e.prototype.post = function(e, t, n, r) {
            return this.$resource(this.apiHost + "api/m6/personen/:persoonId/instellingen/:deviceType", {
                persoonId: "@persoonId",
                deviceType: "@deviceType"
            }, {
                execute: {
                    method: "POST"
                }
            }).execute({
                persoonId: e,
                deviceType: t,
                naam: n
            }, r).$promise
        }
        ,
        e.$inject = ["$resource", e],
        e
    }()
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", function() {
            return o
        });
        var r = n(40)
          , i = n(41)
          , o = function() {
            function t(e, t, n) {
                this.$q = e,
                this.$injector = t,
                this.instellingUpdateList = n
            }
            return t.prototype.instellingMustBeUpdated = function(t, n) {
                return e.some(this.instellingUpdateList, function(r) {
                    return r.instellingKey === t && e.some(r.versies, function(e) {
                        return e.versie > n || void 0 === n
                    })
                })
            }
            ,
            t.prototype.updateInstellingObject = function(t, n) {
                var r = this.$q.defer()
                  , o = e.find(this.instellingUpdateList, function(e) {
                    return e.instellingKey === t
                });
                if (void 0 === o)
                    r.resolve(n);
                else if (n)
                    this.filterUpdates(o, n, r);
                else {
                    var a = i.a
                      , s = this.createInstance(a.$inject);
                    r.resolve(s.getDefault())
                }
                return r.promise
            }
            ,
            t.prototype.filterUpdates = function(t, n, r) {
                var i;
                i = e.filter(t.versies, function(e) {
                    return void 0 === n.versie || e.versie > n.versie
                }),
                this.callUpdatesRecursive(i, n, r)
            }
            ,
            t.prototype.callUpdatesRecursive = function(e, t, n) {
                if (e.length > 0) {
                    var i = e.shift();
                    t.versie = i.versie;
                    var o = r.a
                      , a = this.createInstance(o.$inject);
                    this.callUpdatesRecursive(e, a.transform(t), n)
                } else
                    n.resolve(t)
            }
            ,
            t.prototype.createInstance = function(t) {
                var n = this
                  , r = t.slice(0)
                  , i = r.splice(r.length - 1, 1)[0]
                  , o = [];
                return e.each(r, function(e) {
                    o.push(n.$injector.get(e))
                }),
                a.prototype = i.prototype,
                new a(i,o)
            }
            ,
            t.$inject = ["$q", "$injector", "instellingUpdateList", t],
            t
        }()
          , a = function() {
            return function(e, t) {
                return e.apply(this, t)
            }
        }()
    }
    ).call(this, n(3))
}
, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return ApplicationService
    });
    var _magister_Enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7)
      , _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0)
      , MENU_TOGGLE = "MENU_TOGGLE"
      , ApplicationService = function() {
        function ApplicationService(e, t, n, r, i, o, a, s) {
            this.$timeout = e,
            this.$rootScope = t,
            this.$cookieStore = n,
            this.$location = r,
            this.$routeParams = i,
            this.$q = o,
            this.$sanitize = a,
            this.magisterLocale = s
        }
        return ApplicationService.prototype.showMessage = function(e, t, n, r, i) {
            void 0 === n && (n = 0),
            void 0 === i && (i = !1);
            var o = {
                message: this.$sanitize(e),
                messageType: t,
                title: r,
                visibleTime: n,
                showPermanent: i
            };
            this.$rootScope.$broadcast("SHOW_NOTIFICATION_REQUEST", o)
        }
        ,
        ApplicationService.prototype.showWarning = function(e, t, n) {
            void 0 === t && (t = ""),
            void 0 === n && (n = 0),
            this.showMessage(e, _magister_Enums__WEBPACK_IMPORTED_MODULE_0__.i.WARNING, n, t)
        }
        ,
        ApplicationService.prototype.showInformation = function(e, t, n) {
            void 0 === t && (t = ""),
            void 0 === n && (n = 0),
            this.showMessage(e, _magister_Enums__WEBPACK_IMPORTED_MODULE_0__.i.INFORMATION, n, t)
        }
        ,
        ApplicationService.prototype.showError = function(e, t, n) {
            void 0 === t && (t = ""),
            void 0 === n && (n = 0),
            this.showMessage(e, _magister_Enums__WEBPACK_IMPORTED_MODULE_0__.i.ERROR, n, t)
        }
        ,
        ApplicationService.prototype.hideMessage = function() {
            this.$rootScope.$broadcast("HIDE_NOTIFICATION_REQUEST")
        }
        ,
        ApplicationService.prototype.toggleHoofdMenu = function(e) {
            var t = this
              , n = e;
            return Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__.w)(e) && (n = !this.$rootScope.menuExpanded),
            Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__.t)(e) ? this.$timeout(function() {
                t.$rootScope.menuExpanded = n,
                t.$rootScope.$broadcast(MENU_TOGGLE, n)
            }, 0, !0) : (this.$rootScope.menuExpanded = n,
            this.$rootScope.$broadcast(MENU_TOGGLE, n)),
            n
        }
        ,
        ApplicationService.prototype.getLocalizedString = function(key) {
            return eval("this.magisterLocale.VandaagSchermStrings." + key)
        }
        ,
        ApplicationService.prototype.IsCurrentURL = function(e) {
            return this.$location.path().substr(0, e.length) === e
        }
        ,
        ApplicationService.prototype.createSessionCookie = function(e, t) {
            this.$cookieStore.put(e, t)
        }
        ,
        ApplicationService.prototype.readSessionCookie = function(e) {
            return this.$cookieStore.get(e)
        }
        ,
        ApplicationService.$inject = ["$timeout", "$rootScope", "$cookieStore", "$location", "$routeParams", "$q", "$sanitize", "magisterLocale", ApplicationService],
        ApplicationService
    }()
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", function() {
            return i
        });
        var r = n(0)
          , i = function() {
            function t(e) {
                this.cacheFactory = e,
                this.options = {
                    maxAge: 12e4,
                    deleteOnExpire: "aggressive",
                    recycleFreq: 1e4,
                    storageMode: "memory",
                    storagePrefix: "M6."
                },
                this.cache = this.initialize("applicationCache")
            }
            return t.prototype.clearAll = function() {
                this.cacheFactory.clearAll()
            }
            ,
            t.prototype.createCache = function(e, t, n) {
                return this.initialize(e, t, n)
            }
            ,
            t.prototype.destroyAll = function() {
                this.cacheFactory.destroyAll()
            }
            ,
            t.prototype.destroy = function() {
                this.cache.destroy()
            }
            ,
            t.prototype.get = function(e) {
                return this.cache.get(e)
            }
            ,
            t.prototype.put = function(e, t) {
                return this.cache.put(e, t)
            }
            ,
            t.prototype.remove = function(e) {
                this.cache.remove(e)
            }
            ,
            t.prototype.removeAll = function() {
                this.cache.removeAll()
            }
            ,
            t.prototype.initialize = function(t, n, i) {
                var o;
                if (Object(r.w)(n)) {
                    if (i)
                        throw "When using strict mode, providing options is obligatory.";
                    o = e.copy(this.options)
                } else
                    o = i ? e.copy(n) : this.merge(e.copy(this.options), n);
                var a = this.cacheFactory.get(t);
                Object(r.w)(a) && (a = this.cacheFactory.createCache(t, o));
                try {
                    "memory" !== o.storageMode && (a.put("CacheTest", "CacheTest"),
                    a.remove("CacheTest"))
                } catch (n) {
                    var s = e.copy(o);
                    s.storageMode = "memory",
                    Object(r.w)(a) || a.destroy(),
                    a = this.cacheFactory.createCache(t, s)
                }
                return a
            }
            ,
            t.prototype.merge = function(e, t) {
                return Object(r.w)(e) ? t : Object(r.w)(t) ? e : (this.mergeProperty(t.capacity, function(t) {
                    return e.capacity = t
                }),
                this.mergeProperty(t.maxAge, function(t) {
                    return e.maxAge = t
                }),
                this.mergeProperty(t.deleteOnExpire, function(t) {
                    return e.deleteOnExpire = t
                }),
                this.mergeProperty(t.recycleFreq, function(t) {
                    return e.recycleFreq = t
                }),
                this.mergeProperty(t.cacheFlushInterval, function(t) {
                    return e.cacheFlushInterval = t
                }),
                this.mergeProperty(t.storageMode, function(t) {
                    return e.storageMode = t
                }),
                this.mergeProperty(t.storagePrefix, function(t) {
                    return e.storagePrefix = t
                }),
                this.mergeProperty(t.onExpire, function(t) {
                    return e.onExpire = t
                }),
                e)
            }
            ,
            t.prototype.mergeProperty = function(e, t) {
                Object(r.w)(e) || t(e)
            }
            ,
            t.$inject = ["DSCacheFactory", t],
            t
        }()
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", function() {
            return i
        });
        var r = n(0)
          , i = function() {
            function t(e, t, n, r) {
                this.$q = e,
                this.instellingResource = t,
                this.instellingUpdateService = n,
                this.cacheService = r
            }
            return t.prototype.get = function(e, t, n, i) {
                var o = this;
                void 0 === i && (i = !1);
                var a = this.$q.defer()
                  , s = this.cacheService.get(t);
                return i || Object(r.w)(s) ? this.getInstelling(e, t, n).then(function(n) {
                    o.cacheService.put(t, n),
                    o.resolveInstellingObject(e, a, t, n)
                }) : this.resolveInstellingObject(e, a, t, s),
                a.promise
            }
            ,
            t.prototype.getForRelatedPerson = function(e, t, n, i, o) {
                void 0 === o && (o = !1);
                var a = this.$q.defer();
                return this.get(e, n, i, o).then(function(e) {
                    Object(r.w)(e) && (e = {}),
                    a.resolve(e[t])
                }),
                a.promise
            }
            ,
            t.prototype.set = function(e, t, n) {
                this.cacheService.put(t, n);
                var r = this.getIInstellingDTO(n, t);
                return this.instellingResource.post(e, globalSettings.deviceType, t, r)
            }
            ,
            t.prototype.setForRelatedPerson = function(e, t, n, i) {
                var o = this
                  , a = this.$q.defer();
                return this.get(e, n).then(function(s) {
                    Object(r.w)(s) && (s = {}),
                    s[t] = i,
                    o.set(e, n, s).then(function(e) {
                        a.resolve(e)
                    })
                }),
                a.promise
            }
            ,
            t.prototype.resolveInstellingObject = function(e, t, n, r) {
                var i = this
                  , o = r ? r.versie : void 0;
                this.instellingUpdateService.instellingMustBeUpdated(n, o) ? this.instellingUpdateService.updateInstellingObject(n, r).then(function(r) {
                    i.set(e, n, r),
                    t.resolve(r)
                }) : t.resolve(r)
            }
            ,
            t.prototype.getInstelling = function(e, t, n) {
                var r = this
                  , i = this.$q.defer()
                  , o = (new Date).getTime().toString();
                return this.instellingResource.get(e, globalSettings.deviceType, t, o).then(function(e) {
                    i.resolve(r.getInstellingObject(n, e))
                }),
                i.promise
            }
            ,
            t.prototype.getInstellingObject = function(t, n) {
                if (Object(r.w)(n.items) || !(n.items.length > 0) || Object(r.w)(n.items[0]) || Object(r.w)(n.items[0].value))
                    return t;
                try {
                    return e.fromJson(n.items[0].value)
                } catch (e) {
                    return n.items[0].value
                }
            }
            ,
            t.prototype.getIInstellingDTO = function(t, n) {
                return e.isString(t) || (t = e.toJson(t)),
                {
                    value: t,
                    name: n
                }
            }
            ,
            t.$inject = ["$q", "instellingResource", "instellingUpdateService", "cacheService", t],
            t
        }()
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", function() {
            return r
        });
        var r = function() {
            function t(e, t, n, r) {
                this.$q = e,
                this.$resource = t,
                this.applicationService = n,
                this.magisterLocale = r
            }
            return t.prototype.hasChildren = function(t) {
                var n = this.$q.defer();
                return this.getChildren(t).then(function(t) {
                    n.resolve(e.any(t.Items))
                }, function(e) {
                    n.reject(e)
                }),
                n.promise
            }
            ,
            t.prototype.getChildren = function(e) {
                var t = this.$q.defer();
                if (!e) {
                    var n = this.magisterLocale.InitStrings.NO_PARENT_ID;
                    return this.applicationService.showMessage(n, 1),
                    t.reject(n),
                    t.promise
                }
                var r = "";
                globalSettings && (r = globalSettings.apiHost);
                var i = r + "api/personen/:persoonId/kinderen?openData=''";
                return this.$resource(i, {
                    persoonId: e
                }, {
                    get: {
                        isArray: !1,
                        method: "GET"
                    }
                }).get().$promise.then(function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }),
                t.promise
            }
            ,
            t.$inject = ["$q", "$resource", "applicationService", "magisterLocale", t],
            t
        }()
    }
    ).call(this, n(3))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", function() {
            return b
        });
        n(15);
        var r = n(1)
          , i = (n(47),
        n(48),
        n(66),
        n(68),
        n(70),
        n(72),
        n(74),
        n(12))
          , o = n(22)
          , a = n(4)
          , s = n(0)
          , u = n(25)
          , c = n(26)
          , l = n(27)
          , f = n(28)
          , d = n(29)
          , h = n(39)
          , p = n(30)
          , g = n(31)
          , m = n(32)
          , v = n(33)
          , $ = n(34)
          , y = n(35);
        window.Contracts = n(46);
        var b = function() {
            function t(e) {
                this.defaultOptions = {
                    loadUser: !0,
                    onPreRun: void 0,
                    bootstrapAppOptions: {
                        moduleDefinition: void 0,
                        onInit: function(e) {}
                    }
                },
                this.options = this.mergeOptions(this.defaultOptions, e),
                this.bootstrapModule = this.initBootstrapModule(),
                Object(s.w)(this.options.onPreRun) || (this.onPreRun = this.options.onPreRun)
            }
            return t.prototype.onPreRun = function(e, t, n, r) {
                if (!r.loadUser)
                    return e.resolve(void 0);
                var o = n.get("currentUserService")
                  , a = n.get("instellingService");
                return e.all([t.get("/api/m6/applicatietoegang").then(function(e) {
                    if (!e.data)
                        throw new Error("Geen leerling of ouder");
                    if ("lo" !== e.data.applicatie)
                        throw new Error("Geen leerling of ouder")
                }), this.getCurrentUser(e, t, o, a)]).then(function(e) {
                    return {
                        user: e[1]
                    }
                }).catch(function(e) {
                    return "Geen leerling of ouder" === e.message ? {
                        user: void 0,
                        redirectUrl: "/"
                    } : e.message === i.ERROR_USER_NOT_FOUND ? (window.sessionStorage.setItem("redirect_url", window.location.href),
                    n.get("oidcService").signIn().then(function() {
                        return {
                            user: void 0
                        }
                    })) : {
                        user: void 0,
                        redirectUrl: e.status ? "/error.html?statusCode=" + e.status : "/error.html"
                    }
                })
            }
            ,
            t.prototype.mergeOptions = function(e, t) {
                return Object(s.w)(t) ? e : (this.mergeProperty(t.loadUser, function(t) {
                    return e.loadUser = t
                }),
                this.mergeProperty(t.onInit, function(t) {
                    return e.onInit = t
                }),
                this.mergeProperty(t.onPreRun, function(t) {
                    return e.onPreRun = t
                }),
                Object(s.w)(t.bootstrapAppOptions) || (this.mergeProperty(t.bootstrapAppOptions.moduleDefinition, function(t) {
                    return e.bootstrapAppOptions.moduleDefinition = t
                }),
                this.mergeProperty(t.bootstrapAppOptions.onInit, function(t) {
                    return e.bootstrapAppOptions.onInit = t
                })),
                e)
            }
            ,
            t.prototype.mergeProperty = function(e, t) {
                Object(s.w)(e) || t(e)
            }
            ,
            t.prototype.initBootstrapModule = function() {
                var e = this
                  , t = r.module("Magister.Bootstrapper", ["ngResource", "ngCookies", "ngRoute", "ngSanitize", "angular-data.DSCacheFactory", i.OidcModule.name]);
                return t.value("oidcConfig", {
                    handleOidcEvents: !1
                }),
                t.config(["userManagerProvider", function(e) {
                    e.disableMonitorSession()
                }
                ]),
                t.value("magisterLocale", new o.a),
                t.service("passwordValidator", f.a.$inject),
                t.service("sessiesResource", u.a.$inject),
                t.service("accountResource", c.a.$inject),
                t.service("instellingResource", p.a.$inject),
                t.service("instellingUpdateService", g.a.$inject),
                t.service("applicationService", m.a.$inject),
                t.service("cacheService", v.a.$inject),
                t.service("cookieService", l.a.$inject),
                t.service("sessieService", d.a.$inject),
                t.service("instellingService", $.a.$inject),
                t.service("personInfoService", y.a.$inject),
                t.service("currentUserService", h.a.$inject),
                t.value("instellingUpdateList", []),
                t.factory("bootstrapperFactory", ["$q", "$http", "$injector", "$window", function(t, n, r, i) {
                    return e.bootstrapperFactory(e, t, n, r, i)
                }
                ]),
                t.run(["bootstrapperFactory", function(e) {
                    e.bootstrap().then(function() {})
                }
                ]),
                void 0 !== this.options.onInit && null !== this.options.onInit && this.options.onInit(t),
                t
            }
            ,
            t.prototype.bootstrapperFactory = function(e, t, n, r, i) {
                return {
                    bootstrap: function() {
                        return e.onPreRun(t, n, r, e.options).then(function(n) {
                            if (n) {
                                if (n.redirectUrl)
                                    return i.location.assign(n.redirectUrl);
                                if (n.user) {
                                    var r = e.options.loadUser ? n.user : void 0;
                                    return e.bootstrapRealApp(t, e.options.bootstrapAppOptions, r)
                                }
                            }
                        })
                    }
                }
            }
            ,
            t.prototype.getCurrentUser = function(t, n, r, i) {
                var o = this
                  , s = t.defer();
                return r.getCurrentUser().then(function(r) {
                    r.isInRole(a.a.Ouder) ? i.get(r.person.id, "latestRelatedPerson", r.relatedPersons.persons[0], !0).then(function(i) {
                        var a = e.find(r.relatedPersons.persons, function(e) {
                            return i.id === e.id
                        })
                          , u = !1;
                        o.getChildren(t, n, r.person.id).then(function(t) {
                            var n = function() {
                                window.sessionStorage && window.sessionStorage.setItem("errormsg", "Uw meerderjarige kind heeft u geen toestemming gegeven om zijn/haar gegevens te bekijken.\r\nUw kind kan u toestemming geven bij de instellingen in Magister."),
                                window.location.href = "/400.html"
                            };
                            1 !== t.Items.length || t.Items[0].ZichtbaarVoorOuder || n(),
                            e.each(t.Items, function(e) {
                                if (a && a.id === e.Id && !e.ZichtbaarVoorOuder && !u)
                                    for (var n = 0; n < t.Items.length; n++)
                                        if (t.Items[n].ZichtbaarVoorOuder) {
                                            r.setCurrentPerson(r.relatedPersons.persons[n]),
                                            u = !0;
                                            break
                                        }
                            });
                            for (var i = !1, o = 0; o < t.Items.length; o++)
                                t.Items[o].ZichtbaarVoorOuder && (i = !0);
                            if (i) {
                                if (!u)
                                    if (a)
                                        r.setCurrentPerson(a);
                                    else {
                                        for (o = 0; o < t.Items.length; o++) {
                                            var c = t.Items[o];
                                            r.relatedPersons.persons[0].id === c.Id && !1 === c.ZichtbaarVoorOuder && n()
                                        }
                                        r.setCurrentPerson(r.relatedPersons.persons[0])
                                    }
                                s.resolve(r)
                            } else
                                n()
                        })
                    }) : s.resolve(r)
                }, function(e) {
                    return s.reject(e)
                }),
                s.promise
            }
            ,
            t.prototype.getChildren = function(e, t, n) {
                if (!n)
                    return e.reject("Geen ouder");
                var r = "/api/personen/persoonId/kinderen?openData=''";
                return r = r.replace("persoonId", n.toString(10)),
                t.get(r).then(function(e) {
                    return e.data
                })
            }
            ,
            t.prototype.bootstrapRealApp = function(e, t, i) {
                var o = e.defer();
                return Promise.all([n.e(23), n.e(10)]).then(n.bind(null, 84)).then(function(e) {
                    var t = e.app;
                    t.value("currentUser", i),
                    r.bootstrap(document.documentElement, [t.name], {
                        strictDi: !0
                    }),
                    o.resolve()
                }).catch(function(e) {
                    return console.log(e)
                }),
                o.promise
            }
            ,
            t
        }()
    }
    ).call(this, n(3))
}
, function(e, t, n) {
    "use strict";
    (function(e, r) {
        n.d(t, "a", function() {
            return l
        });
        var i = n(8)
          , o = n(5)
          , a = n(4)
          , s = n(11)
          , u = n(9)
          , c = n(38)
          , l = function() {
            function t(e, t) {
                this.roles = this.getRoles(e),
                this.privileges = this.getPrivileges(e),
                this.sessie = t,
                this.person = new u.a(e.Persoon,this.roles)
            }
            return t.prototype.isInRole = function(t) {
                return e.contains(this.roles, t)
            }
            ,
            t.prototype.isInRoles = function(t, n) {
                var r = e.intersection(t, this.roles);
                switch (n) {
                case s.a.One:
                    return r.length >= 1;
                case s.a.All:
                    return r.length === t.length
                }
            }
            ,
            t.prototype.hasPrivilege = function(t, n) {
                return void 0 !== e.find(this.privileges, function(r) {
                    return r.Naam === o.a[t] && e.contains(r.AccessType, i.a[n])
                })
            }
            ,
            t.prototype.hasPrivileges = function(t, n) {
                var r = this
                  , i = !1;
                return e.each(t, function(e) {
                    r.hasPrivilege(e, n) && (i = !0)
                }),
                i
            }
            ,
            t.prototype.hasUpdatePrivilege = function(e) {
                return this.hasPrivilege(e, i.a.Update)
            }
            ,
            t.prototype.hasUpdatePrivileges = function(e) {
                return this.hasPrivileges(e, i.a.Update)
            }
            ,
            t.prototype.getCurrentPerson = function() {
                return this.relatedPersons.current
            }
            ,
            t.prototype.setCurrentPerson = function(t) {
                if (!e.contains(this.relatedPersons.persons, t) && this.person !== t)
                    throw "setCurrentPerson requires the person to set to be the account's person or exist in the relatedPersons array.";
                this.relatedPersons.current = t
            }
            ,
            t.prototype.getValueForRole = function(t) {
                var n = this;
                return e.find(t.roleValues, function(t) {
                    return e.contains(n.roles, t.role)
                }).value
            }
            ,
            t.prototype.getRoles = function(t) {
                var n = [];
                return e.forEach(t.Groep, function(e) {
                    if (r.isUndefined(a.a[e.Naam]))
                        throw "Role '" + e.Naam + "' is not in the roles enumeration";
                    n.push(a.a[e.Naam])
                }),
                n
            }
            ,
            t.prototype.getPrivileges = function(t) {
                var n = [];
                return e.forEach(t.Groep, function(t) {
                    e.forEach(t.Privileges, function(e) {
                        n.push(new c.a(e))
                    })
                }),
                n
            }
            ,
            t
        }()
    }
    ).call(this, n(3), n(1))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = function() {
        return function(e) {
            this.Naam = e.Naam,
            this.AccessType = e.AccessType
        }
    }()
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    });
    var r = n(4)
      , i = n(13)
      , o = function() {
        function e(e, t, n) {
            this.$q = e,
            this.sessieService = t,
            this.personInfoService = n
        }
        return e.prototype.getCurrentUser = function() {
            var e = this
              , t = this.$q.defer();
            return this.sessieService.getUser().then(function(n) {
                e.getRelatedPersons(n).then(function(e) {
                    n.relatedPersons = e,
                    t.resolve(n)
                }, function(e) {
                    return t.reject(e)
                })
            }, function(e) {
                t.reject(e)
            }),
            t.promise
        }
        ,
        e.prototype.getRelatedPersons = function(e) {
            var t = this.$q.defer();
            return e.isInRole(r.a.Ouder) ? this.personInfoService.getChildren(e.person.id).then(function(n) {
                t.resolve(new i.a(e.person,n.Items))
            }) : t.resolve(new i.a(e.person,[])),
            t.promise
        }
        ,
        e.$inject = ["$q", "sessieService", "personInfoService", e],
        e
    }()
}
, function(e, t, n) {
    "use strict";
    (function(e, r) {
        n.d(t, "a", function() {
            return a
        });
        var i = n(5)
          , o = n(0)
          , a = function() {
            function t(e) {
                this.vandaagDefaults = e
            }
            return t.prototype.transform = function(t) {
                try {
                    e.isDefined(t) && !Object(o.o)(t.widgets) && e.isDefined(t.widgets[0].Positie.Kolom) && (t.widgets = this.ConvertOldWidgets(t.widgets))
                } catch (e) {}
                r.some(t.widgets, function(e) {
                    return "Notificaties" === e.Titel
                }) ? r.find(t.widgets, function(e) {
                    return "Notificaties" === e.Titel
                }).Privilege = i.a.NoPrivilege : t.widgets.push(r.find(this.vandaagDefaults.vandaagSchermAlgemeen, function(e) {
                    return "Notificaties" === e.Titel
                }));
                return t.widgets = r.filter(t.widgets, function(e) {
                    return "Ouderavond" !== e.Titel
                }),
                t
            }
            ,
            t.prototype.ConvertOldWidgets = function(e) {
                return e.length > 0 && "string" == typeof e[0].Privilege ? r.map(e, function(e) {
                    var t = e.Privilege.charAt(0).toUpperCase() + e.Privilege.slice(1);
                    "*" === t && (t = "NoPrivilege");
                    var n = i.a[t];
                    return {
                        Titel: e.Titel,
                        Naam: e.Naam,
                        Directive: e.Directive,
                        Privilege: n,
                        Positie: e.Positie,
                        icon: e.icon,
                        Draggable: e.Draggable,
                        roles: e.groep
                    }
                }) : e
            }
            ,
            t.$inject = ["vandaagDefaults", t],
            t
        }()
    }
    ).call(this, n(1), n(3))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = function() {
        function e(e) {
            this.vandaagDefaults = e
        }
        return e.prototype.getDefault = function() {
            return {
                widgets: this.vandaagDefaults.vandaagSchermAlgemeen,
                hideTourNextTime: !1,
                versie: 1
            }
        }
        ,
        e.$inject = ["vandaagDefaults", e],
        e
    }()
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    function(e) {
        var t = new (n(36).a)({
            loadUser: !0,
            bootstrapAppOptions: {
                moduleDefinition: "Content/app/scripts/magister"
            }
        })
          , r = document.createElement("div");
        e.element(document).ready(function() {
            e.bootstrap(r, [t.bootstrapModule.name], {
                strictDi: !0
            })
        })
    }
    .call(this, n(1))
}
, function(e, t, n) {
    (function(e) {
        /**
 * @license AngularJS v1.5.10
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */
        !function(t) {
            "use strict";
            function n(e, t) {
                return t = t || Error,
                function() {
                    var n, r, i = arguments, o = i[0], a = "[" + (e ? e + ":" : "") + o + "] ";
                    for (a += i[1].replace(/\{\d+\}/g, function(e) {
                        var t = +e.slice(1, -1) + 2;
                        return t < i.length ? Ve(i[t]) : e
                    }),
                    a += "\nhttp://errors.angularjs.org/1.5.10/" + (e ? e + "/" : "") + o,
                    r = 2,
                    n = "?"; r < i.length; r++,
                    n = "&")
                        a += n + "p" + (r - 2) + "=" + encodeURIComponent(Ve(i[r]));
                    return new t(a)
                }
            }
            var r = /^\/(.+)\/([a-z]*)$/
              , i = "validity"
              , o = Object.prototype.hasOwnProperty
              , a = function(e) {
                return H(e) ? e.toLowerCase() : e
            }
              , s = function(e) {
                return H(e) ? e.toUpperCase() : e
            };
            "i" !== "I".toLowerCase() && (a = function(e) {
                return H(e) ? e.replace(/[A-Z]/g, function(e) {
                    return String.fromCharCode(32 | e.charCodeAt(0))
                }) : e
            }
            ,
            s = function(e) {
                return H(e) ? e.replace(/[a-z]/g, function(e) {
                    return String.fromCharCode(-33 & e.charCodeAt(0))
                }) : e
            }
            );
            var u, c, l, f, d = [].slice, h = [].splice, p = [].push, g = Object.prototype.toString, m = Object.getPrototypeOf, v = n("ng"), $ = t.angular || (t.angular = {}), y = 0;
            function b(e) {
                if (null == e || W(e))
                    return !1;
                if (q(e) || H(e) || c && e instanceof c)
                    return !0;
                var t = "length"in Object(e) && e.length;
                return U(t) && (t >= 0 && (t - 1 in e || e instanceof Array) || "function" == typeof e.item)
            }
            function w(e, t, n) {
                var r, i;
                if (e)
                    if (B(e))
                        for (r in e)
                            "prototype" === r || "length" === r || "name" === r || e.hasOwnProperty && !e.hasOwnProperty(r) || t.call(n, e[r], r, e);
                    else if (q(e) || b(e)) {
                        var a = "object" != typeof e;
                        for (r = 0,
                        i = e.length; r < i; r++)
                            (a || r in e) && t.call(n, e[r], r, e)
                    } else if (e.forEach && e.forEach !== w)
                        e.forEach(t, n, e);
                    else if (F(e))
                        for (r in e)
                            t.call(n, e[r], r, e);
                    else if ("function" == typeof e.hasOwnProperty)
                        for (r in e)
                            e.hasOwnProperty(r) && t.call(n, e[r], r, e);
                    else
                        for (r in e)
                            o.call(e, r) && t.call(n, e[r], r, e);
                return e
            }
            function x(e, t, n) {
                for (var r = Object.keys(e).sort(), i = 0; i < r.length; i++)
                    t.call(n, e[r[i]], r[i]);
                return r
            }
            function E(e) {
                return function(t, n) {
                    e(n, t)
                }
            }
            function S() {
                return ++y
            }
            function _(e, t) {
                t ? e.$$hashKey = t : delete e.$$hashKey
            }
            function k(e, t, n) {
                for (var r = e.$$hashKey, i = 0, o = t.length; i < o; ++i) {
                    var a = t[i];
                    if (L(a) || B(a))
                        for (var s = Object.keys(a), u = 0, c = s.length; u < c; u++) {
                            var l = s[u]
                              , f = a[l];
                            n && L(f) ? V(f) ? e[l] = new Date(f.valueOf()) : G(f) ? e[l] = new RegExp(f) : f.nodeName ? e[l] = f.cloneNode(!0) : Q(f) ? e[l] = f.clone() : (L(e[l]) || (e[l] = q(f) ? [] : {}),
                            k(e[l], [f], !0)) : e[l] = f
                        }
                }
                return _(e, r),
                e
            }
            function A(e) {
                return k(e, d.call(arguments, 1), !1)
            }
            function T(e) {
                return k(e, d.call(arguments, 1), !0)
            }
            function O(e) {
                return parseInt(e, 10)
            }
            u = t.document.documentMode;
            var C = Number.isNaN || function(e) {
                return e != e
            }
            ;
            function N(e, t) {
                return A(Object.create(e), t)
            }
            function D() {}
            function M(e) {
                return e
            }
            function I(e) {
                return function() {
                    return e
                }
            }
            function j(e) {
                return B(e.toString) && e.toString !== g
            }
            function R(e) {
                return void 0 === e
            }
            function P(e) {
                return void 0 !== e
            }
            function L(e) {
                return null !== e && "object" == typeof e
            }
            function F(e) {
                return null !== e && "object" == typeof e && !m(e)
            }
            function H(e) {
                return "string" == typeof e
            }
            function U(e) {
                return "number" == typeof e
            }
            function V(e) {
                return "[object Date]" === g.call(e)
            }
            D.$inject = [],
            M.$inject = [];
            var q = Array.isArray;
            function B(e) {
                return "function" == typeof e
            }
            function G(e) {
                return "[object RegExp]" === g.call(e)
            }
            function W(e) {
                return e && e.window === e
            }
            function z(e) {
                return e && e.$evalAsync && e.$watch
            }
            function Y(e) {
                return "boolean" == typeof e
            }
            function K(e) {
                return e && B(e.then)
            }
            var J = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/;
            var Z = function(e) {
                return H(e) ? e.trim() : e
            }
              , X = function(e) {
                return e.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
            };
            function Q(e) {
                return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
            }
            function ee(e) {
                return a(e.nodeName || e[0] && e[0].nodeName)
            }
            function te(e, t) {
                var n = e.indexOf(t);
                return n >= 0 && e.splice(n, 1),
                n
            }
            function ne(e, t) {
                var n, r, i = [], a = [];
                if (t) {
                    if ((r = t) && U(r.length) && J.test(g.call(r)) || (n = t,
                    "[object ArrayBuffer]" === g.call(n)))
                        throw v("cpta", "Can't copy! TypedArray destination cannot be mutated.");
                    if (e === t)
                        throw v("cpi", "Can't copy! Source and destination are identical.");
                    return q(t) ? t.length = 0 : w(t, function(e, n) {
                        "$$hashKey" !== n && delete t[n]
                    }),
                    i.push(e),
                    a.push(t),
                    s(e, t)
                }
                return u(e);
                function s(e, t) {
                    var n, r = t.$$hashKey;
                    if (q(e))
                        for (var i = 0, a = e.length; i < a; i++)
                            t.push(u(e[i]));
                    else if (F(e))
                        for (n in e)
                            t[n] = u(e[n]);
                    else if (e && "function" == typeof e.hasOwnProperty)
                        for (n in e)
                            e.hasOwnProperty(n) && (t[n] = u(e[n]));
                    else
                        for (n in e)
                            o.call(e, n) && (t[n] = u(e[n]));
                    return _(t, r),
                    t
                }
                function u(e) {
                    if (!L(e))
                        return e;
                    var t = i.indexOf(e);
                    if (-1 !== t)
                        return a[t];
                    if (W(e) || z(e))
                        throw v("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
                    var n = !1
                      , r = function(e) {
                        switch (g.call(e)) {
                        case "[object Int8Array]":
                        case "[object Int16Array]":
                        case "[object Int32Array]":
                        case "[object Float32Array]":
                        case "[object Float64Array]":
                        case "[object Uint8Array]":
                        case "[object Uint8ClampedArray]":
                        case "[object Uint16Array]":
                        case "[object Uint32Array]":
                            return new e.constructor(u(e.buffer),e.byteOffset,e.length);
                        case "[object ArrayBuffer]":
                            if (!e.slice) {
                                var t = new ArrayBuffer(e.byteLength);
                                return new Uint8Array(t).set(new Uint8Array(e)),
                                t
                            }
                            return e.slice(0);
                        case "[object Boolean]":
                        case "[object Number]":
                        case "[object String]":
                        case "[object Date]":
                            return new e.constructor(e.valueOf());
                        case "[object RegExp]":
                            var n = new RegExp(e.source,e.toString().match(/[^\/]*$/)[0]);
                            return n.lastIndex = e.lastIndex,
                            n;
                        case "[object Blob]":
                            return new e.constructor([e],{
                                type: e.type
                            })
                        }
                        if (B(e.cloneNode))
                            return e.cloneNode(!0)
                    }(e);
                    return void 0 === r && (r = q(e) ? [] : Object.create(m(e)),
                    n = !0),
                    i.push(e),
                    a.push(r),
                    n ? s(e, r) : r
                }
            }
            function re(e, t) {
                if (e === t)
                    return !0;
                if (null === e || null === t)
                    return !1;
                if (e != e && t != t)
                    return !0;
                var n, r, i, o = typeof e;
                if (o === typeof t && "object" === o) {
                    if (!q(e)) {
                        if (V(e))
                            return !!V(t) && re(e.getTime(), t.getTime());
                        if (G(e))
                            return !!G(t) && e.toString() === t.toString();
                        if (z(e) || z(t) || W(e) || W(t) || q(t) || V(t) || G(t))
                            return !1;
                        for (r in i = je(),
                        e)
                            if ("$" !== r.charAt(0) && !B(e[r])) {
                                if (!re(e[r], t[r]))
                                    return !1;
                                i[r] = !0
                            }
                        for (r in t)
                            if (!(r in i) && "$" !== r.charAt(0) && P(t[r]) && !B(t[r]))
                                return !1;
                        return !0
                    }
                    if (!q(t))
                        return !1;
                    if ((n = e.length) === t.length) {
                        for (r = 0; r < n; r++)
                            if (!re(e[r], t[r]))
                                return !1;
                        return !0
                    }
                }
                return !1
            }
            var ie = function() {
                if (!P(ie.rules)) {
                    var e = t.document.querySelector("[ng-csp]") || t.document.querySelector("[data-ng-csp]");
                    if (e) {
                        var n = e.getAttribute("ng-csp") || e.getAttribute("data-ng-csp");
                        ie.rules = {
                            noUnsafeEval: !n || -1 !== n.indexOf("no-unsafe-eval"),
                            noInlineStyle: !n || -1 !== n.indexOf("no-inline-style")
                        }
                    } else
                        ie.rules = {
                            noUnsafeEval: function() {
                                try {
                                    return new Function(""),
                                    !1
                                } catch (e) {
                                    return !0
                                }
                            }(),
                            noInlineStyle: !1
                        }
                }
                return ie.rules
            }
              , oe = function() {
                if (P(oe.name_))
                    return oe.name_;
                var e, n, r, i, o = we.length;
                for (n = 0; n < o; ++n)
                    if (r = we[n],
                    e = t.document.querySelector("[" + r.replace(":", "\\:") + "jq]")) {
                        i = e.getAttribute(r + "jq");
                        break
                    }
                return oe.name_ = i
            };
            function ae(e, t, n) {
                return e.concat(d.call(t, n))
            }
            function se(e, t) {
                return d.call(e, t || 0)
            }
            function ue(e, t) {
                var n = arguments.length > 2 ? se(arguments, 2) : [];
                return !B(t) || t instanceof RegExp ? t : n.length ? function() {
                    return arguments.length ? t.apply(e, ae(n, arguments, 0)) : t.apply(e, n)
                }
                : function() {
                    return arguments.length ? t.apply(e, arguments) : t.call(e)
                }
            }
            function ce(e, n) {
                var r = n;
                return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? r = void 0 : W(n) ? r = "$WINDOW" : n && t.document === n ? r = "$DOCUMENT" : z(n) && (r = "$SCOPE"),
                r
            }
            function le(e, t) {
                if (!R(e))
                    return U(t) || (t = t ? 2 : null),
                    JSON.stringify(e, ce, t)
            }
            function fe(e) {
                return H(e) ? JSON.parse(e) : e
            }
            var de = /:/g;
            function he(e, t) {
                e = e.replace(de, "");
                var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
                return C(n) ? t : n
            }
            function pe(e, t, n) {
                n = n ? -1 : 1;
                var r = e.getTimezoneOffset();
                return function(e, t) {
                    return (e = new Date(e.getTime())).setMinutes(e.getMinutes() + t),
                    e
                }(e, n * (he(t, r) - r))
            }
            function ge(e) {
                e = c(e).clone();
                try {
                    e.empty()
                } catch (e) {}
                var t = c("<div>").append(e).html();
                try {
                    return e[0].nodeType === Pe ? a(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function(e, t) {
                        return "<" + a(t)
                    })
                } catch (e) {
                    return a(t)
                }
            }
            function me(e) {
                try {
                    return decodeURIComponent(e)
                } catch (e) {}
            }
            function ve(e) {
                var t = {};
                return w((e || "").split("&"), function(e) {
                    var n, r, i;
                    e && (r = e = e.replace(/\+/g, "%20"),
                    -1 !== (n = e.indexOf("=")) && (r = e.substring(0, n),
                    i = e.substring(n + 1)),
                    P(r = me(r)) && (i = !P(i) || me(i),
                    o.call(t, r) ? q(t[r]) ? t[r].push(i) : t[r] = [t[r], i] : t[r] = i))
                }),
                t
            }
            function $e(e) {
                var t = [];
                return w(e, function(e, n) {
                    q(e) ? w(e, function(e) {
                        t.push(be(n, !0) + (!0 === e ? "" : "=" + be(e, !0)))
                    }) : t.push(be(n, !0) + (!0 === e ? "" : "=" + be(e, !0)))
                }),
                t.length ? t.join("&") : ""
            }
            function ye(e) {
                return be(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
            }
            function be(e, t) {
                return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
            }
            var we = ["ng-", "data-ng-", "ng:", "x-ng-"];
            var xe = function(e) {
                if (!e.currentScript)
                    return !0;
                var t = e.currentScript.getAttribute("src")
                  , n = e.createElement("a");
                if (n.href = t,
                e.location.origin === n.origin)
                    return !0;
                switch (n.protocol) {
                case "http:":
                case "https:":
                case "ftp:":
                case "blob:":
                case "file:":
                case "data:":
                    return !0;
                default:
                    return !1
                }
            }(t.document);
            function Ee(e, n) {
                var r, i, o = {};
                if (w(we, function(t) {
                    var n = t + "app";
                    !r && e.hasAttribute && e.hasAttribute(n) && (r = e,
                    i = e.getAttribute(n))
                }),
                w(we, function(t) {
                    var n, o = t + "app";
                    !r && (n = e.querySelector("[" + o.replace(":", "\\:") + "]")) && (r = n,
                    i = n.getAttribute(o))
                }),
                r) {
                    if (!xe)
                        return void t.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match.");
                    o.strictDi = null !== function(e, t) {
                        var n, r, i = we.length;
                        for (r = 0; r < i; ++r)
                            if (n = we[r] + t,
                            H(n = e.getAttribute(n)))
                                return n;
                        return null
                    }(r, "strict-di"),
                    n(r, i ? [i] : [], o)
                }
            }
            function Se(e, n, r) {
                L(r) || (r = {});
                r = A({
                    strictDi: !1
                }, r);
                var i = function() {
                    if ((e = c(e)).injector()) {
                        var i = e[0] === t.document ? "document" : ge(e);
                        throw v("btstrpd", "App already bootstrapped with this element '{0}'", i.replace(/</, "&lt;").replace(/>/, "&gt;"))
                    }
                    (n = n || []).unshift(["$provide", function(t) {
                        t.value("$rootElement", e)
                    }
                    ]),
                    r.debugInfoEnabled && n.push(["$compileProvider", function(e) {
                        e.debugInfoEnabled(!0)
                    }
                    ]),
                    n.unshift("ng");
                    var o = qt(n, r.strictDi);
                    return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(e, t, n, r) {
                        e.$apply(function() {
                            t.data("$injector", r),
                            n(t)(e)
                        })
                    }
                    ]),
                    o
                }
                  , o = /^NG_ENABLE_DEBUG_INFO!/
                  , a = /^NG_DEFER_BOOTSTRAP!/;
                if (t && o.test(t.name) && (r.debugInfoEnabled = !0,
                t.name = t.name.replace(o, "")),
                t && !a.test(t.name))
                    return i();
                t.name = t.name.replace(a, ""),
                $.resumeBootstrap = function(e) {
                    return w(e, function(e) {
                        n.push(e)
                    }),
                    i()
                }
                ,
                B($.resumeDeferredBootstrap) && $.resumeDeferredBootstrap()
            }
            function _e() {
                t.name = "NG_ENABLE_DEBUG_INFO!" + t.name,
                t.location.reload()
            }
            function ke(e) {
                var t = $.element(e).injector();
                if (!t)
                    throw v("test", "no injector found for element argument to getTestability");
                return t.get("$$testability")
            }
            var Ae = /[A-Z]/g;
            function Te(e, t) {
                return t = t || "_",
                e.replace(Ae, function(e, n) {
                    return (n ? t : "") + e.toLowerCase()
                })
            }
            var Oe = !1;
            function Ce(e, t, n) {
                if (!e)
                    throw v("areq", "Argument '{0}' is {1}", t || "?", n || "required");
                return e
            }
            function Ne(e, t, n) {
                return n && q(e) && (e = e[e.length - 1]),
                Ce(B(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)),
                e
            }
            function De(e, t) {
                if ("hasOwnProperty" === e)
                    throw v("badname", "hasOwnProperty is not a valid {0} name", t)
            }
            function Me(e, t, n) {
                if (!t)
                    return e;
                for (var r, i = t.split("."), o = e, a = i.length, s = 0; s < a; s++)
                    r = i[s],
                    e && (e = (o = e)[r]);
                return !n && B(e) ? ue(o, e) : e
            }
            function Ie(e) {
                for (var t, n = e[0], r = e[e.length - 1], i = 1; n !== r && (n = n.nextSibling); i++)
                    (t || e[i] !== n) && (t || (t = c(d.call(e, 0, i))),
                    t.push(n));
                return t || e
            }
            function je() {
                return Object.create(null)
            }
            var Re = 1
              , Pe = 3
              , Le = 8
              , Fe = 9
              , He = 11;
            function Ue(e, t) {
                if (q(e)) {
                    t = t || [];
                    for (var n = 0, r = e.length; n < r; n++)
                        t[n] = e[n]
                } else if (L(e))
                    for (var i in t = t || {},
                    e)
                        "$" === i.charAt(0) && "$" === i.charAt(1) || (t[i] = e[i]);
                return t || e
            }
            function Ve(e) {
                return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : R(e) ? "undefined" : "string" != typeof e ? function(e) {
                    var t = [];
                    return JSON.stringify(e, function(e, n) {
                        if (L(n = ce(e, n))) {
                            if (t.indexOf(n) >= 0)
                                return "...";
                            t.push(n)
                        }
                        return n
                    })
                }(e) : e
            }
            var qe = {
                full: "1.5.10",
                major: 1,
                minor: 5,
                dot: 10,
                codeName: "asynchronous-synchronization"
            };
            ct.expando = "ng339";
            var Be = ct.cache = {}
              , Ge = 1
              , We = function(e, t, n) {
                e.addEventListener(t, n, !1)
            }
              , ze = function(e, t, n) {
                e.removeEventListener(t, n, !1)
            };
            ct._data = function(e) {
                return this.cache[e[this.expando]] || {}
            }
            ;
            var Ye = /([:\-_]+(.))/g
              , Ke = /^moz([A-Z])/
              , Je = {
                mouseleave: "mouseout",
                mouseenter: "mouseover"
            }
              , Ze = n("jqLite");
            function Xe(e) {
                return e.replace(Ye, function(e, t, n, r) {
                    return r ? n.toUpperCase() : n
                }).replace(Ke, "Moz$1")
            }
            var Qe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
              , et = /<|&#?\w+;/
              , tt = /<([\w:-]+)/
              , nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
              , rt = {
                option: [1, '<select multiple="multiple">', "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            function it(e) {
                return !et.test(e)
            }
            function ot(e) {
                var t = e.nodeType;
                return t === Re || !t || t === Fe
            }
            function at(e, t) {
                var n, r, i, o, a = t.createDocumentFragment(), s = [];
                if (it(e))
                    s.push(t.createTextNode(e));
                else {
                    for (n = a.appendChild(t.createElement("div")),
                    r = (tt.exec(e) || ["", ""])[1].toLowerCase(),
                    i = rt[r] || rt._default,
                    n.innerHTML = i[1] + e.replace(nt, "<$1></$2>") + i[2],
                    o = i[0]; o--; )
                        n = n.lastChild;
                    s = ae(s, n.childNodes),
                    (n = a.firstChild).textContent = ""
                }
                return a.textContent = "",
                a.innerHTML = "",
                w(s, function(e) {
                    a.appendChild(e)
                }),
                a
            }
            function st(e, t) {
                var n = e.parentNode;
                n && n.replaceChild(t, e),
                t.appendChild(e)
            }
            rt.optgroup = rt.option,
            rt.tbody = rt.tfoot = rt.colgroup = rt.caption = rt.thead,
            rt.th = rt.td;
            var ut = t.Node.prototype.contains || function(e) {
                return !!(16 & this.compareDocumentPosition(e))
            }
            ;
            function ct(e) {
                if (e instanceof ct)
                    return e;
                var n, r, i, o;
                if (H(e) && (e = Z(e),
                n = !0),
                !(this instanceof ct)) {
                    if (n && "<" !== e.charAt(0))
                        throw Ze("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
                    return new ct(e)
                }
                yt(this, n ? (r = e,
                i = i || t.document,
                (o = Qe.exec(r)) ? [i.createElement(o[1])] : (o = at(r, i)) ? o.childNodes : []) : e)
            }
            function lt(e) {
                return e.cloneNode(!0)
            }
            function ft(e, t) {
                if (t || ht(e),
                e.querySelectorAll)
                    for (var n = e.querySelectorAll("*"), r = 0, i = n.length; r < i; r++)
                        ht(n[r])
            }
            function dt(e, t, n, r) {
                if (P(r))
                    throw Ze("offargs", "jqLite#off() does not support the `selector` argument");
                var i = pt(e)
                  , o = i && i.events
                  , a = i && i.handle;
                if (a)
                    if (t) {
                        var s = function(t) {
                            var r = o[t];
                            P(n) && te(r || [], n),
                            P(n) && r && r.length > 0 || (ze(e, t, a),
                            delete o[t])
                        };
                        w(t.split(" "), function(e) {
                            s(e),
                            Je[e] && s(Je[e])
                        })
                    } else
                        for (t in o)
                            "$destroy" !== t && ze(e, t, a),
                            delete o[t]
            }
            function ht(e, t) {
                var n = e.ng339
                  , r = n && Be[n];
                if (r) {
                    if (t)
                        return void delete r.data[t];
                    r.handle && (r.events.$destroy && r.handle({}, "$destroy"),
                    dt(e)),
                    delete Be[n],
                    e.ng339 = void 0
                }
            }
            function pt(e, t) {
                var n = e.ng339
                  , r = n && Be[n];
                return t && !r && (e.ng339 = n = ++Ge,
                r = Be[n] = {
                    events: {},
                    data: {},
                    handle: void 0
                }),
                r
            }
            function gt(e, t, n) {
                if (ot(e)) {
                    var r = P(n)
                      , i = !r && t && !L(t)
                      , o = !t
                      , a = pt(e, !i)
                      , s = a && a.data;
                    if (r)
                        s[t] = n;
                    else {
                        if (o)
                            return s;
                        if (i)
                            return s && s[t];
                        A(s, t)
                    }
                }
            }
            function mt(e, t) {
                return !!e.getAttribute && (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1
            }
            function vt(e, t) {
                t && e.setAttribute && w(t.split(" "), function(t) {
                    e.setAttribute("class", Z((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Z(t) + " ", " ")))
                })
            }
            function $t(e, t) {
                if (t && e.setAttribute) {
                    var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
                    w(t.split(" "), function(e) {
                        e = Z(e),
                        -1 === n.indexOf(" " + e + " ") && (n += e + " ")
                    }),
                    e.setAttribute("class", Z(n))
                }
            }
            function yt(e, t) {
                if (t)
                    if (t.nodeType)
                        e[e.length++] = t;
                    else {
                        var n = t.length;
                        if ("number" == typeof n && t.window !== t) {
                            if (n)
                                for (var r = 0; r < n; r++)
                                    e[e.length++] = t[r]
                        } else
                            e[e.length++] = t
                    }
            }
            function bt(e, t) {
                return wt(e, "$" + (t || "ngController") + "Controller")
            }
            function wt(e, t, n) {
                e.nodeType === Fe && (e = e.documentElement);
                for (var r = q(t) ? t : [t]; e; ) {
                    for (var i = 0, o = r.length; i < o; i++)
                        if (P(n = c.data(e, r[i])))
                            return n;
                    e = e.parentNode || e.nodeType === He && e.host
                }
            }
            function xt(e) {
                for (ft(e, !0); e.firstChild; )
                    e.removeChild(e.firstChild)
            }
            function Et(e, t) {
                t || ft(e);
                var n = e.parentNode;
                n && n.removeChild(e)
            }
            var St = ct.prototype = {
                ready: function(e) {
                    var n = !1;
                    function r() {
                        n || (n = !0,
                        e())
                    }
                    "complete" === t.document.readyState ? t.setTimeout(r) : (this.on("DOMContentLoaded", r),
                    ct(t).on("load", r))
                },
                toString: function() {
                    var e = [];
                    return w(this, function(t) {
                        e.push("" + t)
                    }),
                    "[" + e.join(", ") + "]"
                },
                eq: function(e) {
                    return c(e >= 0 ? this[e] : this[this.length + e])
                },
                length: 0,
                push: p,
                sort: [].sort,
                splice: [].splice
            }
              , _t = {};
            w("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(e) {
                _t[a(e)] = e
            });
            var kt = {};
            w("input,select,option,textarea,button,form,details".split(","), function(e) {
                kt[e] = !0
            });
            var At = {
                ngMinlength: "minlength",
                ngMaxlength: "maxlength",
                ngMin: "min",
                ngMax: "max",
                ngPattern: "pattern"
            };
            function Tt(e, t) {
                var n = _t[t.toLowerCase()];
                return n && kt[ee(e)] && n
            }
            function Ot(e, t, n) {
                n.call(e, t)
            }
            function Ct(e, t, n) {
                var r = t.relatedTarget;
                r && (r === e || ut.call(e, r)) || n.call(e, t)
            }
            function Nt() {
                this.$get = function() {
                    return A(ct, {
                        hasClass: function(e, t) {
                            return e.attr && (e = e[0]),
                            mt(e, t)
                        },
                        addClass: function(e, t) {
                            return e.attr && (e = e[0]),
                            $t(e, t)
                        },
                        removeClass: function(e, t) {
                            return e.attr && (e = e[0]),
                            vt(e, t)
                        }
                    })
                }
            }
            function Dt(e, t) {
                var n = e && e.$$hashKey;
                if (n)
                    return "function" == typeof n && (n = e.$$hashKey()),
                    n;
                var r = typeof e;
                return n = "function" === r || "object" === r && null !== e ? e.$$hashKey = r + ":" + (t || S)() : r + ":" + e
            }
            function Mt(e, t) {
                if (t) {
                    var n = 0;
                    this.nextUid = function() {
                        return ++n
                    }
                }
                w(e, this.put, this)
            }
            w({
                data: gt,
                removeData: ht,
                hasData: function(e) {
                    for (var t in Be[e.ng339])
                        return !0;
                    return !1
                },
                cleanData: function(e) {
                    for (var t = 0, n = e.length; t < n; t++)
                        ht(e[t])
                }
            }, function(e, t) {
                ct[t] = e
            }),
            w({
                data: gt,
                inheritedData: wt,
                scope: function(e) {
                    return c.data(e, "$scope") || wt(e.parentNode || e, ["$isolateScope", "$scope"])
                },
                isolateScope: function(e) {
                    return c.data(e, "$isolateScope") || c.data(e, "$isolateScopeNoTemplate")
                },
                controller: bt,
                injector: function(e) {
                    return wt(e, "$injector")
                },
                removeAttr: function(e, t) {
                    e.removeAttribute(t)
                },
                hasClass: mt,
                css: function(e, t, n) {
                    if (t = Xe(t),
                    !P(n))
                        return e.style[t];
                    e.style[t] = n
                },
                attr: function(e, t, n) {
                    var r = e.nodeType;
                    if (r !== Pe && 2 !== r && r !== Le) {
                        var i = a(t);
                        if (_t[i]) {
                            if (!P(n))
                                return e[t] || (e.attributes.getNamedItem(t) || D).specified ? i : void 0;
                            n ? (e[t] = !0,
                            e.setAttribute(t, i)) : (e[t] = !1,
                            e.removeAttribute(i))
                        } else if (P(n))
                            e.setAttribute(t, n);
                        else if (e.getAttribute) {
                            var o = e.getAttribute(t, 2);
                            return null === o ? void 0 : o
                        }
                    }
                },
                prop: function(e, t, n) {
                    if (!P(n))
                        return e[t];
                    e[t] = n
                },
                text: function() {
                    return e.$dv = "",
                    e;
                    function e(e, t) {
                        if (R(t)) {
                            var n = e.nodeType;
                            return n === Re || n === Pe ? e.textContent : ""
                        }
                        e.textContent = t
                    }
                }(),
                val: function(e, t) {
                    if (R(t)) {
                        if (e.multiple && "select" === ee(e)) {
                            var n = [];
                            return w(e.options, function(e) {
                                e.selected && n.push(e.value || e.text)
                            }),
                            0 === n.length ? null : n
                        }
                        return e.value
                    }
                    e.value = t
                },
                html: function(e, t) {
                    if (R(t))
                        return e.innerHTML;
                    ft(e, !0),
                    e.innerHTML = t
                },
                empty: xt
            }, function(e, t) {
                ct.prototype[t] = function(t, n) {
                    var r, i, o = this.length;
                    if (e !== xt && R(2 === e.length && e !== mt && e !== bt ? t : n)) {
                        if (L(t)) {
                            for (r = 0; r < o; r++)
                                if (e === gt)
                                    e(this[r], t);
                                else
                                    for (i in t)
                                        e(this[r], i, t[i]);
                            return this
                        }
                        for (var a = e.$dv, s = R(a) ? Math.min(o, 1) : o, u = 0; u < s; u++) {
                            var c = e(this[u], t, n);
                            a = a ? a + c : c
                        }
                        return a
                    }
                    for (r = 0; r < o; r++)
                        e(this[r], t, n);
                    return this
                }
            }),
            w({
                removeData: ht,
                on: function(e, t, n, r) {
                    if (P(r))
                        throw Ze("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
                    if (ot(e)) {
                        var i = pt(e, !0)
                          , o = i.events
                          , a = i.handle;
                        a || (a = i.handle = function(e, t) {
                            var n = function(n, r) {
                                n.isDefaultPrevented = function() {
                                    return n.defaultPrevented
                                }
                                ;
                                var i = t[r || n.type]
                                  , o = i ? i.length : 0;
                                if (o) {
                                    if (R(n.immediatePropagationStopped)) {
                                        var a = n.stopImmediatePropagation;
                                        n.stopImmediatePropagation = function() {
                                            n.immediatePropagationStopped = !0,
                                            n.stopPropagation && n.stopPropagation(),
                                            a && a.call(n)
                                        }
                                    }
                                    n.isImmediatePropagationStopped = function() {
                                        return !0 === n.immediatePropagationStopped
                                    }
                                    ;
                                    var s = i.specialHandlerWrapper || Ot;
                                    o > 1 && (i = Ue(i));
                                    for (var u = 0; u < o; u++)
                                        n.isImmediatePropagationStopped() || s(e, n, i[u])
                                }
                            };
                            return n.elem = e,
                            n
                        }(e, o));
                        for (var s = t.indexOf(" ") >= 0 ? t.split(" ") : [t], u = s.length, c = function(t, r, i) {
                            var s = o[t];
                            s || ((s = o[t] = []).specialHandlerWrapper = r,
                            "$destroy" === t || i || We(e, t, a)),
                            s.push(n)
                        }; u--; )
                            t = s[u],
                            Je[t] ? (c(Je[t], Ct),
                            c(t, void 0, !0)) : c(t)
                    }
                },
                off: dt,
                one: function(e, t, n) {
                    (e = c(e)).on(t, function r() {
                        e.off(t, n),
                        e.off(t, r)
                    }),
                    e.on(t, n)
                },
                replaceWith: function(e, t) {
                    var n, r = e.parentNode;
                    ft(e),
                    w(new ct(t), function(t) {
                        n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e),
                        n = t
                    })
                },
                children: function(e) {
                    var t = [];
                    return w(e.childNodes, function(e) {
                        e.nodeType === Re && t.push(e)
                    }),
                    t
                },
                contents: function(e) {
                    return e.contentDocument || e.childNodes || []
                },
                append: function(e, t) {
                    var n = e.nodeType;
                    if (n === Re || n === He)
                        for (var r = 0, i = (t = new ct(t)).length; r < i; r++) {
                            var o = t[r];
                            e.appendChild(o)
                        }
                },
                prepend: function(e, t) {
                    if (e.nodeType === Re) {
                        var n = e.firstChild;
                        w(new ct(t), function(t) {
                            e.insertBefore(t, n)
                        })
                    }
                },
                wrap: function(e, t) {
                    st(e, c(t).eq(0).clone()[0])
                },
                remove: Et,
                detach: function(e) {
                    Et(e, !0)
                },
                after: function(e, t) {
                    var n = e
                      , r = e.parentNode;
                    if (r)
                        for (var i = 0, o = (t = new ct(t)).length; i < o; i++) {
                            var a = t[i];
                            r.insertBefore(a, n.nextSibling),
                            n = a
                        }
                },
                addClass: $t,
                removeClass: vt,
                toggleClass: function(e, t, n) {
                    t && w(t.split(" "), function(t) {
                        var r = n;
                        R(r) && (r = !mt(e, t)),
                        (r ? $t : vt)(e, t)
                    })
                },
                parent: function(e) {
                    var t = e.parentNode;
                    return t && t.nodeType !== He ? t : null
                },
                next: function(e) {
                    return e.nextElementSibling
                },
                find: function(e, t) {
                    return e.getElementsByTagName ? e.getElementsByTagName(t) : []
                },
                clone: lt,
                triggerHandler: function(e, t, n) {
                    var r, i, o, a = t.type || t, s = pt(e), u = s && s.events, c = u && u[a];
                    c && (r = {
                        preventDefault: function() {
                            this.defaultPrevented = !0
                        },
                        isDefaultPrevented: function() {
                            return !0 === this.defaultPrevented
                        },
                        stopImmediatePropagation: function() {
                            this.immediatePropagationStopped = !0
                        },
                        isImmediatePropagationStopped: function() {
                            return !0 === this.immediatePropagationStopped
                        },
                        stopPropagation: D,
                        type: a,
                        target: e
                    },
                    t.type && (r = A(r, t)),
                    i = Ue(c),
                    o = n ? [r].concat(n) : [r],
                    w(i, function(t) {
                        r.isImmediatePropagationStopped() || t.apply(e, o)
                    }))
                }
            }, function(e, t) {
                ct.prototype[t] = function(t, n, r) {
                    for (var i, o = 0, a = this.length; o < a; o++)
                        R(i) ? P(i = e(this[o], t, n, r)) && (i = c(i)) : yt(i, e(this[o], t, n, r));
                    return P(i) ? i : this
                }
            }),
            ct.prototype.bind = ct.prototype.on,
            ct.prototype.unbind = ct.prototype.off,
            Mt.prototype = {
                put: function(e, t) {
                    this[Dt(e, this.nextUid)] = t
                },
                get: function(e) {
                    return this[Dt(e, this.nextUid)]
                },
                remove: function(e) {
                    var t = this[e = Dt(e, this.nextUid)];
                    return delete this[e],
                    t
                }
            };
            var It = [function() {
                this.$get = [function() {
                    return Mt
                }
                ]
            }
            ]
              , jt = /^([^(]+?)=>/
              , Rt = /^[^(]*\(\s*([^)]*)\)/m
              , Pt = /,/
              , Lt = /^\s*(_?)(\S+?)\1\s*$/
              , Ft = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm
              , Ht = n("$injector");
            function Ut(e) {
                return Function.prototype.toString.call(e) + " "
            }
            function Vt(e) {
                var t = Ut(e).replace(Ft, "");
                return t.match(jt) || t.match(Rt)
            }
            function qt(e, t) {
                t = !0 === t;
                var n = {}
                  , r = "Provider"
                  , i = []
                  , o = new Mt([],!0)
                  , a = {
                    $provide: {
                        provider: p(g),
                        factory: p(v),
                        service: p(function(e, t) {
                            return v(e, ["$injector", function(e) {
                                return e.instantiate(t)
                            }
                            ])
                        }),
                        value: p(function(e, t) {
                            return v(e, I(t), !1)
                        }),
                        constant: p(function(e, t) {
                            De(e, "constant"),
                            a[e] = t,
                            c[e] = t
                        }),
                        decorator: function(e, t) {
                            var n = s.get(e + r)
                              , i = n.$get;
                            n.$get = function() {
                                var e = d.invoke(i, n);
                                return d.invoke(t, null, {
                                    $delegate: e
                                })
                            }
                        }
                    }
                }
                  , s = a.$injector = y(a, function(e, t) {
                    throw $.isString(t) && i.push(t),
                    Ht("unpr", "Unknown provider: {0}", i.join(" <- "))
                })
                  , c = {}
                  , l = y(c, function(e, t) {
                    var n = s.get(e + r, t);
                    return d.invoke(n.$get, n, void 0, e)
                })
                  , d = l;
                a["$injector" + r] = {
                    $get: I(l)
                };
                var h = function e(t) {
                    Ce(R(t) || q(t), "modulesToLoad", "not an array");
                    var n, r = [];
                    w(t, function(t) {
                        if (!o.get(t)) {
                            o.put(t, !0);
                            try {
                                H(t) ? (n = f(t),
                                r = r.concat(e(n.requires)).concat(n._runBlocks),
                                i(n._invokeQueue),
                                i(n._configBlocks)) : B(t) ? r.push(s.invoke(t)) : q(t) ? r.push(s.invoke(t)) : Ne(t, "module")
                            } catch (e) {
                                throw q(t) && (t = t[t.length - 1]),
                                e.message && e.stack && -1 === e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack),
                                Ht("modulerr", "Failed to instantiate module {0} due to:\n{1}", t, e.stack || e.message || e)
                            }
                        }
                        function i(e) {
                            var t, n;
                            for (t = 0,
                            n = e.length; t < n; t++) {
                                var r = e[t]
                                  , i = s.get(r[0]);
                                i[r[1]].apply(i, r[2])
                            }
                        }
                    });
                    return r
                }(e);
                return (d = l.get("$injector")).strictDi = t,
                w(h, function(e) {
                    e && d.invoke(e)
                }),
                d;
                function p(e) {
                    return function(t, n) {
                        if (!L(t))
                            return e(t, n);
                        w(t, E(e))
                    }
                }
                function g(e, t) {
                    if (De(e, "service"),
                    (B(t) || q(t)) && (t = s.instantiate(t)),
                    !t.$get)
                        throw Ht("pget", "Provider '{0}' must define $get factory method.", e);
                    return a[e + r] = t
                }
                function m(e, t) {
                    return function() {
                        var n = d.invoke(t, this);
                        if (R(n))
                            throw Ht("undef", "Provider '{0}' must return a value from $get factory method.", e);
                        return n
                    }
                }
                function v(e, t, n) {
                    return g(e, {
                        $get: !1 !== n ? m(e, t) : t
                    })
                }
                function y(e, o) {
                    function s(t, r) {
                        if (e.hasOwnProperty(t)) {
                            if (e[t] === n)
                                throw Ht("cdep", "Circular dependency found: {0}", t + " <- " + i.join(" <- "));
                            return e[t]
                        }
                        try {
                            return i.unshift(t),
                            e[t] = n,
                            e[t] = o(t, r),
                            e[t]
                        } catch (r) {
                            throw e[t] === n && delete e[t],
                            r
                        } finally {
                            i.shift()
                        }
                    }
                    function c(e, n, r) {
                        for (var i = [], o = qt.$$annotate(e, t, r), a = 0, u = o.length; a < u; a++) {
                            var c = o[a];
                            if ("string" != typeof c)
                                throw Ht("itkn", "Incorrect injection token! Expected service name as string, got {0}", c);
                            i.push(n && n.hasOwnProperty(c) ? n[c] : s(c, r))
                        }
                        return i
                    }
                    return {
                        invoke: function(e, t, n, r) {
                            "string" == typeof n && (r = n,
                            n = null);
                            var i, o = c(e, n, r);
                            return q(e) && (e = e[e.length - 1]),
                            i = e,
                            u <= 11 || "function" != typeof i || !/^(?:class\b|constructor\()/.test(Ut(i)) ? e.apply(t, o) : (o.unshift(null),
                            new (Function.prototype.bind.apply(e, o)))
                        },
                        instantiate: function(e, t, n) {
                            var r = q(e) ? e[e.length - 1] : e
                              , i = c(e, t, n);
                            return i.unshift(null),
                            new (Function.prototype.bind.apply(r, i))
                        },
                        get: s,
                        annotate: qt.$$annotate,
                        has: function(t) {
                            return a.hasOwnProperty(t + r) || e.hasOwnProperty(t)
                        }
                    }
                }
            }
            function Bt() {
                var e = !0;
                this.disableAutoScrolling = function() {
                    e = !1
                }
                ,
                this.$get = ["$window", "$location", "$rootScope", function(n, r, i) {
                    var o = n.document;
                    function a(e) {
                        if (e) {
                            e.scrollIntoView();
                            var t = function() {
                                var e = s.yOffset;
                                if (B(e))
                                    e = e();
                                else if (Q(e)) {
                                    var t = e[0];
                                    e = "fixed" !== n.getComputedStyle(t).position ? 0 : t.getBoundingClientRect().bottom
                                } else
                                    U(e) || (e = 0);
                                return e
                            }();
                            if (t) {
                                var r = e.getBoundingClientRect().top;
                                n.scrollBy(0, r - t)
                            }
                        } else
                            n.scrollTo(0, 0)
                    }
                    function s(e) {
                        var t, n, i;
                        (e = H(e) ? e : U(e) ? e.toString() : r.hash()) ? (t = o.getElementById(e)) ? a(t) : (n = o.getElementsByName(e),
                        i = null,
                        Array.prototype.some.call(n, function(e) {
                            if ("a" === ee(e))
                                return i = e,
                                !0
                        }),
                        (t = i) ? a(t) : "top" === e && a(null)) : a(null)
                    }
                    return e && i.$watch(function() {
                        return r.hash()
                    }, function(e, n) {
                        var r, o;
                        e === n && "" === e || (r = function() {
                            i.$evalAsync(s)
                        }
                        ,
                        "complete" === (o = o || t).document.readyState ? o.setTimeout(r) : c(o).on("load", r))
                    }),
                    s
                }
                ]
            }
            qt.$$annotate = function(e, t, n) {
                var r, i;
                if ("function" == typeof e) {
                    if (!(r = e.$inject)) {
                        if (r = [],
                        e.length) {
                            if (t)
                                throw H(n) && n || (n = e.name || function(e) {
                                    var t = Vt(e);
                                    return t ? "function(" + (t[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
                                }(e)),
                                Ht("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
                            w(Vt(e)[1].split(Pt), function(e) {
                                e.replace(Lt, function(e, t, n) {
                                    r.push(n)
                                })
                            })
                        }
                        e.$inject = r
                    }
                } else
                    q(e) ? (Ne(e[i = e.length - 1], "fn"),
                    r = e.slice(0, i)) : Ne(e, "fn", !0);
                return r
            }
            ;
            var Gt = n("$animate")
              , Wt = 1;
            function zt(e, t) {
                return e || t ? e ? t ? (q(e) && (e = e.join(" ")),
                q(t) && (t = t.join(" ")),
                e + " " + t) : e : t : ""
            }
            function Yt(e) {
                return L(e) ? e : {}
            }
            var Kt = function() {
                this.$get = D
            }
              , Jt = function() {
                var e = new Mt
                  , t = [];
                this.$get = ["$$AnimateRunner", "$rootScope", function(n, r) {
                    return {
                        enabled: D,
                        on: D,
                        off: D,
                        pin: D,
                        push: function(a, s, u, c) {
                            c && c(),
                            (u = u || {}).from && a.css(u.from),
                            u.to && a.css(u.to),
                            (u.addClass || u.removeClass) && function(n, a, s) {
                                var u = e.get(n) || {}
                                  , c = i(u, a, !0)
                                  , l = i(u, s, !1);
                                (c || l) && (e.put(n, u),
                                t.push(n),
                                1 === t.length && r.$$postDigest(o))
                            }(a, u.addClass, u.removeClass);
                            var l = new n;
                            return l.complete(),
                            l
                        }
                    };
                    function i(e, t, n) {
                        var r = !1;
                        return t && w(t = H(t) ? t.split(" ") : q(t) ? t : [], function(t) {
                            t && (r = !0,
                            e[t] = n)
                        }),
                        r
                    }
                    function o() {
                        w(t, function(t) {
                            var n = e.get(t);
                            if (n) {
                                var r = function(e) {
                                    H(e) && (e = e.split(" "));
                                    var t = je();
                                    return w(e, function(e) {
                                        e.length && (t[e] = !0)
                                    }),
                                    t
                                }(t.attr("class"))
                                  , i = ""
                                  , o = "";
                                w(n, function(e, t) {
                                    e !== !!r[t] && (e ? i += (i.length ? " " : "") + t : o += (o.length ? " " : "") + t)
                                }),
                                w(t, function(e) {
                                    i && $t(e, i),
                                    o && vt(e, o)
                                }),
                                e.remove(t)
                            }
                        }),
                        t.length = 0
                    }
                }
                ]
            }
              , Zt = ["$provide", function(e) {
                var t = this;
                this.$$registeredAnimations = Object.create(null),
                this.register = function(n, r) {
                    if (n && "." !== n.charAt(0))
                        throw Gt("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
                    var i = n + "-animation";
                    t.$$registeredAnimations[n.substr(1)] = i,
                    e.factory(i, r)
                }
                ,
                this.classNameFilter = function(e) {
                    if (1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null,
                    this.$$classNameFilter && new RegExp("(\\s+|\\/)ng-animate(\\s+|\\/)").test(this.$$classNameFilter.toString())))
                        throw Gt("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', "ng-animate");
                    return this.$$classNameFilter
                }
                ,
                this.$get = ["$$animateQueue", function(e) {
                    function t(e, t, n) {
                        if (n) {
                            var r = function(e) {
                                for (var t = 0; t < e.length; t++) {
                                    var n = e[t];
                                    if (n.nodeType === Wt)
                                        return n
                                }
                            }(n);
                            !r || r.parentNode || r.previousElementSibling || (n = null)
                        }
                        n ? n.after(e) : t.prepend(e)
                    }
                    return {
                        on: e.on,
                        off: e.off,
                        pin: e.pin,
                        enabled: e.enabled,
                        cancel: function(e) {
                            e.end && e.end()
                        },
                        enter: function(n, r, i, o) {
                            return r = r && c(r),
                            i = i && c(i),
                            t(n, r = r || i.parent(), i),
                            e.push(n, "enter", Yt(o))
                        },
                        move: function(n, r, i, o) {
                            return r = r && c(r),
                            i = i && c(i),
                            t(n, r = r || i.parent(), i),
                            e.push(n, "move", Yt(o))
                        },
                        leave: function(t, n) {
                            return e.push(t, "leave", Yt(n), function() {
                                t.remove()
                            })
                        },
                        addClass: function(t, n, r) {
                            return (r = Yt(r)).addClass = zt(r.addclass, n),
                            e.push(t, "addClass", r)
                        },
                        removeClass: function(t, n, r) {
                            return (r = Yt(r)).removeClass = zt(r.removeClass, n),
                            e.push(t, "removeClass", r)
                        },
                        setClass: function(t, n, r, i) {
                            return (i = Yt(i)).addClass = zt(i.addClass, n),
                            i.removeClass = zt(i.removeClass, r),
                            e.push(t, "setClass", i)
                        },
                        animate: function(t, n, r, i, o) {
                            return (o = Yt(o)).from = o.from ? A(o.from, n) : n,
                            o.to = o.to ? A(o.to, r) : r,
                            i = i || "ng-inline-animate",
                            o.tempClasses = zt(o.tempClasses, i),
                            e.push(t, "animate", o)
                        }
                    }
                }
                ]
            }
            ]
              , Xt = function() {
                this.$get = ["$$rAF", function(e) {
                    var t = [];
                    function n(n) {
                        t.push(n),
                        t.length > 1 || e(function() {
                            for (var e = 0; e < t.length; e++)
                                t[e]();
                            t = []
                        })
                    }
                    return function() {
                        var e = !1;
                        return n(function() {
                            e = !0
                        }),
                        function(t) {
                            e ? t() : n(t)
                        }
                    }
                }
                ]
            }
              , Qt = function() {
                this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function(e, t, n, r, i) {
                    function o(e) {
                        this.setHost(e);
                        var t = n();
                        this._doneCallbacks = [],
                        this._tick = function(e) {
                            var n = r[0];
                            n && n.hidden ? function(e) {
                                i(e, 0, !1)
                            }(e) : t(e)
                        }
                        ,
                        this._state = 0
                    }
                    return o.chain = function(e, t) {
                        var n = 0;
                        !function r() {
                            if (n === e.length)
                                return void t(!0);
                            e[n](function(e) {
                                !1 !== e ? (n++,
                                r()) : t(!1)
                            })
                        }()
                    }
                    ,
                    o.all = function(e, t) {
                        var n = 0
                          , r = !0;
                        function i(i) {
                            r = r && i,
                            ++n === e.length && t(r)
                        }
                        w(e, function(e) {
                            e.done(i)
                        })
                    }
                    ,
                    o.prototype = {
                        setHost: function(e) {
                            this.host = e || {}
                        },
                        done: function(e) {
                            2 === this._state ? e() : this._doneCallbacks.push(e)
                        },
                        progress: D,
                        getPromise: function() {
                            if (!this.promise) {
                                var t = this;
                                this.promise = e(function(e, n) {
                                    t.done(function(t) {
                                        !1 === t ? n() : e()
                                    })
                                })
                            }
                            return this.promise
                        },
                        then: function(e, t) {
                            return this.getPromise().then(e, t)
                        },
                        catch: function(e) {
                            return this.getPromise().catch(e)
                        },
                        finally: function(e) {
                            return this.getPromise().finally(e)
                        },
                        pause: function() {
                            this.host.pause && this.host.pause()
                        },
                        resume: function() {
                            this.host.resume && this.host.resume()
                        },
                        end: function() {
                            this.host.end && this.host.end(),
                            this._resolve(!0)
                        },
                        cancel: function() {
                            this.host.cancel && this.host.cancel(),
                            this._resolve(!1)
                        },
                        complete: function(e) {
                            var t = this;
                            0 === t._state && (t._state = 1,
                            t._tick(function() {
                                t._resolve(e)
                            }))
                        },
                        _resolve: function(e) {
                            2 !== this._state && (w(this._doneCallbacks, function(t) {
                                t(e)
                            }),
                            this._doneCallbacks.length = 0,
                            this._state = 2)
                        }
                    },
                    o
                }
                ]
            }
              , en = function() {
                this.$get = ["$$rAF", "$q", "$$AnimateRunner", function(e, t, n) {
                    return function(t, r) {
                        var i = r || {};
                        i.$$prepared || (i = ne(i)),
                        i.cleanupStyles && (i.from = i.to = null),
                        i.from && (t.css(i.from),
                        i.from = null);
                        var o, a = new n;
                        return {
                            start: s,
                            end: s
                        };
                        function s() {
                            return e(function() {
                                !function() {
                                    i.addClass && (t.addClass(i.addClass),
                                    i.addClass = null);
                                    i.removeClass && (t.removeClass(i.removeClass),
                                    i.removeClass = null);
                                    i.to && (t.css(i.to),
                                    i.to = null)
                                }(),
                                o || a.complete(),
                                o = !0
                            }),
                            a
                        }
                    }
                }
                ]
            };
            function tn(e, t, n, r) {
                var i = this
                  , o = e.location
                  , a = e.history
                  , s = e.setTimeout
                  , u = e.clearTimeout
                  , l = {};
                i.isMock = !1;
                var f = 0
                  , d = [];
                function h(e) {
                    try {
                        e.apply(null, se(arguments, 1))
                    } finally {
                        if (0 === --f)
                            for (; d.length; )
                                try {
                                    d.pop()()
                                } catch (e) {
                                    n.error(e)
                                }
                    }
                }
                i.$$completeOutstandingRequest = h,
                i.$$incOutstandingRequestCount = function() {
                    f++
                }
                ,
                i.notifyWhenNoOutstandingRequests = function(e) {
                    0 === f ? e() : d.push(e)
                }
                ;
                var p, g, m = o.href, v = t.find("base"), $ = null, y = r.history ? function() {
                    try {
                        return a.state
                    } catch (e) {}
                }
                : D;
                _(),
                g = p,
                i.url = function(t, n, s) {
                    if (R(s) && (s = null),
                    o !== e.location && (o = e.location),
                    a !== e.history && (a = e.history),
                    t) {
                        var u = g === s;
                        if (m === t && (!r.history || u))
                            return i;
                        var c = m && Xn(m) === Xn(t);
                        return m = t,
                        g = s,
                        !r.history || c && u ? (c || ($ = t),
                        n ? o.replace(t) : c ? o.hash = function(e) {
                            var t = e.indexOf("#");
                            return -1 === t ? "" : e.substr(t)
                        }(t) : o.href = t,
                        o.href !== t && ($ = t)) : (a[n ? "replaceState" : "pushState"](s, "", t),
                        _(),
                        g = p),
                        $ && ($ = t),
                        i
                    }
                    return $ || o.href.replace(/%27/g, "'")
                }
                ,
                i.state = function() {
                    return p
                }
                ;
                var b = []
                  , x = !1;
                function E() {
                    $ = null,
                    _(),
                    k()
                }
                var S = null;
                function _() {
                    re(p = R(p = y()) ? null : p, S) && (p = S),
                    S = p
                }
                function k() {
                    m === i.url() && g === p || (m = i.url(),
                    g = p,
                    w(b, function(e) {
                        e(i.url(), p)
                    }))
                }
                i.onUrlChange = function(t) {
                    return x || (r.history && c(e).on("popstate", E),
                    c(e).on("hashchange", E),
                    x = !0),
                    b.push(t),
                    t
                }
                ,
                i.$$applicationDestroyed = function() {
                    c(e).off("hashchange popstate", E)
                }
                ,
                i.$$checkUrlChange = k,
                i.baseHref = function() {
                    var e = v.attr("href");
                    return e ? e.replace(/^(https?:)?\/\/[^\/]*/, "") : ""
                }
                ,
                i.defer = function(e, t) {
                    var n;
                    return f++,
                    n = s(function() {
                        delete l[n],
                        h(e)
                    }, t || 0),
                    l[n] = !0,
                    n
                }
                ,
                i.defer.cancel = function(e) {
                    return !!l[e] && (delete l[e],
                    u(e),
                    h(D),
                    !0)
                }
            }
            function nn() {
                this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, n, r) {
                    return new tn(e,r,t,n)
                }
                ]
            }
            function rn() {
                this.$get = function() {
                    var e = {};
                    function t(t, r) {
                        if (t in e)
                            throw n("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
                        var i = 0
                          , o = A({}, r, {
                            id: t
                        })
                          , a = je()
                          , s = r && r.capacity || Number.MAX_VALUE
                          , u = je()
                          , c = null
                          , l = null;
                        return e[t] = {
                            put: function(e, t) {
                                if (!R(t)) {
                                    if (s < Number.MAX_VALUE)
                                        f(u[e] || (u[e] = {
                                            key: e
                                        }));
                                    return e in a || i++,
                                    a[e] = t,
                                    i > s && this.remove(l.key),
                                    t
                                }
                            },
                            get: function(e) {
                                if (s < Number.MAX_VALUE) {
                                    var t = u[e];
                                    if (!t)
                                        return;
                                    f(t)
                                }
                                return a[e]
                            },
                            remove: function(e) {
                                if (s < Number.MAX_VALUE) {
                                    var t = u[e];
                                    if (!t)
                                        return;
                                    t === c && (c = t.p),
                                    t === l && (l = t.n),
                                    d(t.n, t.p),
                                    delete u[e]
                                }
                                e in a && (delete a[e],
                                i--)
                            },
                            removeAll: function() {
                                a = je(),
                                i = 0,
                                u = je(),
                                c = l = null
                            },
                            destroy: function() {
                                a = null,
                                o = null,
                                u = null,
                                delete e[t]
                            },
                            info: function() {
                                return A({}, o, {
                                    size: i
                                })
                            }
                        };
                        function f(e) {
                            e !== c && (l ? l === e && (l = e.n) : l = e,
                            d(e.n, e.p),
                            d(e, c),
                            (c = e).n = null)
                        }
                        function d(e, t) {
                            e !== t && (e && (e.p = t),
                            t && (t.n = e))
                        }
                    }
                    return t.info = function() {
                        var t = {};
                        return w(e, function(e, n) {
                            t[n] = e.info()
                        }),
                        t
                    }
                    ,
                    t.get = function(t) {
                        return e[t]
                    }
                    ,
                    t
                }
            }
            function on() {
                this.$get = ["$cacheFactory", function(e) {
                    return e("templates")
                }
                ]
            }
            var an = n("$compile");
            var sn = new function() {}
            ;
            function un(e, n) {
                var r = {}
                  , i = "Directive"
                  , s = /^\s*directive:\s*([\w-]+)\s+(.*)$/
                  , l = /(([\w-]+)(?::([^;]+))?;?)/
                  , f = function(e) {
                    var t, n = {}, r = e.split(",");
                    for (t = 0; t < r.length; t++)
                        n[r[t]] = !0;
                    return n
                }("ngSrc,ngSrcset,src,srcset")
                  , d = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/
                  , h = /^(on[a-z]+|formaction)$/
                  , p = je();
                function m(e, t, n) {
                    var r = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/
                      , i = je();
                    return w(e, function(e, o) {
                        if (e in p)
                            i[o] = p[e];
                        else {
                            var a = e.match(r);
                            if (!a)
                                throw an("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", t, o, e, n ? "controller bindings definition" : "isolate scope definition");
                            i[o] = {
                                mode: a[1][0],
                                collection: "*" === a[2],
                                optional: "?" === a[3],
                                attrName: a[4] || o
                            },
                            a[4] && (p[e] = i[o])
                        }
                    }),
                    i
                }
                function v(e, t) {
                    var n = {
                        isolateScope: null,
                        bindToController: null
                    };
                    if (L(e.scope) && (!0 === e.bindToController ? (n.bindToController = m(e.scope, t, !0),
                    n.isolateScope = {}) : n.isolateScope = m(e.scope, t, !1)),
                    L(e.bindToController) && (n.bindToController = m(e.bindToController, t, !0)),
                    n.bindToController && !e.controller)
                        throw an("noctrl", "Cannot bind to controller without directive '{0}'s controller.", t);
                    return n
                }
                this.directive = function t(n, o) {
                    return Ce(n, "name"),
                    De(n, "directive"),
                    H(n) ? (!function(e) {
                        var t = e.charAt(0);
                        if (!t || t !== a(t))
                            throw an("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", e);
                        if (e !== e.trim())
                            throw an("baddir", "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", e)
                    }(n),
                    Ce(o, "directiveFactory"),
                    r.hasOwnProperty(n) || (r[n] = [],
                    e.factory(n + i, ["$injector", "$exceptionHandler", function(e, t) {
                        var i = [];
                        return w(r[n], function(r, o) {
                            try {
                                var a = e.invoke(r);
                                B(a) ? a = {
                                    compile: I(a)
                                } : !a.compile && a.link && (a.compile = I(a.link)),
                                a.priority = a.priority || 0,
                                a.index = o,
                                a.name = a.name || n,
                                a.require = function(e) {
                                    var t = e.require || e.controller && e.name;
                                    return !q(t) && L(t) && w(t, function(e, n) {
                                        var r = e.match(d);
                                        e.substring(r[0].length) || (t[n] = r[0] + n)
                                    }),
                                    t
                                }(a),
                                a.restrict = function(e, t) {
                                    if (e && (!H(e) || !/[EACM]/.test(e)))
                                        throw an("badrestrict", "Restrict property '{0}' of directive '{1}' is invalid", e, t);
                                    return e || "EA"
                                }(a.restrict, n),
                                a.$$moduleName = r.$$moduleName,
                                i.push(a)
                            } catch (e) {
                                t(e)
                            }
                        }),
                        i
                    }
                    ])),
                    r[n].push(o)) : w(n, E(t)),
                    this
                }
                ,
                this.component = function(e, t) {
                    var n = t.controller || function() {}
                    ;
                    function r(e) {
                        function r(t) {
                            return B(t) || q(t) ? function(n, r) {
                                return e.invoke(t, this, {
                                    $element: n,
                                    $attrs: r
                                })
                            }
                            : t
                        }
                        var i = t.template || t.templateUrl ? t.template : ""
                          , o = {
                            controller: n,
                            controllerAs: mn(t.controller) || t.controllerAs || "$ctrl",
                            template: r(i),
                            templateUrl: r(t.templateUrl),
                            transclude: t.transclude,
                            scope: {},
                            bindToController: t.bindings || {},
                            restrict: "E",
                            require: t.require
                        };
                        return w(t, function(e, t) {
                            "$" === t.charAt(0) && (o[t] = e)
                        }),
                        o
                    }
                    return w(t, function(e, t) {
                        "$" === t.charAt(0) && (r[t] = e,
                        B(n) && (n[t] = e))
                    }),
                    r.$inject = ["$injector"],
                    this.directive(e, r)
                }
                ,
                this.aHrefSanitizationWhitelist = function(e) {
                    return P(e) ? (n.aHrefSanitizationWhitelist(e),
                    this) : n.aHrefSanitizationWhitelist()
                }
                ,
                this.imgSrcSanitizationWhitelist = function(e) {
                    return P(e) ? (n.imgSrcSanitizationWhitelist(e),
                    this) : n.imgSrcSanitizationWhitelist()
                }
                ;
                var $ = !0;
                this.debugInfoEnabled = function(e) {
                    return P(e) ? ($ = e,
                    this) : $
                }
                ;
                var y = !0;
                this.preAssignBindingsEnabled = function(e) {
                    return P(e) ? (y = e,
                    this) : y
                }
                ;
                var b = 10;
                this.onChangesTtl = function(e) {
                    return arguments.length ? (b = e,
                    this) : b
                }
                ;
                var x = !0;
                this.commentDirectivesEnabled = function(e) {
                    return arguments.length ? (x = e,
                    this) : x
                }
                ;
                var S = !0;
                this.cssClassDirectivesEnabled = function(e) {
                    return arguments.length ? (S = e,
                    this) : S
                }
                ,
                this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function(e, n, p, m, E, _, k, T, O, C) {
                    var I, j = /^\w/, F = t.document.createElement("div"), U = x, V = S, G = b;
                    function W() {
                        try {
                            if (!--G)
                                throw I = void 0,
                                an("infchng", "{0} $onChanges() iterations reached. Aborting!\n", b);
                            k.$apply(function() {
                                for (var e = [], t = 0, n = I.length; t < n; ++t)
                                    try {
                                        I[t]()
                                    } catch (t) {
                                        e.push(t)
                                    }
                                if (I = void 0,
                                e.length)
                                    throw e
                            })
                        } finally {
                            G++
                        }
                    }
                    function K(e, t) {
                        if (t) {
                            var n, r, i, o = Object.keys(t);
                            for (n = 0,
                            r = o.length; n < r; n++)
                                this[i = o[n]] = t[i]
                        } else
                            this.$attr = {};
                        this.$$element = e
                    }
                    function J(e, t) {
                        try {
                            e.addClass(t)
                        } catch (e) {}
                    }
                    K.prototype = {
                        $normalize: fn,
                        $addClass: function(e) {
                            e && e.length > 0 && O.addClass(this.$$element, e)
                        },
                        $removeClass: function(e) {
                            e && e.length > 0 && O.removeClass(this.$$element, e)
                        },
                        $updateClass: function(e, t) {
                            var n = dn(e, t);
                            n && n.length && O.addClass(this.$$element, n);
                            var r = dn(t, e);
                            r && r.length && O.removeClass(this.$$element, r)
                        },
                        $set: function(e, t, n, r) {
                            var i, o = Tt(this.$$element[0], e), a = At[e], s = e;
                            if (o ? (this.$$element.prop(e, t),
                            r = o) : a && (this[a] = t,
                            s = a),
                            this[e] = t,
                            r ? this.$attr[e] = r : (r = this.$attr[e]) || (this.$attr[e] = r = Te(e, "-")),
                            "a" === (i = ee(this.$$element)) && ("href" === e || "xlinkHref" === e) || "img" === i && "src" === e)
                                this[e] = t = C(t, "src" === e);
                            else if ("img" === i && "srcset" === e && P(t)) {
                                for (var u = "", c = Z(t), l = /\s/.test(c) ? /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/ : /(,)/, f = c.split(l), d = Math.floor(f.length / 2), h = 0; h < d; h++) {
                                    var g = 2 * h;
                                    u += C(Z(f[g]), !0),
                                    u += " " + Z(f[g + 1])
                                }
                                var m = Z(f[2 * h]).split(/\s/);
                                u += C(Z(m[0]), !0),
                                2 === m.length && (u += " " + Z(m[1])),
                                this[e] = t = u
                            }
                            !1 !== n && (null === t || R(t) ? this.$$element.removeAttr(r) : j.test(r) ? this.$$element.attr(r, t) : function(e, t, n) {
                                F.innerHTML = "<span " + t + ">";
                                var r = F.firstChild.attributes
                                  , i = r[0];
                                r.removeNamedItem(i.name),
                                i.value = n,
                                e.attributes.setNamedItem(i)
                            }(this.$$element[0], r, t));
                            var v = this.$$observers;
                            v && w(v[s], function(e) {
                                try {
                                    e(t)
                                } catch (e) {
                                    p(e)
                                }
                            })
                        },
                        $observe: function(e, t) {
                            var n = this
                              , r = n.$$observers || (n.$$observers = je())
                              , i = r[e] || (r[e] = []);
                            return i.push(t),
                            k.$evalAsync(function() {
                                i.$$inter || !n.hasOwnProperty(e) || R(n[e]) || t(n[e])
                            }),
                            function() {
                                te(i, t)
                            }
                        }
                    };
                    var X = n.startSymbol()
                      , Q = n.endSymbol()
                      , ne = "{{" === X && "}}" === Q ? M : function(e) {
                        return e.replace(/\{\{/g, X).replace(/}}/g, Q)
                    }
                      , ie = /^ngAttr[A-Z]/
                      , oe = /^(.+)Start$/;
                    return ae.$$addBindingInfo = $ ? function(e, t) {
                        var n = e.data("$binding") || [];
                        q(t) ? n = n.concat(t) : n.push(t),
                        e.data("$binding", n)
                    }
                    : D,
                    ae.$$addBindingClass = $ ? function(e) {
                        J(e, "ng-binding")
                    }
                    : D,
                    ae.$$addScopeInfo = $ ? function(e, t, n, r) {
                        var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                        e.data(i, t)
                    }
                    : D,
                    ae.$$addScopeClass = $ ? function(e, t) {
                        J(e, t ? "ng-isolate-scope" : "ng-scope")
                    }
                    : D,
                    ae.$$createComment = function(e, n) {
                        var r = "";
                        return $ && (r = " " + (e || "") + ": ",
                        n && (r += n + " ")),
                        t.document.createComment(r)
                    }
                    ,
                    ae;
                    function ae(e, n, r, i, o) {
                        e instanceof c || (e = c(e));
                        for (var a = /\S+/, s = 0, u = e.length; s < u; s++) {
                            var l = e[s];
                            l.nodeType === Pe && l.nodeValue.match(a) && st(l, e[s] = t.document.createElement("span"))
                        }
                        var f = ce(e, n, e, r, i, o);
                        ae.$$addScopeClass(e);
                        var d = null;
                        return function(t, n, r) {
                            Ce(t, "scope"),
                            o && o.needsNewScope && (t = t.$parent.$new());
                            var i, a, s, u = (r = r || {}).parentBoundTranscludeFn, l = r.transcludeControllers, h = r.futureParentElement;
                            if (u && u.$$boundTransclude && (u = u.$$boundTransclude),
                            d || (a = (i = h) && i[0],
                            d = a && "foreignobject" !== ee(a) && g.call(a).match(/SVG/) ? "svg" : "html"),
                            s = "html" !== d ? c(_e(d, c("<div>").append(e).html())) : n ? St.clone.call(e) : e,
                            l)
                                for (var p in l)
                                    s.data("$" + p + "Controller", l[p].instance);
                            return ae.$$addScopeInfo(s, t),
                            n && n(s, t),
                            f && f(t, s, s, u),
                            s
                        }
                    }
                    function ce(e, t, n, r, i, o) {
                        for (var a, s, u, l, f, d, h, p = [], g = 0; g < e.length; g++)
                            a = new K,
                            (u = (s = fe(e[g], [], a, 0 === g ? r : void 0, i)).length ? me(s, e[g], a, t, n, null, [], [], o) : null) && u.scope && ae.$$addScopeClass(a.$$element),
                            f = u && u.terminal || !(l = e[g].childNodes) || !l.length ? null : ce(l, u ? (u.transcludeOnThisElement || !u.templateOnThisElement) && u.transclude : t),
                            (u || f) && (p.push(g, u, f),
                            d = !0,
                            h = h || u),
                            o = null;
                        return d ? function(e, n, r, i) {
                            var o, a, s, u, l, f, d, g, m;
                            if (h) {
                                var v = n.length;
                                for (m = new Array(v),
                                l = 0; l < p.length; l += 3)
                                    d = p[l],
                                    m[d] = n[d]
                            } else
                                m = n;
                            for (l = 0,
                            f = p.length; l < f; )
                                s = m[p[l++]],
                                o = p[l++],
                                a = p[l++],
                                o ? (o.scope ? (u = e.$new(),
                                ae.$$addScopeInfo(c(s), u)) : u = e,
                                g = o.transcludeOnThisElement ? le(e, o.transclude, i) : !o.templateOnThisElement && i ? i : !i && t ? le(e, t) : null,
                                o(a, u, s, r, g)) : a && a(e, s.childNodes, void 0, i)
                        }
                        : null
                    }
                    function le(e, t, n) {
                        function r(r, i, o, a, s) {
                            return r || ((r = e.$new(!1, s)).$$transcluded = !0),
                            t(r, i, {
                                parentBoundTranscludeFn: n,
                                transcludeControllers: o,
                                futureParentElement: a
                            })
                        }
                        var i = r.$$slots = je();
                        for (var o in t.$$slots)
                            t.$$slots[o] ? i[o] = le(e, t.$$slots[o], n) : i[o] = null;
                        return r
                    }
                    function fe(e, t, r, i, o) {
                        var a, c, f, d = e.nodeType, h = r.$attr;
                        switch (d) {
                        case Re:
                            ye(t, fn(c = ee(e)), "E", i, o);
                            for (var p, g, m, v, $, y, b = e.attributes, w = 0, x = b && b.length; w < x; w++) {
                                var E = !1
                                  , S = !1;
                                g = (p = b[w]).name,
                                $ = Z(p.value),
                                v = fn(g),
                                (y = ie.test(v)) && (g = g.replace(ln, "").substr(8).replace(/_(.)/g, function(e, t) {
                                    return t.toUpperCase()
                                }));
                                var _ = v.match(oe);
                                _ && be(_[1]) && (E = g,
                                S = g.substr(0, g.length - 5) + "end",
                                g = g.substr(0, g.length - 6)),
                                h[m = fn(g.toLowerCase())] = g,
                                !y && r.hasOwnProperty(m) || (r[m] = $,
                                Tt(e, m) && (r[m] = !0)),
                                ke(e, t, $, m, y),
                                ye(t, m, "A", i, o, E, S)
                            }
                            if ("input" === c && "hidden" === e.getAttribute("type") && e.setAttribute("autocomplete", "off"),
                            !V)
                                break;
                            if (L(f = e.className) && (f = f.animVal),
                            H(f) && "" !== f)
                                for (; a = l.exec(f); )
                                    ye(t, m = fn(a[2]), "C", i, o) && (r[m] = Z(a[3])),
                                    f = f.substr(a.index + a[0].length);
                            break;
                        case Pe:
                            if (11 === u)
                                for (; e.parentNode && e.nextSibling && e.nextSibling.nodeType === Pe; )
                                    e.nodeValue = e.nodeValue + e.nextSibling.nodeValue,
                                    e.parentNode.removeChild(e.nextSibling);
                            !function(e, t) {
                                var r = n(t, !0);
                                r && e.push({
                                    priority: 0,
                                    compile: function(e) {
                                        var t = e.parent()
                                          , n = !!t.length;
                                        return n && ae.$$addBindingClass(t),
                                        function(e, t) {
                                            var i = t.parent();
                                            n || ae.$$addBindingClass(i),
                                            ae.$$addBindingInfo(i, r.expressions),
                                            e.$watch(r, function(e) {
                                                t[0].nodeValue = e
                                            })
                                        }
                                    }
                                })
                            }(t, e.nodeValue);
                            break;
                        case Le:
                            if (!U)
                                break;
                            !function(e, t, n, r, i) {
                                try {
                                    var o = s.exec(e.nodeValue);
                                    if (o) {
                                        var a = fn(o[1]);
                                        ye(t, a, "M", r, i) && (n[a] = Z(o[2]))
                                    }
                                } catch (e) {}
                            }(e, t, r, i, o)
                        }
                        return t.sort(Ee),
                        t
                    }
                    function de(e, t, n) {
                        var r = []
                          , i = 0;
                        if (t && e.hasAttribute && e.hasAttribute(t))
                            do {
                                if (!e)
                                    throw an("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
                                e.nodeType === Re && (e.hasAttribute(t) && i++,
                                e.hasAttribute(n) && i--),
                                r.push(e),
                                e = e.nextSibling
                            } while (i > 0);
                        else
                            r.push(e);
                        return c(r)
                    }
                    function he(e, t, n) {
                        return function(r, i, o, a, s) {
                            return i = de(i[0], t, n),
                            e(r, i, o, a, s)
                        }
                    }
                    function pe(e, t, n, r, i, o) {
                        var a;
                        return e ? ae(t, n, r, i, o) : function() {
                            return a || (a = ae(t, n, r, i, o),
                            t = n = o = null),
                            a.apply(this, arguments)
                        }
                    }
                    function me(e, t, n, r, i, o, a, s, u) {
                        u = u || {};
                        for (var l, f, d, h, g, m = -Number.MAX_VALUE, v = u.newScopeDirective, $ = u.controllerDirectives, b = u.newIsolateScopeDirective, x = u.templateDirective, E = u.nonTlbTranscludeDirective, S = !1, k = !1, T = u.hasElementTranscludeDirective, O = n.$$element = c(t), C = o, N = r, D = !1, M = !1, I = 0, j = e.length; I < j; I++) {
                            var P = (l = e[I]).$$start
                              , F = l.$$end;
                            if (P && (O = de(t, P, F)),
                            d = void 0,
                            m > l.priority)
                                break;
                            if ((g = l.scope) && (l.templateUrl || (L(g) ? (Se("new/isolated scope", b || v, l, O),
                            b = l) : Se("new/isolated scope", b, l, O)),
                            v = v || l),
                            f = l.name,
                            !D && (l.replace && (l.templateUrl || l.template) || l.transclude && !l.$$tlb)) {
                                for (var H, U = I + 1; H = e[U++]; )
                                    if (H.transclude && !H.$$tlb || H.replace && (H.templateUrl || H.template)) {
                                        M = !0;
                                        break
                                    }
                                D = !0
                            }
                            if (!l.templateUrl && l.controller && ($ = $ || je(),
                            Se("'" + f + "' controller", $[f], l, O),
                            $[f] = l),
                            g = l.transclude)
                                if (S = !0,
                                l.$$tlb || (Se("transclusion", E, l, O),
                                E = l),
                                "element" === g)
                                    T = !0,
                                    m = l.priority,
                                    d = O,
                                    O = n.$$element = c(ae.$$createComment(f, n[f])),
                                    t = O[0],
                                    Ae(i, se(d), t),
                                    d[0].$$parentNode = d[0].parentNode,
                                    N = pe(M, d, r, m, C && C.name, {
                                        nonTlbTranscludeDirective: E
                                    });
                                else {
                                    var V = je();
                                    if (d = c(lt(t)).contents(),
                                    L(g)) {
                                        d = [];
                                        var G = je()
                                          , W = je();
                                        for (var Y in w(g, function(e, t) {
                                            var n = "?" === e.charAt(0);
                                            e = n ? e.substring(1) : e,
                                            G[e] = t,
                                            V[t] = null,
                                            W[t] = n
                                        }),
                                        w(O.contents(), function(e) {
                                            var t = G[fn(ee(e))];
                                            t ? (W[t] = !0,
                                            V[t] = V[t] || [],
                                            V[t].push(e)) : d.push(e)
                                        }),
                                        w(W, function(e, t) {
                                            if (!e)
                                                throw an("reqslot", "Required transclusion slot `{0}` was not filled.", t)
                                        }),
                                        V)
                                            V[Y] && (V[Y] = pe(M, V[Y], r))
                                    }
                                    O.empty(),
                                    (N = pe(M, d, r, void 0, void 0, {
                                        needsNewScope: l.$$isolateScope || l.$$newScope
                                    })).$$slots = V
                                }
                            if (l.template)
                                if (k = !0,
                                Se("template", x, l, O),
                                x = l,
                                g = B(l.template) ? l.template(O, n) : l.template,
                                g = ne(g),
                                l.replace) {
                                    if (C = l,
                                    d = it(g) ? [] : hn(_e(l.templateNamespace, Z(g))),
                                    t = d[0],
                                    1 !== d.length || t.nodeType !== Re)
                                        throw an("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", f, "");
                                    Ae(i, O, t);
                                    var J = {
                                        $attr: {}
                                    }
                                      , X = fe(t, [], J)
                                      , Q = e.splice(I + 1, e.length - (I + 1));
                                    (b || v) && $e(X, b, v),
                                    e = e.concat(X).concat(Q),
                                    we(n, J),
                                    j = e.length
                                } else
                                    O.html(g);
                            if (l.templateUrl)
                                k = !0,
                                Se("template", x, l, O),
                                x = l,
                                l.replace && (C = l),
                                ie = xe(e.splice(I, e.length - I), O, n, i, S && N, a, s, {
                                    controllerDirectives: $,
                                    newScopeDirective: v !== l && v,
                                    newIsolateScopeDirective: b,
                                    templateDirective: x,
                                    nonTlbTranscludeDirective: E
                                }),
                                j = e.length;
                            else if (l.compile)
                                try {
                                    h = l.compile(O, n, N);
                                    var te = l.$$originalDirective || l;
                                    B(h) ? re(null, ue(te, h), P, F) : h && re(ue(te, h.pre), ue(te, h.post), P, F)
                                } catch (e) {
                                    p(e, ge(O))
                                }
                            l.terminal && (ie.terminal = !0,
                            m = Math.max(m, l.priority))
                        }
                        return ie.scope = v && !0 === v.scope,
                        ie.transcludeOnThisElement = S,
                        ie.templateOnThisElement = k,
                        ie.transclude = N,
                        u.hasElementTranscludeDirective = T,
                        ie;
                        function re(e, t, n, r) {
                            e && (n && (e = he(e, n, r)),
                            e.require = l.require,
                            e.directiveName = f,
                            (b === l || l.$$isolateScope) && (e = Oe(e, {
                                isolateScope: !0
                            })),
                            a.push(e)),
                            t && (n && (t = he(t, n, r)),
                            t.require = l.require,
                            t.directiveName = f,
                            (b === l || l.$$isolateScope) && (t = Oe(t, {
                                isolateScope: !0
                            })),
                            s.push(t))
                        }
                        function ie(e, r, i, o, u) {
                            var l, f, d, h, g, m, E, S, k, O;
                            for (var C in t === i ? (k = n,
                            S = n.$$element) : k = new K(S = c(i),n),
                            g = r,
                            b ? h = r.$new(!0) : v && (g = r.$parent),
                            u && ((E = function(e, t, n, r) {
                                var i;
                                z(e) || (r = n,
                                n = t,
                                t = e,
                                e = void 0);
                                T && (i = m);
                                n || (n = T ? S.parent() : S);
                                if (!r)
                                    return u(e, t, i, n, j);
                                var o = u.$$slots[r];
                                if (o)
                                    return o(e, t, i, n, j);
                                if (R(o))
                                    throw an("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', r, ge(S))
                            }
                            ).$$boundTransclude = u,
                            E.isSlotFilled = function(e) {
                                return !!u.$$slots[e]
                            }
                            ),
                            $ && (m = function(e, t, n, r, i, o, a) {
                                var s = je();
                                for (var u in r) {
                                    var c = r[u]
                                      , l = {
                                        $scope: c === a || c.$$isolateScope ? i : o,
                                        $element: e,
                                        $attrs: t,
                                        $transclude: n
                                    }
                                      , f = c.controller;
                                    "@" === f && (f = t[c.name]);
                                    var d = _(f, l, !0, c.controllerAs);
                                    s[c.name] = d,
                                    e.data("$" + c.name + "Controller", d.instance)
                                }
                                return s
                            }(S, k, E, $, h, r, b)),
                            b && (ae.$$addScopeInfo(S, h, !0, !(x && (x === b || x === b.$$originalDirective))),
                            ae.$$addScopeClass(S, !0),
                            h.$$isolateBindings = b.$$isolateBindings,
                            (O = De(r, k, h, h.$$isolateBindings, b)).removeWatches && h.$on("$destroy", O.removeWatches)),
                            m) {
                                var N = $[C]
                                  , D = m[C]
                                  , M = N.$$bindings.bindToController;
                                if (y) {
                                    D.bindingInfo = M ? De(g, k, D.instance, M, N) : {};
                                    var I = D();
                                    I !== D.instance && (D.instance = I,
                                    S.data("$" + N.name + "Controller", I),
                                    D.bindingInfo.removeWatches && D.bindingInfo.removeWatches(),
                                    D.bindingInfo = De(g, k, D.instance, M, N))
                                } else
                                    D.instance = D(),
                                    S.data("$" + N.name + "Controller", D.instance),
                                    D.bindingInfo = De(g, k, D.instance, M, N)
                            }
                            for (w($, function(e, t) {
                                var n = e.require;
                                e.bindToController && !q(n) && L(n) && A(m[t].instance, ve(t, n, S, m))
                            }),
                            w(m, function(e) {
                                var t = e.instance;
                                if (B(t.$onChanges))
                                    try {
                                        t.$onChanges(e.bindingInfo.initialChanges)
                                    } catch (e) {
                                        p(e)
                                    }
                                if (B(t.$onInit))
                                    try {
                                        t.$onInit()
                                    } catch (e) {
                                        p(e)
                                    }
                                B(t.$doCheck) && (g.$watch(function() {
                                    t.$doCheck()
                                }),
                                t.$doCheck()),
                                B(t.$onDestroy) && g.$on("$destroy", function() {
                                    t.$onDestroy()
                                })
                            }),
                            l = 0,
                            f = a.length; l < f; l++)
                                Ne(d = a[l], d.isolateScope ? h : r, S, k, d.require && ve(d.directiveName, d.require, S, m), E);
                            var j = r;
                            for (b && (b.template || null === b.templateUrl) && (j = h),
                            e && e(j, i.childNodes, void 0, u),
                            l = s.length - 1; l >= 0; l--)
                                Ne(d = s[l], d.isolateScope ? h : r, S, k, d.require && ve(d.directiveName, d.require, S, m), E);
                            w(m, function(e) {
                                var t = e.instance;
                                B(t.$postLink) && t.$postLink()
                            })
                        }
                    }
                    function ve(e, t, n, r) {
                        var i;
                        if (H(t)) {
                            var o = t.match(d)
                              , a = t.substring(o[0].length)
                              , s = o[1] || o[3]
                              , u = "?" === o[2];
                            if ("^^" === s ? n = n.parent() : i = (i = r && r[a]) && i.instance,
                            !i) {
                                var c = "$" + a + "Controller";
                                i = s ? n.inheritedData(c) : n.data(c)
                            }
                            if (!i && !u)
                                throw an("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", a, e)
                        } else if (q(t)) {
                            i = [];
                            for (var l = 0, f = t.length; l < f; l++)
                                i[l] = ve(e, t[l], n, r)
                        } else
                            L(t) && (i = {},
                            w(t, function(t, o) {
                                i[o] = ve(e, t, n, r)
                            }));
                        return i || null
                    }
                    function $e(e, t, n) {
                        for (var r = 0, i = e.length; r < i; r++)
                            e[r] = N(e[r], {
                                $$isolateScope: t,
                                $$newScope: n
                            })
                    }
                    function ye(t, n, o, a, s, u, c) {
                        if (n === s)
                            return null;
                        var l = null;
                        if (r.hasOwnProperty(n))
                            for (var f, d = e.get(n + i), h = 0, p = d.length; h < p; h++)
                                if (f = d[h],
                                (R(a) || a > f.priority) && -1 !== f.restrict.indexOf(o)) {
                                    if (u && (f = N(f, {
                                        $$start: u,
                                        $$end: c
                                    })),
                                    !f.$$bindings) {
                                        var g = f.$$bindings = v(f, f.name);
                                        L(g.isolateScope) && (f.$$isolateBindings = g.isolateScope)
                                    }
                                    t.push(f),
                                    l = f
                                }
                        return l
                    }
                    function be(t) {
                        if (r.hasOwnProperty(t))
                            for (var n = e.get(t + i), o = 0, a = n.length; o < a; o++)
                                if (n[o].multiElement)
                                    return !0;
                        return !1
                    }
                    function we(e, t) {
                        var n = t.$attr
                          , r = e.$attr;
                        w(e, function(r, i) {
                            "$" !== i.charAt(0) && (t[i] && t[i] !== r && (r += ("style" === i ? ";" : " ") + t[i]),
                            e.$set(i, r, !0, n[i]))
                        }),
                        w(t, function(t, i) {
                            e.hasOwnProperty(i) || "$" === i.charAt(0) || (e[i] = t,
                            "class" !== i && "style" !== i && (r[i] = n[i]))
                        })
                    }
                    function xe(e, t, n, r, i, o, a, s) {
                        var u, l, f = [], d = t[0], h = e.shift(), p = N(h, {
                            templateUrl: null,
                            transclude: null,
                            replace: null,
                            $$originalDirective: h
                        }), g = B(h.templateUrl) ? h.templateUrl(t, n) : h.templateUrl, v = h.templateNamespace;
                        return t.empty(),
                        m(g).then(function(m) {
                            var $, y, b, x;
                            if (m = ne(m),
                            h.replace) {
                                if (b = it(m) ? [] : hn(_e(v, Z(m))),
                                $ = b[0],
                                1 !== b.length || $.nodeType !== Re)
                                    throw an("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", h.name, g);
                                y = {
                                    $attr: {}
                                },
                                Ae(r, t, $);
                                var E = fe($, [], y);
                                L(h.scope) && $e(E, !0),
                                e = E.concat(e),
                                we(n, y)
                            } else
                                $ = d,
                                t.html(m);
                            for (e.unshift(p),
                            u = me(e, $, n, i, t, h, o, a, s),
                            w(r, function(e, n) {
                                e === $ && (r[n] = t[0])
                            }),
                            l = ce(t[0].childNodes, i); f.length; ) {
                                var S = f.shift()
                                  , _ = f.shift()
                                  , k = f.shift()
                                  , A = f.shift()
                                  , T = t[0];
                                if (!S.$$destroyed) {
                                    if (_ !== d) {
                                        var O = _.className;
                                        s.hasElementTranscludeDirective && h.replace || (T = lt($)),
                                        Ae(k, c(_), T),
                                        J(c(T), O)
                                    }
                                    x = u.transcludeOnThisElement ? le(S, u.transclude, A) : A,
                                    u(l, S, T, r, x)
                                }
                            }
                            f = null
                        }),
                        function(e, t, n, r, i) {
                            var o = i;
                            t.$$destroyed || (f ? f.push(t, n, r, o) : (u.transcludeOnThisElement && (o = le(t, u.transclude, i)),
                            u(l, t, n, r, o)))
                        }
                    }
                    function Ee(e, t) {
                        var n = t.priority - e.priority;
                        return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
                    }
                    function Se(e, t, n, r) {
                        function i(e) {
                            return e ? " (module: " + e + ")" : ""
                        }
                        if (t)
                            throw an("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", t.name, i(t.$$moduleName), n.name, i(n.$$moduleName), e, ge(r))
                    }
                    function _e(e, n) {
                        switch (e = a(e || "html")) {
                        case "svg":
                        case "math":
                            var r = t.document.createElement("div");
                            return r.innerHTML = "<" + e + ">" + n + "</" + e + ">",
                            r.childNodes[0].childNodes;
                        default:
                            return n
                        }
                    }
                    function ke(e, t, r, i, o) {
                        var a = function(e, t) {
                            if ("srcdoc" === t)
                                return T.HTML;
                            var n = ee(e);
                            if ("src" === t || "ngSrc" === t) {
                                if (-1 === ["img", "video", "audio", "source", "track"].indexOf(n))
                                    return T.RESOURCE_URL
                            } else if ("xlinkHref" === t || "form" === n && "action" === t)
                                return T.RESOURCE_URL
                        }(e, i)
                          , s = !o
                          , u = f[i] || o
                          , c = n(r, s, a, u);
                        if (c) {
                            if ("multiple" === i && "select" === ee(e))
                                throw an("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", ge(e));
                            t.push({
                                priority: 100,
                                compile: function() {
                                    return {
                                        pre: function(e, t, o) {
                                            var s = o.$$observers || (o.$$observers = je());
                                            if (h.test(i))
                                                throw an("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                            var l = o[i];
                                            l !== r && (c = l && n(l, !0, a, u),
                                            r = l),
                                            c && (o[i] = c(e),
                                            (s[i] || (s[i] = [])).$$inter = !0,
                                            (o.$$observers && o.$$observers[i].$$scope || e).$watch(c, function(e, t) {
                                                "class" === i && e !== t ? o.$updateClass(e, t) : o.$set(i, e)
                                            }))
                                        }
                                    }
                                }
                            })
                        }
                    }
                    function Ae(e, n, r) {
                        var i, o, a = n[0], s = n.length, u = a.parentNode;
                        if (e)
                            for (i = 0,
                            o = e.length; i < o; i++)
                                if (e[i] === a) {
                                    e[i++] = r;
                                    for (var l = i, f = l + s - 1, d = e.length; l < d; l++,
                                    f++)
                                        f < d ? e[l] = e[f] : delete e[l];
                                    e.length -= s - 1,
                                    e.context === a && (e.context = r);
                                    break
                                }
                        u && u.replaceChild(r, a);
                        var h = t.document.createDocumentFragment();
                        for (i = 0; i < s; i++)
                            h.appendChild(n[i]);
                        for (c.hasData(a) && (c.data(r, c.data(a)),
                        c(a).off("$destroy")),
                        c.cleanData(h.querySelectorAll("*")),
                        i = 1; i < s; i++)
                            delete n[i];
                        n[0] = r,
                        n.length = 1
                    }
                    function Oe(e, t) {
                        return A(function() {
                            return e.apply(null, arguments)
                        }, e, t)
                    }
                    function Ne(e, t, n, r, i, o) {
                        try {
                            e(t, n, r, i, o)
                        } catch (e) {
                            p(e, ge(n))
                        }
                    }
                    function De(e, t, r, i, a) {
                        var s, u = [], c = {};
                        function l(t, n, i) {
                            !B(r.$onChanges) || n === i || n != n && i != i || (I || (e.$$postDigest(W),
                            I = []),
                            s || (s = {},
                            I.push(f)),
                            s[t] && (i = s[t].previousValue),
                            s[t] = new cn(i,n))
                        }
                        function f() {
                            r.$onChanges(s),
                            s = void 0
                        }
                        return w(i, function(i, s) {
                            var f, d, h, p, g, m = i.attrName, v = i.optional;
                            switch (i.mode) {
                            case "@":
                                v || o.call(t, m) || (r[s] = t[m] = void 0),
                                g = t.$observe(m, function(e) {
                                    if (H(e) || Y(e)) {
                                        var t = r[s];
                                        l(s, e, t),
                                        r[s] = e
                                    }
                                }),
                                t.$$observers[m].$$scope = e,
                                H(f = t[m]) ? r[s] = n(f)(e) : Y(f) && (r[s] = f),
                                c[s] = new cn(sn,r[s]),
                                u.push(g);
                                break;
                            case "=":
                                if (!o.call(t, m)) {
                                    if (v)
                                        break;
                                    t[m] = void 0
                                }
                                if (v && !t[m])
                                    break;
                                d = E(t[m]),
                                p = d.literal ? re : function(e, t) {
                                    return e === t || e != e && t != t
                                }
                                ,
                                h = d.assign || function() {
                                    throw f = r[s] = d(e),
                                    an("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", t[m], m, a.name)
                                }
                                ,
                                f = r[s] = d(e);
                                var $ = function(t) {
                                    return p(t, r[s]) || (p(t, f) ? h(e, t = r[s]) : r[s] = t),
                                    f = t
                                };
                                $.$stateful = !0,
                                g = i.collection ? e.$watchCollection(t[m], $) : e.$watch(E(t[m], $), null, d.literal),
                                u.push(g);
                                break;
                            case "<":
                                if (!o.call(t, m)) {
                                    if (v)
                                        break;
                                    t[m] = void 0
                                }
                                if (v && !t[m])
                                    break;
                                var y = (d = E(t[m])).literal
                                  , b = r[s] = d(e);
                                c[s] = new cn(sn,r[s]),
                                g = e.$watch(d, function(e, t) {
                                    if (t === e) {
                                        if (t === b || y && re(t, b))
                                            return;
                                        t = b
                                    }
                                    l(s, e, t),
                                    r[s] = e
                                }, y),
                                u.push(g);
                                break;
                            case "&":
                                if ((d = t.hasOwnProperty(m) ? E(t[m]) : D) === D && v)
                                    break;
                                r[s] = function(t) {
                                    return d(e, t)
                                }
                            }
                        }),
                        {
                            initialChanges: c,
                            removeWatches: u.length && function() {
                                for (var e = 0, t = u.length; e < t; ++e)
                                    u[e]()
                            }
                        }
                    }
                }
                ]
            }
            function cn(e, t) {
                this.previousValue = e,
                this.currentValue = t
            }
            un.$inject = ["$provide", "$$sanitizeUriProvider"],
            cn.prototype.isFirstChange = function() {
                return this.previousValue === sn
            }
            ;
            var ln = /^((?:x|data)[:\-_])/i;
            function fn(e) {
                return Xe(e.replace(ln, ""))
            }
            function dn(e, t) {
                var n = ""
                  , r = e.split(/\s+/)
                  , i = t.split(/\s+/);
                e: for (var o = 0; o < r.length; o++) {
                    for (var a = r[o], s = 0; s < i.length; s++)
                        if (a === i[s])
                            continue e;
                    n += (n.length > 0 ? " " : "") + a
                }
                return n
            }
            function hn(e) {
                var t = (e = c(e)).length;
                if (t <= 1)
                    return e;
                for (; t--; ) {
                    var n = e[t];
                    (n.nodeType === Le || n.nodeType === Pe && "" === n.nodeValue.trim()) && h.call(e, t, 1)
                }
                return e
            }
            var pn = n("$controller")
              , gn = /^(\S+)(\s+as\s+([\w$]+))?$/;
            function mn(e, t) {
                if (t && H(t))
                    return t;
                if (H(e)) {
                    var n = gn.exec(e);
                    if (n)
                        return n[3]
                }
            }
            function vn() {
                var e = {}
                  , t = !1;
                this.has = function(t) {
                    return e.hasOwnProperty(t)
                }
                ,
                this.register = function(t, n) {
                    De(t, "controller"),
                    L(t) ? A(e, t) : e[t] = n
                }
                ,
                this.allowGlobals = function() {
                    t = !0
                }
                ,
                this.$get = ["$injector", "$window", function(r, i) {
                    return function(n, a, s, u) {
                        var c, l, f, d;
                        if (s = !0 === s,
                        u && H(u) && (d = u),
                        H(n)) {
                            if (!(l = n.match(gn)))
                                throw pn("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", n);
                            if (f = l[1],
                            d = d || l[3],
                            !(n = e.hasOwnProperty(f) ? e[f] : Me(a.$scope, f, !0) || (t ? Me(i, f, !0) : void 0)))
                                throw pn("ctrlreg", "The controller with the name '{0}' is not registered.", f);
                            Ne(n, f, !0)
                        }
                        if (s) {
                            var h = (q(n) ? n[n.length - 1] : n).prototype;
                            return c = Object.create(h || null),
                            d && o(a, d, c, f || n.name),
                            A(function() {
                                var e = r.invoke(n, c, a, f);
                                return e !== c && (L(e) || B(e)) && (c = e,
                                d && o(a, d, c, f || n.name)),
                                c
                            }, {
                                instance: c,
                                identifier: d
                            })
                        }
                        return c = r.instantiate(n, a, f),
                        d && o(a, d, c, f || n.name),
                        c
                    }
                    ;
                    function o(e, t, r, i) {
                        if (!e || !L(e.$scope))
                            throw n("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, t);
                        e.$scope[t] = r
                    }
                }
                ]
            }
            function $n() {
                this.$get = ["$window", function(e) {
                    return c(e.document)
                }
                ]
            }
            function yn() {
                this.$get = ["$log", function(e) {
                    return function(t, n) {
                        e.error.apply(e, arguments)
                    }
                }
                ]
            }
            var bn = function() {
                this.$get = ["$document", function(e) {
                    return function(t) {
                        return t ? !t.nodeType && t instanceof c && (t = t[0]) : t = e[0].body,
                        t.offsetWidth + 1
                    }
                }
                ]
            }
              , wn = "application/json"
              , xn = {
                "Content-Type": wn + ";charset=utf-8"
            }
              , En = /^\[|^\{(?!\{)/
              , Sn = {
                "[": /]$/,
                "{": /}$/
            }
              , _n = /^\)]\}',?\n/
              , kn = n("$http")
              , An = function(e) {
                return function() {
                    throw kn("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", e)
                }
            };
            function Tn(e) {
                return L(e) ? V(e) ? e.toISOString() : le(e) : e
            }
            function On() {
                this.$get = function() {
                    return function(e) {
                        if (!e)
                            return "";
                        var t = [];
                        return x(e, function(e, n) {
                            null === e || R(e) || (q(e) ? w(e, function(e) {
                                t.push(be(n) + "=" + be(Tn(e)))
                            }) : t.push(be(n) + "=" + be(Tn(e))))
                        }),
                        t.join("&")
                    }
                }
            }
            function Cn() {
                this.$get = function() {
                    return function(e) {
                        if (!e)
                            return "";
                        var t = [];
                        return function e(n, r, i) {
                            if (null === n || R(n))
                                return;
                            q(n) ? w(n, function(t, n) {
                                e(t, r + "[" + (L(t) ? n : "") + "]")
                            }) : L(n) && !V(n) ? x(n, function(t, n) {
                                e(t, r + (i ? "" : "[") + n + (i ? "" : "]"))
                            }) : t.push(be(r) + "=" + be(Tn(n)))
                        }(e, "", !0),
                        t.join("&")
                    }
                }
            }
            function Nn(e, t) {
                if (H(e)) {
                    var n = e.replace(_n, "").trim();
                    if (n) {
                        var r = t("Content-Type");
                        (r && 0 === r.indexOf(wn) || (o = (i = n).match(En)) && Sn[o[0]].test(i)) && (e = fe(n))
                    }
                }
                var i, o;
                return e
            }
            function Dn(e) {
                var t, n = je();
                function r(e, t) {
                    e && (n[e] = n[e] ? n[e] + ", " + t : t)
                }
                return H(e) ? w(e.split("\n"), function(e) {
                    t = e.indexOf(":"),
                    r(a(Z(e.substr(0, t))), Z(e.substr(t + 1)))
                }) : L(e) && w(e, function(e, t) {
                    r(a(t), Z(e))
                }),
                n
            }
            function Mn(e) {
                var t;
                return function(n) {
                    if (t || (t = Dn(e)),
                    n) {
                        var r = t[a(n)];
                        return void 0 === r && (r = null),
                        r
                    }
                    return t
                }
            }
            function In(e, t, n, r) {
                return B(r) ? r(e, t, n) : (w(r, function(r) {
                    e = r(e, t, n)
                }),
                e)
            }
            function jn(e) {
                return 200 <= e && e < 300
            }
            function Rn() {
                var e = this.defaults = {
                    transformResponse: [Nn],
                    transformRequest: [function(e) {
                        return !L(e) || (t = e,
                        "[object File]" === g.call(t)) || function(e) {
                            return "[object Blob]" === g.call(e)
                        }(e) || function(e) {
                            return "[object FormData]" === g.call(e)
                        }(e) ? e : le(e);
                        var t
                    }
                    ],
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        post: Ue(xn),
                        put: Ue(xn),
                        patch: Ue(xn)
                    },
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    paramSerializer: "$httpParamSerializer"
                }
                  , t = !1;
                this.useApplyAsync = function(e) {
                    return P(e) ? (t = !!e,
                    this) : t
                }
                ;
                var r = !0;
                this.useLegacyPromiseExtensions = function(e) {
                    return P(e) ? (r = !!e,
                    this) : r
                }
                ;
                var i = this.interceptors = [];
                this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(o, u, c, l, f, d) {
                    var h = c("$http");
                    e.paramSerializer = H(e.paramSerializer) ? d.get(e.paramSerializer) : e.paramSerializer;
                    var p = [];
                    function g(i) {
                        if (!L(i))
                            throw n("$http")("badreq", "Http request configuration must be an object.  Received: {0}", i);
                        if (!H(i.url))
                            throw n("$http")("badreq", "Http request configuration url must be a string.  Received: {0}", i.url);
                        var c = A({
                            method: "get",
                            transformRequest: e.transformRequest,
                            transformResponse: e.transformResponse,
                            paramSerializer: e.paramSerializer
                        }, i);
                        c.headers = function(t) {
                            var n, r, i, o = e.headers, s = A({}, t.headers);
                            o = A({}, o.common, o[a(t.method)]);
                            e: for (n in o) {
                                for (i in r = a(n),
                                s)
                                    if (a(i) === r)
                                        continue e;
                                s[n] = o[n]
                            }
                            return function(e, t) {
                                var n, r = {};
                                return w(e, function(e, i) {
                                    B(e) ? null != (n = e(t)) && (r[i] = n) : r[i] = e
                                }),
                                r
                            }(s, Ue(t))
                        }(i),
                        c.method = s(c.method),
                        c.paramSerializer = H(c.paramSerializer) ? d.get(c.paramSerializer) : c.paramSerializer;
                        var m = []
                          , v = []
                          , $ = f.when(c);
                        return w(p, function(e) {
                            (e.request || e.requestError) && m.unshift(e.request, e.requestError),
                            (e.response || e.responseError) && v.push(e.response, e.responseError)
                        }),
                        $ = y($, m),
                        $ = y($ = $.then(function(n) {
                            var r = n.headers
                              , i = In(n.data, Mn(r), void 0, n.transformRequest);
                            R(i) && w(r, function(e, t) {
                                "content-type" === a(t) && delete r[t]
                            });
                            R(n.withCredentials) && !R(e.withCredentials) && (n.withCredentials = e.withCredentials);
                            return function(n, r) {
                                var i, a, s = f.defer(), c = s.promise, d = n.headers, p = function(e, t) {
                                    t.length > 0 && (e += (-1 === e.indexOf("?") ? "?" : "&") + t);
                                    return e
                                }(n.url, n.paramSerializer(n.params));
                                g.pendingRequests.push(n),
                                c.then(b, b),
                                !n.cache && !e.cache || !1 === n.cache || "GET" !== n.method && "JSONP" !== n.method || (i = L(n.cache) ? n.cache : L(e.cache) ? e.cache : h);
                                i && (P(a = i.get(p)) ? K(a) ? a.then(y, y) : q(a) ? $(a[1], a[0], Ue(a[2]), a[3]) : $(a, 200, {}, "OK") : i.put(p, c));
                                if (R(a)) {
                                    var m = hi(n.url) ? u()[n.xsrfCookieName || e.xsrfCookieName] : void 0;
                                    m && (d[n.xsrfHeaderName || e.xsrfHeaderName] = m),
                                    o(n.method, p, r, function(e, n, r, o) {
                                        i && (jn(e) ? i.put(p, [e, n, Dn(r), o]) : i.remove(p));
                                        function a() {
                                            $(n, e, r, o)
                                        }
                                        t ? l.$applyAsync(a) : (a(),
                                        l.$$phase || l.$apply())
                                    }, d, n.timeout, n.withCredentials, n.responseType, v(n.eventHandlers), v(n.uploadEventHandlers))
                                }
                                return c;
                                function v(e) {
                                    if (e) {
                                        var n = {};
                                        return w(e, function(e, r) {
                                            n[r] = function(n) {
                                                function r() {
                                                    e(n)
                                                }
                                                t ? l.$applyAsync(r) : l.$$phase ? r() : l.$apply(r)
                                            }
                                        }),
                                        n
                                    }
                                }
                                function $(e, t, r, i) {
                                    (jn(t = t >= -1 ? t : 0) ? s.resolve : s.reject)({
                                        data: e,
                                        status: t,
                                        headers: Mn(r),
                                        config: n,
                                        statusText: i
                                    })
                                }
                                function y(e) {
                                    $(e.data, e.status, Ue(e.headers()), e.statusText)
                                }
                                function b() {
                                    var e = g.pendingRequests.indexOf(n);
                                    -1 !== e && g.pendingRequests.splice(e, 1)
                                }
                            }(n, i).then(b, b)
                        }), v),
                        r ? ($.success = function(e) {
                            return Ne(e, "fn"),
                            $.then(function(t) {
                                e(t.data, t.status, t.headers, c)
                            }),
                            $
                        }
                        ,
                        $.error = function(e) {
                            return Ne(e, "fn"),
                            $.then(null, function(t) {
                                e(t.data, t.status, t.headers, c)
                            }),
                            $
                        }
                        ) : ($.success = An("success"),
                        $.error = An("error")),
                        $;
                        function y(e, t) {
                            for (var n = 0, r = t.length; n < r; ) {
                                var i = t[n++]
                                  , o = t[n++];
                                e = e.then(i, o)
                            }
                            return t.length = 0,
                            e
                        }
                        function b(e) {
                            var t = A({}, e);
                            return t.data = In(e.data, e.headers, e.status, c.transformResponse),
                            jn(e.status) ? t : f.reject(t)
                        }
                    }
                    return w(i, function(e) {
                        p.unshift(H(e) ? d.get(e) : d.invoke(e))
                    }),
                    g.pendingRequests = [],
                    function(e) {
                        w(arguments, function(e) {
                            g[e] = function(t, n) {
                                return g(A({}, n || {}, {
                                    method: e,
                                    url: t
                                }))
                            }
                        })
                    }("get", "delete", "head", "jsonp"),
                    function(e) {
                        w(arguments, function(e) {
                            g[e] = function(t, n, r) {
                                return g(A({}, r || {}, {
                                    method: e,
                                    url: t,
                                    data: n
                                }))
                            }
                        })
                    }("post", "put", "patch"),
                    g.defaults = e,
                    g
                }
                ]
            }
            function Pn() {
                this.$get = function() {
                    return function() {
                        return new t.XMLHttpRequest
                    }
                }
            }
            function Ln() {
                this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function(e, t, n, r) {
                    return function(e, t, n, r, i) {
                        return function(o, s, u, c, l, f, d, h, p, g) {
                            if (e.$$incOutstandingRequestCount(),
                            s = s || e.url(),
                            "jsonp" === a(o))
                                var m = r.createCallback(s)
                                  , v = function(e, t, n) {
                                    e = e.replace("JSON_CALLBACK", t);
                                    var o = i.createElement("script")
                                      , a = null;
                                    return o.type = "text/javascript",
                                    o.src = e,
                                    o.async = !0,
                                    a = function(e) {
                                        ze(o, "load", a),
                                        ze(o, "error", a),
                                        i.body.removeChild(o),
                                        o = null;
                                        var s = -1
                                          , u = "unknown";
                                        e && ("load" !== e.type || r.wasCalled(t) || (e = {
                                            type: "error"
                                        }),
                                        u = e.type,
                                        s = "error" === e.type ? 404 : 200),
                                        n && n(s, u)
                                    }
                                    ,
                                    We(o, "load", a),
                                    We(o, "error", a),
                                    i.body.appendChild(o),
                                    a
                                }(s, m, function(e, t) {
                                    var n = 200 === e && r.getResponse(m);
                                    E(c, e, n, "", t),
                                    r.removeCallback(m)
                                });
                            else {
                                var $ = t(o, s);
                                $.open(o, s, !0),
                                w(l, function(e, t) {
                                    P(e) && $.setRequestHeader(t, e)
                                }),
                                $.onload = function() {
                                    var e = $.statusText || ""
                                      , t = "response"in $ ? $.response : $.responseText
                                      , n = 1223 === $.status ? 204 : $.status;
                                    0 === n && (n = t ? 200 : "file" === di(s).protocol ? 404 : 0),
                                    E(c, n, t, $.getAllResponseHeaders(), e)
                                }
                                ;
                                var y = function() {
                                    E(c, -1, null, null, "")
                                };
                                if ($.onerror = y,
                                $.onabort = y,
                                $.ontimeout = y,
                                w(p, function(e, t) {
                                    $.addEventListener(t, e)
                                }),
                                w(g, function(e, t) {
                                    $.upload.addEventListener(t, e)
                                }),
                                d && ($.withCredentials = !0),
                                h)
                                    try {
                                        $.responseType = h
                                    } catch (e) {
                                        if ("json" !== h)
                                            throw e
                                    }
                                $.send(R(u) ? null : u)
                            }
                            if (f > 0)
                                var b = n(x, f);
                            else
                                K(f) && f.then(x);
                            function x() {
                                v && v(),
                                $ && $.abort()
                            }
                            function E(t, r, i, o, a) {
                                P(b) && n.cancel(b),
                                v = $ = null,
                                t(r, i, o, a),
                                e.$$completeOutstandingRequest(D)
                            }
                        }
                    }(e, r, e.defer, t, n[0])
                }
                ]
            }
            var Fn = $.$interpolateMinErr = n("$interpolate");
            function Hn() {
                var e = "{{"
                  , t = "}}";
                this.startSymbol = function(t) {
                    return t ? (e = t,
                    this) : e
                }
                ,
                this.endSymbol = function(e) {
                    return e ? (t = e,
                    this) : t
                }
                ,
                this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, i) {
                    var o = e.length
                      , a = t.length
                      , s = new RegExp(e.replace(/./g, c),"g")
                      , u = new RegExp(t.replace(/./g, c),"g");
                    function c(e) {
                        return "\\\\\\" + e
                    }
                    function l(n) {
                        return n.replace(s, e).replace(u, t)
                    }
                    function f(e, t, n, r) {
                        var i = e.$watch(function(e) {
                            return i(),
                            r(e)
                        }, t, n);
                        return i
                    }
                    function d(s, u, c, d) {
                        if (!s.length || -1 === s.indexOf(e)) {
                            var h;
                            if (!u)
                                (h = I(l(s))).exp = s,
                                h.expressions = [],
                                h.$$watchDelegate = f;
                            return h
                        }
                        d = !!d;
                        for (var p, g, m, v = 0, $ = [], y = [], b = s.length, w = [], x = []; v < b; ) {
                            if (-1 === (p = s.indexOf(e, v)) || -1 === (g = s.indexOf(t, p + o))) {
                                v !== b && w.push(l(s.substring(v)));
                                break
                            }
                            v !== p && w.push(l(s.substring(v, p))),
                            m = s.substring(p + o, g),
                            $.push(m),
                            y.push(n(m, _)),
                            v = g + a,
                            x.push(w.length),
                            w.push("")
                        }
                        if (c && w.length > 1 && Fn.throwNoconcat(s),
                        !u || $.length) {
                            var E = function(e) {
                                for (var t = 0, n = $.length; t < n; t++) {
                                    if (d && R(e[t]))
                                        return;
                                    w[x[t]] = e[t]
                                }
                                return w.join("")
                            }
                              , S = function(e) {
                                return c ? i.getTrusted(c, e) : i.valueOf(e)
                            };
                            return A(function(e) {
                                var t = 0
                                  , n = $.length
                                  , i = new Array(n);
                                try {
                                    for (; t < n; t++)
                                        i[t] = y[t](e);
                                    return E(i)
                                } catch (e) {
                                    r(Fn.interr(s, e))
                                }
                            }, {
                                exp: s,
                                expressions: $,
                                $$watchDelegate: function(e, t) {
                                    var n;
                                    return e.$watchGroup(y, function(r, i) {
                                        var o = E(r);
                                        B(t) && t.call(this, o, r !== i ? n : o, e),
                                        n = o
                                    })
                                }
                            })
                        }
                        function _(e) {
                            try {
                                return e = S(e),
                                d && !P(e) ? e : function(e) {
                                    if (null == e)
                                        return "";
                                    switch (typeof e) {
                                    case "string":
                                        break;
                                    case "number":
                                        e = "" + e;
                                        break;
                                    default:
                                        e = le(e)
                                    }
                                    return e
                                }(e)
                            } catch (e) {
                                r(Fn.interr(s, e))
                            }
                        }
                    }
                    return d.startSymbol = function() {
                        return e
                    }
                    ,
                    d.endSymbol = function() {
                        return t
                    }
                    ,
                    d
                }
                ]
            }
            function Un() {
                this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function(e, t, n, r, i) {
                    var o = {};
                    function a(a, s, u, c) {
                        var l = arguments.length > 4
                          , f = l ? se(arguments, 4) : []
                          , d = t.setInterval
                          , h = t.clearInterval
                          , p = 0
                          , g = P(c) && !c
                          , m = (g ? r : n).defer()
                          , v = m.promise;
                        return u = P(u) ? u : 0,
                        v.$$intervalId = d(function() {
                            g ? i.defer($) : e.$evalAsync($),
                            m.notify(p++),
                            u > 0 && p >= u && (m.resolve(p),
                            h(v.$$intervalId),
                            delete o[v.$$intervalId]),
                            g || e.$apply()
                        }, s),
                        o[v.$$intervalId] = m,
                        v;
                        function $() {
                            l ? a.apply(null, f) : a(p)
                        }
                    }
                    return a.cancel = function(e) {
                        return !!(e && e.$$intervalId in o) && (o[e.$$intervalId].reject("canceled"),
                        t.clearInterval(e.$$intervalId),
                        delete o[e.$$intervalId],
                        !0)
                    }
                    ,
                    a
                }
                ]
            }
            Fn.throwNoconcat = function(e) {
                throw Fn("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", e)
            }
            ,
            Fn.interr = function(e, t) {
                return Fn("interr", "Can't interpolate: {0}\n{1}", e, t.toString())
            }
            ;
            var Vn = function() {
                this.$get = ["$window", function(e) {
                    var t = e.angular.callbacks
                      , n = {};
                    return {
                        createCallback: function(e) {
                            var r = "_" + (t.$$counter++).toString(36)
                              , i = "angular.callbacks." + r
                              , o = function(e) {
                                var t = function(e) {
                                    t.data = e,
                                    t.called = !0
                                };
                                return t.id = e,
                                t
                            }(r);
                            return n[i] = t[r] = o,
                            i
                        },
                        wasCalled: function(e) {
                            return n[e].called
                        },
                        getResponse: function(e) {
                            return n[e].data
                        },
                        removeCallback: function(e) {
                            var r = n[e];
                            delete t[r.id],
                            delete n[e]
                        }
                    }
                }
                ]
            }
              , qn = /^([^?#]*)(\?([^#]*))?(#(.*))?$/
              , Bn = {
                http: 80,
                https: 443,
                ftp: 21
            }
              , Gn = n("$location");
            function Wn(e) {
                for (var t = e.split("/"), n = t.length; n--; )
                    t[n] = ye(t[n]);
                return t.join("/")
            }
            function zn(e, t) {
                var n = di(e);
                t.$$protocol = n.protocol,
                t.$$host = n.hostname,
                t.$$port = O(n.port) || Bn[n.protocol] || null
            }
            var Yn = /^\s*[\\\/]{2,}/;
            function Kn(e, t) {
                if (Yn.test(e))
                    throw Gn("badpath", 'Invalid url "{0}".', e);
                var n = "/" !== e.charAt(0);
                n && (e = "/" + e);
                var r = di(e);
                t.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname),
                t.$$search = ve(r.search),
                t.$$hash = decodeURIComponent(r.hash),
                t.$$path && "/" !== t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
            }
            function Jn(e, t) {
                return e.slice(0, t.length) === t
            }
            function Zn(e, t) {
                if (Jn(t, e))
                    return t.substr(e.length)
            }
            function Xn(e) {
                var t = e.indexOf("#");
                return -1 === t ? e : e.substr(0, t)
            }
            function Qn(e) {
                return e.replace(/(#.+)|#$/, "$1")
            }
            function er(e, t, n) {
                this.$$html5 = !0,
                n = n || "",
                zn(e, this),
                this.$$parse = function(e) {
                    var n = Zn(t, e);
                    if (!H(n))
                        throw Gn("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, t);
                    Kn(n, this),
                    this.$$path || (this.$$path = "/"),
                    this.$$compose()
                }
                ,
                this.$$compose = function() {
                    var e = $e(this.$$search)
                      , n = this.$$hash ? "#" + ye(this.$$hash) : "";
                    this.$$url = Wn(this.$$path) + (e ? "?" + e : "") + n,
                    this.$$absUrl = t + this.$$url.substr(1)
                }
                ,
                this.$$parseLinkUrl = function(r, i) {
                    return i && "#" === i[0] ? (this.hash(i.slice(1)),
                    !0) : (P(o = Zn(e, r)) ? (a = o,
                    s = n && P(o = Zn(n, o)) ? t + (Zn("/", o) || o) : e + a) : P(o = Zn(t, r)) ? s = t + o : t === r + "/" && (s = t),
                    s && this.$$parse(s),
                    !!s);
                    var o, a, s
                }
            }
            function tr(e, t, n) {
                zn(e, this),
                this.$$parse = function(r) {
                    var i, o = Zn(e, r) || Zn(t, r);
                    R(o) || "#" !== o.charAt(0) ? this.$$html5 ? i = o : (i = "",
                    R(o) && (e = r,
                    this.replace())) : R(i = Zn(n, o)) && (i = o),
                    Kn(i, this),
                    this.$$path = function(e, t, n) {
                        var r, i = /^\/[A-Z]:(\/.*)/;
                        Jn(t, n) && (t = t.replace(n, ""));
                        if (i.exec(t))
                            return e;
                        return (r = i.exec(e)) ? r[1] : e
                    }(this.$$path, i, e),
                    this.$$compose()
                }
                ,
                this.$$compose = function() {
                    var t = $e(this.$$search)
                      , r = this.$$hash ? "#" + ye(this.$$hash) : "";
                    this.$$url = Wn(this.$$path) + (t ? "?" + t : "") + r,
                    this.$$absUrl = e + (this.$$url ? n + this.$$url : "")
                }
                ,
                this.$$parseLinkUrl = function(t, n) {
                    return Xn(e) === Xn(t) && (this.$$parse(t),
                    !0)
                }
            }
            function nr(e, t, n) {
                this.$$html5 = !0,
                tr.apply(this, arguments),
                this.$$parseLinkUrl = function(r, i) {
                    return i && "#" === i[0] ? (this.hash(i.slice(1)),
                    !0) : (e === Xn(r) ? o = r : (a = Zn(t, r)) ? o = e + n + a : t === r + "/" && (o = t),
                    o && this.$$parse(o),
                    !!o);
                    var o, a
                }
                ,
                this.$$compose = function() {
                    var t = $e(this.$$search)
                      , r = this.$$hash ? "#" + ye(this.$$hash) : "";
                    this.$$url = Wn(this.$$path) + (t ? "?" + t : "") + r,
                    this.$$absUrl = e + n + this.$$url
                }
            }
            var rr = {
                $$absUrl: "",
                $$html5: !1,
                $$replace: !1,
                absUrl: ir("$$absUrl"),
                url: function(e) {
                    if (R(e))
                        return this.$$url;
                    var t = qn.exec(e);
                    return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])),
                    (t[2] || t[1] || "" === e) && this.search(t[3] || ""),
                    this.hash(t[5] || ""),
                    this
                },
                protocol: ir("$$protocol"),
                host: ir("$$host"),
                port: ir("$$port"),
                path: or("$$path", function(e) {
                    return "/" === (e = null !== e ? e.toString() : "").charAt(0) ? e : "/" + e
                }),
                search: function(e, t) {
                    switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (H(e) || U(e))
                            e = e.toString(),
                            this.$$search = ve(e);
                        else {
                            if (!L(e))
                                throw Gn("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                            w(e = ne(e, {}), function(t, n) {
                                null == t && delete e[n]
                            }),
                            this.$$search = e
                        }
                        break;
                    default:
                        R(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
                    }
                    return this.$$compose(),
                    this
                },
                hash: or("$$hash", function(e) {
                    return null !== e ? e.toString() : ""
                }),
                replace: function() {
                    return this.$$replace = !0,
                    this
                }
            };
            function ir(e) {
                return function() {
                    return this[e]
                }
            }
            function or(e, t) {
                return function(n) {
                    return R(n) ? this[e] : (this[e] = t(n),
                    this.$$compose(),
                    this)
                }
            }
            function ar() {
                var e = ""
                  , t = {
                    enabled: !1,
                    requireBase: !0,
                    rewriteLinks: !0
                };
                this.hashPrefix = function(t) {
                    return P(t) ? (e = t,
                    this) : e
                }
                ,
                this.html5Mode = function(e) {
                    return Y(e) ? (t.enabled = e,
                    this) : L(e) ? (Y(e.enabled) && (t.enabled = e.enabled),
                    Y(e.requireBase) && (t.requireBase = e.requireBase),
                    (Y(e.rewriteLinks) || H(e.rewriteLinks)) && (t.rewriteLinks = e.rewriteLinks),
                    this) : t
                }
                ,
                this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, r, i, o, a) {
                    var s, u, l, f, d = r.baseHref(), h = r.url();
                    if (t.enabled) {
                        if (!d && t.requireBase)
                            throw Gn("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                        l = (f = h).substring(0, f.indexOf("/", f.indexOf("//") + 2)) + (d || "/"),
                        u = i.history ? er : nr
                    } else
                        l = Xn(h),
                        u = tr;
                    var p = function(e) {
                        return e.substr(0, Xn(e).lastIndexOf("/") + 1)
                    }(l);
                    (s = new u(l,p,"#" + e)).$$parseLinkUrl(h, h),
                    s.$$state = r.state();
                    var g = /^\s*(javascript|mailto):/i;
                    function m(e, t, n) {
                        var i = s.url()
                          , o = s.$$state;
                        try {
                            r.url(e, t, n),
                            s.$$state = r.state()
                        } catch (e) {
                            throw s.url(i),
                            s.$$state = o,
                            e
                        }
                    }
                    o.on("click", function(e) {
                        var i = t.rewriteLinks;
                        if (i && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 !== e.which && 2 !== e.button) {
                            for (var u = c(e.target); "a" !== ee(u[0]); )
                                if (u[0] === o[0] || !(u = u.parent())[0])
                                    return;
                            if (!H(i) || !R(u.attr(i))) {
                                var l = u.prop("href")
                                  , f = u.attr("href") || u.attr("xlink:href");
                                L(l) && "[object SVGAnimatedString]" === l.toString() && (l = di(l.animVal).href),
                                g.test(l) || !l || u.attr("target") || e.isDefaultPrevented() || s.$$parseLinkUrl(l, f) && (e.preventDefault(),
                                s.absUrl() !== r.url() && (n.$apply(),
                                a.angular["ff-684208-preventDefault"] = !0))
                            }
                        }
                    }),
                    Qn(s.absUrl()) !== Qn(h) && r.url(s.absUrl(), !0);
                    var v = !0;
                    return r.onUrlChange(function(e, t) {
                        R(Zn(p, e)) ? a.location.href = e : (n.$evalAsync(function() {
                            var r, i = s.absUrl(), o = s.$$state;
                            e = Qn(e),
                            s.$$parse(e),
                            s.$$state = t,
                            r = n.$broadcast("$locationChangeStart", e, i, t, o).defaultPrevented,
                            s.absUrl() === e && (r ? (s.$$parse(i),
                            s.$$state = o,
                            m(i, !1, o)) : (v = !1,
                            $(i, o)))
                        }),
                        n.$$phase || n.$digest())
                    }),
                    n.$watch(function() {
                        var e = Qn(r.url())
                          , t = Qn(s.absUrl())
                          , o = r.state()
                          , a = s.$$replace
                          , u = e !== t || s.$$html5 && i.history && o !== s.$$state;
                        (v || u) && (v = !1,
                        n.$evalAsync(function() {
                            var t = s.absUrl()
                              , r = n.$broadcast("$locationChangeStart", t, e, s.$$state, o).defaultPrevented;
                            s.absUrl() === t && (r ? (s.$$parse(e),
                            s.$$state = o) : (u && m(t, a, o === s.$$state ? null : s.$$state),
                            $(e, o)))
                        })),
                        s.$$replace = !1
                    }),
                    s;
                    function $(e, t) {
                        n.$broadcast("$locationChangeSuccess", s.absUrl(), e, s.$$state, t)
                    }
                }
                ]
            }
            function sr() {
                var e = !0
                  , t = this;
                this.debugEnabled = function(t) {
                    return P(t) ? (e = t,
                    this) : e
                }
                ,
                this.$get = ["$window", function(n) {
                    return {
                        log: i("log"),
                        info: i("info"),
                        warn: i("warn"),
                        error: i("error"),
                        debug: (r = i("debug"),
                        function() {
                            e && r.apply(t, arguments)
                        }
                        )
                    };
                    var r;
                    function i(e) {
                        var t = n.console || {}
                          , r = t[e] || t.log || D
                          , i = !1;
                        try {
                            i = !!r.apply
                        } catch (e) {}
                        return i ? function() {
                            var e = [];
                            return w(arguments, function(t) {
                                e.push(function(e) {
                                    return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)),
                                    e
                                }(t))
                            }),
                            r.apply(t, e)
                        }
                        : function(e, t) {
                            r(e, null == t ? "" : t)
                        }
                    }
                }
                ]
            }
            w([nr, tr, er], function(e) {
                e.prototype = Object.create(rr),
                e.prototype.state = function(t) {
                    if (!arguments.length)
                        return this.$$state;
                    if (e !== er || !this.$$html5)
                        throw Gn("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
                    return this.$$state = R(t) ? null : t,
                    this
                }
            });
            var ur = n("$parse")
              , cr = [].constructor
              , lr = (!1).constructor
              , fr = Function.constructor
              , dr = (0).constructor
              , hr = {}.constructor
              , pr = "".constructor
              , gr = cr.prototype
              , mr = lr.prototype
              , vr = fr.prototype
              , $r = dr.prototype
              , yr = hr.prototype
              , br = pr.prototype
              , wr = vr.call
              , xr = vr.apply
              , Er = vr.bind
              , Sr = yr.valueOf;
            function _r(e, t) {
                if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e)
                    throw ur("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", t);
                return e
            }
            function kr(e) {
                return e + ""
            }
            function Ar(e, t) {
                if (e) {
                    if (e.constructor === e)
                        throw ur("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
                    if (e.window === e)
                        throw ur("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", t);
                    if (e.children && (e.nodeName || e.prop && e.attr && e.find))
                        throw ur("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", t);
                    if (e === Object)
                        throw ur("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", t)
                }
                return e
            }
            function Tr(e, t) {
                if (e) {
                    if (e.constructor === e)
                        throw ur("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
                    if (e === wr || e === xr || e === Er)
                        throw ur("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", t)
                }
            }
            function Or(e, t) {
                if (e && (e === cr || e === lr || e === fr || e === dr || e === hr || e === pr || e === gr || e === mr || e === vr || e === $r || e === yr || e === br))
                    throw ur("isecaf", "Assigning to a constructor or its prototype is disallowed! Expression: {0}", t)
            }
            var Cr = je();
            w("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(e) {
                Cr[e] = !0
            });
            var Nr = {
                n: "\n",
                f: "\f",
                r: "\r",
                t: "\t",
                v: "\v",
                "'": "'",
                '"': '"'
            }
              , Dr = function(e) {
                this.options = e
            };
            Dr.prototype = {
                constructor: Dr,
                lex: function(e) {
                    for (this.text = e,
                    this.index = 0,
                    this.tokens = []; this.index < this.text.length; ) {
                        var t = this.text.charAt(this.index);
                        if ('"' === t || "'" === t)
                            this.readString(t);
                        else if (this.isNumber(t) || "." === t && this.isNumber(this.peek()))
                            this.readNumber();
                        else if (this.isIdentifierStart(this.peekMultichar()))
                            this.readIdent();
                        else if (this.is(t, "(){}[].,;:?"))
                            this.tokens.push({
                                index: this.index,
                                text: t
                            }),
                            this.index++;
                        else if (this.isWhitespace(t))
                            this.index++;
                        else {
                            var n = t + this.peek()
                              , r = n + this.peek(2)
                              , i = Cr[t]
                              , o = Cr[n]
                              , a = Cr[r];
                            if (i || o || a) {
                                var s = a ? r : o ? n : t;
                                this.tokens.push({
                                    index: this.index,
                                    text: s,
                                    operator: !0
                                }),
                                this.index += s.length
                            } else
                                this.throwError("Unexpected next character ", this.index, this.index + 1)
                        }
                    }
                    return this.tokens
                },
                is: function(e, t) {
                    return -1 !== t.indexOf(e)
                },
                peek: function(e) {
                    var t = e || 1;
                    return this.index + t < this.text.length && this.text.charAt(this.index + t)
                },
                isNumber: function(e) {
                    return "0" <= e && e <= "9" && "string" == typeof e
                },
                isWhitespace: function(e) {
                    return " " === e || "\r" === e || "\t" === e || "\n" === e || "\v" === e || " " === e
                },
                isIdentifierStart: function(e) {
                    return this.options.isIdentifierStart ? this.options.isIdentifierStart(e, this.codePointAt(e)) : this.isValidIdentifierStart(e)
                },
                isValidIdentifierStart: function(e) {
                    return "a" <= e && e <= "z" || "A" <= e && e <= "Z" || "_" === e || "$" === e
                },
                isIdentifierContinue: function(e) {
                    return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(e, this.codePointAt(e)) : this.isValidIdentifierContinue(e)
                },
                isValidIdentifierContinue: function(e, t) {
                    return this.isValidIdentifierStart(e, t) || this.isNumber(e)
                },
                codePointAt: function(e) {
                    return 1 === e.length ? e.charCodeAt(0) : (e.charCodeAt(0) << 10) + e.charCodeAt(1) - 56613888
                },
                peekMultichar: function() {
                    var e = this.text.charAt(this.index)
                      , t = this.peek();
                    if (!t)
                        return e;
                    var n = e.charCodeAt(0)
                      , r = t.charCodeAt(0);
                    return n >= 55296 && n <= 56319 && r >= 56320 && r <= 57343 ? e + t : e
                },
                isExpOperator: function(e) {
                    return "-" === e || "+" === e || this.isNumber(e)
                },
                throwError: function(e, t, n) {
                    n = n || this.index;
                    var r = P(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
                    throw ur("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, r, this.text)
                },
                readNumber: function() {
                    for (var e = "", t = this.index; this.index < this.text.length; ) {
                        var n = a(this.text.charAt(this.index));
                        if ("." === n || this.isNumber(n))
                            e += n;
                        else {
                            var r = this.peek();
                            if ("e" === n && this.isExpOperator(r))
                                e += n;
                            else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" === e.charAt(e.length - 1))
                                e += n;
                            else {
                                if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" !== e.charAt(e.length - 1))
                                    break;
                                this.throwError("Invalid exponent")
                            }
                        }
                        this.index++
                    }
                    this.tokens.push({
                        index: t,
                        text: e,
                        constant: !0,
                        value: Number(e)
                    })
                },
                readIdent: function() {
                    var e = this.index;
                    for (this.index += this.peekMultichar().length; this.index < this.text.length; ) {
                        var t = this.peekMultichar();
                        if (!this.isIdentifierContinue(t))
                            break;
                        this.index += t.length
                    }
                    this.tokens.push({
                        index: e,
                        text: this.text.slice(e, this.index),
                        identifier: !0
                    })
                },
                readString: function(e) {
                    var t = this.index;
                    this.index++;
                    for (var n = "", r = e, i = !1; this.index < this.text.length; ) {
                        var o = this.text.charAt(this.index);
                        if (r += o,
                        i) {
                            if ("u" === o) {
                                var a = this.text.substring(this.index + 1, this.index + 5);
                                a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"),
                                this.index += 4,
                                n += String.fromCharCode(parseInt(a, 16))
                            } else {
                                n += Nr[o] || o
                            }
                            i = !1
                        } else if ("\\" === o)
                            i = !0;
                        else {
                            if (o === e)
                                return this.index++,
                                void this.tokens.push({
                                    index: t,
                                    text: r,
                                    constant: !0,
                                    value: n
                                });
                            n += o
                        }
                        this.index++
                    }
                    this.throwError("Unterminated quote", t)
                }
            };
            var Mr = function(e, t) {
                this.lexer = e,
                this.options = t
            };
            function Ir(e, t) {
                return void 0 !== e ? e : t
            }
            function jr(e, t) {
                return void 0 === e ? t : void 0 === t ? e : e + t
            }
            function Rr(e, t) {
                var n, r, i;
                switch (e.type) {
                case Mr.Program:
                    n = !0,
                    w(e.body, function(e) {
                        Rr(e.expression, t),
                        n = n && e.expression.constant
                    }),
                    e.constant = n;
                    break;
                case Mr.Literal:
                    e.constant = !0,
                    e.toWatch = [];
                    break;
                case Mr.UnaryExpression:
                    Rr(e.argument, t),
                    e.constant = e.argument.constant,
                    e.toWatch = e.argument.toWatch;
                    break;
                case Mr.BinaryExpression:
                    Rr(e.left, t),
                    Rr(e.right, t),
                    e.constant = e.left.constant && e.right.constant,
                    e.toWatch = e.left.toWatch.concat(e.right.toWatch);
                    break;
                case Mr.LogicalExpression:
                    Rr(e.left, t),
                    Rr(e.right, t),
                    e.constant = e.left.constant && e.right.constant,
                    e.toWatch = e.constant ? [] : [e];
                    break;
                case Mr.ConditionalExpression:
                    Rr(e.test, t),
                    Rr(e.alternate, t),
                    Rr(e.consequent, t),
                    e.constant = e.test.constant && e.alternate.constant && e.consequent.constant,
                    e.toWatch = e.constant ? [] : [e];
                    break;
                case Mr.Identifier:
                    e.constant = !1,
                    e.toWatch = [e];
                    break;
                case Mr.MemberExpression:
                    Rr(e.object, t),
                    e.computed && Rr(e.property, t),
                    e.constant = e.object.constant && (!e.computed || e.property.constant),
                    e.toWatch = [e];
                    break;
                case Mr.CallExpression:
                    i = !!e.filter && function(e, t) {
                        return !e(t).$stateful
                    }(t, e.callee.name),
                    n = i,
                    r = [],
                    w(e.arguments, function(e) {
                        Rr(e, t),
                        n = n && e.constant,
                        e.constant || r.push.apply(r, e.toWatch)
                    }),
                    e.constant = n,
                    e.toWatch = i ? r : [e];
                    break;
                case Mr.AssignmentExpression:
                    Rr(e.left, t),
                    Rr(e.right, t),
                    e.constant = e.left.constant && e.right.constant,
                    e.toWatch = [e];
                    break;
                case Mr.ArrayExpression:
                    n = !0,
                    r = [],
                    w(e.elements, function(e) {
                        Rr(e, t),
                        n = n && e.constant,
                        e.constant || r.push.apply(r, e.toWatch)
                    }),
                    e.constant = n,
                    e.toWatch = r;
                    break;
                case Mr.ObjectExpression:
                    n = !0,
                    r = [],
                    w(e.properties, function(e) {
                        Rr(e.value, t),
                        n = n && e.value.constant && !e.computed,
                        e.value.constant || r.push.apply(r, e.value.toWatch)
                    }),
                    e.constant = n,
                    e.toWatch = r;
                    break;
                case Mr.ThisExpression:
                case Mr.LocalsExpression:
                    e.constant = !1,
                    e.toWatch = []
                }
            }
            function Pr(e) {
                if (1 === e.length) {
                    var t = e[0].expression
                      , n = t.toWatch;
                    return 1 !== n.length ? n : n[0] !== t ? n : void 0
                }
            }
            function Lr(e) {
                return e.type === Mr.Identifier || e.type === Mr.MemberExpression
            }
            function Fr(e) {
                if (1 === e.body.length && Lr(e.body[0].expression))
                    return {
                        type: Mr.AssignmentExpression,
                        left: e.body[0].expression,
                        right: {
                            type: Mr.NGValueParameter
                        },
                        operator: "="
                    }
            }
            function Hr(e) {
                return 0 === e.body.length || 1 === e.body.length && (e.body[0].expression.type === Mr.Literal || e.body[0].expression.type === Mr.ArrayExpression || e.body[0].expression.type === Mr.ObjectExpression)
            }
            function Ur(e) {
                return e.constant
            }
            function Vr(e, t) {
                this.astBuilder = e,
                this.$filter = t
            }
            function qr(e, t) {
                this.astBuilder = e,
                this.$filter = t
            }
            Mr.Program = "Program",
            Mr.ExpressionStatement = "ExpressionStatement",
            Mr.AssignmentExpression = "AssignmentExpression",
            Mr.ConditionalExpression = "ConditionalExpression",
            Mr.LogicalExpression = "LogicalExpression",
            Mr.BinaryExpression = "BinaryExpression",
            Mr.UnaryExpression = "UnaryExpression",
            Mr.CallExpression = "CallExpression",
            Mr.MemberExpression = "MemberExpression",
            Mr.Identifier = "Identifier",
            Mr.Literal = "Literal",
            Mr.ArrayExpression = "ArrayExpression",
            Mr.Property = "Property",
            Mr.ObjectExpression = "ObjectExpression",
            Mr.ThisExpression = "ThisExpression",
            Mr.LocalsExpression = "LocalsExpression",
            Mr.NGValueParameter = "NGValueParameter",
            Mr.prototype = {
                ast: function(e) {
                    this.text = e,
                    this.tokens = this.lexer.lex(e);
                    var t = this.program();
                    return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]),
                    t
                },
                program: function() {
                    for (var e = []; ; )
                        if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement()),
                        !this.expect(";"))
                            return {
                                type: Mr.Program,
                                body: e
                            }
                },
                expressionStatement: function() {
                    return {
                        type: Mr.ExpressionStatement,
                        expression: this.filterChain()
                    }
                },
                filterChain: function() {
                    for (var e = this.expression(); this.expect("|"); )
                        e = this.filter(e);
                    return e
                },
                expression: function() {
                    return this.assignment()
                },
                assignment: function() {
                    var e = this.ternary();
                    if (this.expect("=")) {
                        if (!Lr(e))
                            throw ur("lval", "Trying to assign a value to a non l-value");
                        e = {
                            type: Mr.AssignmentExpression,
                            left: e,
                            right: this.assignment(),
                            operator: "="
                        }
                    }
                    return e
                },
                ternary: function() {
                    var e, t, n = this.logicalOR();
                    return this.expect("?") && (e = this.expression(),
                    this.consume(":")) ? (t = this.expression(),
                    {
                        type: Mr.ConditionalExpression,
                        test: n,
                        alternate: e,
                        consequent: t
                    }) : n
                },
                logicalOR: function() {
                    for (var e = this.logicalAND(); this.expect("||"); )
                        e = {
                            type: Mr.LogicalExpression,
                            operator: "||",
                            left: e,
                            right: this.logicalAND()
                        };
                    return e
                },
                logicalAND: function() {
                    for (var e = this.equality(); this.expect("&&"); )
                        e = {
                            type: Mr.LogicalExpression,
                            operator: "&&",
                            left: e,
                            right: this.equality()
                        };
                    return e
                },
                equality: function() {
                    for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!=="); )
                        t = {
                            type: Mr.BinaryExpression,
                            operator: e.text,
                            left: t,
                            right: this.relational()
                        };
                    return t
                },
                relational: function() {
                    for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">="); )
                        t = {
                            type: Mr.BinaryExpression,
                            operator: e.text,
                            left: t,
                            right: this.additive()
                        };
                    return t
                },
                additive: function() {
                    for (var e, t = this.multiplicative(); e = this.expect("+", "-"); )
                        t = {
                            type: Mr.BinaryExpression,
                            operator: e.text,
                            left: t,
                            right: this.multiplicative()
                        };
                    return t
                },
                multiplicative: function() {
                    for (var e, t = this.unary(); e = this.expect("*", "/", "%"); )
                        t = {
                            type: Mr.BinaryExpression,
                            operator: e.text,
                            left: t,
                            right: this.unary()
                        };
                    return t
                },
                unary: function() {
                    var e;
                    return (e = this.expect("+", "-", "!")) ? {
                        type: Mr.UnaryExpression,
                        operator: e.text,
                        prefix: !0,
                        argument: this.unary()
                    } : this.primary()
                },
                primary: function() {
                    var e, t;
                    for (this.expect("(") ? (e = this.filterChain(),
                    this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? e = ne(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? e = {
                        type: Mr.Literal,
                        value: this.options.literals[this.consume().text]
                    } : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek()); t = this.expect("(", "[", "."); )
                        "(" === t.text ? (e = {
                            type: Mr.CallExpression,
                            callee: e,
                            arguments: this.parseArguments()
                        },
                        this.consume(")")) : "[" === t.text ? (e = {
                            type: Mr.MemberExpression,
                            object: e,
                            property: this.expression(),
                            computed: !0
                        },
                        this.consume("]")) : "." === t.text ? e = {
                            type: Mr.MemberExpression,
                            object: e,
                            property: this.identifier(),
                            computed: !1
                        } : this.throwError("IMPOSSIBLE");
                    return e
                },
                filter: function(e) {
                    for (var t = [e], n = {
                        type: Mr.CallExpression,
                        callee: this.identifier(),
                        arguments: t,
                        filter: !0
                    }; this.expect(":"); )
                        t.push(this.expression());
                    return n
                },
                parseArguments: function() {
                    var e = [];
                    if (")" !== this.peekToken().text)
                        do {
                            e.push(this.filterChain())
                        } while (this.expect(","));return e
                },
                identifier: function() {
                    var e = this.consume();
                    return e.identifier || this.throwError("is not a valid identifier", e),
                    {
                        type: Mr.Identifier,
                        name: e.text
                    }
                },
                constant: function() {
                    return {
                        type: Mr.Literal,
                        value: this.consume().value
                    }
                },
                arrayDeclaration: function() {
                    var e = [];
                    if ("]" !== this.peekToken().text)
                        do {
                            if (this.peek("]"))
                                break;
                            e.push(this.expression())
                        } while (this.expect(","));return this.consume("]"),
                    {
                        type: Mr.ArrayExpression,
                        elements: e
                    }
                },
                object: function() {
                    var e, t = [];
                    if ("}" !== this.peekToken().text)
                        do {
                            if (this.peek("}"))
                                break;
                            e = {
                                type: Mr.Property,
                                kind: "init"
                            },
                            this.peek().constant ? (e.key = this.constant(),
                            e.computed = !1,
                            this.consume(":"),
                            e.value = this.expression()) : this.peek().identifier ? (e.key = this.identifier(),
                            e.computed = !1,
                            this.peek(":") ? (this.consume(":"),
                            e.value = this.expression()) : e.value = e.key) : this.peek("[") ? (this.consume("["),
                            e.key = this.expression(),
                            this.consume("]"),
                            e.computed = !0,
                            this.consume(":"),
                            e.value = this.expression()) : this.throwError("invalid key", this.peek()),
                            t.push(e)
                        } while (this.expect(","));return this.consume("}"),
                    {
                        type: Mr.ObjectExpression,
                        properties: t
                    }
                },
                throwError: function(e, t) {
                    throw ur("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
                },
                consume: function(e) {
                    if (0 === this.tokens.length)
                        throw ur("ueoe", "Unexpected end of expression: {0}", this.text);
                    var t = this.expect(e);
                    return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()),
                    t
                },
                peekToken: function() {
                    if (0 === this.tokens.length)
                        throw ur("ueoe", "Unexpected end of expression: {0}", this.text);
                    return this.tokens[0]
                },
                peek: function(e, t, n, r) {
                    return this.peekAhead(0, e, t, n, r)
                },
                peekAhead: function(e, t, n, r, i) {
                    if (this.tokens.length > e) {
                        var o = this.tokens[e]
                          , a = o.text;
                        if (a === t || a === n || a === r || a === i || !t && !n && !r && !i)
                            return o
                    }
                    return !1
                },
                expect: function(e, t, n, r) {
                    var i = this.peek(e, t, n, r);
                    return !!i && (this.tokens.shift(),
                    i)
                },
                selfReferential: {
                    this: {
                        type: Mr.ThisExpression
                    },
                    $locals: {
                        type: Mr.LocalsExpression
                    }
                }
            },
            Vr.prototype = {
                compile: function(e, t) {
                    var n = this
                      , r = this.astBuilder.ast(e);
                    this.state = {
                        nextId: 0,
                        filters: {},
                        expensiveChecks: t,
                        fn: {
                            vars: [],
                            body: [],
                            own: {}
                        },
                        assign: {
                            vars: [],
                            body: [],
                            own: {}
                        },
                        inputs: []
                    },
                    Rr(r, n.$filter);
                    var i, o = "";
                    if (this.stage = "assign",
                    i = Fr(r)) {
                        this.state.computing = "assign";
                        var a = this.nextId();
                        this.recurse(i, a),
                        this.return_(a),
                        o = "fn.assign=" + this.generateFunction("assign", "s,v,l")
                    }
                    var s = Pr(r.body);
                    n.stage = "inputs",
                    w(s, function(e, t) {
                        var r = "fn" + t;
                        n.state[r] = {
                            vars: [],
                            body: [],
                            own: {}
                        },
                        n.state.computing = r;
                        var i = n.nextId();
                        n.recurse(e, i),
                        n.return_(i),
                        n.state.inputs.push(r),
                        e.watchId = t
                    }),
                    this.state.computing = "fn",
                    this.stage = "main",
                    this.recurse(r);
                    var u = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + o + this.watchFns() + "return fn;"
                      , c = new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",u)(this.$filter, _r, Ar, Tr, kr, Or, Ir, jr, e);
                    return this.state = this.stage = void 0,
                    c.literal = Hr(r),
                    c.constant = Ur(r),
                    c
                },
                USE: "use",
                STRICT: "strict",
                watchFns: function() {
                    var e = []
                      , t = this.state.inputs
                      , n = this;
                    return w(t, function(t) {
                        e.push("var " + t + "=" + n.generateFunction(t, "s"))
                    }),
                    t.length && e.push("fn.inputs=[" + t.join(",") + "];"),
                    e.join("")
                },
                generateFunction: function(e, t) {
                    return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
                },
                filterPrefix: function() {
                    var e = []
                      , t = this;
                    return w(this.state.filters, function(n, r) {
                        e.push(n + "=$filter(" + t.escape(r) + ")")
                    }),
                    e.length ? "var " + e.join(",") + ";" : ""
                },
                varsPrefix: function(e) {
                    return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : ""
                },
                body: function(e) {
                    return this.state[e].body.join("")
                },
                recurse: function(e, t, n, r, i, o) {
                    var a, s, u, c, l, f = this;
                    if (r = r || D,
                    !o && P(e.watchId))
                        return t = t || this.nextId(),
                        void this.if_("i", this.lazyAssign(t, this.computedMember("i", e.watchId)), this.lazyRecurse(e, t, n, r, i, !0));
                    switch (e.type) {
                    case Mr.Program:
                        w(e.body, function(t, n) {
                            f.recurse(t.expression, void 0, void 0, function(e) {
                                s = e
                            }),
                            n !== e.body.length - 1 ? f.current().body.push(s, ";") : f.return_(s)
                        });
                        break;
                    case Mr.Literal:
                        c = this.escape(e.value),
                        this.assign(t, c),
                        r(c);
                        break;
                    case Mr.UnaryExpression:
                        this.recurse(e.argument, void 0, void 0, function(e) {
                            s = e
                        }),
                        c = e.operator + "(" + this.ifDefined(s, 0) + ")",
                        this.assign(t, c),
                        r(c);
                        break;
                    case Mr.BinaryExpression:
                        this.recurse(e.left, void 0, void 0, function(e) {
                            a = e
                        }),
                        this.recurse(e.right, void 0, void 0, function(e) {
                            s = e
                        }),
                        c = "+" === e.operator ? this.plus(a, s) : "-" === e.operator ? this.ifDefined(a, 0) + e.operator + this.ifDefined(s, 0) : "(" + a + ")" + e.operator + "(" + s + ")",
                        this.assign(t, c),
                        r(c);
                        break;
                    case Mr.LogicalExpression:
                        t = t || this.nextId(),
                        f.recurse(e.left, t),
                        f.if_("&&" === e.operator ? t : f.not(t), f.lazyRecurse(e.right, t)),
                        r(t);
                        break;
                    case Mr.ConditionalExpression:
                        t = t || this.nextId(),
                        f.recurse(e.test, t),
                        f.if_(t, f.lazyRecurse(e.alternate, t), f.lazyRecurse(e.consequent, t)),
                        r(t);
                        break;
                    case Mr.Identifier:
                        t = t || this.nextId(),
                        n && (n.context = "inputs" === f.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", e.name) + "?l:s"),
                        n.computed = !1,
                        n.name = e.name),
                        _r(e.name),
                        f.if_("inputs" === f.stage || f.not(f.getHasOwnProperty("l", e.name)), function() {
                            f.if_("inputs" === f.stage || "s", function() {
                                i && 1 !== i && f.if_(f.not(f.nonComputedMember("s", e.name)), f.lazyAssign(f.nonComputedMember("s", e.name), "{}")),
                                f.assign(t, f.nonComputedMember("s", e.name))
                            })
                        }, t && f.lazyAssign(t, f.nonComputedMember("l", e.name))),
                        (f.state.expensiveChecks || Gr(e.name)) && f.addEnsureSafeObject(t),
                        r(t);
                        break;
                    case Mr.MemberExpression:
                        a = n && (n.context = this.nextId()) || this.nextId(),
                        t = t || this.nextId(),
                        f.recurse(e.object, a, void 0, function() {
                            f.if_(f.notNull(a), function() {
                                i && 1 !== i && f.addEnsureSafeAssignContext(a),
                                e.computed ? (s = f.nextId(),
                                f.recurse(e.property, s),
                                f.getStringValue(s),
                                f.addEnsureSafeMemberName(s),
                                i && 1 !== i && f.if_(f.not(f.computedMember(a, s)), f.lazyAssign(f.computedMember(a, s), "{}")),
                                c = f.ensureSafeObject(f.computedMember(a, s)),
                                f.assign(t, c),
                                n && (n.computed = !0,
                                n.name = s)) : (_r(e.property.name),
                                i && 1 !== i && f.if_(f.not(f.nonComputedMember(a, e.property.name)), f.lazyAssign(f.nonComputedMember(a, e.property.name), "{}")),
                                c = f.nonComputedMember(a, e.property.name),
                                (f.state.expensiveChecks || Gr(e.property.name)) && (c = f.ensureSafeObject(c)),
                                f.assign(t, c),
                                n && (n.computed = !1,
                                n.name = e.property.name))
                            }, function() {
                                f.assign(t, "undefined")
                            }),
                            r(t)
                        }, !!i);
                        break;
                    case Mr.CallExpression:
                        t = t || this.nextId(),
                        e.filter ? (s = f.filter(e.callee.name),
                        u = [],
                        w(e.arguments, function(e) {
                            var t = f.nextId();
                            f.recurse(e, t),
                            u.push(t)
                        }),
                        c = s + "(" + u.join(",") + ")",
                        f.assign(t, c),
                        r(t)) : (s = f.nextId(),
                        a = {},
                        u = [],
                        f.recurse(e.callee, s, a, function() {
                            f.if_(f.notNull(s), function() {
                                f.addEnsureSafeFunction(s),
                                w(e.arguments, function(e) {
                                    f.recurse(e, f.nextId(), void 0, function(e) {
                                        u.push(f.ensureSafeObject(e))
                                    })
                                }),
                                a.name ? (f.state.expensiveChecks || f.addEnsureSafeObject(a.context),
                                c = f.member(a.context, a.name, a.computed) + "(" + u.join(",") + ")") : c = s + "(" + u.join(",") + ")",
                                c = f.ensureSafeObject(c),
                                f.assign(t, c)
                            }, function() {
                                f.assign(t, "undefined")
                            }),
                            r(t)
                        }));
                        break;
                    case Mr.AssignmentExpression:
                        s = this.nextId(),
                        a = {},
                        this.recurse(e.left, void 0, a, function() {
                            f.if_(f.notNull(a.context), function() {
                                f.recurse(e.right, s),
                                f.addEnsureSafeObject(f.member(a.context, a.name, a.computed)),
                                f.addEnsureSafeAssignContext(a.context),
                                c = f.member(a.context, a.name, a.computed) + e.operator + s,
                                f.assign(t, c),
                                r(t || c)
                            })
                        }, 1);
                        break;
                    case Mr.ArrayExpression:
                        u = [],
                        w(e.elements, function(e) {
                            f.recurse(e, f.nextId(), void 0, function(e) {
                                u.push(e)
                            })
                        }),
                        c = "[" + u.join(",") + "]",
                        this.assign(t, c),
                        r(c);
                        break;
                    case Mr.ObjectExpression:
                        u = [],
                        l = !1,
                        w(e.properties, function(e) {
                            e.computed && (l = !0)
                        }),
                        l ? (t = t || this.nextId(),
                        this.assign(t, "{}"),
                        w(e.properties, function(e) {
                            e.computed ? (a = f.nextId(),
                            f.recurse(e.key, a)) : a = e.key.type === Mr.Identifier ? e.key.name : "" + e.key.value,
                            s = f.nextId(),
                            f.recurse(e.value, s),
                            f.assign(f.member(t, a, e.computed), s)
                        })) : (w(e.properties, function(t) {
                            f.recurse(t.value, e.constant ? void 0 : f.nextId(), void 0, function(e) {
                                u.push(f.escape(t.key.type === Mr.Identifier ? t.key.name : "" + t.key.value) + ":" + e)
                            })
                        }),
                        c = "{" + u.join(",") + "}",
                        this.assign(t, c)),
                        r(t || c);
                        break;
                    case Mr.ThisExpression:
                        this.assign(t, "s"),
                        r("s");
                        break;
                    case Mr.LocalsExpression:
                        this.assign(t, "l"),
                        r("l");
                        break;
                    case Mr.NGValueParameter:
                        this.assign(t, "v"),
                        r("v")
                    }
                },
                getHasOwnProperty: function(e, t) {
                    var n = e + "." + t
                      , r = this.current().own;
                    return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, e + "&&(" + this.escape(t) + " in " + e + ")")),
                    r[n]
                },
                assign: function(e, t) {
                    if (e)
                        return this.current().body.push(e, "=", t, ";"),
                        e
                },
                filter: function(e) {
                    return this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(!0)),
                    this.state.filters[e]
                },
                ifDefined: function(e, t) {
                    return "ifDefined(" + e + "," + this.escape(t) + ")"
                },
                plus: function(e, t) {
                    return "plus(" + e + "," + t + ")"
                },
                return_: function(e) {
                    this.current().body.push("return ", e, ";")
                },
                if_: function(e, t, n) {
                    if (!0 === e)
                        t();
                    else {
                        var r = this.current().body;
                        r.push("if(", e, "){"),
                        t(),
                        r.push("}"),
                        n && (r.push("else{"),
                        n(),
                        r.push("}"))
                    }
                },
                not: function(e) {
                    return "!(" + e + ")"
                },
                notNull: function(e) {
                    return e + "!=null"
                },
                nonComputedMember: function(e, t) {
                    return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(t) ? e + "." + t : e + '["' + t.replace(/[^$_a-zA-Z0-9]/g, this.stringEscapeFn) + '"]'
                },
                computedMember: function(e, t) {
                    return e + "[" + t + "]"
                },
                member: function(e, t, n) {
                    return n ? this.computedMember(e, t) : this.nonComputedMember(e, t)
                },
                addEnsureSafeObject: function(e) {
                    this.current().body.push(this.ensureSafeObject(e), ";")
                },
                addEnsureSafeMemberName: function(e) {
                    this.current().body.push(this.ensureSafeMemberName(e), ";")
                },
                addEnsureSafeFunction: function(e) {
                    this.current().body.push(this.ensureSafeFunction(e), ";")
                },
                addEnsureSafeAssignContext: function(e) {
                    this.current().body.push(this.ensureSafeAssignContext(e), ";")
                },
                ensureSafeObject: function(e) {
                    return "ensureSafeObject(" + e + ",text)"
                },
                ensureSafeMemberName: function(e) {
                    return "ensureSafeMemberName(" + e + ",text)"
                },
                ensureSafeFunction: function(e) {
                    return "ensureSafeFunction(" + e + ",text)"
                },
                getStringValue: function(e) {
                    this.assign(e, "getStringValue(" + e + ")")
                },
                ensureSafeAssignContext: function(e) {
                    return "ensureSafeAssignContext(" + e + ",text)"
                },
                lazyRecurse: function(e, t, n, r, i, o) {
                    var a = this;
                    return function() {
                        a.recurse(e, t, n, r, i, o)
                    }
                },
                lazyAssign: function(e, t) {
                    var n = this;
                    return function() {
                        n.assign(e, t)
                    }
                },
                stringEscapeRegex: /[^ a-zA-Z0-9]/g,
                stringEscapeFn: function(e) {
                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                },
                escape: function(e) {
                    if (H(e))
                        return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
                    if (U(e))
                        return e.toString();
                    if (!0 === e)
                        return "true";
                    if (!1 === e)
                        return "false";
                    if (null === e)
                        return "null";
                    if (void 0 === e)
                        return "undefined";
                    throw ur("esc", "IMPOSSIBLE")
                },
                nextId: function(e, t) {
                    var n = "v" + this.state.nextId++;
                    return e || this.current().vars.push(n + (t ? "=" + t : "")),
                    n
                },
                current: function() {
                    return this.state[this.state.computing]
                }
            },
            qr.prototype = {
                compile: function(e, t) {
                    var n, r, i = this, o = this.astBuilder.ast(e);
                    this.expression = e,
                    this.expensiveChecks = t,
                    Rr(o, i.$filter),
                    (n = Fr(o)) && (r = this.recurse(n));
                    var a, s = Pr(o.body);
                    s && (a = [],
                    w(s, function(e, t) {
                        var n = i.recurse(e);
                        e.input = n,
                        a.push(n),
                        e.watchId = t
                    }));
                    var u = [];
                    w(o.body, function(e) {
                        u.push(i.recurse(e.expression))
                    });
                    var c = 0 === o.body.length ? D : 1 === o.body.length ? u[0] : function(e, t) {
                        var n;
                        return w(u, function(r) {
                            n = r(e, t)
                        }),
                        n
                    }
                    ;
                    return r && (c.assign = function(e, t, n) {
                        return r(e, n, t)
                    }
                    ),
                    a && (c.inputs = a),
                    c.literal = Hr(o),
                    c.constant = Ur(o),
                    c
                },
                recurse: function(e, t, n) {
                    var r, i, o, a = this;
                    if (e.input)
                        return this.inputs(e.input, e.watchId);
                    switch (e.type) {
                    case Mr.Literal:
                        return this.value(e.value, t);
                    case Mr.UnaryExpression:
                        return i = this.recurse(e.argument),
                        this["unary" + e.operator](i, t);
                    case Mr.BinaryExpression:
                    case Mr.LogicalExpression:
                        return r = this.recurse(e.left),
                        i = this.recurse(e.right),
                        this["binary" + e.operator](r, i, t);
                    case Mr.ConditionalExpression:
                        return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), t);
                    case Mr.Identifier:
                        return _r(e.name, a.expression),
                        a.identifier(e.name, a.expensiveChecks || Gr(e.name), t, n, a.expression);
                    case Mr.MemberExpression:
                        return r = this.recurse(e.object, !1, !!n),
                        e.computed || (_r(e.property.name, a.expression),
                        i = e.property.name),
                        e.computed && (i = this.recurse(e.property)),
                        e.computed ? this.computedMember(r, i, t, n, a.expression) : this.nonComputedMember(r, i, a.expensiveChecks, t, n, a.expression);
                    case Mr.CallExpression:
                        return o = [],
                        w(e.arguments, function(e) {
                            o.push(a.recurse(e))
                        }),
                        e.filter && (i = this.$filter(e.callee.name)),
                        e.filter || (i = this.recurse(e.callee, !0)),
                        e.filter ? function(e, n, r, a) {
                            for (var s = [], u = 0; u < o.length; ++u)
                                s.push(o[u](e, n, r, a));
                            var c = i.apply(void 0, s, a);
                            return t ? {
                                context: void 0,
                                name: void 0,
                                value: c
                            } : c
                        }
                        : function(e, n, r, s) {
                            var u, c = i(e, n, r, s);
                            if (null != c.value) {
                                Ar(c.context, a.expression),
                                Tr(c.value, a.expression);
                                for (var l = [], f = 0; f < o.length; ++f)
                                    l.push(Ar(o[f](e, n, r, s), a.expression));
                                u = Ar(c.value.apply(c.context, l), a.expression)
                            }
                            return t ? {
                                value: u
                            } : u
                        }
                        ;
                    case Mr.AssignmentExpression:
                        return r = this.recurse(e.left, !0, 1),
                        i = this.recurse(e.right),
                        function(e, n, o, s) {
                            var u = r(e, n, o, s)
                              , c = i(e, n, o, s);
                            return Ar(u.value, a.expression),
                            Or(u.context),
                            u.context[u.name] = c,
                            t ? {
                                value: c
                            } : c
                        }
                        ;
                    case Mr.ArrayExpression:
                        return o = [],
                        w(e.elements, function(e) {
                            o.push(a.recurse(e))
                        }),
                        function(e, n, r, i) {
                            for (var a = [], s = 0; s < o.length; ++s)
                                a.push(o[s](e, n, r, i));
                            return t ? {
                                value: a
                            } : a
                        }
                        ;
                    case Mr.ObjectExpression:
                        return o = [],
                        w(e.properties, function(e) {
                            e.computed ? o.push({
                                key: a.recurse(e.key),
                                computed: !0,
                                value: a.recurse(e.value)
                            }) : o.push({
                                key: e.key.type === Mr.Identifier ? e.key.name : "" + e.key.value,
                                computed: !1,
                                value: a.recurse(e.value)
                            })
                        }),
                        function(e, n, r, i) {
                            for (var a = {}, s = 0; s < o.length; ++s)
                                o[s].computed ? a[o[s].key(e, n, r, i)] = o[s].value(e, n, r, i) : a[o[s].key] = o[s].value(e, n, r, i);
                            return t ? {
                                value: a
                            } : a
                        }
                        ;
                    case Mr.ThisExpression:
                        return function(e) {
                            return t ? {
                                value: e
                            } : e
                        }
                        ;
                    case Mr.LocalsExpression:
                        return function(e, n) {
                            return t ? {
                                value: n
                            } : n
                        }
                        ;
                    case Mr.NGValueParameter:
                        return function(e, n, r) {
                            return t ? {
                                value: r
                            } : r
                        }
                    }
                },
                "unary+": function(e, t) {
                    return function(n, r, i, o) {
                        var a = e(n, r, i, o);
                        return a = P(a) ? +a : 0,
                        t ? {
                            value: a
                        } : a
                    }
                },
                "unary-": function(e, t) {
                    return function(n, r, i, o) {
                        var a = e(n, r, i, o);
                        return a = P(a) ? -a : 0,
                        t ? {
                            value: a
                        } : a
                    }
                },
                "unary!": function(e, t) {
                    return function(n, r, i, o) {
                        var a = !e(n, r, i, o);
                        return t ? {
                            value: a
                        } : a
                    }
                },
                "binary+": function(e, t, n) {
                    return function(r, i, o, a) {
                        var s = jr(e(r, i, o, a), t(r, i, o, a));
                        return n ? {
                            value: s
                        } : s
                    }
                },
                "binary-": function(e, t, n) {
                    return function(r, i, o, a) {
                        var s = e(r, i, o, a)
                          , u = t(r, i, o, a)
                          , c = (P(s) ? s : 0) - (P(u) ? u : 0);
                        return n ? {
                            value: c
                        } : c
                    }
                },
                "binary*": function(e, t, n) {
                    return function(r, i, o, a) {
                        var s = e(r, i, o, a) * t(r, i, o, a);
                        return n ? {
                            value: s
                        } : s
                    }
                },
                "binary/": function(e, t, n) {
                    return function(r, i, o, a) {
                        var s = e(r, i, o, a) / t(r, i, o, a);
                        return n ? {
                            value: s
                        } : s
                    }
                },
                "binary%": function(e, t, n) {
                    return function(r, i, o, a) {
                        var s = e(r, i, o, a) % t(r, i, o, a);
                        return n ? {
                            value: s
                        } : s
                    }
                },
                "binary===": function(e, t, n) {
                    return function(r, i, o, a) {
                        var s = e(r, i, o, a) === t(r, i, o, a);
                        return n ? {
                            value: s
                        } : s
                    }
                },
                "binary!==": function(e, t, n) {
                    return function(r, i, o, a) {
                        var s = e(r, i, o, a) !== t(r, i, o, a);
                        return n ? {
                            value: s
                        } : s
                    }
                },
                "binary==": function(e, t, n) {
                    return function(r, i, o, a) {
                        var s = e(r, i, o, a) == t(r, i, o, a);
                        return n ? {
                            value: s
                        } : s
                    }
                },
                "binary!=": function(e, t, n) {
                    return function(r, i, o, a) {
                        var s = e(r, i, o, a) != t(r, i, o, a);
                        return n ? {
                            value: s
                        } : s
                    }
                },
                "binary<": function(e, t, n) {
                    return function(r, i, o, a) {
                        var s = e(r, i, o, a) < t(r, i, o, a);
                        return n ? {
                            value: s
                        } : s
                    }
                },
                "binary>": function(e, t, n) {
                    return function(r, i, o, a) {
                        var s = e(r, i, o, a) > t(r, i, o, a);
                        return n ? {
                            value: s
                        } : s
                    }
                },
                "binary<=": function(e, t, n) {
                    return function(r, i, o, a) {
                        var s = e(r, i, o, a) <= t(r, i, o, a);
                        return n ? {
                            value: s
                        } : s
                    }
                },
                "binary>=": function(e, t, n) {
                    return function(r, i, o, a) {
                        var s = e(r, i, o, a) >= t(r, i, o, a);
                        return n ? {
                            value: s
                        } : s
                    }
                },
                "binary&&": function(e, t, n) {
                    return function(r, i, o, a) {
                        var s = e(r, i, o, a) && t(r, i, o, a);
                        return n ? {
                            value: s
                        } : s
                    }
                },
                "binary||": function(e, t, n) {
                    return function(r, i, o, a) {
                        var s = e(r, i, o, a) || t(r, i, o, a);
                        return n ? {
                            value: s
                        } : s
                    }
                },
                "ternary?:": function(e, t, n, r) {
                    return function(i, o, a, s) {
                        var u = e(i, o, a, s) ? t(i, o, a, s) : n(i, o, a, s);
                        return r ? {
                            value: u
                        } : u
                    }
                },
                value: function(e, t) {
                    return function() {
                        return t ? {
                            context: void 0,
                            name: void 0,
                            value: e
                        } : e
                    }
                },
                identifier: function(e, t, n, r, i) {
                    return function(o, a, s, u) {
                        var c = a && e in a ? a : o;
                        r && 1 !== r && c && !c[e] && (c[e] = {});
                        var l = c ? c[e] : void 0;
                        return t && Ar(l, i),
                        n ? {
                            context: c,
                            name: e,
                            value: l
                        } : l
                    }
                },
                computedMember: function(e, t, n, r, i) {
                    return function(o, a, s, u) {
                        var c, l, f = e(o, a, s, u);
                        return null != f && (_r(c = kr(c = t(o, a, s, u)), i),
                        r && 1 !== r && (Or(f),
                        f && !f[c] && (f[c] = {})),
                        Ar(l = f[c], i)),
                        n ? {
                            context: f,
                            name: c,
                            value: l
                        } : l
                    }
                },
                nonComputedMember: function(e, t, n, r, i, o) {
                    return function(a, s, u, c) {
                        var l = e(a, s, u, c);
                        i && 1 !== i && (Or(l),
                        l && !l[t] && (l[t] = {}));
                        var f = null != l ? l[t] : void 0;
                        return (n || Gr(t)) && Ar(f, o),
                        r ? {
                            context: l,
                            name: t,
                            value: f
                        } : f
                    }
                },
                inputs: function(e, t) {
                    return function(n, r, i, o) {
                        return o ? o[t] : e(n, r, i)
                    }
                }
            };
            var Br = function(e, t, n) {
                this.lexer = e,
                this.$filter = t,
                this.options = n,
                this.ast = new Mr(e,n),
                this.astCompiler = n.csp ? new qr(this.ast,t) : new Vr(this.ast,t)
            };
            function Gr(e) {
                return "constructor" === e
            }
            function Wr(e) {
                return B(e.valueOf) ? e.valueOf() : Sr.call(e)
            }
            function zr() {
                var e, t, n = je(), r = je(), i = {
                    true: !0,
                    false: !1,
                    null: null,
                    undefined: void 0
                };
                this.addLiteral = function(e, t) {
                    i[e] = t
                }
                ,
                this.setIdentifierFns = function(n, r) {
                    return e = n,
                    t = r,
                    this
                }
                ,
                this.$get = ["$filter", function(o) {
                    var a = ie().noUnsafeEval
                      , s = {
                        csp: a,
                        expensiveChecks: !1,
                        literals: ne(i),
                        isIdentifierStart: B(e) && e,
                        isIdentifierContinue: B(t) && t
                    }
                      , u = {
                        csp: a,
                        expensiveChecks: !0,
                        literals: ne(i),
                        isIdentifierStart: B(e) && e,
                        isIdentifierContinue: B(t) && t
                    }
                      , c = !1;
                    return l.$$runningExpensiveChecks = function() {
                        return c
                    }
                    ,
                    l;
                    function l(e, t, i) {
                        var a, l, f;
                        switch (i = i || c,
                        typeof e) {
                        case "string":
                            e = e.trim();
                            var v = i ? r : n;
                            if (!(a = v[f = e])) {
                                ":" === e.charAt(0) && ":" === e.charAt(1) && (l = !0,
                                e = e.substring(2));
                                var $ = i ? u : s
                                  , y = new Dr($);
                                (a = new Br(y,o,$).parse(e)).constant ? a.$$watchDelegate = g : l ? a.$$watchDelegate = a.literal ? p : h : a.inputs && (a.$$watchDelegate = d),
                                i && (a = function e(t) {
                                    if (!t)
                                        return t;
                                    r.$$watchDelegate = t.$$watchDelegate;
                                    r.assign = e(t.assign);
                                    r.constant = t.constant;
                                    r.literal = t.literal;
                                    for (var n = 0; t.inputs && n < t.inputs.length; ++n)
                                        t.inputs[n] = e(t.inputs[n]);
                                    r.inputs = t.inputs;
                                    return r;
                                    function r(e, n, r, i) {
                                        var o = c;
                                        c = !0;
                                        try {
                                            return t(e, n, r, i)
                                        } finally {
                                            c = o
                                        }
                                    }
                                }(a)),
                                v[f] = a
                            }
                            return m(a, t);
                        case "function":
                            return m(e, t);
                        default:
                            return m(D, t)
                        }
                    }
                    function f(e, t) {
                        return null == e || null == t ? e === t : ("object" != typeof e || "object" != typeof (e = Wr(e))) && (e === t || e != e && t != t)
                    }
                    function d(e, t, n, r, i) {
                        var o, a = r.inputs;
                        if (1 === a.length) {
                            var s = f;
                            return a = a[0],
                            e.$watch(function(e) {
                                var t = a(e);
                                return f(t, s) || (o = r(e, void 0, void 0, [t]),
                                s = t && Wr(t)),
                                o
                            }, t, n, i)
                        }
                        for (var u = [], c = [], l = 0, d = a.length; l < d; l++)
                            u[l] = f,
                            c[l] = null;
                        return e.$watch(function(e) {
                            for (var t = !1, n = 0, i = a.length; n < i; n++) {
                                var s = a[n](e);
                                (t || (t = !f(s, u[n]))) && (c[n] = s,
                                u[n] = s && Wr(s))
                            }
                            return t && (o = r(e, void 0, void 0, c)),
                            o
                        }, t, n, i)
                    }
                    function h(e, t, n, r) {
                        var i, o;
                        return i = e.$watch(function(e) {
                            return r(e)
                        }, function(e, n, r) {
                            o = e,
                            B(t) && t.apply(this, arguments),
                            P(e) && r.$$postDigest(function() {
                                P(o) && i()
                            })
                        }, n)
                    }
                    function p(e, t, n, r) {
                        var i, o;
                        return i = e.$watch(function(e) {
                            return r(e)
                        }, function(e, n, r) {
                            o = e,
                            B(t) && t.call(this, e, n, r),
                            a(e) && r.$$postDigest(function() {
                                a(o) && i()
                            })
                        }, n);
                        function a(e) {
                            var t = !0;
                            return w(e, function(e) {
                                P(e) || (t = !1)
                            }),
                            t
                        }
                    }
                    function g(e, t, n, r) {
                        var i = e.$watch(function(e) {
                            return i(),
                            r(e)
                        }, t, n);
                        return i
                    }
                    function m(e, t) {
                        if (!t)
                            return e;
                        var n = e.$$watchDelegate
                          , r = !1
                          , i = n !== p && n !== h ? function(n, i, o, a) {
                            var s = r && a ? a[0] : e(n, i, o, a);
                            return t(s, n, i)
                        }
                        : function(n, r, i, o) {
                            var a = e(n, r, i, o)
                              , s = t(a, n, r);
                            return P(a) ? s : a
                        }
                        ;
                        return e.$$watchDelegate && e.$$watchDelegate !== d ? i.$$watchDelegate = e.$$watchDelegate : t.$stateful || (i.$$watchDelegate = d,
                        r = !e.inputs,
                        i.inputs = e.inputs ? e.inputs : [e]),
                        i
                    }
                }
                ]
            }
            function Yr() {
                this.$get = ["$rootScope", "$exceptionHandler", function(e, t) {
                    return Jr(function(t) {
                        e.$evalAsync(t)
                    }, t)
                }
                ]
            }
            function Kr() {
                this.$get = ["$browser", "$exceptionHandler", function(e, t) {
                    return Jr(function(t) {
                        e.defer(t)
                    }, t)
                }
                ]
            }
            function Jr(e, t) {
                var r = n("$q", TypeError);
                function i() {
                    var e = new u;
                    return e.resolve = a(e, e.resolve),
                    e.reject = a(e, e.reject),
                    e.notify = a(e, e.notify),
                    e
                }
                function o() {
                    this.$$state = {
                        status: 0
                    }
                }
                function a(e, t) {
                    return function(n) {
                        t.call(e, n)
                    }
                }
                function s(n) {
                    !n.processScheduled && n.pending && (n.processScheduled = !0,
                    e(function() {
                        !function(e) {
                            var n, r, i;
                            i = e.pending,
                            e.processScheduled = !1,
                            e.pending = void 0;
                            for (var o = 0, a = i.length; o < a; ++o) {
                                r = i[o][0],
                                n = i[o][e.status];
                                try {
                                    B(n) ? r.resolve(n(e.value)) : 1 === e.status ? r.resolve(e.value) : r.reject(e.value)
                                } catch (e) {
                                    r.reject(e),
                                    t(e)
                                }
                            }
                        }(n)
                    }))
                }
                function u() {
                    this.promise = new o
                }
                function c(e) {
                    var t = new u;
                    return t.reject(e),
                    t.promise
                }
                function l(e, t, n) {
                    var r = null;
                    try {
                        B(n) && (r = n())
                    } catch (e) {
                        return c(e)
                    }
                    return K(r) ? r.then(function() {
                        return t(e)
                    }, c) : t(e)
                }
                function f(e, t, n, r) {
                    var i = new u;
                    return i.resolve(e),
                    i.promise.then(t, n, r)
                }
                A(o.prototype, {
                    then: function(e, t, n) {
                        if (R(e) && R(t) && R(n))
                            return this;
                        var r = new u;
                        return this.$$state.pending = this.$$state.pending || [],
                        this.$$state.pending.push([r, e, t, n]),
                        this.$$state.status > 0 && s(this.$$state),
                        r.promise
                    },
                    catch: function(e) {
                        return this.then(null, e)
                    },
                    finally: function(e, t) {
                        return this.then(function(t) {
                            return l(t, d, e)
                        }, function(t) {
                            return l(t, c, e)
                        }, t)
                    }
                }),
                A(u.prototype, {
                    resolve: function(e) {
                        this.promise.$$state.status || (e === this.promise ? this.$$reject(r("qcycle", "Expected promise to be resolved with value other than itself '{0}'", e)) : this.$$resolve(e))
                    },
                    $$resolve: function(e) {
                        var n, r = this, i = !1;
                        try {
                            (L(e) || B(e)) && (n = e && e.then),
                            B(n) ? (this.promise.$$state.status = -1,
                            n.call(e, function(e) {
                                if (i)
                                    return;
                                i = !0,
                                r.$$resolve(e)
                            }, o, a(this, this.notify))) : (this.promise.$$state.value = e,
                            this.promise.$$state.status = 1,
                            s(this.promise.$$state))
                        } catch (e) {
                            o(e),
                            t(e)
                        }
                        function o(e) {
                            i || (i = !0,
                            r.$$reject(e))
                        }
                    },
                    reject: function(e) {
                        this.promise.$$state.status || this.$$reject(e)
                    },
                    $$reject: function(e) {
                        this.promise.$$state.value = e,
                        this.promise.$$state.status = 2,
                        s(this.promise.$$state)
                    },
                    notify: function(n) {
                        var r = this.promise.$$state.pending;
                        this.promise.$$state.status <= 0 && r && r.length && e(function() {
                            for (var e, i, o = 0, a = r.length; o < a; o++) {
                                i = r[o][0],
                                e = r[o][3];
                                try {
                                    i.notify(B(e) ? e(n) : n)
                                } catch (e) {
                                    t(e)
                                }
                            }
                        })
                    }
                });
                var d = f;
                function h(e) {
                    if (!B(e))
                        throw r("norslvr", "Expected resolverFn, got '{0}'", e);
                    var t = new u;
                    return e(function(e) {
                        t.resolve(e)
                    }, function(e) {
                        t.reject(e)
                    }),
                    t.promise
                }
                return h.prototype = o.prototype,
                h.defer = i,
                h.reject = c,
                h.when = f,
                h.resolve = d,
                h.all = function(e) {
                    var t = new u
                      , n = 0
                      , r = q(e) ? [] : {};
                    return w(e, function(e, i) {
                        n++,
                        f(e).then(function(e) {
                            r[i] = e,
                            --n || t.resolve(r)
                        }, function(e) {
                            t.reject(e)
                        })
                    }),
                    0 === n && t.resolve(r),
                    t.promise
                }
                ,
                h.race = function(e) {
                    var t = i();
                    return w(e, function(e) {
                        f(e).then(t.resolve, t.reject)
                    }),
                    t.promise
                }
                ,
                h
            }
            function Zr() {
                this.$get = ["$window", "$timeout", function(e, t) {
                    var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame
                      , r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame
                      , i = !!n
                      , o = i ? function(e) {
                        var t = n(e);
                        return function() {
                            r(t)
                        }
                    }
                    : function(e) {
                        var n = t(e, 16.66, !1);
                        return function() {
                            t.cancel(n)
                        }
                    }
                    ;
                    return o.supported = i,
                    o
                }
                ]
            }
            function Xr() {
                var e = 10
                  , t = n("$rootScope")
                  , r = null
                  , i = null;
                this.digestTtl = function(t) {
                    return arguments.length && (e = t),
                    e
                }
                ,
                this.$get = ["$exceptionHandler", "$parse", "$browser", function(n, a, s) {
                    function c(e) {
                        e.currentScope.$$destroyed = !0
                    }
                    function l() {
                        this.$id = S(),
                        this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null,
                        this.$root = this,
                        this.$$destroyed = !1,
                        this.$$listeners = {},
                        this.$$listenerCount = {},
                        this.$$watchersCount = 0,
                        this.$$isolateBindings = null
                    }
                    l.prototype = {
                        constructor: l,
                        $new: function(e, t) {
                            var n;
                            return t = t || this,
                            e ? (n = new l).$root = this.$root : (this.$$ChildScope || (this.$$ChildScope = function(e) {
                                function t() {
                                    this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null,
                                    this.$$listeners = {},
                                    this.$$listenerCount = {},
                                    this.$$watchersCount = 0,
                                    this.$id = S(),
                                    this.$$ChildScope = null
                                }
                                return t.prototype = e,
                                t
                            }(this)),
                            n = new this.$$ChildScope),
                            n.$parent = t,
                            n.$$prevSibling = t.$$childTail,
                            t.$$childHead ? (t.$$childTail.$$nextSibling = n,
                            t.$$childTail = n) : t.$$childHead = t.$$childTail = n,
                            (e || t !== this) && n.$on("$destroy", c),
                            n
                        },
                        $watch: function(e, t, n, i) {
                            var o = a(e);
                            if (o.$$watchDelegate)
                                return o.$$watchDelegate(this, t, n, o, e);
                            var s = this
                              , u = s.$$watchers
                              , c = {
                                fn: t,
                                last: x,
                                get: o,
                                exp: i || e,
                                eq: !!n
                            };
                            return r = null,
                            B(t) || (c.fn = D),
                            u || ((u = s.$$watchers = []).$$digestWatchIndex = -1),
                            u.unshift(c),
                            u.$$digestWatchIndex++,
                            $(this, 1),
                            function() {
                                var e = te(u, c);
                                e >= 0 && ($(s, -1),
                                e < u.$$digestWatchIndex && u.$$digestWatchIndex--),
                                r = null
                            }
                        },
                        $watchGroup: function(e, t) {
                            var n = new Array(e.length)
                              , r = new Array(e.length)
                              , i = []
                              , o = this
                              , a = !1
                              , s = !0;
                            if (!e.length) {
                                var u = !0;
                                return o.$evalAsync(function() {
                                    u && t(r, r, o)
                                }),
                                function() {
                                    u = !1
                                }
                            }
                            if (1 === e.length)
                                return this.$watch(e[0], function(e, i, o) {
                                    r[0] = e,
                                    n[0] = i,
                                    t(r, e === i ? r : n, o)
                                });
                            function c() {
                                a = !1,
                                s ? (s = !1,
                                t(r, r, o)) : t(r, n, o)
                            }
                            return w(e, function(e, t) {
                                var s = o.$watch(e, function(e, i) {
                                    r[t] = e,
                                    n[t] = i,
                                    a || (a = !0,
                                    o.$evalAsync(c))
                                });
                                i.push(s)
                            }),
                            function() {
                                for (; i.length; )
                                    i.shift()()
                            }
                        },
                        $watchCollection: function(e, t) {
                            g.$stateful = !0;
                            var n, r, i, s = this, u = t.length > 1, c = 0, l = a(e, g), f = [], d = {}, h = !0, p = 0;
                            function g(e) {
                                var t, i, a, s;
                                if (!R(n = e)) {
                                    if (L(n))
                                        if (b(n)) {
                                            r !== f && (p = (r = f).length = 0,
                                            c++),
                                            t = n.length,
                                            p !== t && (c++,
                                            r.length = p = t);
                                            for (var u = 0; u < t; u++)
                                                s = r[u],
                                                a = n[u],
                                                s != s && a != a || s === a || (c++,
                                                r[u] = a)
                                        } else {
                                            for (i in r !== d && (r = d = {},
                                            p = 0,
                                            c++),
                                            t = 0,
                                            n)
                                                o.call(n, i) && (t++,
                                                a = n[i],
                                                s = r[i],
                                                i in r ? s != s && a != a || s === a || (c++,
                                                r[i] = a) : (p++,
                                                r[i] = a,
                                                c++));
                                            if (p > t)
                                                for (i in c++,
                                                r)
                                                    o.call(n, i) || (p--,
                                                    delete r[i])
                                        }
                                    else
                                        r !== n && (r = n,
                                        c++);
                                    return c
                                }
                            }
                            return this.$watch(l, function() {
                                if (h ? (h = !1,
                                t(n, n, s)) : t(n, i, s),
                                u)
                                    if (L(n))
                                        if (b(n)) {
                                            i = new Array(n.length);
                                            for (var e = 0; e < n.length; e++)
                                                i[e] = n[e]
                                        } else
                                            for (var r in i = {},
                                            n)
                                                o.call(n, r) && (i[r] = n[r]);
                                    else
                                        i = n
                            })
                        },
                        $digest: function() {
                            var o, a, u, c, l, p, $, y, b, w = e, S = [];
                            m("$digest"),
                            s.$$checkUrlChange(),
                            this === f && null !== i && (s.defer.cancel(i),
                            E()),
                            r = null;
                            do {
                                l = !1,
                                $ = this;
                                for (var _ = 0; _ < d.length; _++) {
                                    try {
                                        (b = d[_]).scope.$eval(b.expression, b.locals)
                                    } catch (e) {
                                        n(e)
                                    }
                                    r = null
                                }
                                d.length = 0;
                                e: do {
                                    if (c = $.$$watchers)
                                        for (c.$$digestWatchIndex = c.length; c.$$digestWatchIndex--; )
                                            try {
                                                if (o = c[c.$$digestWatchIndex])
                                                    if ((a = (0,
                                                    o.get)($)) === (u = o.last) || (o.eq ? re(a, u) : C(a) && C(u))) {
                                                        if (o === r) {
                                                            l = !1;
                                                            break e
                                                        }
                                                    } else
                                                        l = !0,
                                                        r = o,
                                                        o.last = o.eq ? ne(a, null) : a,
                                                        (0,
                                                        o.fn)(a, u === x ? a : u, $),
                                                        w < 5 && (S[y = 4 - w] || (S[y] = []),
                                                        S[y].push({
                                                            msg: B(o.exp) ? "fn: " + (o.exp.name || o.exp.toString()) : o.exp,
                                                            newVal: a,
                                                            oldVal: u
                                                        }))
                                            } catch (e) {
                                                n(e)
                                            }
                                    if (!(p = $.$$watchersCount && $.$$childHead || $ !== this && $.$$nextSibling))
                                        for (; $ !== this && !(p = $.$$nextSibling); )
                                            $ = $.$parent
                                } while ($ = p);if ((l || d.length) && !w--)
                                    throw v(),
                                    t("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", e, S)
                            } while (l || d.length);for (v(); g < h.length; )
                                try {
                                    h[g++]()
                                } catch (e) {
                                    n(e)
                                }
                            h.length = g = 0
                        },
                        $destroy: function() {
                            if (!this.$$destroyed) {
                                var e = this.$parent;
                                for (var t in this.$broadcast("$destroy"),
                                this.$$destroyed = !0,
                                this === f && s.$$applicationDestroyed(),
                                $(this, -this.$$watchersCount),
                                this.$$listenerCount)
                                    y(this, this.$$listenerCount[t], t);
                                e && e.$$childHead === this && (e.$$childHead = this.$$nextSibling),
                                e && e.$$childTail === this && (e.$$childTail = this.$$prevSibling),
                                this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling),
                                this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling),
                                this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = D,
                                this.$on = this.$watch = this.$watchGroup = function() {
                                    return D
                                }
                                ,
                                this.$$listeners = {},
                                this.$$nextSibling = null,
                                function e(t) {
                                    9 === u && (t.$$childHead && e(t.$$childHead),
                                    t.$$nextSibling && e(t.$$nextSibling)),
                                    t.$parent = t.$$nextSibling = t.$$prevSibling = t.$$childHead = t.$$childTail = t.$root = t.$$watchers = null
                                }(this)
                            }
                        },
                        $eval: function(e, t) {
                            return a(e)(this, t)
                        },
                        $evalAsync: function(e, t) {
                            f.$$phase || d.length || s.defer(function() {
                                d.length && f.$digest()
                            }),
                            d.push({
                                scope: this,
                                expression: a(e),
                                locals: t
                            })
                        },
                        $$postDigest: function(e) {
                            h.push(e)
                        },
                        $apply: function(e) {
                            try {
                                m("$apply");
                                try {
                                    return this.$eval(e)
                                } finally {
                                    v()
                                }
                            } catch (e) {
                                n(e)
                            } finally {
                                try {
                                    f.$digest()
                                } catch (e) {
                                    throw n(e),
                                    e
                                }
                            }
                        },
                        $applyAsync: function(e) {
                            var t = this;
                            e && p.push(function() {
                                t.$eval(e)
                            }),
                            e = a(e),
                            null === i && (i = s.defer(function() {
                                f.$apply(E)
                            }))
                        },
                        $on: function(e, t) {
                            var n = this.$$listeners[e];
                            n || (this.$$listeners[e] = n = []),
                            n.push(t);
                            var r = this;
                            do {
                                r.$$listenerCount[e] || (r.$$listenerCount[e] = 0),
                                r.$$listenerCount[e]++
                            } while (r = r.$parent);var i = this;
                            return function() {
                                var r = n.indexOf(t);
                                -1 !== r && (n[r] = null,
                                y(i, 1, e))
                            }
                        },
                        $emit: function(e, t) {
                            var r, i, o, a = [], s = this, u = !1, c = {
                                name: e,
                                targetScope: s,
                                stopPropagation: function() {
                                    u = !0
                                },
                                preventDefault: function() {
                                    c.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            }, l = ae([c], arguments, 1);
                            do {
                                for (r = s.$$listeners[e] || a,
                                c.currentScope = s,
                                i = 0,
                                o = r.length; i < o; i++)
                                    if (r[i])
                                        try {
                                            r[i].apply(null, l)
                                        } catch (e) {
                                            n(e)
                                        }
                                    else
                                        r.splice(i, 1),
                                        i--,
                                        o--;
                                if (u)
                                    return c.currentScope = null,
                                    c;
                                s = s.$parent
                            } while (s);return c.currentScope = null,
                            c
                        },
                        $broadcast: function(e, t) {
                            var r = this
                              , i = this
                              , o = {
                                name: e,
                                targetScope: this,
                                preventDefault: function() {
                                    o.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            };
                            if (!this.$$listenerCount[e])
                                return o;
                            for (var a, s, u, c = ae([o], arguments, 1); r = i; ) {
                                for (o.currentScope = r,
                                s = 0,
                                u = (a = r.$$listeners[e] || []).length; s < u; s++)
                                    if (a[s])
                                        try {
                                            a[s].apply(null, c)
                                        } catch (e) {
                                            n(e)
                                        }
                                    else
                                        a.splice(s, 1),
                                        s--,
                                        u--;
                                if (!(i = r.$$listenerCount[e] && r.$$childHead || r !== this && r.$$nextSibling))
                                    for (; r !== this && !(i = r.$$nextSibling); )
                                        r = r.$parent
                            }
                            return o.currentScope = null,
                            o
                        }
                    };
                    var f = new l
                      , d = f.$$asyncQueue = []
                      , h = f.$$postDigestQueue = []
                      , p = f.$$applyAsyncQueue = []
                      , g = 0;
                    return f;
                    function m(e) {
                        if (f.$$phase)
                            throw t("inprog", "{0} already in progress", f.$$phase);
                        f.$$phase = e
                    }
                    function v() {
                        f.$$phase = null
                    }
                    function $(e, t) {
                        do {
                            e.$$watchersCount += t
                        } while (e = e.$parent)
                    }
                    function y(e, t, n) {
                        do {
                            e.$$listenerCount[n] -= t,
                            0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]
                        } while (e = e.$parent)
                    }
                    function x() {}
                    function E() {
                        for (; p.length; )
                            try {
                                p.shift()()
                            } catch (e) {
                                n(e)
                            }
                        i = null
                    }
                }
                ]
            }
            function Qr() {
                var e = /^\s*(https?|ftp|mailto|tel|file):/
                  , t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
                this.aHrefSanitizationWhitelist = function(t) {
                    return P(t) ? (e = t,
                    this) : e
                }
                ,
                this.imgSrcSanitizationWhitelist = function(e) {
                    return P(e) ? (t = e,
                    this) : t
                }
                ,
                this.$get = function() {
                    return function(n, r) {
                        var i, o = r ? t : e;
                        return "" === (i = di(n).href) || i.match(o) ? n : "unsafe:" + i
                    }
                }
            }
            Br.prototype = {
                constructor: Br,
                parse: function(e) {
                    return this.astCompiler.compile(e, this.options.expensiveChecks)
                }
            };
            var ei = n("$sce")
              , ti = {
                HTML: "html",
                CSS: "css",
                URL: "url",
                RESOURCE_URL: "resourceUrl",
                JS: "js"
            };
            function ni(e) {
                var t = [];
                return P(e) && w(e, function(e) {
                    t.push(function(e) {
                        if ("self" === e)
                            return e;
                        if (H(e)) {
                            if (e.indexOf("***") > -1)
                                throw ei("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
                            return e = X(e).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*"),
                            new RegExp("^" + e + "$")
                        }
                        if (G(e))
                            return new RegExp("^" + e.source + "$");
                        throw ei("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
                    }(e))
                }),
                t
            }
            function ri() {
                this.SCE_CONTEXTS = ti;
                var e = ["self"]
                  , t = [];
                this.resourceUrlWhitelist = function(t) {
                    return arguments.length && (e = ni(t)),
                    e
                }
                ,
                this.resourceUrlBlacklist = function(e) {
                    return arguments.length && (t = ni(e)),
                    t
                }
                ,
                this.$get = ["$injector", function(n) {
                    var r = function(e) {
                        throw ei("unsafe", "Attempting to use an unsafe value in a safe context.")
                    };
                    function i(e, t) {
                        return "self" === e ? hi(t) : !!e.exec(t.href)
                    }
                    function o(e) {
                        var t = function(e) {
                            this.$$unwrapTrustedValue = function() {
                                return e
                            }
                        };
                        return e && (t.prototype = new e),
                        t.prototype.valueOf = function() {
                            return this.$$unwrapTrustedValue()
                        }
                        ,
                        t.prototype.toString = function() {
                            return this.$$unwrapTrustedValue().toString()
                        }
                        ,
                        t
                    }
                    n.has("$sanitize") && (r = n.get("$sanitize"));
                    var a = o()
                      , s = {};
                    return s[ti.HTML] = o(a),
                    s[ti.CSS] = o(a),
                    s[ti.URL] = o(a),
                    s[ti.JS] = o(a),
                    s[ti.RESOURCE_URL] = o(s[ti.URL]),
                    {
                        trustAs: function(e, t) {
                            var n = s.hasOwnProperty(e) ? s[e] : null;
                            if (!n)
                                throw ei("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
                            if (null === t || R(t) || "" === t)
                                return t;
                            if ("string" != typeof t)
                                throw ei("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
                            return new n(t)
                        },
                        getTrusted: function(n, o) {
                            if (null === o || R(o) || "" === o)
                                return o;
                            var a = s.hasOwnProperty(n) ? s[n] : null;
                            if (a && o instanceof a)
                                return o.$$unwrapTrustedValue();
                            if (n === ti.RESOURCE_URL) {
                                if (function(n) {
                                    var r, o, a = di(n.toString()), s = !1;
                                    for (r = 0,
                                    o = e.length; r < o; r++)
                                        if (i(e[r], a)) {
                                            s = !0;
                                            break
                                        }
                                    if (s)
                                        for (r = 0,
                                        o = t.length; r < o; r++)
                                            if (i(t[r], a)) {
                                                s = !1;
                                                break
                                            }
                                    return s
                                }(o))
                                    return o;
                                throw ei("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", o.toString())
                            }
                            if (n === ti.HTML)
                                return r(o);
                            throw ei("unsafe", "Attempting to use an unsafe value in a safe context.")
                        },
                        valueOf: function(e) {
                            return e instanceof a ? e.$$unwrapTrustedValue() : e
                        }
                    }
                }
                ]
            }
            function ii() {
                var e = !0;
                this.enabled = function(t) {
                    return arguments.length && (e = !!t),
                    e
                }
                ,
                this.$get = ["$parse", "$sceDelegate", function(t, n) {
                    if (e && u < 8)
                        throw ei("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                    var r = Ue(ti);
                    r.isEnabled = function() {
                        return e
                    }
                    ,
                    r.trustAs = n.trustAs,
                    r.getTrusted = n.getTrusted,
                    r.valueOf = n.valueOf,
                    e || (r.trustAs = r.getTrusted = function(e, t) {
                        return t
                    }
                    ,
                    r.valueOf = M),
                    r.parseAs = function(e, n) {
                        var i = t(n);
                        return i.literal && i.constant ? i : t(n, function(t) {
                            return r.getTrusted(e, t)
                        })
                    }
                    ;
                    var i = r.parseAs
                      , o = r.getTrusted
                      , s = r.trustAs;
                    return w(ti, function(e, t) {
                        var n = a(t);
                        r[Xe("parse_as_" + n)] = function(t) {
                            return i(e, t)
                        }
                        ,
                        r[Xe("get_trusted_" + n)] = function(t) {
                            return o(e, t)
                        }
                        ,
                        r[Xe("trust_as_" + n)] = function(t) {
                            return s(e, t)
                        }
                    }),
                    r
                }
                ]
            }
            function oi() {
                this.$get = ["$window", "$document", function(e, t) {
                    var n, r, i = {}, o = !(e.chrome && (e.chrome.app && e.chrome.app.runtime || !e.chrome.app && e.chrome.runtime && e.chrome.runtime.id)) && e.history && e.history.pushState, s = O((/android (\d+)/.exec(a((e.navigator || {}).userAgent)) || [])[1]), c = /Boxee/i.test((e.navigator || {}).userAgent), l = t[0] || {}, f = /^(Moz|webkit|ms)(?=[A-Z])/, d = l.body && l.body.style, h = !1, p = !1;
                    if (d) {
                        for (var g in d)
                            if (r = f.exec(g)) {
                                n = (n = r[0])[0].toUpperCase() + n.substr(1);
                                break
                            }
                        n || (n = "WebkitOpacity"in d && "webkit"),
                        h = !!("transition"in d || n + "Transition"in d),
                        p = !!("animation"in d || n + "Animation"in d),
                        !s || h && p || (h = H(d.webkitTransition),
                        p = H(d.webkitAnimation))
                    }
                    return {
                        history: !(!o || s < 4 || c),
                        hasEvent: function(e) {
                            if ("input" === e && u <= 11)
                                return !1;
                            if (R(i[e])) {
                                var t = l.createElement("div");
                                i[e] = "on" + e in t
                            }
                            return i[e]
                        },
                        csp: ie(),
                        vendorPrefix: n,
                        transitions: h,
                        animations: p,
                        android: s
                    }
                }
                ]
            }
            var ai = n("$compile");
            function si() {
                var e;
                this.httpOptions = function(t) {
                    return t ? (e = t,
                    this) : e
                }
                ,
                this.$get = ["$templateCache", "$http", "$q", "$sce", function(t, n, r, i) {
                    function o(a, s) {
                        o.totalPendingRequests++,
                        H(a) && !R(t.get(a)) || (a = i.getTrustedResourceUrl(a));
                        var u = n.defaults && n.defaults.transformResponse;
                        return q(u) ? u = u.filter(function(e) {
                            return e !== Nn
                        }) : u === Nn && (u = null),
                        n.get(a, A({
                            cache: t,
                            transformResponse: u
                        }, e)).finally(function() {
                            o.totalPendingRequests--
                        }).then(function(e) {
                            return t.put(a, e.data),
                            e.data
                        }, function(e) {
                            if (!s)
                                throw ai("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", a, e.status, e.statusText);
                            return r.reject(e)
                        })
                    }
                    return o.totalPendingRequests = 0,
                    o
                }
                ]
            }
            function ui() {
                this.$get = ["$rootScope", "$browser", "$location", function(e, t, n) {
                    var r = {
                        findBindings: function(e, t, n) {
                            var r = e.getElementsByClassName("ng-binding")
                              , i = [];
                            return w(r, function(e) {
                                var r = $.element(e).data("$binding");
                                r && w(r, function(r) {
                                    n ? new RegExp("(^|\\s)" + X(t) + "(\\s|\\||$)").test(r) && i.push(e) : -1 !== r.indexOf(t) && i.push(e)
                                })
                            }),
                            i
                        },
                        findModels: function(e, t, n) {
                            for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                                var o = "[" + r[i] + "model" + (n ? "=" : "*=") + '"' + t + '"]'
                                  , a = e.querySelectorAll(o);
                                if (a.length)
                                    return a
                            }
                        },
                        getLocation: function() {
                            return n.url()
                        },
                        setLocation: function(t) {
                            t !== n.url() && (n.url(t),
                            e.$digest())
                        },
                        whenStable: function(e) {
                            t.notifyWhenNoOutstandingRequests(e)
                        }
                    };
                    return r
                }
                ]
            }
            function ci() {
                this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(e, t, n, r, i) {
                    var o = {};
                    function a(a, s, u) {
                        B(a) || (u = s,
                        s = a,
                        a = D);
                        var c, l = se(arguments, 3), f = P(u) && !u, d = (f ? r : n).defer(), h = d.promise;
                        return c = t.defer(function() {
                            try {
                                d.resolve(a.apply(null, l))
                            } catch (e) {
                                d.reject(e),
                                i(e)
                            } finally {
                                delete o[h.$$timeoutId]
                            }
                            f || e.$apply()
                        }, s),
                        h.$$timeoutId = c,
                        o[c] = d,
                        h
                    }
                    return a.cancel = function(e) {
                        return !!(e && e.$$timeoutId in o) && (o[e.$$timeoutId].reject("canceled"),
                        delete o[e.$$timeoutId],
                        t.defer.cancel(e.$$timeoutId))
                    }
                    ,
                    a
                }
                ]
            }
            var li = t.document.createElement("a")
              , fi = di(t.location.href);
            function di(e) {
                var t = e;
                return u && (li.setAttribute("href", t),
                t = li.href),
                li.setAttribute("href", t),
                {
                    href: li.href,
                    protocol: li.protocol ? li.protocol.replace(/:$/, "") : "",
                    host: li.host,
                    search: li.search ? li.search.replace(/^\?/, "") : "",
                    hash: li.hash ? li.hash.replace(/^#/, "") : "",
                    hostname: li.hostname,
                    port: li.port,
                    pathname: "/" === li.pathname.charAt(0) ? li.pathname : "/" + li.pathname
                }
            }
            function hi(e) {
                var t = H(e) ? di(e) : e;
                return t.protocol === fi.protocol && t.host === fi.host
            }
            function pi() {
                this.$get = I(t)
            }
            function gi(e) {
                var t = e[0] || {}
                  , n = {}
                  , r = "";
                function i(e) {
                    try {
                        return decodeURIComponent(e)
                    } catch (t) {
                        return e
                    }
                }
                return function() {
                    var e, o, a, s, u, c = t.cookie || "";
                    if (c !== r)
                        for (e = (r = c).split("; "),
                        n = {},
                        a = 0; a < e.length; a++)
                            (s = (o = e[a]).indexOf("=")) > 0 && (u = i(o.substring(0, s)),
                            R(n[u]) && (n[u] = i(o.substring(s + 1))));
                    return n
                }
            }
            function mi() {
                this.$get = gi
            }
            function vi(e) {
                var t = "Filter";
                function n(r, i) {
                    if (L(r)) {
                        var o = {};
                        return w(r, function(e, t) {
                            o[t] = n(t, e)
                        }),
                        o
                    }
                    return e.factory(r + t, i)
                }
                this.register = n,
                this.$get = ["$injector", function(e) {
                    return function(n) {
                        return e.get(n + t)
                    }
                }
                ],
                n("currency", Si),
                n("date", Ri),
                n("filter", $i),
                n("json", Pi),
                n("limitTo", Hi),
                n("lowercase", Li),
                n("number", _i),
                n("orderBy", Vi),
                n("uppercase", Fi)
            }
            function $i() {
                return function(e, t, r, i) {
                    if (!b(e)) {
                        if (null == e)
                            return e;
                        throw n("filter")("notarray", "Expected array but received: {0}", e)
                    }
                    var o, s;
                    switch (i = i || "$",
                    bi(t)) {
                    case "function":
                        o = t;
                        break;
                    case "boolean":
                    case "null":
                    case "number":
                    case "string":
                        s = !0;
                    case "object":
                        o = function(e, t, n, r) {
                            var i = L(e) && n in e;
                            !0 === t ? t = re : B(t) || (t = function(e, t) {
                                return !R(e) && (null === e || null === t ? e === t : !(L(t) || L(e) && !j(e)) && (e = a("" + e),
                                t = a("" + t),
                                -1 !== e.indexOf(t)))
                            }
                            );
                            return function(o) {
                                return i && !L(o) ? yi(o, e[n], t, n, !1) : yi(o, e, t, n, r)
                            }
                        }(t, r, i, s);
                        break;
                    default:
                        return e
                    }
                    return Array.prototype.filter.call(e, o)
                }
            }
            function yi(e, t, n, r, i, o) {
                var a = bi(e)
                  , s = bi(t);
                if ("string" === s && "!" === t.charAt(0))
                    return !yi(e, t.substring(1), n, r, i);
                if (q(e))
                    return e.some(function(e) {
                        return yi(e, t, n, r, i)
                    });
                switch (a) {
                case "object":
                    var u;
                    if (i) {
                        for (u in e)
                            if ("$" !== u.charAt(0) && yi(e[u], t, n, r, !0))
                                return !0;
                        return !o && yi(e, t, n, r, !1)
                    }
                    if ("object" === s) {
                        for (u in t) {
                            var c = t[u];
                            if (!B(c) && !R(c)) {
                                var l = u === r;
                                if (!yi(l ? e : e[u], c, n, r, l, l))
                                    return !1
                            }
                        }
                        return !0
                    }
                    return n(e, t);
                case "function":
                    return !1;
                default:
                    return n(e, t)
                }
            }
            function bi(e) {
                return null === e ? "null" : typeof e
            }
            gi.$inject = ["$document"],
            vi.$inject = ["$provide"];
            var wi = 22
              , xi = "."
              , Ei = "0";
            function Si(e) {
                var t = e.NUMBER_FORMATS;
                return function(e, n, r) {
                    return R(n) && (n = t.CURRENCY_SYM),
                    R(r) && (r = t.PATTERNS[1].maxFrac),
                    null == e ? e : ki(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, r).replace(/\u00A4/g, n)
                }
            }
            function _i(e) {
                var t = e.NUMBER_FORMATS;
                return function(e, n) {
                    return null == e ? e : ki(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
                }
            }
            function ki(e, t, n, r, i) {
                if (!H(e) && !U(e) || isNaN(e))
                    return "";
                var o, a = !isFinite(e), s = !1, u = Math.abs(e) + "", c = "";
                if (a)
                    c = "∞";
                else {
                    (function(e, t, n, r) {
                        var i = e.d
                          , o = i.length - e.i
                          , a = (t = R(t) ? Math.min(Math.max(n, o), r) : +t) + e.i
                          , s = i[a];
                        if (a > 0) {
                            i.splice(Math.max(e.i, a));
                            for (var u = a; u < i.length; u++)
                                i[u] = 0
                        } else {
                            o = Math.max(0, o),
                            e.i = 1,
                            i.length = Math.max(1, a = t + 1),
                            i[0] = 0;
                            for (var c = 1; c < a; c++)
                                i[c] = 0
                        }
                        if (s >= 5)
                            if (a - 1 < 0) {
                                for (var l = 0; l > a; l--)
                                    i.unshift(0),
                                    e.i++;
                                i.unshift(1),
                                e.i++
                            } else
                                i[a - 1]++;
                        for (; o < Math.max(0, t); o++)
                            i.push(0);
                        var f = i.reduceRight(function(e, t, n, r) {
                            return t += e,
                            r[n] = t % 10,
                            Math.floor(t / 10)
                        }, 0);
                        f && (i.unshift(f),
                        e.i++)
                    }
                    )(o = function(e) {
                        var t, n, r, i, o, a = 0;
                        for ((n = e.indexOf(xi)) > -1 && (e = e.replace(xi, "")),
                        (r = e.search(/e/i)) > 0 ? (n < 0 && (n = r),
                        n += +e.slice(r + 1),
                        e = e.substring(0, r)) : n < 0 && (n = e.length),
                        r = 0; e.charAt(r) === Ei; r++)
                            ;
                        if (r === (o = e.length))
                            t = [0],
                            n = 1;
                        else {
                            for (o--; e.charAt(o) === Ei; )
                                o--;
                            for (n -= r,
                            t = [],
                            i = 0; r <= o; r++,
                            i++)
                                t[i] = +e.charAt(r)
                        }
                        return n > wi && (t = t.splice(0, wi - 1),
                        a = n - 1,
                        n = 1),
                        {
                            d: t,
                            e: a,
                            i: n
                        }
                    }(u), i, t.minFrac, t.maxFrac);
                    var l = o.d
                      , f = o.i
                      , d = o.e
                      , h = [];
                    for (s = l.reduce(function(e, t) {
                        return e && !t
                    }, !0); f < 0; )
                        l.unshift(0),
                        f++;
                    f > 0 ? h = l.splice(f, l.length) : (h = l,
                    l = [0]);
                    var p = [];
                    for (l.length >= t.lgSize && p.unshift(l.splice(-t.lgSize, l.length).join("")); l.length > t.gSize; )
                        p.unshift(l.splice(-t.gSize, l.length).join(""));
                    l.length && p.unshift(l.join("")),
                    c = p.join(n),
                    h.length && (c += r + h.join("")),
                    d && (c += "e+" + d)
                }
                return e < 0 && !s ? t.negPre + c + t.negSuf : t.posPre + c + t.posSuf
            }
            function Ai(e, t, n, r) {
                var i = "";
                for ((e < 0 || r && e <= 0) && (r ? e = 1 - e : (e = -e,
                i = "-")),
                e = "" + e; e.length < t; )
                    e = Ei + e;
                return n && (e = e.substr(e.length - t)),
                i + e
            }
            function Ti(e, t, n, r, i) {
                return n = n || 0,
                function(o) {
                    var a = o["get" + e]();
                    return (n > 0 || a > -n) && (a += n),
                    0 === a && -12 === n && (a = 12),
                    Ai(a, t, r, i)
                }
            }
            function Oi(e, t, n) {
                return function(r, i) {
                    var o = r["get" + e]();
                    return i[s((n ? "STANDALONE" : "") + (t ? "SHORT" : "") + e)][o]
                }
            }
            function Ci(e) {
                var t = new Date(e,0,1).getDay();
                return new Date(e,0,(t <= 4 ? 5 : 12) - t)
            }
            function Ni(e) {
                return function(t) {
                    var n, r = Ci(t.getFullYear()), i = +(n = t,
                    new Date(n.getFullYear(),n.getMonth(),n.getDate() + (4 - n.getDay()))) - +r;
                    return Ai(1 + Math.round(i / 6048e5), e)
                }
            }
            function Di(e, t) {
                return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1]
            }
            Si.$inject = ["$locale"],
            _i.$inject = ["$locale"];
            var Mi = {
                yyyy: Ti("FullYear", 4, 0, !1, !0),
                yy: Ti("FullYear", 2, 0, !0, !0),
                y: Ti("FullYear", 1, 0, !1, !0),
                MMMM: Oi("Month"),
                MMM: Oi("Month", !0),
                MM: Ti("Month", 2, 1),
                M: Ti("Month", 1, 1),
                LLLL: Oi("Month", !1, !0),
                dd: Ti("Date", 2),
                d: Ti("Date", 1),
                HH: Ti("Hours", 2),
                H: Ti("Hours", 1),
                hh: Ti("Hours", 2, -12),
                h: Ti("Hours", 1, -12),
                mm: Ti("Minutes", 2),
                m: Ti("Minutes", 1),
                ss: Ti("Seconds", 2),
                s: Ti("Seconds", 1),
                sss: Ti("Milliseconds", 3),
                EEEE: Oi("Day"),
                EEE: Oi("Day", !0),
                a: function(e, t) {
                    return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
                },
                Z: function(e, t, n) {
                    var r = -1 * n
                      , i = r >= 0 ? "+" : "";
                    return i += Ai(Math[r > 0 ? "floor" : "ceil"](r / 60), 2) + Ai(Math.abs(r % 60), 2)
                },
                ww: Ni(2),
                w: Ni(1),
                G: Di,
                GG: Di,
                GGG: Di,
                GGGG: function(e, t) {
                    return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1]
                }
            }
              , Ii = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/
              , ji = /^-?\d+$/;
            function Ri(e) {
                var t = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
                return function(n, r, i) {
                    var o, a, s = "", u = [];
                    if (r = r || "mediumDate",
                    r = e.DATETIME_FORMATS[r] || r,
                    H(n) && (n = ji.test(n) ? O(n) : function(e) {
                        var n;
                        if (n = e.match(t)) {
                            var r = new Date(0)
                              , i = 0
                              , o = 0
                              , a = n[8] ? r.setUTCFullYear : r.setFullYear
                              , s = n[8] ? r.setUTCHours : r.setHours;
                            n[9] && (i = O(n[9] + n[10]),
                            o = O(n[9] + n[11])),
                            a.call(r, O(n[1]), O(n[2]) - 1, O(n[3]));
                            var u = O(n[4] || 0) - i
                              , c = O(n[5] || 0) - o
                              , l = O(n[6] || 0)
                              , f = Math.round(1e3 * parseFloat("0." + (n[7] || 0)));
                            return s.call(r, u, c, l, f),
                            r
                        }
                        return e
                    }(n)),
                    U(n) && (n = new Date(n)),
                    !V(n) || !isFinite(n.getTime()))
                        return n;
                    for (; r; )
                        (a = Ii.exec(r)) ? r = (u = ae(u, a, 1)).pop() : (u.push(r),
                        r = null);
                    var c = n.getTimezoneOffset();
                    return i && (c = he(i, c),
                    n = pe(n, i, !0)),
                    w(u, function(t) {
                        o = Mi[t],
                        s += o ? o(n, e.DATETIME_FORMATS, c) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                    }),
                    s
                }
            }
            function Pi() {
                return function(e, t) {
                    return R(t) && (t = 2),
                    le(e, t)
                }
            }
            Ri.$inject = ["$locale"];
            var Li = I(a)
              , Fi = I(s);
            function Hi() {
                return function(e, t, n) {
                    return t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : O(t),
                    C(t) ? e : (U(e) && (e = e.toString()),
                    b(e) ? (n = (n = !n || isNaN(n) ? 0 : O(n)) < 0 ? Math.max(0, e.length + n) : n,
                    t >= 0 ? Ui(e, n, n + t) : 0 === n ? Ui(e, t, e.length) : Ui(e, Math.max(0, n + t), n)) : e)
                }
            }
            function Ui(e, t, n) {
                return H(e) ? e.slice(t, n) : d.call(e, t, n)
            }
            function Vi(e) {
                return function(i, o, a, s) {
                    if (null == i)
                        return i;
                    if (!b(i))
                        throw n("orderBy")("notarray", "Expected array but received: {0}", i);
                    q(o) || (o = [o]),
                    0 === o.length && (o = ["+"]);
                    var u = o.map(function(t) {
                        var n = 1
                          , r = M;
                        if (B(t))
                            r = t;
                        else if (H(t) && ("+" !== t.charAt(0) && "-" !== t.charAt(0) || (n = "-" === t.charAt(0) ? -1 : 1,
                        t = t.substring(1)),
                        "" !== t && (r = e(t)).constant)) {
                            var i = r();
                            r = function(e) {
                                return e[i]
                            }
                        }
                        return {
                            get: r,
                            descending: n
                        }
                    })
                      , c = a ? -1 : 1
                      , l = B(s) ? s : r
                      , f = Array.prototype.map.call(i, function(e, n) {
                        return {
                            value: e,
                            tieBreaker: {
                                value: n,
                                type: "number",
                                index: n
                            },
                            predicateValues: u.map(function(r) {
                                return function(e, n) {
                                    var r = typeof e;
                                    null === e ? (r = "string",
                                    e = "null") : "object" === r && (e = function(e) {
                                        if (B(e.valueOf) && t(e = e.valueOf()))
                                            return e;
                                        if (j(e) && t(e = e.toString()))
                                            return e;
                                        return e
                                    }(e));
                                    return {
                                        value: e,
                                        type: r,
                                        index: n
                                    }
                                }(r.get(e), n)
                            })
                        }
                    });
                    return f.sort(function(e, t) {
                        for (var n = 0, r = u.length; n < r; n++) {
                            var i = l(e.predicateValues[n], t.predicateValues[n]);
                            if (i)
                                return i * u[n].descending * c
                        }
                        return l(e.tieBreaker, t.tieBreaker) * c
                    }),
                    i = f.map(function(e) {
                        return e.value
                    })
                }
                ;
                function t(e) {
                    switch (typeof e) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1
                    }
                }
                function r(e, t) {
                    var n = 0
                      , r = e.type
                      , i = t.type;
                    if (r === i) {
                        var o = e.value
                          , a = t.value;
                        "string" === r ? (o = o.toLowerCase(),
                        a = a.toLowerCase()) : "object" === r && (L(o) && (o = e.index),
                        L(a) && (a = t.index)),
                        o !== a && (n = o < a ? -1 : 1)
                    } else
                        n = r < i ? -1 : 1;
                    return n
                }
            }
            function qi(e) {
                return B(e) && (e = {
                    link: e
                }),
                e.restrict = e.restrict || "AC",
                I(e)
            }
            Vi.$inject = ["$parse"];
            var Bi = I({
                restrict: "E",
                compile: function(e, t) {
                    if (!t.href && !t.xlinkHref)
                        return function(e, t) {
                            if ("a" === t[0].nodeName.toLowerCase()) {
                                var n = "[object SVGAnimatedString]" === g.call(t.prop("href")) ? "xlink:href" : "href";
                                t.on("click", function(e) {
                                    t.attr(n) || e.preventDefault()
                                })
                            }
                        }
                }
            })
              , Gi = {};
            w(_t, function(e, t) {
                if ("multiple" !== e) {
                    var n = fn("ng-" + t)
                      , r = i;
                    "checked" === e && (r = function(e, t, r) {
                        r.ngModel !== r[n] && i(e, 0, r)
                    }
                    ),
                    Gi[n] = function() {
                        return {
                            restrict: "A",
                            priority: 100,
                            link: r
                        }
                    }
                }
                function i(e, r, i) {
                    e.$watch(i[n], function(e) {
                        i.$set(t, !!e)
                    })
                }
            }),
            w(At, function(e, t) {
                Gi[t] = function() {
                    return {
                        priority: 100,
                        link: function(e, n, i) {
                            if ("ngPattern" === t && "/" === i.ngPattern.charAt(0)) {
                                var o = i.ngPattern.match(r);
                                if (o)
                                    return void i.$set("ngPattern", new RegExp(o[1],o[2]))
                            }
                            e.$watch(i[t], function(e) {
                                i.$set(t, e)
                            })
                        }
                    }
                }
            }),
            w(["src", "srcset", "href"], function(e) {
                var t = fn("ng-" + e);
                Gi[t] = function() {
                    return {
                        priority: 99,
                        link: function(n, r, i) {
                            var o = e
                              , a = e;
                            "href" === e && "[object SVGAnimatedString]" === g.call(r.prop("href")) && (a = "xlinkHref",
                            i.$attr[a] = "xlink:href",
                            o = null),
                            i.$observe(t, function(t) {
                                t ? (i.$set(a, t),
                                u && o && r.prop(o, i[a])) : "href" === e && i.$set(a, null)
                            })
                        }
                    }
                }
            });
            var Wi = {
                $addControl: D,
                $$renameControl: function(e, t) {
                    e.$name = t
                },
                $removeControl: D,
                $setValidity: D,
                $setDirty: D,
                $setPristine: D,
                $setSubmitted: D
            }
              , zi = "ng-submitted";
            function Yi(e, t, n, r, i) {
                var o = this
                  , a = [];
                o.$error = {},
                o.$$success = {},
                o.$pending = void 0,
                o.$name = i(t.name || t.ngForm || "")(n),
                o.$dirty = !1,
                o.$pristine = !0,
                o.$valid = !0,
                o.$invalid = !1,
                o.$submitted = !1,
                o.$$parentForm = Wi,
                o.$rollbackViewValue = function() {
                    w(a, function(e) {
                        e.$rollbackViewValue()
                    })
                }
                ,
                o.$commitViewValue = function() {
                    w(a, function(e) {
                        e.$commitViewValue()
                    })
                }
                ,
                o.$addControl = function(e) {
                    De(e.$name, "input"),
                    a.push(e),
                    e.$name && (o[e.$name] = e),
                    e.$$parentForm = o
                }
                ,
                o.$$renameControl = function(e, t) {
                    var n = e.$name;
                    o[n] === e && delete o[n],
                    o[t] = e,
                    e.$name = t
                }
                ,
                o.$removeControl = function(e) {
                    e.$name && o[e.$name] === e && delete o[e.$name],
                    w(o.$pending, function(t, n) {
                        o.$setValidity(n, null, e)
                    }),
                    w(o.$error, function(t, n) {
                        o.$setValidity(n, null, e)
                    }),
                    w(o.$$success, function(t, n) {
                        o.$setValidity(n, null, e)
                    }),
                    te(a, e),
                    e.$$parentForm = Wi
                }
                ,
                Zo({
                    ctrl: this,
                    $element: e,
                    set: function(e, t, n) {
                        var r = e[t];
                        r ? -1 === r.indexOf(n) && r.push(n) : e[t] = [n]
                    },
                    unset: function(e, t, n) {
                        var r = e[t];
                        r && (te(r, n),
                        0 === r.length && delete e[t])
                    },
                    $animate: r
                }),
                o.$setDirty = function() {
                    r.removeClass(e, qo),
                    r.addClass(e, Bo),
                    o.$dirty = !0,
                    o.$pristine = !1,
                    o.$$parentForm.$setDirty()
                }
                ,
                o.$setPristine = function() {
                    r.setClass(e, qo, Bo + " " + zi),
                    o.$dirty = !1,
                    o.$pristine = !0,
                    o.$submitted = !1,
                    w(a, function(e) {
                        e.$setPristine()
                    })
                }
                ,
                o.$setUntouched = function() {
                    w(a, function(e) {
                        e.$setUntouched()
                    })
                }
                ,
                o.$setSubmitted = function() {
                    r.addClass(e, zi),
                    o.$submitted = !0,
                    o.$$parentForm.$setSubmitted()
                }
            }
            Yi.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
            var Ki = function(e) {
                return ["$timeout", "$parse", function(t, n) {
                    return {
                        name: "form",
                        restrict: e ? "EAC" : "E",
                        require: ["form", "^^?form"],
                        controller: Yi,
                        compile: function(n, i) {
                            n.addClass(qo).addClass(Uo);
                            var o = i.name ? "name" : !(!e || !i.ngForm) && "ngForm";
                            return {
                                pre: function(e, n, i, a) {
                                    var s = a[0];
                                    if (!("action"in i)) {
                                        var u = function(t) {
                                            e.$apply(function() {
                                                s.$commitViewValue(),
                                                s.$setSubmitted()
                                            }),
                                            t.preventDefault()
                                        };
                                        We(n[0], "submit", u),
                                        n.on("$destroy", function() {
                                            t(function() {
                                                ze(n[0], "submit", u)
                                            }, 0, !1)
                                        })
                                    }
                                    (a[1] || s.$$parentForm).$addControl(s);
                                    var c = o ? r(s.$name) : D;
                                    o && (c(e, s),
                                    i.$observe(o, function(t) {
                                        s.$name !== t && (c(e, void 0),
                                        s.$$parentForm.$$renameControl(s, t),
                                        (c = r(s.$name))(e, s))
                                    })),
                                    n.on("$destroy", function() {
                                        s.$$parentForm.$removeControl(s),
                                        c(e, void 0),
                                        A(s, Wi)
                                    })
                                }
                            }
                        }
                    };
                    function r(e) {
                        return "" === e ? n('this[""]').assign : n(e).assign || D
                    }
                }
                ]
            }
              , Ji = Ki()
              , Zi = Ki(!0)
              , Xi = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/
              , Qi = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i
              , eo = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/
              , to = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/
              , no = /^(\d{4,})-(\d{2})-(\d{2})$/
              , ro = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/
              , io = /^(\d{4,})-W(\d\d)$/
              , oo = /^(\d{4,})-(\d\d)$/
              , ao = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/
              , so = "keydown wheel mousedown"
              , uo = je();
            w("date,datetime-local,month,time,week".split(","), function(e) {
                uo[e] = !0
            });
            var co = {
                text: function(e, t, n, r, i, o) {
                    fo(e, t, n, r, i, o),
                    lo(r)
                },
                date: po("date", no, ho(no, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
                "datetime-local": po("datetimelocal", ro, ho(ro, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
                time: po("time", ao, ho(ao, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
                week: po("week", io, function(e, t) {
                    if (V(e))
                        return e;
                    if (H(e)) {
                        io.lastIndex = 0;
                        var n = io.exec(e);
                        if (n) {
                            var r = +n[1]
                              , i = +n[2]
                              , o = 0
                              , a = 0
                              , s = 0
                              , u = 0
                              , c = Ci(r)
                              , l = 7 * (i - 1);
                            return t && (o = t.getHours(),
                            a = t.getMinutes(),
                            s = t.getSeconds(),
                            u = t.getMilliseconds()),
                            new Date(r,0,c.getDate() + l,o,a,s,u)
                        }
                    }
                    return NaN
                }, "yyyy-Www"),
                month: po("month", oo, ho(oo, ["yyyy", "MM"]), "yyyy-MM"),
                number: function(e, t, n, r, i, o) {
                    var a, s;
                    go(e, t, n, r),
                    fo(e, t, n, r, i, o),
                    mo(r),
                    (P(n.min) || n.ngMin) && (r.$validators.min = function(e) {
                        return r.$isEmpty(e) || R(a) || e >= a
                    }
                    ,
                    n.$observe("min", function(e) {
                        a = vo(e),
                        r.$validate()
                    }));
                    (P(n.max) || n.ngMax) && (r.$validators.max = function(e) {
                        return r.$isEmpty(e) || R(s) || e <= s
                    }
                    ,
                    n.$observe("max", function(e) {
                        s = vo(e),
                        r.$validate()
                    }))
                },
                url: function(e, t, n, r, i, o) {
                    fo(e, t, n, r, i, o),
                    lo(r),
                    r.$$parserName = "url",
                    r.$validators.url = function(e, t) {
                        var n = e || t;
                        return r.$isEmpty(n) || Qi.test(n)
                    }
                },
                email: function(e, t, n, r, i, o) {
                    fo(e, t, n, r, i, o),
                    lo(r),
                    r.$$parserName = "email",
                    r.$validators.email = function(e, t) {
                        var n = e || t;
                        return r.$isEmpty(n) || eo.test(n)
                    }
                },
                radio: function(e, t, n, r) {
                    R(n.name) && t.attr("name", S());
                    t.on("click", function(e) {
                        t[0].checked && r.$setViewValue(n.value, e && e.type)
                    }),
                    r.$render = function() {
                        var e = n.value;
                        t[0].checked = e == r.$viewValue
                    }
                    ,
                    n.$observe("value", r.$render)
                },
                range: function(e, t, n, r, i, o) {
                    go(e, t, n, r),
                    mo(r),
                    fo(e, t, n, r, i, o);
                    var a = r.$$hasNativeValidators && "range" === t[0].type
                      , s = a ? 0 : void 0
                      , u = a ? 100 : void 0
                      , c = a ? 1 : void 0
                      , l = t[0].validity
                      , f = P(n.min)
                      , d = P(n.max)
                      , h = P(n.step)
                      , p = r.$render;
                    r.$render = a && P(l.rangeUnderflow) && P(l.rangeOverflow) ? function() {
                        p(),
                        r.$setViewValue(t.val())
                    }
                    : p,
                    f && (r.$validators.min = a ? function() {
                        return !0
                    }
                    : function(e, t) {
                        return r.$isEmpty(t) || R(s) || t >= s
                    }
                    ,
                    g("min", function(e) {
                        if (s = vo(e),
                        C(r.$modelValue))
                            return;
                        if (a) {
                            var n = t.val();
                            s > n && (n = s,
                            t.val(n)),
                            r.$setViewValue(n)
                        } else
                            r.$validate()
                    }));
                    d && (r.$validators.max = a ? function() {
                        return !0
                    }
                    : function(e, t) {
                        return r.$isEmpty(t) || R(u) || t <= u
                    }
                    ,
                    g("max", function(e) {
                        if (u = vo(e),
                        C(r.$modelValue))
                            return;
                        if (a) {
                            var n = t.val();
                            u < n && (t.val(u),
                            n = u < s ? s : u),
                            r.$setViewValue(n)
                        } else
                            r.$validate()
                    }));
                    h && (r.$validators.step = a ? function() {
                        return !l.stepMismatch
                    }
                    : function(e, t) {
                        return r.$isEmpty(t) || R(c) || function(e, t, n) {
                            var r = Number(e);
                            if (!$o(r) || !$o(t) || !$o(n)) {
                                var i = Math.max(yo(r), yo(t), yo(n))
                                  , o = Math.pow(10, i);
                                r *= o,
                                t *= o,
                                n *= o
                            }
                            return (r - t) % n == 0
                        }(t, s || 0, c)
                    }
                    ,
                    g("step", function(e) {
                        if (c = vo(e),
                        C(r.$modelValue))
                            return;
                        a && r.$viewValue !== t.val() ? r.$setViewValue(t.val()) : r.$validate()
                    }));
                    function g(e, r) {
                        t.attr(e, n[e]),
                        n.$observe(e, r)
                    }
                },
                checkbox: function(e, t, n, r, i, o, a, s) {
                    var u = bo(s, e, "ngTrueValue", n.ngTrueValue, !0)
                      , c = bo(s, e, "ngFalseValue", n.ngFalseValue, !1);
                    t.on("click", function(e) {
                        r.$setViewValue(t[0].checked, e && e.type)
                    }),
                    r.$render = function() {
                        t[0].checked = r.$viewValue
                    }
                    ,
                    r.$isEmpty = function(e) {
                        return !1 === e
                    }
                    ,
                    r.$formatters.push(function(e) {
                        return re(e, u)
                    }),
                    r.$parsers.push(function(e) {
                        return e ? u : c
                    })
                },
                hidden: D,
                button: D,
                submit: D,
                reset: D,
                file: D
            };
            function lo(e) {
                e.$formatters.push(function(t) {
                    return e.$isEmpty(t) ? t : t.toString()
                })
            }
            function fo(e, t, n, r, o, s) {
                var u, c = a(t[0].type);
                if (!o.android) {
                    var l = !1;
                    t.on("compositionstart", function() {
                        l = !0
                    }),
                    t.on("compositionend", function() {
                        l = !1,
                        f()
                    })
                }
                var f = function(e) {
                    if (u && (s.defer.cancel(u),
                    u = null),
                    !l) {
                        var i = t.val()
                          , o = e && e.type;
                        "password" === c || n.ngTrim && "false" === n.ngTrim || (i = Z(i)),
                        (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, o)
                    }
                };
                if (o.hasEvent("input"))
                    t.on("input", f);
                else {
                    var d = function(e, t, n) {
                        u || (u = s.defer(function() {
                            u = null,
                            t && t.value === n || f(e)
                        }))
                    };
                    t.on("keydown", function(e) {
                        var t = e.keyCode;
                        91 === t || 15 < t && t < 19 || 37 <= t && t <= 40 || d(e, this, this.value)
                    }),
                    o.hasEvent("paste") && t.on("paste cut", d)
                }
                t.on("change", f),
                uo[c] && r.$$hasNativeValidators && c === n.type && t.on(so, function(e) {
                    if (!u) {
                        var t = this[i]
                          , n = t.badInput
                          , r = t.typeMismatch;
                        u = s.defer(function() {
                            u = null,
                            t.badInput === n && t.typeMismatch === r || f(e)
                        })
                    }
                }),
                r.$render = function() {
                    var e = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
                    t.val() !== e && t.val(e)
                }
            }
            function ho(e, t) {
                return function(n, r) {
                    var i, o;
                    if (V(n))
                        return n;
                    if (H(n)) {
                        if ('"' === n.charAt(0) && '"' === n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)),
                        Xi.test(n))
                            return new Date(n);
                        if (e.lastIndex = 0,
                        i = e.exec(n))
                            return i.shift(),
                            o = r ? {
                                yyyy: r.getFullYear(),
                                MM: r.getMonth() + 1,
                                dd: r.getDate(),
                                HH: r.getHours(),
                                mm: r.getMinutes(),
                                ss: r.getSeconds(),
                                sss: r.getMilliseconds() / 1e3
                            } : {
                                yyyy: 1970,
                                MM: 1,
                                dd: 1,
                                HH: 0,
                                mm: 0,
                                ss: 0,
                                sss: 0
                            },
                            w(i, function(e, n) {
                                n < t.length && (o[t[n]] = +e)
                            }),
                            new Date(o.yyyy,o.MM - 1,o.dd,o.HH,o.mm,o.ss || 0,1e3 * o.sss || 0)
                    }
                    return NaN
                }
            }
            function po(e, t, n, r) {
                return function(i, o, a, s, u, c, l) {
                    go(i, o, a, s),
                    fo(0, o, a, s, u, c);
                    var f, d, h, p = s && s.$options && s.$options.timezone;
                    (s.$$parserName = e,
                    s.$parsers.push(function(e) {
                        if (s.$isEmpty(e))
                            return null;
                        if (t.test(e)) {
                            var r = n(e, f);
                            return p && (r = pe(r, p)),
                            r
                        }
                    }),
                    s.$formatters.push(function(e) {
                        if (e && !V(e))
                            throw Wo("datefmt", "Expected `{0}` to be a date", e);
                        return g(e) ? ((f = e) && p && (f = pe(f, p, !0)),
                        l("date")(e, r, p)) : (f = null,
                        "")
                    }),
                    P(a.min) || a.ngMin) && (s.$validators.min = function(e) {
                        return !g(e) || R(d) || n(e) >= d
                    }
                    ,
                    a.$observe("min", function(e) {
                        d = m(e),
                        s.$validate()
                    }));
                    (P(a.max) || a.ngMax) && (s.$validators.max = function(e) {
                        return !g(e) || R(h) || n(e) <= h
                    }
                    ,
                    a.$observe("max", function(e) {
                        h = m(e),
                        s.$validate()
                    }));
                    function g(e) {
                        return e && !(e.getTime && e.getTime() != e.getTime())
                    }
                    function m(e) {
                        return P(e) && !V(e) ? n(e) || void 0 : e
                    }
                }
            }
            function go(e, t, n, r) {
                var o = t[0];
                (r.$$hasNativeValidators = L(o.validity)) && r.$parsers.push(function(e) {
                    var n = t.prop(i) || {};
                    return n.badInput || n.typeMismatch ? void 0 : e
                })
            }
            function mo(e) {
                e.$$parserName = "number",
                e.$parsers.push(function(t) {
                    return e.$isEmpty(t) ? null : to.test(t) ? parseFloat(t) : void 0
                }),
                e.$formatters.push(function(t) {
                    if (!e.$isEmpty(t)) {
                        if (!U(t))
                            throw Wo("numfmt", "Expected `{0}` to be a number", t);
                        t = t.toString()
                    }
                    return t
                })
            }
            function vo(e) {
                return P(e) && !U(e) && (e = parseFloat(e)),
                C(e) ? void 0 : e
            }
            function $o(e) {
                return (0 | e) === e
            }
            function yo(e) {
                var t = e.toString()
                  , n = t.indexOf(".");
                if (-1 === n) {
                    if (-1 < e && e < 1) {
                        var r = /e-(\d+)$/.exec(t);
                        if (r)
                            return Number(r[1])
                    }
                    return 0
                }
                return t.length - n - 1
            }
            function bo(e, t, n, r, i) {
                var o;
                if (P(r)) {
                    if (!(o = e(r)).constant)
                        throw Wo("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, r);
                    return o(t)
                }
                return i
            }
            var wo = ["$browser", "$sniffer", "$filter", "$parse", function(e, t, n, r) {
                return {
                    restrict: "E",
                    require: ["?ngModel"],
                    link: {
                        pre: function(i, o, s, u) {
                            if (u[0]) {
                                var c = a(s.type);
                                "range" !== c || s.hasOwnProperty("ngInputRange") || (c = "text"),
                                (co[c] || co.text)(i, o, s, u[0], t, e, n, r)
                            }
                        }
                    }
                }
            }
            ]
              , xo = /^(true|false|\d+)$/
              , Eo = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    compile: function(e, t) {
                        return xo.test(t.ngValue) ? function(e, t, n) {
                            n.$set("value", e.$eval(n.ngValue))
                        }
                        : function(e, t, n) {
                            e.$watch(n.ngValue, function(e) {
                                n.$set("value", e)
                            })
                        }
                    }
                }
            }
              , So = ["$compile", function(e) {
                return {
                    restrict: "AC",
                    compile: function(t) {
                        return e.$$addBindingClass(t),
                        function(t, n, r) {
                            e.$$addBindingInfo(n, r.ngBind),
                            n = n[0],
                            t.$watch(r.ngBind, function(e) {
                                n.textContent = R(e) ? "" : e
                            })
                        }
                    }
                }
            }
            ]
              , _o = ["$interpolate", "$compile", function(e, t) {
                return {
                    compile: function(n) {
                        return t.$$addBindingClass(n),
                        function(n, r, i) {
                            var o = e(r.attr(i.$attr.ngBindTemplate));
                            t.$$addBindingInfo(r, o.expressions),
                            r = r[0],
                            i.$observe("ngBindTemplate", function(e) {
                                r.textContent = R(e) ? "" : e
                            })
                        }
                    }
                }
            }
            ]
              , ko = ["$sce", "$parse", "$compile", function(e, t, n) {
                return {
                    restrict: "A",
                    compile: function(r, i) {
                        var o = t(i.ngBindHtml)
                          , a = t(i.ngBindHtml, function(t) {
                            return e.valueOf(t)
                        });
                        return n.$$addBindingClass(r),
                        function(t, r, i) {
                            n.$$addBindingInfo(r, i.ngBindHtml),
                            t.$watch(a, function() {
                                var n = o(t);
                                r.html(e.getTrustedHtml(n) || "")
                            })
                        }
                    }
                }
            }
            ]
              , Ao = I({
                restrict: "A",
                require: "ngModel",
                link: function(e, t, n, r) {
                    r.$viewChangeListeners.push(function() {
                        e.$eval(n.ngChange)
                    })
                }
            });
            function To(e, t) {
                return e = "ngClass" + e,
                ["$animate", function(n) {
                    return {
                        restrict: "AC",
                        link: function(o, a, s) {
                            var u;
                            function c(e) {
                                var t = l(e, 1);
                                s.$addClass(t)
                            }
                            function l(e, t) {
                                var n = a.data("$classCounts") || je()
                                  , r = [];
                                return w(e, function(e) {
                                    (t > 0 || n[e]) && (n[e] = (n[e] || 0) + t,
                                    n[e] === +(t > 0) && r.push(e))
                                }),
                                a.data("$classCounts", n),
                                r.join(" ")
                            }
                            function f(e) {
                                if (!0 === t || (1 & o.$index) === t) {
                                    var s = i(e || []);
                                    if (u) {
                                        if (!re(e, u)) {
                                            !function(e, t) {
                                                var i = r(t, e)
                                                  , o = r(e, t);
                                                i = l(i, 1),
                                                o = l(o, -1),
                                                i && i.length && n.addClass(a, i),
                                                o && o.length && n.removeClass(a, o)
                                            }(i(u), s)
                                        }
                                    } else
                                        c(s)
                                }
                                u = q(e) ? e.map(function(e) {
                                    return Ue(e)
                                }) : Ue(e)
                            }
                            s.$observe("class", function(t) {
                                f(o.$eval(s[e]))
                            }),
                            "ngClass" !== e && o.$watch("$index", function(e, n) {
                                var r = 1 & e;
                                if (r !== (1 & n)) {
                                    var o = i(u);
                                    r === t ? c(o) : function(e) {
                                        var t = l(e, -1);
                                        s.$removeClass(t)
                                    }(o)
                                }
                            }),
                            o.$watch(s[e], f, !0)
                        }
                    };
                    function r(e, t) {
                        var n = [];
                        e: for (var r = 0; r < e.length; r++) {
                            for (var i = e[r], o = 0; o < t.length; o++)
                                if (i === t[o])
                                    continue e;
                            n.push(i)
                        }
                        return n
                    }
                    function i(e) {
                        var t = [];
                        return q(e) ? (w(e, function(e) {
                            t = t.concat(i(e))
                        }),
                        t) : H(e) ? e.split(" ") : L(e) ? (w(e, function(e, n) {
                            e && (t = t.concat(n.split(" ")))
                        }),
                        t) : e
                    }
                }
                ]
            }
            var Oo = To("", !0)
              , Co = To("Odd", 0)
              , No = To("Even", 1)
              , Do = qi({
                compile: function(e, t) {
                    t.$set("ngCloak", void 0),
                    e.removeClass("ng-cloak")
                }
            })
              , Mo = [function() {
                return {
                    restrict: "A",
                    scope: !0,
                    controller: "@",
                    priority: 500
                }
            }
            ]
              , Io = {}
              , jo = {
                blur: !0,
                focus: !0
            };
            w("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(e) {
                var t = fn("ng-" + e);
                Io[t] = ["$parse", "$rootScope", function(n, r) {
                    return {
                        restrict: "A",
                        compile: function(i, o) {
                            var a = n(o[t], null, !0);
                            return function(t, n) {
                                n.on(e, function(n) {
                                    var i = function() {
                                        a(t, {
                                            $event: n
                                        })
                                    };
                                    jo[e] && r.$$phase ? t.$evalAsync(i) : t.$apply(i)
                                })
                            }
                        }
                    }
                }
                ]
            });
            var Ro = ["$animate", "$compile", function(e, t) {
                return {
                    multiElement: !0,
                    transclude: "element",
                    priority: 600,
                    terminal: !0,
                    restrict: "A",
                    $$tlb: !0,
                    link: function(n, r, i, o, a) {
                        var s, u, c;
                        n.$watch(i.ngIf, function(n) {
                            n ? u || a(function(n, o) {
                                u = o,
                                n[n.length++] = t.$$createComment("end ngIf", i.ngIf),
                                s = {
                                    clone: n
                                },
                                e.enter(n, r.parent(), r)
                            }) : (c && (c.remove(),
                            c = null),
                            u && (u.$destroy(),
                            u = null),
                            s && (c = Ie(s.clone),
                            e.leave(c).done(function(e) {
                                !1 !== e && (c = null)
                            }),
                            s = null))
                        })
                    }
                }
            }
            ]
              , Po = ["$templateRequest", "$anchorScroll", "$animate", function(e, t, n) {
                return {
                    restrict: "ECA",
                    priority: 400,
                    terminal: !0,
                    transclude: "element",
                    controller: $.noop,
                    compile: function(r, i) {
                        var o = i.ngInclude || i.src
                          , a = i.onload || ""
                          , s = i.autoscroll;
                        return function(r, i, u, c, l) {
                            var f, d, h, p = 0, g = function() {
                                d && (d.remove(),
                                d = null),
                                f && (f.$destroy(),
                                f = null),
                                h && (n.leave(h).done(function(e) {
                                    !1 !== e && (d = null)
                                }),
                                d = h,
                                h = null)
                            };
                            r.$watch(o, function(o) {
                                var u = function(e) {
                                    !1 === e || !P(s) || s && !r.$eval(s) || t()
                                }
                                  , d = ++p;
                                o ? (e(o, !0).then(function(e) {
                                    if (!r.$$destroyed && d === p) {
                                        var t = r.$new();
                                        c.template = e;
                                        var s = l(t, function(e) {
                                            g(),
                                            n.enter(e, null, i).done(u)
                                        });
                                        h = s,
                                        (f = t).$emit("$includeContentLoaded", o),
                                        r.$eval(a)
                                    }
                                }, function() {
                                    r.$$destroyed || d === p && (g(),
                                    r.$emit("$includeContentError", o))
                                }),
                                r.$emit("$includeContentRequested", o)) : (g(),
                                c.template = null)
                            })
                        }
                    }
                }
            }
            ]
              , Lo = ["$compile", function(e) {
                return {
                    restrict: "ECA",
                    priority: -400,
                    require: "ngInclude",
                    link: function(n, r, i, o) {
                        if (g.call(r[0]).match(/SVG/))
                            return r.empty(),
                            void e(at(o.template, t.document).childNodes)(n, function(e) {
                                r.append(e)
                            }, {
                                futureParentElement: r
                            });
                        r.html(o.template),
                        e(r.contents())(n)
                    }
                }
            }
            ]
              , Fo = qi({
                priority: 450,
                compile: function() {
                    return {
                        pre: function(e, t, n) {
                            e.$eval(n.ngInit)
                        }
                    }
                }
            })
              , Ho = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    require: "ngModel",
                    link: function(e, t, n, r) {
                        var i = t.attr(n.$attr.ngList) || ", "
                          , o = "false" !== n.ngTrim
                          , a = o ? Z(i) : i;
                        r.$parsers.push(function(e) {
                            if (!R(e)) {
                                var t = [];
                                return e && w(e.split(a), function(e) {
                                    e && t.push(o ? Z(e) : e)
                                }),
                                t
                            }
                        }),
                        r.$formatters.push(function(e) {
                            if (q(e))
                                return e.join(i)
                        }),
                        r.$isEmpty = function(e) {
                            return !e || !e.length
                        }
                    }
                }
            }
              , Uo = "ng-valid"
              , Vo = "ng-invalid"
              , qo = "ng-pristine"
              , Bo = "ng-dirty"
              , Go = "ng-pending"
              , Wo = n("ngModel")
              , zo = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(e, t, n, r, i, o, a, s, u, c) {
                this.$viewValue = Number.NaN,
                this.$modelValue = Number.NaN,
                this.$$rawModelValue = void 0,
                this.$validators = {},
                this.$asyncValidators = {},
                this.$parsers = [],
                this.$formatters = [],
                this.$viewChangeListeners = [],
                this.$untouched = !0,
                this.$touched = !1,
                this.$pristine = !0,
                this.$dirty = !1,
                this.$valid = !0,
                this.$invalid = !1,
                this.$error = {},
                this.$$success = {},
                this.$pending = void 0,
                this.$name = c(n.name || "", !1)(e),
                this.$$parentForm = Wi;
                var l, f = i(n.ngModel), d = f.assign, h = f, p = d, g = null, m = this;
                this.$$setOptions = function(e) {
                    if (m.$options = e,
                    e && e.getterSetter) {
                        var t = i(n.ngModel + "()")
                          , o = i(n.ngModel + "($$$p)");
                        h = function(e) {
                            var n = f(e);
                            return B(n) && (n = t(e)),
                            n
                        }
                        ,
                        p = function(e, t) {
                            B(f(e)) ? o(e, {
                                $$$p: t
                            }) : d(e, t)
                        }
                    } else if (!f.assign)
                        throw Wo("nonassign", "Expression '{0}' is non-assignable. Element: {1}", n.ngModel, ge(r))
                }
                ,
                this.$render = D,
                this.$isEmpty = function(e) {
                    return R(e) || "" === e || null === e || e != e
                }
                ,
                this.$$updateEmptyClasses = function(e) {
                    m.$isEmpty(e) ? (o.removeClass(r, "ng-not-empty"),
                    o.addClass(r, "ng-empty")) : (o.removeClass(r, "ng-empty"),
                    o.addClass(r, "ng-not-empty"))
                }
                ;
                var v = 0;
                Zo({
                    ctrl: this,
                    $element: r,
                    set: function(e, t) {
                        e[t] = !0
                    },
                    unset: function(e, t) {
                        delete e[t]
                    },
                    $animate: o
                }),
                this.$setPristine = function() {
                    m.$dirty = !1,
                    m.$pristine = !0,
                    o.removeClass(r, Bo),
                    o.addClass(r, qo)
                }
                ,
                this.$setDirty = function() {
                    m.$dirty = !0,
                    m.$pristine = !1,
                    o.removeClass(r, qo),
                    o.addClass(r, Bo),
                    m.$$parentForm.$setDirty()
                }
                ,
                this.$setUntouched = function() {
                    m.$touched = !1,
                    m.$untouched = !0,
                    o.setClass(r, "ng-untouched", "ng-touched")
                }
                ,
                this.$setTouched = function() {
                    m.$touched = !0,
                    m.$untouched = !1,
                    o.setClass(r, "ng-touched", "ng-untouched")
                }
                ,
                this.$rollbackViewValue = function() {
                    a.cancel(g),
                    m.$viewValue = m.$$lastCommittedViewValue,
                    m.$render()
                }
                ,
                this.$validate = function() {
                    if (!C(m.$modelValue)) {
                        var e = m.$$lastCommittedViewValue
                          , t = m.$$rawModelValue
                          , n = m.$valid
                          , r = m.$modelValue
                          , i = m.$options && m.$options.allowInvalid;
                        m.$$runValidators(t, e, function(e) {
                            i || n === e || (m.$modelValue = e ? t : void 0,
                            m.$modelValue !== r && m.$$writeModelToScope())
                        })
                    }
                }
                ,
                this.$$runValidators = function(e, t, n) {
                    var r, i, o = ++v;
                    (function() {
                        var e = m.$$parserName || "parse";
                        if (!R(l))
                            return l || (w(m.$validators, function(e, t) {
                                a(t, null)
                            }),
                            w(m.$asyncValidators, function(e, t) {
                                a(t, null)
                            })),
                            a(e, l),
                            l;
                        a(e, null);
                        return !0
                    }
                    )() ? !function() {
                        var n = !0;
                        if (w(m.$validators, function(r, i) {
                            var o = r(e, t);
                            n = n && o,
                            a(i, o)
                        }),
                        !n)
                            return w(m.$asyncValidators, function(e, t) {
                                a(t, null)
                            }),
                            !1;
                        return !0
                    }() ? s(!1) : (r = [],
                    i = !0,
                    w(m.$asyncValidators, function(n, o) {
                        var s = n(e, t);
                        if (!K(s))
                            throw Wo("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", s);
                        a(o, void 0),
                        r.push(s.then(function() {
                            a(o, !0)
                        }, function() {
                            i = !1,
                            a(o, !1)
                        }))
                    }),
                    r.length ? u.all(r).then(function() {
                        s(i)
                    }, D) : s(!0)) : s(!1);
                    function a(e, t) {
                        o === v && m.$setValidity(e, t)
                    }
                    function s(e) {
                        o === v && n(e)
                    }
                }
                ,
                this.$commitViewValue = function() {
                    var e = m.$viewValue;
                    a.cancel(g),
                    (m.$$lastCommittedViewValue !== e || "" === e && m.$$hasNativeValidators) && (m.$$updateEmptyClasses(e),
                    m.$$lastCommittedViewValue = e,
                    m.$pristine && this.$setDirty(),
                    this.$$parseAndValidate())
                }
                ,
                this.$$parseAndValidate = function() {
                    var t = m.$$lastCommittedViewValue;
                    if (l = !R(t) || void 0)
                        for (var n = 0; n < m.$parsers.length; n++)
                            if (R(t = m.$parsers[n](t))) {
                                l = !1;
                                break
                            }
                    C(m.$modelValue) && (m.$modelValue = h(e));
                    var r = m.$modelValue
                      , i = m.$options && m.$options.allowInvalid;
                    function o() {
                        m.$modelValue !== r && m.$$writeModelToScope()
                    }
                    m.$$rawModelValue = t,
                    i && (m.$modelValue = t,
                    o()),
                    m.$$runValidators(t, m.$$lastCommittedViewValue, function(e) {
                        i || (m.$modelValue = e ? t : void 0,
                        o())
                    })
                }
                ,
                this.$$writeModelToScope = function() {
                    p(e, m.$modelValue),
                    w(m.$viewChangeListeners, function(e) {
                        try {
                            e()
                        } catch (e) {
                            t(e)
                        }
                    })
                }
                ,
                this.$setViewValue = function(e, t) {
                    m.$viewValue = e,
                    m.$options && !m.$options.updateOnDefault || m.$$debounceViewValueCommit(t)
                }
                ,
                this.$$debounceViewValueCommit = function(t) {
                    var n, r = 0, i = m.$options;
                    i && P(i.debounce) && (U(n = i.debounce) ? r = n : U(n[t]) ? r = n[t] : U(n.default) && (r = n.default)),
                    a.cancel(g),
                    r ? g = a(function() {
                        m.$commitViewValue()
                    }, r) : s.$$phase ? m.$commitViewValue() : e.$apply(function() {
                        m.$commitViewValue()
                    })
                }
                ,
                e.$watch(function() {
                    var t = h(e);
                    if (t !== m.$modelValue && (m.$modelValue == m.$modelValue || t == t)) {
                        m.$modelValue = m.$$rawModelValue = t,
                        l = void 0;
                        for (var n = m.$formatters, r = n.length, i = t; r--; )
                            i = n[r](i);
                        m.$viewValue !== i && (m.$$updateEmptyClasses(i),
                        m.$viewValue = m.$$lastCommittedViewValue = i,
                        m.$render(),
                        m.$$runValidators(m.$modelValue, m.$viewValue, D))
                    }
                    return t
                })
            }
            ]
              , Yo = ["$rootScope", function(e) {
                return {
                    restrict: "A",
                    require: ["ngModel", "^?form", "^?ngModelOptions"],
                    controller: zo,
                    priority: 1,
                    compile: function(t) {
                        return t.addClass(qo).addClass("ng-untouched").addClass(Uo),
                        {
                            pre: function(e, t, n, r) {
                                var i = r[0]
                                  , o = r[1] || i.$$parentForm;
                                i.$$setOptions(r[2] && r[2].$options),
                                o.$addControl(i),
                                n.$observe("name", function(e) {
                                    i.$name !== e && i.$$parentForm.$$renameControl(i, e)
                                }),
                                e.$on("$destroy", function() {
                                    i.$$parentForm.$removeControl(i)
                                })
                            },
                            post: function(t, n, r, i) {
                                var o = i[0];
                                o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function(e) {
                                    o.$$debounceViewValueCommit(e && e.type)
                                }),
                                n.on("blur", function() {
                                    o.$touched || (e.$$phase ? t.$evalAsync(o.$setTouched) : t.$apply(o.$setTouched))
                                })
                            }
                        }
                    }
                }
            }
            ]
              , Ko = /(\s+|^)default(\s+|$)/
              , Jo = function() {
                return {
                    restrict: "A",
                    controller: ["$scope", "$attrs", function(e, t) {
                        var n = this;
                        this.$options = ne(e.$eval(t.ngModelOptions)),
                        P(this.$options.updateOn) ? (this.$options.updateOnDefault = !1,
                        this.$options.updateOn = Z(this.$options.updateOn.replace(Ko, function() {
                            return n.$options.updateOnDefault = !0,
                            " "
                        }))) : this.$options.updateOnDefault = !0
                    }
                    ]
                }
            };
            function Zo(e) {
                var t = e.ctrl
                  , n = e.$element
                  , r = {}
                  , i = e.set
                  , o = e.unset
                  , a = e.$animate;
                function s(e, t) {
                    t && !r[e] ? (a.addClass(n, e),
                    r[e] = !0) : !t && r[e] && (a.removeClass(n, e),
                    r[e] = !1)
                }
                function u(e, t) {
                    e = e ? "-" + Te(e, "-") : "",
                    s(Uo + e, !0 === t),
                    s(Vo + e, !1 === t)
                }
                r[Vo] = !(r[Uo] = n.hasClass(Uo)),
                t.$setValidity = function(e, n, r) {
                    R(n) ? function(e, n, r) {
                        t[e] || (t[e] = {});
                        i(t[e], n, r)
                    }("$pending", e, r) : function(e, n, r) {
                        t[e] && o(t[e], n, r);
                        Xo(t[e]) && (t[e] = void 0)
                    }("$pending", e, r);
                    Y(n) ? n ? (o(t.$error, e, r),
                    i(t.$$success, e, r)) : (i(t.$error, e, r),
                    o(t.$$success, e, r)) : (o(t.$error, e, r),
                    o(t.$$success, e, r));
                    t.$pending ? (s(Go, !0),
                    t.$valid = t.$invalid = void 0,
                    u("", null)) : (s(Go, !1),
                    t.$valid = Xo(t.$error),
                    t.$invalid = !t.$valid,
                    u("", t.$valid));
                    var a;
                    a = t.$pending && t.$pending[e] ? void 0 : !t.$error[e] && (!!t.$$success[e] || null);
                    u(e, a),
                    t.$$parentForm.$setValidity(e, a, t)
                }
            }
            function Xo(e) {
                if (e)
                    for (var t in e)
                        if (e.hasOwnProperty(t))
                            return !1;
                return !0
            }
            var Qo = qi({
                terminal: !0,
                priority: 1e3
            })
              , ea = n("ngOptions")
              , ta = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/
              , na = ["$compile", "$document", "$parse", function(e, n, r) {
                var i = t.document.createElement("option")
                  , o = t.document.createElement("optgroup");
                return {
                    restrict: "A",
                    terminal: !0,
                    require: ["select", "ngModel"],
                    link: {
                        pre: function(e, t, n, r) {
                            r[0].registerOption = D
                        },
                        post: function(t, a, s, u) {
                            for (var l, f = u[0], d = u[1], h = s.multiple, p = 0, g = a.children(), m = g.length; p < m; p++)
                                if ("" === g[p].value) {
                                    l = g.eq(p);
                                    break
                                }
                            var v, $ = !!l, y = !1, x = c(i.cloneNode(!1));
                            x.val("?");
                            var E = function(e, t, n) {
                                var i = e.match(ta);
                                if (!i)
                                    throw ea("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", e, ge(t));
                                var o = i[5] || i[7]
                                  , a = i[6]
                                  , s = / as /.test(i[0]) && i[1]
                                  , u = i[9]
                                  , c = r(i[2] ? i[1] : o)
                                  , l = s && r(s) || c
                                  , f = u && r(u)
                                  , d = u ? function(e, t) {
                                    return f(n, t)
                                }
                                : function(e) {
                                    return Dt(e)
                                }
                                  , h = function(e, t) {
                                    return d(e, y(e, t))
                                }
                                  , p = r(i[2] || i[1])
                                  , g = r(i[3] || "")
                                  , m = r(i[4] || "")
                                  , v = r(i[8])
                                  , $ = {}
                                  , y = a ? function(e, t) {
                                    return $[a] = t,
                                    $[o] = e,
                                    $
                                }
                                : function(e) {
                                    return $[o] = e,
                                    $
                                }
                                ;
                                function w(e, t, n, r, i) {
                                    this.selectValue = e,
                                    this.viewValue = t,
                                    this.label = n,
                                    this.group = r,
                                    this.disabled = i
                                }
                                function x(e) {
                                    var t;
                                    if (!a && b(e))
                                        t = e;
                                    else
                                        for (var n in t = [],
                                        e)
                                            e.hasOwnProperty(n) && "$" !== n.charAt(0) && t.push(n);
                                    return t
                                }
                                return {
                                    trackBy: u,
                                    getTrackByValue: h,
                                    getWatchables: r(v, function(e) {
                                        for (var t = [], r = x(e = e || []), o = r.length, a = 0; a < o; a++) {
                                            var s = e === r ? a : r[a]
                                              , u = e[s]
                                              , c = y(u, s)
                                              , l = d(u, c);
                                            if (t.push(l),
                                            i[2] || i[1]) {
                                                var f = p(n, c);
                                                t.push(f)
                                            }
                                            if (i[4]) {
                                                var h = m(n, c);
                                                t.push(h)
                                            }
                                        }
                                        return t
                                    }),
                                    getOptions: function() {
                                        for (var e = [], t = {}, r = v(n) || [], i = x(r), o = i.length, a = 0; a < o; a++) {
                                            var s = r === i ? a : i[a]
                                              , c = r[s]
                                              , f = y(c, s)
                                              , $ = l(n, f)
                                              , b = d($, f)
                                              , E = new w(b,$,p(n, f),g(n, f),m(n, f));
                                            e.push(E),
                                            t[b] = E
                                        }
                                        return {
                                            items: e,
                                            selectValueMap: t,
                                            getOptionFromViewValue: function(e) {
                                                return t[h(e)]
                                            },
                                            getViewValueFromOption: function(e) {
                                                return u ? ne(e.viewValue) : e.viewValue
                                            }
                                        }
                                    }
                                }
                            }(s.ngOptions, a, t)
                              , S = n[0].createDocumentFragment()
                              , _ = function() {
                                $ ? y && l.removeAttr("selected") : l.remove()
                            }
                              , k = function() {
                                x.remove()
                            };
                            function A(e, t) {
                                var n = i.cloneNode(!1);
                                t.appendChild(n),
                                function(e, t) {
                                    e.element = t,
                                    t.disabled = e.disabled,
                                    e.label !== t.label && (t.label = e.label,
                                    t.textContent = e.label),
                                    t.value = e.selectValue
                                }(e, n)
                            }
                            function T() {
                                var e = v && f.readValue();
                                if (v)
                                    for (var t = v.items.length - 1; t >= 0; t--) {
                                        var n = v.items[t];
                                        P(n.group) ? Et(n.element.parentNode) : Et(n.element)
                                    }
                                v = E.getOptions();
                                var r = {};
                                if ($ && a.prepend(l),
                                v.items.forEach(function(e) {
                                    var t;
                                    P(e.group) ? ((t = r[e.group]) || (t = o.cloneNode(!1),
                                    S.appendChild(t),
                                    t.label = null === e.group ? "null" : e.group,
                                    r[e.group] = t),
                                    A(e, t)) : A(e, S)
                                }),
                                a[0].appendChild(S),
                                d.$render(),
                                !d.$isEmpty(e)) {
                                    var i = f.readValue();
                                    (E.trackBy || h ? re(e, i) : e === i) || (d.$setViewValue(i),
                                    d.$render())
                                }
                            }
                            h ? (d.$isEmpty = function(e) {
                                return !e || 0 === e.length
                            }
                            ,
                            f.writeValue = function(e) {
                                v.items.forEach(function(e) {
                                    e.element.selected = !1
                                }),
                                e && e.forEach(function(e) {
                                    var t = v.getOptionFromViewValue(e);
                                    t && (t.element.selected = !0)
                                })
                            }
                            ,
                            f.readValue = function() {
                                var e = a.val() || []
                                  , t = [];
                                return w(e, function(e) {
                                    var n = v.selectValueMap[e];
                                    n && !n.disabled && t.push(v.getViewValueFromOption(n))
                                }),
                                t
                            }
                            ,
                            E.trackBy && t.$watchCollection(function() {
                                if (q(d.$viewValue))
                                    return d.$viewValue.map(function(e) {
                                        return E.getTrackByValue(e)
                                    })
                            }, function() {
                                d.$render()
                            })) : (f.writeValue = function(e) {
                                var t = v.selectValueMap[a.val()]
                                  , n = v.getOptionFromViewValue(e);
                                t && t.element.removeAttribute("selected"),
                                n ? (a[0].value !== n.selectValue && (k(),
                                _(),
                                a[0].value = n.selectValue,
                                n.element.selected = !0),
                                n.element.setAttribute("selected", "selected")) : null === e || $ ? (k(),
                                $ || a.prepend(l),
                                a.val(""),
                                y && (l.prop("selected", !0),
                                l.attr("selected", !0))) : (_(),
                                a.prepend(x),
                                a.val("?"),
                                x.prop("selected", !0),
                                x.attr("selected", !0))
                            }
                            ,
                            f.readValue = function() {
                                var e = v.selectValueMap[a.val()];
                                return e && !e.disabled ? (_(),
                                k(),
                                v.getViewValueFromOption(e)) : null
                            }
                            ,
                            E.trackBy && t.$watch(function() {
                                return E.getTrackByValue(d.$viewValue)
                            }, function() {
                                d.$render()
                            })),
                            $ ? (l.remove(),
                            e(l)(t),
                            l[0].nodeType === Le ? (y = !1,
                            f.registerOption = function(e, t) {
                                "" === t.val() && (y = !0,
                                (l = t).removeClass("ng-scope"),
                                d.$render(),
                                t.on("$destroy", function() {
                                    l = void 0,
                                    y = !1
                                }))
                            }
                            ) : (l.removeClass("ng-scope"),
                            y = !0)) : l = c(i.cloneNode(!1)),
                            a.empty(),
                            T(),
                            t.$watchCollection(E.getWatchables, T)
                        }
                    }
                }
            }
            ]
              , ra = ["$locale", "$interpolate", "$log", function(e, t, n) {
                var r = /{}/g
                  , i = /^when(Minus)?(.+)$/;
                return {
                    link: function(o, s, u) {
                        var c, l = u.count, f = u.$attr.when && s.attr(u.$attr.when), d = u.offset || 0, h = o.$eval(f) || {}, p = {}, g = t.startSymbol(), m = t.endSymbol(), v = g + l + "-" + d + m, y = $.noop;
                        function b(e) {
                            s.text(e || "")
                        }
                        w(u, function(e, t) {
                            var n = i.exec(t);
                            if (n) {
                                var r = (n[1] ? "-" : "") + a(n[2]);
                                h[r] = s.attr(u.$attr[t])
                            }
                        }),
                        w(h, function(e, n) {
                            p[n] = t(e.replace(r, v))
                        }),
                        o.$watch(l, function(t) {
                            var r = parseFloat(t)
                              , i = C(r);
                            if (i || r in h || (r = e.pluralCat(r - d)),
                            !(r === c || i && C(c))) {
                                y();
                                var a = p[r];
                                R(a) ? (null != t && n.debug("ngPluralize: no rule defined for '" + r + "' in " + f),
                                y = D,
                                b()) : y = o.$watch(a, b),
                                c = r
                            }
                        })
                    }
                }
            }
            ]
              , ia = ["$parse", "$animate", "$compile", function(e, t, r) {
                var i = n("ngRepeat")
                  , a = function(e, t, n, r, i, o, a) {
                    e[n] = r,
                    i && (e[i] = o),
                    e.$index = t,
                    e.$first = 0 === t,
                    e.$last = t === a - 1,
                    e.$middle = !(e.$first || e.$last),
                    e.$odd = !(e.$even = 0 == (1 & t))
                }
                  , s = function(e) {
                    return e.clone[0]
                }
                  , u = function(e) {
                    return e.clone[e.clone.length - 1]
                };
                return {
                    restrict: "A",
                    multiElement: !0,
                    transclude: "element",
                    priority: 1e3,
                    terminal: !0,
                    $$tlb: !0,
                    compile: function(n, c) {
                        var l = c.ngRepeat
                          , f = r.$$createComment("end ngRepeat", l)
                          , d = l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                        if (!d)
                            throw i("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", l);
                        var h = d[1]
                          , p = d[2]
                          , g = d[3]
                          , m = d[4];
                        if (!(d = h.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/)))
                            throw i("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", h);
                        var v, $, y, x, E = d[3] || d[1], S = d[2];
                        if (g && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(g) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(g)))
                            throw i("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", g);
                        var _ = {
                            $id: Dt
                        };
                        return m ? v = e(m) : (y = function(e, t) {
                            return Dt(t)
                        }
                        ,
                        x = function(e) {
                            return e
                        }
                        ),
                        function(e, n, r, c, d) {
                            v && ($ = function(t, n, r) {
                                return S && (_[S] = t),
                                _[E] = n,
                                _.$index = r,
                                v(e, _)
                            }
                            );
                            var h = je();
                            e.$watchCollection(p, function(r) {
                                var c, p, m, v, _, k, A, T, O, C, N, D, M = n[0], I = je();
                                if (g && (e[g] = r),
                                b(r))
                                    O = r,
                                    T = $ || y;
                                else
                                    for (var j in T = $ || x,
                                    O = [],
                                    r)
                                        o.call(r, j) && "$" !== j.charAt(0) && O.push(j);
                                for (v = O.length,
                                N = new Array(v),
                                c = 0; c < v; c++)
                                    if (_ = r === O ? c : O[c],
                                    k = r[_],
                                    A = T(_, k, c),
                                    h[A])
                                        C = h[A],
                                        delete h[A],
                                        I[A] = C,
                                        N[c] = C;
                                    else {
                                        if (I[A])
                                            throw w(N, function(e) {
                                                e && e.scope && (h[e.id] = e)
                                            }),
                                            i("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", l, A, k);
                                        N[c] = {
                                            id: A,
                                            scope: void 0,
                                            clone: void 0
                                        },
                                        I[A] = !0
                                    }
                                for (var R in h) {
                                    if (D = Ie((C = h[R]).clone),
                                    t.leave(D),
                                    D[0].parentNode)
                                        for (c = 0,
                                        p = D.length; c < p; c++)
                                            D[c].$$NG_REMOVED = !0;
                                    C.scope.$destroy()
                                }
                                for (c = 0; c < v; c++)
                                    if (_ = r === O ? c : O[c],
                                    k = r[_],
                                    (C = N[c]).scope) {
                                        m = M;
                                        do {
                                            m = m.nextSibling
                                        } while (m && m.$$NG_REMOVED);s(C) !== m && t.move(Ie(C.clone), null, M),
                                        M = u(C),
                                        a(C.scope, c, E, k, S, _, v)
                                    } else
                                        d(function(e, n) {
                                            C.scope = n;
                                            var r = f.cloneNode(!1);
                                            e[e.length++] = r,
                                            t.enter(e, null, M),
                                            M = r,
                                            C.clone = e,
                                            I[C.id] = C,
                                            a(C.scope, c, E, k, S, _, v)
                                        });
                                h = I
                            })
                        }
                    }
                }
            }
            ]
              , oa = ["$animate", function(e) {
                return {
                    restrict: "A",
                    multiElement: !0,
                    link: function(t, n, r) {
                        t.$watch(r.ngShow, function(t) {
                            e[t ? "removeClass" : "addClass"](n, "ng-hide", {
                                tempClasses: "ng-hide-animate"
                            })
                        })
                    }
                }
            }
            ]
              , aa = ["$animate", function(e) {
                return {
                    restrict: "A",
                    multiElement: !0,
                    link: function(t, n, r) {
                        t.$watch(r.ngHide, function(t) {
                            e[t ? "addClass" : "removeClass"](n, "ng-hide", {
                                tempClasses: "ng-hide-animate"
                            })
                        })
                    }
                }
            }
            ]
              , sa = qi(function(e, t, n) {
                e.$watch(n.ngStyle, function(e, n) {
                    n && e !== n && w(n, function(e, n) {
                        t.css(n, "")
                    }),
                    e && t.css(e)
                }, !0)
            })
              , ua = ["$animate", "$compile", function(e, t) {
                return {
                    require: "ngSwitch",
                    controller: ["$scope", function() {
                        this.cases = {}
                    }
                    ],
                    link: function(n, r, i, o) {
                        var a = i.ngSwitch || i.on
                          , s = []
                          , u = []
                          , c = []
                          , l = []
                          , f = function(e, t) {
                            return function(n) {
                                !1 !== n && e.splice(t, 1)
                            }
                        };
                        n.$watch(a, function(n) {
                            for (var r, i; c.length; )
                                e.cancel(c.pop());
                            for (r = 0,
                            i = l.length; r < i; ++r) {
                                var a = Ie(u[r].clone);
                                l[r].$destroy(),
                                (c[r] = e.leave(a)).done(f(c, r))
                            }
                            u.length = 0,
                            l.length = 0,
                            (s = o.cases["!" + n] || o.cases["?"]) && w(s, function(n) {
                                n.transclude(function(r, i) {
                                    l.push(i);
                                    var o = n.element;
                                    r[r.length++] = t.$$createComment("end ngSwitchWhen");
                                    var a = {
                                        clone: r
                                    };
                                    u.push(a),
                                    e.enter(r, o.parent(), o)
                                })
                            })
                        })
                    }
                }
            }
            ]
              , ca = qi({
                transclude: "element",
                priority: 1200,
                require: "^ngSwitch",
                multiElement: !0,
                link: function(e, t, n, r, i) {
                    w(n.ngSwitchWhen.split(n.ngSwitchWhenSeparator).sort().filter(function(e, t, n) {
                        return n[t - 1] !== e
                    }), function(e) {
                        r.cases["!" + e] = r.cases["!" + e] || [],
                        r.cases["!" + e].push({
                            transclude: i,
                            element: t
                        })
                    })
                }
            })
              , la = qi({
                transclude: "element",
                priority: 1200,
                require: "^ngSwitch",
                multiElement: !0,
                link: function(e, t, n, r, i) {
                    r.cases["?"] = r.cases["?"] || [],
                    r.cases["?"].push({
                        transclude: i,
                        element: t
                    })
                }
            })
              , fa = n("ngTransclude")
              , da = ["$compile", function(e) {
                return {
                    restrict: "EAC",
                    terminal: !0,
                    compile: function(t) {
                        var n = e(t.contents());
                        return t.empty(),
                        function(e, t, r, i, o) {
                            if (!o)
                                throw fa("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", ge(t));
                            r.ngTransclude === r.$attr.ngTransclude && (r.ngTransclude = "");
                            var a = r.ngTransclude || r.ngTranscludeSlot;
                            function s() {
                                n(e, function(e) {
                                    t.append(e)
                                })
                            }
                            o(function(e, n) {
                                e.length ? t.append(e) : (s(),
                                n.$destroy())
                            }, null, a),
                            a && !o.isSlotFilled(a) && s()
                        }
                    }
                }
            }
            ]
              , ha = ["$templateCache", function(e) {
                return {
                    restrict: "E",
                    terminal: !0,
                    compile: function(t, n) {
                        if ("text/ng-template" === n.type) {
                            var r = n.id
                              , i = t[0].text;
                            e.put(r, i)
                        }
                    }
                }
            }
            ]
              , pa = {
                $setViewValue: D,
                $render: D
            };
            var ga = ["$element", "$scope", function(e, n) {
                var r = this
                  , i = new Mt;
                r.ngModelCtrl = pa,
                r.unknownOption = c(t.document.createElement("option")),
                r.renderUnknownOption = function(t) {
                    var n = "? " + Dt(t) + " ?";
                    r.unknownOption.val(n),
                    e.prepend(r.unknownOption),
                    e.val(n)
                }
                ,
                n.$on("$destroy", function() {
                    r.renderUnknownOption = D
                }),
                r.removeUnknownOption = function() {
                    r.unknownOption.parent() && r.unknownOption.remove()
                }
                ,
                r.readValue = function() {
                    return r.removeUnknownOption(),
                    e.val()
                }
                ,
                r.writeValue = function(t) {
                    r.hasOption(t) ? (r.removeUnknownOption(),
                    e.val(t),
                    "" === t && r.emptyOption.prop("selected", !0)) : null == t && r.emptyOption ? (r.removeUnknownOption(),
                    e.val("")) : r.renderUnknownOption(t)
                }
                ,
                r.addOption = function(e, t) {
                    if (t[0].nodeType !== Le) {
                        De(e, '"option value"'),
                        "" === e && (r.emptyOption = t);
                        var n, o = i.get(e) || 0;
                        i.put(e, o + 1),
                        r.ngModelCtrl.$render(),
                        (n = t)[0].hasAttribute("selected") && (n[0].selected = !0)
                    }
                }
                ,
                r.removeOption = function(e) {
                    var t = i.get(e);
                    t && (1 === t ? (i.remove(e),
                    "" === e && (r.emptyOption = void 0)) : i.put(e, t - 1))
                }
                ,
                r.hasOption = function(e) {
                    return !!i.get(e)
                }
                ,
                r.registerOption = function(e, t, n, i, o) {
                    var a;
                    i ? n.$observe("value", function(e) {
                        P(a) && r.removeOption(a),
                        a = e,
                        r.addOption(e, t)
                    }) : o ? e.$watch(o, function(e, i) {
                        n.$set("value", e),
                        i !== e && r.removeOption(i),
                        r.addOption(e, t)
                    }) : r.addOption(n.value, t);
                    t.on("$destroy", function() {
                        r.removeOption(n.value),
                        r.ngModelCtrl.$render()
                    })
                }
            }
            ]
              , ma = function() {
                return {
                    restrict: "E",
                    require: ["select", "?ngModel"],
                    controller: ga,
                    priority: 1,
                    link: {
                        pre: function(e, t, n, r) {
                            var i = r[1];
                            if (!i)
                                return;
                            var o = r[0];
                            if (o.ngModelCtrl = i,
                            t.on("change", function() {
                                e.$apply(function() {
                                    i.$setViewValue(o.readValue())
                                })
                            }),
                            n.multiple) {
                                o.readValue = function() {
                                    var e = [];
                                    return w(t.find("option"), function(t) {
                                        t.selected && e.push(t.value)
                                    }),
                                    e
                                }
                                ,
                                o.writeValue = function(e) {
                                    var n = new Mt(e);
                                    w(t.find("option"), function(e) {
                                        e.selected = P(n.get(e.value))
                                    })
                                }
                                ;
                                var a, s = NaN;
                                e.$watch(function() {
                                    s !== i.$viewValue || re(a, i.$viewValue) || (a = Ue(i.$viewValue),
                                    i.$render()),
                                    s = i.$viewValue
                                }),
                                i.$isEmpty = function(e) {
                                    return !e || 0 === e.length
                                }
                            }
                        },
                        post: function(e, t, n, r) {
                            var i = r[1];
                            if (!i)
                                return;
                            var o = r[0];
                            i.$render = function() {
                                o.writeValue(i.$viewValue)
                            }
                        }
                    }
                }
            }
              , va = ["$interpolate", function(e) {
                return {
                    restrict: "E",
                    priority: 100,
                    compile: function(t, n) {
                        var r, i;
                        return P(n.ngValue) ? r = !0 : P(n.value) ? r = e(n.value, !0) : (i = e(t.text(), !0)) || n.$set("value", t.text()),
                        function(e, t, n) {
                            var o = t.parent()
                              , a = o.data("$selectController") || o.parent().data("$selectController");
                            a && a.registerOption(e, t, n, r, i)
                        }
                    }
                }
            }
            ]
              , $a = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(e, t, n, r) {
                        r && (n.required = !0,
                        r.$validators.required = function(e, t) {
                            return !n.required || !r.$isEmpty(t)
                        }
                        ,
                        n.$observe("required", function() {
                            r.$validate()
                        }))
                    }
                }
            }
              , ya = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(e, t, r, i) {
                        if (i) {
                            var o, a = r.ngPattern || r.pattern;
                            r.$observe("pattern", function(e) {
                                if (H(e) && e.length > 0 && (e = new RegExp("^" + e + "$")),
                                e && !e.test)
                                    throw n("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", a, e, ge(t));
                                o = e || void 0,
                                i.$validate()
                            }),
                            i.$validators.pattern = function(e, t) {
                                return i.$isEmpty(t) || R(o) || o.test(t)
                            }
                        }
                    }
                }
            }
              , ba = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(e, t, n, r) {
                        if (r) {
                            var i = -1;
                            n.$observe("maxlength", function(e) {
                                var t = O(e);
                                i = C(t) ? -1 : t,
                                r.$validate()
                            }),
                            r.$validators.maxlength = function(e, t) {
                                return i < 0 || r.$isEmpty(t) || t.length <= i
                            }
                        }
                    }
                }
            }
              , wa = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(e, t, n, r) {
                        if (r) {
                            var i = 0;
                            n.$observe("minlength", function(e) {
                                i = O(e) || 0,
                                r.$validate()
                            }),
                            r.$validators.minlength = function(e, t) {
                                return r.$isEmpty(t) || t.length >= i
                            }
                        }
                    }
                }
            };
            t.angular.bootstrap ? t.console && console.log("WARNING: Tried to load angular more than once.") : (!function() {
                var n;
                if (!Oe) {
                    var r = oe();
                    (l = R(r) ? e : r ? t[r] : void 0) && l.fn.on ? (c = l,
                    A(l.fn, {
                        scope: St.scope,
                        isolateScope: St.isolateScope,
                        controller: St.controller,
                        injector: St.injector,
                        inheritedData: St.inheritedData
                    }),
                    n = l.cleanData,
                    l.cleanData = function(e) {
                        for (var t, r, i = 0; null != (r = e[i]); i++)
                            (t = l._data(r, "events")) && t.$destroy && l(r).triggerHandler("$destroy");
                        n(e)
                    }
                    ) : c = ct,
                    $.element = c,
                    Oe = !0
                }
            }(),
            function(e) {
                A(e, {
                    bootstrap: Se,
                    copy: ne,
                    extend: A,
                    merge: T,
                    equals: re,
                    element: c,
                    forEach: w,
                    injector: qt,
                    noop: D,
                    bind: ue,
                    toJson: le,
                    fromJson: fe,
                    identity: M,
                    isUndefined: R,
                    isDefined: P,
                    isString: H,
                    isFunction: B,
                    isObject: L,
                    isNumber: U,
                    isElement: Q,
                    isArray: q,
                    version: qe,
                    isDate: V,
                    lowercase: a,
                    uppercase: s,
                    callbacks: {
                        $$counter: 0
                    },
                    getTestability: ke,
                    $$minErr: n,
                    $$csp: ie,
                    reloadWithDebugInfo: _e
                }),
                (f = function(e) {
                    var t = n("$injector")
                      , r = n("ng");
                    function i(e, t, n) {
                        return e[t] || (e[t] = n())
                    }
                    var o = i(e, "angular", Object);
                    return o.$$minErr = o.$$minErr || n,
                    i(o, "module", function() {
                        var e = {};
                        return function(n, o, a) {
                            return function(e, t) {
                                if ("hasOwnProperty" === e)
                                    throw r("badname", "hasOwnProperty is not a valid {0} name", t)
                            }(n, "module"),
                            o && e.hasOwnProperty(n) && (e[n] = null),
                            i(e, n, function() {
                                if (!o)
                                    throw t("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", n);
                                var e = []
                                  , r = []
                                  , i = []
                                  , s = c("$injector", "invoke", "push", r)
                                  , u = {
                                    _invokeQueue: e,
                                    _configBlocks: r,
                                    _runBlocks: i,
                                    requires: o,
                                    name: n,
                                    provider: l("$provide", "provider"),
                                    factory: l("$provide", "factory"),
                                    service: l("$provide", "service"),
                                    value: c("$provide", "value"),
                                    constant: c("$provide", "constant", "unshift"),
                                    decorator: l("$provide", "decorator"),
                                    animation: l("$animateProvider", "register"),
                                    filter: l("$filterProvider", "register"),
                                    controller: l("$controllerProvider", "register"),
                                    directive: l("$compileProvider", "directive"),
                                    component: l("$compileProvider", "component"),
                                    config: s,
                                    run: function(e) {
                                        return i.push(e),
                                        this
                                    }
                                };
                                return a && s(a),
                                u;
                                function c(t, n, r, i) {
                                    return i || (i = e),
                                    function() {
                                        return i[r || "push"]([t, n, arguments]),
                                        u
                                    }
                                }
                                function l(t, r) {
                                    return function(i, o) {
                                        return o && B(o) && (o.$$moduleName = n),
                                        e.push([t, r, arguments]),
                                        u
                                    }
                                }
                            })
                        }
                    })
                }(t))("ng", ["ngLocale"], ["$provide", function(e) {
                    e.provider({
                        $$sanitizeUri: Qr
                    }),
                    e.provider("$compile", un).directive({
                        a: Bi,
                        input: wo,
                        textarea: wo,
                        form: Ji,
                        script: ha,
                        select: ma,
                        option: va,
                        ngBind: So,
                        ngBindHtml: ko,
                        ngBindTemplate: _o,
                        ngClass: Oo,
                        ngClassEven: No,
                        ngClassOdd: Co,
                        ngCloak: Do,
                        ngController: Mo,
                        ngForm: Zi,
                        ngHide: aa,
                        ngIf: Ro,
                        ngInclude: Po,
                        ngInit: Fo,
                        ngNonBindable: Qo,
                        ngPluralize: ra,
                        ngRepeat: ia,
                        ngShow: oa,
                        ngStyle: sa,
                        ngSwitch: ua,
                        ngSwitchWhen: ca,
                        ngSwitchDefault: la,
                        ngOptions: na,
                        ngTransclude: da,
                        ngModel: Yo,
                        ngList: Ho,
                        ngChange: Ao,
                        pattern: ya,
                        ngPattern: ya,
                        required: $a,
                        ngRequired: $a,
                        minlength: wa,
                        ngMinlength: wa,
                        maxlength: ba,
                        ngMaxlength: ba,
                        ngValue: Eo,
                        ngModelOptions: Jo
                    }).directive({
                        ngInclude: Lo
                    }).directive(Gi).directive(Io),
                    e.provider({
                        $anchorScroll: Bt,
                        $animate: Zt,
                        $animateCss: en,
                        $$animateJs: Kt,
                        $$animateQueue: Jt,
                        $$AnimateRunner: Qt,
                        $$animateAsyncRun: Xt,
                        $browser: nn,
                        $cacheFactory: rn,
                        $controller: vn,
                        $document: $n,
                        $exceptionHandler: yn,
                        $filter: vi,
                        $$forceReflow: bn,
                        $interpolate: Hn,
                        $interval: Un,
                        $http: Rn,
                        $httpParamSerializer: On,
                        $httpParamSerializerJQLike: Cn,
                        $httpBackend: Ln,
                        $xhrFactory: Pn,
                        $jsonpCallbacks: Vn,
                        $location: ar,
                        $log: sr,
                        $parse: zr,
                        $rootScope: Xr,
                        $q: Yr,
                        $$q: Kr,
                        $sce: ii,
                        $sceDelegate: ri,
                        $sniffer: oi,
                        $templateCache: on,
                        $templateRequest: si,
                        $$testability: ui,
                        $timeout: ci,
                        $window: pi,
                        $$rAF: Zr,
                        $$jqLite: Nt,
                        $$HashMap: It,
                        $$cookieReader: mi
                    })
                }
                ])
            }($),
            $.module("ngLocale", [], ["$provide", function(e) {
                var t = "one"
                  , n = "other";
                e.value("$locale", {
                    DATETIME_FORMATS: {
                        AMPMS: ["AM", "PM"],
                        DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        ERANAMES: ["Before Christ", "Anno Domini"],
                        ERAS: ["BC", "AD"],
                        FIRSTDAYOFWEEK: 6,
                        MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        STANDALONEMONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        WEEKENDRANGE: [5, 6],
                        fullDate: "EEEE, MMMM d, y",
                        longDate: "MMMM d, y",
                        medium: "MMM d, y h:mm:ss a",
                        mediumDate: "MMM d, y",
                        mediumTime: "h:mm:ss a",
                        short: "M/d/yy h:mm a",
                        shortDate: "M/d/yy",
                        shortTime: "h:mm a"
                    },
                    NUMBER_FORMATS: {
                        CURRENCY_SYM: "$",
                        DECIMAL_SEP: ".",
                        GROUP_SEP: ",",
                        PATTERNS: [{
                            gSize: 3,
                            lgSize: 3,
                            maxFrac: 3,
                            minFrac: 0,
                            minInt: 1,
                            negPre: "-",
                            negSuf: "",
                            posPre: "",
                            posSuf: ""
                        }, {
                            gSize: 3,
                            lgSize: 3,
                            maxFrac: 2,
                            minFrac: 2,
                            minInt: 1,
                            negPre: "-¤",
                            negSuf: "",
                            posPre: "¤",
                            posSuf: ""
                        }]
                    },
                    id: "en-us",
                    localeID: "en_US",
                    pluralCat: function(e, r) {
                        var i = 0 | e
                          , o = function(e, t) {
                            var n = t;
                            void 0 === n && (n = Math.min(function(e) {
                                var t = (e += "").indexOf(".");
                                return -1 == t ? 0 : e.length - t - 1
                            }(e), 3));
                            var r = Math.pow(10, n);
                            return {
                                v: n,
                                f: (e * r | 0) % r
                            }
                        }(e, r);
                        return 1 == i && 0 == o.v ? t : n
                    }
                })
            }
            ]),
            c(t.document).ready(function() {
                Ee(t.document, Se)
            }))
        }(window),
        !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>')
    }
    ).call(this, n(15))
}
, function(e, t, n) {
    (function(t) {
        e.exports = t.jQuery = n(45)
    }
    ).call(this, n(10))
}
, function(e, t, n) {
    var r, i, o;
    /*!
 * jQuery JavaScript Library v1.11.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:19Z
 */
    /*!
 * jQuery JavaScript Library v1.11.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:19Z
 */
    i = "undefined" != typeof window ? window : this,
    o = function(n, i) {
        var o = []
          , a = o.slice
          , s = o.concat
          , u = o.push
          , c = o.indexOf
          , l = {}
          , f = l.toString
          , d = l.hasOwnProperty
          , h = {}
          , p = function(e, t) {
            return new p.fn.init(e,t)
        }
          , g = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
          , m = /^-ms-/
          , v = /-([\da-z])/gi
          , $ = function(e, t) {
            return t.toUpperCase()
        };
        function y(e) {
            var t = "length"in e && e.length
              , n = p.type(e);
            return "function" !== n && !p.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }
        p.fn = p.prototype = {
            jquery: "1.11.3",
            constructor: p,
            selector: "",
            length: 0,
            toArray: function() {
                return a.call(this)
            },
            get: function(e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : a.call(this)
            },
            pushStack: function(e) {
                var t = p.merge(this.constructor(), e);
                return t.prevObject = this,
                t.context = this.context,
                t
            },
            each: function(e, t) {
                return p.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(p.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length
                  , n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: u,
            sort: o.sort,
            splice: o.splice
        },
        p.extend = p.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, c = !1;
            for ("boolean" == typeof a && (c = a,
            a = arguments[s] || {},
            s++),
            "object" == typeof a || p.isFunction(a) || (a = {}),
            s === u && (a = this,
            s--); s < u; s++)
                if (null != (i = arguments[s]))
                    for (r in i)
                        e = a[r],
                        a !== (n = i[r]) && (c && n && (p.isPlainObject(n) || (t = p.isArray(n))) ? (t ? (t = !1,
                        o = e && p.isArray(e) ? e : []) : o = e && p.isPlainObject(e) ? e : {},
                        a[r] = p.extend(c, o, n)) : void 0 !== n && (a[r] = n));
            return a
        }
        ,
        p.extend({
            expando: "jQuery" + ("1.11.3" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === p.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === p.type(e)
            }
            ,
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !p.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e))
                    return !1;
                try {
                    if (e.constructor && !d.call(e, "constructor") && !d.call(e.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (e) {
                    return !1
                }
                if (h.ownLast)
                    for (t in e)
                        return d.call(e, t);
                for (t in e)
                    ;
                return void 0 === t || d.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[f.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                e && p.trim(e) && (n.execScript || function(e) {
                    n.eval.call(n, e)
                }
                )(e)
            },
            camelCase: function(e) {
                return e.replace(m, "ms-").replace(v, $)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, n) {
                var r = 0
                  , i = e.length
                  , o = y(e);
                if (n) {
                    if (o)
                        for (; r < i && !1 !== t.apply(e[r], n); r++)
                            ;
                    else
                        for (r in e)
                            if (!1 === t.apply(e[r], n))
                                break
                } else if (o)
                    for (; r < i && !1 !== t.call(e[r], r, e[r]); r++)
                        ;
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r]))
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(g, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (y(Object(e)) ? p.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (c)
                        return c.call(t, e, n);
                    for (r = t.length,
                    n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                        if (n in t && t[n] === e)
                            return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; )
                    e[i++] = t[r++];
                if (n != n)
                    for (; void 0 !== t[r]; )
                        e[i++] = t[r++];
                return e.length = i,
                e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                    !t(e[i], i) !== a && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i = 0, o = e.length, a = [];
                if (y(e))
                    for (; i < o; i++)
                        null != (r = t(e[i], i, n)) && a.push(r);
                else
                    for (i in e)
                        null != (r = t(e[i], i, n)) && a.push(r);
                return s.apply([], a)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                if ("string" == typeof t && (i = e[t],
                t = e,
                e = i),
                p.isFunction(e))
                    return n = a.call(arguments, 2),
                    (r = function() {
                        return e.apply(t || this, n.concat(a.call(arguments)))
                    }
                    ).guid = e.guid = e.guid || p.guid++,
                    r
            },
            now: function() {
                return +new Date
            },
            support: h
        }),
        p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            l["[object " + t + "]"] = t.toLowerCase()
        });
        var b = /*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
        function(e) {
            var t, n, r, i, o, a, s, u, c, l, f, d, h, p, g, m, v, $, y, b = "sizzle" + 1 * new Date, w = e.document, x = 0, E = 0, S = ae(), _ = ae(), k = ae(), A = function(e, t) {
                return e === t && (f = !0),
                0
            }, T = 1 << 31, O = {}.hasOwnProperty, C = [], N = C.pop, D = C.push, M = C.push, I = C.slice, j = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", F = L.replace("w", "w#"), H = "\\[" + P + "*(" + L + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + P + "*\\]", U = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)", V = new RegExp(P + "+","g"), q = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$","g"), B = new RegExp("^" + P + "*," + P + "*"), G = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), W = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]","g"), z = new RegExp(U), Y = new RegExp("^" + F + "$"), K = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + U),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)","i"),
                bool: new RegExp("^(?:" + R + ")$","i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)","i")
            }, J = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, X = /^[^{]+\{\s*\[native \w/, Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = /'|\\/g, ne = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)","ig"), re = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, ie = function() {
                d()
            };
            try {
                M.apply(C = I.call(w.childNodes), w.childNodes),
                C[w.childNodes.length].nodeType
            } catch (e) {
                M = {
                    apply: C.length ? function(e, t) {
                        D.apply(e, I.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++]; )
                            ;
                        e.length = n - 1
                    }
                }
            }
            function oe(e, t, r, i) {
                var o, s, c, l, f, p, v, $, x, E;
                if ((t ? t.ownerDocument || t : w) !== h && d(t),
                r = r || [],
                l = (t = t || h).nodeType,
                "string" != typeof e || !e || 1 !== l && 9 !== l && 11 !== l)
                    return r;
                if (!i && g) {
                    if (11 !== l && (o = Q.exec(e)))
                        if (c = o[1]) {
                            if (9 === l) {
                                if (!(s = t.getElementById(c)) || !s.parentNode)
                                    return r;
                                if (s.id === c)
                                    return r.push(s),
                                    r
                            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(c)) && y(t, s) && s.id === c)
                                return r.push(s),
                                r
                        } else {
                            if (o[2])
                                return M.apply(r, t.getElementsByTagName(e)),
                                r;
                            if ((c = o[3]) && n.getElementsByClassName)
                                return M.apply(r, t.getElementsByClassName(c)),
                                r
                        }
                    if (n.qsa && (!m || !m.test(e))) {
                        if ($ = v = b,
                        x = t,
                        E = 1 !== l && e,
                        1 === l && "object" !== t.nodeName.toLowerCase()) {
                            for (p = a(e),
                            (v = t.getAttribute("id")) ? $ = v.replace(te, "\\$&") : t.setAttribute("id", $),
                            $ = "[id='" + $ + "'] ",
                            f = p.length; f--; )
                                p[f] = $ + me(p[f]);
                            x = ee.test(e) && pe(t.parentNode) || t,
                            E = p.join(",")
                        }
                        if (E)
                            try {
                                return M.apply(r, x.querySelectorAll(E)),
                                r
                            } catch (e) {} finally {
                                v || t.removeAttribute("id")
                            }
                    }
                }
                return u(e.replace(q, "$1"), t, r, i)
            }
            function ae() {
                var e = [];
                return function t(n, i) {
                    return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                    t[n + " "] = i
                }
            }
            function se(e) {
                return e[b] = !0,
                e
            }
            function ue(e) {
                var t = h.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function ce(e, t) {
                for (var n = e.split("|"), i = e.length; i--; )
                    r.attrHandle[n[i]] = t
            }
            function le(e, t) {
                var n = t && e
                  , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || T) - (~e.sourceIndex || T);
                if (r)
                    return r;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function fe(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }
            function de(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function he(e) {
                return se(function(t) {
                    return t = +t,
                    se(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--; )
                            n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            function pe(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in n = oe.support = {},
            o = oe.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }
            ,
            d = oe.setDocument = function(e) {
                var t, i, a = e ? e.ownerDocument || e : w;
                return a !== h && 9 === a.nodeType && a.documentElement ? (h = a,
                p = a.documentElement,
                (i = a.defaultView) && i !== i.top && (i.addEventListener ? i.addEventListener("unload", ie, !1) : i.attachEvent && i.attachEvent("onunload", ie)),
                g = !o(a),
                n.attributes = ue(function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }),
                n.getElementsByTagName = ue(function(e) {
                    return e.appendChild(a.createComment("")),
                    !e.getElementsByTagName("*").length
                }),
                n.getElementsByClassName = X.test(a.getElementsByClassName),
                n.getById = ue(function(e) {
                    return p.appendChild(e).id = b,
                    !a.getElementsByName || !a.getElementsByName(b).length
                }),
                n.getById ? (r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }
                ,
                r.filter.ID = function(e) {
                    var t = e.replace(ne, re);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
                ) : (delete r.find.ID,
                r.filter.ID = function(e) {
                    var t = e.replace(ne, re);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }
                ),
                r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                }
                : function(e, t) {
                    var n, r = [], i = 0, o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++]; )
                            1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }
                ,
                r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (g)
                        return t.getElementsByClassName(e)
                }
                ,
                v = [],
                m = [],
                (n.qsa = X.test(a.querySelectorAll)) && (ue(function(e) {
                    p.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\f]' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + R + ")"),
                    e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="),
                    e.querySelectorAll(":checked").length || m.push(":checked"),
                    e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
                }),
                ue(function(e) {
                    var t = a.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="),
                    e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    m.push(",.*:")
                })),
                (n.matchesSelector = X.test($ = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ue(function(e) {
                    n.disconnectedMatch = $.call(e, "div"),
                    $.call(e, "[s!='']:x"),
                    v.push("!=", U)
                }),
                m = m.length && new RegExp(m.join("|")),
                v = v.length && new RegExp(v.join("|")),
                t = X.test(p.compareDocumentPosition),
                y = t || X.test(p.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e
                      , r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                }
                : function(e, t) {
                    if (t)
                        for (; t = t.parentNode; )
                            if (t === e)
                                return !0;
                    return !1
                }
                ,
                A = t ? function(e, t) {
                    if (e === t)
                        return f = !0,
                        0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === a || e.ownerDocument === w && y(w, e) ? -1 : t === a || t.ownerDocument === w && y(w, t) ? 1 : l ? j(l, e) - j(l, t) : 0 : 4 & r ? -1 : 1)
                }
                : function(e, t) {
                    if (e === t)
                        return f = !0,
                        0;
                    var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], u = [t];
                    if (!i || !o)
                        return e === a ? -1 : t === a ? 1 : i ? -1 : o ? 1 : l ? j(l, e) - j(l, t) : 0;
                    if (i === o)
                        return le(e, t);
                    for (n = e; n = n.parentNode; )
                        s.unshift(n);
                    for (n = t; n = n.parentNode; )
                        u.unshift(n);
                    for (; s[r] === u[r]; )
                        r++;
                    return r ? le(s[r], u[r]) : s[r] === w ? -1 : u[r] === w ? 1 : 0
                }
                ,
                a) : h
            }
            ,
            oe.matches = function(e, t) {
                return oe(e, null, null, t)
            }
            ,
            oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== h && d(e),
                t = t.replace(W, "='$1']"),
                n.matchesSelector && g && (!v || !v.test(t)) && (!m || !m.test(t)))
                    try {
                        var r = $.call(e, t);
                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return r
                    } catch (e) {}
                return oe(t, h, null, [e]).length > 0
            }
            ,
            oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== h && d(e),
                y(e, t)
            }
            ,
            oe.attr = function(e, t) {
                (e.ownerDocument || e) !== h && d(e);
                var i = r.attrHandle[t.toLowerCase()]
                  , o = i && O.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }
            ,
            oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            oe.uniqueSort = function(e) {
                var t, r = [], i = 0, o = 0;
                if (f = !n.detectDuplicates,
                l = !n.sortStable && e.slice(0),
                e.sort(A),
                f) {
                    for (; t = e[o++]; )
                        t === e[o] && (i = r.push(o));
                    for (; i--; )
                        e.splice(r[i], 1)
                }
                return l = null,
                e
            }
            ,
            i = oe.getText = function(e) {
                var t, n = "", r = 0, o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += i(e)
                    } else if (3 === o || 4 === o)
                        return e.nodeValue
                } else
                    for (; t = e[r++]; )
                        n += i(t);
                return n
            }
            ,
            (r = oe.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: K,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ne, re),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(ne, re),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]),
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                        e[2] = n.slice(0, t)),
                        e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ne, re).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                        : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = S[e + " "];
                        return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && S(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = oe.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "",
                            "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(V, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3)
                          , a = "last" !== e.slice(-4)
                          , s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        }
                        : function(t, n, u) {
                            var c, l, f, d, h, p, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), $ = !u && !s;
                            if (m) {
                                if (o) {
                                    for (; g; ) {
                                        for (f = t; f = f[g]; )
                                            if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                                return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? m.firstChild : m.lastChild],
                                a && $) {
                                    for (h = (c = (l = m[b] || (m[b] = {}))[e] || [])[0] === x && c[1],
                                    d = c[0] === x && c[2],
                                    f = h && m.childNodes[h]; f = ++h && f && f[g] || (d = h = 0) || p.pop(); )
                                        if (1 === f.nodeType && ++d && f === t) {
                                            l[e] = [x, h, d];
                                            break
                                        }
                                } else if ($ && (c = (t[b] || (t[b] = {}))[e]) && c[0] === x)
                                    d = c[1];
                                else
                                    for (; (f = ++h && f && f[g] || (d = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || ($ && ((f[b] || (f[b] = {}))[e] = [x, d]),
                                    f !== t)); )
                                        ;
                                return (d -= i) === r || d % r == 0 && d / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                        r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                            for (var r, o = i(e, t), a = o.length; a--; )
                                e[r = j(e, o[a])] = !(n[r] = o[a])
                        }) : function(e) {
                            return i(e, 0, n)
                        }
                        ) : i
                    }
                },
                pseudos: {
                    not: se(function(e) {
                        var t = []
                          , n = []
                          , r = s(e.replace(q, "$1"));
                        return r[b] ? se(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--; )
                                (o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e,
                            r(t, null, o, n),
                            t[0] = null,
                            !n.pop()
                        }
                    }),
                    has: se(function(e) {
                        return function(t) {
                            return oe(e, t).length > 0
                        }
                    }),
                    contains: se(function(e) {
                        return e = e.replace(ne, re),
                        function(t) {
                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                        }
                    }),
                    lang: se(function(e) {
                        return Y.test(e || "") || oe.error("unsupported lang: " + e),
                        e = e.replace(ne, re).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === p
                    },
                    focus: function(e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Z.test(e.nodeName)
                    },
                    input: function(e) {
                        return J.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: he(function() {
                        return [0]
                    }),
                    last: he(function(e, t) {
                        return [t - 1]
                    }),
                    eq: he(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: he(function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: he(function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: he(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0; )
                            e.push(r);
                        return e
                    }),
                    gt: he(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; )
                            e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = r.pseudos.eq,
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                r.pseudos[t] = fe(t);
            for (t in {
                submit: !0,
                reset: !0
            })
                r.pseudos[t] = de(t);
            function ge() {}
            function me(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++)
                    r += e[t].value;
                return r
            }
            function ve(e, t, n) {
                var r = t.dir
                  , i = n && "parentNode" === r
                  , o = E++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r]; )
                        if (1 === t.nodeType || i)
                            return e(t, n, o)
                }
                : function(t, n, a) {
                    var s, u, c = [x, o];
                    if (a) {
                        for (; t = t[r]; )
                            if ((1 === t.nodeType || i) && e(t, n, a))
                                return !0
                    } else
                        for (; t = t[r]; )
                            if (1 === t.nodeType || i) {
                                if ((s = (u = t[b] || (t[b] = {}))[r]) && s[0] === x && s[1] === o)
                                    return c[2] = s[2];
                                if (u[r] = c,
                                c[2] = e(t, n, a))
                                    return !0
                            }
                }
            }
            function $e(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--; )
                        if (!e[i](t, n, r))
                            return !1;
                    return !0
                }
                : e[0]
            }
            function ye(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++)
                    (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                    c && t.push(s)));
                return a
            }
            function be(e, t, n, r, i, o) {
                return r && !r[b] && (r = be(r)),
                i && !i[b] && (i = be(i, o)),
                se(function(o, a, s, u) {
                    var c, l, f, d = [], h = [], p = a.length, g = o || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                            oe(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : ye(g, d, e, s, u), v = n ? i || (o ? e : p || r) ? [] : a : m;
                    if (n && n(m, v, s, u),
                    r)
                        for (c = ye(v, h),
                        r(c, [], s, u),
                        l = c.length; l--; )
                            (f = c[l]) && (v[h[l]] = !(m[h[l]] = f));
                    if (o) {
                        if (i || e) {
                            if (i) {
                                for (c = [],
                                l = v.length; l--; )
                                    (f = v[l]) && c.push(m[l] = f);
                                i(null, v = [], c, u)
                            }
                            for (l = v.length; l--; )
                                (f = v[l]) && (c = i ? j(o, f) : d[l]) > -1 && (o[c] = !(a[c] = f))
                        }
                    } else
                        v = ye(v === a ? v.splice(p, v.length) : v),
                        i ? i(null, a, v, u) : M.apply(a, v)
                })
            }
            function we(e) {
                for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, l = ve(function(e) {
                    return e === t
                }, s, !0), f = ve(function(e) {
                    return j(t, e) > -1
                }, s, !0), d = [function(e, n, r) {
                    var i = !a && (r || n !== c) || ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
                    return t = null,
                    i
                }
                ]; u < o; u++)
                    if (n = r.relative[e[u].type])
                        d = [ve($e(d), n)];
                    else {
                        if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                            for (i = ++u; i < o && !r.relative[e[i].type]; i++)
                                ;
                            return be(u > 1 && $e(d), u > 1 && me(e.slice(0, u - 1).concat({
                                value: " " === e[u - 2].type ? "*" : ""
                            })).replace(q, "$1"), n, u < i && we(e.slice(u, i)), i < o && we(e = e.slice(i)), i < o && me(e))
                        }
                        d.push(n)
                    }
                return $e(d)
            }
            return ge.prototype = r.filters = r.pseudos,
            r.setFilters = new ge,
            a = oe.tokenize = function(e, t) {
                var n, i, o, a, s, u, c, l = _[e + " "];
                if (l)
                    return t ? 0 : l.slice(0);
                for (s = e,
                u = [],
                c = r.preFilter; s; ) {
                    for (a in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                    u.push(o = [])),
                    n = !1,
                    (i = G.exec(s)) && (n = i.shift(),
                    o.push({
                        value: n,
                        type: i[0].replace(q, " ")
                    }),
                    s = s.slice(n.length)),
                    r.filter)
                        !(i = K[a].exec(s)) || c[a] && !(i = c[a](i)) || (n = i.shift(),
                        o.push({
                            value: n,
                            type: a,
                            matches: i
                        }),
                        s = s.slice(n.length));
                    if (!n)
                        break
                }
                return t ? s.length : s ? oe.error(e) : _(e, u).slice(0)
            }
            ,
            s = oe.compile = function(e, t) {
                var n, i = [], o = [], s = k[e + " "];
                if (!s) {
                    for (t || (t = a(e)),
                    n = t.length; n--; )
                        (s = we(t[n]))[b] ? i.push(s) : o.push(s);
                    (s = k(e, function(e, t) {
                        var n = t.length > 0
                          , i = e.length > 0
                          , o = function(o, a, s, u, l) {
                            var f, d, p, g = 0, m = "0", v = o && [], $ = [], y = c, b = o || i && r.find.TAG("*", l), w = x += null == y ? 1 : Math.random() || .1, E = b.length;
                            for (l && (c = a !== h && a); m !== E && null != (f = b[m]); m++) {
                                if (i && f) {
                                    for (d = 0; p = e[d++]; )
                                        if (p(f, a, s)) {
                                            u.push(f);
                                            break
                                        }
                                    l && (x = w)
                                }
                                n && ((f = !p && f) && g--,
                                o && v.push(f))
                            }
                            if (g += m,
                            n && m !== g) {
                                for (d = 0; p = t[d++]; )
                                    p(v, $, a, s);
                                if (o) {
                                    if (g > 0)
                                        for (; m--; )
                                            v[m] || $[m] || ($[m] = N.call(u));
                                    $ = ye($)
                                }
                                M.apply(u, $),
                                l && !o && $.length > 0 && g + t.length > 1 && oe.uniqueSort(u)
                            }
                            return l && (x = w,
                            c = y),
                            v
                        };
                        return n ? se(o) : o
                    }(o, i))).selector = e
                }
                return s
            }
            ,
            u = oe.select = function(e, t, i, o) {
                var u, c, l, f, d, h = "function" == typeof e && e, p = !o && a(e = h.selector || e);
                if (i = i || [],
                1 === p.length) {
                    if ((c = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = c[0]).type && n.getById && 9 === t.nodeType && g && r.relative[c[1].type]) {
                        if (!(t = (r.find.ID(l.matches[0].replace(ne, re), t) || [])[0]))
                            return i;
                        h && (t = t.parentNode),
                        e = e.slice(c.shift().value.length)
                    }
                    for (u = K.needsContext.test(e) ? 0 : c.length; u-- && (l = c[u],
                    !r.relative[f = l.type]); )
                        if ((d = r.find[f]) && (o = d(l.matches[0].replace(ne, re), ee.test(c[0].type) && pe(t.parentNode) || t))) {
                            if (c.splice(u, 1),
                            !(e = o.length && me(c)))
                                return M.apply(i, o),
                                i;
                            break
                        }
                }
                return (h || s(e, p))(o, t, !g, i, ee.test(e) && pe(t.parentNode) || t),
                i
            }
            ,
            n.sortStable = b.split("").sort(A).join("") === b,
            n.detectDuplicates = !!f,
            d(),
            n.sortDetached = ue(function(e) {
                return 1 & e.compareDocumentPosition(h.createElement("div"))
            }),
            ue(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }) || ce("type|href|height|width", function(e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            n.attributes && ue(function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }) || ce("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }),
            ue(function(e) {
                return null == e.getAttribute("disabled")
            }) || ce(R, function(e, t, n) {
                var r;
                if (!n)
                    return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }),
            oe
        }(n);
        p.find = b,
        p.expr = b.selectors,
        p.expr[":"] = p.expr.pseudos,
        p.unique = b.uniqueSort,
        p.text = b.getText,
        p.isXMLDoc = b.isXML,
        p.contains = b.contains;
        var w = p.expr.match.needsContext
          , x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
          , E = /^.[^:#\[\.,]*$/;
        function S(e, t, n) {
            if (p.isFunction(t))
                return p.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                });
            if (t.nodeType)
                return p.grep(e, function(e) {
                    return e === t !== n
                });
            if ("string" == typeof t) {
                if (E.test(t))
                    return p.filter(t, e, n);
                t = p.filter(t, e)
            }
            return p.grep(e, function(e) {
                return p.inArray(e, t) >= 0 !== n
            })
        }
        p.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? p.find.matchesSelector(r, e) ? [r] : [] : p.find.matches(e, p.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }
        ,
        p.fn.extend({
            find: function(e) {
                var t, n = [], r = this, i = r.length;
                if ("string" != typeof e)
                    return this.pushStack(p(e).filter(function() {
                        for (t = 0; t < i; t++)
                            if (p.contains(r[t], this))
                                return !0
                    }));
                for (t = 0; t < i; t++)
                    p.find(e, r[t], n);
                return (n = this.pushStack(i > 1 ? p.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e,
                n
            },
            filter: function(e) {
                return this.pushStack(S(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(S(this, e || [], !0))
            },
            is: function(e) {
                return !!S(this, "string" == typeof e && w.test(e) ? p(e) : e || [], !1).length
            }
        });
        var _, k = n.document, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (p.fn.init = function(e, t) {
            var n, r;
            if (!e)
                return this;
            if ("string" == typeof e) {
                if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : A.exec(e)) || !n[1] && t)
                    return !t || t.jquery ? (t || _).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof p ? t[0] : t,
                    p.merge(this, p.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : k, !0)),
                    x.test(n[1]) && p.isPlainObject(t))
                        for (n in t)
                            p.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if ((r = k.getElementById(n[2])) && r.parentNode) {
                    if (r.id !== n[2])
                        return _.find(e);
                    this.length = 1,
                    this[0] = r
                }
                return this.context = k,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e,
            this.length = 1,
            this) : p.isFunction(e) ? void 0 !== _.ready ? _.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector,
            this.context = e.context),
            p.makeArray(e, this))
        }
        ).prototype = p.fn,
        _ = p(k);
        var T = /^(?:parents|prev(?:Until|All))/
          , O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function C(e, t) {
            do {
                e = e[t]
            } while (e && 1 !== e.nodeType);return e
        }
        p.extend({
            dir: function(e, t, n) {
                for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !p(i).is(n)); )
                    1 === i.nodeType && r.push(i),
                    i = i[t];
                return r
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }),
        p.fn.extend({
            has: function(e) {
                var t, n = p(e, this), r = n.length;
                return this.filter(function() {
                    for (t = 0; t < r; t++)
                        if (p.contains(this, n[t]))
                            return !0
                })
            },
            closest: function(e, t) {
                for (var n, r = 0, i = this.length, o = [], a = w.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && p.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? p.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? p.inArray(this[0], p(e)) : p.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(p.unique(p.merge(this.get(), p(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        p.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return p.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return p.dir(e, "parentNode", n)
            },
            next: function(e) {
                return C(e, "nextSibling")
            },
            prev: function(e) {
                return C(e, "previousSibling")
            },
            nextAll: function(e) {
                return p.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return p.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return p.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return p.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return p.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return p.sibling(e.firstChild)
            },
            contents: function(e) {
                return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : p.merge([], e.childNodes)
            }
        }, function(e, t) {
            p.fn[e] = function(n, r) {
                var i = p.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = p.filter(r, i)),
                this.length > 1 && (O[e] || (i = p.unique(i)),
                T.test(e) && (i = i.reverse())),
                this.pushStack(i)
            }
        });
        var N, D = /\S+/g, M = {};
        function I() {
            k.addEventListener ? (k.removeEventListener("DOMContentLoaded", j, !1),
            n.removeEventListener("load", j, !1)) : (k.detachEvent("onreadystatechange", j),
            n.detachEvent("onload", j))
        }
        function j() {
            (k.addEventListener || "load" === event.type || "complete" === k.readyState) && (I(),
            p.ready())
        }
        p.Callbacks = function(e) {
            e = "string" == typeof e ? M[e] || function(e) {
                var t = M[e] = {};
                return p.each(e.match(D) || [], function(e, n) {
                    t[n] = !0
                }),
                t
            }(e) : p.extend({}, e);
            var t, n, r, i, o, a, s = [], u = !e.once && [], c = function(f) {
                for (n = e.memory && f,
                r = !0,
                o = a || 0,
                a = 0,
                i = s.length,
                t = !0; s && o < i; o++)
                    if (!1 === s[o].apply(f[0], f[1]) && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1,
                s && (u ? u.length && c(u.shift()) : n ? s = [] : l.disable())
            }, l = {
                add: function() {
                    if (s) {
                        var r = s.length;
                        !function t(n) {
                            p.each(n, function(n, r) {
                                var i = p.type(r);
                                "function" === i ? e.unique && l.has(r) || s.push(r) : r && r.length && "string" !== i && t(r)
                            })
                        }(arguments),
                        t ? i = s.length : n && (a = r,
                        c(n))
                    }
                    return this
                },
                remove: function() {
                    return s && p.each(arguments, function(e, n) {
                        for (var r; (r = p.inArray(n, s, r)) > -1; )
                            s.splice(r, 1),
                            t && (r <= i && i--,
                            r <= o && o--)
                    }),
                    this
                },
                has: function(e) {
                    return e ? p.inArray(e, s) > -1 : !(!s || !s.length)
                },
                empty: function() {
                    return s = [],
                    i = 0,
                    this
                },
                disable: function() {
                    return s = u = n = void 0,
                    this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return u = void 0,
                    n || l.disable(),
                    this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, n) {
                    return !s || r && !u || (n = [e, (n = n || []).slice ? n.slice() : n],
                    t ? u.push(n) : c(n)),
                    this
                },
                fire: function() {
                    return l.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!r
                }
            };
            return l
        }
        ,
        p.extend({
            Deferred: function(e) {
                var t = [["resolve", "done", p.Callbacks("once memory"), "resolved"], ["reject", "fail", p.Callbacks("once memory"), "rejected"], ["notify", "progress", p.Callbacks("memory")]]
                  , n = "pending"
                  , r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments),
                        this
                    },
                    then: function() {
                        var e = arguments;
                        return p.Deferred(function(n) {
                            p.each(t, function(t, o) {
                                var a = p.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && p.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? p.extend(e, r) : r
                    }
                }
                  , i = {};
                return r.pipe = r.then,
                p.each(t, function(e, o) {
                    var a = o[2]
                      , s = o[3];
                    r[o[1]] = a.add,
                    s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock),
                    i[o[0]] = function() {
                        return i[o[0] + "With"](this === i ? r : this, arguments),
                        this
                    }
                    ,
                    i[o[0] + "With"] = a.fireWith
                }),
                r.promise(i),
                e && e.call(i, i),
                i
            },
            when: function(e) {
                var t, n, r, i = 0, o = a.call(arguments), s = o.length, u = 1 !== s || e && p.isFunction(e.promise) ? s : 0, c = 1 === u ? e : p.Deferred(), l = function(e, n, r) {
                    return function(i) {
                        n[e] = this,
                        r[e] = arguments.length > 1 ? a.call(arguments) : i,
                        r === t ? c.notifyWith(n, r) : --u || c.resolveWith(n, r)
                    }
                };
                if (s > 1)
                    for (t = new Array(s),
                    n = new Array(s),
                    r = new Array(s); i < s; i++)
                        o[i] && p.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(c.reject).progress(l(i, n, t)) : --u;
                return u || c.resolveWith(r, o),
                c.promise()
            }
        }),
        p.fn.ready = function(e) {
            return p.ready.promise().done(e),
            this
        }
        ,
        p.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? p.readyWait++ : p.ready(!0)
            },
            ready: function(e) {
                if (!0 === e ? !--p.readyWait : !p.isReady) {
                    if (!k.body)
                        return setTimeout(p.ready);
                    p.isReady = !0,
                    !0 !== e && --p.readyWait > 0 || (N.resolveWith(k, [p]),
                    p.fn.triggerHandler && (p(k).triggerHandler("ready"),
                    p(k).off("ready")))
                }
            }
        }),
        p.ready.promise = function(e) {
            if (!N)
                if (N = p.Deferred(),
                "complete" === k.readyState)
                    setTimeout(p.ready);
                else if (k.addEventListener)
                    k.addEventListener("DOMContentLoaded", j, !1),
                    n.addEventListener("load", j, !1);
                else {
                    k.attachEvent("onreadystatechange", j),
                    n.attachEvent("onload", j);
                    var t = !1;
                    try {
                        t = null == n.frameElement && k.documentElement
                    } catch (e) {}
                    t && t.doScroll && function e() {
                        if (!p.isReady) {
                            try {
                                t.doScroll("left")
                            } catch (t) {
                                return setTimeout(e, 50)
                            }
                            I(),
                            p.ready()
                        }
                    }()
                }
            return N.promise(e)
        }
        ;
        var R, P = "undefined";
        for (R in p(h))
            break;
        h.ownLast = "0" !== R,
        h.inlineBlockNeedsLayout = !1,
        p(function() {
            var e, t, n, r;
            (n = k.getElementsByTagName("body")[0]) && n.style && (t = k.createElement("div"),
            (r = k.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            n.appendChild(r).appendChild(t),
            typeof t.style.zoom !== P && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
            h.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
            e && (n.style.zoom = 1)),
            n.removeChild(r))
        }),
        function() {
            var e = k.createElement("div");
            if (null == h.deleteExpando) {
                h.deleteExpando = !0;
                try {
                    delete e.test
                } catch (e) {
                    h.deleteExpando = !1
                }
            }
            e = null
        }(),
        p.acceptData = function(e) {
            var t = p.noData[(e.nodeName + " ").toLowerCase()]
              , n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        }
        ;
        var L = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , F = /([A-Z])/g;
        function H(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var r = "data-" + t.replace(F, "-$1").toLowerCase();
                if ("string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : L.test(n) ? p.parseJSON(n) : n)
                    } catch (e) {}
                    p.data(e, t, n)
                } else
                    n = void 0
            }
            return n
        }
        function U(e) {
            var t;
            for (t in e)
                if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t)
                    return !1;
            return !0
        }
        function V(e, t, n, r) {
            if (p.acceptData(e)) {
                var i, a, s = p.expando, u = e.nodeType, c = u ? p.cache : e, l = u ? e[s] : e[s] && s;
                if (l && c[l] && (r || c[l].data) || void 0 !== n || "string" != typeof t)
                    return l || (l = u ? e[s] = o.pop() || p.guid++ : s),
                    c[l] || (c[l] = u ? {} : {
                        toJSON: p.noop
                    }),
                    "object" != typeof t && "function" != typeof t || (r ? c[l] = p.extend(c[l], t) : c[l].data = p.extend(c[l].data, t)),
                    a = c[l],
                    r || (a.data || (a.data = {}),
                    a = a.data),
                    void 0 !== n && (a[p.camelCase(t)] = n),
                    "string" == typeof t ? null == (i = a[t]) && (i = a[p.camelCase(t)]) : i = a,
                    i
            }
        }
        function q(e, t, n) {
            if (p.acceptData(e)) {
                var r, i, o = e.nodeType, a = o ? p.cache : e, s = o ? e[p.expando] : p.expando;
                if (a[s]) {
                    if (t && (r = n ? a[s] : a[s].data)) {
                        i = (t = p.isArray(t) ? t.concat(p.map(t, p.camelCase)) : t in r ? [t] : (t = p.camelCase(t))in r ? [t] : t.split(" ")).length;
                        for (; i--; )
                            delete r[t[i]];
                        if (n ? !U(r) : !p.isEmptyObject(r))
                            return
                    }
                    (n || (delete a[s].data,
                    U(a[s]))) && (o ? p.cleanData([e], !0) : h.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }
        p.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return !!(e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando]) && !U(e)
            },
            data: function(e, t, n) {
                return V(e, t, n)
            },
            removeData: function(e, t) {
                return q(e, t)
            },
            _data: function(e, t, n) {
                return V(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return q(e, t, !0)
            }
        }),
        p.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = p.data(o),
                    1 === o.nodeType && !p._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--; )
                            a[n] && 0 === (r = a[n].name).indexOf("data-") && H(o, r = p.camelCase(r.slice(5)), i[r]);
                        p._data(o, "parsedAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    p.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    p.data(this, e, t)
                }) : o ? H(o, e, p.data(o, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    p.removeData(this, e)
                })
            }
        }),
        p.extend({
            queue: function(e, t, n) {
                var r;
                if (e)
                    return t = (t || "fx") + "queue",
                    r = p._data(e, t),
                    n && (!r || p.isArray(n) ? r = p._data(e, t, p.makeArray(n)) : r.push(n)),
                    r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = p.queue(e, t)
                  , r = n.length
                  , i = n.shift()
                  , o = p._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(),
                r--),
                i && ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                i.call(e, function() {
                    p.dequeue(e, t)
                }, o)),
                !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return p._data(e, n) || p._data(e, n, {
                    empty: p.Callbacks("once memory").add(function() {
                        p._removeData(e, t + "queue"),
                        p._removeData(e, n)
                    })
                })
            }
        }),
        p.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                e = "fx",
                n--),
                arguments.length < n ? p.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = p.queue(this, e, t);
                    p._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    p.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1, i = p.Deferred(), o = this, a = this.length, s = function() {
                    --r || i.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e,
                e = void 0),
                e = e || "fx"; a--; )
                    (n = p._data(o[a], e + "queueHooks")) && n.empty && (r++,
                    n.empty.add(s));
                return s(),
                i.promise(t)
            }
        });
        var B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , G = ["Top", "Right", "Bottom", "Left"]
          , W = function(e, t) {
            return e = t || e,
            "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
        }
          , z = p.access = function(e, t, n, r, i, o, a) {
            var s = 0
              , u = e.length
              , c = null == n;
            if ("object" === p.type(n))
                for (s in i = !0,
                n)
                    p.access(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0,
            p.isFunction(r) || (a = !0),
            c && (a ? (t.call(e, r),
            t = null) : (c = t,
            t = function(e, t, n) {
                return c.call(p(e), n)
            }
            )),
            t))
                for (; s < u; s++)
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
        }
          , Y = /^(?:checkbox|radio)$/i;
        !function() {
            var e = k.createElement("input")
              , t = k.createElement("div")
              , n = k.createDocumentFragment();
            if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            h.leadingWhitespace = 3 === t.firstChild.nodeType,
            h.tbody = !t.getElementsByTagName("tbody").length,
            h.htmlSerialize = !!t.getElementsByTagName("link").length,
            h.html5Clone = "<:nav></:nav>" !== k.createElement("nav").cloneNode(!0).outerHTML,
            e.type = "checkbox",
            e.checked = !0,
            n.appendChild(e),
            h.appendChecked = e.checked,
            t.innerHTML = "<textarea>x</textarea>",
            h.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
            n.appendChild(t),
            t.innerHTML = "<input type='radio' checked='checked' name='t'/>",
            h.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
            h.noCloneEvent = !0,
            t.attachEvent && (t.attachEvent("onclick", function() {
                h.noCloneEvent = !1
            }),
            t.cloneNode(!0).click()),
            null == h.deleteExpando) {
                h.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    h.deleteExpando = !1
                }
            }
        }(),
        function() {
            var e, t, r = k.createElement("div");
            for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                t = "on" + e,
                (h[e + "Bubbles"] = t in n) || (r.setAttribute(t, "t"),
                h[e + "Bubbles"] = !1 === r.attributes[t].expando);
            r = null
        }();
        var K = /^(?:input|select|textarea)$/i
          , J = /^key/
          , Z = /^(?:mouse|pointer|contextmenu)|click/
          , X = /^(?:focusinfocus|focusoutblur)$/
          , Q = /^([^.]*)(?:\.(.+)|)$/;
        function ee() {
            return !0
        }
        function te() {
            return !1
        }
        function ne() {
            try {
                return k.activeElement
            } catch (e) {}
        }
        function re(e) {
            var t = ie.split("|")
              , n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length; )
                    n.createElement(t.pop());
            return n
        }
        p.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var o, a, s, u, c, l, f, d, h, g, m, v = p._data(e);
                if (v) {
                    for (n.handler && (n = (u = n).handler,
                    i = u.selector),
                    n.guid || (n.guid = p.guid++),
                    (a = v.events) || (a = v.events = {}),
                    (l = v.handle) || ((l = v.handle = function(e) {
                        return typeof p === P || e && p.event.triggered === e.type ? void 0 : p.event.dispatch.apply(l.elem, arguments)
                    }
                    ).elem = e),
                    s = (t = (t || "").match(D) || [""]).length; s--; )
                        h = m = (o = Q.exec(t[s]) || [])[1],
                        g = (o[2] || "").split(".").sort(),
                        h && (c = p.event.special[h] || {},
                        h = (i ? c.delegateType : c.bindType) || h,
                        c = p.event.special[h] || {},
                        f = p.extend({
                            type: h,
                            origType: m,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && p.expr.match.needsContext.test(i),
                            namespace: g.join(".")
                        }, u),
                        (d = a[h]) || ((d = a[h] = []).delegateCount = 0,
                        c.setup && !1 !== c.setup.call(e, r, g, l) || (e.addEventListener ? e.addEventListener(h, l, !1) : e.attachEvent && e.attachEvent("on" + h, l))),
                        c.add && (c.add.call(e, f),
                        f.handler.guid || (f.handler.guid = n.guid)),
                        i ? d.splice(d.delegateCount++, 0, f) : d.push(f),
                        p.event.global[h] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, c, l, f, d, h, g, m, v = p.hasData(e) && p._data(e);
                if (v && (l = v.events)) {
                    for (c = (t = (t || "").match(D) || [""]).length; c--; )
                        if (h = m = (s = Q.exec(t[c]) || [])[1],
                        g = (s[2] || "").split(".").sort(),
                        h) {
                            for (f = p.event.special[h] || {},
                            d = l[h = (r ? f.delegateType : f.bindType) || h] || [],
                            s = s[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            u = o = d.length; o--; )
                                a = d[o],
                                !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1),
                                a.selector && d.delegateCount--,
                                f.remove && f.remove.call(e, a));
                            u && !d.length && (f.teardown && !1 !== f.teardown.call(e, g, v.handle) || p.removeEvent(e, h, v.handle),
                            delete l[h])
                        } else
                            for (h in l)
                                p.event.remove(e, h + t[c], n, r, !0);
                    p.isEmptyObject(l) && (delete v.handle,
                    p._removeData(e, "events"))
                }
            },
            trigger: function(e, t, r, i) {
                var o, a, s, u, c, l, f, h = [r || k], g = d.call(e, "type") ? e.type : e, m = d.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = l = r = r || k,
                3 !== r.nodeType && 8 !== r.nodeType && !X.test(g + p.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."),
                g = m.shift(),
                m.sort()),
                a = g.indexOf(":") < 0 && "on" + g,
                (e = e[p.expando] ? e : new p.Event(g,"object" == typeof e && e)).isTrigger = i ? 2 : 3,
                e.namespace = m.join("."),
                e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                e.result = void 0,
                e.target || (e.target = r),
                t = null == t ? [e] : p.makeArray(t, [e]),
                c = p.event.special[g] || {},
                i || !c.trigger || !1 !== c.trigger.apply(r, t))) {
                    if (!i && !c.noBubble && !p.isWindow(r)) {
                        for (u = c.delegateType || g,
                        X.test(u + g) || (s = s.parentNode); s; s = s.parentNode)
                            h.push(s),
                            l = s;
                        l === (r.ownerDocument || k) && h.push(l.defaultView || l.parentWindow || n)
                    }
                    for (f = 0; (s = h[f++]) && !e.isPropagationStopped(); )
                        e.type = f > 1 ? u : c.bindType || g,
                        (o = (p._data(s, "events") || {})[e.type] && p._data(s, "handle")) && o.apply(s, t),
                        (o = a && s[a]) && o.apply && p.acceptData(s) && (e.result = o.apply(s, t),
                        !1 === e.result && e.preventDefault());
                    if (e.type = g,
                    !i && !e.isDefaultPrevented() && (!c._default || !1 === c._default.apply(h.pop(), t)) && p.acceptData(r) && a && r[g] && !p.isWindow(r)) {
                        (l = r[a]) && (r[a] = null),
                        p.event.triggered = g;
                        try {
                            r[g]()
                        } catch (e) {}
                        p.event.triggered = void 0,
                        l && (r[a] = l)
                    }
                    return e.result
                }
            },
            dispatch: function(e) {
                e = p.event.fix(e);
                var t, n, r, i, o, s, u = a.call(arguments), c = (p._data(this, "events") || {})[e.type] || [], l = p.event.special[e.type] || {};
                if (u[0] = e,
                e.delegateTarget = this,
                !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                    for (s = p.event.handlers.call(this, e, c),
                    t = 0; (i = s[t++]) && !e.isPropagationStopped(); )
                        for (e.currentTarget = i.elem,
                        o = 0; (r = i.handlers[o++]) && !e.isImmediatePropagationStopped(); )
                            e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r,
                            e.data = r.data,
                            void 0 !== (n = ((p.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, u)) && !1 === (e.result = n) && (e.preventDefault(),
                            e.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, e),
                    e.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
                if (s && u.nodeType && (!e.button || "click" !== e.type))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                            for (i = [],
                            o = 0; o < s; o++)
                                void 0 === i[n = (r = t[o]).selector + " "] && (i[n] = r.needsContext ? p(n, this).index(u) >= 0 : p.find(n, this, null, [u]).length),
                                i[n] && i.push(r);
                            i.length && a.push({
                                elem: u,
                                handlers: i
                            })
                        }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }),
                a
            },
            fix: function(e) {
                if (e[p.expando])
                    return e;
                var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = Z.test(i) ? this.mouseHooks : J.test(i) ? this.keyHooks : {}),
                r = a.props ? this.props.concat(a.props) : this.props,
                e = new p.Event(o),
                t = r.length; t--; )
                    e[n = r[t]] = o[n];
                return e.target || (e.target = o.srcElement || k),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                e.metaKey = !!e.metaKey,
                a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, r, i, o = t.button, a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = (r = e.target.ownerDocument || k).documentElement,
                    n = r.body,
                    e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0),
                    e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                    !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a),
                    e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                    e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== ne() && this.focus)
                            try {
                                return this.focus(),
                                !1
                            } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === ne() && this.blur)
                            return this.blur(),
                            !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (p.nodeName(this, "input") && "checkbox" === this.type && this.click)
                            return this.click(),
                            !1
                    },
                    _default: function(e) {
                        return p.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = p.extend(new p.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? p.event.trigger(i, null, t) : p.event.dispatch.call(t, i),
                i.isDefaultPrevented() && n.preventDefault()
            }
        },
        p.removeEvent = k.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }
        : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] === P && (e[r] = null),
            e.detachEvent(r, n))
        }
        ,
        p.Event = function(e, t) {
            if (!(this instanceof p.Event))
                return new p.Event(e,t);
            e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ee : te) : this.type = e,
            t && p.extend(this, t),
            this.timeStamp = e && e.timeStamp || p.now(),
            this[p.expando] = !0
        }
        ,
        p.Event.prototype = {
            isDefaultPrevented: te,
            isPropagationStopped: te,
            isImmediatePropagationStopped: te,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = ee,
                e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = ee,
                e && (e.stopPropagation && e.stopPropagation(),
                e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = ee,
                e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        p.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            p.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = e.relatedTarget, i = e.handleObj;
                    return r && (r === this || p.contains(this, r)) || (e.type = i.origType,
                    n = i.handler.apply(this, arguments),
                    e.type = t),
                    n
                }
            }
        }),
        h.submitBubbles || (p.event.special.submit = {
            setup: function() {
                if (p.nodeName(this, "form"))
                    return !1;
                p.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target
                      , n = p.nodeName(t, "input") || p.nodeName(t, "button") ? t.form : void 0;
                    n && !p._data(n, "submitBubbles") && (p.event.add(n, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }),
                    p._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble,
                this.parentNode && !e.isTrigger && p.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                if (p.nodeName(this, "form"))
                    return !1;
                p.event.remove(this, "._submit")
            }
        }),
        h.changeBubbles || (p.event.special.change = {
            setup: function() {
                if (K.test(this.nodeName))
                    return "checkbox" !== this.type && "radio" !== this.type || (p.event.add(this, "propertychange._change", function(e) {
                        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                    }),
                    p.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1),
                        p.event.simulate("change", this, e, !0)
                    })),
                    !1;
                p.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    K.test(t.nodeName) && !p._data(t, "changeBubbles") && (p.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || p.event.simulate("change", this.parentNode, e, !0)
                    }),
                    p._data(t, "changeBubbles", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
                    return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return p.event.remove(this, "._change"),
                !K.test(this.nodeName)
            }
        }),
        h.focusinBubbles || p.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                p.event.simulate(t, e.target, p.event.fix(e), !0)
            };
            p.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this
                      , i = p._data(r, t);
                    i || r.addEventListener(e, n, !0),
                    p._data(r, t, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this
                      , i = p._data(r, t) - 1;
                    i ? p._data(r, t, i) : (r.removeEventListener(e, n, !0),
                    p._removeData(r, t))
                }
            }
        }),
        p.fn.extend({
            on: function(e, t, n, r, i) {
                var o, a;
                if ("object" == typeof e) {
                    for (o in "string" != typeof t && (n = n || t,
                    t = void 0),
                    e)
                        this.on(o, t, n, e[o], i);
                    return this
                }
                if (null == n && null == r ? (r = t,
                n = t = void 0) : null == r && ("string" == typeof t ? (r = n,
                n = void 0) : (r = n,
                n = t,
                t = void 0)),
                !1 === r)
                    r = te;
                else if (!r)
                    return this;
                return 1 === i && (a = r,
                (r = function(e) {
                    return p().off(e),
                    a.apply(this, arguments)
                }
                ).guid = a.guid || (a.guid = p.guid++)),
                this.each(function() {
                    p.event.add(this, e, r, n, t)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                    p(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                    this;
                if ("object" == typeof e) {
                    for (i in e)
                        this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = te),
                this.each(function() {
                    p.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    p.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return p.event.trigger(e, t, n, !0)
            }
        });
        var ie = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
          , oe = / jQuery\d+="(?:null|\d+)"/g
          , ae = new RegExp("<(?:" + ie + ")[\\s/>]","i")
          , se = /^\s+/
          , ue = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
          , ce = /<([\w:]+)/
          , le = /<tbody/i
          , fe = /<|&#?\w+;/
          , de = /<(?:script|style|link)/i
          , he = /checked\s*(?:[^=]|=\s*.checked.)/i
          , pe = /^$|\/(?:java|ecma)script/i
          , ge = /^true\/(.*)/
          , me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
          , ve = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: h.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }
          , $e = re(k).appendChild(k.createElement("div"));
        function ye(e, t) {
            var n, r, i = 0, o = typeof e.getElementsByTagName !== P ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== P ? e.querySelectorAll(t || "*") : void 0;
            if (!o)
                for (o = [],
                n = e.childNodes || e; null != (r = n[i]); i++)
                    !t || p.nodeName(r, t) ? o.push(r) : p.merge(o, ye(r, t));
            return void 0 === t || t && p.nodeName(e, t) ? p.merge([e], o) : o
        }
        function be(e) {
            Y.test(e.type) && (e.defaultChecked = e.checked)
        }
        function we(e, t) {
            return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }
        function xe(e) {
            return e.type = (null !== p.find.attr(e, "type")) + "/" + e.type,
            e
        }
        function Ee(e) {
            var t = ge.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"),
            e
        }
        function Se(e, t) {
            for (var n, r = 0; null != (n = e[r]); r++)
                p._data(n, "globalEval", !t || p._data(t[r], "globalEval"))
        }
        function _e(e, t) {
            if (1 === t.nodeType && p.hasData(e)) {
                var n, r, i, o = p._data(e), a = p._data(t, o), s = o.events;
                if (s)
                    for (n in delete a.handle,
                    a.events = {},
                    s)
                        for (r = 0,
                        i = s[n].length; r < i; r++)
                            p.event.add(t, n, s[n][r]);
                a.data && (a.data = p.extend({}, a.data))
            }
        }
        function ke(e, t) {
            var n, r, i;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(),
                !h.noCloneEvent && t[p.expando]) {
                    for (r in (i = p._data(t)).events)
                        p.removeEvent(t, r, i.handle);
                    t.removeAttribute(p.expando)
                }
                "script" === n && t.text !== e.text ? (xe(t).text = e.text,
                Ee(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
                h.html5Clone && e.innerHTML && !p.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Y.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
                t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }
        ve.optgroup = ve.option,
        ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead,
        ve.th = ve.td,
        p.extend({
            clone: function(e, t, n) {
                var r, i, o, a, s, u = p.contains(e.ownerDocument, e);
                if (h.html5Clone || p.isXMLDoc(e) || !ae.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : ($e.innerHTML = e.outerHTML,
                $e.removeChild(o = $e.firstChild)),
                !(h.noCloneEvent && h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e)))
                    for (r = ye(o),
                    s = ye(e),
                    a = 0; null != (i = s[a]); ++a)
                        r[a] && ke(i, r[a]);
                if (t)
                    if (n)
                        for (s = s || ye(e),
                        r = r || ye(o),
                        a = 0; null != (i = s[a]); a++)
                            _e(i, r[a]);
                    else
                        _e(e, o);
                return (r = ye(o, "script")).length > 0 && Se(r, !u && ye(e, "script")),
                r = s = i = null,
                o
            },
            buildFragment: function(e, t, n, r) {
                for (var i, o, a, s, u, c, l, f = e.length, d = re(t), g = [], m = 0; m < f; m++)
                    if ((o = e[m]) || 0 === o)
                        if ("object" === p.type(o))
                            p.merge(g, o.nodeType ? [o] : o);
                        else if (fe.test(o)) {
                            for (s = s || d.appendChild(t.createElement("div")),
                            u = (ce.exec(o) || ["", ""])[1].toLowerCase(),
                            l = ve[u] || ve._default,
                            s.innerHTML = l[1] + o.replace(ue, "<$1></$2>") + l[2],
                            i = l[0]; i--; )
                                s = s.lastChild;
                            if (!h.leadingWhitespace && se.test(o) && g.push(t.createTextNode(se.exec(o)[0])),
                            !h.tbody)
                                for (i = (o = "table" !== u || le.test(o) ? "<table>" !== l[1] || le.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; i--; )
                                    p.nodeName(c = o.childNodes[i], "tbody") && !c.childNodes.length && o.removeChild(c);
                            for (p.merge(g, s.childNodes),
                            s.textContent = ""; s.firstChild; )
                                s.removeChild(s.firstChild);
                            s = d.lastChild
                        } else
                            g.push(t.createTextNode(o));
                for (s && d.removeChild(s),
                h.appendChecked || p.grep(ye(g, "input"), be),
                m = 0; o = g[m++]; )
                    if ((!r || -1 === p.inArray(o, r)) && (a = p.contains(o.ownerDocument, o),
                    s = ye(d.appendChild(o), "script"),
                    a && Se(s),
                    n))
                        for (i = 0; o = s[i++]; )
                            pe.test(o.type || "") && n.push(o);
                return s = null,
                d
            },
            cleanData: function(e, t) {
                for (var n, r, i, a, s = 0, u = p.expando, c = p.cache, l = h.deleteExpando, f = p.event.special; null != (n = e[s]); s++)
                    if ((t || p.acceptData(n)) && (a = (i = n[u]) && c[i])) {
                        if (a.events)
                            for (r in a.events)
                                f[r] ? p.event.remove(n, r) : p.removeEvent(n, r, a.handle);
                        c[i] && (delete c[i],
                        l ? delete n[u] : typeof n.removeAttribute !== P ? n.removeAttribute(u) : n[u] = null,
                        o.push(i))
                    }
            }
        }),
        p.fn.extend({
            text: function(e) {
                return z(this, function(e) {
                    return void 0 === e ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || k).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || we(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = we(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, r = e ? p.filter(e, this) : this, i = 0; null != (n = r[i]); i++)
                    t || 1 !== n.nodeType || p.cleanData(ye(n)),
                    n.parentNode && (t && p.contains(n.ownerDocument, n) && Se(ye(n, "script")),
                    n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && p.cleanData(ye(e, !1)); e.firstChild; )
                        e.removeChild(e.firstChild);
                    e.options && p.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e : t,
                this.map(function() {
                    return p.clone(this, e, t)
                })
            },
            html: function(e) {
                return z(this, function(e) {
                    var t = this[0] || {}
                      , n = 0
                      , r = this.length;
                    if (void 0 === e)
                        return 1 === t.nodeType ? t.innerHTML.replace(oe, "") : void 0;
                    if ("string" == typeof e && !de.test(e) && (h.htmlSerialize || !ae.test(e)) && (h.leadingWhitespace || !se.test(e)) && !ve[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(ue, "<$1></$2>");
                        try {
                            for (; n < r; n++)
                                1 === (t = this[n] || {}).nodeType && (p.cleanData(ye(t, !1)),
                                t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode,
                    p.cleanData(ye(this)),
                    e && e.replaceChild(t, this)
                }),
                e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = s.apply([], e);
                var n, r, i, o, a, u, c = 0, l = this.length, f = this, d = l - 1, g = e[0], m = p.isFunction(g);
                if (m || l > 1 && "string" == typeof g && !h.checkClone && he.test(g))
                    return this.each(function(n) {
                        var r = f.eq(n);
                        m && (e[0] = g.call(this, n, r.html())),
                        r.domManip(e, t)
                    });
                if (l && (n = (u = p.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild,
                1 === u.childNodes.length && (u = n),
                n)) {
                    for (i = (o = p.map(ye(u, "script"), xe)).length; c < l; c++)
                        r = u,
                        c !== d && (r = p.clone(r, !0, !0),
                        i && p.merge(o, ye(r, "script"))),
                        t.call(this[c], r, c);
                    if (i)
                        for (a = o[o.length - 1].ownerDocument,
                        p.map(o, Ee),
                        c = 0; c < i; c++)
                            r = o[c],
                            pe.test(r.type || "") && !p._data(r, "globalEval") && p.contains(a, r) && (r.src ? p._evalUrl && p._evalUrl(r.src) : p.globalEval((r.text || r.textContent || r.innerHTML || "").replace(me, "")));
                    u = n = null
                }
                return this
            }
        }),
        p.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            p.fn[e] = function(e) {
                for (var n, r = 0, i = [], o = p(e), a = o.length - 1; r <= a; r++)
                    n = r === a ? this : this.clone(!0),
                    p(o[r])[t](n),
                    u.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Ae, Te, Oe = {};
        function Ce(e, t) {
            var r, i = p(t.createElement(e)).appendTo(t.body), o = n.getDefaultComputedStyle && (r = n.getDefaultComputedStyle(i[0])) ? r.display : p.css(i[0], "display");
            return i.detach(),
            o
        }
        function Ne(e) {
            var t = k
              , n = Oe[e];
            return n || ("none" !== (n = Ce(e, t)) && n || ((t = ((Ae = (Ae || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ae[0].contentDocument).document).write(),
            t.close(),
            n = Ce(e, t),
            Ae.detach()),
            Oe[e] = n),
            n
        }
        h.shrinkWrapBlocks = function() {
            return null != Te ? Te : (Te = !1,
            (t = k.getElementsByTagName("body")[0]) && t.style ? (e = k.createElement("div"),
            (n = k.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            t.appendChild(n).appendChild(e),
            typeof e.style.zoom !== P && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            e.appendChild(k.createElement("div")).style.width = "5px",
            Te = 3 !== e.offsetWidth),
            t.removeChild(n),
            Te) : void 0);
            var e, t, n
        }
        ;
        var De, Me, Ie = /^margin/, je = new RegExp("^(" + B + ")(?!px)[a-z%]+$","i"), Re = /^(top|right|bottom|left)$/;
        function Pe(e, t) {
            return {
                get: function() {
                    var n = e();
                    if (null != n) {
                        if (!n)
                            return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }
        }
        n.getComputedStyle ? (De = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : n.getComputedStyle(e, null)
        }
        ,
        Me = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return a = (n = n || De(e)) ? n.getPropertyValue(t) || n[t] : void 0,
            n && ("" !== a || p.contains(e.ownerDocument, e) || (a = p.style(e, t)),
            je.test(a) && Ie.test(t) && (r = s.width,
            i = s.minWidth,
            o = s.maxWidth,
            s.minWidth = s.maxWidth = s.width = a,
            a = n.width,
            s.width = r,
            s.minWidth = i,
            s.maxWidth = o)),
            void 0 === a ? a : a + ""
        }
        ) : k.documentElement.currentStyle && (De = function(e) {
            return e.currentStyle
        }
        ,
        Me = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return null == (a = (n = n || De(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]),
            je.test(a) && !Re.test(t) && (r = s.left,
            (o = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left),
            s.left = "fontSize" === t ? "1em" : a,
            a = s.pixelLeft + "px",
            s.left = r,
            o && (i.left = o)),
            void 0 === a ? a : a + "" || "auto"
        }
        ),
        function() {
            var e, t, r, i, o, a, s;
            function u() {
                var e, t, r, u;
                (t = k.getElementsByTagName("body")[0]) && t.style && (e = k.createElement("div"),
                (r = k.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                t.appendChild(r).appendChild(e),
                e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                i = o = !1,
                s = !0,
                n.getComputedStyle && (i = "1%" !== (n.getComputedStyle(e, null) || {}).top,
                o = "4px" === (n.getComputedStyle(e, null) || {
                    width: "4px"
                }).width,
                (u = e.appendChild(k.createElement("div"))).style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                u.style.marginRight = u.style.width = "0",
                e.style.width = "1px",
                s = !parseFloat((n.getComputedStyle(u, null) || {}).marginRight),
                e.removeChild(u)),
                e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                (u = e.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                (a = 0 === u[0].offsetHeight) && (u[0].style.display = "",
                u[1].style.display = "none",
                a = 0 === u[0].offsetHeight),
                t.removeChild(r))
            }
            (e = k.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            (t = (r = e.getElementsByTagName("a")[0]) && r.style) && (t.cssText = "float:left;opacity:.5",
            h.opacity = "0.5" === t.opacity,
            h.cssFloat = !!t.cssFloat,
            e.style.backgroundClip = "content-box",
            e.cloneNode(!0).style.backgroundClip = "",
            h.clearCloneStyle = "content-box" === e.style.backgroundClip,
            h.boxSizing = "" === t.boxSizing || "" === t.MozBoxSizing || "" === t.WebkitBoxSizing,
            p.extend(h, {
                reliableHiddenOffsets: function() {
                    return null == a && u(),
                    a
                },
                boxSizingReliable: function() {
                    return null == o && u(),
                    o
                },
                pixelPosition: function() {
                    return null == i && u(),
                    i
                },
                reliableMarginRight: function() {
                    return null == s && u(),
                    s
                }
            }))
        }(),
        p.swap = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t)
                a[o] = e.style[o],
                e.style[o] = t[o];
            for (o in i = n.apply(e, r || []),
            t)
                e.style[o] = a[o];
            return i
        }
        ;
        var Le = /alpha\([^)]*\)/i
          , Fe = /opacity\s*=\s*([^)]*)/
          , He = /^(none|table(?!-c[ea]).+)/
          , Ue = new RegExp("^(" + B + ")(.*)$","i")
          , Ve = new RegExp("^([+-])=(" + B + ")","i")
          , qe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , Be = {
            letterSpacing: "0",
            fontWeight: "400"
        }
          , Ge = ["Webkit", "O", "Moz", "ms"];
        function We(e, t) {
            if (t in e)
                return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Ge.length; i--; )
                if ((t = Ge[i] + n)in e)
                    return t;
            return r
        }
        function ze(e, t) {
            for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)
                (r = e[a]).style && (o[a] = p._data(r, "olddisplay"),
                n = r.style.display,
                t ? (o[a] || "none" !== n || (r.style.display = ""),
                "" === r.style.display && W(r) && (o[a] = p._data(r, "olddisplay", Ne(r.nodeName)))) : (i = W(r),
                (n && "none" !== n || !i) && p._data(r, "olddisplay", i ? n : p.css(r, "display"))));
            for (a = 0; a < s; a++)
                (r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
            return e
        }
        function Ye(e, t, n) {
            var r = Ue.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }
        function Ke(e, t, n, r, i) {
            for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)
                "margin" === n && (a += p.css(e, n + G[o], !0, i)),
                r ? ("content" === n && (a -= p.css(e, "padding" + G[o], !0, i)),
                "margin" !== n && (a -= p.css(e, "border" + G[o] + "Width", !0, i))) : (a += p.css(e, "padding" + G[o], !0, i),
                "padding" !== n && (a += p.css(e, "border" + G[o] + "Width", !0, i)));
            return a
        }
        function Je(e, t, n) {
            var r = !0
              , i = "width" === t ? e.offsetWidth : e.offsetHeight
              , o = De(e)
              , a = h.boxSizing && "border-box" === p.css(e, "boxSizing", !1, o);
            if (i <= 0 || null == i) {
                if (((i = Me(e, t, o)) < 0 || null == i) && (i = e.style[t]),
                je.test(i))
                    return i;
                r = a && (h.boxSizingReliable() || i === e.style[t]),
                i = parseFloat(i) || 0
            }
            return i + Ke(e, t, n || (a ? "border" : "content"), r, o) + "px"
        }
        function Ze(e, t, n, r, i) {
            return new Ze.prototype.init(e,t,n,r,i)
        }
        p.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Me(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: h.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = p.camelCase(t), u = e.style;
                    if (t = p.cssProps[s] || (p.cssProps[s] = We(u, s)),
                    a = p.cssHooks[t] || p.cssHooks[s],
                    void 0 === n)
                        return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                    if ("string" === (o = typeof n) && (i = Ve.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(p.css(e, t)),
                    o = "number"),
                    null != n && n == n && ("number" !== o || p.cssNumber[s] || (n += "px"),
                    h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                    !(a && "set"in a && void 0 === (n = a.set(e, n, r)))))
                        try {
                            u[t] = n
                        } catch (e) {}
                }
            },
            css: function(e, t, n, r) {
                var i, o, a, s = p.camelCase(t);
                return t = p.cssProps[s] || (p.cssProps[s] = We(e.style, s)),
                (a = p.cssHooks[t] || p.cssHooks[s]) && "get"in a && (o = a.get(e, !0, n)),
                void 0 === o && (o = Me(e, t, r)),
                "normal" === o && t in Be && (o = Be[t]),
                "" === n || n ? (i = parseFloat(o),
                !0 === n || p.isNumeric(i) ? i || 0 : o) : o
            }
        }),
        p.each(["height", "width"], function(e, t) {
            p.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n)
                        return He.test(p.css(e, "display")) && 0 === e.offsetWidth ? p.swap(e, qe, function() {
                            return Je(e, t, r)
                        }) : Je(e, t, r)
                },
                set: function(e, n, r) {
                    var i = r && De(e);
                    return Ye(0, n, r ? Ke(e, t, r, h.boxSizing && "border-box" === p.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }),
        h.opacity || (p.cssHooks.opacity = {
            get: function(e, t) {
                return Fe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style
                  , r = e.currentStyle
                  , i = p.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
                  , o = r && r.filter || n.filter || "";
                n.zoom = 1,
                (t >= 1 || "" === t) && "" === p.trim(o.replace(Le, "")) && n.removeAttribute && (n.removeAttribute("filter"),
                "" === t || r && !r.filter) || (n.filter = Le.test(o) ? o.replace(Le, i) : o + " " + i)
            }
        }),
        p.cssHooks.marginRight = Pe(h.reliableMarginRight, function(e, t) {
            if (t)
                return p.swap(e, {
                    display: "inline-block"
                }, Me, [e, "marginRight"])
        }),
        p.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            p.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                        i[e + G[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            },
            Ie.test(e) || (p.cssHooks[e + t].set = Ye)
        }),
        p.fn.extend({
            css: function(e, t) {
                return z(this, function(e, t, n) {
                    var r, i, o = {}, a = 0;
                    if (p.isArray(t)) {
                        for (r = De(e),
                        i = t.length; a < i; a++)
                            o[t[a]] = p.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? p.style(e, t, n) : p.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return ze(this, !0)
            },
            hide: function() {
                return ze(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    W(this) ? p(this).show() : p(this).hide()
                })
            }
        }),
        p.Tween = Ze,
        Ze.prototype = {
            constructor: Ze,
            init: function(e, t, n, r, i, o) {
                this.elem = e,
                this.prop = n,
                this.easing = i || "swing",
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = r,
                this.unit = o || (p.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = Ze.propHooks[this.prop];
                return e && e.get ? e.get(this) : Ze.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = Ze.propHooks[this.prop];
                return this.options.duration ? this.pos = t = p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : Ze.propHooks._default.set(this),
                this
            }
        },
        Ze.prototype.init.prototype = Ze.prototype,
        Ze.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = p.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
                },
                set: function(e) {
                    p.fx.step[e.prop] ? p.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[p.cssProps[e.prop]] || p.cssHooks[e.prop]) ? p.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        },
        Ze.propHooks.scrollTop = Ze.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        p.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        },
        p.fx = Ze.prototype.init,
        p.fx.step = {};
        var Xe, Qe, et, tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = new RegExp("^(?:([+-])=|)(" + B + ")([a-z%]*)$","i"), st = /queueHooks$/, ut = [function(e, t, n) {
            var r, i, o, a, s, u, c, l = this, f = {}, d = e.style, g = e.nodeType && W(e), m = p._data(e, "fxshow");
            n.queue || (null == (s = p._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            u = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || u()
            }
            ),
            s.unqueued++,
            l.always(function() {
                l.always(function() {
                    s.unqueued--,
                    p.queue(e, "fx").length || s.empty.fire()
                })
            }));
            1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
            c = p.css(e, "display"),
            "inline" === ("none" === c ? p._data(e, "olddisplay") || Ne(e.nodeName) : c) && "none" === p.css(e, "float") && (h.inlineBlockNeedsLayout && "inline" !== Ne(e.nodeName) ? d.zoom = 1 : d.display = "inline-block"));
            n.overflow && (d.overflow = "hidden",
            h.shrinkWrapBlocks() || l.always(function() {
                d.overflow = n.overflow[0],
                d.overflowX = n.overflow[1],
                d.overflowY = n.overflow[2]
            }));
            for (r in t)
                if (i = t[r],
                ot.exec(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r])
                            continue;
                        g = !0
                    }
                    f[r] = m && m[r] || p.style(e, r)
                } else
                    c = void 0;
            if (p.isEmptyObject(f))
                "inline" === ("none" === c ? Ne(e.nodeName) : c) && (d.display = c);
            else
                for (r in m ? "hidden"in m && (g = m.hidden) : m = p._data(e, "fxshow", {}),
                o && (m.hidden = !g),
                g ? p(e).show() : l.done(function() {
                    p(e).hide()
                }),
                l.done(function() {
                    var t;
                    for (t in p._removeData(e, "fxshow"),
                    f)
                        p.style(e, t, f[t])
                }),
                f)
                    a = dt(g ? m[r] : 0, r, l),
                    r in m || (m[r] = a.start,
                    g && (a.end = a.start,
                    a.start = "width" === r || "height" === r ? 1 : 0))
        }
        ], ct = {
            "*": [function(e, t) {
                var n = this.createTween(e, t)
                  , r = n.cur()
                  , i = at.exec(t)
                  , o = i && i[3] || (p.cssNumber[e] ? "" : "px")
                  , a = (p.cssNumber[e] || "px" !== o && +r) && at.exec(p.css(n.elem, e))
                  , s = 1
                  , u = 20;
                if (a && a[3] !== o) {
                    o = o || a[3],
                    i = i || [],
                    a = +r || 1;
                    do {
                        a /= s = s || ".5",
                        p.style(n.elem, e, a + o)
                    } while (s !== (s = n.cur() / r) && 1 !== s && --u)
                }
                return i && (a = n.start = +a || +r || 0,
                n.unit = o,
                n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]),
                n
            }
            ]
        };
        function lt() {
            return setTimeout(function() {
                Xe = void 0
            }),
            Xe = p.now()
        }
        function ft(e, t) {
            var n, r = {
                height: e
            }, i = 0;
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
                r["margin" + (n = G[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e),
            r
        }
        function dt(e, t, n) {
            for (var r, i = (ct[t] || []).concat(ct["*"]), o = 0, a = i.length; o < a; o++)
                if (r = i[o].call(n, t, e))
                    return r
        }
        function ht(e, t, n) {
            var r, i, o = 0, a = ut.length, s = p.Deferred().always(function() {
                delete u.elem
            }), u = function() {
                if (i)
                    return !1;
                for (var t = Xe || lt(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++)
                    c.tweens[o].run(r);
                return s.notifyWith(e, [c, r, n]),
                r < 1 && a ? n : (s.resolveWith(e, [c]),
                !1)
            }, c = s.promise({
                elem: e,
                props: p.extend({}, t),
                opts: p.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xe || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = p.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r),
                    r
                },
                stop: function(t) {
                    var n = 0
                      , r = t ? c.tweens.length : 0;
                    if (i)
                        return this;
                    for (i = !0; n < r; n++)
                        c.tweens[n].run(1);
                    return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]),
                    this
                }
            }), l = c.props;
            for (!function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = p.camelCase(n)],
                    o = e[n],
                    p.isArray(o) && (i = o[1],
                    o = e[n] = o[0]),
                    n !== r && (e[r] = o,
                    delete e[n]),
                    (a = p.cssHooks[r]) && "expand"in a)
                        for (n in o = a.expand(o),
                        delete e[r],
                        o)
                            n in e || (e[n] = o[n],
                            t[n] = i);
                    else
                        t[r] = i
            }(l, c.opts.specialEasing); o < a; o++)
                if (r = ut[o].call(c, e, l, c.opts))
                    return r;
            return p.map(l, dt, c),
            p.isFunction(c.opts.start) && c.opts.start.call(e, c),
            p.fx.timer(p.extend(u, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }
        p.Animation = p.extend(ht, {
            tweener: function(e, t) {
                p.isFunction(e) ? (t = e,
                e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; r < i; r++)
                    n = e[r],
                    ct[n] = ct[n] || [],
                    ct[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? ut.unshift(e) : ut.push(e)
            }
        }),
        p.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? p.extend({}, e) : {
                complete: n || !n && t || p.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !p.isFunction(t) && t
            };
            return r.duration = p.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in p.fx.speeds ? p.fx.speeds[r.duration] : p.fx.speeds._default,
            null != r.queue && !0 !== r.queue || (r.queue = "fx"),
            r.old = r.complete,
            r.complete = function() {
                p.isFunction(r.old) && r.old.call(this),
                r.queue && p.dequeue(this, r.queue)
            }
            ,
            r
        }
        ,
        p.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(W).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = p.isEmptyObject(e)
                  , o = p.speed(t, n, r)
                  , a = function() {
                    var t = ht(this, p.extend({}, e), o);
                    (i || p._data(this, "finish")) && t.stop(!0)
                };
                return a.finish = a,
                i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(n)
                };
                return "string" != typeof e && (n = t,
                t = e,
                e = void 0),
                t && !1 !== e && this.queue(e || "fx", []),
                this.each(function() {
                    var t = !0
                      , i = null != e && e + "queueHooks"
                      , o = p.timers
                      , a = p._data(this);
                    if (i)
                        a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a)
                            a[i] && a[i].stop && st.test(i) && r(a[i]);
                    for (i = o.length; i--; )
                        o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                        t = !1,
                        o.splice(i, 1));
                    !t && n || p.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"),
                this.each(function() {
                    var t, n = p._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = p.timers, a = r ? r.length : 0;
                    for (n.finish = !0,
                    p.queue(this, e, []),
                    i && i.stop && i.stop.call(this, !0),
                    t = o.length; t--; )
                        o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                        o.splice(t, 1));
                    for (t = 0; t < a; t++)
                        r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }),
        p.each(["toggle", "show", "hide"], function(e, t) {
            var n = p.fn[t];
            p.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, r, i)
            }
        }),
        p.each({
            slideDown: ft("show"),
            slideUp: ft("hide"),
            slideToggle: ft("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            p.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
        p.timers = [],
        p.fx.tick = function() {
            var e, t = p.timers, n = 0;
            for (Xe = p.now(); n < t.length; n++)
                (e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || p.fx.stop(),
            Xe = void 0
        }
        ,
        p.fx.timer = function(e) {
            p.timers.push(e),
            e() ? p.fx.start() : p.timers.pop()
        }
        ,
        p.fx.interval = 13,
        p.fx.start = function() {
            Qe || (Qe = setInterval(p.fx.tick, p.fx.interval))
        }
        ,
        p.fx.stop = function() {
            clearInterval(Qe),
            Qe = null
        }
        ,
        p.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        p.fn.delay = function(e, t) {
            return e = p.fx && p.fx.speeds[e] || e,
            t = t || "fx",
            this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        }
        ,
        (tt = k.createElement("div")).setAttribute("className", "t"),
        tt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        rt = tt.getElementsByTagName("a")[0],
        it = (nt = k.createElement("select")).appendChild(k.createElement("option")),
        et = tt.getElementsByTagName("input")[0],
        rt.style.cssText = "top:1px",
        h.getSetAttribute = "t" !== tt.className,
        h.style = /top/.test(rt.getAttribute("style")),
        h.hrefNormalized = "/a" === rt.getAttribute("href"),
        h.checkOn = !!et.value,
        h.optSelected = it.selected,
        h.enctype = !!k.createElement("form").enctype,
        nt.disabled = !0,
        h.optDisabled = !it.disabled,
        (et = k.createElement("input")).setAttribute("value", ""),
        h.input = "" === et.getAttribute("value"),
        et.value = "t",
        et.setAttribute("type", "radio"),
        h.radioValue = "t" === et.value;
        var pt = /\r/g;
        p.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0];
                return arguments.length ? (r = p.isFunction(e),
                this.each(function(n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, p(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : p.isArray(i) && (i = p.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })),
                    (t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                })) : i ? (t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(pt, "") : null == n ? "" : n : void 0
            }
        }),
        p.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = p.find.attr(e, "value");
                        return null != t ? t : p.trim(p.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                            if (((n = r[u]).selected || u === i) && (h.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !p.nodeName(n.parentNode, "optgroup"))) {
                                if (t = p(n).val(),
                                o)
                                    return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = p.makeArray(t), a = i.length; a--; )
                            if (r = i[a],
                            p.inArray(p.valHooks.option.get(r), o) >= 0)
                                try {
                                    r.selected = n = !0
                                } catch (e) {
                                    r.scrollHeight
                                }
                            else
                                r.selected = !1;
                        return n || (e.selectedIndex = -1),
                        i
                    }
                }
            }
        }),
        p.each(["radio", "checkbox"], function() {
            p.valHooks[this] = {
                set: function(e, t) {
                    if (p.isArray(t))
                        return e.checked = p.inArray(p(e).val(), t) >= 0
                }
            },
            h.checkOn || (p.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
            )
        });
        var gt, mt, vt = p.expr.attrHandle, $t = /^(?:checked|selected)$/i, yt = h.getSetAttribute, bt = h.input;
        p.fn.extend({
            attr: function(e, t) {
                return z(this, p.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    p.removeAttr(this, e)
                })
            }
        }),
        p.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o)
                    return typeof e.getAttribute === P ? p.prop(e, t, n) : (1 === o && p.isXMLDoc(e) || (t = t.toLowerCase(),
                    r = p.attrHooks[t] || (p.expr.match.bool.test(t) ? mt : gt)),
                    void 0 === n ? r && "get"in r && null !== (i = r.get(e, t)) ? i : null == (i = p.find.attr(e, t)) ? void 0 : i : null !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                    n) : void p.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, r, i = 0, o = t && t.match(D);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++]; )
                        r = p.propFix[n] || n,
                        p.expr.match.bool.test(n) ? bt && yt || !$t.test(n) ? e[r] = !1 : e[p.camelCase("default-" + n)] = e[r] = !1 : p.attr(e, n, ""),
                        e.removeAttribute(yt ? n : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!h.radioValue && "radio" === t && p.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            }
        }),
        mt = {
            set: function(e, t, n) {
                return !1 === t ? p.removeAttr(e, n) : bt && yt || !$t.test(n) ? e.setAttribute(!yt && p.propFix[n] || n, n) : e[p.camelCase("default-" + n)] = e[n] = !0,
                n
            }
        },
        p.each(p.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = vt[t] || p.find.attr;
            vt[t] = bt && yt || !$t.test(t) ? function(e, t, r) {
                var i, o;
                return r || (o = vt[t],
                vt[t] = i,
                i = null != n(e, t, r) ? t.toLowerCase() : null,
                vt[t] = o),
                i
            }
            : function(e, t, n) {
                if (!n)
                    return e[p.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }),
        bt && yt || (p.attrHooks.value = {
            set: function(e, t, n) {
                if (!p.nodeName(e, "input"))
                    return gt && gt.set(e, t, n);
                e.defaultValue = t
            }
        }),
        yt || (gt = {
            set: function(e, t, n) {
                var r = e.getAttributeNode(n);
                if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)),
                r.value = t += "",
                "value" === n || t === e.getAttribute(n))
                    return t
            }
        },
        vt.id = vt.name = vt.coords = function(e, t, n) {
            var r;
            if (!n)
                return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
        }
        ,
        p.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                if (n && n.specified)
                    return n.value
            },
            set: gt.set
        },
        p.attrHooks.contenteditable = {
            set: function(e, t, n) {
                gt.set(e, "" !== t && t, n)
            }
        },
        p.each(["width", "height"], function(e, t) {
            p.attrHooks[t] = {
                set: function(e, n) {
                    if ("" === n)
                        return e.setAttribute(t, "auto"),
                        n
                }
            }
        })),
        h.style || (p.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var wt = /^(?:input|select|textarea|button|object)$/i
          , xt = /^(?:a|area)$/i;
        p.fn.extend({
            prop: function(e, t) {
                return z(this, p.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = p.propFix[e] || e,
                this.each(function() {
                    try {
                        this[e] = void 0,
                        delete this[e]
                    } catch (e) {}
                })
            }
        }),
        p.extend({
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o)
                    return (1 !== o || !p.isXMLDoc(e)) && (t = p.propFix[t] || t,
                    i = p.propHooks[t]),
                    void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = p.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : wt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }),
        h.hrefNormalized || p.each(["href", "src"], function(e, t) {
            p.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }),
        h.optSelected || (p.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex),
                null
            }
        }),
        p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            p.propFix[this.toLowerCase()] = this
        }),
        h.enctype || (p.propFix.enctype = "encoding");
        var Et = /[\t\r\n\f]/g;
        p.fn.extend({
            addClass: function(e) {
                var t, n, r, i, o, a, s = 0, u = this.length, c = "string" == typeof e && e;
                if (p.isFunction(e))
                    return this.each(function(t) {
                        p(this).addClass(e.call(this, t, this.className))
                    });
                if (c)
                    for (t = (e || "").match(D) || []; s < u; s++)
                        if (r = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : " ")) {
                            for (o = 0; i = t[o++]; )
                                r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            a = p.trim(r),
                            n.className !== a && (n.className = a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, a, s = 0, u = this.length, c = 0 === arguments.length || "string" == typeof e && e;
                if (p.isFunction(e))
                    return this.each(function(t) {
                        p(this).removeClass(e.call(this, t, this.className))
                    });
                if (c)
                    for (t = (e || "").match(D) || []; s < u; s++)
                        if (r = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : "")) {
                            for (o = 0; i = t[o++]; )
                                for (; r.indexOf(" " + i + " ") >= 0; )
                                    r = r.replace(" " + i + " ", " ");
                            a = e ? p.trim(r) : "",
                            n.className !== a && (n.className = a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : p.isFunction(e) ? this.each(function(n) {
                    p(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var t, r = 0, i = p(this), o = e.match(D) || []; t = o[r++]; )
                            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else
                        n !== P && "boolean" !== n || (this.className && p._data(this, "__className__", this.className),
                        this.className = this.className || !1 === e ? "" : p._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Et, " ").indexOf(t) >= 0)
                        return !0;
                return !1
            }
        }),
        p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            p.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        p.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var St = p.now()
          , _t = /\?/
          , kt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        p.parseJSON = function(e) {
            if (n.JSON && n.JSON.parse)
                return n.JSON.parse(e + "");
            var t, r = null, i = p.trim(e + "");
            return i && !p.trim(i.replace(kt, function(e, n, i, o) {
                return t && n && (r = 0),
                0 === r ? e : (t = i || n,
                r += !o - !i,
                "")
            })) ? Function("return " + i)() : p.error("Invalid JSON: " + e)
        }
        ,
        p.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e)
                return null;
            try {
                n.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
                t.loadXML(e))
            } catch (e) {
                t = void 0
            }
            return t && t.documentElement && !t.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + e),
            t
        }
        ;
        var At, Tt, Ot = /#.*$/, Ct = /([?&])_=[^&]*/, Nt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dt = /^(?:GET|HEAD)$/, Mt = /^\/\//, It = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, jt = {}, Rt = {}, Pt = "*/".concat("*");
        try {
            Tt = location.href
        } catch (e) {
            (Tt = k.createElement("a")).href = "",
            Tt = Tt.href
        }
        function Lt(e) {
            return function(t, n) {
                "string" != typeof t && (n = t,
                t = "*");
                var r, i = 0, o = t.toLowerCase().match(D) || [];
                if (p.isFunction(n))
                    for (; r = o[i++]; )
                        "+" === r.charAt(0) ? (r = r.slice(1) || "*",
                        (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }
        function Ft(e, t, n, r) {
            var i = {}
              , o = e === Rt;
            function a(s) {
                var u;
                return i[s] = !0,
                p.each(e[s] || [], function(e, s) {
                    var c = s(t, n, r);
                    return "string" != typeof c || o || i[c] ? o ? !(u = c) : void 0 : (t.dataTypes.unshift(c),
                    a(c),
                    !1)
                }),
                u
            }
            return a(t.dataTypes[0]) || !i["*"] && a("*")
        }
        function Ht(e, t) {
            var n, r, i = p.ajaxSettings.flatOptions || {};
            for (r in t)
                void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
            return n && p.extend(!0, e, n),
            e
        }
        At = It.exec(Tt.toLowerCase()) || [],
        p.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Pt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": p.parseJSON,
                    "text xml": p.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Ht(Ht(e, p.ajaxSettings), t) : Ht(p.ajaxSettings, e)
            },
            ajaxPrefilter: Lt(jt),
            ajaxTransport: Lt(Rt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e,
                e = void 0),
                t = t || {};
                var n, r, i, o, a, s, u, c, l = p.ajaxSetup({}, t), f = l.context || l, d = l.context && (f.nodeType || f.jquery) ? p(f) : p.event, h = p.Deferred(), g = p.Callbacks("once memory"), m = l.statusCode || {}, v = {}, $ = {}, y = 0, b = "canceled", w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === y) {
                            if (!c)
                                for (c = {}; t = Nt.exec(o); )
                                    c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === y ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return y || (e = $[n] = $[n] || e,
                        v[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return y || (l.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (y < 2)
                                for (t in e)
                                    m[t] = [m[t], e[t]];
                            else
                                w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return u && u.abort(t),
                        x(0, t),
                        this
                    }
                };
                if (h.promise(w).complete = g.add,
                w.success = w.done,
                w.error = w.fail,
                l.url = ((e || l.url || Tt) + "").replace(Ot, "").replace(Mt, At[1] + "//"),
                l.type = t.method || t.type || l.method || l.type,
                l.dataTypes = p.trim(l.dataType || "*").toLowerCase().match(D) || [""],
                null == l.crossDomain && (n = It.exec(l.url.toLowerCase()),
                l.crossDomain = !(!n || n[1] === At[1] && n[2] === At[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (At[3] || ("http:" === At[1] ? "80" : "443")))),
                l.data && l.processData && "string" != typeof l.data && (l.data = p.param(l.data, l.traditional)),
                Ft(jt, l, t, w),
                2 === y)
                    return w;
                for (r in (s = p.event && l.global) && 0 == p.active++ && p.event.trigger("ajaxStart"),
                l.type = l.type.toUpperCase(),
                l.hasContent = !Dt.test(l.type),
                i = l.url,
                l.hasContent || (l.data && (i = l.url += (_t.test(i) ? "&" : "?") + l.data,
                delete l.data),
                !1 === l.cache && (l.url = Ct.test(i) ? i.replace(Ct, "$1_=" + St++) : i + (_t.test(i) ? "&" : "?") + "_=" + St++)),
                l.ifModified && (p.lastModified[i] && w.setRequestHeader("If-Modified-Since", p.lastModified[i]),
                p.etag[i] && w.setRequestHeader("If-None-Match", p.etag[i])),
                (l.data && l.hasContent && !1 !== l.contentType || t.contentType) && w.setRequestHeader("Content-Type", l.contentType),
                w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : l.accepts["*"]),
                l.headers)
                    w.setRequestHeader(r, l.headers[r]);
                if (l.beforeSend && (!1 === l.beforeSend.call(f, w, l) || 2 === y))
                    return w.abort();
                for (r in b = "abort",
                {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    w[r](l[r]);
                if (u = Ft(Rt, l, t, w)) {
                    w.readyState = 1,
                    s && d.trigger("ajaxSend", [w, l]),
                    l.async && l.timeout > 0 && (a = setTimeout(function() {
                        w.abort("timeout")
                    }, l.timeout));
                    try {
                        y = 1,
                        u.send(v, x)
                    } catch (e) {
                        if (!(y < 2))
                            throw e;
                        x(-1, e)
                    }
                } else
                    x(-1, "No Transport");
                function x(e, t, n, r) {
                    var c, v, $, b, x, E = t;
                    2 !== y && (y = 2,
                    a && clearTimeout(a),
                    u = void 0,
                    o = r || "",
                    w.readyState = e > 0 ? 4 : 0,
                    c = e >= 200 && e < 300 || 304 === e,
                    n && (b = function(e, t, n) {
                        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                            u.shift(),
                            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (i)
                            for (a in s)
                                if (s[a] && s[a].test(i)) {
                                    u.unshift(a);
                                    break
                                }
                        if (u[0]in n)
                            o = u[0];
                        else {
                            for (a in n) {
                                if (!u[0] || e.converters[a + " " + u[0]]) {
                                    o = a;
                                    break
                                }
                                r || (r = a)
                            }
                            o = o || r
                        }
                        if (o)
                            return o !== u[0] && u.unshift(o),
                            n[o]
                    }(l, w, n)),
                    b = function(e, t, n, r) {
                        var i, o, a, s, u, c = {}, l = e.dataTypes.slice();
                        if (l[1])
                            for (a in e.converters)
                                c[a.toLowerCase()] = e.converters[a];
                        for (o = l.shift(); o; )
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                            u = o,
                            o = l.shift())
                                if ("*" === o)
                                    o = u;
                                else if ("*" !== u && u !== o) {
                                    if (!(a = c[u + " " + o] || c["* " + o]))
                                        for (i in c)
                                            if ((s = i.split(" "))[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                                                !0 === a ? a = c[i] : !0 !== c[i] && (o = s[0],
                                                l.unshift(s[1]));
                                                break
                                            }
                                    if (!0 !== a)
                                        if (a && e.throws)
                                            t = a(t);
                                        else
                                            try {
                                                t = a(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: a ? e : "No conversion from " + u + " to " + o
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: t
                        }
                    }(l, b, w, c),
                    c ? (l.ifModified && ((x = w.getResponseHeader("Last-Modified")) && (p.lastModified[i] = x),
                    (x = w.getResponseHeader("etag")) && (p.etag[i] = x)),
                    204 === e || "HEAD" === l.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = b.state,
                    v = b.data,
                    c = !($ = b.error))) : ($ = E,
                    !e && E || (E = "error",
                    e < 0 && (e = 0))),
                    w.status = e,
                    w.statusText = (t || E) + "",
                    c ? h.resolveWith(f, [v, E, w]) : h.rejectWith(f, [w, E, $]),
                    w.statusCode(m),
                    m = void 0,
                    s && d.trigger(c ? "ajaxSuccess" : "ajaxError", [w, l, c ? v : $]),
                    g.fireWith(f, [w, E]),
                    s && (d.trigger("ajaxComplete", [w, l]),
                    --p.active || p.event.trigger("ajaxStop")))
                }
                return w
            },
            getJSON: function(e, t, n) {
                return p.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return p.get(e, void 0, t, "script")
            }
        }),
        p.each(["get", "post"], function(e, t) {
            p[t] = function(e, n, r, i) {
                return p.isFunction(n) && (i = i || r,
                r = n,
                n = void 0),
                p.ajax({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                })
            }
        }),
        p._evalUrl = function(e) {
            return p.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
        ,
        p.fn.extend({
            wrapAll: function(e) {
                if (p.isFunction(e))
                    return this.each(function(t) {
                        p(this).wrapAll(e.call(this, t))
                    });
                if (this[0]) {
                    var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                            e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return p.isFunction(e) ? this.each(function(t) {
                    p(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = p(this)
                      , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = p.isFunction(e);
                return this.each(function(n) {
                    p(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
                }).end()
            }
        }),
        p.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !h.reliableHiddenOffsets() && "none" === (e.style && e.style.display || p.css(e, "display"))
        }
        ,
        p.expr.filters.visible = function(e) {
            return !p.expr.filters.hidden(e)
        }
        ;
        var Ut = /%20/g
          , Vt = /\[\]$/
          , qt = /\r?\n/g
          , Bt = /^(?:submit|button|image|reset|file)$/i
          , Gt = /^(?:input|select|textarea|keygen)/i;
        function Wt(e, t, n, r) {
            var i;
            if (p.isArray(t))
                p.each(t, function(t, i) {
                    n || Vt.test(e) ? r(e, i) : Wt(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
                });
            else if (n || "object" !== p.type(t))
                r(e, t);
            else
                for (i in t)
                    Wt(e + "[" + i + "]", t[i], n, r)
        }
        p.param = function(e, t) {
            var n, r = [], i = function(e, t) {
                t = p.isFunction(t) ? t() : null == t ? "" : t,
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional),
            p.isArray(e) || e.jquery && !p.isPlainObject(e))
                p.each(e, function() {
                    i(this.name, this.value)
                });
            else
                for (n in e)
                    Wt(n, e[n], t, i);
            return r.join("&").replace(Ut, "+")
        }
        ,
        p.fn.extend({
            serialize: function() {
                return p.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = p.prop(this, "elements");
                    return e ? p.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !p(this).is(":disabled") && Gt.test(this.nodeName) && !Bt.test(e) && (this.checked || !Y.test(e))
                }).map(function(e, t) {
                    var n = p(this).val();
                    return null == n ? null : p.isArray(n) ? p.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(qt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(qt, "\r\n")
                    }
                }).get()
            }
        }),
        p.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Jt() || function() {
                try {
                    return new n.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {}
            }()
        }
        : Jt;
        var zt = 0
          , Yt = {}
          , Kt = p.ajaxSettings.xhr();
        function Jt() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        }
        n.attachEvent && n.attachEvent("onunload", function() {
            for (var e in Yt)
                Yt[e](void 0, !0)
        }),
        h.cors = !!Kt && "withCredentials"in Kt,
        (Kt = h.ajax = !!Kt) && p.ajaxTransport(function(e) {
            var t;
            if (!e.crossDomain || h.cors)
                return {
                    send: function(n, r) {
                        var i, o = e.xhr(), a = ++zt;
                        if (o.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                            for (i in e.xhrFields)
                                o[i] = e.xhrFields[i];
                        for (i in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                        e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"),
                        n)
                            void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                        o.send(e.hasContent && e.data || null),
                        t = function(n, i) {
                            var s, u, c;
                            if (t && (i || 4 === o.readyState))
                                if (delete Yt[a],
                                t = void 0,
                                o.onreadystatechange = p.noop,
                                i)
                                    4 !== o.readyState && o.abort();
                                else {
                                    c = {},
                                    s = o.status,
                                    "string" == typeof o.responseText && (c.text = o.responseText);
                                    try {
                                        u = o.statusText
                                    } catch (e) {
                                        u = ""
                                    }
                                    s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                                }
                            c && r(s, u, c, o.getAllResponseHeaders())
                        }
                        ,
                        e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Yt[a] = t : t()
                    },
                    abort: function() {
                        t && t(void 0, !0)
                    }
                }
        }),
        p.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return p.globalEval(e),
                    e
                }
            }
        }),
        p.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET",
            e.global = !1)
        }),
        p.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = k.head || p("head")[0] || k.documentElement;
                return {
                    send: function(r, i) {
                        (t = k.createElement("script")).async = !0,
                        e.scriptCharset && (t.charset = e.scriptCharset),
                        t.src = e.url,
                        t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                            t.parentNode && t.parentNode.removeChild(t),
                            t = null,
                            n || i(200, "success"))
                        }
                        ,
                        n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var Zt = []
          , Xt = /(=)\?(?=&|$)|\?\?/;
        p.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Zt.pop() || p.expando + "_" + St++;
                return this[e] = !0,
                e
            }
        }),
        p.ajaxPrefilter("json jsonp", function(e, t, r) {
            var i, o, a, s = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0])
                return i = e.jsonpCallback = p.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                s ? e[s] = e[s].replace(Xt, "$1" + i) : !1 !== e.jsonp && (e.url += (_t.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                e.converters["script json"] = function() {
                    return a || p.error(i + " was not called"),
                    a[0]
                }
                ,
                e.dataTypes[0] = "json",
                o = n[i],
                n[i] = function() {
                    a = arguments
                }
                ,
                r.always(function() {
                    n[i] = o,
                    e[i] && (e.jsonpCallback = t.jsonpCallback,
                    Zt.push(i)),
                    a && p.isFunction(o) && o(a[0]),
                    a = o = void 0
                }),
                "script"
        }),
        p.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e)
                return null;
            "boolean" == typeof t && (n = t,
            t = !1),
            t = t || k;
            var r = x.exec(e)
              , i = !n && [];
            return r ? [t.createElement(r[1])] : (r = p.buildFragment([e], t, i),
            i && i.length && p(i).remove(),
            p.merge([], r.childNodes))
        }
        ;
        var Qt = p.fn.load;
        p.fn.load = function(e, t, n) {
            if ("string" != typeof e && Qt)
                return Qt.apply(this, arguments);
            var r, i, o, a = this, s = e.indexOf(" ");
            return s >= 0 && (r = p.trim(e.slice(s, e.length)),
            e = e.slice(0, s)),
            p.isFunction(t) ? (n = t,
            t = void 0) : t && "object" == typeof t && (o = "POST"),
            a.length > 0 && p.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: t
            }).done(function(e) {
                i = arguments,
                a.html(r ? p("<div>").append(p.parseHTML(e)).find(r) : e)
            }).complete(n && function(e, t) {
                a.each(n, i || [e.responseText, t, e])
            }
            ),
            this
        }
        ,
        p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            p.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        p.expr.filters.animated = function(e) {
            return p.grep(p.timers, function(t) {
                return e === t.elem
            }).length
        }
        ;
        var en = n.document.documentElement;
        function tn(e) {
            return p.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        p.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, u, c = p.css(e, "position"), l = p(e), f = {};
                "static" === c && (e.style.position = "relative"),
                s = l.offset(),
                o = p.css(e, "top"),
                u = p.css(e, "left"),
                ("absolute" === c || "fixed" === c) && p.inArray("auto", [o, u]) > -1 ? (a = (r = l.position()).top,
                i = r.left) : (a = parseFloat(o) || 0,
                i = parseFloat(u) || 0),
                p.isFunction(t) && (t = t.call(e, n, s)),
                null != t.top && (f.top = t.top - s.top + a),
                null != t.left && (f.left = t.left - s.left + i),
                "using"in t ? t.using.call(e, f) : l.css(f)
            }
        },
        p.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each(function(t) {
                        p.offset.setOffset(this, e, t)
                    });
                var t, n, r = {
                    top: 0,
                    left: 0
                }, i = this[0], o = i && i.ownerDocument;
                return o ? (t = o.documentElement,
                p.contains(t, i) ? (typeof i.getBoundingClientRect !== P && (r = i.getBoundingClientRect()),
                n = tn(o),
                {
                    top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : r) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                        top: 0,
                        left: 0
                    }, r = this[0];
                    return "fixed" === p.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                    t = this.offset(),
                    p.nodeName(e[0], "html") || (n = e.offset()),
                    n.top += p.css(e[0], "borderTopWidth", !0),
                    n.left += p.css(e[0], "borderLeftWidth", !0)),
                    {
                        top: t.top - n.top - p.css(r, "marginTop", !0),
                        left: t.left - n.left - p.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || en; e && !p.nodeName(e, "html") && "static" === p.css(e, "position"); )
                        e = e.offsetParent;
                    return e || en
                })
            }
        }),
        p.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            p.fn[e] = function(r) {
                return z(this, function(e, r, i) {
                    var o = tn(e);
                    if (void 0 === i)
                        return o ? t in o ? o[t] : o.document.documentElement[r] : e[r];
                    o ? o.scrollTo(n ? p(o).scrollLeft() : i, n ? i : p(o).scrollTop()) : e[r] = i
                }, e, r, arguments.length, null)
            }
        }),
        p.each(["top", "left"], function(e, t) {
            p.cssHooks[t] = Pe(h.pixelPosition, function(e, n) {
                if (n)
                    return n = Me(e, t),
                    je.test(n) ? p(e).position()[t] + "px" : n
            })
        }),
        p.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            p.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                p.fn[r] = function(r, i) {
                    var o = arguments.length && (n || "boolean" != typeof r)
                      , a = n || (!0 === r || !0 === i ? "margin" : "border");
                    return z(this, function(t, n, r) {
                        var i;
                        return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                        Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? p.css(t, n, a) : p.style(t, n, r, a)
                    }, t, o ? r : void 0, o, null)
                }
            })
        }),
        p.fn.size = function() {
            return this.length
        }
        ,
        p.fn.andSelf = p.fn.addBack,
        void 0 === (r = function() {
            return p
        }
        .apply(t, [])) || (e.exports = r);
        var nn = n.jQuery
          , rn = n.$;
        return p.noConflict = function(e) {
            return n.$ === p && (n.$ = rn),
            e && n.jQuery === p && (n.jQuery = nn),
            p
        }
        ,
        typeof i === P && (n.jQuery = n.$ = p),
        p
    }
    ,
    "object" == typeof e.exports ? e.exports = i.document ? o(i, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return o(e)
    }
    : o(i)
}
, function(e, t) {
    var n;
    !function(e) {
        !function(e) {
            !function(e) {
                e[e.Unknown = 0] = "Unknown",
                e[e.Basic = 1] = "Basic",
                e[e.Dns = 2] = "Dns",
                e[e.IPv4 = 3] = "IPv4",
                e[e.IPv6 = 4] = "IPv6"
            }(e.UriHostNameType || (e.UriHostNameType = {})),
            function(e) {
                e[e.RelativeOrAbsolute = 0] = "RelativeOrAbsolute",
                e[e.Absolute = 1] = "Absolute",
                e[e.Relative = 2] = "Relative"
            }(e.UriKind || (e.UriKind = {}))
        }(e.System || (e.System = {})),
        function(e) {
            !function(e) {
                !function(e) {
                    e[e.Bestand = 1] = "Bestand",
                    e[e.Html = 2] = "Html",
                    e[e.Url = 3] = "Url",
                    e[e.Scorm = 4] = "Scorm",
                    e[e.DigitaalLesmateriaal = 5] = "DigitaalLesmateriaal",
                    e[e.ScormMetWachtwoord = 6] = "ScormMetWachtwoord",
                    e[e.Noordhoff = 7] = "Noordhoff"
                }(e.BronSoort || (e.BronSoort = {})),
                function(e) {
                    e[e.Onbekend = 0] = "Onbekend",
                    e[e.Document = 1] = "Document",
                    e[e.Link = 2] = "Link",
                    e[e.Scorm = 4] = "Scorm",
                    e[e.MijnDocumentenMap = 8] = "MijnDocumentenMap",
                    e[e.GedeeldeDocumentenMap = 16] = "GedeeldeDocumentenMap",
                    e[e.PortfolioDocumentenMap = 32] = "PortfolioDocumentenMap",
                    e[e.ProjectDocumentenMap = 64] = "ProjectDocumentenMap",
                    e[e.PrullenbakMap = 128] = "PrullenbakMap",
                    e[e.Map = 256] = "Map",
                    e[e.Kennisnet = 512] = "Kennisnet",
                    e[e.OneDriveForBusiness = 2048] = "OneDriveForBusiness"
                }(e.BronType || (e.BronType = {})),
                function(e) {
                    e[e.Geen = 0] = "Geen",
                    e[e.Lezer = 1] = "Lezer",
                    e[e.Auteur = 2] = "Auteur",
                    e[e.Redacteur = 3] = "Redacteur",
                    e[e.Eigenaar = 4] = "Eigenaar",
                    e[e.MapEigenaar = 5] = "MapEigenaar"
                }(e.BronPrivilege || (e.BronPrivilege = {})),
                function(e) {
                    e[e.InProgress = 0] = "InProgress",
                    e[e.Failed = 1] = "Failed",
                    e[e.Available = 2] = "Available"
                }(e.BijlageContentStatus || (e.BijlageContentStatus = {}))
            }(e.Enums || (e.Enums = {}))
        }(e.Bronnen || (e.Bronnen = {})),
        function(e) {
            !function(e) {
                !function(e) {
                    !function(e) {
                        e[e.GeenStatus = 0] = "GeenStatus",
                        e[e.GeroosterdAutomatisch = 1] = "GeroosterdAutomatisch",
                        e[e.GeroosterdHandmatig = 2] = "GeroosterdHandmatig",
                        e[e.Gewijzigd = 3] = "Gewijzigd",
                        e[e.VervallenHandmatig = 4] = "VervallenHandmatig",
                        e[e.VervallenAutomatisch = 5] = "VervallenAutomatisch",
                        e[e.InGebruik = 6] = "InGebruik",
                        e[e.Afgesloten = 7] = "Afgesloten",
                        e[e.Ingezet = 8] = "Ingezet",
                        e[e.Verplaatst = 9] = "Verplaatst",
                        e[e.GewijzigdEnVerplaatst = 10] = "GewijzigdEnVerplaatst"
                    }(e.AfspraakStatus || (e.AfspraakStatus = {})),
                    function(e) {
                        e[e.None = 0] = "None",
                        e[e.Persoonlijk = 1] = "Persoonlijk",
                        e[e.Algemeen = 2] = "Algemeen",
                        e[e.Schoolbreed = 3] = "Schoolbreed",
                        e[e.Stage = 4] = "Stage",
                        e[e.Intake = 5] = "Intake",
                        e[e.Roostervrij = 6] = "Roostervrij",
                        e[e.Kwt = 7] = "Kwt",
                        e[e.Standby = 8] = "Standby",
                        e[e.Blokkade = 9] = "Blokkade",
                        e[e.Overig = 10] = "Overig",
                        e[e.BlokkadeLokaal = 11] = "BlokkadeLokaal",
                        e[e.BlokkadeKlas = 12] = "BlokkadeKlas",
                        e[e.Les = 13] = "Les",
                        e[e.Studiehuis = 14] = "Studiehuis",
                        e[e.RoostervrijeStudie = 15] = "RoostervrijeStudie",
                        e[e.Planning = 16] = "Planning",
                        e[e.Maatregelen = 101] = "Maatregelen",
                        e[e.Presenties = 102] = "Presenties",
                        e[e.ExamenRooster = 103] = "ExamenRooster"
                    }(e.AfspraakType || (e.AfspraakType = {})),
                    function(e) {
                        e[e.Vrij = 1] = "Vrij",
                        e[e.VoorlopigBezet = 2] = "VoorlopigBezet",
                        e[e.Bezet = 3] = "Bezet",
                        e[e.NietAanwezig = 4] = "NietAanwezig"
                    }(e.WeergaveType || (e.WeergaveType = {})),
                    function(e) {
                        e[e.None = 0] = "None",
                        e[e.Huiswerk = 1] = "Huiswerk",
                        e[e.Proefwerk = 2] = "Proefwerk",
                        e[e.Tentamen = 3] = "Tentamen",
                        e[e.SchriftelijkeOverhoring = 4] = "SchriftelijkeOverhoring",
                        e[e.MondelingeOverhoring = 5] = "MondelingeOverhoring",
                        e[e.Informatie = 6] = "Informatie",
                        e[e.Aantekening = 7] = "Aantekening"
                    }(e.AfspraakInfoType || (e.AfspraakInfoType = {}))
                }(e.Enums || (e.Enums = {}))
            }(e.Afspraken || (e.Afspraken = {}))
        }(e.Agenda || (e.Agenda = {})),
        function(e) {
            !function(e) {
                !function(e) {
                    e[e.None = 0] = "None",
                    e[e.Absent = 1] = "Absent",
                    e[e.Telaat = 2] = "Telaat",
                    e[e.Ziek = 3] = "Ziek",
                    e[e.Uitgestuurd = 4] = "Uitgestuurd",
                    e[e.Present = 5] = "Present",
                    e[e.Vrijstelling = 6] = "Vrijstelling",
                    e[e.BoekenVergeten = 7] = "BoekenVergeten",
                    e[e.HuiswerkVergeten = 8] = "HuiswerkVergeten"
                }(e.VerantwoordingType || (e.VerantwoordingType = {}))
            }(e.Enums || (e.Enums = {}))
        }(e.Absentie || (e.Absentie = {})),
        function(e) {
            !function(e) {
                !function(e) {
                    e[e.None = 0] = "None",
                    e[e.Inactive = 1] = "Inactive",
                    e[e.Active = 2] = "Active",
                    e[e.RswpAuthenticationPending = 4] = "RswpAuthenticationPending",
                    e[e.PasswordChangePending = 8] = "PasswordChangePending",
                    e[e.Any = 15] = "Any"
                }(e.SessionState || (e.SessionState = {}))
            }(e.Security || (e.Security = {}))
        }(e.Core || (e.Core = {})),
        function(e) {
            !function(e) {
                !function(e) {
                    e[e.Valid = 0] = "Valid",
                    e[e.Invalid = 1] = "Invalid",
                    e[e.PasswordExpired = 2] = "PasswordExpired"
                }(e.UserLoginValidation || (e.UserLoginValidation = {}))
            }(e.Enums || (e.Enums = {}))
        }(e.Account || (e.Account = {})),
        function(e) {
            !function(e) {
                !function(e) {
                    !function(e) {
                        e[e.NietIngeschreven = 0] = "NietIngeschreven",
                        e[e.Ingeschreven = 1] = "Ingeschreven",
                        e[e.VerplichtIngeschreven = 2] = "VerplichtIngeschreven"
                    }(e.KeuzewerktijdStatus || (e.KeuzewerktijdStatus = {}))
                }(e.Enums || (e.Enums = {}))
            }(e.KWT || (e.KWT = {}))
        }(e.Agenda || (e.Agenda = {})),
        function(e) {
            !function(e) {
                !function(e) {
                    e[e.Unknown = 0] = "Unknown",
                    e[e.Cijfer = 1] = "Cijfer",
                    e[e.Gemiddelde = 2] = "Gemiddelde",
                    e[e.Maximum = 3] = "Maximum",
                    e[e.Formule = 4] = "Formule",
                    e[e.Minimum = 5] = "Minimum",
                    e[e.Som = 6] = "Som",
                    e[e.Tel = 7] = "Tel",
                    e[e.Cevo = 8] = "Cevo",
                    e[e.VrijeTekst = 9] = "VrijeTekst",
                    e[e.CevoCPE = 10] = "CevoCPE",
                    e[e.CevoCIE = 11] = "CevoCIE",
                    e[e.Weegfactor = 12] = "Weegfactor",
                    e[e.Eindcijfer = 13] = "Eindcijfer",
                    e[e.Tekortpunten = 14] = "Tekortpunten",
                    e[e.BoomTop = 15] = "BoomTop",
                    e[e.VakVoorwaarde = 16] = "VakVoorwaarde"
                }(e.KolomSoort || (e.KolomSoort = {}))
            }(e.Enums || (e.Enums = {}))
        }(e.Cijfers || (e.Cijfers = {})),
        function(e) {
            !function(e) {
                !function(e) {
                    !function(e) {
                        e[e.Onbekend = 0] = "Onbekend",
                        e[e.Groep = 1] = "Groep",
                        e[e.Studie = 2] = "Studie",
                        e[e.Persoon = 3] = "Persoon",
                        e[e.Locatie = 6] = "Locatie",
                        e[e.Project = 8] = "Project"
                    }(e.ContactType || (e.ContactType = {}))
                }(e.Enums || (e.Enums = {}))
            }(e.Contactpersonen || (e.Contactpersonen = {}))
        }(e.Communicatie || (e.Communicatie = {})),
        function(e) {
            !function(e) {
                !function(e) {
                    !function(e) {
                        e[e.Forwarded = 1] = "Forwarded",
                        e[e.Replied = 2] = "Replied"
                    }(e.BerichtStatus || (e.BerichtStatus = {})),
                    function(e) {
                        e[e.NietGespecificeerd = 0] = "NietGespecificeerd",
                        e[e.Bericht = 1] = "Bericht",
                        e[e.Mededeling = 2] = "Mededeling"
                    }(e.BerichtSoort || (e.BerichtSoort = {}))
                }(e.Enums || (e.Enums = {}))
            }(e.Berichten || (e.Berichten = {}))
        }(e.Communicatie || (e.Communicatie = {})),
        function(e) {
            !function(e) {
                !function(e) {
                    e[e.GeheleLocatie = 1] = "GeheleLocatie",
                    e[e.AlleenLes = 2] = "AlleenLes"
                }(e.VerzendRecht || (e.VerzendRecht = {}))
            }(e.Enums || (e.Enums = {}))
        }(e.Configuratie || (e.Configuratie = {})),
        function(e) {
            !function(e) {
                !function(e) {
                    e[e.Folio = 0] = "Folio",
                    e[e.Digitaal = 1] = "Digitaal",
                    e[e.Combi = 2] = "Combi"
                }(e.MateriaalType || (e.MateriaalType = {})),
                function(e) {
                    e[e.Actief = 0] = "Actief",
                    e[e.Geblokkeerd = 1] = "Geblokkeerd",
                    e[e.Verwijderd = 2] = "Verwijderd"
                }(e.DigitaleLicentieStatus || (e.DigitaleLicentieStatus = {}))
            }(e.Enums || (e.Enums = {}))
        }(e.DigitaalLesmateriaal || (e.DigitaalLesmateriaal = {})),
        function(e) {
            !function(e) {
                !function(e) {
                    e[e.Bron = 1] = "Bron",
                    e[e.Opdracht = 2] = "Opdracht",
                    e[e.Scorm = 3] = "Scorm",
                    e[e.DTDL = 4] = "DTDL",
                    e[e.Map = 5] = "Map"
                }(e.ModuleSoort || (e.ModuleSoort = {}))
            }(e.Enums || (e.Enums = {}))
        }(e.ELO || (e.ELO = {})),
        function(e) {
            !function(e) {
                !function(e) {
                    !function(e) {
                        e[e.Geen = 0] = "Geen",
                        e[e.Beoordeeld = 1] = "Beoordeeld",
                        e[e.Gestart = 2] = "Gestart",
                        e[e.Herkansing = 3] = "Herkansing",
                        e[e.Ingeleverd = 4] = "Ingeleverd",
                        e[e.NietGestart = 5] = "NietGestart",
                        e[e.WachtOpPlagiaat = 6] = "WachtOpPlagiaat",
                        e[e.OpnieuwInleveren = 7] = "OpnieuwInleveren",
                        e[e.NietIngeleverd = 8] = "NietIngeleverd"
                    }(e.OpdrachtStatus || (e.OpdrachtStatus = {}))
                }(e.Enums || (e.Enums = {}))
            }(e.Opdrachten || (e.Opdrachten = {}))
        }(e.ELO || (e.ELO = {})),
        function(e) {
            !function(e) {
                !function(e) {
                    !function(e) {
                        e[e.Docent = 5] = "Docent",
                        e[e.Leerling = 4] = "Leerling",
                        e[e.Klas = 3] = "Klas",
                        e[e.StudieVak = 2] = "StudieVak",
                        e[e.Studie = 1] = "Studie"
                    }(e.ToegangType || (e.ToegangType = {}))
                }(e.Enums || (e.Enums = {}))
            }(e.Projecten || (e.Projecten = {}))
        }(e.ELO || (e.ELO = {})),
        function(e) {
            !function(e) {
                !function(e) {
                    e[e.UNSPECIFIED = -2] = "UNSPECIFIED",
                    e[e.FINISHED_ERROR = -1] = "FINISHED_ERROR",
                    e[e.NOT_STARTED = 0] = "NOT_STARTED",
                    e[e.IN_PROGRESS = 1] = "IN_PROGRESS",
                    e[e.FINISHED_OK = 2] = "FINISHED_OK"
                }(e.JobStatus || (e.JobStatus = {}))
            }(e.Media || (e.Media = {}))
        }(e.Core || (e.Core = {})),
        function(e) {
            !function(e) {
                !function(e) {
                    e[e.Beschikbaar = 0] = "Beschikbaar",
                    e[e.Voorkeur = 1] = "Voorkeur",
                    e[e.NietBeschikbaar = 2] = "NietBeschikbaar"
                }(e.DagdeelVoorkeurBeschikbaarheid || (e.DagdeelVoorkeurBeschikbaarheid = {})),
                function(e) {
                    e[e.Geen = 0] = "Geen",
                    e[e.Vroeg = 1] = "Vroeg",
                    e[e.Laat = 2] = "Laat"
                }(e.DagdeelVoorkeurGlobaleTijdWens || (e.DagdeelVoorkeurGlobaleTijdWens = {}))
            }(e.Enums || (e.Enums = {}))
        }(e.Ouderavond || (e.Ouderavond = {}))
    }(n || (n = {})),
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        e.module("ngLocale", [], ["$provide", function(e) {
            var t = "one"
              , n = "other";
            e.value("$locale", {
                DATETIME_FORMATS: {
                    AMPMS: ["a.m.", "p.m."],
                    DAY: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
                    ERANAMES: ["voor Christus", "na Christus"],
                    ERAS: ["v.Chr.", "n.Chr."],
                    FIRSTDAYOFWEEK: 0,
                    MONTH: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                    SHORTDAY: ["zo", "ma", "di", "wo", "do", "vr", "za"],
                    SHORTMONTH: ["jan.", "feb.", "mrt.", "apr.", "mei", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."],
                    STANDALONEMONTH: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
                    WEEKENDRANGE: [5, 6],
                    fullDate: "EEEE d MMMM y",
                    longDate: "d MMMM y",
                    medium: "d MMM y HH:mm:ss",
                    mediumDate: "d MMM y",
                    mediumTime: "HH:mm:ss",
                    short: "dd-MM-yy HH:mm",
                    shortDate: "dd-MM-yy",
                    shortTime: "HH:mm"
                },
                NUMBER_FORMATS: {
                    CURRENCY_SYM: "€",
                    DECIMAL_SEP: ",",
                    GROUP_SEP: ".",
                    PATTERNS: [{
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 3,
                        minFrac: 0,
                        minInt: 1,
                        negPre: "-",
                        negSuf: "",
                        posPre: "",
                        posSuf: ""
                    }, {
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 2,
                        minFrac: 2,
                        minInt: 1,
                        negPre: "¤ -",
                        negSuf: "",
                        posPre: "¤ ",
                        posSuf: ""
                    }]
                },
                id: "nl",
                localeID: "nl",
                pluralCat: function(e, r) {
                    var i = 0 | e
                      , o = function(e, t) {
                        var n = t;
                        void 0 === n && (n = Math.min(function(e) {
                            var t = (e += "").indexOf(".");
                            return -1 == t ? 0 : e.length - t - 1
                        }(e), 3));
                        var r = Math.pow(10, n);
                        return {
                            v: n,
                            f: (e * r | 0) % r
                        }
                    }(e, r);
                    return 1 == i && 0 == o.v ? t : n
                }
            })
        }
        ])
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    !function(e, t, r) {
        "use strict";
        t.$$minErr = t.$$minErr || function(e) {
            return function() {
                var n, r, i, o = arguments[0], a = "[" + (e ? e + ":" : "") + o + "] ", s = arguments[1], u = arguments;
                for (n = (n = a + s.replace(/\{\d+\}/g, function(e) {
                    var n, r = +e.slice(1, -1);
                    return r + 2 < u.length ? "function" == typeof (n = u[r + 2]) ? n.toString().replace(/ ?\{[\s\S]*$/, "") : void 0 === n ? "undefined" : "string" != typeof n ? t.toJson(n) : n : e
                })) + "\nhttp://errors.angularjs.org/" + t.version.full + "/" + (e ? e + "/" : "") + o,
                r = 2; r < arguments.length; r++)
                    n = n + (2 == r ? "?" : "&") + "p" + (r - 2) + "=" + encodeURIComponent("function" == typeof (i = arguments[r]) ? i.toString().replace(/ \{[\s\S]*$/, "") : void 0 === i ? "undefined" : "string" != typeof i ? JSON.stringify(i) : i);
                return new Error(n)
            }
        }
        ,
        t.module("angular-data.DSBinaryHeap", []).provider("DSBinaryHeap", n(18).DSBinaryHeapProvider),
        t.module("angular-data.DSCacheFactory", ["ng", "angular-data.DSBinaryHeap"]).provider("DSCacheFactory", n(49))
    }(window, window.angular)
}
, function(e, t, n) {
    (function(t) {
        var r = n(19)
          , i = n(50)
          , o = "<%= pkg.version %>";
        e.exports = function() {
            var e = new r.Config;
            this.version = o,
            this.setCacheDefaults = function(n) {
                if (n = n || {},
                !t.isObject(n))
                    throw t.$$minErr("ng")("areq", "Expected options to be an object! Found: {0}.", typeof n);
                for (var i in r.defaults)
                    i in n && (e[i] = n[i]);
                "disabled"in n && (e.$$disabled = !!n.disabled)
            }
            ,
            this.$get = function() {
                var n = {};
                /*!
     * @method _keys
     * @desc Returns an array of the keys of the given collection.
     * @param {object} collection The collection from which to get the keys.
     * @returns {array} An array of the keys of the given collection.
     */
                function a(e) {
                    var t, n = [];
                    for (t in e)
                        e.hasOwnProperty(t) && n.push(t);
                    return n
                }
                function s(r, o) {
                    if (r in n)
                        throw t.$$minErr("$cacheFactory")("iid", "CacheId '{0}' is already taken!", r);
                    if (!t.isString(r))
                        throw t.$$minErr("ng")("areq", "Expected cacheId to be a string! Found: {0}.", typeof r);
                    return n[r] = new i(r,t.extend({}, e, o)),
                    n[r].destroy = function() {
                        this.constructor.prototype.destroy.call(this),
                        delete n[this.$$id]
                    }
                    ,
                    n[r]
                }
                function u(e, t) {
                    return s(e, t)
                }
                return u.createCache = s,
                u.version = o,
                u.info = function() {
                    for (var i = a(n), o = {
                        size: i.length,
                        caches: {}
                    }, s = 0; s < i.length; s++) {
                        var u = i[s];
                        o.caches[u] = n[u].info()
                    }
                    var c = o.cacheDefaults = t.extend({}, e);
                    for (var l in r.defaults)
                        l in c || (c[l] = e["$$" + l]);
                    return o
                }
                ,
                u.get = function(e) {
                    if (!t.isString(e))
                        throw t.$$minErr("ng")("areq", "Expected cacheId to be a string! Found: {0}.", typeof e);
                    return n[e]
                }
                ,
                u.keySet = function() {
                    var e, t = {};
                    for (e in n)
                        n.hasOwnProperty(e) && (t[e] = e);
                    return t
                }
                ,
                u.keys = function() {
                    return a(n)
                }
                ,
                u.destroyAll = function() {
                    for (var e in n)
                        n[e].destroy();
                    n = {}
                }
                ,
                u.clearAll = function() {
                    for (var e in n)
                        n[e].removeAll()
                }
                ,
                u.enableAll = function() {
                    for (var e in n)
                        n[e].$$disabled = !1
                }
                ,
                u.disableAll = function() {
                    for (var e in n)
                        n[e].$$disabled = !0
                }
                ,
                u
            }
        }
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    (function(t) {
        var r = n(19)
          , i = n(18).DSBinaryHeap;
        /*!
 * Configure the cache to use webStorage.
 */
        function o(e, n) {
            if (e = e || {},
            n = !!n,
            !t.isObject(e))
                throw t.$$minErr("ng")("areq", "Expected cacheOptions to be an object! Found: {0}.", typeof e);
            "disabled"in e ? this.$$disabled = !!e.disabled : n && delete this.$$disabled,
            "capacity"in e ? this.setCapacity(e.capacity) : n && this.setCapacity(null),
            "deleteOnExpire"in e ? this.setDeleteOnExpire(e.deleteOnExpire) : n && this.setDeleteOnExpire(null),
            "maxAge"in e ? this.setMaxAge(e.maxAge) : n && this.setMaxAge(null),
            "recycleFreq"in e ? this.setRecycleFreq(e.recycleFreq) : n && this.setRecycleFreq(null),
            "cacheFlushInterval"in e ? this.setCacheFlushInterval(e.cacheFlushInterval) : n && this.setCacheFlushInterval(null),
            "onExpire"in e ? this.setOnExpire(e.onExpire) : n && this.setOnExpire(null)
        }
        function a(e, n) {
            this.$$data = {},
            this.$$id = e,
            this.$$storage = null,
            this.$$expiresHeap = new i(function(e) {
                return e.expires
            }
            ),
            this.$$lruHeap = new i(function(e) {
                return e.accessed
            }
            ),
            "storageMode"in (n = n || {}) && function(e, n) {
                if (!t.isString(e))
                    throw t.$$minErr("ng")("areq", "Expected storageMode to be a string! Found: {0}.", typeof e);
                if ("memory" !== e && "localStorage" !== e && "sessionStorage" !== e)
                    throw t.$$minErr("ng")("areq", 'Expected storageMode to be "memory", "localStorage" or "sessionStorage"! Found: {0}.', e);
                if (this.$$storageMode = e,
                n) {
                    if (!t.isObject(n))
                        throw t.$$minErr("ng")("areq", "Expected storageImpl to be an object! Found: {0}.", typeof n);
                    if (!("setItem"in n && "function" == typeof n.setItem))
                        throw t.$$minErr("ng")("areq", 'Expected storageImpl to implement "setItem(key, value)"! Found: {0}.', typeof n.setItem);
                    if (!("getItem"in n && "function" == typeof n.getItem))
                        throw t.$$minErr("ng")("areq", 'Expected storageImpl to implement "getItem(key)"! Found: {0}.', typeof n.getItem);
                    if (!("removeItem"in n) || "function" != typeof n.removeItem)
                        throw t.$$minErr("ng")("areq", 'Expected storageImpl to implement "removeItem(key)"! Found: {0}.', typeof n.removeItem);
                    this.$$storage = n
                } else if ("localStorage" === this.$$storageMode)
                    try {
                        localStorage.setItem("angular-cache", "angular-cache"),
                        localStorage.removeItem("angular-cache"),
                        this.$$storage = localStorage
                    } catch (e) {
                        delete this.$$storage,
                        this.$$storageMode = "memory"
                    }
                else if ("sessionStorage" === this.$$storageMode)
                    try {
                        sessionStorage.setItem("angular-cache", "angular-cache"),
                        sessionStorage.removeItem("angular-cache"),
                        this.$$storage = sessionStorage
                    } catch (e) {
                        delete this.$$storage,
                        this.$$storageMode = "memory"
                    }
            }
            .apply(this, [n.storageMode, n.storageImpl]),
            "storagePrefix"in n && (this.$$storagePrefix = n.storagePrefix),
            this.$$prefix = this.$$storagePrefix + e,
            o.apply(this, [n, !0])
        }
        for (var s in r.defaults)
            a.prototype["$$" + s] = r.defaults[s];
        a.prototype.setOptions = o,
        a.prototype.setCapacity = n(51),
        a.prototype.setDeleteOnExpire = n(52),
        a.prototype.setMaxAge = n(53),
        a.prototype.setRecycleFreq = n(54),
        a.prototype.setCacheFlushInterval = n(55),
        a.prototype.setOnExpire = n(56),
        a.prototype.put = n(57),
        a.prototype.get = n(58),
        a.prototype.remove = n(59),
        a.prototype.removeAll = n(60),
        a.prototype.removeExpired = n(61),
        a.prototype.destroy = n(62),
        a.prototype.info = n(63),
        a.prototype.keySet = n(64),
        a.prototype.keys = n(65),
        a.prototype.disable = function() {
            this.$$disabled = !0
        }
        ,
        a.prototype.enable = function() {
            delete this.$$disabled
        }
        ,
        a.prototype.touch = function(e) {
            if (e) {
                var t = this
                  , n = this.get(e, {
                    onExpire: function(e, n) {
                        t.put(e, n)
                    }
                });
                n && this.put(e, n)
            } else
                for (var r = this.keys(), i = 0; i < r.length; i++)
                    this.touch(r[i])
        }
        ,
        e.exports = a
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    (function(t) {
        e.exports = function(e) {
            if (null === e)
                delete this.$$capacity;
            else {
                if (!t.isNumber(e))
                    throw t.$$minErr("ng")("areq", "Expected capacity to be a number! Found: {0}.", typeof e);
                if (e < 0)
                    throw t.$$minErr("ng")("areq", "Expected capacity to be greater than zero! Found: {0}.", e);
                this.$$capacity = e
            }
            for (var n = {}; this.$$lruHeap.size() > this.$$capacity; )
                n[this.$$lruHeap.peek().key] = this.remove(this.$$lruHeap.peek().key);
            return n
        }
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    (function(t) {
        e.exports = function(e) {
            if (null === e)
                delete this.$$deleteOnExpire;
            else {
                if (!t.isString(e))
                    throw t.$$minErr("ng")("areq", "Expected deleteOnExpire to be a string! Found: {0}.", typeof e);
                if ("none" !== e && "passive" !== e && "aggressive" !== e)
                    throw t.$$minErr("ng")("areq", 'Expected deleteOnExpire to be "none", "passive" or "aggressive"! Found: {0}.', e);
                this.$$deleteOnExpire = e
            }
            this.setRecycleFreq(this.$$recycleFreq)
        }
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    (function(t) {
        var r = n(6);
        e.exports = function(e) {
            if (null === e)
                delete this.$$maxAge;
            else {
                if (!t.isNumber(e))
                    throw t.$$minErr("ng")("areq", "Expected maxAge to be a number! Found: {0}.", typeof e);
                if (e < 0)
                    throw t.$$minErr("ng")("areq", "Expected maxAge to be greater than zero! Found: {0}.", e);
                this.$$maxAge = e
            }
            var n, i, o;
            if (this.$$expiresHeap.removeAll(),
            this.$$storage) {
                var a = this.$$storage.getItem(this.$$prefix + ".keys");
                for (i = a ? t.fromJson(a) : [],
                n = 0; n < i.length; n++) {
                    o = i[n];
                    var s = this.$$storage.getItem(this.$$prefix + ".data." + o);
                    if (s) {
                        var u = t.fromJson(s);
                        this.$$maxAge === Number.MAX_VALUE ? u.expires = Number.MAX_VALUE : u.expires = u.created + this.$$maxAge,
                        this.$$expiresHeap.push({
                            key: o,
                            expires: u.expires
                        })
                    }
                }
            } else
                for (i = r.keys(this.$$data),
                n = 0; n < i.length; n++)
                    o = i[n],
                    this.$$maxAge === Number.MAX_VALUE ? this.$$data[o].expires = Number.MAX_VALUE : this.$$data[o].expires = this.$$data[o].created + this.$$maxAge,
                    this.$$expiresHeap.push(this.$$data[o]);
            return "aggressive" === this.$$deleteOnExpire ? this.removeExpired() : {}
        }
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    (function(t) {
        e.exports = function(e) {
            if (null === e)
                delete this.$$recycleFreq;
            else {
                if (!t.isNumber(e))
                    throw t.$$minErr("ng")("areq", "Expected recycleFreq to be a number! Found: {0}.", typeof e);
                if (e < 0)
                    throw t.$$minErr("ng")("areq", "Expected recycleFreq to be greater than zero! Found: {0}.", e);
                this.$$recycleFreq = e
            }
            var n;
            clearInterval(this.$$recycleFreqId),
            "aggressive" === this.$$deleteOnExpire ? (n = this).$$recycleFreqId = setInterval(function() {
                n.removeExpired()
            }, n.$$recycleFreq) : delete this.$$recycleFreqId
        }
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    (function(t) {
        e.exports = function(e) {
            if (null === e)
                delete this.$$cacheFlushInterval;
            else {
                if (!t.isNumber(e))
                    throw t.$$minErr("ng")("areq", "Expected cacheFlushInterval to be a number! Found: {0}.", typeof e);
                if (e < 0)
                    throw t.$$minErr("ng")("areq", "Expected cacheFlushInterval to be greater than zero! Found: {0}.", e);
                e !== this.$$cacheFlushInterval && (this.$$cacheFlushInterval = e,
                clearInterval(this.$$cacheFlushIntervalId),
                (n = this).$$cacheFlushIntervalId = setInterval(function() {
                    n.removeAll()
                }, n.$$cacheFlushInterval))
            }
            var n
        }
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    (function(t) {
        e.exports = function(e) {
            if (null === e)
                delete this.$$onExpire;
            else {
                if (!t.isFunction(e))
                    throw t.$$minErr("ng")("areq", "Expected onExpire to be a function! Found: {0}.", typeof e);
                this.$$onExpire = e
            }
        }
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    (function(t) {
        var r = n(6);
        e.exports = function(e, n) {
            var i = this;
            if (!this.$$disabled && null != n) {
                if (!n || !n.then) {
                    if (e = r.stringifyNumber(e),
                    !t.isString(e))
                        throw t.$$minErr("ng")("areq", "Expected key to be a string! Found: {0}.", typeof e);
                    var o = (new Date).getTime()
                      , a = {
                        key: e,
                        value: n,
                        created: o,
                        accessed: o
                    };
                    if (a.expires = a.created + this.$$maxAge,
                    this.$$storage) {
                        var s = this.$$storage.getItem(this.$$prefix + ".keys")
                          , u = s ? t.fromJson(s) : [];
                        this.$$storage.getItem(this.$$prefix + ".data." + e) && this.remove(e),
                        this.$$expiresHeap.push({
                            key: e,
                            expires: a.expires
                        }),
                        this.$$lruHeap.push({
                            key: e,
                            accessed: a.accessed
                        }),
                        this.$$storage.setItem(this.$$prefix + ".data." + e, t.toJson(a));
                        for (var c = !1, l = 0; l < u.length; l++)
                            if (u[l] === e) {
                                c = !0;
                                break
                            }
                        c || u.push(e),
                        this.$$storage.setItem(this.$$prefix + ".keys", t.toJson(u))
                    } else
                        this.$$data[e] && this.remove(e),
                        this.$$expiresHeap.push(a),
                        this.$$lruHeap.push(a),
                        this.$$data[e] = a;
                    return this.$$lruHeap.size() > this.$$capacity && this.remove(this.$$lruHeap.peek().key),
                    n
                }
                n.then(function(n) {
                    t.isObject(n) && "status"in n && "data"in n ? i.put(e, [n.status, n.data, n.headers(), n.statusText]) : i.put(e, n)
                })
            }
        }
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    (function(t) {
        var r = n(6);
        e.exports = function(e, n) {
            var i = this;
            if (t.isArray(e)) {
                var o = e
                  , a = [];
                return t.forEach(o, function(e) {
                    var t = i.get(e, n);
                    null != t && a.push(t)
                }),
                a
            }
            if (e = r.stringifyNumber(e),
            !this.$$disabled) {
                if (n = n || {},
                !t.isString(e))
                    throw t.$$minErr("ng")("areq", "Expected key to be a string! Found: {0}.", typeof e);
                if (n && !t.isObject(n))
                    throw t.$$minErr("ng")("areq", "Expected options to be an object! Found: {0}.", typeof n);
                if (n.onExpire && !t.isFunction(n.onExpire))
                    throw t.$$minErr("ng")("areq", "Expected options.onExpire to be a function! Found: {0}.", typeof n.onExpire);
                var s;
                if (this.$$storage) {
                    var u = this.$$storage.getItem(this.$$prefix + ".data." + e);
                    if (!u)
                        return;
                    s = t.fromJson(u)
                } else {
                    if (!(e in this.$$data))
                        return;
                    s = this.$$data[e]
                }
                var c = s.value
                  , l = (new Date).getTime();
                return this.$$storage ? (this.$$lruHeap.remove({
                    key: e,
                    accessed: s.accessed
                }),
                s.accessed = l,
                this.$$lruHeap.push({
                    key: e,
                    accessed: l
                })) : (this.$$lruHeap.remove(s),
                s.accessed = l,
                this.$$lruHeap.push(s)),
                "passive" === this.$$deleteOnExpire && "expires"in s && s.expires < l ? (this.remove(e),
                this.$$onExpire ? this.$$onExpire(e, s.value, n.onExpire) : n.onExpire && n.onExpire(e, s.value),
                c = void 0) : this.$$storage && this.$$storage.setItem(this.$$prefix + ".data." + e, t.toJson(s)),
                c
            }
        }
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    (function(t) {
        e.exports = function(e) {
            if (!this.$$storage) {
                var n = this.$$data[e] ? this.$$data[e].value : void 0;
                return this.$$lruHeap.remove(this.$$data[e]),
                this.$$expiresHeap.remove(this.$$data[e]),
                this.$$data[e] = null,
                delete this.$$data[e],
                n
            }
            var r = this.$$storage.getItem(this.$$prefix + ".data." + e);
            if (r) {
                var i = t.fromJson(r);
                this.$$lruHeap.remove({
                    key: e,
                    accessed: i.accessed
                }),
                this.$$expiresHeap.remove({
                    key: e,
                    expires: i.expires
                }),
                this.$$storage.removeItem(this.$$prefix + ".data." + e);
                var o = this.$$storage.getItem(this.$$prefix + ".keys")
                  , a = o ? t.fromJson(o) : []
                  , s = a.indexOf(e);
                return s >= 0 && a.splice(s, 1),
                this.$$storage.setItem(this.$$prefix + ".keys", t.toJson(a)),
                i.value
            }
        }
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    (function(t) {
        e.exports = function() {
            if (this.$$storage) {
                this.$$lruHeap.removeAll(),
                this.$$expiresHeap.removeAll();
                var e = this.$$storage.getItem(this.$$prefix + ".keys");
                if (e)
                    for (var n = t.fromJson(e), r = 0; r < n.length; r++)
                        this.remove(n[r]);
                this.$$storage.setItem(this.$$prefix + ".keys", t.toJson([]))
            } else {
                for (var i in this.$$lruHeap.removeAll(),
                this.$$expiresHeap.removeAll(),
                this.$$data)
                    this.$$data[i] = null;
                this.$$data = {}
            }
        }
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    (function(t) {
        e.exports = function() {
            for (var e, n, r = (new Date).getTime(), i = {}; (n = this.$$expiresHeap.peek()) && n.expires < r; )
                i[n.key] = n.value ? n.value : null,
                this.$$expiresHeap.pop();
            if (this.$$storage)
                for (e in i) {
                    var o = this.$$storage.getItem(this.$$prefix + ".data." + e);
                    o && (i[e] = t.fromJson(o).value,
                    this.remove(e))
                }
            else
                for (e in i)
                    this.remove(e);
            if (this.$$onExpire)
                for (e in i)
                    this.$$onExpire(e, i[e]);
            return i
        }
    }
    ).call(this, n(1))
}
, function(e, t) {
    e.exports = function() {
        clearInterval(this.$$cacheFlushIntervalId),
        clearInterval(this.$$recycleFreqId),
        this.removeAll(),
        this.$$storage && (this.$$storage.removeItem(this.$$prefix + ".keys"),
        this.$$storage.removeItem(this.$$prefix)),
        this.$$storage = null,
        this.$$data = null,
        this.$$lruHeap = null,
        this.$$expiresHeap = null,
        this.$$prefix = null
    }
}
, function(e, t, n) {
    (function(t) {
        e.exports = function(e) {
            if (e) {
                var n;
                if (this.$$storage) {
                    var r = this.$$storage.getItem(this.$$prefix + ".data." + e);
                    return r ? {
                        created: (n = t.fromJson(r)).created,
                        accessed: n.accessed,
                        expires: n.expires,
                        isExpired: (new Date).getTime() - n.created > this.$$maxAge
                    } : void 0
                }
                return e in this.$$data ? {
                    created: (n = this.$$data[e]).created,
                    accessed: n.accessed,
                    expires: n.expires,
                    isExpired: (new Date).getTime() - n.created > this.$$maxAge
                } : void 0
            }
            return {
                id: this.$$id,
                capacity: this.$$capacity,
                maxAge: this.$$maxAge,
                deleteOnExpire: this.$$deleteOnExpire,
                onExpire: this.$$onExpire,
                cacheFlushInterval: this.$$cacheFlushInterval,
                recycleFreq: this.$$recycleFreq,
                storageMode: this.$$storageMode,
                storageImpl: this.$$storage,
                disabled: this.$$disabled,
                size: this.$$lruHeap && this.$$lruHeap.size() || 0
            }
        }
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    (function(t) {
        var r = n(6);
        e.exports = function() {
            if (this.$$storage) {
                var e = this.$$storage.getItem(this.$$prefix + ".keys")
                  , n = {};
                if (e)
                    for (var i = t.fromJson(e), o = 0; o < i.length; o++)
                        n[i[o]] = i[o];
                return n
            }
            return r.keySet(this.$$data)
        }
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    (function(t) {
        var r = n(6);
        e.exports = function() {
            if (this.$$storage) {
                var e = this.$$storage.getItem(this.$$prefix + ".keys");
                return e ? t.fromJson(e) : []
            }
            return r.keys(this.$$data)
        }
    }
    ).call(this, n(1))
}
, function(e, t, n) {
    n(67),
    e.exports = "ngCookies"
}
, function(e, t) {
    /**
 * @license AngularJS v1.5.11
 * (c) 2010-2017 Google, Inc. http://angularjs.org
 * License: MIT
 */
    !function(e, t) {
        "use strict";
        function n(e, n, r) {
            var i = r.baseHref()
              , o = e[0];
            return function(e, r, a) {
                o.cookie = function(e, r, o) {
                    var a, s;
                    s = (o = o || {}).expires,
                    a = t.isDefined(o.path) ? o.path : i,
                    t.isUndefined(r) && (s = "Thu, 01 Jan 1970 00:00:00 GMT",
                    r = ""),
                    t.isString(s) && (s = new Date(s));
                    var u = encodeURIComponent(e) + "=" + encodeURIComponent(r);
                    u += a ? ";path=" + a : "",
                    u += o.domain ? ";domain=" + o.domain : "",
                    u += s ? ";expires=" + s.toUTCString() : "";
                    var c = (u += o.secure ? ";secure" : "").length + 1;
                    return c > 4096 && n.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + c + " > 4096 bytes)!"),
                    u
                }(e, r, a)
            }
        }
        t.module("ngCookies", ["ng"]).provider("$cookies", [function() {
            var e = this.defaults = {};
            function n(n) {
                return n ? t.extend({}, e, n) : e
            }
            this.$get = ["$$cookieReader", "$$cookieWriter", function(e, r) {
                return {
                    get: function(t) {
                        return e()[t]
                    },
                    getObject: function(e) {
                        var n = this.get(e);
                        return n ? t.fromJson(n) : n
                    },
                    getAll: function() {
                        return e()
                    },
                    put: function(e, t, i) {
                        r(e, t, n(i))
                    },
                    putObject: function(e, n, r) {
                        this.put(e, t.toJson(n), r)
                    },
                    remove: function(e, t) {
                        r(e, void 0, n(t))
                    }
                }
            }
            ]
        }
        ]),
        t.module("ngCookies").factory("$cookieStore", ["$cookies", function(e) {
            return {
                get: function(t) {
                    return e.getObject(t)
                },
                put: function(t, n) {
                    e.putObject(t, n)
                },
                remove: function(t) {
                    e.remove(t)
                }
            }
        }
        ]),
        n.$inject = ["$document", "$log", "$browser"],
        t.module("ngCookies").provider("$$cookieWriter", function() {
            this.$get = n
        })
    }(window, window.angular)
}
, function(e, t, n) {
    n(69),
    e.exports = "ngResource"
}
, function(e, t) {
    /**
 * @license AngularJS v1.5.11
 * (c) 2010-2017 Google, Inc. http://angularjs.org
 * License: MIT
 */
    !function(e, t) {
        "use strict";
        var n = t.$$minErr("$resource")
          , r = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;
        function i(e, i) {
            if (!function(e) {
                return null != e && "" !== e && "hasOwnProperty" !== e && r.test("." + e)
            }(i))
                throw n("badmember", 'Dotted member path "@{0}" is invalid.', i);
            for (var o = i.split("."), a = 0, s = o.length; a < s && t.isDefined(e); a++) {
                var u = o[a];
                e = null !== e ? e[u] : void 0
            }
            return e
        }
        function o(e, n) {
            for (var r in n = n || {},
            t.forEach(n, function(e, t) {
                delete n[t]
            }),
            e)
                !e.hasOwnProperty(r) || "$" === r.charAt(0) && "$" === r.charAt(1) || (n[r] = e[r]);
            return n
        }
        t.module("ngResource", ["ng"]).provider("$resource", function() {
            var e = /^https?:\/\/[^\/]*/
              , r = this;
            this.defaults = {
                stripTrailingSlashes: !0,
                cancellable: !1,
                actions: {
                    get: {
                        method: "GET"
                    },
                    save: {
                        method: "POST"
                    },
                    query: {
                        method: "GET",
                        isArray: !0
                    },
                    remove: {
                        method: "DELETE"
                    },
                    delete: {
                        method: "DELETE"
                    }
                }
            },
            this.$get = ["$http", "$log", "$q", "$timeout", function(a, s, u, c) {
                var l = t.noop
                  , f = t.forEach
                  , d = t.extend
                  , h = t.copy
                  , p = t.isArray
                  , g = t.isDefined
                  , m = t.isFunction
                  , v = t.isNumber;
                function $(e, t) {
                    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, t ? "%20" : "+")
                }
                function y(e, t) {
                    this.template = e,
                    this.defaults = d({}, r.defaults, t),
                    this.urlParams = {}
                }
                return y.prototype = {
                    setUrlParams: function(t, r, i) {
                        var o, a, s = this, u = i || s.template, c = "", l = s.urlParams = {};
                        f(u.split(/\W/), function(e) {
                            if ("hasOwnProperty" === e)
                                throw n("badname", "hasOwnProperty is not a valid parameter name.");
                            !new RegExp("^\\d+$").test(e) && e && new RegExp("(^|[^\\\\]):" + e + "(\\W|$)").test(u) && (l[e] = {
                                isQueryParamValue: new RegExp("\\?.*=:" + e + "(?:\\W|$)").test(u)
                            })
                        }),
                        u = (u = u.replace(/\\:/g, ":")).replace(e, function(e) {
                            return c = e,
                            ""
                        }),
                        r = r || {},
                        f(s.urlParams, function(e, t) {
                            o = r.hasOwnProperty(t) ? r[t] : s.defaults[t],
                            g(o) && null !== o ? (a = e.isQueryParamValue ? $(o, !0) : function(e) {
                                return $(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
                            }(o),
                            u = u.replace(new RegExp(":" + t + "(\\W|$)","g"), function(e, t) {
                                return a + t
                            })) : u = u.replace(new RegExp("(/?):" + t + "(\\W|$)","g"), function(e, t, n) {
                                return "/" === n.charAt(0) ? n : t + n
                            })
                        }),
                        s.defaults.stripTrailingSlashes && (u = u.replace(/\/+$/, "") || "/"),
                        u = u.replace(/\/\.(?=\w+($|\?))/, "."),
                        t.url = c + u.replace(/\/\\\./, "/."),
                        f(r, function(e, n) {
                            s.urlParams[n] || (t.params = t.params || {},
                            t.params[n] = e)
                        })
                    }
                },
                function e(t, $, b, w) {
                    var x = new y(t,w);
                    function E(e) {
                        return e.resource
                    }
                    function S(e) {
                        o(e || {}, this)
                    }
                    return b = d({}, r.defaults.actions, b),
                    S.prototype.toJSON = function() {
                        var e = d({}, this);
                        return delete e.$promise,
                        delete e.$resolved,
                        delete e.$cancelRequest,
                        e
                    }
                    ,
                    f(b, function(e, t) {
                        var r = /^(POST|PUT|PATCH)$/i.test(e.method)
                          , y = e.timeout
                          , b = g(e.cancellable) ? e.cancellable : x.defaults.cancellable;
                        y && !v(y) && (s.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."),
                        delete e.timeout,
                        y = null),
                        S[t] = function(s, g, v, w) {
                            var _, k, A, T = {};
                            switch (arguments.length) {
                            case 4:
                                A = w,
                                k = v;
                            case 3:
                            case 2:
                                if (!m(g)) {
                                    T = s,
                                    _ = g,
                                    k = v;
                                    break
                                }
                                if (m(s)) {
                                    k = s,
                                    A = g;
                                    break
                                }
                                k = g,
                                A = v;
                            case 1:
                                m(s) ? k = s : r ? _ = s : T = s;
                                break;
                            case 0:
                                break;
                            default:
                                throw n("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
                            }
                            var O, C, N = this instanceof S, D = N ? _ : e.isArray ? [] : new S(_), M = {}, I = e.interceptor && e.interceptor.response || E, j = e.interceptor && e.interceptor.responseError || void 0;
                            f(e, function(e, t) {
                                switch (t) {
                                default:
                                    M[t] = h(e);
                                    break;
                                case "params":
                                case "isArray":
                                case "interceptor":
                                case "cancellable":
                                }
                            }),
                            !N && b && (O = u.defer(),
                            M.timeout = O.promise,
                            y && (C = c(O.resolve, y))),
                            r && (M.data = _),
                            x.setUrlParams(M, d({}, function(e, t) {
                                var n = {};
                                return t = d({}, $, t),
                                f(t, function(t, r) {
                                    m(t) && (t = t(e)),
                                    n[r] = t && t.charAt && "@" === t.charAt(0) ? i(e, t.substr(1)) : t
                                }),
                                n
                            }(_, e.params || {}), T), e.url);
                            var R = a(M).then(function(r) {
                                var i = r.data;
                                if (i) {
                                    if (p(i) !== !!e.isArray)
                                        throw n("badcfg", "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2} (Request: {3} {4})", t, e.isArray ? "array" : "object", p(i) ? "array" : "object", M.method, M.url);
                                    if (e.isArray)
                                        D.length = 0,
                                        f(i, function(e) {
                                            "object" == typeof e ? D.push(new S(e)) : D.push(e)
                                        });
                                    else {
                                        var a = D.$promise;
                                        o(i, D),
                                        D.$promise = a
                                    }
                                }
                                return r.resource = D,
                                r
                            }, function(e) {
                                return (A || l)(e),
                                u.reject(e)
                            });
                            return R.finally(function() {
                                D.$resolved = !0,
                                !N && b && (D.$cancelRequest = l,
                                c.cancel(C),
                                O = C = M.timeout = null)
                            }),
                            R = R.then(function(e) {
                                var t = I(e);
                                return (k || l)(t, e.headers, e.status, e.statusText),
                                t
                            }, j),
                            N ? R : (D.$promise = R,
                            D.$resolved = !1,
                            b && (D.$cancelRequest = O.resolve),
                            D)
                        }
                        ,
                        S.prototype["$" + t] = function(e, n, r) {
                            m(e) && (r = n,
                            n = e,
                            e = {});
                            var i = S[t].call(this, e, this, n, r);
                            return i.$promise || i
                        }
                    }),
                    S.bind = function(n) {
                        var r = d({}, $, n);
                        return e(t, r, b, w)
                    }
                    ,
                    S
                }
            }
            ]
        })
    }(window, window.angular)
}
, function(e, t, n) {
    n(71),
    e.exports = "ngRoute"
}
, function(e, t) {
    /**
 * @license AngularJS v1.5.11
 * (c) 2010-2017 Google, Inc. http://angularjs.org
 * License: MIT
 */
    !function(e, t) {
        "use strict";
        var n, r, i = t.module("ngRoute", ["ng"]).provider("$route", function() {
            function e(e, n) {
                return t.extend(Object.create(e), n)
            }
            n = t.isArray,
            r = t.isObject;
            var i = {};
            function a(e, t) {
                var n = t.caseInsensitiveMatch
                  , r = {
                    originalPath: e,
                    regexp: e
                }
                  , i = r.keys = [];
                return e = e.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)(\*\?|[?*])?/g, function(e, t, n, r) {
                    var o = "?" === r || "*?" === r ? "?" : null
                      , a = "*" === r || "*?" === r ? "*" : null;
                    return i.push({
                        name: n,
                        optional: !!o
                    }),
                    t = t || "",
                    (o ? "" : t) + "(?:" + (o ? t : "") + (a ? "(.+?)" : "([^/]+)") + (o || "") + ")" + (o || "")
                }).replace(/([\/$*])/g, "\\$1"),
                r.regexp = new RegExp("^" + e + "$",n ? "i" : ""),
                r
            }
            this.when = function(e, o) {
                var s = function(e, t) {
                    if (n(e)) {
                        t = t || [];
                        for (var i = 0, o = e.length; i < o; i++)
                            t[i] = e[i]
                    } else if (r(e))
                        for (var a in t = t || {},
                        e)
                            "$" === a.charAt(0) && "$" === a.charAt(1) || (t[a] = e[a]);
                    return t || e
                }(o);
                if (t.isUndefined(s.reloadOnSearch) && (s.reloadOnSearch = !0),
                t.isUndefined(s.caseInsensitiveMatch) && (s.caseInsensitiveMatch = this.caseInsensitiveMatch),
                i[e] = t.extend(s, e && a(e, s)),
                e) {
                    var u = "/" === e[e.length - 1] ? e.substr(0, e.length - 1) : e + "/";
                    i[u] = t.extend({
                        redirectTo: e
                    }, a(u, s))
                }
                return this
            }
            ,
            this.caseInsensitiveMatch = !1,
            this.otherwise = function(e) {
                return "string" == typeof e && (e = {
                    redirectTo: e
                }),
                this.when(null, e),
                this
            }
            ,
            this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function(n, r, a, s, u, c, l) {
                var f, d, h = !1, p = {
                    routes: i,
                    reload: function() {
                        h = !0;
                        var e = {
                            defaultPrevented: !1,
                            preventDefault: function() {
                                this.defaultPrevented = !0,
                                h = !1
                            }
                        };
                        n.$evalAsync(function() {
                            g(e),
                            e.defaultPrevented || m()
                        })
                    },
                    updateParams: function(e) {
                        if (!this.current || !this.current.$$route)
                            throw o("norout", "Tried updating route when with no current route");
                        e = t.extend({}, this.current.params, e),
                        r.path($(this.current.$$route.originalPath, e)),
                        r.search(e)
                    }
                };
                return n.$on("$locationChangeStart", g),
                n.$on("$locationChangeSuccess", m),
                p;
                function g(o) {
                    var a, s, u = p.current;
                    t.forEach(i, function(n, i) {
                        !s && (a = function(e, t) {
                            var n = t.keys
                              , r = {};
                            if (!t.regexp)
                                return null;
                            var i = t.regexp.exec(e);
                            if (!i)
                                return null;
                            for (var o = 1, a = i.length; o < a; ++o) {
                                var s = n[o - 1]
                                  , u = i[o];
                                s && u && (r[s.name] = u)
                            }
                            return r
                        }(r.path(), n)) && ((s = e(n, {
                            params: t.extend({}, r.search(), a),
                            pathParams: a
                        })).$$route = n)
                    }),
                    f = s || i.null && e(i.null, {
                        params: {},
                        pathParams: {}
                    }),
                    (d = f && u && f.$$route === u.$$route && t.equals(f.pathParams, u.pathParams) && !f.reloadOnSearch && !h) || !u && !f || n.$broadcast("$routeChangeStart", f, u).defaultPrevented && o && o.preventDefault()
                }
                function m() {
                    var e = p.current
                      , i = f;
                    d ? (e.params = i.params,
                    t.copy(e.params, a),
                    n.$broadcast("$routeUpdate", e)) : (i || e) && (h = !1,
                    p.current = i,
                    i && i.redirectTo && (t.isString(i.redirectTo) ? r.path($(i.redirectTo, i.params)).search(i.params).replace() : r.url(i.redirectTo(i.pathParams, r.path(), r.search())).replace()),
                    s.when(i).then(v).then(function(r) {
                        i === p.current && (i && (i.locals = r,
                        t.copy(i.params, a)),
                        n.$broadcast("$routeChangeSuccess", i, e))
                    }, function(t) {
                        i === p.current && n.$broadcast("$routeChangeError", i, e, t)
                    }))
                }
                function v(e) {
                    if (e) {
                        var n = t.extend({}, e.resolve);
                        t.forEach(n, function(e, r) {
                            n[r] = t.isString(e) ? u.get(e) : u.invoke(e, null, null, r)
                        });
                        var r = function(e) {
                            var n, r;
                            t.isDefined(n = e.template) ? t.isFunction(n) && (n = n(e.params)) : t.isDefined(r = e.templateUrl) && (t.isFunction(r) && (r = r(e.params)),
                            t.isDefined(r) && (e.loadedTemplateUrl = l.valueOf(r),
                            n = c(r)));
                            return n
                        }(e);
                        return t.isDefined(r) && (n.$template = r),
                        s.all(n)
                    }
                }
                function $(e, n) {
                    var r = [];
                    return t.forEach((e || "").split(":"), function(e, t) {
                        if (0 === t)
                            r.push(e);
                        else {
                            var i = e.match(/(\w+)(?:[?*])?(.*)/)
                              , o = i[1];
                            r.push(n[o]),
                            r.push(i[2] || ""),
                            delete n[o]
                        }
                    }),
                    r.join("")
                }
            }
            ]
        }), o = t.$$minErr("ngRoute");
        function a(e, n, r) {
            return {
                restrict: "ECA",
                terminal: !0,
                priority: 400,
                transclude: "element",
                link: function(i, o, a, s, u) {
                    var c, l, f, d = a.autoscroll, h = a.onload || "";
                    function p() {
                        f && (r.cancel(f),
                        f = null),
                        c && (c.$destroy(),
                        c = null),
                        l && ((f = r.leave(l)).done(function(e) {
                            !1 !== e && (f = null)
                        }),
                        l = null)
                    }
                    function g() {
                        var a = e.current && e.current.locals
                          , s = a && a.$template;
                        if (t.isDefined(s)) {
                            var f = i.$new()
                              , g = e.current
                              , m = u(f, function(e) {
                                r.enter(e, null, l || o).done(function(e) {
                                    !1 === e || !t.isDefined(d) || d && !i.$eval(d) || n()
                                }),
                                p()
                            });
                            l = m,
                            (c = g.scope = f).$emit("$viewContentLoaded"),
                            c.$eval(h)
                        } else
                            p()
                    }
                    i.$on("$routeChangeSuccess", g),
                    g()
                }
            }
        }
        function s(e, t, n) {
            return {
                restrict: "ECA",
                priority: -400,
                link: function(r, i) {
                    var o = n.current
                      , a = o.locals;
                    i.html(a.$template);
                    var s = e(i.contents());
                    if (o.controller) {
                        a.$scope = r;
                        var u = t(o.controller, a);
                        o.controllerAs && (r[o.controllerAs] = u),
                        i.data("$ngControllerController", u),
                        i.children().data("$ngControllerController", u)
                    }
                    r[o.resolveAs || "$resolve"] = a,
                    s(r)
                }
            }
        }
        i.provider("$routeParams", function() {
            this.$get = function() {
                return {}
            }
        }),
        i.directive("ngView", a),
        i.directive("ngView", s),
        a.$inject = ["$route", "$anchorScroll", "$animate"],
        s.$inject = ["$compile", "$controller", "$route"]
    }(window, window.angular)
}
, function(e, t, n) {
    n(73),
    e.exports = "ngSanitize"
}
, function(e, t) {
    /**
 * @license AngularJS v1.5.11
 * (c) 2010-2017 Google, Inc. http://angularjs.org
 * License: MIT
 */
    !function(e, t) {
        "use strict";
        var n, r, i, o, a, s, u, c, l = t.$$minErr("$sanitize");
        t.module("ngSanitize", []).provider("$sanitize", function() {
            var f = !1;
            this.$get = ["$$sanitizeUri", function(e) {
                return f && r(E, w),
                function(t) {
                    var n = [];
                    return u(t, c(n, function(t, n) {
                        return !/^unsafe:/.test(e(t, n))
                    })),
                    n.join("")
                }
            }
            ],
            this.enableSvg = function(e) {
                return o(e) ? (f = e,
                this) : f
            }
            ,
            n = t.bind,
            r = t.extend,
            i = t.forEach,
            o = t.isDefined,
            a = t.lowercase,
            s = t.noop,
            u = function(t, n) {
                null == t ? t = "" : "string" != typeof t && (t = "" + t),
                d.innerHTML = t;
                var r = 5;
                do {
                    if (0 === r)
                        throw l("uinput", "Failed to sanitize html because the input is unstable");
                    r--,
                    e.document.documentMode && N(d),
                    t = d.innerHTML,
                    d.innerHTML = t
                } while (t !== d.innerHTML);for (var i = d.firstChild; i; ) {
                    switch (i.nodeType) {
                    case 1:
                        n.start(i.nodeName.toLowerCase(), O(i.attributes));
                        break;
                    case 3:
                        n.chars(i.textContent)
                    }
                    var o;
                    if (!((o = i.firstChild) || (1 === i.nodeType && n.end(i.nodeName.toLowerCase()),
                    o = i.nextSibling)))
                        for (; null == o && (i = i.parentNode) !== d; )
                            o = i.nextSibling,
                            1 === i.nodeType && n.end(i.nodeName.toLowerCase());
                    i = o
                }
                for (; i = d.firstChild; )
                    d.removeChild(i)
            }
            ,
            c = function(e, t) {
                var r = !1
                  , o = n(e, e.push);
                return {
                    start: function(e, n) {
                        e = a(e),
                        !r && x[e] && (r = e),
                        r || !0 !== E[e] || (o("<"),
                        o(e),
                        i(n, function(n, r) {
                            var i = a(r)
                              , s = "img" === e && "src" === i || "background" === i;
                            !0 !== A[i] || !0 === S[i] && !t(n, s) || (o(" "),
                            o(r),
                            o('="'),
                            o(C(n)),
                            o('"'))
                        }),
                        o(">"))
                    },
                    end: function(e) {
                        e = a(e),
                        r || !0 !== E[e] || !0 === g[e] || (o("</"),
                        o(e),
                        o(">")),
                        e == r && (r = !1)
                    },
                    chars: function(e) {
                        r || o(C(e))
                    }
                }
            }
            ;
            var d, h = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, p = /([^#-~ |!])/g, g = T("area,br,col,hr,img,wbr"), m = T("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), v = T("rp,rt"), $ = r({}, v, m), y = r({}, m, T("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")), b = r({}, v, T("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")), w = T("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"), x = T("script,style"), E = r({}, g, y, b, $), S = T("background,cite,href,longdesc,src,xlink:href"), _ = T("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"), k = T("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0), A = r({}, S, k, _);
            function T(e, t) {
                var n, r = {}, i = e.split(",");
                for (n = 0; n < i.length; n++)
                    r[t ? a(i[n]) : i[n]] = !0;
                return r
            }
            function O(e) {
                for (var t = {}, n = 0, r = e.length; n < r; n++) {
                    var i = e[n];
                    t[i.name] = i.value
                }
                return t
            }
            function C(e) {
                return e.replace(/&/g, "&amp;").replace(h, function(e) {
                    return "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";"
                }).replace(p, function(e) {
                    return "&#" + e.charCodeAt(0) + ";"
                }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }
            function N(t) {
                for (; t; ) {
                    if (t.nodeType === e.Node.ELEMENT_NODE)
                        for (var n = t.attributes, r = 0, i = n.length; r < i; r++) {
                            var o = n[r]
                              , a = o.name.toLowerCase();
                            "xmlns:ns1" !== a && 0 !== a.lastIndexOf("ns1:", 0) || (t.removeAttributeNode(o),
                            r--,
                            i--)
                        }
                    var s = t.firstChild;
                    s && N(s),
                    t = t.nextSibling
                }
            }
            !function(e) {
                var t;
                if (!e.document || !e.document.implementation)
                    throw l("noinert", "Can't create an inert html document");
                var n = ((t = e.document.implementation.createHTMLDocument("inert")).documentElement || t.getDocumentElement()).getElementsByTagName("body");
                if (1 === n.length)
                    d = n[0];
                else {
                    var r = t.createElement("html");
                    d = t.createElement("body"),
                    r.appendChild(d),
                    t.appendChild(r)
                }
            }(e)
        }),
        t.module("ngSanitize").filter("linky", ["$sanitize", function(e) {
            var n = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i
              , r = /^mailto:/i
              , i = t.$$minErr("linky")
              , o = t.isDefined
              , a = t.isFunction
              , u = t.isObject
              , l = t.isString;
            return function(t, f, d) {
                if (null == t || "" === t)
                    return t;
                if (!l(t))
                    throw i("notstring", "Expected string but received: {0}", t);
                for (var h, p, g, m = a(d) ? d : u(d) ? function() {
                    return d
                }
                : function() {
                    return {}
                }
                , v = t, $ = []; h = v.match(n); )
                    p = h[0],
                    h[2] || h[4] || (p = (h[3] ? "http://" : "mailto:") + p),
                    g = h.index,
                    y(v.substr(0, g)),
                    b(p, h[0].replace(r, "")),
                    v = v.substring(g + h[0].length);
                return y(v),
                e($.join(""));
                function y(e) {
                    var t, n;
                    e && $.push((t = e,
                    c(n = [], s).chars(t),
                    n.join("")))
                }
                function b(e, t) {
                    var n, r = m(e);
                    for (n in $.push("<a "),
                    r)
                        $.push(n + '="' + r[n] + '" ');
                    !o(f) || "target"in r || $.push('target="', f, '" '),
                    $.push('href="', e.replace(/"/g, "&quot;"), '">'),
                    y(t),
                    $.push("</a>")
                }
            }
        }
        ])
    }(window, window.angular)
}
, function(e, t, n) {
    n(75),
    e.exports = "ngTouch"
}
, function(e, t) {
    /**
 * @license AngularJS v1.5.11
 * (c) 2010-2017 Google, Inc. http://angularjs.org
 * License: MIT
 */
    !function(e, t) {
        "use strict";
        var n = t.module("ngTouch", []);
        function r(e, n) {
            var r = !1
              , o = !1;
            this.ngClickOverrideEnabled = function(a) {
                return t.isDefined(a) ? (a && !o && (o = !0,
                i.$$moduleName = "ngTouch",
                n.directive("ngClick", i),
                e.decorator("ngClickDirective", ["$delegate", function(e) {
                    if (r)
                        e.shift();
                    else
                        for (var t = e.length - 1; t >= 0; ) {
                            if ("ngTouch" === e[t].$$moduleName) {
                                e.splice(t, 1);
                                break
                            }
                            t--
                        }
                    return e
                }
                ])),
                r = a,
                this) : r
            }
            ,
            this.$get = function() {
                return {
                    ngClickOverrideEnabled: function() {
                        return r
                    }
                }
            }
        }
        n.provider("$touch", r),
        r.$inject = ["$provide", "$compileProvider"],
        n.factory("$swipe", [function() {
            var e = {
                mouse: {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                },
                touch: {
                    start: "touchstart",
                    move: "touchmove",
                    end: "touchend",
                    cancel: "touchcancel"
                },
                pointer: {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup",
                    cancel: "pointercancel"
                }
            };
            function n(e) {
                var t = e.originalEvent || e
                  , n = t.touches && t.touches.length ? t.touches : [t]
                  , r = t.changedTouches && t.changedTouches[0] || n[0];
                return {
                    x: r.clientX,
                    y: r.clientY
                }
            }
            function r(n, r) {
                var i = [];
                return t.forEach(n, function(t) {
                    var n = e[t][r];
                    n && i.push(n)
                }),
                i.join(" ")
            }
            return {
                bind: function(e, t, i) {
                    var o, a, s, u, c = !1;
                    i = i || ["mouse", "touch", "pointer"],
                    e.on(r(i, "start"), function(e) {
                        s = n(e),
                        c = !0,
                        o = 0,
                        a = 0,
                        u = s,
                        t.start && t.start(s, e)
                    });
                    var l = r(i, "cancel");
                    l && e.on(l, function(e) {
                        c = !1,
                        t.cancel && t.cancel(e)
                    }),
                    e.on(r(i, "move"), function(e) {
                        if (c && s) {
                            var r = n(e);
                            if (o += Math.abs(r.x - u.x),
                            a += Math.abs(r.y - u.y),
                            u = r,
                            !(o < 10 && a < 10))
                                return a > o ? (c = !1,
                                void (t.cancel && t.cancel(e))) : (e.preventDefault(),
                                void (t.move && t.move(r, e)))
                        }
                    }),
                    e.on(r(i, "end"), function(e) {
                        c && (c = !1,
                        t.end && t.end(n(e), e))
                    })
                }
            }
        }
        ]);
        var i = ["$parse", "$timeout", "$rootElement", function(e, n, r) {
            var i, o, a, s = 2500, u = 25, c = "ng-click-active";
            function l(e, t, n) {
                for (var r = 0; r < e.length; r += 2)
                    if (i = e[r],
                    o = e[r + 1],
                    a = t,
                    s = n,
                    Math.abs(i - a) < u && Math.abs(o - s) < u)
                        return e.splice(r, r + 2),
                        !0;
                var i, o, a, s;
                return !1
            }
            function f(e) {
                if (!(Date.now() - i > s)) {
                    var n, r = e.touches && e.touches.length ? e.touches : [e], u = r[0].clientX, c = r[0].clientY;
                    if (!(u < 1 && c < 1))
                        if (!a || a[0] !== u || a[1] !== c)
                            a && (a = null),
                            "label" === (n = e.target,
                            t.lowercase(n.nodeName || n[0] && n[0].nodeName)) && (a = [u, c]),
                            l(o, u, c) || (e.stopPropagation(),
                            e.preventDefault(),
                            e.target && e.target.blur && e.target.blur())
                }
            }
            function d(e) {
                var t = e.touches && e.touches.length ? e.touches : [e]
                  , r = t[0].clientX
                  , i = t[0].clientY;
                o.push(r, i),
                n(function() {
                    for (var e = 0; e < o.length; e += 2)
                        if (o[e] === r && o[e + 1] === i)
                            return void o.splice(e, e + 2)
                }, s, !1)
            }
            return function(n, a, s) {
                var u, h, p, g, m = e(s.ngClick), v = !1;
                function $() {
                    v = !1,
                    a.removeClass(c)
                }
                a.on("touchstart", function(e) {
                    v = !0,
                    3 === (u = e.target ? e.target : e.srcElement).nodeType && (u = u.parentNode),
                    a.addClass(c),
                    h = Date.now();
                    var t = e.originalEvent || e
                      , n = (t.touches && t.touches.length ? t.touches : [t])[0];
                    p = n.clientX,
                    g = n.clientY
                }),
                a.on("touchcancel", function(e) {
                    $()
                }),
                a.on("touchend", function(e) {
                    var n = Date.now() - h
                      , c = e.originalEvent || e
                      , m = (c.changedTouches && c.changedTouches.length ? c.changedTouches : c.touches && c.touches.length ? c.touches : [c])[0]
                      , y = m.clientX
                      , b = m.clientY
                      , w = Math.sqrt(Math.pow(y - p, 2) + Math.pow(b - g, 2));
                    v && n < 750 && w < 12 && (!function(e, t) {
                        o || (r[0].addEventListener("click", f, !0),
                        r[0].addEventListener("touchstart", d, !0),
                        o = []),
                        i = Date.now(),
                        l(o, e, t)
                    }(y, b),
                    u && u.blur(),
                    t.isDefined(s.disabled) && !1 !== s.disabled || a.triggerHandler("click", [e])),
                    $()
                }),
                a.onclick = function(e) {}
                ,
                a.on("click", function(e, t) {
                    n.$apply(function() {
                        m(n, {
                            $event: t || e
                        })
                    })
                }),
                a.on("mousedown", function(e) {
                    a.addClass(c)
                }),
                a.on("mousemove mouseup", function(e) {
                    a.removeClass(c)
                })
            }
        }
        ];
        function o(e, r, i) {
            n.directive(e, ["$parse", "$swipe", function(n, o) {
                var a = 75
                  , s = .3
                  , u = 30;
                return function(c, l, f) {
                    var d, h, p = n(f[e]);
                    var g = ["touch"];
                    t.isDefined(f.ngSwipeDisableMouse) || g.push("mouse"),
                    o.bind(l, {
                        start: function(e, t) {
                            d = e,
                            h = !0
                        },
                        cancel: function(e) {
                            h = !1
                        },
                        end: function(e, t) {
                            (function(e) {
                                if (!d)
                                    return !1;
                                var t = Math.abs(e.y - d.y)
                                  , n = (e.x - d.x) * r;
                                return h && t < a && n > 0 && n > u && t / n < s
                            }
                            )(e) && c.$apply(function() {
                                l.triggerHandler(i),
                                p(c, {
                                    $event: t
                                })
                            })
                        }
                    }, g)
                }
            }
            ])
        }
        o("ngSwipeLeft", -1, "swipeleft"),
        o("ngSwipeRight", 1, "swiperight")
    }(window, window.angular)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1)
      , i = n(20)
      , o = n(21)
      , a = n(77);
    t.OidcModule = r.module("iddink.oidc", []),
    t.OidcModule.value("oidcConfig", {
        handleOidcEvents: !0
    }),
    t.OidcModule.provider("oidcService", i.OidcServiceProvider),
    t.OidcModule.provider("userManager", o.UserManagerProvider),
    t.OidcModule.factory("bearerTokenInterceptor", ["oidcService", a.BearerTokenInterceptor.factory]),
    t.OidcModule.config(["$httpProvider", function(e) {
        e.interceptors.push("bearerTokenInterceptor")
    }
    ])
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e) {
            var t = this;
            this.oidcService = e,
            this.request = function(e) {
                return /\/api/i.test(e.url) ? t.oidcService.getAccessToken().then(function(t) {
                    return e.headers || (e.headers = {}),
                    e.headers.Authorization = "Bearer " + t,
                    e
                }) : e
            }
        }
        return e.factory = function(t) {
            return new e(t)
        }
        ,
        e
    }();
    t.BearerTokenInterceptor = r
}
, function(e, t, n) {
    (function(e) {
        var r;
        //! moment.js
        //! version : 2.5.1
        //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
        //! license : MIT
        //! momentjs.com
        //! moment.js
        //! version : 2.5.1
        //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
        //! license : MIT
        //! momentjs.com
        (function(i) {
            var o, a, s = this, u = Math.round, c = 0, l = 1, f = 2, d = 3, h = 4, p = 5, g = 6, m = {}, v = {
                _isAMomentObject: null,
                _i: null,
                _f: null,
                _l: null,
                _strict: null,
                _isUTC: null,
                _offset: null,
                _pf: null,
                _lang: null
            }, $ = e.exports && !0, y = /^\/?Date\((\-?\d+)/i, b = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, w = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, x = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, E = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, S = /\d\d?/, _ = /\d{1,3}/, k = /\d{1,4}/, A = /[+\-]?\d{1,6}/, T = /\d+/, O = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, C = /Z|[\+\-]\d\d:?\d\d/gi, N = /T/i, D = /[\+\-]?\d+(\.\d{1,3})?/, M = /\d/, I = /\d\d/, j = /\d{3}/, R = /\d{4}/, P = /[+-]?\d{6}/, L = /[+-]?\d+/, F = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, H = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], U = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], V = /([\+\-]|\d\d)/gi, q = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), B = {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6
            }, G = {
                ms: "millisecond",
                s: "second",
                m: "minute",
                h: "hour",
                d: "day",
                D: "date",
                w: "week",
                W: "isoWeek",
                M: "month",
                y: "year",
                DDD: "dayOfYear",
                e: "weekday",
                E: "isoWeekday",
                gg: "weekYear",
                GG: "isoWeekYear"
            }, W = {
                dayofyear: "dayOfYear",
                isoweekday: "isoWeekday",
                isoweek: "isoWeek",
                weekyear: "weekYear",
                isoweekyear: "isoWeekYear"
            }, z = {}, Y = "DDD w W M D d".split(" "), K = "M D H h m s w W".split(" "), J = {
                M: function() {
                    return this.month() + 1
                },
                MMM: function(e) {
                    return this.lang().monthsShort(this, e)
                },
                MMMM: function(e) {
                    return this.lang().months(this, e)
                },
                D: function() {
                    return this.date()
                },
                DDD: function() {
                    return this.dayOfYear()
                },
                d: function() {
                    return this.day()
                },
                dd: function(e) {
                    return this.lang().weekdaysMin(this, e)
                },
                ddd: function(e) {
                    return this.lang().weekdaysShort(this, e)
                },
                dddd: function(e) {
                    return this.lang().weekdays(this, e)
                },
                w: function() {
                    return this.week()
                },
                W: function() {
                    return this.isoWeek()
                },
                YY: function() {
                    return oe(this.year() % 100, 2)
                },
                YYYY: function() {
                    return oe(this.year(), 4)
                },
                YYYYY: function() {
                    return oe(this.year(), 5)
                },
                YYYYYY: function() {
                    var e = this.year();
                    return (e >= 0 ? "+" : "-") + oe(Math.abs(e), 6)
                },
                gg: function() {
                    return oe(this.weekYear() % 100, 2)
                },
                gggg: function() {
                    return oe(this.weekYear(), 4)
                },
                ggggg: function() {
                    return oe(this.weekYear(), 5)
                },
                GG: function() {
                    return oe(this.isoWeekYear() % 100, 2)
                },
                GGGG: function() {
                    return oe(this.isoWeekYear(), 4)
                },
                GGGGG: function() {
                    return oe(this.isoWeekYear(), 5)
                },
                e: function() {
                    return this.weekday()
                },
                E: function() {
                    return this.isoWeekday()
                },
                a: function() {
                    return this.lang().meridiem(this.hours(), this.minutes(), !0)
                },
                A: function() {
                    return this.lang().meridiem(this.hours(), this.minutes(), !1)
                },
                H: function() {
                    return this.hours()
                },
                h: function() {
                    return this.hours() % 12 || 12
                },
                m: function() {
                    return this.minutes()
                },
                s: function() {
                    return this.seconds()
                },
                S: function() {
                    return de(this.milliseconds() / 100)
                },
                SS: function() {
                    return oe(de(this.milliseconds() / 10), 2)
                },
                SSS: function() {
                    return oe(this.milliseconds(), 3)
                },
                SSSS: function() {
                    return oe(this.milliseconds(), 3)
                },
                Z: function() {
                    var e = -this.zone()
                      , t = "+";
                    return e < 0 && (e = -e,
                    t = "-"),
                    t + oe(de(e / 60), 2) + ":" + oe(de(e) % 60, 2)
                },
                ZZ: function() {
                    var e = -this.zone()
                      , t = "+";
                    return e < 0 && (e = -e,
                    t = "-"),
                    t + oe(de(e / 60), 2) + oe(de(e) % 60, 2)
                },
                z: function() {
                    return this.zoneAbbr()
                },
                zz: function() {
                    return this.zoneName()
                },
                X: function() {
                    return this.unix()
                },
                Q: function() {
                    return this.quarter()
                }
            }, Z = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"];
            function X(e, t) {
                return function(n) {
                    return oe(e.call(this, n), t)
                }
            }
            function Q(e, t) {
                return function(n) {
                    return this.lang().ordinal(e.call(this, n), t)
                }
            }
            for (; Y.length; )
                a = Y.pop(),
                J[a + "o"] = Q(J[a], a);
            for (; K.length; )
                a = K.pop(),
                J[a + a] = X(J[a], 2);
            function ee() {}
            function te(e) {
                me(e),
                re(this, e)
            }
            function ne(e) {
                var t = le(e)
                  , n = t.year || 0
                  , r = t.month || 0
                  , i = t.week || 0
                  , o = t.day || 0
                  , a = t.hour || 0
                  , s = t.minute || 0
                  , u = t.second || 0
                  , c = t.millisecond || 0;
                this._milliseconds = +c + 1e3 * u + 6e4 * s + 36e5 * a,
                this._days = +o + 7 * i,
                this._months = +r + 12 * n,
                this._data = {},
                this._bubble()
            }
            function re(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n]);
                return t.hasOwnProperty("toString") && (e.toString = t.toString),
                t.hasOwnProperty("valueOf") && (e.valueOf = t.valueOf),
                e
            }
            function ie(e) {
                return e < 0 ? Math.ceil(e) : Math.floor(e)
            }
            function oe(e, t, n) {
                for (var r = "" + Math.abs(e), i = e >= 0; r.length < t; )
                    r = "0" + r;
                return (i ? n ? "+" : "" : "-") + r
            }
            function ae(e, t, n, r) {
                var i, a, s = t._milliseconds, u = t._days, c = t._months;
                s && e._d.setTime(+e._d + s * n),
                (u || c) && (i = e.minute(),
                a = e.hour()),
                u && e.date(e.date() + u * n),
                c && e.month(e.month() + c * n),
                s && !r && o.updateOffset(e),
                (u || c) && (e.minute(i),
                e.hour(a))
            }
            function se(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            function ue(e, t, n) {
                var r, i = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), a = 0;
                for (r = 0; r < i; r++)
                    (n && e[r] !== t[r] || !n && de(e[r]) !== de(t[r])) && a++;
                return a + o
            }
            function ce(e) {
                if (e) {
                    var t = e.toLowerCase().replace(/(.)s$/, "$1");
                    e = G[e] || W[t] || t
                }
                return e
            }
            function le(e) {
                var t, n, r = {};
                for (n in e)
                    e.hasOwnProperty(n) && (t = ce(n)) && (r[t] = e[n]);
                return r
            }
            function fe(e) {
                var t, n;
                if (0 === e.indexOf("week"))
                    t = 7,
                    n = "day";
                else {
                    if (0 !== e.indexOf("month"))
                        return;
                    t = 12,
                    n = "month"
                }
                o[e] = function(r, a) {
                    var s, u, c = o.fn._lang[e], l = [];
                    if ("number" == typeof r && (a = r,
                    r = i),
                    u = function(e) {
                        var t = o().utc().set(n, e);
                        return c.call(o.fn._lang, t, r || "")
                    }
                    ,
                    null != a)
                        return u(a);
                    for (s = 0; s < t; s++)
                        l.push(u(s));
                    return l
                }
            }
            function de(e) {
                var t = +e
                  , n = 0;
                return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)),
                n
            }
            function he(e, t) {
                return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
            }
            function pe(e) {
                return ge(e) ? 366 : 365
            }
            function ge(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }
            function me(e) {
                var t;
                e._a && -2 === e._pf.overflow && (t = e._a[l] < 0 || e._a[l] > 11 ? l : e._a[f] < 1 || e._a[f] > he(e._a[c], e._a[l]) ? f : e._a[d] < 0 || e._a[d] > 23 ? d : e._a[h] < 0 || e._a[h] > 59 ? h : e._a[p] < 0 || e._a[p] > 59 ? p : e._a[g] < 0 || e._a[g] > 999 ? g : -1,
                e._pf._overflowDayOfYear && (t < c || t > f) && (t = f),
                e._pf.overflow = t)
            }
            function ve(e) {
                return null == e._isValid && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated,
                e._strict && (e._isValid = e._isValid && 0 === e._pf.charsLeftOver && 0 === e._pf.unusedTokens.length)),
                e._isValid
            }
            function $e(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }
            function ye(e, t) {
                return t._isUTC ? o(e).zone(t._offset || 0) : o(e).local()
            }
            function be(e) {
                var t, r, i, a, s = 0, u = function(e) {
                    if (!m[e] && $)
                        try {
                            n(80)("./" + e)
                        } catch (e) {}
                    return m[e]
                };
                if (!e)
                    return o.fn._lang;
                if (!se(e)) {
                    if (r = u(e))
                        return r;
                    e = [e]
                }
                for (; s < e.length; ) {
                    for (t = (a = $e(e[s]).split("-")).length,
                    i = (i = $e(e[s + 1])) ? i.split("-") : null; t > 0; ) {
                        if (r = u(a.slice(0, t).join("-")))
                            return r;
                        if (i && i.length >= t && ue(a, i, !0) >= t - 1)
                            break;
                        t--
                    }
                    s++
                }
                return o.fn._lang
            }
            function we(e, t) {
                return e.isValid() ? (t = xe(t, e.lang()),
                z[t] || (z[t] = function(e) {
                    var t, n, r, i = e.match(x);
                    for (t = 0,
                    n = i.length; t < n; t++)
                        J[i[t]] ? i[t] = J[i[t]] : i[t] = (r = i[t]).match(/\[[\s\S]/) ? r.replace(/^\[|\]$/g, "") : r.replace(/\\/g, "");
                    return function(r) {
                        var o = "";
                        for (t = 0; t < n; t++)
                            o += i[t]instanceof Function ? i[t].call(r, e) : i[t];
                        return o
                    }
                }(t)),
                z[t](e)) : e.lang().invalidDate()
            }
            function xe(e, t) {
                var n = 5;
                function r(e) {
                    return t.longDateFormat(e) || e
                }
                for (E.lastIndex = 0; n >= 0 && E.test(e); )
                    e = e.replace(E, r),
                    E.lastIndex = 0,
                    n -= 1;
                return e
            }
            function Ee(e, t) {
                var n = t._strict;
                switch (e) {
                case "DDDD":
                    return j;
                case "YYYY":
                case "GGGG":
                case "gggg":
                    return n ? R : k;
                case "Y":
                case "G":
                case "g":
                    return L;
                case "YYYYYY":
                case "YYYYY":
                case "GGGGG":
                case "ggggg":
                    return n ? P : A;
                case "S":
                    if (n)
                        return M;
                case "SS":
                    if (n)
                        return I;
                case "SSS":
                    if (n)
                        return j;
                case "DDD":
                    return _;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                    return O;
                case "a":
                case "A":
                    return be(t._l)._meridiemParse;
                case "X":
                    return D;
                case "Z":
                case "ZZ":
                    return C;
                case "T":
                    return N;
                case "SSSS":
                    return T;
                case "MM":
                case "DD":
                case "YY":
                case "GG":
                case "gg":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "ww":
                case "WW":
                    return n ? I : S;
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                case "w":
                case "W":
                case "e":
                case "E":
                    return S;
                default:
                    return new RegExp(function(e) {
                        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                    }(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
                        return t || n || r || i
                    })))
                }
            }
            function Se(e) {
                var t = (e = e || "").match(C) || []
                  , n = ((t[t.length - 1] || []) + "").match(V) || ["-", 0, 0]
                  , r = 60 * n[1] + de(n[2]);
                return "+" === n[0] ? -r : r
            }
            function _e(e, t, n) {
                var r, i = n._a;
                switch (e) {
                case "M":
                case "MM":
                    null != t && (i[l] = de(t) - 1);
                    break;
                case "MMM":
                case "MMMM":
                    null != (r = be(n._l).monthsParse(t)) ? i[l] = r : n._pf.invalidMonth = t;
                    break;
                case "D":
                case "DD":
                    null != t && (i[f] = de(t));
                    break;
                case "DDD":
                case "DDDD":
                    null != t && (n._dayOfYear = de(t));
                    break;
                case "YY":
                    i[c] = de(t) + (de(t) > 68 ? 1900 : 2e3);
                    break;
                case "YYYY":
                case "YYYYY":
                case "YYYYYY":
                    i[c] = de(t);
                    break;
                case "a":
                case "A":
                    n._isPm = be(n._l).isPM(t);
                    break;
                case "H":
                case "HH":
                case "h":
                case "hh":
                    i[d] = de(t);
                    break;
                case "m":
                case "mm":
                    i[h] = de(t);
                    break;
                case "s":
                case "ss":
                    i[p] = de(t);
                    break;
                case "S":
                case "SS":
                case "SSS":
                case "SSSS":
                    i[g] = de(1e3 * ("0." + t));
                    break;
                case "X":
                    n._d = new Date(1e3 * parseFloat(t));
                    break;
                case "Z":
                case "ZZ":
                    n._useUTC = !0,
                    n._tzm = Se(t);
                    break;
                case "w":
                case "ww":
                case "W":
                case "WW":
                case "d":
                case "dd":
                case "ddd":
                case "dddd":
                case "e":
                case "E":
                    e = e.substr(0, 1);
                case "gg":
                case "gggg":
                case "GG":
                case "GGGG":
                case "GGGGG":
                    e = e.substr(0, 2),
                    t && (n._w = n._w || {},
                    n._w[e] = t)
                }
            }
            function ke(e) {
                var t, n, r, i, a, s, u, p, g, m, v = [];
                if (!e._d) {
                    for (r = function(e) {
                        var t = new Date;
                        return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
                    }(e),
                    e._w && null == e._a[f] && null == e._a[l] && (a = function(t) {
                        var n = parseInt(t, 10);
                        return t ? t.length < 3 ? n > 68 ? 1900 + n : 2e3 + n : n : null == e._a[c] ? o().weekYear() : e._a[c]
                    }
                    ,
                    null != (s = e._w).GG || null != s.W || null != s.E ? u = De(a(s.GG), s.W || 1, s.E, 4, 1) : (p = be(e._l),
                    g = null != s.d ? Ce(s.d, p) : null != s.e ? parseInt(s.e, 10) + p._week.dow : 0,
                    m = parseInt(s.w, 10) || 1,
                    null != s.d && g < p._week.dow && m++,
                    u = De(a(s.gg), m, g, p._week.doy, p._week.dow)),
                    e._a[c] = u.year,
                    e._dayOfYear = u.dayOfYear),
                    e._dayOfYear && (i = null == e._a[c] ? r[c] : e._a[c],
                    e._dayOfYear > pe(i) && (e._pf._overflowDayOfYear = !0),
                    n = Oe(i, 0, e._dayOfYear),
                    e._a[l] = n.getUTCMonth(),
                    e._a[f] = n.getUTCDate()),
                    t = 0; t < 3 && null == e._a[t]; ++t)
                        e._a[t] = v[t] = r[t];
                    for (; t < 7; t++)
                        e._a[t] = v[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    v[d] += de((e._tzm || 0) / 60),
                    v[h] += de((e._tzm || 0) % 60),
                    e._d = (e._useUTC ? Oe : function(e, t, n, r, i, o, a) {
                        var s = new Date(e,t,n,r,i,o,a);
                        e < 1970 && s.setFullYear(e);
                        return s
                    }
                    ).apply(null, v)
                }
            }
            function Ae(e) {
                e._a = [],
                e._pf.empty = !0;
                var t, n, r, i, o, a = be(e._l), s = "" + e._i, u = s.length, c = 0;
                for (r = xe(e._f, a).match(x) || [],
                t = 0; t < r.length; t++)
                    i = r[t],
                    (n = (s.match(Ee(i, e)) || [])[0]) && ((o = s.substr(0, s.indexOf(n))).length > 0 && e._pf.unusedInput.push(o),
                    s = s.slice(s.indexOf(n) + n.length),
                    c += n.length),
                    J[i] ? (n ? e._pf.empty = !1 : e._pf.unusedTokens.push(i),
                    _e(i, n, e)) : e._strict && !n && e._pf.unusedTokens.push(i);
                e._pf.charsLeftOver = u - c,
                s.length > 0 && e._pf.unusedInput.push(s),
                e._isPm && e._a[d] < 12 && (e._a[d] += 12),
                !1 === e._isPm && 12 === e._a[d] && (e._a[d] = 0),
                ke(e),
                me(e)
            }
            function Te(e) {
                var t = e._i
                  , n = y.exec(t);
                t === i ? e._d = new Date : n ? e._d = new Date(+n[1]) : "string" == typeof t ? function(e) {
                    var t, n, r = e._i, i = F.exec(r);
                    if (i) {
                        for (e._pf.iso = !0,
                        t = 0,
                        n = H.length; t < n; t++)
                            if (H[t][1].exec(r)) {
                                e._f = H[t][0] + (i[6] || " ");
                                break
                            }
                        for (t = 0,
                        n = U.length; t < n; t++)
                            if (U[t][1].exec(r)) {
                                e._f += U[t][0];
                                break
                            }
                        r.match(C) && (e._f += "Z"),
                        Ae(e)
                    } else
                        e._d = new Date(r)
                }(e) : se(t) ? (e._a = t.slice(0),
                ke(e)) : function(e) {
                    return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
                }(t) ? e._d = new Date(+t) : "object" == typeof t ? function(e) {
                    var t;
                    e._d || (t = le(e._i),
                    e._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond],
                    ke(e))
                }(e) : e._d = new Date(t)
            }
            function Oe(e) {
                var t = new Date(Date.UTC.apply(null, arguments));
                return e < 1970 && t.setUTCFullYear(e),
                t
            }
            function Ce(e, t) {
                if ("string" == typeof e)
                    if (isNaN(e)) {
                        if ("number" != typeof (e = t.weekdaysParse(e)))
                            return null
                    } else
                        e = parseInt(e, 10);
                return e
            }
            function Ne(e, t, n) {
                var r, i = n - t, a = n - e.day();
                return a > i && (a -= 7),
                a < i - 7 && (a += 7),
                r = o(e).add("d", a),
                {
                    week: Math.ceil(r.dayOfYear() / 7),
                    year: r.year()
                }
            }
            function De(e, t, n, r, i) {
                var o, a = Oe(e, 0, 1).getUTCDay();
                return {
                    year: (o = 7 * (t - 1) + ((n = null != n ? n : i) - i) + (i - a + (a > r ? 7 : 0) - (a < i ? 7 : 0)) + 1) > 0 ? e : e - 1,
                    dayOfYear: o > 0 ? o : pe(e - 1) + o
                }
            }
            function Me(e) {
                var t = e._i
                  , n = e._f;
                return null === t ? o.invalid({
                    nullInput: !0
                }) : ("string" == typeof t && (e._i = t = be().preparse(t)),
                o.isMoment(t) ? (e = function(e) {
                    var t, n = {};
                    for (t in e)
                        e.hasOwnProperty(t) && v.hasOwnProperty(t) && (n[t] = e[t]);
                    return n
                }(t))._d = new Date(+t._d) : n ? se(n) ? function(e) {
                    var t, n, r, i, o;
                    if (0 === e._f.length)
                        return e._pf.invalidFormat = !0,
                        void (e._d = new Date(NaN));
                    for (i = 0; i < e._f.length; i++)
                        o = 0,
                        (t = re({}, e))._pf = {
                            empty: !1,
                            unusedTokens: [],
                            unusedInput: [],
                            overflow: -2,
                            charsLeftOver: 0,
                            nullInput: !1,
                            invalidMonth: null,
                            invalidFormat: !1,
                            userInvalidated: !1,
                            iso: !1
                        },
                        t._f = e._f[i],
                        Ae(t),
                        ve(t) && (o += t._pf.charsLeftOver,
                        o += 10 * t._pf.unusedTokens.length,
                        t._pf.score = o,
                        (null == r || o < r) && (r = o,
                        n = t));
                    re(e, n || t)
                }(e) : Ae(e) : Te(e),
                new te(e))
            }
            for (J.DDDD = X(J.DDD, 3),
            re(ee.prototype, {
                set: function(e) {
                    var t, n;
                    for (n in e)
                        "function" == typeof (t = e[n]) ? this[n] = t : this["_" + n] = t
                },
                _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                months: function(e) {
                    return this._months[e.month()]
                },
                _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                monthsShort: function(e) {
                    return this._monthsShort[e.month()]
                },
                monthsParse: function(e) {
                    var t, n, r;
                    for (this._monthsParse || (this._monthsParse = []),
                    t = 0; t < 12; t++)
                        if (this._monthsParse[t] || (n = o.utc([2e3, t]),
                        r = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""),
                        this._monthsParse[t] = new RegExp(r.replace(".", ""),"i")),
                        this._monthsParse[t].test(e))
                            return t
                },
                _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdays: function(e) {
                    return this._weekdays[e.day()]
                },
                _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysShort: function(e) {
                    return this._weekdaysShort[e.day()]
                },
                _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                weekdaysMin: function(e) {
                    return this._weekdaysMin[e.day()]
                },
                weekdaysParse: function(e) {
                    var t, n, r;
                    for (this._weekdaysParse || (this._weekdaysParse = []),
                    t = 0; t < 7; t++)
                        if (this._weekdaysParse[t] || (n = o([2e3, 1]).day(t),
                        r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""),
                        this._weekdaysParse[t] = new RegExp(r.replace(".", ""),"i")),
                        this._weekdaysParse[t].test(e))
                            return t
                },
                _longDateFormat: {
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D YYYY",
                    LLL: "MMMM D YYYY LT",
                    LLLL: "dddd, MMMM D YYYY LT"
                },
                longDateFormat: function(e) {
                    var t = this._longDateFormat[e];
                    return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                        return e.slice(1)
                    }),
                    this._longDateFormat[e] = t),
                    t
                },
                isPM: function(e) {
                    return "p" === (e + "").toLowerCase().charAt(0)
                },
                _meridiemParse: /[ap]\.?m?\.?/i,
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
                },
                _calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                calendar: function(e, t) {
                    var n = this._calendar[e];
                    return "function" == typeof n ? n.apply(t) : n
                },
                _relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                relativeTime: function(e, t, n, r) {
                    var i = this._relativeTime[n];
                    return "function" == typeof i ? i(e, t, n, r) : i.replace(/%d/i, e)
                },
                pastFuture: function(e, t) {
                    var n = this._relativeTime[e > 0 ? "future" : "past"];
                    return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
                },
                ordinal: function(e) {
                    return this._ordinal.replace("%d", e)
                },
                _ordinal: "%d",
                preparse: function(e) {
                    return e
                },
                postformat: function(e) {
                    return e
                },
                week: function(e) {
                    return Ne(e, this._week.dow, this._week.doy).week
                },
                _week: {
                    dow: 0,
                    doy: 6
                },
                _invalidDate: "Invalid date",
                invalidDate: function() {
                    return this._invalidDate
                }
            }),
            (o = function(e, t, n, r) {
                var o;
                return "boolean" == typeof n && (r = n,
                n = i),
                (o = {})._isAMomentObject = !0,
                o._i = e,
                o._f = t,
                o._l = n,
                o._strict = r,
                o._isUTC = !1,
                o._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1
                },
                Me(o)
            }
            ).utc = function(e, t, n, r) {
                var o;
                return "boolean" == typeof n && (r = n,
                n = i),
                (o = {})._isAMomentObject = !0,
                o._useUTC = !0,
                o._isUTC = !0,
                o._l = n,
                o._i = e,
                o._f = t,
                o._strict = r,
                o._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1
                },
                Me(o).utc()
            }
            ,
            o.unix = function(e) {
                return o(1e3 * e)
            }
            ,
            o.duration = function(e, t) {
                var n, r, i, a = e, s = null;
                return o.isDuration(e) ? a = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : "number" == typeof e ? (a = {},
                t ? a[t] = e : a.milliseconds = e) : (s = b.exec(e)) ? (n = "-" === s[1] ? -1 : 1,
                a = {
                    y: 0,
                    d: de(s[f]) * n,
                    h: de(s[d]) * n,
                    m: de(s[h]) * n,
                    s: de(s[p]) * n,
                    ms: de(s[g]) * n
                }) : (s = w.exec(e)) && (n = "-" === s[1] ? -1 : 1,
                a = {
                    y: (i = function(e) {
                        var t = e && parseFloat(e.replace(",", "."));
                        return (isNaN(t) ? 0 : t) * n
                    }
                    )(s[2]),
                    M: i(s[3]),
                    d: i(s[4]),
                    h: i(s[5]),
                    m: i(s[6]),
                    s: i(s[7]),
                    w: i(s[8])
                }),
                r = new ne(a),
                o.isDuration(e) && e.hasOwnProperty("_lang") && (r._lang = e._lang),
                r
            }
            ,
            o.version = "2.5.1",
            o.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
            o.updateOffset = function() {}
            ,
            o.lang = function(e, t) {
                return e ? (t ? function(e, t) {
                    t.abbr = e,
                    m[e] || (m[e] = new ee),
                    m[e].set(t),
                    m[e]
                }($e(e), t) : null === t ? (!function(e) {
                    delete m[e]
                }(e),
                e = "en") : m[e] || be(e),
                (o.duration.fn._lang = o.fn._lang = be(e))._abbr) : o.fn._lang._abbr
            }
            ,
            o.langData = function(e) {
                return e && e._lang && e._lang._abbr && (e = e._lang._abbr),
                be(e)
            }
            ,
            o.isMoment = function(e) {
                return e instanceof te || null != e && e.hasOwnProperty("_isAMomentObject")
            }
            ,
            o.isDuration = function(e) {
                return e instanceof ne
            }
            ,
            a = Z.length - 1; a >= 0; --a)
                fe(Z[a]);
            function Ie(e, t) {
                o.fn[e] = o.fn[e + "s"] = function(e) {
                    var n = this._isUTC ? "UTC" : "";
                    return null != e ? (this._d["set" + n + t](e),
                    o.updateOffset(this),
                    this) : this._d["get" + n + t]()
                }
            }
            for (o.normalizeUnits = function(e) {
                return ce(e)
            }
            ,
            o.invalid = function(e) {
                var t = o.utc(NaN);
                return null != e ? re(t._pf, e) : t._pf.userInvalidated = !0,
                t
            }
            ,
            o.parseZone = function(e) {
                return o(e).parseZone()
            }
            ,
            re(o.fn = te.prototype, {
                clone: function() {
                    return o(this)
                },
                valueOf: function() {
                    return +this._d + 6e4 * (this._offset || 0)
                },
                unix: function() {
                    return Math.floor(+this / 1e3)
                },
                toString: function() {
                    return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                },
                toDate: function() {
                    return this._offset ? new Date(+this) : this._d
                },
                toISOString: function() {
                    var e = o(this).utc();
                    return 0 < e.year() && e.year() <= 9999 ? we(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : we(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                },
                toArray: function() {
                    var e = this;
                    return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
                },
                isValid: function() {
                    return ve(this)
                },
                isDSTShifted: function() {
                    return !!this._a && (this.isValid() && ue(this._a, (this._isUTC ? o.utc(this._a) : o(this._a)).toArray()) > 0)
                },
                parsingFlags: function() {
                    return re({}, this._pf)
                },
                invalidAt: function() {
                    return this._pf.overflow
                },
                utc: function() {
                    return this.zone(0)
                },
                local: function() {
                    return this.zone(0),
                    this._isUTC = !1,
                    this
                },
                format: function(e) {
                    var t = we(this, e || o.defaultFormat);
                    return this.lang().postformat(t)
                },
                add: function(e, t) {
                    return ae(this, "string" == typeof e ? o.duration(+t, e) : o.duration(e, t), 1),
                    this
                },
                subtract: function(e, t) {
                    return ae(this, "string" == typeof e ? o.duration(+t, e) : o.duration(e, t), -1),
                    this
                },
                diff: function(e, t, n) {
                    var r, i, a = ye(e, this), s = 6e4 * (this.zone() - a.zone());
                    return "year" === (t = ce(t)) || "month" === t ? (r = 432e5 * (this.daysInMonth() + a.daysInMonth()),
                    i = 12 * (this.year() - a.year()) + (this.month() - a.month()),
                    i += (this - o(this).startOf("month") - (a - o(a).startOf("month"))) / r,
                    i -= 6e4 * (this.zone() - o(this).startOf("month").zone() - (a.zone() - o(a).startOf("month").zone())) / r,
                    "year" === t && (i /= 12)) : (r = this - a,
                    i = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - s) / 864e5 : "week" === t ? (r - s) / 6048e5 : r),
                    n ? i : ie(i)
                },
                from: function(e, t) {
                    return o.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!t)
                },
                fromNow: function(e) {
                    return this.from(o(), e)
                },
                calendar: function() {
                    var e = ye(o(), this).startOf("day")
                      , t = this.diff(e, "days", !0)
                      , n = t < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse";
                    return this.format(this.lang().calendar(n, this))
                },
                isLeapYear: function() {
                    return ge(this.year())
                },
                isDST: function() {
                    return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
                },
                day: function(e) {
                    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != e ? (e = Ce(e, this.lang()),
                    this.add({
                        d: e - t
                    })) : t
                },
                month: function(e) {
                    var t, n = this._isUTC ? "UTC" : "";
                    return null != e ? "string" == typeof e && "number" != typeof (e = this.lang().monthsParse(e)) ? this : (t = this.date(),
                    this.date(1),
                    this._d["set" + n + "Month"](e),
                    this.date(Math.min(t, this.daysInMonth())),
                    o.updateOffset(this),
                    this) : this._d["get" + n + "Month"]()
                },
                startOf: function(e) {
                    switch (e = ce(e)) {
                    case "year":
                        this.month(0);
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                    }
                    return "week" === e ? this.weekday(0) : "isoWeek" === e && this.isoWeekday(1),
                    this
                },
                endOf: function(e) {
                    return e = ce(e),
                    this.startOf(e).add("isoWeek" === e ? "week" : e, 1).subtract("ms", 1)
                },
                isAfter: function(e, t) {
                    return t = void 0 !== t ? t : "millisecond",
                    +this.clone().startOf(t) > +o(e).startOf(t)
                },
                isBefore: function(e, t) {
                    return t = void 0 !== t ? t : "millisecond",
                    +this.clone().startOf(t) < +o(e).startOf(t)
                },
                isSame: function(e, t) {
                    return t = t || "ms",
                    +this.clone().startOf(t) == +ye(e, this).startOf(t)
                },
                min: function(e) {
                    return (e = o.apply(null, arguments)) < this ? this : e
                },
                max: function(e) {
                    return (e = o.apply(null, arguments)) > this ? this : e
                },
                zone: function(e) {
                    var t = this._offset || 0;
                    return null == e ? this._isUTC ? t : this._d.getTimezoneOffset() : ("string" == typeof e && (e = Se(e)),
                    Math.abs(e) < 16 && (e *= 60),
                    this._offset = e,
                    this._isUTC = !0,
                    t !== e && ae(this, o.duration(t - e, "m"), 1, !0),
                    this)
                },
                zoneAbbr: function() {
                    return this._isUTC ? "UTC" : ""
                },
                zoneName: function() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                },
                parseZone: function() {
                    return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i),
                    this
                },
                hasAlignedHourOffset: function(e) {
                    return e = e ? o(e).zone() : 0,
                    (this.zone() - e) % 60 == 0
                },
                daysInMonth: function() {
                    return he(this.year(), this.month())
                },
                dayOfYear: function(e) {
                    var t = u((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
                    return null == e ? t : this.add("d", e - t)
                },
                quarter: function() {
                    return Math.ceil((this.month() + 1) / 3)
                },
                weekYear: function(e) {
                    var t = Ne(this, this.lang()._week.dow, this.lang()._week.doy).year;
                    return null == e ? t : this.add("y", e - t)
                },
                isoWeekYear: function(e) {
                    var t = Ne(this, 1, 4).year;
                    return null == e ? t : this.add("y", e - t)
                },
                week: function(e) {
                    var t = this.lang().week(this);
                    return null == e ? t : this.add("d", 7 * (e - t))
                },
                isoWeek: function(e) {
                    var t = Ne(this, 1, 4).week;
                    return null == e ? t : this.add("d", 7 * (e - t))
                },
                weekday: function(e) {
                    var t = (this.day() + 7 - this.lang()._week.dow) % 7;
                    return null == e ? t : this.add("d", e - t)
                },
                isoWeekday: function(e) {
                    return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
                },
                get: function(e) {
                    return this[e = ce(e)]()
                },
                set: function(e, t) {
                    return "function" == typeof this[e = ce(e)] && this[e](t),
                    this
                },
                lang: function(e) {
                    return e === i ? this._lang : (this._lang = be(e),
                    this)
                }
            }),
            a = 0; a < q.length; a++)
                Ie(q[a].toLowerCase().replace(/s$/, ""), q[a]);
            function je(e) {
                o.duration.fn[e] = function() {
                    return this._data[e]
                }
            }
            function Re(e, t) {
                o.duration.fn["as" + e] = function() {
                    return +this / t
                }
            }
            for (a in Ie("year", "FullYear"),
            o.fn.days = o.fn.day,
            o.fn.months = o.fn.month,
            o.fn.weeks = o.fn.week,
            o.fn.isoWeeks = o.fn.isoWeek,
            o.fn.toJSON = o.fn.toISOString,
            re(o.duration.fn = ne.prototype, {
                _bubble: function() {
                    var e, t, n, r, i = this._milliseconds, o = this._days, a = this._months, s = this._data;
                    s.milliseconds = i % 1e3,
                    e = ie(i / 1e3),
                    s.seconds = e % 60,
                    t = ie(e / 60),
                    s.minutes = t % 60,
                    n = ie(t / 60),
                    s.hours = n % 24,
                    o += ie(n / 24),
                    s.days = o % 30,
                    a += ie(o / 30),
                    s.months = a % 12,
                    r = ie(a / 12),
                    s.years = r
                },
                weeks: function() {
                    return ie(this.days() / 7)
                },
                valueOf: function() {
                    return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * de(this._months / 12)
                },
                humanize: function(e) {
                    var t, n, r, i, o, a, s, c, l, f = +this, d = (t = f,
                    n = !e,
                    r = this.lang(),
                    i = u(Math.abs(t) / 1e3),
                    o = u(i / 60),
                    a = u(o / 60),
                    s = u(a / 24),
                    c = u(s / 365),
                    (l = i < 45 && ["s", i] || 1 === o && ["m"] || o < 45 && ["mm", o] || 1 === a && ["h"] || a < 22 && ["hh", a] || 1 === s && ["d"] || s <= 25 && ["dd", s] || s <= 45 && ["M"] || s < 345 && ["MM", u(s / 30)] || 1 === c && ["y"] || ["yy", c])[2] = n,
                    l[3] = t > 0,
                    l[4] = r,
                    function(e, t, n, r, i) {
                        return i.relativeTime(t || 1, !!n, e, r)
                    }
                    .apply({}, l));
                    return e && (d = this.lang().pastFuture(f, d)),
                    this.lang().postformat(d)
                },
                add: function(e, t) {
                    var n = o.duration(e, t);
                    return this._milliseconds += n._milliseconds,
                    this._days += n._days,
                    this._months += n._months,
                    this._bubble(),
                    this
                },
                subtract: function(e, t) {
                    var n = o.duration(e, t);
                    return this._milliseconds -= n._milliseconds,
                    this._days -= n._days,
                    this._months -= n._months,
                    this._bubble(),
                    this
                },
                get: function(e) {
                    return this[(e = ce(e)).toLowerCase() + "s"]()
                },
                as: function(e) {
                    return this["as" + (e = ce(e)).charAt(0).toUpperCase() + e.slice(1) + "s"]()
                },
                lang: o.fn.lang,
                toIsoString: function() {
                    var e = Math.abs(this.years())
                      , t = Math.abs(this.months())
                      , n = Math.abs(this.days())
                      , r = Math.abs(this.hours())
                      , i = Math.abs(this.minutes())
                      , o = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                    return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (r || i || o ? "T" : "") + (r ? r + "H" : "") + (i ? i + "M" : "") + (o ? o + "S" : "") : "P0D"
                }
            }),
            B)
                B.hasOwnProperty(a) && (Re(a, B[a]),
                je(a.toLowerCase()));
            function Pe(e) {
                var t = !1
                  , n = o;
                "undefined" == typeof ender && (e ? (s.moment = function() {
                    return !t && console && console.warn && (t = !0,
                    console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")),
                    n.apply(null, arguments)
                }
                ,
                re(s.moment, n)) : s.moment = o)
            }
            Re("Weeks", 6048e5),
            o.duration.fn.asMonths = function() {
                return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
            }
            ,
            o.lang("en", {
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 === de(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            }),
            $ ? (e.exports = o,
            Pe(!0)) : (r = function(e, t, n) {
                return n.config && n.config() && !0 !== n.config().noGlobal && Pe(n.config().noGlobal === i),
                o
            }
            .call(t, n, t, e)) === i || (e.exports = r)
        }
        ).call(this)
    }
    ).call(this, n(79)(e))
}
, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        e.webpackPolyfill = 1),
        e
    }
}
, function(e, t, n) {
    var r = {
        "./nl": 81
    };
    function i(e) {
        var t = o(e);
        return n(t)
    }
    function o(e) {
        if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND",
            t
        }
        return r[e]
    }
    i.keys = function() {
        return Object.keys(r)
    }
    ,
    i.resolve = o,
    e.exports = i,
    i.id = 80
}
, function(e, t, n) {
    var r, i, o;
    i = [n(14)],
    void 0 === (o = "function" == typeof (r = function(e) {
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
          , n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
        return e.lang("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, r) {
                return /-MMM-/.test(r) ? n[e.month()] : t[e.month()]
            },
            weekdays: "Zondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrijdag_Zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        })
    }
    ) ? r.apply(t, i) : r) || (e.exports = o)
}
]);

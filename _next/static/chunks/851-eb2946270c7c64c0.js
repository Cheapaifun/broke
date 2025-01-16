"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [851], {
        9205: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return l
                }
            });
            var n = r(2265);
            let i = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                o = function() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return e.filter((t, e, r) => !!t && "" !== t.trim() && r.indexOf(t) === e).join(" ").trim()
                };
            var s = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            let a = (0, n.forwardRef)((t, e) => {
                    let {
                        color: r = "currentColor",
                        size: i = 24,
                        strokeWidth: a = 2,
                        absoluteStrokeWidth: l,
                        className: u = "",
                        children: c,
                        iconNode: h,
                        ...d
                    } = t;
                    return (0, n.createElement)("svg", {
                        ref: e,
                        ...s,
                        width: i,
                        height: i,
                        stroke: r,
                        strokeWidth: l ? 24 * Number(a) / Number(i) : a,
                        className: o("lucide", u),
                        ...d
                    }, [...h.map(t => {
                        let [e, r] = t;
                        return (0, n.createElement)(e, r)
                    }), ...Array.isArray(c) ? c : [c]])
                }),
                l = (t, e) => {
                    let r = (0, n.forwardRef)((r, s) => {
                        let {
                            className: l,
                            ...u
                        } = r;
                        return (0, n.createElement)(a, {
                            ref: s,
                            iconNode: e,
                            className: o("lucide-".concat(i(t)), l),
                            ...u
                        })
                    });
                    return r.displayName = "".concat(t), r
                }
        },
        1723: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return n
                }
            });
            let n = (0, r(9205).Z)("Clock", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["polyline", {
                    points: "12 6 12 12 16 14",
                    key: "68esgv"
                }]
            ])
        },
        2489: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return n
                }
            });
            let n = (0, r(9205).Z)("X", [
                ["path", {
                    d: "M18 6 6 18",
                    key: "1bl5f8"
                }],
                ["path", {
                    d: "m6 6 12 12",
                    key: "d8bk6v"
                }]
            ])
        },
        7648: function(t, e, r) {
            r.d(e, {
                default: function() {
                    return i.a
                }
            });
            var n = r(2972),
                i = r.n(n)
        },
        5449: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "addLocale", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r(8521);
            let n = function(t) {
                for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                return t
            };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        6958: function(t, e, r) {
            function n(t, e, r, n) {
                return !1
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r(8521), ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        2972: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return x
                }
            });
            let n = r(7043),
                i = r(7437),
                o = n._(r(2265)),
                s = r(5246),
                a = r(3552),
                l = r(7497),
                u = r(3987),
                c = r(5449),
                h = r(5523),
                d = r(1956),
                p = r(6081),
                f = r(6958),
                m = r(1634),
                g = r(4673),
                v = new Set;

            function y(t, e, r, n, i, o) {
                if ("undefined" != typeof window && (o || (0, a.isLocalURL)(e))) {
                    if (!n.bypassPrefetchedCheck) {
                        let i = e + "%" + r + "%" + (void 0 !== n.locale ? n.locale : "locale" in t ? t.locale : void 0);
                        if (v.has(i)) return;
                        v.add(i)
                    }(async () => o ? t.prefetch(e, i) : t.prefetch(e, r, n))().catch(t => {})
                }
            }

            function b(t) {
                return "string" == typeof t ? t : (0, l.formatUrl)(t)
            }
            let x = o.default.forwardRef(function(t, e) {
                let r, n;
                let {
                    href: l,
                    as: v,
                    children: x,
                    prefetch: w = null,
                    passHref: P,
                    replace: S,
                    shallow: T,
                    scroll: A,
                    locale: E,
                    onClick: k,
                    onMouseEnter: R,
                    onTouchStart: M,
                    legacyBehavior: C = !1,
                    ...j
                } = t;
                r = x, C && ("string" == typeof r || "number" == typeof r) && (r = (0, i.jsx)("a", {
                    children: r
                }));
                let D = o.default.useContext(h.RouterContext),
                    V = o.default.useContext(d.AppRouterContext),
                    O = null != D ? D : V,
                    L = !D,
                    F = !1 !== w,
                    B = null === w ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
                    {
                        href: N,
                        as: I
                    } = o.default.useMemo(() => {
                        if (!D) {
                            let t = b(l);
                            return {
                                href: t,
                                as: v ? b(v) : t
                            }
                        }
                        let [t, e] = (0, s.resolveHref)(D, l, !0);
                        return {
                            href: t,
                            as: v ? (0, s.resolveHref)(D, v) : e || t
                        }
                    }, [D, l, v]),
                    W = o.default.useRef(N),
                    U = o.default.useRef(I);
                C && (n = o.default.Children.only(r));
                let _ = C ? n && "object" == typeof n && n.ref : e,
                    [$, z, X] = (0, p.useIntersection)({
                        rootMargin: "200px"
                    }),
                    K = o.default.useCallback(t => {
                        (U.current !== I || W.current !== N) && (X(), U.current = I, W.current = N), $(t), _ && ("function" == typeof _ ? _(t) : "object" == typeof _ && (_.current = t))
                    }, [I, _, N, X, $]);
                o.default.useEffect(() => {
                    O && z && F && y(O, N, I, {
                        locale: E
                    }, {
                        kind: B
                    }, L)
                }, [I, N, z, E, F, null == D ? void 0 : D.locale, O, L, B]);
                let Y = {
                    ref: K,
                    onClick(t) {
                        C || "function" != typeof k || k(t), C && n.props && "function" == typeof n.props.onClick && n.props.onClick(t), O && !t.defaultPrevented && function(t, e, r, n, i, s, l, u, c) {
                            let {
                                nodeName: h
                            } = t.currentTarget;
                            if ("A" === h.toUpperCase() && (function(t) {
                                    let e = t.currentTarget.getAttribute("target");
                                    return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                                }(t) || !c && !(0, a.isLocalURL)(r))) return;
                            t.preventDefault();
                            let d = () => {
                                let t = null == l || l;
                                "beforePopState" in e ? e[i ? "replace" : "push"](r, n, {
                                    shallow: s,
                                    locale: u,
                                    scroll: t
                                }) : e[i ? "replace" : "push"](n || r, {
                                    scroll: t
                                })
                            };
                            c ? o.default.startTransition(d) : d()
                        }(t, O, N, I, S, T, A, E, L)
                    },
                    onMouseEnter(t) {
                        C || "function" != typeof R || R(t), C && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(t), O && (F || !L) && y(O, N, I, {
                            locale: E,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: B
                        }, L)
                    },
                    onTouchStart: function(t) {
                        C || "function" != typeof M || M(t), C && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(t), O && (F || !L) && y(O, N, I, {
                            locale: E,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: B
                        }, L)
                    }
                };
                if ((0, u.isAbsoluteUrl)(I)) Y.href = I;
                else if (!C || P || "a" === n.type && !("href" in n.props)) {
                    let t = void 0 !== E ? E : null == D ? void 0 : D.locale,
                        e = (null == D ? void 0 : D.isLocaleDomain) && (0, f.getDomainLocale)(I, t, null == D ? void 0 : D.locales, null == D ? void 0 : D.domainLocales);
                    Y.href = e || (0, m.addBasePath)((0, c.addLocale)(I, t, null == D ? void 0 : D.defaultLocale))
                }
                return C ? o.default.cloneElement(n, Y) : (0, i.jsx)("a", { ...j,
                    ...Y,
                    children: r
                })
            });
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        3515: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    cancelIdleCallback: function() {
                        return n
                    },
                    requestIdleCallback: function() {
                        return r
                    }
                });
            let r = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(t) {
                    let e = Date.now();
                    return self.setTimeout(function() {
                        t({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - e))
                            }
                        })
                    }, 1)
                },
                n = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(t) {
                    return clearTimeout(t)
                };
            ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        5246: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "resolveHref", {
                enumerable: !0,
                get: function() {
                    return h
                }
            });
            let n = r(8637),
                i = r(7497),
                o = r(7053),
                s = r(3987),
                a = r(8521),
                l = r(3552),
                u = r(6279),
                c = r(7205);

            function h(t, e, r) {
                let h;
                let d = "string" == typeof e ? e : (0, i.formatWithValidation)(e),
                    p = d.match(/^[a-zA-Z]{1,}:\/\//),
                    f = p ? d.slice(p[0].length) : d;
                if ((f.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
                    console.error("Invalid href '" + d + "' passed to next/router in page: '" + t.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
                    let e = (0, s.normalizeRepeatedSlashes)(f);
                    d = (p ? p[0] : "") + e
                }
                if (!(0, l.isLocalURL)(d)) return r ? [d] : d;
                try {
                    h = new URL(d.startsWith("#") ? t.asPath : t.pathname, "http://n")
                } catch (t) {
                    h = new URL("/", "http://n")
                }
                try {
                    let t = new URL(d, h);
                    t.pathname = (0, a.normalizePathTrailingSlash)(t.pathname);
                    let e = "";
                    if ((0, u.isDynamicRoute)(t.pathname) && t.searchParams && r) {
                        let r = (0, n.searchParamsToUrlQuery)(t.searchParams),
                            {
                                result: s,
                                params: a
                            } = (0, c.interpolateAs)(t.pathname, t.pathname, r);
                        s && (e = (0, i.formatWithValidation)({
                            pathname: s,
                            hash: t.hash,
                            query: (0, o.omit)(r, a)
                        }))
                    }
                    let s = t.origin === h.origin ? t.href.slice(t.origin.length) : t.href;
                    return r ? [s, e || s] : s
                } catch (t) {
                    return r ? [d] : d
                }
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        6081: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let n = r(2265),
                i = r(3515),
                o = "function" == typeof IntersectionObserver,
                s = new Map,
                a = [];

            function l(t) {
                let {
                    rootRef: e,
                    rootMargin: r,
                    disabled: l
                } = t, u = l || !o, [c, h] = (0, n.useState)(!1), d = (0, n.useRef)(null), p = (0, n.useCallback)(t => {
                    d.current = t
                }, []);
                return (0, n.useEffect)(() => {
                    if (o) {
                        if (u || c) return;
                        let t = d.current;
                        if (t && t.tagName) return function(t, e, r) {
                            let {
                                id: n,
                                observer: i,
                                elements: o
                            } = function(t) {
                                let e;
                                let r = {
                                        root: t.root || null,
                                        margin: t.rootMargin || ""
                                    },
                                    n = a.find(t => t.root === r.root && t.margin === r.margin);
                                if (n && (e = s.get(n))) return e;
                                let i = new Map;
                                return e = {
                                    id: r,
                                    observer: new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            let e = i.get(t.target),
                                                r = t.isIntersecting || t.intersectionRatio > 0;
                                            e && r && e(r)
                                        })
                                    }, t),
                                    elements: i
                                }, a.push(r), s.set(r, e), e
                            }(r);
                            return o.set(t, e), i.observe(t),
                                function() {
                                    if (o.delete(t), i.unobserve(t), 0 === o.size) {
                                        i.disconnect(), s.delete(n);
                                        let t = a.findIndex(t => t.root === n.root && t.margin === n.margin);
                                        t > -1 && a.splice(t, 1)
                                    }
                                }
                        }(t, t => t && h(t), {
                            root: null == e ? void 0 : e.current,
                            rootMargin: r
                        })
                    } else if (!c) {
                        let t = (0, i.requestIdleCallback)(() => h(!0));
                        return () => (0, i.cancelIdleCallback)(t)
                    }
                }, [u, r, e, c, d.current]), [p, c, (0, n.useCallback)(() => {
                    h(!1)
                }, [])]
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        42: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "escapeStringRegexp", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = /[|\\{}()[\]^$+*?.-]/,
                n = /[|\\{}()[\]^$+*?.-]/g;

            function i(t) {
                return r.test(t) ? t.replace(n, "\\$&") : t
            }
        },
        5523: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = r(7043)._(r(2265)).default.createContext(null)
        },
        7497: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    formatUrl: function() {
                        return o
                    },
                    formatWithValidation: function() {
                        return a
                    },
                    urlObjectKeys: function() {
                        return s
                    }
                });
            let n = r(3099)._(r(8637)),
                i = /https?|ftp|gopher|file/;

            function o(t) {
                let {
                    auth: e,
                    hostname: r
                } = t, o = t.protocol || "", s = t.pathname || "", a = t.hash || "", l = t.query || "", u = !1;
                e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : "", t.host ? u = e + t.host : r && (u = e + (~r.indexOf(":") ? "[" + r + "]" : r), t.port && (u += ":" + t.port)), l && "object" == typeof l && (l = String(n.urlQueryToSearchParams(l)));
                let c = t.search || l && "?" + l || "";
                return o && !o.endsWith(":") && (o += ":"), t.slashes || (!o || i.test(o)) && !1 !== u ? (u = "//" + (u || ""), s && "/" !== s[0] && (s = "/" + s)) : u || (u = ""), a && "#" !== a[0] && (a = "#" + a), c && "?" !== c[0] && (c = "?" + c), "" + o + u + (s = s.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace("#", "%23")) + a
            }
            let s = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

            function a(t) {
                return o(t)
            }
        },
        6279: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    getSortedRoutes: function() {
                        return n.getSortedRoutes
                    },
                    isDynamicRoute: function() {
                        return i.isDynamicRoute
                    }
                });
            let n = r(4777),
                i = r(8104)
        },
        7205: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "interpolateAs", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(4199),
                i = r(9964);

            function o(t, e, r) {
                let o = "",
                    s = (0, i.getRouteRegex)(t),
                    a = s.groups,
                    l = (e !== t ? (0, n.getRouteMatcher)(s)(e) : "") || r;
                o = t;
                let u = Object.keys(a);
                return u.every(t => {
                    let e = l[t] || "",
                        {
                            repeat: r,
                            optional: n
                        } = a[t],
                        i = "[" + (r ? "..." : "") + t + "]";
                    return n && (i = (e ? "" : "/") + "[" + i + "]"), r && !Array.isArray(e) && (e = [e]), (n || t in l) && (o = o.replace(i, r ? e.map(t => encodeURIComponent(t)).join("/") : encodeURIComponent(e)) || "/")
                }) || (o = ""), {
                    params: u,
                    result: o
                }
            }
        },
        8104: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isDynamicRoute", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(1182),
                i = /\/\[[^/]+?\](?=\/|$)/;

            function o(t) {
                return (0, n.isInterceptionRouteAppPath)(t) && (t = (0, n.extractInterceptionRouteInformation)(t).interceptedRoute), i.test(t)
            }
        },
        3552: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "isLocalURL", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(3987),
                i = r(1283);

            function o(t) {
                if (!(0, n.isAbsoluteUrl)(t)) return !0;
                try {
                    let e = (0, n.getLocationOrigin)(),
                        r = new URL(t, e);
                    return r.origin === e && (0, i.hasBasePath)(r.pathname)
                } catch (t) {
                    return !1
                }
            }
        },
        7053: function(t, e) {
            function r(t, e) {
                let r = {};
                return Object.keys(t).forEach(n => {
                    e.includes(n) || (r[n] = t[n])
                }), r
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "omit", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        8637: function(t, e) {
            function r(t) {
                let e = {};
                return t.forEach((t, r) => {
                    void 0 === e[r] ? e[r] = t : Array.isArray(e[r]) ? e[r].push(t) : e[r] = [e[r], t]
                }), e
            }

            function n(t) {
                return "string" != typeof t && ("number" != typeof t || isNaN(t)) && "boolean" != typeof t ? "" : String(t)
            }

            function i(t) {
                let e = new URLSearchParams;
                return Object.entries(t).forEach(t => {
                    let [r, i] = t;
                    Array.isArray(i) ? i.forEach(t => e.append(r, n(t))) : e.set(r, n(i))
                }), e
            }

            function o(t) {
                for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                return r.forEach(e => {
                    Array.from(e.keys()).forEach(e => t.delete(e)), e.forEach((e, r) => t.append(r, e))
                }), t
            }
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    assign: function() {
                        return o
                    },
                    searchParamsToUrlQuery: function() {
                        return r
                    },
                    urlQueryToSearchParams: function() {
                        return i
                    }
                })
        },
        4199: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getRouteMatcher", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let n = r(3987);

            function i(t) {
                let {
                    re: e,
                    groups: r
                } = t;
                return t => {
                    let i = e.exec(t);
                    if (!i) return !1;
                    let o = t => {
                            try {
                                return decodeURIComponent(t)
                            } catch (t) {
                                throw new n.DecodeError("failed to decode param")
                            }
                        },
                        s = {};
                    return Object.keys(r).forEach(t => {
                        let e = r[t],
                            n = i[e.pos];
                        void 0 !== n && (s[t] = ~n.indexOf("/") ? n.split("/").map(t => o(t)) : e.repeat ? [o(n)] : o(n))
                    }), s
                }
            }
        },
        9964: function(t, e, r) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    getNamedMiddlewareRegex: function() {
                        return d
                    },
                    getNamedRouteRegex: function() {
                        return h
                    },
                    getRouteRegex: function() {
                        return l
                    },
                    parseParameter: function() {
                        return s
                    }
                });
            let n = r(1182),
                i = r(42),
                o = r(6674);

            function s(t) {
                let e = t.startsWith("[") && t.endsWith("]");
                e && (t = t.slice(1, -1));
                let r = t.startsWith("...");
                return r && (t = t.slice(3)), {
                    key: t,
                    repeat: r,
                    optional: e
                }
            }

            function a(t) {
                let e = (0, o.removeTrailingSlash)(t).slice(1).split("/"),
                    r = {},
                    a = 1;
                return {
                    parameterizedRoute: e.map(t => {
                        let e = n.INTERCEPTION_ROUTE_MARKERS.find(e => t.startsWith(e)),
                            o = t.match(/\[((?:\[.*\])|.+)\]/);
                        if (e && o) {
                            let {
                                key: t,
                                optional: n,
                                repeat: l
                            } = s(o[1]);
                            return r[t] = {
                                pos: a++,
                                repeat: l,
                                optional: n
                            }, "/" + (0, i.escapeStringRegexp)(e) + "([^/]+?)"
                        }
                        if (!o) return "/" + (0, i.escapeStringRegexp)(t); {
                            let {
                                key: t,
                                repeat: e,
                                optional: n
                            } = s(o[1]);
                            return r[t] = {
                                pos: a++,
                                repeat: e,
                                optional: n
                            }, e ? n ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
                        }
                    }).join(""),
                    groups: r
                }
            }

            function l(t) {
                let {
                    parameterizedRoute: e,
                    groups: r
                } = a(t);
                return {
                    re: RegExp("^" + e + "(?:/)?$"),
                    groups: r
                }
            }

            function u(t) {
                let {
                    interceptionMarker: e,
                    getSafeRouteKey: r,
                    segment: n,
                    routeKeys: o,
                    keyPrefix: a
                } = t, {
                    key: l,
                    optional: u,
                    repeat: c
                } = s(n), h = l.replace(/\W/g, "");
                a && (h = "" + a + h);
                let d = !1;
                (0 === h.length || h.length > 30) && (d = !0), isNaN(parseInt(h.slice(0, 1))) || (d = !0), d && (h = r()), a ? o[h] = "" + a + l : o[h] = l;
                let p = e ? (0, i.escapeStringRegexp)(e) : "";
                return c ? u ? "(?:/" + p + "(?<" + h + ">.+?))?" : "/" + p + "(?<" + h + ">.+?)" : "/" + p + "(?<" + h + ">[^/]+?)"
            }

            function c(t, e) {
                let r;
                let s = (0, o.removeTrailingSlash)(t).slice(1).split("/"),
                    a = (r = 0, () => {
                        let t = "",
                            e = ++r;
                        for (; e > 0;) t += String.fromCharCode(97 + (e - 1) % 26), e = Math.floor((e - 1) / 26);
                        return t
                    }),
                    l = {};
                return {
                    namedParameterizedRoute: s.map(t => {
                        let r = n.INTERCEPTION_ROUTE_MARKERS.some(e => t.startsWith(e)),
                            o = t.match(/\[((?:\[.*\])|.+)\]/);
                        if (r && o) {
                            let [r] = t.split(o[0]);
                            return u({
                                getSafeRouteKey: a,
                                interceptionMarker: r,
                                segment: o[1],
                                routeKeys: l,
                                keyPrefix: e ? "nxtI" : void 0
                            })
                        }
                        return o ? u({
                            getSafeRouteKey: a,
                            segment: o[1],
                            routeKeys: l,
                            keyPrefix: e ? "nxtP" : void 0
                        }) : "/" + (0, i.escapeStringRegexp)(t)
                    }).join(""),
                    routeKeys: l
                }
            }

            function h(t, e) {
                let r = c(t, e);
                return { ...l(t),
                    namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
                    routeKeys: r.routeKeys
                }
            }

            function d(t, e) {
                let {
                    parameterizedRoute: r
                } = a(t), {
                    catchAll: n = !0
                } = e;
                if ("/" === r) return {
                    namedRegex: "^/" + (n ? ".*" : "") + "$"
                };
                let {
                    namedParameterizedRoute: i
                } = c(t, !1);
                return {
                    namedRegex: "^" + i + (n ? "(?:(/.*)?)" : "") + "$"
                }
            }
        },
        4777: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "getSortedRoutes", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            class r {
                insert(t) {
                    this._insert(t.split("/").filter(Boolean), [], !1)
                }
                smoosh() {
                    return this._smoosh()
                }
                _smoosh(t) {
                    void 0 === t && (t = "/");
                    let e = [...this.children.keys()].sort();
                    null !== this.slugName && e.splice(e.indexOf("[]"), 1), null !== this.restSlugName && e.splice(e.indexOf("[...]"), 1), null !== this.optionalRestSlugName && e.splice(e.indexOf("[[...]]"), 1);
                    let r = e.map(e => this.children.get(e)._smoosh("" + t + e + "/")).reduce((t, e) => [...t, ...e], []);
                    if (null !== this.slugName && r.push(...this.children.get("[]")._smoosh(t + "[" + this.slugName + "]/")), !this.placeholder) {
                        let e = "/" === t ? "/" : t.slice(0, -1);
                        if (null != this.optionalRestSlugName) throw Error('You cannot define a route with the same specificity as a optional catch-all route ("' + e + '" and "' + e + "[[..." + this.optionalRestSlugName + ']]").');
                        r.unshift(e)
                    }
                    return null !== this.restSlugName && r.push(...this.children.get("[...]")._smoosh(t + "[..." + this.restSlugName + "]/")), null !== this.optionalRestSlugName && r.push(...this.children.get("[[...]]")._smoosh(t + "[[..." + this.optionalRestSlugName + "]]/")), r
                }
                _insert(t, e, n) {
                    if (0 === t.length) {
                        this.placeholder = !1;
                        return
                    }
                    if (n) throw Error("Catch-all must be the last part of the URL.");
                    let i = t[0];
                    if (i.startsWith("[") && i.endsWith("]")) {
                        let r = i.slice(1, -1),
                            s = !1;
                        if (r.startsWith("[") && r.endsWith("]") && (r = r.slice(1, -1), s = !0), r.startsWith("...") && (r = r.substring(3), n = !0), r.startsWith("[") || r.endsWith("]")) throw Error("Segment names may not start or end with extra brackets ('" + r + "').");
                        if (r.startsWith(".")) throw Error("Segment names may not start with erroneous periods ('" + r + "').");

                        function o(t, r) {
                            if (null !== t && t !== r) throw Error("You cannot use different slug names for the same dynamic path ('" + t + "' !== '" + r + "').");
                            e.forEach(t => {
                                if (t === r) throw Error('You cannot have the same slug name "' + r + '" repeat within a single dynamic path');
                                if (t.replace(/\W/g, "") === i.replace(/\W/g, "")) throw Error('You cannot have the slug names "' + t + '" and "' + r + '" differ only by non-word symbols within a single dynamic path')
                            }), e.push(r)
                        }
                        if (n) {
                            if (s) {
                                if (null != this.restSlugName) throw Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + t[0] + '" ).');
                                o(this.optionalRestSlugName, r), this.optionalRestSlugName = r, i = "[[...]]"
                            } else {
                                if (null != this.optionalRestSlugName) throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + t[0] + '").');
                                o(this.restSlugName, r), this.restSlugName = r, i = "[...]"
                            }
                        } else {
                            if (s) throw Error('Optional route parameters are not yet supported ("' + t[0] + '").');
                            o(this.slugName, r), this.slugName = r, i = "[]"
                        }
                    }
                    this.children.has(i) || this.children.set(i, new r), this.children.get(i)._insert(t.slice(1), e, n)
                }
                constructor() {
                    this.placeholder = !0, this.children = new Map, this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null
                }
            }

            function n(t) {
                let e = new r;
                return t.forEach(t => e.insert(t)), e.smoosh()
            }
        },
        3987: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    DecodeError: function() {
                        return f
                    },
                    MiddlewareNotFoundError: function() {
                        return y
                    },
                    MissingStaticPage: function() {
                        return v
                    },
                    NormalizeError: function() {
                        return m
                    },
                    PageNotFoundError: function() {
                        return g
                    },
                    SP: function() {
                        return d
                    },
                    ST: function() {
                        return p
                    },
                    WEB_VITALS: function() {
                        return r
                    },
                    execOnce: function() {
                        return n
                    },
                    getDisplayName: function() {
                        return l
                    },
                    getLocationOrigin: function() {
                        return s
                    },
                    getURL: function() {
                        return a
                    },
                    isAbsoluteUrl: function() {
                        return o
                    },
                    isResSent: function() {
                        return u
                    },
                    loadGetInitialProps: function() {
                        return h
                    },
                    normalizeRepeatedSlashes: function() {
                        return c
                    },
                    stringifyError: function() {
                        return b
                    }
                });
            let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

            function n(t) {
                let e, r = !1;
                return function() {
                    for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return r || (r = !0, e = t(...i)), e
                }
            }
            let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                o = t => i.test(t);

            function s() {
                let {
                    protocol: t,
                    hostname: e,
                    port: r
                } = window.location;
                return t + "//" + e + (r ? ":" + r : "")
            }

            function a() {
                let {
                    href: t
                } = window.location, e = s();
                return t.substring(e.length)
            }

            function l(t) {
                return "string" == typeof t ? t : t.displayName || t.name || "Unknown"
            }

            function u(t) {
                return t.finished || t.headersSent
            }

            function c(t) {
                let e = t.split("?");
                return e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (e[1] ? "?" + e.slice(1).join("?") : "")
            }
            async function h(t, e) {
                let r = e.res || e.ctx && e.ctx.res;
                if (!t.getInitialProps) return e.ctx && e.Component ? {
                    pageProps: await h(e.Component, e.ctx)
                } : {};
                let n = await t.getInitialProps(e);
                if (r && u(r)) return n;
                if (!n) throw Error('"' + l(t) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.');
                return n
            }
            let d = "undefined" != typeof performance,
                p = d && ["mark", "measure", "getEntriesByName"].every(t => "function" == typeof performance[t]);
            class f extends Error {}
            class m extends Error {}
            class g extends Error {
                constructor(t) {
                    super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + t
                }
            }
            class v extends Error {
                constructor(t, e) {
                    super(), this.message = "Failed to load static file for page: " + t + " " + e
                }
            }
            class y extends Error {
                constructor() {
                    super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
                }
            }

            function b(t) {
                return JSON.stringify({
                    message: t.message,
                    stack: t.stack
                })
            }
        },
        5293: function(t, e, r) {
            r.d(e, {
                g7: function() {
                    return s
                }
            });
            var n = r(2265);

            function i(t, e) {
                if ("function" == typeof t) return t(e);
                null != t && (t.current = e)
            }
            var o = r(7437),
                s = n.forwardRef((t, e) => {
                    let {
                        children: r,
                        ...i
                    } = t, s = n.Children.toArray(r), l = s.find(u);
                    if (l) {
                        let t = l.props.children,
                            r = s.map(e => e !== l ? e : n.Children.count(t) > 1 ? n.Children.only(null) : n.isValidElement(t) ? t.props.children : null);
                        return (0, o.jsx)(a, { ...i,
                            ref: e,
                            children: n.isValidElement(t) ? n.cloneElement(t, void 0, r) : null
                        })
                    }
                    return (0, o.jsx)(a, { ...i,
                        ref: e,
                        children: r
                    })
                });
            s.displayName = "Slot";
            var a = n.forwardRef((t, e) => {
                let {
                    children: r,
                    ...o
                } = t;
                if (n.isValidElement(r)) {
                    let t, s;
                    let a = (t = Object.getOwnPropertyDescriptor(r.props, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning ? r.ref : (t = Object.getOwnPropertyDescriptor(r, "ref") ? .get) && "isReactWarning" in t && t.isReactWarning ? r.props.ref : r.props.ref || r.ref;
                    return n.cloneElement(r, { ... function(t, e) {
                            let r = { ...e
                            };
                            for (let n in e) {
                                let i = t[n],
                                    o = e[n];
                                /^on[A-Z]/.test(n) ? i && o ? r[n] = (...t) => {
                                    o(...t), i(...t)
                                } : i && (r[n] = i) : "style" === n ? r[n] = { ...i,
                                    ...o
                                } : "className" === n && (r[n] = [i, o].filter(Boolean).join(" "))
                            }
                            return { ...t,
                                ...r
                            }
                        }(o, r.props),
                        ref: e ? function(...t) {
                            return e => {
                                let r = !1,
                                    n = t.map(t => {
                                        let n = i(t, e);
                                        return r || "function" != typeof n || (r = !0), n
                                    });
                                if (r) return () => {
                                    for (let e = 0; e < n.length; e++) {
                                        let r = n[e];
                                        "function" == typeof r ? r() : i(t[e], null)
                                    }
                                }
                            }
                        }(e, a) : a
                    })
                }
                return n.Children.count(r) > 1 ? n.Children.only(null) : null
            });
            a.displayName = "SlotClone";
            var l = ({
                children: t
            }) => (0, o.jsx)(o.Fragment, {
                children: t
            });

            function u(t) {
                return n.isValidElement(t) && t.type === l
            }
        },
        535: function(t, e, r) {
            r.d(e, {
                j: function() {
                    return s
                }
            });
            var n = r(1994);
            let i = t => "boolean" == typeof t ? `${t}` : 0 === t ? "0" : t,
                o = n.W,
                s = (t, e) => r => {
                    var n;
                    if ((null == e ? void 0 : e.variants) == null) return o(t, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
                    let {
                        variants: s,
                        defaultVariants: a
                    } = e, l = Object.keys(s).map(t => {
                        let e = null == r ? void 0 : r[t],
                            n = null == a ? void 0 : a[t];
                        if (null === e) return null;
                        let o = i(e) || i(n);
                        return s[t][o]
                    }), u = r && Object.entries(r).reduce((t, e) => {
                        let [r, n] = e;
                        return void 0 === n || (t[r] = n), t
                    }, {});
                    return o(t, l, null == e ? void 0 : null === (n = e.compoundVariants) || void 0 === n ? void 0 : n.reduce((t, e) => {
                        let {
                            class: r,
                            className: n,
                            ...i
                        } = e;
                        return Object.entries(i).every(t => {
                            let [e, r] = t;
                            return Array.isArray(r) ? r.includes({ ...a,
                                ...u
                            }[e]) : ({ ...a,
                                ...u
                            })[e] === r
                        }) ? [...t, r, n] : t
                    }, []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
                }
        },
        1994: function(t, e, r) {
            r.d(e, {
                W: function() {
                    return n
                }
            });

            function n() {
                for (var t, e, r = 0, n = "", i = arguments.length; r < i; r++)(t = arguments[r]) && (e = function t(e) {
                    var r, n, i = "";
                    if ("string" == typeof e || "number" == typeof e) i += e;
                    else if ("object" == typeof e) {
                        if (Array.isArray(e)) {
                            var o = e.length;
                            for (r = 0; r < o; r++) e[r] && (n = t(e[r])) && (i && (i += " "), i += n)
                        } else
                            for (n in e) e[n] && (i && (i += " "), i += n)
                    }
                    return i
                }(t)) && (n && (n += " "), n += e);
                return n
            }
        },
        9653: function(t, e, r) {
            r.d(e, {
                _: function() {
                    return c
                }
            });
            var n = r(2035),
                i = r(8771),
                o = r(5647);

            function s(t, e) {
                [...e].reverse().forEach(r => {
                    let n = t.getVariant(r);
                    n && (0, i.C)(t, n), t.variantChildren && t.variantChildren.forEach(t => {
                        s(t, e)
                    })
                })
            }

            function a() {
                let t = !1,
                    e = new Set,
                    r = {
                        subscribe: t => (e.add(t), () => void e.delete(t)),
                        start(r, i) {
                            (0, n.k)(t, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
                            let s = [];
                            return e.forEach(t => {
                                s.push((0, o.d)(t, r, {
                                    transitionOverride: i
                                }))
                            }), Promise.all(s)
                        },
                        set: r => ((0, n.k)(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), e.forEach(t => {
                            Array.isArray(r) ? s(t, r) : "string" == typeof r ? s(t, [r]) : (0, i.C)(t, r)
                        })),
                        stop() {
                            e.forEach(t => {
                                ! function(t) {
                                    t.values.forEach(t => t.stop())
                                }(t)
                            })
                        },
                        mount: () => (t = !0, () => {
                            t = !1, r.stop()
                        })
                    };
                return r
            }
            var l = r(3576),
                u = r(1534);
            let c = function() {
                let t = (0, l.h)(a);
                return (0, u.L)(t.mount, []), t
            }
        },
        821: function(t, e, r) {
            r.d(e, {
                v: function() {
                    return tE
                }
            });
            var n = r(5699),
                i = r(9711),
                o = r(5414),
                s = r(4118);
            let a = {
                current: !1
            };
            var l = r(6277);
            let u = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;

            function c(t, e, r, n) {
                if (t === e && r === n) return l.Z;
                let i = e => (function(t, e, r, n, i) {
                    let o, s;
                    let a = 0;
                    do(o = u(s = e + (r - e) / 2, n, i) - t) > 0 ? r = s : e = s; while (Math.abs(o) > 1e-7 && ++a < 12);
                    return s
                })(e, 0, 1, t, r);
                return t => 0 === t || 1 === t ? t : u(i(t), e, n)
            }
            var h = r(7457),
                d = r(3627);
            let p = c(.33, 1.53, .69, .99),
                f = (0, d.M)(p),
                m = (0, h.o)(f),
                g = t => (t *= 2) < 1 ? .5 * f(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
            var v = r(6378),
                y = r(4238),
                b = r(504),
                x = r(9545),
                w = r(2035),
                P = r(3206);
            let S = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (P.P.test(t) || "0" === t) && !t.startsWith("url(")),
                T = t => null !== t;

            function A(t, {
                repeat: e,
                repeatType: r = "loop"
            }, n) {
                let i = t.filter(T),
                    o = e && "loop" !== r && e % 2 == 1 ? 0 : i.length - 1;
                return o && void 0 !== n ? n : i[o]
            }
            class E {
                constructor({
                    autoplay: t = !0,
                    delay: e = 0,
                    type: r = "keyframes",
                    repeat: n = 0,
                    repeatDelay: i = 0,
                    repeatType: o = "loop",
                    ...s
                }) {
                    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = b.X.now(), this.options = {
                        autoplay: t,
                        delay: e,
                        type: r,
                        repeat: n,
                        repeatDelay: i,
                        repeatType: o,
                        ...s
                    }, this.updateFinishedPromise()
                }
                calcStartTime() {
                    return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
                }
                get resolved() {
                    return this._resolved || this.hasAttemptedResolve || (0, x.m)(), this._resolved
                }
                onKeyframesResolved(t, e) {
                    this.resolvedAt = b.X.now(), this.hasAttemptedResolve = !0;
                    let {
                        name: r,
                        type: i,
                        velocity: o,
                        delay: s,
                        onComplete: l,
                        onUpdate: u,
                        isGenerator: c
                    } = this.options;
                    if (!c && ! function(t, e, r, i) {
                            let o = t[0];
                            if (null === o) return !1;
                            if ("display" === e || "visibility" === e) return !0;
                            let s = t[t.length - 1],
                                a = S(o, e),
                                l = S(s, e);
                            return (0, w.K)(a === l, `You are trying to animate ${e} from "${o}" to "${s}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${s} via the \`style\` property.`), !!a && !!l && (function(t) {
                                let e = t[0];
                                if (1 === t.length) return !0;
                                for (let r = 0; r < t.length; r++)
                                    if (t[r] !== e) return !0
                            }(t) || ("spring" === r || (0, n.xD)(r)) && i)
                        }(t, r, i, o)) {
                        if (a.current || !s) {
                            null == u || u(A(t, this.options, e)), null == l || l(), this.resolveFinishedPromise();
                            return
                        }
                        this.options.duration = 0
                    }
                    let h = this.initPlayback(t, e);
                    !1 !== h && (this._resolved = {
                        keyframes: t,
                        finalKeyframe: e,
                        ...h
                    }, this.onPostResolved())
                }
                onPostResolved() {}
                then(t, e) {
                    return this.currentFinishedPromise.then(t, e)
                }
                flatten() {
                    this.options.type = "keyframes", this.options.ease = "linear"
                }
                updateFinishedPromise() {
                    this.currentFinishedPromise = new Promise(t => {
                        this.resolveFinishedPromise = t
                    })
                }
            }
            var k = r(9111),
                R = r(6781);

            function M(t, e, r) {
                return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? t + (e - t) * 6 * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
            }
            var C = r(7325),
                j = r(8859),
                D = r(2943);

            function V(t, e) {
                return r => r > 0 ? e : t
            }
            let O = (t, e, r) => {
                    let n = t * t,
                        i = r * (e * e - n) + n;
                    return i < 0 ? 0 : Math.sqrt(i)
                },
                L = [C.$, j.m, D.J],
                F = t => L.find(e => e.test(t));

            function B(t) {
                let e = F(t);
                if ((0, w.K)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e) return !1;
                let r = e.parse(t);
                return e === D.J && (r = function({
                    hue: t,
                    saturation: e,
                    lightness: r,
                    alpha: n
                }) {
                    t /= 360, r /= 100;
                    let i = 0,
                        o = 0,
                        s = 0;
                    if (e /= 100) {
                        let n = r < .5 ? r * (1 + e) : r + e - r * e,
                            a = 2 * r - n;
                        i = M(a, n, t + 1 / 3), o = M(a, n, t), s = M(a, n, t - 1 / 3)
                    } else i = o = s = r;
                    return {
                        red: Math.round(255 * i),
                        green: Math.round(255 * o),
                        blue: Math.round(255 * s),
                        alpha: n
                    }
                }(r)), r
            }
            let N = (t, e) => {
                let r = B(t),
                    n = B(e);
                if (!r || !n) return V(t, e);
                let i = { ...r
                };
                return t => (i.red = O(r.red, n.red, t), i.green = O(r.green, n.green, t), i.blue = O(r.blue, n.blue, t), i.alpha = (0, R.t)(r.alpha, n.alpha, t), j.m.transform(i))
            };
            var I = r(332),
                W = r(3964),
                U = r(7249);
            let _ = new Set(["none", "hidden"]);

            function $(t, e) {
                return r => (0, R.t)(t, e, r)
            }

            function z(t) {
                return "number" == typeof t ? $ : "string" == typeof t ? (0, U.t)(t) ? V : W.$.test(t) ? N : Y : Array.isArray(t) ? X : "object" == typeof t ? W.$.test(t) ? N : K : V
            }

            function X(t, e) {
                let r = [...t],
                    n = r.length,
                    i = t.map((t, r) => z(t)(t, e[r]));
                return t => {
                    for (let e = 0; e < n; e++) r[e] = i[e](t);
                    return r
                }
            }

            function K(t, e) {
                let r = { ...t,
                        ...e
                    },
                    n = {};
                for (let i in r) void 0 !== t[i] && void 0 !== e[i] && (n[i] = z(t[i])(t[i], e[i]));
                return t => {
                    for (let e in n) r[e] = n[e](t);
                    return r
                }
            }
            let Y = (t, e) => {
                let r = P.P.createTransformer(e),
                    n = (0, P.V)(t),
                    i = (0, P.V)(e);
                return n.indexes.var.length === i.indexes.var.length && n.indexes.color.length === i.indexes.color.length && n.indexes.number.length >= i.indexes.number.length ? _.has(t) && !i.values.length || _.has(e) && !n.values.length ? _.has(t) ? r => r <= 0 ? t : e : r => r >= 1 ? e : t : (0, I.z)(X(function(t, e) {
                    var r;
                    let n = [],
                        i = {
                            color: 0,
                            var: 0,
                            number: 0
                        };
                    for (let o = 0; o < e.values.length; o++) {
                        let s = e.types[o],
                            a = t.indexes[s][i[s]],
                            l = null !== (r = t.values[a]) && void 0 !== r ? r : 0;
                        n[o] = l, i[s]++
                    }
                    return n
                }(n, i), i.values), r) : ((0, w.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), V(t, e))
            };

            function Z(t, e, r) {
                return "number" == typeof t && "number" == typeof e && "number" == typeof r ? (0, R.t)(t, e, r) : z(t)(t, e)
            }
            var q = r(4438);

            function G(t, e, r) {
                let n = Math.max(e - 5, 0);
                return (0, q.R)(r - t(n), e - n)
            }
            let H = {
                stiffness: 100,
                damping: 10,
                mass: 1,
                velocity: 0,
                duration: 800,
                bounce: .3,
                visualDuration: .3,
                restSpeed: {
                    granular: .01,
                    default: 2
                },
                restDelta: {
                    granular: .005,
                    default: .5
                },
                minDuration: .01,
                maxDuration: 10,
                minDamping: .05,
                maxDamping: 1
            };

            function J(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let Q = ["duration", "bounce"],
                tt = ["stiffness", "damping", "mass"];

            function te(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function tr(t = H.visualDuration, e = H.bounce) {
                let r;
                let o = "object" != typeof t ? {
                        visualDuration: t,
                        keyframes: [0, 1],
                        bounce: e
                    } : t,
                    {
                        restSpeed: s,
                        restDelta: a
                    } = o,
                    l = o.keyframes[0],
                    u = o.keyframes[o.keyframes.length - 1],
                    c = {
                        done: !1,
                        value: l
                    },
                    {
                        stiffness: h,
                        damping: d,
                        mass: p,
                        duration: f,
                        velocity: m,
                        isResolvedFromDuration: g
                    } = function(t) {
                        let e = {
                            velocity: H.velocity,
                            stiffness: H.stiffness,
                            damping: H.damping,
                            mass: H.mass,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!te(t, tt) && te(t, Q)) {
                            if (t.visualDuration) {
                                let r = 2 * Math.PI / (1.2 * t.visualDuration),
                                    n = r * r,
                                    i = 2 * (0, k.u)(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
                                e = { ...e,
                                    mass: H.mass,
                                    stiffness: n,
                                    damping: i
                                }
                            } else {
                                let r = function({
                                    duration: t = H.duration,
                                    bounce: e = H.bounce,
                                    velocity: r = H.velocity,
                                    mass: n = H.mass
                                }) {
                                    let o, s;
                                    (0, w.K)(t <= (0, i.w)(H.maxDuration), "Spring duration must be 10 seconds or less");
                                    let a = 1 - e;
                                    a = (0, k.u)(H.minDamping, H.maxDamping, a), t = (0, k.u)(H.minDuration, H.maxDuration, (0, i.X)(t)), a < 1 ? (o = e => {
                                        let n = e * a,
                                            i = n * t;
                                        return .001 - (n - r) / J(e, a) * Math.exp(-i)
                                    }, s = e => {
                                        let n = e * a * t,
                                            i = Math.pow(a, 2) * Math.pow(e, 2) * t,
                                            s = J(Math.pow(e, 2), a);
                                        return (n * r + r - i) * Math.exp(-n) * (-o(e) + .001 > 0 ? -1 : 1) / s
                                    }) : (o = e => -.001 + Math.exp(-e * t) * ((e - r) * t + 1), s = e => t * t * (r - e) * Math.exp(-e * t));
                                    let l = function(t, e, r) {
                                        let n = r;
                                        for (let r = 1; r < 12; r++) n -= t(n) / e(n);
                                        return n
                                    }(o, s, 5 / t);
                                    if (t = (0, i.w)(t), isNaN(l)) return {
                                        stiffness: H.stiffness,
                                        damping: H.damping,
                                        duration: t
                                    }; {
                                        let e = Math.pow(l, 2) * n;
                                        return {
                                            stiffness: e,
                                            damping: 2 * a * Math.sqrt(n * e),
                                            duration: t
                                        }
                                    }
                                }(t);
                                (e = { ...e,
                                    ...r,
                                    mass: H.mass
                                }).isResolvedFromDuration = !0
                            }
                        }
                        return e
                    }({ ...o,
                        velocity: -(0, i.X)(o.velocity || 0)
                    }),
                    v = m || 0,
                    y = d / (2 * Math.sqrt(h * p)),
                    b = u - l,
                    x = (0, i.X)(Math.sqrt(h / p)),
                    P = 5 > Math.abs(b);
                if (s || (s = P ? H.restSpeed.granular : H.restSpeed.default), a || (a = P ? H.restDelta.granular : H.restDelta.default), y < 1) {
                    let t = J(x, y);
                    r = e => u - Math.exp(-y * x * e) * ((v + y * x * b) / t * Math.sin(t * e) + b * Math.cos(t * e))
                } else if (1 === y) r = t => u - Math.exp(-x * t) * (b + (v + x * b) * t);
                else {
                    let t = x * Math.sqrt(y * y - 1);
                    r = e => {
                        let r = Math.exp(-y * x * e),
                            n = Math.min(t * e, 300);
                        return u - r * ((v + y * x * b) * Math.sinh(n) + t * b * Math.cosh(n)) / t
                    }
                }
                let S = {
                    calculatedDuration: g && f || null,
                    next: t => {
                        let e = r(t);
                        if (g) c.done = t >= f;
                        else {
                            let n = 0;
                            y < 1 && (n = 0 === t ? (0, i.w)(v) : G(r, t, e));
                            let o = Math.abs(n) <= s,
                                l = Math.abs(u - e) <= a;
                            c.done = o && l
                        }
                        return c.value = c.done ? u : e, c
                    },
                    toString: () => {
                        let t = Math.min((0, n.iI)(S), n.EO),
                            e = (0, n.wk)(e => S.next(t * e).value, t, 30);
                        return t + "ms " + e
                    }
                };
                return S
            }

            function tn({
                keyframes: t,
                velocity: e = 0,
                power: r = .8,
                timeConstant: n = 325,
                bounceDamping: i = 10,
                bounceStiffness: o = 500,
                modifyTarget: s,
                min: a,
                max: l,
                restDelta: u = .5,
                restSpeed: c
            }) {
                let h, d;
                let p = t[0],
                    f = {
                        done: !1,
                        value: p
                    },
                    m = t => void 0 !== a && t < a || void 0 !== l && t > l,
                    g = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l,
                    v = r * e,
                    y = p + v,
                    b = void 0 === s ? y : s(y);
                b !== y && (v = b - p);
                let x = t => -v * Math.exp(-t / n),
                    w = t => b + x(t),
                    P = t => {
                        let e = x(t),
                            r = w(t);
                        f.done = Math.abs(e) <= u, f.value = f.done ? b : r
                    },
                    S = t => {
                        m(f.value) && (h = t, d = tr({
                            keyframes: [f.value, g(f.value)],
                            velocity: G(w, t, f.value),
                            damping: i,
                            stiffness: o,
                            restDelta: u,
                            restSpeed: c
                        }))
                    };
                return S(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (d || void 0 !== h || (e = !0, P(t), S(t)), void 0 !== h && t >= h) ? d.next(t - h) : (e || P(t), f)
                    }
                }
            }
            let ti = c(.42, 0, 1, 1),
                to = c(0, 0, .58, 1),
                ts = c(.42, 0, .58, 1),
                ta = t => Array.isArray(t) && "number" != typeof t[0],
                tl = {
                    linear: l.Z,
                    easeIn: ti,
                    easeInOut: ts,
                    easeOut: to,
                    circIn: v.Z7,
                    circInOut: v.X7,
                    circOut: v.Bn,
                    backIn: f,
                    backInOut: m,
                    backOut: p,
                    anticipate: g
                },
                tu = t => {
                    if ((0, n.qE)(t)) {
                        (0, w.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, r, n, i] = t;
                        return c(e, r, n, i)
                    }
                    return "string" == typeof t ? ((0, w.k)(void 0 !== tl[t], `Invalid easing type '${t}'`), tl[t]) : t
                };
            var tc = r(1645);

            function th({
                duration: t = 300,
                keyframes: e,
                times: r,
                ease: n = "easeInOut"
            }) {
                let i = ta(n) ? n.map(tu) : tu(n),
                    o = {
                        done: !1,
                        value: e[0]
                    },
                    s = function(t, e, {
                        clamp: r = !0,
                        ease: n,
                        mixer: i
                    } = {}) {
                        let o = t.length;
                        if ((0, w.k)(o === e.length, "Both input and output ranges must be the same length"), 1 === o) return () => e[0];
                        if (2 === o && e[0] === e[1]) return () => e[1];
                        let s = t[0] === t[1];
                        t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
                        let a = function(t, e, r) {
                                let n = [],
                                    i = r || Z,
                                    o = t.length - 1;
                                for (let r = 0; r < o; r++) {
                                    let o = i(t[r], t[r + 1]);
                                    if (e) {
                                        let t = Array.isArray(e) ? e[r] || l.Z : e;
                                        o = (0, I.z)(t, o)
                                    }
                                    n.push(o)
                                }
                                return n
                            }(e, n, i),
                            u = a.length,
                            c = r => {
                                if (s && r < t[0]) return e[0];
                                let n = 0;
                                if (u > 1)
                                    for (; n < t.length - 2 && !(r < t[n + 1]); n++);
                                let i = (0, tc.Y)(t[n], t[n + 1], r);
                                return a[n](i)
                            };
                        return r ? e => c((0, k.u)(t[0], t[o - 1], e)) : c
                    }((r && r.length === e.length ? r : function(t) {
                        let e = [0];
                        return function(t, e) {
                            let r = t[t.length - 1];
                            for (let n = 1; n <= e; n++) {
                                let i = (0, tc.Y)(0, e, n);
                                t.push((0, R.t)(r, 1, i))
                            }
                        }(e, t.length - 1), e
                    }(e)).map(e => e * t), e, {
                        ease: Array.isArray(i) ? i : e.map(() => i || ts).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (o.value = s(e), o.done = e >= t, o)
                }
            }
            let td = t => {
                    let e = ({
                        timestamp: e
                    }) => t(e);
                    return {
                        start: () => o.Wi.update(e, !0),
                        stop: () => (0, o.Pn)(e),
                        now: () => o.frameData.isProcessing ? o.frameData.timestamp : b.X.now()
                    }
                },
                tp = {
                    decay: tn,
                    inertia: tn,
                    tween: th,
                    keyframes: th,
                    spring: tr
                },
                tf = t => t / 100;
            class tm extends E {
                constructor(t) {
                    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
                        if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                        this.teardown();
                        let {
                            onStop: t
                        } = this.options;
                        t && t()
                    };
                    let {
                        name: e,
                        motionValue: r,
                        element: n,
                        keyframes: i
                    } = this.options, o = (null == n ? void 0 : n.KeyframeResolver) || x.e;
                    this.resolver = new o(i, (t, e) => this.onKeyframesResolved(t, e), e, r, n), this.resolver.scheduleResolve()
                }
                flatten() {
                    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
                }
                initPlayback(t) {
                    let e, r;
                    let {
                        type: i = "keyframes",
                        repeat: o = 0,
                        repeatDelay: s = 0,
                        repeatType: a,
                        velocity: l = 0
                    } = this.options, u = (0, n.xD)(i) ? i : tp[i] || th;
                    u !== th && "number" != typeof t[0] && (e = (0, I.z)(tf, Z(t[0], t[1])), t = [0, 100]);
                    let c = u({ ...this.options,
                        keyframes: t
                    });
                    "mirror" === a && (r = u({ ...this.options,
                        keyframes: [...t].reverse(),
                        velocity: -l
                    })), null === c.calculatedDuration && (c.calculatedDuration = (0, n.iI)(c));
                    let {
                        calculatedDuration: h
                    } = c, d = h + s;
                    return {
                        generator: c,
                        mirroredGenerator: r,
                        mapPercentToKeyframes: e,
                        calculatedDuration: h,
                        resolvedDuration: d,
                        totalDuration: d * (o + 1) - s
                    }
                }
                onPostResolved() {
                    let {
                        autoplay: t = !0
                    } = this.options;
                    this.play(), "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
                }
                tick(t, e = !1) {
                    let {
                        resolved: r
                    } = this;
                    if (!r) {
                        let {
                            keyframes: t
                        } = this.options;
                        return {
                            done: !0,
                            value: t[t.length - 1]
                        }
                    }
                    let {
                        finalKeyframe: n,
                        generator: i,
                        mirroredGenerator: o,
                        mapPercentToKeyframes: s,
                        keyframes: a,
                        calculatedDuration: l,
                        totalDuration: u,
                        resolvedDuration: c
                    } = r;
                    if (null === this.startTime) return i.next(0);
                    let {
                        delay: h,
                        repeat: d,
                        repeatType: p,
                        repeatDelay: f,
                        onUpdate: m
                    } = this.options;
                    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                    let g = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
                        v = this.speed >= 0 ? g < 0 : g > u;
                    this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                    let y = this.currentTime,
                        b = i;
                    if (d) {
                        let t = Math.min(this.currentTime, u) / c,
                            e = Math.floor(t),
                            r = t % 1;
                        !r && t >= 1 && (r = 1), 1 === r && e--, (e = Math.min(e, d + 1)) % 2 && ("reverse" === p ? (r = 1 - r, f && (r -= f / c)) : "mirror" === p && (b = o)), y = (0, k.u)(0, 1, r) * c
                    }
                    let x = v ? {
                        done: !1,
                        value: a[0]
                    } : b.next(y);
                    s && (x.value = s(x.value));
                    let {
                        done: w
                    } = x;
                    v || null === l || (w = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                    let P = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
                    return P && void 0 !== n && (x.value = A(a, this.options, n)), m && m(x.value), P && this.finish(), x
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    return t ? (0, i.X)(t.calculatedDuration) : 0
                }
                get time() {
                    return (0, i.X)(this.currentTime)
                }
                set time(t) {
                    t = (0, i.w)(t), this.currentTime = t, null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
                }
                get speed() {
                    return this.playbackSpeed
                }
                set speed(t) {
                    let e = this.playbackSpeed !== t;
                    this.playbackSpeed = t, e && (this.time = (0, i.X)(this.currentTime))
                }
                play() {
                    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
                        this.pendingPlayState = "running";
                        return
                    }
                    if (this.isStopped) return;
                    let {
                        driver: t = td,
                        onPlay: e,
                        startTime: r
                    } = this.options;
                    this.driver || (this.driver = t(t => this.tick(t))), e && e();
                    let n = this.driver.now();
                    null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = n) : this.startTime = null != r ? r : this.calcStartTime(), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
                }
                pause() {
                    var t;
                    if (!this._resolved) {
                        this.pendingPlayState = "paused";
                        return
                    }
                    this.state = "paused", this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
                }
                complete() {
                    "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
                }
                finish() {
                    this.teardown(), this.state = "finished";
                    let {
                        onComplete: t
                    } = this.options;
                    t && t()
                }
                cancel() {
                    null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
                }
                teardown() {
                    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), this.driver = void 0)
                }
                sample(t) {
                    return this.startTime = 0, this.tick(t, !0)
                }
            }
            let tg = new Set(["opacity", "clipPath", "filter", "transform"]),
                tv = (0, r(107).X)(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
                ty = {
                    anticipate: g,
                    backInOut: m,
                    circInOut: v.X7
                };
            class tb extends E {
                constructor(t) {
                    super(t);
                    let {
                        name: e,
                        motionValue: r,
                        element: n,
                        keyframes: i
                    } = this.options;
                    this.resolver = new y.s(i, (t, e) => this.onKeyframesResolved(t, e), e, r, n), this.resolver.scheduleResolve()
                }
                initPlayback(t, e) {
                    var r, i;
                    let {
                        duration: o = 300,
                        times: s,
                        ease: a,
                        type: l,
                        motionValue: u,
                        name: c,
                        startTime: h
                    } = this.options;
                    if (!(null === (r = u.owner) || void 0 === r ? void 0 : r.current)) return !1;
                    if ("string" == typeof a && (0, n.Vc)() && a in ty && (a = ty[a]), i = this.options, (0, n.xD)(i.type) || "spring" === i.type || !(0, n.hR)(i.ease)) {
                        let {
                            onComplete: e,
                            onUpdate: r,
                            motionValue: n,
                            element: i,
                            ...u
                        } = this.options, c = function(t, e) {
                            let r = new tm({ ...e,
                                    keyframes: t,
                                    repeat: 0,
                                    delay: 0,
                                    isGenerator: !0
                                }),
                                n = {
                                    done: !1,
                                    value: t[0]
                                },
                                i = [],
                                o = 0;
                            for (; !n.done && o < 2e4;) i.push((n = r.sample(o)).value), o += 10;
                            return {
                                times: void 0,
                                keyframes: i,
                                duration: o - 10,
                                ease: "linear"
                            }
                        }(t, u);
                        1 === (t = c.keyframes).length && (t[1] = t[0]), o = c.duration, s = c.times, a = c.ease, l = "keyframes"
                    }
                    let d = function(t, e, r, {
                        delay: i = 0,
                        duration: o = 300,
                        repeat: s = 0,
                        repeatType: a = "loop",
                        ease: l = "easeInOut",
                        times: u
                    } = {}) {
                        let c = {
                            [e]: r
                        };
                        u && (c.offset = u);
                        let h = (0, n.eB)(l, o);
                        return Array.isArray(h) && (c.easing = h), t.animate(c, {
                            delay: i,
                            duration: o,
                            easing: Array.isArray(h) ? "linear" : h,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === a ? "alternate" : "normal"
                        })
                    }(u.owner.current, c, t, { ...this.options,
                        duration: o,
                        times: s,
                        ease: a
                    });
                    return d.startTime = null != h ? h : this.calcStartTime(), this.pendingTimeline ? ((0, n._F)(d, this.pendingTimeline), this.pendingTimeline = void 0) : d.onfinish = () => {
                        let {
                            onComplete: r
                        } = this.options;
                        u.set(A(t, this.options, e)), r && r(), this.cancel(), this.resolveFinishedPromise()
                    }, {
                        animation: d,
                        duration: o,
                        times: s,
                        type: l,
                        ease: a,
                        keyframes: t
                    }
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        duration: e
                    } = t;
                    return (0, i.X)(e)
                }
                get time() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        animation: e
                    } = t;
                    return (0, i.X)(e.currentTime || 0)
                }
                set time(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: r
                    } = e;
                    r.currentTime = (0, i.w)(t)
                }
                get speed() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 1;
                    let {
                        animation: e
                    } = t;
                    return e.playbackRate
                }
                set speed(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: r
                    } = e;
                    r.playbackRate = t
                }
                get state() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return "idle";
                    let {
                        animation: e
                    } = t;
                    return e.playState
                }
                get startTime() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return null;
                    let {
                        animation: e
                    } = t;
                    return e.startTime
                }
                attachTimeline(t) {
                    if (this._resolved) {
                        let {
                            resolved: e
                        } = this;
                        if (!e) return l.Z;
                        let {
                            animation: r
                        } = e;
                        (0, n._F)(r, t)
                    } else this.pendingTimeline = t;
                    return l.Z
                }
                play() {
                    if (this.isStopped) return;
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    "finished" === e.playState && this.updateFinishedPromise(), e.play()
                }
                pause() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    e.pause()
                }
                stop() {
                    if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                    this.resolveFinishedPromise(), this.updateFinishedPromise();
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e,
                        keyframes: r,
                        duration: n,
                        type: o,
                        ease: s,
                        times: a
                    } = t;
                    if ("idle" === e.playState || "finished" === e.playState) return;
                    if (this.time) {
                        let {
                            motionValue: t,
                            onUpdate: e,
                            onComplete: l,
                            element: u,
                            ...c
                        } = this.options, h = new tm({ ...c,
                            keyframes: r,
                            duration: n,
                            type: o,
                            ease: s,
                            times: a,
                            isGenerator: !0
                        }), d = (0, i.w)(this.time);
                        t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10)
                    }
                    let {
                        onStop: l
                    } = this.options;
                    l && l(), this.cancel()
                }
                complete() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.finish()
                }
                cancel() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.cancel()
                }
                static supports(t) {
                    let {
                        motionValue: e,
                        name: r,
                        repeatDelay: n,
                        repeatType: i,
                        damping: o,
                        type: s
                    } = t;
                    return tv() && r && tg.has(r) && e && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate && !n && "mirror" !== i && 0 !== o && "inertia" !== s
                }
            }
            var tx = r(7487);
            let tw = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                tP = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                tS = {
                    type: "keyframes",
                    duration: .8
                },
                tT = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                tA = (t, {
                    keyframes: e
                }) => e.length > 2 ? tS : tx.G.has(t) ? t.startsWith("scale") ? tP(e[1]) : tw : tT,
                tE = (t, e, r, l = {}, u, c) => h => {
                    let d = (0, n.ev)(l, t) || {},
                        p = d.delay || l.delay || 0,
                        {
                            elapsed: f = 0
                        } = l;
                    f -= (0, i.w)(p);
                    let m = {
                        keyframes: Array.isArray(r) ? r : [null, r],
                        ease: "easeOut",
                        velocity: e.getVelocity(),
                        ...d,
                        delay: -f,
                        onUpdate: t => {
                            e.set(t), d.onUpdate && d.onUpdate(t)
                        },
                        onComplete: () => {
                            h(), d.onComplete && d.onComplete()
                        },
                        name: t,
                        motionValue: e,
                        element: c ? void 0 : u
                    };
                    ! function({
                        when: t,
                        delay: e,
                        delayChildren: r,
                        staggerChildren: n,
                        staggerDirection: i,
                        repeat: o,
                        repeatType: s,
                        repeatDelay: a,
                        from: l,
                        elapsed: u,
                        ...c
                    }) {
                        return !!Object.keys(c).length
                    }(d) && (m = { ...m,
                        ...tA(t, m)
                    }), m.duration && (m.duration = (0, i.w)(m.duration)), m.repeatDelay && (m.repeatDelay = (0, i.w)(m.repeatDelay)), void 0 !== m.from && (m.keyframes[0] = m.from);
                    let g = !1;
                    if (!1 !== m.type && (0 !== m.duration || m.repeatDelay) || (m.duration = 0, 0 !== m.delay || (g = !0)), (a.current || s.c.skipAnimations) && (g = !0, m.duration = 0, m.delay = 0), g && !c && void 0 !== e.get()) {
                        let t = A(m.keyframes, d);
                        if (void 0 !== t) return o.Wi.update(() => {
                            m.onUpdate(t), m.onComplete()
                        }), new n.sP([])
                    }
                    return !c && tb.supports(m) ? new tb(m) : new tm(m)
                }
        },
        5647: function(t, e, r) {
            r.d(e, {
                d: function() {
                    return f
                }
            });
            var n = r(8775),
                i = r(5699),
                o = r(6596),
                s = r(8771),
                a = r(1327),
                l = r(4005),
                u = r(821),
                c = r(5414);

            function h(t, e, {
                delay: r = 0,
                transitionOverride: n,
                type: h
            } = {}) {
                var d;
                let {
                    transition: p = t.getDefaultTransition(),
                    transitionEnd: f,
                    ...m
                } = e;
                n && (p = n);
                let g = [],
                    v = h && t.animationState && t.animationState.getState()[h];
                for (let e in m) {
                    let n = t.getValue(e, null !== (d = t.latestValues[e]) && void 0 !== d ? d : null),
                        s = m[e];
                    if (void 0 === s || v && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, r) {
                            let n = t.hasOwnProperty(r) && !0 !== e[r];
                            return e[r] = !1, n
                        }(v, e)) continue;
                    let h = {
                            delay: r,
                            ...(0, i.ev)(p || {}, e)
                        },
                        f = !1;
                    if (window.MotionHandoffAnimation) {
                        let r = (0, l.s)(t);
                        if (r) {
                            let t = window.MotionHandoffAnimation(r, e, c.Wi);
                            null !== t && (h.startTime = t, f = !0)
                        }
                    }(0, a.K)(t, e), n.start((0, u.v)(e, n, s, t.shouldReduceMotion && o.z.has(e) ? {
                        type: !1
                    } : h, t, f));
                    let y = n.animation;
                    y && g.push(y)
                }
                return f && Promise.all(g).then(() => {
                    c.Wi.update(() => {
                        f && (0, s.C)(t, f)
                    })
                }), g
            }

            function d(t, e, r = {}) {
                var i;
                let o = (0, n.x)(t, e, "exit" === r.type ? null === (i = t.presenceContext) || void 0 === i ? void 0 : i.custom : void 0),
                    {
                        transition: s = t.getDefaultTransition() || {}
                    } = o || {};
                r.transitionOverride && (s = r.transitionOverride);
                let a = o ? () => Promise.all(h(t, o, r)) : () => Promise.resolve(),
                    l = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                        let {
                            delayChildren: i = 0,
                            staggerChildren: o,
                            staggerDirection: a
                        } = s;
                        return function(t, e, r = 0, n = 0, i = 1, o) {
                            let s = [],
                                a = (t.variantChildren.size - 1) * n,
                                l = 1 === i ? (t = 0) => t * n : (t = 0) => a - t * n;
                            return Array.from(t.variantChildren).sort(p).forEach((t, n) => {
                                t.notify("AnimationStart", e), s.push(d(t, e, { ...o,
                                    delay: r + l(n)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(s)
                        }(t, e, i + n, o, a, r)
                    } : () => Promise.resolve(),
                    {
                        when: u
                    } = s;
                if (!u) return Promise.all([a(), l(r.delay)]); {
                    let [t, e] = "beforeChildren" === u ? [a, l] : [l, a];
                    return t().then(() => e())
                }
            }

            function p(t, e) {
                return t.sortNodePosition(e)
            }

            function f(t, e, r = {}) {
                let i;
                if (t.notify("AnimationStart", e), Array.isArray(e)) i = Promise.all(e.map(e => d(t, e, r)));
                else if ("string" == typeof e) i = d(t, e, r);
                else {
                    let o = "function" == typeof e ? (0, n.x)(t, e, r.custom) : e;
                    i = Promise.all(h(t, o, r))
                }
                return i.then(() => {
                    t.notify("AnimationComplete", e)
                })
            }
        },
        1750: function(t, e, r) {
            r.d(e, {
                M: function() {
                    return n
                }
            });
            let n = "data-" + (0, r(7444).D)("framerAppearId")
        },
        4005: function(t, e, r) {
            r.d(e, {
                s: function() {
                    return i
                }
            });
            var n = r(1750);

            function i(t) {
                return t.props[n.M]
            }
        },
        4944: function(t, e, r) {
            r.d(e, {
                C: function() {
                    return n
                }
            });
            let n = t => Array.isArray(t)
        },
        8614: function(t, e, r) {
            r.d(e, {
                M: function() {
                    return v
                }
            });
            var n = r(7437),
                i = r(2265),
                o = r(8881),
                s = r(3576),
                a = r(4252),
                l = r(5750);
            class u extends i.Component {
                getSnapshotBeforeUpdate(t) {
                    let e = this.props.childRef.current;
                    if (e && t.isPresent && !this.props.isPresent) {
                        let t = this.props.sizeRef.current;
                        t.height = e.offsetHeight || 0, t.width = e.offsetWidth || 0, t.top = e.offsetTop, t.left = e.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function c(t) {
                let {
                    children: e,
                    isPresent: r
                } = t, o = (0, i.useId)(), s = (0, i.useRef)(null), a = (0, i.useRef)({
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0
                }), {
                    nonce: c
                } = (0, i.useContext)(l._);
                return (0, i.useInsertionEffect)(() => {
                    let {
                        width: t,
                        height: e,
                        top: n,
                        left: i
                    } = a.current;
                    if (r || !s.current || !t || !e) return;
                    s.current.dataset.motionPopId = o;
                    let l = document.createElement("style");
                    return c && (l.nonce = c), document.head.appendChild(l), l.sheet && l.sheet.insertRule('\n          [data-motion-pop-id="'.concat(o, '"] {\n            position: absolute !important;\n            width: ').concat(t, "px !important;\n            height: ").concat(e, "px !important;\n            top: ").concat(n, "px !important;\n            left: ").concat(i, "px !important;\n          }\n        ")), () => {
                        document.head.removeChild(l)
                    }
                }, [r]), (0, n.jsx)(u, {
                    isPresent: r,
                    childRef: s,
                    sizeRef: a,
                    children: i.cloneElement(e, {
                        ref: s
                    })
                })
            }
            let h = t => {
                let {
                    children: e,
                    initial: r,
                    isPresent: o,
                    onExitComplete: l,
                    custom: u,
                    presenceAffectsLayout: h,
                    mode: p
                } = t, f = (0, s.h)(d), m = (0, i.useId)(), g = (0, i.useCallback)(t => {
                    for (let e of (f.set(t, !0), f.values()))
                        if (!e) return;
                    l && l()
                }, [f, l]), v = (0, i.useMemo)(() => ({
                    id: m,
                    initial: r,
                    isPresent: o,
                    custom: u,
                    onExitComplete: g,
                    register: t => (f.set(t, !1), () => f.delete(t))
                }), h ? [Math.random(), g] : [o, g]);
                return (0, i.useMemo)(() => {
                    f.forEach((t, e) => f.set(e, !1))
                }, [o]), i.useEffect(() => {
                    o || f.size || !l || l()
                }, [o]), "popLayout" === p && (e = (0, n.jsx)(c, {
                    isPresent: o,
                    children: e
                })), (0, n.jsx)(a.O.Provider, {
                    value: v,
                    children: e
                })
            };

            function d() {
                return new Map
            }
            var p = r(9637);
            let f = t => t.key || "";

            function m(t) {
                let e = [];
                return i.Children.forEach(t, t => {
                    (0, i.isValidElement)(t) && e.push(t)
                }), e
            }
            var g = r(1534);
            let v = t => {
                let {
                    children: e,
                    custom: r,
                    initial: a = !0,
                    onExitComplete: l,
                    presenceAffectsLayout: u = !0,
                    mode: c = "sync",
                    propagate: d = !1
                } = t, [v, y] = (0, p.oO)(d), b = (0, i.useMemo)(() => m(e), [e]), x = d && !v ? [] : b.map(f), w = (0, i.useRef)(!0), P = (0, i.useRef)(b), S = (0, s.h)(() => new Map), [T, A] = (0, i.useState)(b), [E, k] = (0, i.useState)(b);
                (0, g.L)(() => {
                    w.current = !1, P.current = b;
                    for (let t = 0; t < E.length; t++) {
                        let e = f(E[t]);
                        x.includes(e) ? S.delete(e) : !0 !== S.get(e) && S.set(e, !1)
                    }
                }, [E, x.length, x.join("-")]);
                let R = [];
                if (b !== T) {
                    let t = [...b];
                    for (let e = 0; e < E.length; e++) {
                        let r = E[e],
                            n = f(r);
                        x.includes(n) || (t.splice(e, 0, r), R.push(r))
                    }
                    "wait" === c && R.length && (t = R), k(m(t)), A(b);
                    return
                }
                let {
                    forceRender: M
                } = (0, i.useContext)(o.p);
                return (0, n.jsx)(n.Fragment, {
                    children: E.map(t => {
                        let e = f(t),
                            i = (!d || !!v) && (b === E || x.includes(e));
                        return (0, n.jsx)(h, {
                            isPresent: i,
                            initial: (!w.current || !!a) && void 0,
                            custom: i ? void 0 : r,
                            presenceAffectsLayout: u,
                            mode: c,
                            onExitComplete: i ? void 0 : () => {
                                if (!S.has(e)) return;
                                S.set(e, !0);
                                let t = !0;
                                S.forEach(e => {
                                    e || (t = !1)
                                }), t && (null == M || M(), k(P.current), d && (null == y || y()), l && l())
                            },
                            children: t
                        }, e)
                    })
                })
            }
        },
        9637: function(t, e, r) {
            r.d(e, {
                oO: function() {
                    return o
                }
            });
            var n = r(2265),
                i = r(4252);

            function o(t = !0) {
                let e = (0, n.useContext)(i.O);
                if (null === e) return [!0, null];
                let {
                    isPresent: r,
                    onExitComplete: o,
                    register: s
                } = e, a = (0, n.useId)();
                (0, n.useEffect)(() => {
                    t && s(a)
                }, [t]);
                let l = (0, n.useCallback)(() => t && o && o(a), [a, o, t]);
                return !r && o ? [!1, l] : [!0]
            }
        },
        8881: function(t, e, r) {
            r.d(e, {
                p: function() {
                    return n
                }
            });
            let n = (0, r(2265).createContext)({})
        },
        5750: function(t, e, r) {
            r.d(e, {
                _: function() {
                    return n
                }
            });
            let n = (0, r(2265).createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        4252: function(t, e, r) {
            r.d(e, {
                O: function() {
                    return n
                }
            });
            let n = (0, r(2265).createContext)(null)
        },
        6378: function(t, e, r) {
            r.d(e, {
                Bn: function() {
                    return s
                },
                X7: function() {
                    return a
                },
                Z7: function() {
                    return o
                }
            });
            var n = r(7457),
                i = r(3627);
            let o = t => 1 - Math.sin(Math.acos(t)),
                s = (0, i.M)(o),
                a = (0, n.o)(o)
        },
        7457: function(t, e, r) {
            r.d(e, {
                o: function() {
                    return n
                }
            });
            let n = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
        },
        3627: function(t, e, r) {
            r.d(e, {
                M: function() {
                    return n
                }
            });
            let n = t => e => 1 - t(1 - e)
        },
        5005: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return o
                }
            });
            var n = r(4118);
            let i = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];

            function o(t, e) {
                let r = !1,
                    o = !0,
                    s = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    a = () => r = !0,
                    l = i.reduce((t, e) => (t[e] = function(t) {
                        let e = new Set,
                            r = new Set,
                            n = !1,
                            i = !1,
                            o = new WeakSet,
                            s = {
                                delta: 0,
                                timestamp: 0,
                                isProcessing: !1
                            };

                        function a(e) {
                            o.has(e) && (l.schedule(e), t()), e(s)
                        }
                        let l = {
                            schedule: (t, i = !1, s = !1) => {
                                let a = s && n ? e : r;
                                return i && o.add(t), a.has(t) || a.add(t), t
                            },
                            cancel: t => {
                                r.delete(t), o.delete(t)
                            },
                            process: t => {
                                if (s = t, n) {
                                    i = !0;
                                    return
                                }
                                n = !0, [e, r] = [r, e], e.forEach(a), e.clear(), n = !1, i && (i = !1, l.process(t))
                            }
                        };
                        return l
                    }(a), t), {}),
                    {
                        read: u,
                        resolveKeyframes: c,
                        update: h,
                        preRender: d,
                        render: p,
                        postRender: f
                    } = l,
                    m = () => {
                        let i = n.c.useManualTiming ? s.timestamp : performance.now();
                        r = !1, s.delta = o ? 1e3 / 60 : Math.max(Math.min(i - s.timestamp, 40), 1), s.timestamp = i, s.isProcessing = !0, u.process(s), c.process(s), h.process(s), d.process(s), p.process(s), f.process(s), s.isProcessing = !1, r && e && (o = !1, t(m))
                    },
                    g = () => {
                        r = !0, o = !0, s.isProcessing || t(m)
                    };
                return {
                    schedule: i.reduce((t, e) => {
                        let n = l[e];
                        return t[e] = (t, e = !1, i = !1) => (r || g(), n.schedule(t, e, i)), t
                    }, {}),
                    cancel: t => {
                        for (let e = 0; e < i.length; e++) l[i[e]].cancel(t)
                    },
                    state: s,
                    steps: l
                }
            }
        },
        5414: function(t, e, r) {
            r.d(e, {
                Pn: function() {
                    return o
                },
                Wi: function() {
                    return i
                },
                frameData: function() {
                    return s
                },
                yL: function() {
                    return a
                }
            });
            var n = r(6277);
            let {
                schedule: i,
                cancel: o,
                state: s,
                steps: a
            } = (0, r(5005).Z)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.Z, !0)
        },
        504: function(t, e, r) {
            let n;
            r.d(e, {
                X: function() {
                    return a
                }
            });
            var i = r(4118),
                o = r(5414);

            function s() {
                n = void 0
            }
            let a = {
                now: () => (void 0 === n && a.set(o.frameData.isProcessing || i.c.useManualTiming ? o.frameData.timestamp : performance.now()), n),
                set: t => {
                    n = t, queueMicrotask(s)
                }
            }
        },
        3462: function(t, e, r) {
            function n(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start
            }
            r.d(e, {
                E: function() {
                    return r5
                }
            });
            var i, o, s, a = r(4944);

            function l(t, e) {
                if (!Array.isArray(e)) return !1;
                let r = e.length;
                if (r !== t.length) return !1;
                for (let n = 0; n < r; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function u(t) {
                return "string" == typeof t || Array.isArray(t)
            }
            var c = r(8775);
            let h = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                d = ["initial", ...h];
            var p = r(5647);
            let f = d.length,
                m = [...h].reverse(),
                g = h.length;

            function v(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }

            function y() {
                return {
                    animate: v(!0),
                    whileInView: v(),
                    whileHover: v(),
                    whileTap: v(),
                    whileDrag: v(),
                    whileFocus: v(),
                    exit: v()
                }
            }
            class b {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }
            class x extends b {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(({
                                animation: e,
                                options: r
                            }) => (0, p.d)(t, e, r))),
                            r = y(),
                            i = !0,
                            o = e => (r, n) => {
                                var i;
                                let o = (0, c.x)(t, n, "exit" === e ? null === (i = t.presenceContext) || void 0 === i ? void 0 : i.custom : void 0);
                                if (o) {
                                    let {
                                        transition: t,
                                        transitionEnd: e,
                                        ...n
                                    } = o;
                                    r = { ...r,
                                        ...n,
                                        ...e
                                    }
                                }
                                return r
                            };

                        function s(s) {
                            let {
                                props: c
                            } = t, h = function t(e) {
                                if (!e) return;
                                if (!e.isControllingVariants) {
                                    let r = e.parent && t(e.parent) || {};
                                    return void 0 !== e.props.initial && (r.initial = e.props.initial), r
                                }
                                let r = {};
                                for (let t = 0; t < f; t++) {
                                    let n = d[t],
                                        i = e.props[n];
                                    (u(i) || !1 === i) && (r[n] = i)
                                }
                                return r
                            }(t.parent) || {}, p = [], v = new Set, y = {}, b = 1 / 0;
                            for (let e = 0; e < g; e++) {
                                var x;
                                let d = m[e],
                                    f = r[d],
                                    g = void 0 !== c[d] ? c[d] : h[d],
                                    w = u(g),
                                    P = d === s ? f.isActive : null;
                                !1 === P && (b = e);
                                let S = g === h[d] && g !== c[d] && w;
                                if (S && i && t.manuallyAnimateOnMount && (S = !1), f.protectedKeys = { ...y
                                    }, !f.isActive && null === P || !g && !f.prevProp || n(g) || "boolean" == typeof g) continue;
                                let T = (x = f.prevProp, "string" == typeof g ? g !== x : !!Array.isArray(g) && !l(g, x)),
                                    A = T || d === s && f.isActive && !S && w || e > b && w,
                                    E = !1,
                                    k = Array.isArray(g) ? g : [g],
                                    R = k.reduce(o(d), {});
                                !1 === P && (R = {});
                                let {
                                    prevResolvedValues: M = {}
                                } = f, C = { ...M,
                                    ...R
                                }, j = e => {
                                    A = !0, v.has(e) && (E = !0, v.delete(e)), f.needsAnimating[e] = !0;
                                    let r = t.getValue(e);
                                    r && (r.liveStyle = !1)
                                };
                                for (let t in C) {
                                    let e = R[t],
                                        r = M[t];
                                    if (!y.hasOwnProperty(t))((0, a.C)(e) && (0, a.C)(r) ? l(e, r) : e === r) ? void 0 !== e && v.has(t) ? j(t) : f.protectedKeys[t] = !0 : null != e ? j(t) : v.add(t)
                                }
                                f.prevProp = g, f.prevResolvedValues = R, f.isActive && (y = { ...y,
                                    ...R
                                }), i && t.blockInitialAnimation && (A = !1);
                                let D = !(S && T) || E;
                                A && D && p.push(...k.map(t => ({
                                    animation: t,
                                    options: {
                                        type: d
                                    }
                                })))
                            }
                            if (v.size) {
                                let e = {};
                                v.forEach(r => {
                                    let n = t.getBaseTarget(r),
                                        i = t.getValue(r);
                                    i && (i.liveStyle = !0), e[r] = null != n ? n : null
                                }), p.push({
                                    animation: e
                                })
                            }
                            let w = !!p.length;
                            return i && (!1 === c.initial || c.initial === c.animate) && !t.manuallyAnimateOnMount && (w = !1), i = !1, w ? e(p) : Promise.resolve()
                        }
                        return {
                            animateChanges: s,
                            setActive: function(e, n) {
                                var i;
                                if (r[e].isActive === n) return Promise.resolve();
                                null === (i = t.variantChildren) || void 0 === i || i.forEach(t => {
                                    var r;
                                    return null === (r = t.animationState) || void 0 === r ? void 0 : r.setActive(e, n)
                                }), r[e].isActive = n;
                                let o = s(e);
                                for (let t in r) r[t].protectedKeys = {};
                                return o
                            },
                            setAnimateFunction: function(r) {
                                e = r(t)
                            },
                            getState: () => r,
                            reset: () => {
                                r = y(), i = !0
                            }
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    n(t) && (this.unmountControls = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    var t;
                    this.node.animationState.reset(), null === (t = this.unmountControls) || void 0 === t || t.call(this)
                }
            }
            let w = 0;
            class P extends b {
                constructor() {
                    super(...arguments), this.id = w++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e
                    } = this.node.presenceContext, {
                        isPresent: r
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === r) return;
                    let n = this.node.animationState.setActive("exit", !t);
                    e && !t && n.then(() => e(this.id))
                }
                mount() {
                    let {
                        register: t
                    } = this.node.presenceContext || {};
                    t && (this.unmount = t(this.id))
                }
                unmount() {}
            }
            var S = r(6277),
                T = r(2035),
                A = r(5699),
                E = r(9711);

            function k(t, e, r, n = {
                passive: !0
            }) {
                return t.addEventListener(e, r, n), () => t.removeEventListener(e, r)
            }

            function R(t) {
                return {
                    point: {
                        x: t.pageX,
                        y: t.pageY
                    }
                }
            }
            let M = t => e => (0, A.DJ)(e) && t(e, R(e));

            function C(t, e, r, n) {
                return k(t, e, M(r), n)
            }
            let j = (t, e) => Math.abs(t - e);
            var D = r(332),
                V = r(5414);
            class O {
                constructor(t, e, {
                    transformPagePoint: r,
                    contextWindow: n,
                    dragSnapToOrigin: i = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            var t, e;
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let r = B(this.lastMoveEventInfo, this.history),
                                n = null !== this.startEvent,
                                i = (t = r.offset, e = {
                                    x: 0,
                                    y: 0
                                }, Math.sqrt(j(t.x, e.x) ** 2 + j(t.y, e.y) ** 2) >= 3);
                            if (!n && !i) return;
                            let {
                                point: o
                            } = r, {
                                timestamp: s
                            } = V.frameData;
                            this.history.push({ ...o,
                                timestamp: s
                            });
                            let {
                                onStart: a,
                                onMove: l
                            } = this.handlers;
                            n || (a && a(this.lastMoveEvent, r), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, r)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = L(e, this.transformPagePoint), V.Wi.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: r,
                                onSessionEnd: n,
                                resumeAnimation: i
                            } = this.handlers;
                            if (this.dragSnapToOrigin && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let o = B("pointercancel" === t.type ? this.lastMoveEventInfo : L(e, this.transformPagePoint), this.history);
                            this.startEvent && r && r(t, o), n && n(t, o)
                        }, !(0, A.DJ)(t)) return;
                    this.dragSnapToOrigin = i, this.handlers = e, this.transformPagePoint = r, this.contextWindow = n || window;
                    let o = L(R(t), this.transformPagePoint),
                        {
                            point: s
                        } = o,
                        {
                            timestamp: a
                        } = V.frameData;
                    this.history = [{ ...s,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: l
                    } = e;
                    l && l(t, B(o, this.history)), this.removeListeners = (0, D.z)(C(this.contextWindow, "pointermove", this.handlePointerMove), C(this.contextWindow, "pointerup", this.handlePointerUp), C(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, V.Pn)(this.updatePoint)
                }
            }

            function L(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function F(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function B({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: F(t, N(e)),
                    offset: F(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let r = t.length - 1,
                            n = null,
                            i = N(t);
                        for (; r >= 0 && (n = t[r], !(i.timestamp - n.timestamp > (0, E.w)(.1)));) r--;
                        if (!n) return {
                            x: 0,
                            y: 0
                        };
                        let o = (0, E.X)(i.timestamp - n.timestamp);
                        if (0 === o) return {
                            x: 0,
                            y: 0
                        };
                        let s = {
                            x: (i.x - n.x) / o,
                            y: (i.y - n.y) / o
                        };
                        return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
                    }(e, 0)
                }
            }

            function N(t) {
                return t[t.length - 1]
            }

            function I(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }
            var W = r(1645),
                U = r(6781);

            function _(t) {
                return t.max - t.min
            }

            function $(t, e, r, n = .5) {
                t.origin = n, t.originPoint = (0, U.t)(e.min, e.max, t.origin), t.scale = _(r) / _(e), t.translate = (0, U.t)(r.min, r.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
            }

            function z(t, e, r, n) {
                $(t.x, e.x, r.x, n ? n.originX : void 0), $(t.y, e.y, r.y, n ? n.originY : void 0)
            }

            function X(t, e, r) {
                t.min = r.min + e.min, t.max = t.min + _(e)
            }

            function K(t, e, r) {
                t.min = e.min - r.min, t.max = t.min + _(e)
            }

            function Y(t, e, r) {
                K(t.x, e.x, r.x), K(t.y, e.y, r.y)
            }
            var Z = r(9111);

            function q(t, e, r) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0
                }
            }

            function G(t, e) {
                let r = e.min - t.min,
                    n = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([r, n] = [n, r]), {
                    min: r,
                    max: n
                }
            }

            function H(t, e, r) {
                return {
                    min: J(t, e),
                    max: J(t, r)
                }
            }

            function J(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let Q = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                tt = () => ({
                    x: Q(),
                    y: Q()
                }),
                te = () => ({
                    min: 0,
                    max: 0
                }),
                tr = () => ({
                    x: te(),
                    y: te()
                });

            function tn(t) {
                return [t("x"), t("y")]
            }

            function ti({
                top: t,
                left: e,
                right: r,
                bottom: n
            }) {
                return {
                    x: {
                        min: e,
                        max: r
                    },
                    y: {
                        min: t,
                        max: n
                    }
                }
            }

            function to(t) {
                return void 0 === t || 1 === t
            }

            function ts({
                scale: t,
                scaleX: e,
                scaleY: r
            }) {
                return !to(t) || !to(e) || !to(r)
            }

            function ta(t) {
                return ts(t) || tl(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
            }

            function tl(t) {
                var e, r;
                return (e = t.x) && "0%" !== e || (r = t.y) && "0%" !== r
            }

            function tu(t, e, r, n, i) {
                return void 0 !== i && (t = n + i * (t - n)), n + r * (t - n) + e
            }

            function tc(t, e = 0, r = 1, n, i) {
                t.min = tu(t.min, e, r, n, i), t.max = tu(t.max, e, r, n, i)
            }

            function th(t, {
                x: e,
                y: r
            }) {
                tc(t.x, e.translate, e.scale, e.originPoint), tc(t.y, r.translate, r.scale, r.originPoint)
            }

            function td(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function tp(t, e, r, n, i = .5) {
                let o = (0, U.t)(t.min, t.max, i);
                tc(t, e, r, o, n)
            }

            function tf(t, e) {
                tp(t.x, e.x, e.scaleX, e.scale, e.originX), tp(t.y, e.y, e.scaleY, e.scale, e.originY)
            }

            function tm(t, e) {
                return ti(function(t, e) {
                    if (!e) return t;
                    let r = e({
                            x: t.left,
                            y: t.top
                        }),
                        n = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: r.y,
                        left: r.x,
                        bottom: n.y,
                        right: n.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            var tg = r(7492),
                tv = r(821);
            let ty = ({
                current: t
            }) => t ? t.ownerDocument.defaultView : null;
            var tb = r(1327);
            let tx = new WeakMap;
            class tw {
                constructor(t) {
                    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = tr(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: r
                    } = this.visualElement;
                    if (r && !1 === r.isPresent) return;
                    let {
                        dragSnapToOrigin: n
                    } = this.getProps();
                    this.panSession = new O(t, {
                        onSessionStart: t => {
                            let {
                                dragSnapToOrigin: r
                            } = this.getProps();
                            r ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(R(t).point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: r,
                                dragPropagation: n,
                                onDragStart: i
                            } = this.getProps();
                            if (r && !n && (this.openDragLock && this.openDragLock(), this.openDragLock = (0, A.KV)(r), !this.openDragLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), tn(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (tg.aQ.test(e)) {
                                    let {
                                        projection: r
                                    } = this.visualElement;
                                    if (r && r.layout) {
                                        let n = r.layout.layoutBox[t];
                                        if (n) {
                                            let t = _(n);
                                            e = parseFloat(e) / 100 * t
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), i && V.Wi.postRender(() => i(t, e)), (0, tb.K)(this.visualElement, "transform");
                            let {
                                animationState: o
                            } = this.visualElement;
                            o && o.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: r,
                                dragDirectionLock: n,
                                onDirectionLock: i,
                                onDrag: o
                            } = this.getProps();
                            if (!r && !this.openDragLock) return;
                            let {
                                offset: s
                            } = e;
                            if (n && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let r = null;
                                    return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"), r
                                }(s), null !== this.currentDirection && i && i(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, s), this.updateAxis("y", e.point, s), this.visualElement.render(), o && o(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e),
                        resumeAnimation: () => tn(t => {
                            var e;
                            return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                        })
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: n,
                        contextWindow: ty(this.visualElement)
                    })
                }
                stop(t, e) {
                    let r = this.isDragging;
                    if (this.cancel(), !r) return;
                    let {
                        velocity: n
                    } = e;
                    this.startAnimation(n);
                    let {
                        onDragEnd: i
                    } = this.getProps();
                    i && V.Wi.postRender(() => i(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: r
                    } = this.getProps();
                    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, r) {
                    let {
                        drag: n
                    } = this.getProps();
                    if (!r || !tP(t, n, this.currentDirection)) return;
                    let i = this.getAxisMotionValue(t),
                        o = this.originPoint[t] + r[t];
                    this.constraints && this.constraints[t] && (o = function(t, {
                        min: e,
                        max: r
                    }, n) {
                        return void 0 !== e && t < e ? t = n ? (0, U.t)(e, t, n.min) : Math.max(t, e) : void 0 !== r && t > r && (t = n ? (0, U.t)(r, t, n.max) : Math.min(t, r)), t
                    }(o, this.constraints[t], this.elastic[t])), i.set(o)
                }
                resolveConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        dragElastic: r
                    } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout, i = this.constraints;
                    e && I(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, {
                        top: e,
                        left: r,
                        bottom: n,
                        right: i
                    }) {
                        return {
                            x: q(t.x, r, i),
                            y: q(t.y, e, n)
                        }
                    }(n.layoutBox, e) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: H(t, "left", "right"),
                            y: H(t, "top", "bottom")
                        }
                    }(r), i !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && tn(t => {
                        !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let r = {};
                            return void 0 !== e.min && (r.min = e.min - t.min), void 0 !== e.max && (r.max = e.max - t.min), r
                        }(n.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: r
                    } = this.getProps();
                    if (!e || !I(e)) return !1;
                    let n = e.current;
                    (0, T.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: i
                    } = this.visualElement;
                    if (!i || !i.layout) return !1;
                    let o = function(t, e, r) {
                            let n = tm(t, r),
                                {
                                    scroll: i
                                } = e;
                            return i && (td(n.x, i.offset.x), td(n.y, i.offset.y)), n
                        }(n, i.root, this.visualElement.getTransformPagePoint()),
                        s = {
                            x: G((t = i.layout.layoutBox).x, o.x),
                            y: G(t.y, o.y)
                        };
                    if (r) {
                        let t = r(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(s));
                        this.hasMutatedConstraints = !!t, t && (s = ti(t))
                    }
                    return s
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: r,
                        dragElastic: n,
                        dragTransition: i,
                        dragSnapToOrigin: o,
                        onDragTransitionEnd: s
                    } = this.getProps(), a = this.constraints || {};
                    return Promise.all(tn(s => {
                        if (!tP(s, e, this.currentDirection)) return;
                        let l = a && a[s] || {};
                        o && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: r ? t[s] : 0,
                            bounceStiffness: n ? 200 : 1e6,
                            bounceDamping: n ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...i,
                            ...l
                        };
                        return this.startAxisValueAnimation(s, u)
                    })).then(s)
                }
                startAxisValueAnimation(t, e) {
                    let r = this.getAxisMotionValue(t);
                    return (0, tb.K)(this.visualElement, t), r.start((0, tv.v)(t, r, 0, e, this.visualElement, !1))
                }
                stopAnimation() {
                    tn(t => this.getAxisMotionValue(t).stop())
                }
                pauseAnimation() {
                    tn(t => {
                        var e;
                        return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                    })
                }
                getAnimationState(t) {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
                }
                getAxisMotionValue(t) {
                    let e = `_drag${t.toUpperCase()}`,
                        r = this.visualElement.getProps();
                    return r[e] || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    tn(e => {
                        let {
                            drag: r
                        } = this.getProps();
                        if (!tP(e, r, this.currentDirection)) return;
                        let {
                            projection: n
                        } = this.visualElement, i = this.getAxisMotionValue(e);
                        if (n && n.layout) {
                            let {
                                min: r,
                                max: o
                            } = n.layout.layoutBox[e];
                            i.set(t[e] - (0, U.t)(r, o, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: r
                    } = this.visualElement;
                    if (!I(e) || !r || !this.constraints) return;
                    this.stopAnimation();
                    let n = {
                        x: 0,
                        y: 0
                    };
                    tn(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e && !1 !== this.constraints) {
                            let r = e.get();
                            n[t] = function(t, e) {
                                let r = .5,
                                    n = _(t),
                                    i = _(e);
                                return i > n ? r = (0, W.Y)(e.min, e.max - n, t.min) : n > i && (r = (0, W.Y)(t.min, t.max - i, e.min)), (0, Z.u)(0, 1, r)
                            }({
                                min: r,
                                max: r
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: i
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), tn(e => {
                        if (!tP(e, t, null)) return;
                        let r = this.getAxisMotionValue(e),
                            {
                                min: i,
                                max: o
                            } = this.constraints[e];
                        r.set((0, U.t)(i, o, n[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    tx.set(this.visualElement, this);
                    let t = C(this.visualElement.current, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: r = !0
                            } = this.getProps();
                            e && r && this.start(t)
                        }),
                        e = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            I(t) && t.current && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: r
                        } = this.visualElement,
                        n = r.addEventListener("measure", e);
                    r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), V.Wi.read(e);
                    let i = k(window, "resize", () => this.scalePositionWithinConstraints()),
                        o = r.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (tn(e => {
                                let r = this.getAxisMotionValue(e);
                                r && (this.originPoint[e] += t[e].translate, r.set(r.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        i(), t(), n(), o && o()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: r = !1,
                            dragPropagation: n = !1,
                            dragConstraints: i = !1,
                            dragElastic: o = .35,
                            dragMomentum: s = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: r,
                        dragPropagation: n,
                        dragConstraints: i,
                        dragElastic: o,
                        dragMomentum: s
                    }
                }
            }

            function tP(t, e, r) {
                return (!0 === e || e === t) && (null === r || r === t)
            }
            class tS extends b {
                constructor(t) {
                    super(t), this.removeGroupControls = S.Z, this.removeListeners = S.Z, this.controls = new tw(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || S.Z
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let tT = t => (e, r) => {
                t && V.Wi.postRender(() => t(e, r))
            };
            class tA extends b {
                constructor() {
                    super(...arguments), this.removePointerDownListener = S.Z
                }
                onPointerDown(t) {
                    this.session = new O(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: ty(this.node)
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: r,
                        onPanEnd: n
                    } = this.node.getProps();
                    return {
                        onSessionStart: tT(t),
                        onStart: tT(e),
                        onMove: r,
                        onEnd: (t, e) => {
                            delete this.session, n && V.Wi.postRender(() => n(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = C(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            var tE = r(7437),
                tk = r(2265),
                tR = r(9637),
                tM = r(8881);
            let tC = (0, tk.createContext)({}),
                tj = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

            function tD(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let tV = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t) {
                        if (!tg.px.test(t)) return t;
                        t = parseFloat(t)
                    }
                    let r = tD(t, e.target.x),
                        n = tD(t, e.target.y);
                    return `${r}% ${n}%`
                }
            };
            var tO = r(3206);
            let tL = {},
                {
                    schedule: tF,
                    cancel: tB
                } = (0, r(5005).Z)(queueMicrotask, !1);
            class tN extends tk.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: r,
                        layoutId: n
                    } = this.props, {
                        projection: i
                    } = t;
                    Object.assign(tL, tW), i && (e.group && e.group.add(i), r && r.register && n && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), i.setOptions({ ...i.options,
                        onExitComplete: () => this.safeToRemove()
                    })), tj.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: r,
                        drag: n,
                        isPresent: i
                    } = this.props, o = r.projection;
                    return o && (o.isPresent = i, n || t.layoutDependency !== e || void 0 === e ? o.willUpdate() : this.safeToRemove(), t.isPresent === i || (i ? o.promote() : o.relegate() || V.Wi.postRender(() => {
                        let t = o.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), tF.postRender(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: r
                    } = this.props, {
                        projection: n
                    } = t;
                    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), r && r.deregister && r.deregister(n))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function tI(t) {
                let [e, r] = (0, tR.oO)(), n = (0, tk.useContext)(tM.p);
                return (0, tE.jsx)(tN, { ...t,
                    layoutGroup: n,
                    switchLayoutGroup: (0, tk.useContext)(tC),
                    isPresent: e,
                    safeToRemove: r
                })
            }
            let tW = {
                borderRadius: { ...tV,
                    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                },
                borderTopLeftRadius: tV,
                borderTopRightRadius: tV,
                borderBottomLeftRadius: tV,
                borderBottomRightRadius: tV,
                boxShadow: {
                    correct: (t, {
                        treeScale: e,
                        projectionDelta: r
                    }) => {
                        let n = tO.P.parse(t);
                        if (n.length > 5) return t;
                        let i = tO.P.createTransformer(t),
                            o = "number" != typeof n[0] ? 1 : 0,
                            s = r.x.scale * e.x,
                            a = r.y.scale * e.y;
                        n[0 + o] /= s, n[1 + o] /= a;
                        let l = (0, U.t)(s, a, .5);
                        return "number" == typeof n[2 + o] && (n[2 + o] /= l), "number" == typeof n[3 + o] && (n[3 + o] /= l), i(n)
                    }
                }
            };
            var tU = r(3078),
                t_ = r(3999),
                t$ = r(4005),
                tz = r(504),
                tX = r(9013);
            let tK = (t, e) => t.depth - e.depth;
            class tY {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    (0, tX.y4)(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    (0, tX.cl)(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(tK), this.isDirty = !1, this.children.forEach(t)
                }
            }
            var tZ = r(4081),
                tq = r(4581);

            function tG(t) {
                let e = (0, t_.i)(t) ? t.get() : t;
                return (0, tq.p)(e) ? e.toValue() : e
            }
            var tH = r(6378);
            let tJ = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                tQ = tJ.length,
                t0 = t => "string" == typeof t ? parseFloat(t) : t,
                t1 = t => "number" == typeof t || tg.px.test(t);

            function t5(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let t2 = t3(0, .5, tH.Bn),
                t4 = t3(.5, .95, S.Z);

            function t3(t, e, r) {
                return n => n < t ? 0 : n > e ? 1 : r((0, W.Y)(t, e, n))
            }

            function t7(t, e) {
                t.min = e.min, t.max = e.max
            }

            function t9(t, e) {
                t7(t.x, e.x), t7(t.y, e.y)
            }

            function t6(t, e) {
                t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
            }

            function t8(t, e, r, n, i) {
                return t -= e, t = n + 1 / r * (t - n), void 0 !== i && (t = n + 1 / i * (t - n)), t
            }

            function et(t, e, [r, n, i], o, s) {
                ! function(t, e = 0, r = 1, n = .5, i, o = t, s = t) {
                    if (tg.aQ.test(e) && (e = parseFloat(e), e = (0, U.t)(s.min, s.max, e / 100) - s.min), "number" != typeof e) return;
                    let a = (0, U.t)(o.min, o.max, n);
                    t === o && (a -= e), t.min = t8(t.min, e, r, a, i), t.max = t8(t.max, e, r, a, i)
                }(t, e[r], e[n], e[i], e.scale, o, s)
            }
            let ee = ["x", "scaleX", "originX"],
                er = ["y", "scaleY", "originY"];

            function en(t, e, r, n) {
                et(t.x, e, ee, r ? r.x : void 0, n ? n.x : void 0), et(t.y, e, er, r ? r.y : void 0, n ? n.y : void 0)
            }

            function ei(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function eo(t) {
                return ei(t.x) && ei(t.y)
            }

            function es(t, e) {
                return t.min === e.min && t.max === e.max
            }

            function ea(t, e) {
                return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
            }

            function el(t, e) {
                return ea(t.x, e.x) && ea(t.y, e.y)
            }

            function eu(t) {
                return _(t.x) / _(t.y)
            }

            function ec(t, e) {
                return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
            }
            class eh {
                constructor() {
                    this.members = []
                }
                add(t) {
                    (0, tX.y4)(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if ((0, tX.cl)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let r = this.members.findIndex(e => t === e);
                    if (0 === r) return !1;
                    for (let t = r; t >= 0; t--) {
                        let r = this.members[t];
                        if (!1 !== r.isPresent) {
                            e = r;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let r = this.lead;
                    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
                        r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, e && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: n
                        } = t.options;
                        !1 === n && r.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: r
                        } = t;
                        e.onExitComplete && e.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }
            let ed = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                },
                ep = "undefined" != typeof window && void 0 !== window.MotionDebug,
                ef = ["", "X", "Y", "Z"],
                em = {
                    visibility: "hidden"
                },
                eg = 0;

            function ev(t, e, r, n) {
                let {
                    latestValues: i
                } = e;
                i[t] && (r[t] = i[t], e.setStaticValue(t, 0), n && (n[t] = 0))
            }

            function ey({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: r,
                checkIsScrollRoot: n,
                resetTransform: i
            }) {
                return class {
                    constructor(t = {}, r = null == e ? void 0 : e()) {
                        this.id = eg++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, ep && (ed.totalNodes = ed.resolvedTargetDeltas = ed.recalculatedProjection = 0), this.nodes.forEach(ew), this.nodes.forEach(eR), this.nodes.forEach(eM), this.nodes.forEach(eP), ep && window.MotionDebug.record(ed)
                        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new tY)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new tZ.L), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let r = this.eventHandlers.get(t);
                        r && r.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, r = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: n,
                            layout: i,
                            visualElement: o
                        } = this.options;
                        if (o && !o.current && o.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), r && (i || n) && (this.isLayoutDirty = !0), t) {
                            let r;
                            let n = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, r && r(), r = function(t, e) {
                                    let r = tz.X.now(),
                                        n = ({
                                            timestamp: e
                                        }) => {
                                            let i = e - r;
                                            i >= 250 && ((0, V.Pn)(n), t(i - 250))
                                        };
                                    return V.Wi.read(n, !0), () => (0, V.Pn)(n)
                                }(n, 0), tj.hasAnimatedSinceResize && (tj.hasAnimatedSinceResize = !1, this.nodes.forEach(ek))
                            })
                        }
                        n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && o && (n || i) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: r,
                            layout: n
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let i = this.options.transition || o.getDefaultTransition() || eL,
                                {
                                    onLayoutAnimationStart: s,
                                    onLayoutAnimationComplete: a
                                } = o.getProps(),
                                l = !this.targetLayout || !el(this.targetLayout, n) || r,
                                u = !e && r;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                                let e = { ...(0, A.ev)(i, "layout"),
                                    onPlay: s,
                                    onComplete: a
                                };
                                (o.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || ek(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = n
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, V.Pn)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(eC), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                                if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                                let {
                                    visualElement: r
                                } = e.options;
                                if (!r) return;
                                let n = (0, t$.s)(r);
                                if (window.MotionHasOptimisedAnimation(n, "transform")) {
                                    let {
                                        layout: t,
                                        layoutId: r
                                    } = e.options;
                                    window.MotionCancelOptimisedAnimation(n, "transform", V.Wi, !(t || r))
                                }
                                let {
                                    parent: i
                                } = e;
                                i && !i.hasCheckedOptimisedAppear && t(i)
                            }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: r
                        } = this.options;
                        if (void 0 === e && !r) return;
                        let n = this.getTransformTemplate();
                        this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(eT);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(eA), this.isUpdating = !1, this.nodes.forEach(eE), this.nodes.forEach(eb), this.nodes.forEach(ex), this.clearAllSnapshots();
                        let t = tz.X.now();
                        V.frameData.delta = (0, Z.u)(0, 1e3 / 60, t - V.frameData.timestamp), V.frameData.timestamp = t, V.frameData.isProcessing = !0, V.yL.update.process(V.frameData), V.yL.preRender.process(V.frameData), V.yL.render.process(V.frameData), V.frameData.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, tF.read(this.scheduleUpdate))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(eS), this.sharedNodes.forEach(ej)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, V.Wi.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        V.Wi.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = tr(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e) {
                            let e = n(this.instance);
                            this.scroll = {
                                animationId: this.root.animationId,
                                phase: t,
                                isRoot: e,
                                offset: r(this.instance),
                                wasRoot: this.scroll ? this.scroll.isRoot : e
                            }
                        }
                    }
                    resetTransform() {
                        if (!i) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                            e = this.projectionDelta && !eo(this.projectionDelta),
                            r = this.getTransformTemplate(),
                            n = r ? r(this.latestValues, "") : void 0,
                            o = n !== this.prevTransformTemplateValue;
                        t && (e || ta(this.latestValues) || o) && (i(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let r = this.measurePageBox(),
                            n = this.removeElementScroll(r);
                        return t && (n = this.removeTransform(n)), eN((e = n).x), eN(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: r,
                            layoutBox: n,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        var t;
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return tr();
                        let r = e.measureViewportBox();
                        if (!((null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(eW))) {
                            let {
                                scroll: t
                            } = this.root;
                            t && (td(r.x, t.offset.x), td(r.y, t.offset.y))
                        }
                        return r
                    }
                    removeElementScroll(t) {
                        var e;
                        let r = tr();
                        if (t9(r, t), null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) return r;
                        for (let e = 0; e < this.path.length; e++) {
                            let n = this.path[e],
                                {
                                    scroll: i,
                                    options: o
                                } = n;
                            n !== this.root && i && o.layoutScroll && (i.wasRoot && t9(r, t), td(r.x, i.offset.x), td(r.y, i.offset.y))
                        }
                        return r
                    }
                    applyTransform(t, e = !1) {
                        let r = tr();
                        t9(r, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let n = this.path[t];
                            !e && n.options.layoutScroll && n.scroll && n !== n.root && tf(r, {
                                x: -n.scroll.offset.x,
                                y: -n.scroll.offset.y
                            }), ta(n.latestValues) && tf(r, n.latestValues)
                        }
                        return ta(this.latestValues) && tf(r, this.latestValues), r
                    }
                    removeTransform(t) {
                        let e = tr();
                        t9(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let r = this.path[t];
                            if (!r.instance || !ta(r.latestValues)) continue;
                            ts(r.latestValues) && r.updateSnapshot();
                            let n = tr();
                            t9(n, r.measurePageBox()), en(e, r.latestValues, r.snapshot ? r.snapshot.layoutBox : void 0, n)
                        }
                        return ta(this.latestValues) && en(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== V.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, r, n, i;
                        let o = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
                        let s = !!this.resumingFrom || this !== o;
                        if (!(t || s && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                        let {
                            layout: a,
                            layoutId: l
                        } = this.options;
                        if (this.layout && (a || l)) {
                            if (this.resolvedRelativeTargetAt = V.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = tr(), this.relativeTargetOrigin = tr(), Y(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), t9(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = tr(), this.targetWithTransforms = tr()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), r = this.target, n = this.relativeTarget, i = this.relativeParent.target, X(r.x, n.x, i.x), X(r.y, n.y, i.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : t9(this.target, this.layout.layoutBox), th(this.target, this.targetDelta)) : t9(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = tr(), this.relativeTargetOrigin = tr(), Y(this.relativeTargetOrigin, this.target, t.target), t9(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                ep && ed.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || ts(this.parent.latestValues) || tl(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            r = !!this.resumingFrom || this !== e,
                            n = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1), r && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === V.frameData.timestamp && (n = !1), n) return;
                        let {
                            layout: i,
                            layoutId: o
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(i || o)) return;
                        t9(this.layoutCorrected, this.layout.layoutBox);
                        let s = this.treeScale.x,
                            a = this.treeScale.y;
                        ! function(t, e, r, n = !1) {
                            let i, o;
                            let s = r.length;
                            if (s) {
                                e.x = e.y = 1;
                                for (let a = 0; a < s; a++) {
                                    o = (i = r[a]).projectionDelta;
                                    let {
                                        visualElement: s
                                    } = i.options;
                                    (!s || !s.props.style || "contents" !== s.props.style.display) && (n && i.options.layoutScroll && i.scroll && i !== i.root && tf(t, {
                                        x: -i.scroll.offset.x,
                                        y: -i.scroll.offset.y
                                    }), o && (e.x *= o.x.scale, e.y *= o.y.scale, th(t, o)), n && ta(i.latestValues) && tf(t, i.latestValues))
                                }
                                e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, r), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox, e.targetWithTransforms = tr());
                        let {
                            target: l
                        } = e;
                        if (!l) {
                            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                            return
                        }
                        this.projectionDelta && this.prevProjectionDelta ? (t6(this.prevProjectionDelta.x, this.projectionDelta.x), t6(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), z(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === s && this.treeScale.y === a && ec(this.projectionDelta.x, this.prevProjectionDelta.x) && ec(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), ep && ed.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        var e;
                        if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    createProjectionDeltas() {
                        this.prevProjectionDelta = tt(), this.projectionDelta = tt(), this.projectionDeltaWithTransform = tt()
                    }
                    setAnimationOrigin(t, e = !1) {
                        let r;
                        let n = this.snapshot,
                            i = n ? n.latestValues : {},
                            o = { ...this.latestValues
                            },
                            s = tt();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = tr(),
                            l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            u = this.getStack(),
                            c = !u || u.members.length <= 1,
                            h = !!(l && !c && !0 === this.options.crossfade && !this.path.some(eO));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let n = e / 1e3;
                            if (eD(s.x, t.x, n), eD(s.y, t.y, n), this.setTargetDelta(s), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var u, d, p, f;
                                Y(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, f = this.relativeTargetOrigin, eV(p.x, f.x, a.x, n), eV(p.y, f.y, a.y, n), r && (u = this.relativeTarget, d = r, es(u.x, d.x) && es(u.y, d.y)) && (this.isProjectionDirty = !1), r || (r = tr()), t9(r, this.relativeTarget)
                            }
                            l && (this.animationValues = o, function(t, e, r, n, i, o) {
                                i ? (t.opacity = (0, U.t)(0, void 0 !== r.opacity ? r.opacity : 1, t2(n)), t.opacityExit = (0, U.t)(void 0 !== e.opacity ? e.opacity : 1, 0, t4(n))) : o && (t.opacity = (0, U.t)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== r.opacity ? r.opacity : 1, n));
                                for (let i = 0; i < tQ; i++) {
                                    let o = `border${tJ[i]}Radius`,
                                        s = t5(e, o),
                                        a = t5(r, o);
                                    (void 0 !== s || void 0 !== a) && (s || (s = 0), a || (a = 0), 0 === s || 0 === a || t1(s) === t1(a) ? (t[o] = Math.max((0, U.t)(t0(s), t0(a), n), 0), (tg.aQ.test(a) || tg.aQ.test(s)) && (t[o] += "%")) : t[o] = a)
                                }(e.rotate || r.rotate) && (t.rotate = (0, U.t)(e.rotate || 0, r.rotate || 0, n))
                            }(o, i, this.latestValues, n, h, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, V.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = V.Wi.update(() => {
                            tj.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, r) {
                                let n = (0, t_.i)(0) ? 0 : (0, tU.BX)(0);
                                return n.start((0, tv.v)("", n, 1e3, r)), n.animation
                            }(0, 0, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: r,
                                layout: n,
                                latestValues: i
                            } = t;
                        if (e && r && n) {
                            if (this !== t && this.layout && n && eI(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                                r = this.target || tr();
                                let e = _(this.layout.layoutBox.x);
                                r.x.min = t.target.x.min, r.x.max = r.x.min + e;
                                let n = _(this.layout.layoutBox.y);
                                r.y.min = t.target.y.min, r.y.max = r.y.min + n
                            }
                            t9(e, r), tf(e, i), z(this.projectionDeltaWithTransform, this.layoutCorrected, e, i)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new eh), this.sharedNodes.get(t).add(e);
                        let r = e.options.initialPromotionConfig;
                        e.promote({
                            transition: r ? r.transition : void 0,
                            preserveFollowOpacity: r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: r
                    } = {}) {
                        let n = this.getStack();
                        n && n.promote(this, r), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetSkewAndRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: r
                            } = t;
                        if ((r.z || r.rotate || r.rotateX || r.rotateY || r.rotateZ || r.skewX || r.skewY) && (e = !0), !e) return;
                        let n = {};
                        r.z && ev("z", t, n, this.animationValues);
                        for (let e = 0; e < ef.length; e++) ev(`rotate${ef[e]}`, t, n, this.animationValues), ev(`skew${ef[e]}`, t, n, this.animationValues);
                        for (let e in t.render(), n) t.setStaticValue(e, n[e]), this.animationValues && (this.animationValues[e] = n[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t) {
                        var e, r;
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return em;
                        let n = {
                                visibility: ""
                            },
                            i = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = tG(null == t ? void 0 : t.pointerEvents) || "", n.transform = i ? i(this.latestValues, "") : "none", n;
                        let o = this.getLead();
                        if (!this.projectionDelta || !this.layout || !o.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = tG(null == t ? void 0 : t.pointerEvents) || ""), this.hasProjected && !ta(this.latestValues) && (e.transform = i ? i({}, "") : "none", this.hasProjected = !1), e
                        }
                        let s = o.animationValues || o.latestValues;
                        this.applyTransformsToTarget(), n.transform = function(t, e, r) {
                            let n = "",
                                i = t.x.translate / e.x,
                                o = t.y.translate / e.y,
                                s = (null == r ? void 0 : r.z) || 0;
                            if ((i || o || s) && (n = `translate3d(${i}px, ${o}px, ${s}px) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1/e.x}, ${1/e.y}) `), r) {
                                let {
                                    transformPerspective: t,
                                    rotate: e,
                                    rotateX: i,
                                    rotateY: o,
                                    skewX: s,
                                    skewY: a
                                } = r;
                                t && (n = `perspective(${t}px) ${n}`), e && (n += `rotate(${e}deg) `), i && (n += `rotateX(${i}deg) `), o && (n += `rotateY(${o}deg) `), s && (n += `skewX(${s}deg) `), a && (n += `skewY(${a}deg) `)
                            }
                            let a = t.x.scale * e.x,
                                l = t.y.scale * e.y;
                            return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none"
                        }(this.projectionDeltaWithTransform, this.treeScale, s), i && (n.transform = i(s, n.transform));
                        let {
                            x: a,
                            y: l
                        } = this.projectionDelta;
                        for (let t in n.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, o.animationValues ? n.opacity = o === this ? null !== (r = null !== (e = s.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== r ? r : 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : n.opacity = o === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0, tL) {
                            if (void 0 === s[t]) continue;
                            let {
                                correct: e,
                                applyTo: r
                            } = tL[t], i = "none" === n.transform ? s[t] : e(s[t], o);
                            if (r) {
                                let t = r.length;
                                for (let e = 0; e < t; e++) n[r[e]] = i
                            } else n[t] = i
                        }
                        return this.options.layoutId && (n.pointerEvents = o === this ? tG(null == t ? void 0 : t.pointerEvents) || "" : "none"), n
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(eT), this.root.sharedNodes.clear()
                    }
                }
            }

            function eb(t) {
                t.updateLayout()
            }

            function ex(t) {
                var e;
                let r = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: n
                    } = t.layout, {
                        animationType: i
                    } = t.options, o = r.source !== t.layout.source;
                    "size" === i ? tn(t => {
                        let n = o ? r.measuredBox[t] : r.layoutBox[t],
                            i = _(n);
                        n.min = e[t].min, n.max = n.min + i
                    }) : eI(i, r.layoutBox, e) && tn(n => {
                        let i = o ? r.measuredBox[n] : r.layoutBox[n],
                            s = _(e[n]);
                        i.max = i.min + s, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + s)
                    });
                    let s = tt();
                    z(s, e, r.layoutBox);
                    let a = tt();
                    o ? z(a, t.applyTransform(n, !0), r.measuredBox) : z(a, e, r.layoutBox);
                    let l = !eo(s),
                        u = !1;
                    if (!t.resumeFrom) {
                        let n = t.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let {
                                snapshot: i,
                                layout: o
                            } = n;
                            if (i && o) {
                                let s = tr();
                                Y(s, r.layoutBox, i.layoutBox);
                                let a = tr();
                                Y(a, e, o.layoutBox), el(s, a) || (u = !0), n.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = s, t.relativeParent = n)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: r,
                        delta: a,
                        layoutDelta: s,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: u
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function ew(t) {
                ep && ed.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function eP(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function eS(t) {
                t.clearSnapshot()
            }

            function eT(t) {
                t.clearMeasurements()
            }

            function eA(t) {
                t.isLayoutDirty = !1
            }

            function eE(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function ek(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function eR(t) {
                t.resolveTargetDelta()
            }

            function eM(t) {
                t.calcProjection()
            }

            function eC(t) {
                t.resetSkewAndRotation()
            }

            function ej(t) {
                t.removeLeadSnapshot()
            }

            function eD(t, e, r) {
                t.translate = (0, U.t)(e.translate, 0, r), t.scale = (0, U.t)(e.scale, 1, r), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function eV(t, e, r, n) {
                t.min = (0, U.t)(e.min, r.min, n), t.max = (0, U.t)(e.max, r.max, n)
            }

            function eO(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let eL = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                eF = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
                eB = eF("applewebkit/") && !eF("chrome/") ? Math.round : S.Z;

            function eN(t) {
                t.min = eB(t.min), t.max = eB(t.max)
            }

            function eI(t, e, r) {
                return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(eu(e) - eu(r)))
            }

            function eW(t) {
                var e;
                return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
            }
            let eU = ey({
                    attachResizeListener: (t, e) => k(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                e_ = {
                    current: void 0
                },
                e$ = ey({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!e_.current) {
                            let t = new eU({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), e_.current = t
                        }
                        return e_.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                });

            function ez(t, e, r) {
                let {
                    props: n
                } = t;
                t.animationState && n.whileHover && t.animationState.setActive("whileHover", "Start" === r);
                let i = n["onHover" + r];
                i && V.Wi.postRender(() => i(e, R(e)))
            }
            class eX extends b {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = (0, A.Mr)(t, t => (ez(this.node, t, "Start"), t => ez(this.node, t, "End"))))
                }
                unmount() {}
            }
            class eK extends b {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = (0, D.z)(k(this.node.current, "focus", () => this.onFocus()), k(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }

            function eY(t, e, r) {
                let {
                    props: n
                } = t;
                t.animationState && n.whileTap && t.animationState.setActive("whileTap", "Start" === r);
                let i = n["onTap" + ("End" === r ? "" : r)];
                i && V.Wi.postRender(() => i(e, R(e)))
            }
            class eZ extends b {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = (0, A.OD)(t, t => (eY(this.node, t, "Start"), (t, {
                        success: e
                    }) => eY(this.node, t, e ? "End" : "Cancel")), {
                        useGlobalTarget: this.node.props.globalTapTarget
                    }))
                }
                unmount() {}
            }
            let eq = new WeakMap,
                eG = new WeakMap,
                eH = t => {
                    let e = eq.get(t.target);
                    e && e(t)
                },
                eJ = t => {
                    t.forEach(eH)
                },
                eQ = {
                    some: 0,
                    all: 1
                };
            class e0 extends b {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: t = {}
                    } = this.node.getProps(), {
                        root: e,
                        margin: r,
                        amount: n = "some",
                        once: i
                    } = t, o = {
                        root: e ? e.current : void 0,
                        rootMargin: r,
                        threshold: "number" == typeof n ? n : eQ[n]
                    };
                    return function(t, e, r) {
                        let n = function({
                            root: t,
                            ...e
                        }) {
                            let r = t || document;
                            eG.has(r) || eG.set(r, {});
                            let n = eG.get(r),
                                i = JSON.stringify(e);
                            return n[i] || (n[i] = new IntersectionObserver(eJ, {
                                root: t,
                                ...e
                            })), n[i]
                        }(e);
                        return eq.set(t, r), n.observe(t), () => {
                            eq.delete(t), n.unobserve(t)
                        }
                    }(this.node.current, o, t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, i && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: r,
                            onViewportLeave: n
                        } = this.node.getProps(), o = e ? r : n;
                        o && o(t)
                    })
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: t = {}
                    }, {
                        viewport: e = {}
                    } = {}) {
                        return r => t[r] !== e[r]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }
            let e1 = (0, tk.createContext)({
                strict: !1
            });
            var e5 = r(5750);
            let e2 = (0, tk.createContext)({});

            function e4(t) {
                return n(t.animate) || d.some(e => u(t[e]))
            }

            function e3(t) {
                return !!(e4(t) || t.variants)
            }

            function e7(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            var e9 = r(4563);
            let e6 = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                e8 = {};
            for (let t in e6) e8[t] = {
                isEnabled: e => e6[t].some(t => !!e[t])
            };
            let rt = Symbol.for("motionComponentSymbol");
            var re = r(4252),
                rr = r(1534),
                rn = r(1750);
            let ri = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function ro(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (ri.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
                return !1
            }
            var rs = r(1297),
                ra = r(3576);
            let rl = t => (e, r) => {
                let i = (0, tk.useContext)(e2),
                    o = (0, tk.useContext)(re.O),
                    s = () => (function({
                        scrapeMotionValuesFromProps: t,
                        createRenderState: e,
                        onUpdate: r
                    }, i, o, s) {
                        let a = {
                            latestValues: function(t, e, r, i) {
                                let o = {},
                                    s = i(t, {});
                                for (let t in s) o[t] = tG(s[t]);
                                let {
                                    initial: a,
                                    animate: l
                                } = t, u = e4(t), c = e3(t);
                                e && c && !u && !1 !== t.inherit && (void 0 === a && (a = e.initial), void 0 === l && (l = e.animate));
                                let h = !!r && !1 === r.initial,
                                    d = (h = h || !1 === a) ? l : a;
                                if (d && "boolean" != typeof d && !n(d)) {
                                    let e = Array.isArray(d) ? d : [d];
                                    for (let r = 0; r < e.length; r++) {
                                        let n = (0, rs.o)(t, e[r]);
                                        if (n) {
                                            let {
                                                transitionEnd: t,
                                                transition: e,
                                                ...r
                                            } = n;
                                            for (let t in r) {
                                                let e = r[t];
                                                if (Array.isArray(e)) {
                                                    let t = h ? e.length - 1 : 0;
                                                    e = e[t]
                                                }
                                                null !== e && (o[t] = e)
                                            }
                                            for (let e in t) o[e] = t[e]
                                        }
                                    }
                                }
                                return o
                            }(i, o, s, t),
                            renderState: e()
                        };
                        return r && (a.onMount = t => r({
                            props: i,
                            current: t,
                            ...a
                        }), a.onUpdate = t => r(t)), a
                    })(t, e, i, o);
                return r ? s() : (0, ra.h)(s)
            };
            var ru = r(7487),
                rc = r(7249);
            let rh = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
            var rd = r(6204);
            let rp = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                rf = ru._.length;

            function rm(t, e, r) {
                let {
                    style: n,
                    vars: i,
                    transformOrigin: o
                } = t, s = !1, a = !1;
                for (let t in e) {
                    let r = e[t];
                    if (ru.G.has(t)) {
                        s = !0;
                        continue
                    }
                    if ((0, rc.f)(t)) {
                        i[t] = r;
                        continue
                    } {
                        let e = rh(r, rd.j[t]);
                        t.startsWith("origin") ? (a = !0, o[t] = e) : n[t] = e
                    }
                }
                if (!e.transform && (s || r ? n.transform = function(t, e, r) {
                        let n = "",
                            i = !0;
                        for (let o = 0; o < rf; o++) {
                            let s = ru._[o],
                                a = t[s];
                            if (void 0 === a) continue;
                            let l = !0;
                            if (!(l = "number" == typeof a ? a === (s.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a)) || r) {
                                let t = rh(a, rd.j[s]);
                                if (!l) {
                                    i = !1;
                                    let e = rp[s] || s;
                                    n += `${e}(${t}) `
                                }
                                r && (e[s] = t)
                            }
                        }
                        return n = n.trim(), r ? n = r(e, i ? "" : n) : i && (n = "none"), n
                    }(e, t.transform, r) : n.transform && (n.transform = "none")), a) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: r = 0
                    } = o;
                    n.transformOrigin = `${t} ${e} ${r}`
                }
            }

            function rg(t, e, r) {
                return "string" == typeof t ? t : tg.px.transform(e + r * t)
            }
            let rv = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                ry = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function rb(t, {
                attrX: e,
                attrY: r,
                attrScale: n,
                originX: i,
                originY: o,
                pathLength: s,
                pathSpacing: a = 1,
                pathOffset: l = 0,
                ...u
            }, c, h) {
                if (rm(t, u, h), c) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: d,
                    style: p,
                    dimensions: f
                } = t;
                d.transform && (f && (p.transform = d.transform), delete d.transform), f && (void 0 !== i || void 0 !== o || p.transform) && (p.transformOrigin = function(t, e, r) {
                    let n = rg(e, t.x, t.width),
                        i = rg(r, t.y, t.height);
                    return `${n} ${i}`
                }(f, void 0 !== i ? i : .5, void 0 !== o ? o : .5)), void 0 !== e && (d.x = e), void 0 !== r && (d.y = r), void 0 !== n && (d.scale = n), void 0 !== s && function(t, e, r = 1, n = 0, i = !0) {
                    t.pathLength = 1;
                    let o = i ? rv : ry;
                    t[o.offset] = tg.px.transform(-n);
                    let s = tg.px.transform(e),
                        a = tg.px.transform(r);
                    t[o.array] = `${s} ${a}`
                }(d, s, a, l, !1)
            }
            let rx = () => ({
                    style: {},
                    transform: {},
                    transformOrigin: {},
                    vars: {}
                }),
                rw = () => ({ ...rx(),
                    attrs: {}
                }),
                rP = t => "string" == typeof t && "svg" === t.toLowerCase();
            var rS = r(7444);

            function rT(t, {
                style: e,
                vars: r
            }, n, i) {
                for (let o in Object.assign(t.style, e, i && i.getProjectionStyles(n)), r) t.style.setProperty(o, r[o])
            }
            let rA = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function rE(t, e, r, n) {
                for (let r in rT(t, e, void 0, n), e.attrs) t.setAttribute(rA.has(r) ? r : (0, rS.D)(r), e.attrs[r])
            }

            function rk(t, {
                layout: e,
                layoutId: r
            }) {
                return ru.G.has(t) || t.startsWith("origin") || (e || void 0 !== r) && (!!tL[t] || "opacity" === t)
            }

            function rR(t, e, r) {
                var n;
                let {
                    style: i
                } = t, o = {};
                for (let s in i)((0, t_.i)(i[s]) || e.style && (0, t_.i)(e.style[s]) || rk(s, t) || (null === (n = null == r ? void 0 : r.getValue(s)) || void 0 === n ? void 0 : n.liveStyle) !== void 0) && (o[s] = i[s]);
                return o
            }

            function rM(t, e, r) {
                let n = rR(t, e, r);
                for (let r in t)((0, t_.i)(t[r]) || (0, t_.i)(e[r])) && (n[-1 !== ru._.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = t[r]);
                return n
            }
            let rC = ["x", "y", "width", "height", "cx", "cy", "r"],
                rj = {
                    useVisualState: rl({
                        scrapeMotionValuesFromProps: rM,
                        createRenderState: rw,
                        onUpdate: ({
                            props: t,
                            prevProps: e,
                            current: r,
                            renderState: n,
                            latestValues: i
                        }) => {
                            if (!r) return;
                            let o = !!t.drag;
                            if (!o) {
                                for (let t in i)
                                    if (ru.G.has(t)) {
                                        o = !0;
                                        break
                                    }
                            }
                            if (!o) return;
                            let s = !e;
                            if (e)
                                for (let r = 0; r < rC.length; r++) {
                                    let n = rC[r];
                                    t[n] !== e[n] && (s = !0)
                                }
                            s && (V.Wi.read(() => (function(t, e) {
                                try {
                                    e.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                                } catch (t) {
                                    e.dimensions = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    }
                                }
                            })(r, n)), V.Wi.render(() => {
                                rb(n, i, rP(r.tagName), t.transformTemplate), rE(r, n)
                            }))
                        }
                    })
                },
                rD = {
                    useVisualState: rl({
                        scrapeMotionValuesFromProps: rR,
                        createRenderState: rx
                    })
                };

            function rV(t, e, r) {
                for (let n in e)(0, t_.i)(e[n]) || rk(n, r) || (t[n] = e[n])
            }
            let rO = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function rL(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || rO.has(t)
            }
            let rF = t => !rL(t);
            try {
                (i = require("@emotion/is-prop-valid").default) && (rF = t => t.startsWith("on") ? !rL(t) : i(t))
            } catch (t) {}
            var rB = r(4946),
                rN = r(3697);
            let rI = {
                    current: null
                },
                rW = {
                    current: !1
                };
            var rU = r(5861),
                r_ = r(3964),
                r$ = r(8580),
                rz = r(5113);
            let rX = [...r$.$, r_.$, tO.P],
                rK = t => rX.find((0, rz.l)(t)),
                rY = new WeakMap;
            var rZ = r(9545);
            let rq = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class rG {
                scrapeMotionValuesFromProps(t, e, r) {
                    return {}
                }
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: r,
                    reducedMotionConfig: n,
                    blockInitialAnimation: i,
                    visualState: o
                }, s = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = rZ.e, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                        let t = tz.X.now();
                        this.renderScheduledAt < t && (this.renderScheduledAt = t, V.Wi.render(this.render, !1, !0))
                    };
                    let {
                        latestValues: a,
                        renderState: l,
                        onUpdate: u
                    } = o;
                    this.onUpdate = u, this.latestValues = a, this.baseTarget = { ...a
                    }, this.initialValues = e.initial ? { ...a
                    } : {}, this.renderState = l, this.parent = t, this.props = e, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = s, this.blockInitialAnimation = !!i, this.isControllingVariants = e4(e), this.isVariantNode = e3(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: c,
                        ...h
                    } = this.scrapeMotionValuesFromProps(e, {}, this);
                    for (let t in h) {
                        let e = h[t];
                        void 0 !== a[t] && (0, t_.i)(e) && e.set(a[t], !1)
                    }
                }
                mount(t) {
                    this.current = t, rY.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), rW.current || function() {
                        if (rW.current = !0, e9.j) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => rI.current = t.matches;
                                t.addListener(e), e()
                            } else rI.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || rI.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in rY.delete(this.current), this.projection && this.projection.unmount(), (0, V.Pn)(this.notifyUpdate), (0, V.Pn)(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) {
                        let e = this.features[t];
                        e && (e.unmount(), e.isMounted = !1)
                    }
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let r;
                    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                    let n = ru.G.has(t),
                        i = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && V.Wi.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        o = e.on("renderRequest", this.scheduleRender);
                    window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                        i(), o(), r && r(), e.owner && e.stop()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                updateFeatures() {
                    let t = "animation";
                    for (t in e8) {
                        let e = e8[t];
                        if (!e) continue;
                        let {
                            isEnabled: r,
                            Feature: n
                        } = e;
                        if (!this.features[t] && n && r(this.props) && (this.features[t] = new n(this)), this.features[t]) {
                            let e = this.features[t];
                            e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                        }
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : tr()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < rq.length; e++) {
                        let r = rq[e];
                        this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
                        let n = t["on" + r];
                        n && (this.propEventSubscriptions[r] = this.on(r, n))
                    }
                    this.prevMotionValues = function(t, e, r) {
                        for (let n in e) {
                            let i = e[n],
                                o = r[n];
                            if ((0, t_.i)(i)) t.addValue(n, i);
                            else if ((0, t_.i)(o)) t.addValue(n, (0, tU.BX)(i, {
                                owner: t
                            }));
                            else if (o !== i) {
                                if (t.hasValue(n)) {
                                    let e = t.getValue(n);
                                    !0 === e.liveStyle ? e.jump(i) : e.hasAnimated || e.set(i)
                                } else {
                                    let e = t.getStaticValue(n);
                                    t.addValue(n, (0, tU.BX)(void 0 !== e ? e : i, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let n in r) void 0 === e[n] && t.removeValue(n);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    let r = this.values.get(t);
                    e !== r && (r && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let r = this.values.get(t);
                    return void 0 === r && void 0 !== e && (r = (0, tU.BX)(null === e ? void 0 : e, {
                        owner: this
                    }), this.addValue(t, r)), r
                }
                readValue(t, e) {
                    var r;
                    let n = void 0 === this.latestValues[t] && this.current ? null !== (r = this.getBaseTargetFromProps(this.props, t)) && void 0 !== r ? r : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                    return null != n && ("string" == typeof n && ((0, rB.P)(n) || (0, rN.W)(n)) ? n = parseFloat(n) : !rK(n) && tO.P.test(e) && (n = (0, rU.T)(t, e)), this.setBaseTarget(t, (0, t_.i)(n) ? n.get() : n)), (0, t_.i)(n) ? n.get() : n
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let r;
                    let {
                        initial: n
                    } = this.props;
                    if ("string" == typeof n || "object" == typeof n) {
                        let i = (0, rs.o)(this.props, n, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                        i && (r = i[t])
                    }
                    if (n && void 0 !== r) return r;
                    let i = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === i || (0, t_.i)(i) ? void 0 !== this.initialValues[t] && void 0 === r ? void 0 : this.baseTarget[t] : i
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new tZ.L), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
            var rH = r(4238);
            class rJ extends rG {
                constructor() {
                    super(...arguments), this.KeyframeResolver = rH.s
                }
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: r
                }) {
                    delete e[t], delete r[t]
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    (0, t_.i)(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
            }
            var rQ = r(2005);
            class r0 extends rJ {
                constructor() {
                    super(...arguments), this.type = "html", this.renderInstance = rT
                }
                readValueFromInstance(t, e) {
                    if (ru.G.has(e)) {
                        let t = (0, rQ.A)(e);
                        return t && t.default || 0
                    } {
                        let r = window.getComputedStyle(t),
                            n = ((0, rc.f)(e) ? r.getPropertyValue(e) : r[e]) || 0;
                        return "string" == typeof n ? n.trim() : n
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return tm(t, e)
                }
                build(t, e, r) {
                    rm(t, e, r.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e, r) {
                    return rR(t, e, r)
                }
            }
            class r1 extends rJ {
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = tr
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (ru.G.has(e)) {
                        let t = (0, rQ.A)(e);
                        return t && t.default || 0
                    }
                    return e = rA.has(e) ? e : (0, rS.D)(e), t.getAttribute(e)
                }
                scrapeMotionValuesFromProps(t, e, r) {
                    return rM(t, e, r)
                }
                build(t, e, r) {
                    rb(t, e, this.isSVGTag, r.transformTemplate)
                }
                renderInstance(t, e, r, n) {
                    rE(t, e, r, n)
                }
                mount(t) {
                    this.isSVGTag = rP(t.tagName), super.mount(t)
                }
            }
            let r5 = function(t) {
                if ("undefined" == typeof Proxy) return t;
                let e = new Map;
                return new Proxy((...e) => t(...e), {
                    get: (r, n) => "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n))
                })
            }((o = {
                animation: {
                    Feature: x
                },
                exit: {
                    Feature: P
                },
                inView: {
                    Feature: e0
                },
                tap: {
                    Feature: eZ
                },
                focus: {
                    Feature: eK
                },
                hover: {
                    Feature: eX
                },
                pan: {
                    Feature: tA
                },
                drag: {
                    Feature: tS,
                    ProjectionNode: e$,
                    MeasureLayout: tI
                },
                layout: {
                    ProjectionNode: e$,
                    MeasureLayout: tI
                }
            }, s = (t, e) => ro(t) ? new r1(e) : new r0(e, {
                allowProjection: t !== tk.Fragment
            }), function(t, {
                forwardMotionProps: e
            } = {
                forwardMotionProps: !1
            }) {
                return function(t) {
                    var e, r;
                    let {
                        preloadedFeatures: n,
                        createVisualElement: i,
                        useRender: o,
                        useVisualState: s,
                        Component: a
                    } = t;

                    function l(t, e) {
                        var r;
                        let n;
                        let l = { ...(0, tk.useContext)(e5._),
                                ...t,
                                layoutId: function(t) {
                                    let {
                                        layoutId: e
                                    } = t, r = (0, tk.useContext)(tM.p).id;
                                    return r && void 0 !== e ? r + "-" + e : e
                                }(t)
                            },
                            {
                                isStatic: c
                            } = l,
                            h = function(t) {
                                let {
                                    initial: e,
                                    animate: r
                                } = function(t, e) {
                                    if (e4(t)) {
                                        let {
                                            initial: e,
                                            animate: r
                                        } = t;
                                        return {
                                            initial: !1 === e || u(e) ? e : void 0,
                                            animate: u(r) ? r : void 0
                                        }
                                    }
                                    return !1 !== t.inherit ? e : {}
                                }(t, (0, tk.useContext)(e2));
                                return (0, tk.useMemo)(() => ({
                                    initial: e,
                                    animate: r
                                }), [e7(e), e7(r)])
                            }(t),
                            d = s(t, c);
                        if (!c && e9.j) {
                            (0, tk.useContext)(e1).strict;
                            let t = function(t) {
                                let {
                                    drag: e,
                                    layout: r
                                } = e8;
                                if (!e && !r) return {};
                                let n = { ...e,
                                    ...r
                                };
                                return {
                                    MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == r ? void 0 : r.isEnabled(t)) ? n.MeasureLayout : void 0,
                                    ProjectionNode: n.ProjectionNode
                                }
                            }(l);
                            n = t.MeasureLayout, h.visualElement = function(t, e, r, n, i) {
                                var o, s;
                                let {
                                    visualElement: a
                                } = (0, tk.useContext)(e2), l = (0, tk.useContext)(e1), u = (0, tk.useContext)(re.O), c = (0, tk.useContext)(e5._).reducedMotion, h = (0, tk.useRef)(null);
                                n = n || l.renderer, !h.current && n && (h.current = n(t, {
                                    visualState: e,
                                    parent: a,
                                    props: r,
                                    presenceContext: u,
                                    blockInitialAnimation: !!u && !1 === u.initial,
                                    reducedMotionConfig: c
                                }));
                                let d = h.current,
                                    p = (0, tk.useContext)(tC);
                                d && !d.projection && i && ("html" === d.type || "svg" === d.type) && function(t, e, r, n) {
                                    let {
                                        layoutId: i,
                                        layout: o,
                                        drag: s,
                                        dragConstraints: a,
                                        layoutScroll: l,
                                        layoutRoot: u
                                    } = e;
                                    t.projection = new r(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                                        if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                    }(t.parent)), t.projection.setOptions({
                                        layoutId: i,
                                        layout: o,
                                        alwaysMeasureLayout: !!s || a && I(a),
                                        visualElement: t,
                                        animationType: "string" == typeof o ? o : "both",
                                        initialPromotionConfig: n,
                                        layoutScroll: l,
                                        layoutRoot: u
                                    })
                                }(h.current, r, i, p);
                                let f = (0, tk.useRef)(!1);
                                (0, tk.useInsertionEffect)(() => {
                                    d && f.current && d.update(r, u)
                                });
                                let m = r[rn.M],
                                    g = (0, tk.useRef)(!!m && !(null === (o = window.MotionHandoffIsComplete) || void 0 === o ? void 0 : o.call(window, m)) && (null === (s = window.MotionHasOptimisedAnimation) || void 0 === s ? void 0 : s.call(window, m)));
                                return (0, rr.L)(() => {
                                    d && (f.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), tF.render(d.render), g.current && d.animationState && d.animationState.animateChanges())
                                }), (0, tk.useEffect)(() => {
                                    d && (!g.current && d.animationState && d.animationState.animateChanges(), g.current && (queueMicrotask(() => {
                                        var t;
                                        null === (t = window.MotionHandoffMarkAsComplete) || void 0 === t || t.call(window, m)
                                    }), g.current = !1))
                                }), d
                            }(a, d, l, i, t.ProjectionNode)
                        }
                        return (0, tE.jsxs)(e2.Provider, {
                            value: h,
                            children: [n && h.visualElement ? (0, tE.jsx)(n, {
                                visualElement: h.visualElement,
                                ...l
                            }) : null, o(a, t, (r = h.visualElement, (0, tk.useCallback)(t => {
                                t && d.onMount && d.onMount(t), r && (t ? r.mount(t) : r.unmount()), e && ("function" == typeof e ? e(t) : I(e) && (e.current = t))
                            }, [r])), d, c, h.visualElement)]
                        })
                    }
                    n && function(t) {
                        for (let e in t) e8[e] = { ...e8[e],
                            ...t[e]
                        }
                    }(n), l.displayName = "motion.".concat("string" == typeof a ? a : "create(".concat(null !== (r = null !== (e = a.displayName) && void 0 !== e ? e : a.name) && void 0 !== r ? r : "", ")"));
                    let c = (0, tk.forwardRef)(l);
                    return c[rt] = a, c
                }({ ...ro(t) ? rj : rD,
                    preloadedFeatures: o,
                    useRender: function(t = !1) {
                        return (e, r, n, {
                            latestValues: i
                        }, o) => {
                            let s = (ro(e) ? function(t, e, r, n) {
                                    let i = (0, tk.useMemo)(() => {
                                        let r = rw();
                                        return rb(r, e, rP(n), t.transformTemplate), { ...r.attrs,
                                            style: { ...r.style
                                            }
                                        }
                                    }, [e]);
                                    if (t.style) {
                                        let e = {};
                                        rV(e, t.style, t), i.style = { ...e,
                                            ...i.style
                                        }
                                    }
                                    return i
                                } : function(t, e) {
                                    let r = {},
                                        n = function(t, e) {
                                            let r = t.style || {},
                                                n = {};
                                            return rV(n, r, t), Object.assign(n, function({
                                                transformTemplate: t
                                            }, e) {
                                                return (0, tk.useMemo)(() => {
                                                    let r = rx();
                                                    return rm(r, e, t), Object.assign({}, r.vars, r.style)
                                                }, [e])
                                            }(t, e)), n
                                        }(t, e);
                                    return t.drag && !1 !== t.dragListener && (r.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = n, r
                                })(r, i, o, e),
                                a = function(t, e, r) {
                                    let n = {};
                                    for (let i in t)("values" !== i || "object" != typeof t.values) && (rF(i) || !0 === r && rL(i) || !e && !rL(i) || t.draggable && i.startsWith("onDrag")) && (n[i] = t[i]);
                                    return n
                                }(r, "string" == typeof e, t),
                                l = e !== tk.Fragment ? { ...a,
                                    ...s,
                                    ref: n
                                } : {},
                                {
                                    children: u
                                } = r,
                                c = (0, tk.useMemo)(() => (0, t_.i)(u) ? u.get() : u, [u]);
                            return (0, tk.createElement)(e, { ...l,
                                children: c
                            })
                        }
                    }(e),
                    createVisualElement: s,
                    Component: t
                })
            }))
        },
        4238: function(t, e, r) {
            r.d(e, {
                s: function() {
                    return m
                }
            });
            var n = r(3697),
                i = r(6596),
                o = r(3206),
                s = r(5861);
            let a = new Set(["auto", "none", "0"]);
            var l = r(9545),
                u = r(2035),
                c = r(4946),
                h = r(7249);
            let d = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
            var p = r(401),
                f = r(8580);
            class m extends l.e {
                constructor(t, e, r, n, i) {
                    super(t, e, r, n, i, !0)
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        element: e,
                        name: r
                    } = this;
                    if (!e || !e.current) return;
                    super.readKeyframes();
                    for (let r = 0; r < t.length; r++) {
                        let n = t[r];
                        if ("string" == typeof n && (n = n.trim(), (0, h.t)(n))) {
                            let i = function t(e, r, n = 1) {
                                (0, u.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                                let [i, o] = function(t) {
                                    let e = d.exec(t);
                                    if (!e) return [, ];
                                    let [, r, n, i] = e;
                                    return [`--${null!=r?r:n}`, i]
                                }(e);
                                if (!i) return;
                                let s = window.getComputedStyle(r).getPropertyValue(i);
                                if (s) {
                                    let t = s.trim();
                                    return (0, c.P)(t) ? parseFloat(t) : t
                                }
                                return (0, h.t)(o) ? t(o, r, n + 1) : o
                            }(n, e.current);
                            void 0 !== i && (t[r] = i), r === t.length - 1 && (this.finalKeyframe = n)
                        }
                    }
                    if (this.resolveNoneKeyframes(), !i.z.has(r) || 2 !== t.length) return;
                    let [n, o] = t, s = (0, f.C)(n), a = (0, f.C)(o);
                    if (s !== a) {
                        if ((0, p.mP)(s) && (0, p.mP)(a))
                            for (let e = 0; e < t.length; e++) {
                                let r = t[e];
                                "string" == typeof r && (t[e] = parseFloat(r))
                            } else this.needsMeasurement = !0
                    }
                }
                resolveNoneKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e
                    } = this, r = [];
                    for (let e = 0; e < t.length; e++) {
                        var i;
                        ("number" == typeof(i = t[e]) ? 0 === i : null === i || "none" === i || "0" === i || (0, n.W)(i)) && r.push(e)
                    }
                    r.length && function(t, e, r) {
                        let n, i = 0;
                        for (; i < t.length && !n;) {
                            let e = t[i];
                            "string" == typeof e && !a.has(e) && (0, o.V)(e).values.length && (n = t[i]), i++
                        }
                        if (n && r)
                            for (let i of e) t[i] = (0, s.T)(r, n)
                    }(t, r, e)
                }
                measureInitialState() {
                    let {
                        element: t,
                        unresolvedKeyframes: e,
                        name: r
                    } = this;
                    if (!t || !t.current) return;
                    "height" === r && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = p.lw[r](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
                    let n = e[e.length - 1];
                    void 0 !== n && t.getValue(r, n).jump(n, !1)
                }
                measureEndState() {
                    var t;
                    let {
                        element: e,
                        name: r,
                        unresolvedKeyframes: n
                    } = this;
                    if (!e || !e.current) return;
                    let i = e.getValue(r);
                    i && i.jump(this.measuredOrigin, !1);
                    let o = n.length - 1,
                        s = n[o];
                    n[o] = p.lw[r](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== s && void 0 === this.finalKeyframe && (this.finalKeyframe = s), (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach(([t, r]) => {
                        e.getValue(t).set(r)
                    }), this.resolveNoneKeyframes()
                }
            }
        },
        7444: function(t, e, r) {
            r.d(e, {
                D: function() {
                    return n
                }
            });
            let n = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
        },
        7249: function(t, e, r) {
            r.d(e, {
                f: function() {
                    return i
                },
                t: function() {
                    return s
                }
            });
            let n = t => e => "string" == typeof e && e.startsWith(t),
                i = n("--"),
                o = n("var(--"),
                s = t => !!o(t) && a.test(t.split("/*")[0].trim()),
                a = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
        },
        401: function(t, e, r) {
            r.d(e, {
                Ei: function() {
                    return h
                },
                lw: function() {
                    return d
                },
                mP: function() {
                    return s
                }
            });
            var n = r(4305),
                i = r(7492),
                o = r(7487);
            let s = t => t === n.Rx || t === i.px,
                a = (t, e) => parseFloat(t.split(", ")[e]),
                l = (t, e) => (r, {
                    transform: n
                }) => {
                    if ("none" === n || !n) return 0;
                    let i = n.match(/^matrix3d\((.+)\)$/u);
                    if (i) return a(i[1], e); {
                        let e = n.match(/^matrix\((.+)\)$/u);
                        return e ? a(e[1], t) : 0
                    }
                },
                u = new Set(["x", "y", "z"]),
                c = o._.filter(t => !u.has(t));

            function h(t) {
                let e = [];
                return c.forEach(r => {
                    let n = t.getValue(r);
                    void 0 !== n && (e.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0))
                }), e
            }
            let d = {
                width: ({
                    x: t
                }, {
                    paddingLeft: e = "0",
                    paddingRight: r = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(r),
                height: ({
                    y: t
                }, {
                    paddingTop: e = "0",
                    paddingBottom: r = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(r),
                top: (t, {
                    top: e
                }) => parseFloat(e),
                left: (t, {
                    left: e
                }) => parseFloat(e),
                bottom: ({
                    y: t
                }, {
                    top: e
                }) => parseFloat(e) + (t.max - t.min),
                right: ({
                    x: t
                }, {
                    left: e
                }) => parseFloat(e) + (t.max - t.min),
                x: l(4, 13),
                y: l(5, 14)
            };
            d.translateX = d.x, d.translateY = d.y
        },
        5861: function(t, e, r) {
            r.d(e, {
                T: function() {
                    return s
                }
            });
            var n = r(3206),
                i = r(2779),
                o = r(2005);

            function s(t, e) {
                let r = (0, o.A)(t);
                return r !== i.h && (r = n.P), r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
            }
        },
        2005: function(t, e, r) {
            r.d(e, {
                A: function() {
                    return s
                }
            });
            var n = r(3964),
                i = r(2779);
            let o = { ...r(6204).j,
                    color: n.$,
                    backgroundColor: n.$,
                    outlineColor: n.$,
                    fill: n.$,
                    stroke: n.$,
                    borderColor: n.$,
                    borderTopColor: n.$,
                    borderRightColor: n.$,
                    borderBottomColor: n.$,
                    borderLeftColor: n.$,
                    filter: i.h,
                    WebkitFilter: i.h
                },
                s = t => o[t]
        },
        8580: function(t, e, r) {
            r.d(e, {
                $: function() {
                    return s
                },
                C: function() {
                    return a
                }
            });
            var n = r(4305),
                i = r(7492),
                o = r(5113);
            let s = [n.Rx, i.px, i.aQ, i.RW, i.vw, i.vh, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                a = t => s.find((0, o.l)(t))
        },
        6204: function(t, e, r) {
            r.d(e, {
                j: function() {
                    return l
                }
            });
            var n = r(4305),
                i = r(7492);
            let o = {
                    borderWidth: i.px,
                    borderTopWidth: i.px,
                    borderRightWidth: i.px,
                    borderBottomWidth: i.px,
                    borderLeftWidth: i.px,
                    borderRadius: i.px,
                    radius: i.px,
                    borderTopLeftRadius: i.px,
                    borderTopRightRadius: i.px,
                    borderBottomRightRadius: i.px,
                    borderBottomLeftRadius: i.px,
                    width: i.px,
                    maxWidth: i.px,
                    height: i.px,
                    maxHeight: i.px,
                    top: i.px,
                    right: i.px,
                    bottom: i.px,
                    left: i.px,
                    padding: i.px,
                    paddingTop: i.px,
                    paddingRight: i.px,
                    paddingBottom: i.px,
                    paddingLeft: i.px,
                    margin: i.px,
                    marginTop: i.px,
                    marginRight: i.px,
                    marginBottom: i.px,
                    marginLeft: i.px,
                    backgroundPositionX: i.px,
                    backgroundPositionY: i.px
                },
                s = {
                    rotate: i.RW,
                    rotateX: i.RW,
                    rotateY: i.RW,
                    rotateZ: i.RW,
                    scale: n.bA,
                    scaleX: n.bA,
                    scaleY: n.bA,
                    scaleZ: n.bA,
                    skew: i.RW,
                    skewX: i.RW,
                    skewY: i.RW,
                    distance: i.px,
                    translateX: i.px,
                    translateY: i.px,
                    translateZ: i.px,
                    x: i.px,
                    y: i.px,
                    z: i.px,
                    perspective: i.px,
                    transformPerspective: i.px,
                    opacity: n.Fq,
                    originX: i.$C,
                    originY: i.$C,
                    originZ: i.px
                },
                a = { ...n.Rx,
                    transform: Math.round
                },
                l = { ...o,
                    ...s,
                    zIndex: a,
                    size: i.px,
                    fillOpacity: n.Fq,
                    strokeOpacity: n.Fq,
                    numOctaves: a
                }
        },
        5113: function(t, e, r) {
            r.d(e, {
                l: function() {
                    return n
                }
            });
            let n = t => e => e.test(t)
        },
        6596: function(t, e, r) {
            r.d(e, {
                z: function() {
                    return n
                }
            });
            let n = new Set(["width", "height", "top", "left", "right", "bottom", ...r(7487)._])
        },
        7487: function(t, e, r) {
            r.d(e, {
                G: function() {
                    return i
                },
                _: function() {
                    return n
                }
            });
            let n = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                i = new Set(n)
        },
        9545: function(t, e, r) {
            r.d(e, {
                e: function() {
                    return h
                },
                m: function() {
                    return c
                }
            });
            var n = r(401),
                i = r(5414);
            let o = new Set,
                s = !1,
                a = !1;

            function l() {
                if (a) {
                    let t = Array.from(o).filter(t => t.needsMeasurement),
                        e = new Set(t.map(t => t.element)),
                        r = new Map;
                    e.forEach(t => {
                        let e = (0, n.Ei)(t);
                        e.length && (r.set(t, e), t.render())
                    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                        t.render();
                        let e = r.get(t);
                        e && e.forEach(([e, r]) => {
                            var n;
                            null === (n = t.getValue(e)) || void 0 === n || n.set(r)
                        })
                    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                        void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                    })
                }
                a = !1, s = !1, o.forEach(t => t.complete()), o.clear()
            }

            function u() {
                o.forEach(t => {
                    t.readKeyframes(), t.needsMeasurement && (a = !0)
                })
            }

            function c() {
                u(), l()
            }
            class h {
                constructor(t, e, r, n, i, o = !1) {
                    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = r, this.motionValue = n, this.element = i, this.isAsync = o
                }
                scheduleResolve() {
                    this.isScheduled = !0, this.isAsync ? (o.add(this), s || (s = !0, i.Wi.read(u), i.Wi.resolveKeyframes(l))) : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e,
                        element: r,
                        motionValue: n
                    } = this;
                    for (let i = 0; i < t.length; i++)
                        if (null === t[i]) {
                            if (0 === i) {
                                let i = null == n ? void 0 : n.get(),
                                    o = t[t.length - 1];
                                if (void 0 !== i) t[0] = i;
                                else if (r && e) {
                                    let n = r.readValue(e, o);
                                    null != n && (t[0] = n)
                                }
                                void 0 === t[0] && (t[0] = o), n && void 0 === i && n.set(t[0])
                            } else t[i] = t[i - 1]
                        }
                }
                setFinalKeyframe() {}
                measureInitialState() {}
                renderEndStyles() {}
                measureEndState() {}
                complete() {
                    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), o.delete(this)
                }
                cancel() {
                    this.isComplete || (this.isScheduled = !1, o.delete(this))
                }
                resume() {
                    this.isComplete || this.scheduleResolve()
                }
            }
        },
        8775: function(t, e, r) {
            r.d(e, {
                x: function() {
                    return i
                }
            });
            var n = r(1297);

            function i(t, e, r) {
                let i = t.getProps();
                return (0, n.o)(i, e, void 0 !== r ? r : i.custom, t)
            }
        },
        1297: function(t, e, r) {
            function n(t) {
                let e = [{}, {}];
                return null == t || t.values.forEach((t, r) => {
                    e[0][r] = t.get(), e[1][r] = t.getVelocity()
                }), e
            }

            function i(t, e, r, i) {
                if ("function" == typeof e) {
                    let [o, s] = n(i);
                    e = e(void 0 !== r ? r : t.custom, o, s)
                }
                if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
                    let [o, s] = n(i);
                    e = e(void 0 !== r ? r : t.custom, o, s)
                }
                return e
            }
            r.d(e, {
                o: function() {
                    return i
                }
            })
        },
        8771: function(t, e, r) {
            r.d(e, {
                C: function() {
                    return s
                }
            });
            var n = r(4581),
                i = r(3078),
                o = r(8775);

            function s(t, e) {
                let {
                    transitionEnd: r = {},
                    transition: s = {},
                    ...a
                } = (0, o.x)(t, e) || {};
                for (let e in a = { ...a,
                        ...r
                    }) {
                    let r = (0, n.Y)(a[e]);
                    t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, (0, i.BX)(r))
                }
            }
        },
        4118: function(t, e, r) {
            r.d(e, {
                c: function() {
                    return n
                }
            });
            let n = {
                skipAnimations: !1,
                useManualTiming: !1
            }
        },
        9013: function(t, e, r) {
            function n(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function i(t, e) {
                let r = t.indexOf(e);
                r > -1 && t.splice(r, 1)
            }
            r.d(e, {
                cl: function() {
                    return i
                },
                y4: function() {
                    return n
                }
            })
        },
        9111: function(t, e, r) {
            r.d(e, {
                u: function() {
                    return n
                }
            });
            let n = (t, e, r) => r > e ? e : r < t ? t : r
        },
        4563: function(t, e, r) {
            r.d(e, {
                j: function() {
                    return n
                }
            });
            let n = "undefined" != typeof window
        },
        4946: function(t, e, r) {
            r.d(e, {
                P: function() {
                    return n
                }
            });
            let n = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
        },
        3697: function(t, e, r) {
            r.d(e, {
                W: function() {
                    return n
                }
            });
            let n = t => /^0[^.\s]+$/u.test(t)
        },
        6781: function(t, e, r) {
            r.d(e, {
                t: function() {
                    return n
                }
            });
            let n = (t, e, r) => t + (e - t) * r
        },
        332: function(t, e, r) {
            r.d(e, {
                z: function() {
                    return i
                }
            });
            let n = (t, e) => r => e(t(r)),
                i = (...t) => t.reduce(n)
        },
        4581: function(t, e, r) {
            r.d(e, {
                Y: function() {
                    return o
                },
                p: function() {
                    return i
                }
            });
            var n = r(4944);
            let i = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                o = t => (0, n.C)(t) ? t[t.length - 1] || 0 : t
        },
        4081: function(t, e, r) {
            r.d(e, {
                L: function() {
                    return i
                }
            });
            var n = r(9013);
            class i {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return (0, n.y4)(this.subscriptions, t), () => (0, n.cl)(this.subscriptions, t)
                }
                notify(t, e, r) {
                    let n = this.subscriptions.length;
                    if (n) {
                        if (1 === n) this.subscriptions[0](t, e, r);
                        else
                            for (let i = 0; i < n; i++) {
                                let n = this.subscriptions[i];
                                n && n(t, e, r)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
        },
        3576: function(t, e, r) {
            r.d(e, {
                h: function() {
                    return i
                }
            });
            var n = r(2265);

            function i(t) {
                let e = (0, n.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        1534: function(t, e, r) {
            r.d(e, {
                L: function() {
                    return i
                }
            });
            var n = r(2265);
            let i = r(4563).j ? n.useLayoutEffect : n.useEffect
        },
        4438: function(t, e, r) {
            r.d(e, {
                R: function() {
                    return n
                }
            });

            function n(t, e) {
                return e ? 1e3 / e * t : 0
            }
        },
        3078: function(t, e, r) {
            r.d(e, {
                BX: function() {
                    return c
                }
            });
            var n = r(504),
                i = r(4081),
                o = r(4438),
                s = r(5414);
            let a = t => !isNaN(parseFloat(t)),
                l = {
                    current: void 0
                };
            class u {
                constructor(t, e = {}) {
                    this.version = "11.18.0", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        let r = n.X.now();
                        this.updatedAt !== r && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
                }
                setCurrent(t) {
                    this.current = t, this.updatedAt = n.X.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = a(this.current))
                }
                setPrevFrameValue(t = this.current) {
                    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new i.L);
                    let r = this.events[t].add(e);
                    return "change" === t ? () => {
                        r(), s.Wi.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : r
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, r) {
                    this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
                }
                jump(t, e = !0) {
                    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return l.current && l.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    let t = n.X.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
                    let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return (0, o.R)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function c(t, e) {
                return new u(t, e)
            }
        },
        7325: function(t, e, r) {
            r.d(e, {
                $: function() {
                    return i
                }
            });
            var n = r(8859);
            let i = {
                test: (0, r(5516).i)("#"),
                parse: function(t) {
                    let e = "",
                        r = "",
                        n = "",
                        i = "";
                    return t.length > 5 ? (e = t.substring(1, 3), r = t.substring(3, 5), n = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), r = t.substring(2, 3), n = t.substring(3, 4), i = t.substring(4, 5), e += e, r += r, n += n, i += i), {
                        red: parseInt(e, 16),
                        green: parseInt(r, 16),
                        blue: parseInt(n, 16),
                        alpha: i ? parseInt(i, 16) / 255 : 1
                    }
                },
                transform: n.m.transform
            }
        },
        2943: function(t, e, r) {
            r.d(e, {
                J: function() {
                    return a
                }
            });
            var n = r(4305),
                i = r(7492),
                o = r(5472),
                s = r(5516);
            let a = {
                test: (0, s.i)("hsl", "hue"),
                parse: (0, s.d)("hue", "saturation", "lightness"),
                transform: ({
                    hue: t,
                    saturation: e,
                    lightness: r,
                    alpha: s = 1
                }) => "hsla(" + Math.round(t) + ", " + i.aQ.transform((0, o.N)(e)) + ", " + i.aQ.transform((0, o.N)(r)) + ", " + (0, o.N)(n.Fq.transform(s)) + ")"
            }
        },
        3964: function(t, e, r) {
            r.d(e, {
                $: function() {
                    return s
                }
            });
            var n = r(7325),
                i = r(2943),
                o = r(8859);
            let s = {
                test: t => o.m.test(t) || n.$.test(t) || i.J.test(t),
                parse: t => o.m.test(t) ? o.m.parse(t) : i.J.test(t) ? i.J.parse(t) : n.$.parse(t),
                transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? o.m.transform(t) : i.J.transform(t)
            }
        },
        8859: function(t, e, r) {
            r.d(e, {
                m: function() {
                    return u
                }
            });
            var n = r(9111),
                i = r(4305),
                o = r(5472),
                s = r(5516);
            let a = t => (0, n.u)(0, 255, t),
                l = { ...i.Rx,
                    transform: t => Math.round(a(t))
                },
                u = {
                    test: (0, s.i)("rgb", "red"),
                    parse: (0, s.d)("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: r,
                        alpha: n = 1
                    }) => "rgba(" + l.transform(t) + ", " + l.transform(e) + ", " + l.transform(r) + ", " + (0, o.N)(i.Fq.transform(n)) + ")"
                }
        },
        5516: function(t, e, r) {
            r.d(e, {
                i: function() {
                    return o
                },
                d: function() {
                    return s
                }
            });
            var n = r(6941);
            let i = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
                o = (t, e) => r => !!("string" == typeof r && i.test(r) && r.startsWith(t) || e && null != r && Object.prototype.hasOwnProperty.call(r, e)),
                s = (t, e, r) => i => {
                    if ("string" != typeof i) return i;
                    let [o, s, a, l] = i.match(n.K);
                    return {
                        [t]: parseFloat(o),
                        [e]: parseFloat(s),
                        [r]: parseFloat(a),
                        alpha: void 0 !== l ? parseFloat(l) : 1
                    }
                }
        },
        2779: function(t, e, r) {
            r.d(e, {
                h: function() {
                    return l
                }
            });
            var n = r(3206),
                i = r(6941);
            let o = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function s(t) {
                let [e, r] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [n] = r.match(i.K) || [];
                if (!n) return t;
                let s = r.replace(n, ""),
                    a = o.has(e) ? 1 : 0;
                return n !== r && (a *= 100), e + "(" + a + s + ")"
            }
            let a = /\b([a-z-]*)\(.*?\)/gu,
                l = { ...n.P,
                    getAnimatableNone: t => {
                        let e = t.match(a);
                        return e ? e.map(s).join(" ") : t
                    }
                }
        },
        3206: function(t, e, r) {
            r.d(e, {
                V: function() {
                    return c
                },
                P: function() {
                    return f
                }
            });
            var n = r(3964);
            let i = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
            var o = r(6941),
                s = r(5472);
            let a = "number",
                l = "color",
                u = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

            function c(t) {
                let e = t.toString(),
                    r = [],
                    i = {
                        color: [],
                        number: [],
                        var: []
                    },
                    o = [],
                    s = 0,
                    c = e.replace(u, t => (n.$.test(t) ? (i.color.push(s), o.push(l), r.push(n.$.parse(t))) : t.startsWith("var(") ? (i.var.push(s), o.push("var"), r.push(t)) : (i.number.push(s), o.push(a), r.push(parseFloat(t))), ++s, "${}")).split("${}");
                return {
                    values: r,
                    split: c,
                    indexes: i,
                    types: o
                }
            }

            function h(t) {
                return c(t).values
            }

            function d(t) {
                let {
                    split: e,
                    types: r
                } = c(t), i = e.length;
                return t => {
                    let o = "";
                    for (let u = 0; u < i; u++)
                        if (o += e[u], void 0 !== t[u]) {
                            let e = r[u];
                            e === a ? o += (0, s.N)(t[u]) : e === l ? o += n.$.transform(t[u]) : o += t[u]
                        }
                    return o
                }
            }
            let p = t => "number" == typeof t ? 0 : t,
                f = {
                    test: function(t) {
                        var e, r;
                        return isNaN(t) && "string" == typeof t && ((null === (e = t.match(o.K)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (r = t.match(i)) || void 0 === r ? void 0 : r.length) || 0) > 0
                    },
                    parse: h,
                    createTransformer: d,
                    getAnimatableNone: function(t) {
                        let e = h(t);
                        return d(t)(e.map(p))
                    }
                }
        },
        4305: function(t, e, r) {
            r.d(e, {
                Fq: function() {
                    return o
                },
                Rx: function() {
                    return i
                },
                bA: function() {
                    return s
                }
            });
            var n = r(9111);
            let i = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                o = { ...i,
                    transform: t => (0, n.u)(0, 1, t)
                },
                s = { ...i,
                    default: 1
                }
        },
        7492: function(t, e, r) {
            r.d(e, {
                $C: function() {
                    return u
                },
                RW: function() {
                    return i
                },
                aQ: function() {
                    return o
                },
                px: function() {
                    return s
                },
                vh: function() {
                    return a
                },
                vw: function() {
                    return l
                }
            });
            let n = t => ({
                    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                i = n("deg"),
                o = n("%"),
                s = n("px"),
                a = n("vh"),
                l = n("vw"),
                u = { ...o,
                    parse: t => o.parse(t) / 100,
                    transform: t => o.transform(100 * t)
                }
        },
        6941: function(t, e, r) {
            r.d(e, {
                K: function() {
                    return n
                }
            });
            let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
        },
        5472: function(t, e, r) {
            r.d(e, {
                N: function() {
                    return n
                }
            });
            let n = t => Math.round(1e5 * t) / 1e5
        },
        1327: function(t, e, r) {
            r.d(e, {
                K: function() {
                    return i
                }
            });
            var n = r(3999);

            function i(t, e) {
                let r = t.getValue("willChange");
                if ((0, n.i)(r) && r.add) return r.add(e)
            }
        },
        3999: function(t, e, r) {
            r.d(e, {
                i: function() {
                    return n
                }
            });
            let n = t => !!(t && t.getVelocity)
        },
        5699: function(t, e, r) {
            r.d(e, {
                sP: function() {
                    return s
                },
                _F: function() {
                    return h
                },
                iI: function() {
                    return u
                },
                wk: function() {
                    return g
                },
                ev: function() {
                    return a
                },
                Mr: function() {
                    return S
                },
                qE: function() {
                    return d
                },
                xD: function() {
                    return c
                },
                DJ: function() {
                    return A
                },
                hR: function() {
                    return v
                },
                eB: function() {
                    return function t(e, r) {
                        if (e) return "function" == typeof e && f() ? g(e, r) : d(e) ? y(e) : Array.isArray(e) ? e.map(e => t(e, r) || b.easeOut) : b[e]
                    }
                },
                EO: function() {
                    return l
                },
                OD: function() {
                    return D
                },
                KV: function() {
                    return V
                },
                Vc: function() {
                    return f
                }
            });
            var n = r(107);
            let i = (0, n.X)(() => void 0 !== window.ScrollTimeline);
            class o {
                constructor(t) {
                    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
                }
                get finished() {
                    return Promise.all(this.animations.map(t => "finished" in t ? t.finished : t))
                }
                getAll(t) {
                    return this.animations[0][t]
                }
                setAll(t, e) {
                    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = e
                }
                attachTimeline(t, e) {
                    let r = this.animations.map(r => i() && r.attachTimeline ? r.attachTimeline(t) : "function" == typeof e ? e(r) : void 0);
                    return () => {
                        r.forEach((t, e) => {
                            t && t(), this.animations[e].stop()
                        })
                    }
                }
                get time() {
                    return this.getAll("time")
                }
                set time(t) {
                    this.setAll("time", t)
                }
                get speed() {
                    return this.getAll("speed")
                }
                set speed(t) {
                    this.setAll("speed", t)
                }
                get startTime() {
                    return this.getAll("startTime")
                }
                get duration() {
                    let t = 0;
                    for (let e = 0; e < this.animations.length; e++) t = Math.max(t, this.animations[e].duration);
                    return t
                }
                runAll(t) {
                    this.animations.forEach(e => e[t]())
                }
                flatten() {
                    this.runAll("flatten")
                }
                play() {
                    this.runAll("play")
                }
                pause() {
                    this.runAll("pause")
                }
                cancel() {
                    this.runAll("cancel")
                }
                complete() {
                    this.runAll("complete")
                }
            }
            class s extends o {
                then(t, e) {
                    return Promise.all(this.animations).then(t).catch(e)
                }
            }

            function a(t, e) {
                return t ? t[e] || t.default || t : void 0
            }
            let l = 2e4;

            function u(t) {
                let e = 0,
                    r = t.next(e);
                for (; !r.done && e < l;) e += 50, r = t.next(e);
                return e >= l ? 1 / 0 : e
            }

            function c(t) {
                return "function" == typeof t
            }

            function h(t, e) {
                t.timeline = e, t.onfinish = null
            }
            let d = t => Array.isArray(t) && "number" == typeof t[0],
                p = {
                    linearEasing: void 0
                },
                f = function(t, e) {
                    let r = (0, n.X)(t);
                    return () => {
                        var t;
                        return null !== (t = p[e]) && void 0 !== t ? t : r()
                    }
                }(() => {
                    try {
                        document.createElement("div").animate({
                            opacity: 0
                        }, {
                            easing: "linear(0, 1)"
                        })
                    } catch (t) {
                        return !1
                    }
                    return !0
                }, "linearEasing");
            var m = r(1645);
            let g = (t, e, r = 10) => {
                let n = "",
                    i = Math.max(Math.round(e / r), 2);
                for (let e = 0; e < i; e++) n += t((0, m.Y)(0, i - 1, e)) + ", ";
                return `linear(${n.substring(0,n.length-2)})`
            };

            function v(t) {
                return !!("function" == typeof t && f() || !t || "string" == typeof t && (t in b || f()) || d(t) || Array.isArray(t) && t.every(v))
            }
            let y = ([t, e, r, n]) => `cubic-bezier(${t}, ${e}, ${r}, ${n})`,
                b = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: y([0, .65, .55, 1]),
                    circOut: y([.55, 0, 1, .45]),
                    backIn: y([.31, .01, .66, -.59]),
                    backOut: y([.33, 1.53, .69, .99])
                },
                x = {
                    x: !1,
                    y: !1
                };

            function w(t, e) {
                let r = function(t, e, r) {
                        if (t instanceof Element) return [t];
                        if ("string" == typeof t) {
                            let e = document.querySelectorAll(t);
                            return e ? Array.from(e) : []
                        }
                        return Array.from(t)
                    }(t),
                    n = new AbortController;
                return [r, {
                    passive: !0,
                    ...e,
                    signal: n.signal
                }, () => n.abort()]
            }

            function P(t) {
                return e => {
                    "touch" === e.pointerType || x.x || x.y || t(e)
                }
            }

            function S(t, e, r = {}) {
                let [n, i, o] = w(t, r), s = P(t => {
                    let {
                        target: r
                    } = t, n = e(t);
                    if ("function" != typeof n || !r) return;
                    let o = P(t => {
                        n(t), r.removeEventListener("pointerleave", o)
                    });
                    r.addEventListener("pointerleave", o, i)
                });
                return n.forEach(t => {
                    t.addEventListener("pointerenter", s, i)
                }), o
            }
            let T = (t, e) => !!e && (t === e || T(t, e.parentElement)),
                A = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary,
                E = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
                k = new WeakSet;

            function R(t) {
                return e => {
                    "Enter" === e.key && t(e)
                }
            }

            function M(t, e) {
                t.dispatchEvent(new PointerEvent("pointer" + e, {
                    isPrimary: !0,
                    bubbles: !0
                }))
            }
            let C = (t, e) => {
                let r = t.currentTarget;
                if (!r) return;
                let n = R(() => {
                    if (k.has(r)) return;
                    M(r, "down");
                    let t = R(() => {
                        M(r, "up")
                    });
                    r.addEventListener("keyup", t, e), r.addEventListener("blur", () => M(r, "cancel"), e)
                });
                r.addEventListener("keydown", n, e), r.addEventListener("blur", () => r.removeEventListener("keydown", n), e)
            };

            function j(t) {
                return A(t) && !(x.x || x.y)
            }

            function D(t, e, r = {}) {
                let [n, i, o] = w(t, r), s = t => {
                    let n = t.currentTarget;
                    if (!j(t) || k.has(n)) return;
                    k.add(n);
                    let o = e(t),
                        s = (t, e) => {
                            window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", l), j(t) && k.has(n) && (k.delete(n), "function" == typeof o && o(t, {
                                success: e
                            }))
                        },
                        a = t => {
                            s(t, r.useGlobalTarget || T(n, t.target))
                        },
                        l = t => {
                            s(t, !1)
                        };
                    window.addEventListener("pointerup", a, i), window.addEventListener("pointercancel", l, i)
                };
                return n.forEach(t => {
                    E.has(t.tagName) || -1 !== t.tabIndex || null !== t.getAttribute("tabindex") || (t.tabIndex = 0), (r.useGlobalTarget ? window : t).addEventListener("pointerdown", s, i), t.addEventListener("focus", t => C(t, i), i)
                }), o
            }

            function V(t) {
                return "x" === t || "y" === t ? x[t] ? null : (x[t] = !0, () => {
                    x[t] = !1
                }) : x.x || x.y ? null : (x.x = x.y = !0, () => {
                    x.x = x.y = !1
                })
            }
            r(9711), r(6277)
        },
        2035: function(t, e, r) {
            r.d(e, {
                K: function() {
                    return i
                },
                k: function() {
                    return o
                }
            });
            var n = r(6277);
            let i = n.Z,
                o = n.Z
        },
        107: function(t, e, r) {
            r.d(e, {
                X: function() {
                    return n
                }
            });

            function n(t) {
                let e;
                return () => (void 0 === e && (e = t()), e)
            }
        },
        6277: function(t, e, r) {
            r.d(e, {
                Z: function() {
                    return n
                }
            });
            let n = t => t
        },
        1645: function(t, e, r) {
            r.d(e, {
                Y: function() {
                    return n
                }
            });
            let n = (t, e, r) => {
                let n = e - t;
                return 0 === n ? 1 : (r - t) / n
            }
        },
        9711: function(t, e, r) {
            r.d(e, {
                X: function() {
                    return i
                },
                w: function() {
                    return n
                }
            });
            let n = t => 1e3 * t,
                i = t => t / 1e3
        },
        3335: function(t, e, r) {
            r.d(e, {
                m6: function() {
                    return q
                }
            });
            let n = t => {
                    let e = a(t),
                        {
                            conflictingClassGroups: r,
                            conflictingClassGroupModifiers: n
                        } = t;
                    return {
                        getClassGroupId: t => {
                            let r = t.split("-");
                            return "" === r[0] && 1 !== r.length && r.shift(), i(r, e) || s(t)
                        },
                        getConflictingClassGroupIds: (t, e) => {
                            let i = r[t] || [];
                            return e && n[t] ? [...i, ...n[t]] : i
                        }
                    }
                },
                i = (t, e) => {
                    if (0 === t.length) return e.classGroupId;
                    let r = t[0],
                        n = e.nextPart.get(r),
                        o = n ? i(t.slice(1), n) : void 0;
                    if (o) return o;
                    if (0 === e.validators.length) return;
                    let s = t.join("-");
                    return e.validators.find(({
                        validator: t
                    }) => t(s)) ? .classGroupId
                },
                o = /^\[(.+)\]$/,
                s = t => {
                    if (o.test(t)) {
                        let e = o.exec(t)[1],
                            r = e ? .substring(0, e.indexOf(":"));
                        if (r) return "arbitrary.." + r
                    }
                },
                a = t => {
                    let {
                        theme: e,
                        prefix: r
                    } = t, n = {
                        nextPart: new Map,
                        validators: []
                    };
                    return h(Object.entries(t.classGroups), r).forEach(([t, r]) => {
                        l(r, n, t, e)
                    }), n
                },
                l = (t, e, r, n) => {
                    t.forEach(t => {
                        if ("string" == typeof t) {
                            ("" === t ? e : u(e, t)).classGroupId = r;
                            return
                        }
                        if ("function" == typeof t) {
                            if (c(t)) {
                                l(t(n), e, r, n);
                                return
                            }
                            e.validators.push({
                                validator: t,
                                classGroupId: r
                            });
                            return
                        }
                        Object.entries(t).forEach(([t, i]) => {
                            l(i, u(e, t), r, n)
                        })
                    })
                },
                u = (t, e) => {
                    let r = t;
                    return e.split("-").forEach(t => {
                        r.nextPart.has(t) || r.nextPart.set(t, {
                            nextPart: new Map,
                            validators: []
                        }), r = r.nextPart.get(t)
                    }), r
                },
                c = t => t.isThemeGetter,
                h = (t, e) => e ? t.map(([t, r]) => [t, r.map(t => "string" == typeof t ? e + t : "object" == typeof t ? Object.fromEntries(Object.entries(t).map(([t, r]) => [e + t, r])) : t)]) : t,
                d = t => {
                    if (t < 1) return {
                        get: () => void 0,
                        set: () => {}
                    };
                    let e = 0,
                        r = new Map,
                        n = new Map,
                        i = (i, o) => {
                            r.set(i, o), ++e > t && (e = 0, n = r, r = new Map)
                        };
                    return {
                        get(t) {
                            let e = r.get(t);
                            return void 0 !== e ? e : void 0 !== (e = n.get(t)) ? (i(t, e), e) : void 0
                        },
                        set(t, e) {
                            r.has(t) ? r.set(t, e) : i(t, e)
                        }
                    }
                },
                p = t => {
                    let {
                        separator: e,
                        experimentalParseClassName: r
                    } = t, n = 1 === e.length, i = e[0], o = e.length, s = t => {
                        let r;
                        let s = [],
                            a = 0,
                            l = 0;
                        for (let u = 0; u < t.length; u++) {
                            let c = t[u];
                            if (0 === a) {
                                if (c === i && (n || t.slice(u, u + o) === e)) {
                                    s.push(t.slice(l, u)), l = u + o;
                                    continue
                                }
                                if ("/" === c) {
                                    r = u;
                                    continue
                                }
                            }
                            "[" === c ? a++ : "]" === c && a--
                        }
                        let u = 0 === s.length ? t : t.substring(l),
                            c = u.startsWith("!"),
                            h = c ? u.substring(1) : u;
                        return {
                            modifiers: s,
                            hasImportantModifier: c,
                            baseClassName: h,
                            maybePostfixModifierPosition: r && r > l ? r - l : void 0
                        }
                    };
                    return r ? t => r({
                        className: t,
                        parseClassName: s
                    }) : s
                },
                f = t => {
                    if (t.length <= 1) return t;
                    let e = [],
                        r = [];
                    return t.forEach(t => {
                        "[" === t[0] ? (e.push(...r.sort(), t), r = []) : r.push(t)
                    }), e.push(...r.sort()), e
                },
                m = t => ({
                    cache: d(t.cacheSize),
                    parseClassName: p(t),
                    ...n(t)
                }),
                g = /\s+/,
                v = (t, e) => {
                    let {
                        parseClassName: r,
                        getClassGroupId: n,
                        getConflictingClassGroupIds: i
                    } = e, o = [], s = t.trim().split(g), a = "";
                    for (let t = s.length - 1; t >= 0; t -= 1) {
                        let e = s[t],
                            {
                                modifiers: l,
                                hasImportantModifier: u,
                                baseClassName: c,
                                maybePostfixModifierPosition: h
                            } = r(e),
                            d = !!h,
                            p = n(d ? c.substring(0, h) : c);
                        if (!p) {
                            if (!d || !(p = n(c))) {
                                a = e + (a.length > 0 ? " " + a : a);
                                continue
                            }
                            d = !1
                        }
                        let m = f(l).join(":"),
                            g = u ? m + "!" : m,
                            v = g + p;
                        if (o.includes(v)) continue;
                        o.push(v);
                        let y = i(p, d);
                        for (let t = 0; t < y.length; ++t) {
                            let e = y[t];
                            o.push(g + e)
                        }
                        a = e + (a.length > 0 ? " " + a : a)
                    }
                    return a
                };

            function y() {
                let t, e, r = 0,
                    n = "";
                for (; r < arguments.length;)(t = arguments[r++]) && (e = b(t)) && (n && (n += " "), n += e);
                return n
            }
            let b = t => {
                    let e;
                    if ("string" == typeof t) return t;
                    let r = "";
                    for (let n = 0; n < t.length; n++) t[n] && (e = b(t[n])) && (r && (r += " "), r += e);
                    return r
                },
                x = t => {
                    let e = e => e[t] || [];
                    return e.isThemeGetter = !0, e
                },
                w = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                P = /^\d+\/\d+$/,
                S = new Set(["px", "full", "screen"]),
                T = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                A = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                E = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                k = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                R = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
                M = t => j(t) || S.has(t) || P.test(t),
                C = t => z(t, "length", X),
                j = t => !!t && !Number.isNaN(Number(t)),
                D = t => z(t, "number", j),
                V = t => !!t && Number.isInteger(Number(t)),
                O = t => t.endsWith("%") && j(t.slice(0, -1)),
                L = t => w.test(t),
                F = t => T.test(t),
                B = new Set(["length", "size", "percentage"]),
                N = t => z(t, B, K),
                I = t => z(t, "position", K),
                W = new Set(["image", "url"]),
                U = t => z(t, W, Z),
                _ = t => z(t, "", Y),
                $ = () => !0,
                z = (t, e, r) => {
                    let n = w.exec(t);
                    return !!n && (n[1] ? "string" == typeof e ? n[1] === e : e.has(n[1]) : r(n[2]))
                },
                X = t => A.test(t) && !E.test(t),
                K = () => !1,
                Y = t => k.test(t),
                Z = t => R.test(t),
                q = function(t, ...e) {
                    let r, n, i;
                    let o = function(a) {
                        return n = (r = m(e.reduce((t, e) => e(t), t()))).cache.get, i = r.cache.set, o = s, s(a)
                    };

                    function s(t) {
                        let e = n(t);
                        if (e) return e;
                        let o = v(t, r);
                        return i(t, o), o
                    }
                    return function() {
                        return o(y.apply(null, arguments))
                    }
                }(() => {
                    let t = x("colors"),
                        e = x("spacing"),
                        r = x("blur"),
                        n = x("brightness"),
                        i = x("borderColor"),
                        o = x("borderRadius"),
                        s = x("borderSpacing"),
                        a = x("borderWidth"),
                        l = x("contrast"),
                        u = x("grayscale"),
                        c = x("hueRotate"),
                        h = x("invert"),
                        d = x("gap"),
                        p = x("gradientColorStops"),
                        f = x("gradientColorStopPositions"),
                        m = x("inset"),
                        g = x("margin"),
                        v = x("opacity"),
                        y = x("padding"),
                        b = x("saturate"),
                        w = x("scale"),
                        P = x("sepia"),
                        S = x("skew"),
                        T = x("space"),
                        A = x("translate"),
                        E = () => ["auto", "contain", "none"],
                        k = () => ["auto", "hidden", "clip", "visible", "scroll"],
                        R = () => ["auto", L, e],
                        B = () => [L, e],
                        W = () => ["", M, C],
                        z = () => ["auto", j, L],
                        X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                        K = () => ["solid", "dashed", "dotted", "double", "none"],
                        Y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                        Z = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                        q = () => ["", "0", L],
                        G = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                        H = () => [j, L];
                    return {
                        cacheSize: 500,
                        separator: ":",
                        theme: {
                            colors: [$],
                            spacing: [M, C],
                            blur: ["none", "", F, L],
                            brightness: H(),
                            borderColor: [t],
                            borderRadius: ["none", "", "full", F, L],
                            borderSpacing: B(),
                            borderWidth: W(),
                            contrast: H(),
                            grayscale: q(),
                            hueRotate: H(),
                            invert: q(),
                            gap: B(),
                            gradientColorStops: [t],
                            gradientColorStopPositions: [O, C],
                            inset: R(),
                            margin: R(),
                            opacity: H(),
                            padding: B(),
                            saturate: H(),
                            scale: H(),
                            sepia: q(),
                            skew: H(),
                            space: B(),
                            translate: B()
                        },
                        classGroups: {
                            aspect: [{
                                aspect: ["auto", "square", "video", L]
                            }],
                            container: ["container"],
                            columns: [{
                                columns: [F]
                            }],
                            "break-after": [{
                                "break-after": G()
                            }],
                            "break-before": [{
                                "break-before": G()
                            }],
                            "break-inside": [{
                                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                            }],
                            "box-decoration": [{
                                "box-decoration": ["slice", "clone"]
                            }],
                            box: [{
                                box: ["border", "content"]
                            }],
                            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                            float: [{
                                float: ["right", "left", "none", "start", "end"]
                            }],
                            clear: [{
                                clear: ["left", "right", "both", "none", "start", "end"]
                            }],
                            isolation: ["isolate", "isolation-auto"],
                            "object-fit": [{
                                object: ["contain", "cover", "fill", "none", "scale-down"]
                            }],
                            "object-position": [{
                                object: [...X(), L]
                            }],
                            overflow: [{
                                overflow: k()
                            }],
                            "overflow-x": [{
                                "overflow-x": k()
                            }],
                            "overflow-y": [{
                                "overflow-y": k()
                            }],
                            overscroll: [{
                                overscroll: E()
                            }],
                            "overscroll-x": [{
                                "overscroll-x": E()
                            }],
                            "overscroll-y": [{
                                "overscroll-y": E()
                            }],
                            position: ["static", "fixed", "absolute", "relative", "sticky"],
                            inset: [{
                                inset: [m]
                            }],
                            "inset-x": [{
                                "inset-x": [m]
                            }],
                            "inset-y": [{
                                "inset-y": [m]
                            }],
                            start: [{
                                start: [m]
                            }],
                            end: [{
                                end: [m]
                            }],
                            top: [{
                                top: [m]
                            }],
                            right: [{
                                right: [m]
                            }],
                            bottom: [{
                                bottom: [m]
                            }],
                            left: [{
                                left: [m]
                            }],
                            visibility: ["visible", "invisible", "collapse"],
                            z: [{
                                z: ["auto", V, L]
                            }],
                            basis: [{
                                basis: R()
                            }],
                            "flex-direction": [{
                                flex: ["row", "row-reverse", "col", "col-reverse"]
                            }],
                            "flex-wrap": [{
                                flex: ["wrap", "wrap-reverse", "nowrap"]
                            }],
                            flex: [{
                                flex: ["1", "auto", "initial", "none", L]
                            }],
                            grow: [{
                                grow: q()
                            }],
                            shrink: [{
                                shrink: q()
                            }],
                            order: [{
                                order: ["first", "last", "none", V, L]
                            }],
                            "grid-cols": [{
                                "grid-cols": [$]
                            }],
                            "col-start-end": [{
                                col: ["auto", {
                                    span: ["full", V, L]
                                }, L]
                            }],
                            "col-start": [{
                                "col-start": z()
                            }],
                            "col-end": [{
                                "col-end": z()
                            }],
                            "grid-rows": [{
                                "grid-rows": [$]
                            }],
                            "row-start-end": [{
                                row: ["auto", {
                                    span: [V, L]
                                }, L]
                            }],
                            "row-start": [{
                                "row-start": z()
                            }],
                            "row-end": [{
                                "row-end": z()
                            }],
                            "grid-flow": [{
                                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                            }],
                            "auto-cols": [{
                                "auto-cols": ["auto", "min", "max", "fr", L]
                            }],
                            "auto-rows": [{
                                "auto-rows": ["auto", "min", "max", "fr", L]
                            }],
                            gap: [{
                                gap: [d]
                            }],
                            "gap-x": [{
                                "gap-x": [d]
                            }],
                            "gap-y": [{
                                "gap-y": [d]
                            }],
                            "justify-content": [{
                                justify: ["normal", ...Z()]
                            }],
                            "justify-items": [{
                                "justify-items": ["start", "end", "center", "stretch"]
                            }],
                            "justify-self": [{
                                "justify-self": ["auto", "start", "end", "center", "stretch"]
                            }],
                            "align-content": [{
                                content: ["normal", ...Z(), "baseline"]
                            }],
                            "align-items": [{
                                items: ["start", "end", "center", "baseline", "stretch"]
                            }],
                            "align-self": [{
                                self: ["auto", "start", "end", "center", "stretch", "baseline"]
                            }],
                            "place-content": [{
                                "place-content": [...Z(), "baseline"]
                            }],
                            "place-items": [{
                                "place-items": ["start", "end", "center", "baseline", "stretch"]
                            }],
                            "place-self": [{
                                "place-self": ["auto", "start", "end", "center", "stretch"]
                            }],
                            p: [{
                                p: [y]
                            }],
                            px: [{
                                px: [y]
                            }],
                            py: [{
                                py: [y]
                            }],
                            ps: [{
                                ps: [y]
                            }],
                            pe: [{
                                pe: [y]
                            }],
                            pt: [{
                                pt: [y]
                            }],
                            pr: [{
                                pr: [y]
                            }],
                            pb: [{
                                pb: [y]
                            }],
                            pl: [{
                                pl: [y]
                            }],
                            m: [{
                                m: [g]
                            }],
                            mx: [{
                                mx: [g]
                            }],
                            my: [{
                                my: [g]
                            }],
                            ms: [{
                                ms: [g]
                            }],
                            me: [{
                                me: [g]
                            }],
                            mt: [{
                                mt: [g]
                            }],
                            mr: [{
                                mr: [g]
                            }],
                            mb: [{
                                mb: [g]
                            }],
                            ml: [{
                                ml: [g]
                            }],
                            "space-x": [{
                                "space-x": [T]
                            }],
                            "space-x-reverse": ["space-x-reverse"],
                            "space-y": [{
                                "space-y": [T]
                            }],
                            "space-y-reverse": ["space-y-reverse"],
                            w: [{
                                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", L, e]
                            }],
                            "min-w": [{
                                "min-w": [L, e, "min", "max", "fit"]
                            }],
                            "max-w": [{
                                "max-w": [L, e, "none", "full", "min", "max", "fit", "prose", {
                                    screen: [F]
                                }, F]
                            }],
                            h: [{
                                h: [L, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                            }],
                            "min-h": [{
                                "min-h": [L, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                            }],
                            "max-h": [{
                                "max-h": [L, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                            }],
                            size: [{
                                size: [L, e, "auto", "min", "max", "fit"]
                            }],
                            "font-size": [{
                                text: ["base", F, C]
                            }],
                            "font-smoothing": ["antialiased", "subpixel-antialiased"],
                            "font-style": ["italic", "not-italic"],
                            "font-weight": [{
                                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", D]
                            }],
                            "font-family": [{
                                font: [$]
                            }],
                            "fvn-normal": ["normal-nums"],
                            "fvn-ordinal": ["ordinal"],
                            "fvn-slashed-zero": ["slashed-zero"],
                            "fvn-figure": ["lining-nums", "oldstyle-nums"],
                            "fvn-spacing": ["proportional-nums", "tabular-nums"],
                            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                            tracking: [{
                                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", L]
                            }],
                            "line-clamp": [{
                                "line-clamp": ["none", j, D]
                            }],
                            leading: [{
                                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", M, L]
                            }],
                            "list-image": [{
                                "list-image": ["none", L]
                            }],
                            "list-style-type": [{
                                list: ["none", "disc", "decimal", L]
                            }],
                            "list-style-position": [{
                                list: ["inside", "outside"]
                            }],
                            "placeholder-color": [{
                                placeholder: [t]
                            }],
                            "placeholder-opacity": [{
                                "placeholder-opacity": [v]
                            }],
                            "text-alignment": [{
                                text: ["left", "center", "right", "justify", "start", "end"]
                            }],
                            "text-color": [{
                                text: [t]
                            }],
                            "text-opacity": [{
                                "text-opacity": [v]
                            }],
                            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                            "text-decoration-style": [{
                                decoration: [...K(), "wavy"]
                            }],
                            "text-decoration-thickness": [{
                                decoration: ["auto", "from-font", M, C]
                            }],
                            "underline-offset": [{
                                "underline-offset": ["auto", M, L]
                            }],
                            "text-decoration-color": [{
                                decoration: [t]
                            }],
                            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                            "text-wrap": [{
                                text: ["wrap", "nowrap", "balance", "pretty"]
                            }],
                            indent: [{
                                indent: B()
                            }],
                            "vertical-align": [{
                                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", L]
                            }],
                            whitespace: [{
                                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                            }],
                            break: [{
                                break: ["normal", "words", "all", "keep"]
                            }],
                            hyphens: [{
                                hyphens: ["none", "manual", "auto"]
                            }],
                            content: [{
                                content: ["none", L]
                            }],
                            "bg-attachment": [{
                                bg: ["fixed", "local", "scroll"]
                            }],
                            "bg-clip": [{
                                "bg-clip": ["border", "padding", "content", "text"]
                            }],
                            "bg-opacity": [{
                                "bg-opacity": [v]
                            }],
                            "bg-origin": [{
                                "bg-origin": ["border", "padding", "content"]
                            }],
                            "bg-position": [{
                                bg: [...X(), I]
                            }],
                            "bg-repeat": [{
                                bg: ["no-repeat", {
                                    repeat: ["", "x", "y", "round", "space"]
                                }]
                            }],
                            "bg-size": [{
                                bg: ["auto", "cover", "contain", N]
                            }],
                            "bg-image": [{
                                bg: ["none", {
                                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                                }, U]
                            }],
                            "bg-color": [{
                                bg: [t]
                            }],
                            "gradient-from-pos": [{
                                from: [f]
                            }],
                            "gradient-via-pos": [{
                                via: [f]
                            }],
                            "gradient-to-pos": [{
                                to: [f]
                            }],
                            "gradient-from": [{
                                from: [p]
                            }],
                            "gradient-via": [{
                                via: [p]
                            }],
                            "gradient-to": [{
                                to: [p]
                            }],
                            rounded: [{
                                rounded: [o]
                            }],
                            "rounded-s": [{
                                "rounded-s": [o]
                            }],
                            "rounded-e": [{
                                "rounded-e": [o]
                            }],
                            "rounded-t": [{
                                "rounded-t": [o]
                            }],
                            "rounded-r": [{
                                "rounded-r": [o]
                            }],
                            "rounded-b": [{
                                "rounded-b": [o]
                            }],
                            "rounded-l": [{
                                "rounded-l": [o]
                            }],
                            "rounded-ss": [{
                                "rounded-ss": [o]
                            }],
                            "rounded-se": [{
                                "rounded-se": [o]
                            }],
                            "rounded-ee": [{
                                "rounded-ee": [o]
                            }],
                            "rounded-es": [{
                                "rounded-es": [o]
                            }],
                            "rounded-tl": [{
                                "rounded-tl": [o]
                            }],
                            "rounded-tr": [{
                                "rounded-tr": [o]
                            }],
                            "rounded-br": [{
                                "rounded-br": [o]
                            }],
                            "rounded-bl": [{
                                "rounded-bl": [o]
                            }],
                            "border-w": [{
                                border: [a]
                            }],
                            "border-w-x": [{
                                "border-x": [a]
                            }],
                            "border-w-y": [{
                                "border-y": [a]
                            }],
                            "border-w-s": [{
                                "border-s": [a]
                            }],
                            "border-w-e": [{
                                "border-e": [a]
                            }],
                            "border-w-t": [{
                                "border-t": [a]
                            }],
                            "border-w-r": [{
                                "border-r": [a]
                            }],
                            "border-w-b": [{
                                "border-b": [a]
                            }],
                            "border-w-l": [{
                                "border-l": [a]
                            }],
                            "border-opacity": [{
                                "border-opacity": [v]
                            }],
                            "border-style": [{
                                border: [...K(), "hidden"]
                            }],
                            "divide-x": [{
                                "divide-x": [a]
                            }],
                            "divide-x-reverse": ["divide-x-reverse"],
                            "divide-y": [{
                                "divide-y": [a]
                            }],
                            "divide-y-reverse": ["divide-y-reverse"],
                            "divide-opacity": [{
                                "divide-opacity": [v]
                            }],
                            "divide-style": [{
                                divide: K()
                            }],
                            "border-color": [{
                                border: [i]
                            }],
                            "border-color-x": [{
                                "border-x": [i]
                            }],
                            "border-color-y": [{
                                "border-y": [i]
                            }],
                            "border-color-s": [{
                                "border-s": [i]
                            }],
                            "border-color-e": [{
                                "border-e": [i]
                            }],
                            "border-color-t": [{
                                "border-t": [i]
                            }],
                            "border-color-r": [{
                                "border-r": [i]
                            }],
                            "border-color-b": [{
                                "border-b": [i]
                            }],
                            "border-color-l": [{
                                "border-l": [i]
                            }],
                            "divide-color": [{
                                divide: [i]
                            }],
                            "outline-style": [{
                                outline: ["", ...K()]
                            }],
                            "outline-offset": [{
                                "outline-offset": [M, L]
                            }],
                            "outline-w": [{
                                outline: [M, C]
                            }],
                            "outline-color": [{
                                outline: [t]
                            }],
                            "ring-w": [{
                                ring: W()
                            }],
                            "ring-w-inset": ["ring-inset"],
                            "ring-color": [{
                                ring: [t]
                            }],
                            "ring-opacity": [{
                                "ring-opacity": [v]
                            }],
                            "ring-offset-w": [{
                                "ring-offset": [M, C]
                            }],
                            "ring-offset-color": [{
                                "ring-offset": [t]
                            }],
                            shadow: [{
                                shadow: ["", "inner", "none", F, _]
                            }],
                            "shadow-color": [{
                                shadow: [$]
                            }],
                            opacity: [{
                                opacity: [v]
                            }],
                            "mix-blend": [{
                                "mix-blend": [...Y(), "plus-lighter", "plus-darker"]
                            }],
                            "bg-blend": [{
                                "bg-blend": Y()
                            }],
                            filter: [{
                                filter: ["", "none"]
                            }],
                            blur: [{
                                blur: [r]
                            }],
                            brightness: [{
                                brightness: [n]
                            }],
                            contrast: [{
                                contrast: [l]
                            }],
                            "drop-shadow": [{
                                "drop-shadow": ["", "none", F, L]
                            }],
                            grayscale: [{
                                grayscale: [u]
                            }],
                            "hue-rotate": [{
                                "hue-rotate": [c]
                            }],
                            invert: [{
                                invert: [h]
                            }],
                            saturate: [{
                                saturate: [b]
                            }],
                            sepia: [{
                                sepia: [P]
                            }],
                            "backdrop-filter": [{
                                "backdrop-filter": ["", "none"]
                            }],
                            "backdrop-blur": [{
                                "backdrop-blur": [r]
                            }],
                            "backdrop-brightness": [{
                                "backdrop-brightness": [n]
                            }],
                            "backdrop-contrast": [{
                                "backdrop-contrast": [l]
                            }],
                            "backdrop-grayscale": [{
                                "backdrop-grayscale": [u]
                            }],
                            "backdrop-hue-rotate": [{
                                "backdrop-hue-rotate": [c]
                            }],
                            "backdrop-invert": [{
                                "backdrop-invert": [h]
                            }],
                            "backdrop-opacity": [{
                                "backdrop-opacity": [v]
                            }],
                            "backdrop-saturate": [{
                                "backdrop-saturate": [b]
                            }],
                            "backdrop-sepia": [{
                                "backdrop-sepia": [P]
                            }],
                            "border-collapse": [{
                                border: ["collapse", "separate"]
                            }],
                            "border-spacing": [{
                                "border-spacing": [s]
                            }],
                            "border-spacing-x": [{
                                "border-spacing-x": [s]
                            }],
                            "border-spacing-y": [{
                                "border-spacing-y": [s]
                            }],
                            "table-layout": [{
                                table: ["auto", "fixed"]
                            }],
                            caption: [{
                                caption: ["top", "bottom"]
                            }],
                            transition: [{
                                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", L]
                            }],
                            duration: [{
                                duration: H()
                            }],
                            ease: [{
                                ease: ["linear", "in", "out", "in-out", L]
                            }],
                            delay: [{
                                delay: H()
                            }],
                            animate: [{
                                animate: ["none", "spin", "ping", "pulse", "bounce", L]
                            }],
                            transform: [{
                                transform: ["", "gpu", "none"]
                            }],
                            scale: [{
                                scale: [w]
                            }],
                            "scale-x": [{
                                "scale-x": [w]
                            }],
                            "scale-y": [{
                                "scale-y": [w]
                            }],
                            rotate: [{
                                rotate: [V, L]
                            }],
                            "translate-x": [{
                                "translate-x": [A]
                            }],
                            "translate-y": [{
                                "translate-y": [A]
                            }],
                            "skew-x": [{
                                "skew-x": [S]
                            }],
                            "skew-y": [{
                                "skew-y": [S]
                            }],
                            "transform-origin": [{
                                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", L]
                            }],
                            accent: [{
                                accent: ["auto", t]
                            }],
                            appearance: [{
                                appearance: ["none", "auto"]
                            }],
                            cursor: [{
                                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", L]
                            }],
                            "caret-color": [{
                                caret: [t]
                            }],
                            "pointer-events": [{
                                "pointer-events": ["none", "auto"]
                            }],
                            resize: [{
                                resize: ["none", "y", "x", ""]
                            }],
                            "scroll-behavior": [{
                                scroll: ["auto", "smooth"]
                            }],
                            "scroll-m": [{
                                "scroll-m": B()
                            }],
                            "scroll-mx": [{
                                "scroll-mx": B()
                            }],
                            "scroll-my": [{
                                "scroll-my": B()
                            }],
                            "scroll-ms": [{
                                "scroll-ms": B()
                            }],
                            "scroll-me": [{
                                "scroll-me": B()
                            }],
                            "scroll-mt": [{
                                "scroll-mt": B()
                            }],
                            "scroll-mr": [{
                                "scroll-mr": B()
                            }],
                            "scroll-mb": [{
                                "scroll-mb": B()
                            }],
                            "scroll-ml": [{
                                "scroll-ml": B()
                            }],
                            "scroll-p": [{
                                "scroll-p": B()
                            }],
                            "scroll-px": [{
                                "scroll-px": B()
                            }],
                            "scroll-py": [{
                                "scroll-py": B()
                            }],
                            "scroll-ps": [{
                                "scroll-ps": B()
                            }],
                            "scroll-pe": [{
                                "scroll-pe": B()
                            }],
                            "scroll-pt": [{
                                "scroll-pt": B()
                            }],
                            "scroll-pr": [{
                                "scroll-pr": B()
                            }],
                            "scroll-pb": [{
                                "scroll-pb": B()
                            }],
                            "scroll-pl": [{
                                "scroll-pl": B()
                            }],
                            "snap-align": [{
                                snap: ["start", "end", "center", "align-none"]
                            }],
                            "snap-stop": [{
                                snap: ["normal", "always"]
                            }],
                            "snap-type": [{
                                snap: ["none", "x", "y", "both"]
                            }],
                            "snap-strictness": [{
                                snap: ["mandatory", "proximity"]
                            }],
                            touch: [{
                                touch: ["auto", "none", "manipulation"]
                            }],
                            "touch-x": [{
                                "touch-pan": ["x", "left", "right"]
                            }],
                            "touch-y": [{
                                "touch-pan": ["y", "up", "down"]
                            }],
                            "touch-pz": ["touch-pinch-zoom"],
                            select: [{
                                select: ["none", "text", "all", "auto"]
                            }],
                            "will-change": [{
                                "will-change": ["auto", "scroll", "contents", "transform", L]
                            }],
                            fill: [{
                                fill: [t, "none"]
                            }],
                            "stroke-w": [{
                                stroke: [M, C, D]
                            }],
                            stroke: [{
                                stroke: [t, "none"]
                            }],
                            sr: ["sr-only", "not-sr-only"],
                            "forced-color-adjust": [{
                                "forced-color-adjust": ["auto", "none"]
                            }]
                        },
                        conflictingClassGroups: {
                            overflow: ["overflow-x", "overflow-y"],
                            overscroll: ["overscroll-x", "overscroll-y"],
                            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                            "inset-x": ["right", "left"],
                            "inset-y": ["top", "bottom"],
                            flex: ["basis", "grow", "shrink"],
                            gap: ["gap-x", "gap-y"],
                            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                            px: ["pr", "pl"],
                            py: ["pt", "pb"],
                            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                            mx: ["mr", "ml"],
                            my: ["mt", "mb"],
                            size: ["w", "h"],
                            "font-size": ["leading"],
                            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                            "fvn-ordinal": ["fvn-normal"],
                            "fvn-slashed-zero": ["fvn-normal"],
                            "fvn-figure": ["fvn-normal"],
                            "fvn-spacing": ["fvn-normal"],
                            "fvn-fraction": ["fvn-normal"],
                            "line-clamp": ["display", "overflow"],
                            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                            "rounded-s": ["rounded-ss", "rounded-es"],
                            "rounded-e": ["rounded-se", "rounded-ee"],
                            "rounded-t": ["rounded-tl", "rounded-tr"],
                            "rounded-r": ["rounded-tr", "rounded-br"],
                            "rounded-b": ["rounded-br", "rounded-bl"],
                            "rounded-l": ["rounded-tl", "rounded-bl"],
                            "border-spacing": ["border-spacing-x", "border-spacing-y"],
                            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                            "border-w-x": ["border-w-r", "border-w-l"],
                            "border-w-y": ["border-w-t", "border-w-b"],
                            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                            "border-color-x": ["border-color-r", "border-color-l"],
                            "border-color-y": ["border-color-t", "border-color-b"],
                            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                            "scroll-mx": ["scroll-mr", "scroll-ml"],
                            "scroll-my": ["scroll-mt", "scroll-mb"],
                            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                            "scroll-px": ["scroll-pr", "scroll-pl"],
                            "scroll-py": ["scroll-pt", "scroll-pb"],
                            touch: ["touch-x", "touch-y", "touch-pz"],
                            "touch-x": ["touch"],
                            "touch-y": ["touch"],
                            "touch-pz": ["touch"]
                        },
                        conflictingClassGroupModifiers: {
                            "font-size": ["leading"]
                        }
                    }
                })
        }
    }
]);
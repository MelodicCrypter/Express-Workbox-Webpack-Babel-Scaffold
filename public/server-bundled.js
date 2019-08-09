!(function(e) {
    var t = {};
    function r(n) {
        if (t[n]) return t[n].exports;
        var o = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    (r.m = e),
        (r.c = t),
        (r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function(e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (r.t = function(e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
                (r.r(n),
                Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
                2 & t && 'string' != typeof e)
            )
                for (var o in e)
                    r.d(
                        n,
                        o,
                        function(t) {
                            return e[t];
                        }.bind(null, o),
                    );
            return n;
        }),
        (r.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return r.d(t, 'a', t), t;
        }),
        (r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ''),
        r((r.s = 5));
})([
    function(e, t) {
        e.exports = require('path');
    },
    function(e, t) {
        e.exports = require('express');
    },
    function(e, t, r) {
        'use strict';
        var n = r(0);
        var o = function(e, t) {
                t.render('index', {
                    locals: {
                        pageTitle: 'Express Workbox Webpack Babel Scaffold',
                        title: 'Simple',
                    },
                    partials: {
                        header: n.resolve('public/views/partials/header.html'),
                        footer: n.resolve('public/build/footer.html'),
                    },
                });
            },
            i = r(1).Router();
        i.get('/', o);
        t.a = i;
    },
    function(e, t, r) {
        'use strict';
        var n = r(0);
        var o = function(e, t) {
                t.render('test', {
                    locals: { pageTitle: 'Sample Page for Testing Route', title: 'Test Page' },
                    partials: {
                        header: n.resolve('public/views/partials/header.html'),
                        footer: n.resolve('public/build/footer.html'),
                    },
                });
            },
            i = r(1).Router();
        i.get('/', o);
        t.a = i;
    },
    function(e, t, r) {
        'use strict';
        var n = r(0);
        var o = function(e, t) {
                t.render('fallback', {
                    locals: { pageTitle: 'Sample fallback or offline Page', title: 'Offline Page' },
                    partials: {
                        header: n.resolve('public/views/partials/header.html'),
                        footer: n.resolve('public/build/footer.html'),
                    },
                });
            },
            i = r(1).Router();
        i.get('/', o);
        t.a = i;
    },
    function(e, t, r) {
        e.exports = r(6);
    },
    function(e, t, r) {
        'use strict';
        r.r(t),
            function(e) {
                var t = r(2),
                    n = r(3),
                    o = r(4),
                    i = r(1),
                    l = r(0),
                    s = r(7),
                    a = i(),
                    u = process.env.PORT || 3007,
                    c = l.join(e, './'),
                    f = l.join(e, './views/');
                a.engine('html', s),
                    a.set('views', f),
                    a.set('view engine', 'html'),
                    a.use(i.static(c)),
                    a.get('/sw.js', function(t, r) {
                        r.sendFile(l.resolve(e, '../sw.js'));
                    }),
                    a.use('/', t.a),
                    a.use('/test', n.a),
                    a.use('/fallback', o.a),
                    a.listen(u, function() {
                        console.log('App is listening on port '.concat(u)),
                            process.send && process.send('online');
                    });
            }.call(this, 'public');
    },
    function(e, t) {
        e.exports = require('express-es6-template-engine');
    },
]);

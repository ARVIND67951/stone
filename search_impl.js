google.maps.__gjsload__('search_impl', function(_) {
    var Jjb = function(a) {
        a = a.toArray();
        Ijb || (Ijb = {
            K: "sssM",
            N: ["ss"]
        });
        return _.wf(a, Ijb, 1)
    }, Kjb = function(a, b) {
        _.G(a.m, 3, b)
    }, Ojb = function(a, b, c) {
        const d = _.vE(new Ljb);
        c.Qk = (0,
        _.qa)(d.load, d);
        c.clickable = 0 != a.get("clickable");
        _.JJa(c, _.nL(b));
        const e = [];
        e.push(_.Tg(c, "click", (0,
        _.qa)(Mjb, null, a)));
        _.ub(["mouseover", "mouseout", "mousemove"], function(f) {
            e.push(_.Tg(c, f, (0,
            _.qa)(Njb, null, a, f)))
        });
        e.push(_.Tg(a, "clickable_changed", function() {
            a.g.clickable = 0 != a.get("clickable")
        }));
        a.h = e
    }, Mjb = function(a, b, c, d, e) {
        let f = null;
        if (e && (f = {
            status: e.getStatus()
        },
        0 == e.getStatus())) {
            f.location = _.N(e.m, 2) ? new _.wg(_.Io(_.zf(e.m, 2, _.No).m, 1),_.Io(_.zf(e.m, 2, _.No).m, 2)) : null;
            f.fields = {};
            const g = _.mf(e.m, 3);
            for (let k = 0; k < g; ++k) {
                const m = _.Em(e.m, 3, _.vL, k);
                f.fields[m.getKey()] = m.Ra()
            }
        }
        _.dh(a, "click", b, c, d, f)
    }, Njb = function(a, b, c, d, e, f, g) {
        let k = null;
        f && (k = {
            title: f[1].title,
            snippet: f[1].snippet
        });
        _.dh(a, b, c, d, e, k, g)
    }, Pjb = function() {}, Qjb = class extends _.M {
        constructor() {
            super()
        }
        pc() {
            return _.Ff(this.m, 2)
        }
    }
    , Ijb;
    var Rjb = class extends _.M {
        constructor(a) {
            super(a)
        }
        getStatus() {
            return _.L(this.m, 1, -1)
        }
    }
    ;
    var Ljb = class {
        constructor() {
            var a = _.Ck
              , b = _.Bk;
            this.h = _.Lf;
            this.g = _.tm(_.Uq, a, _.zt + "/maps/api/js/LayersService.GetFeature", b)
        }
        load(a, b) {
            function c(g) {
                g = new Rjb(g);
                b(g)
            }
            var d = new Qjb;
            _.G(d.m, 1, a.layerId.split("|")[0]);
            _.G(d.m, 2, a.featureId);
            Kjb(d, this.h.g().g());
            for (var e in a.parameters) {
                var f = _.Cf(d.m, 4, _.vL);
                _.G(f.m, 1, e);
                _.G(f.m, 2, a.parameters[e])
            }
            a = Jjb(d);
            this.g(a, c, c);
            return a
        }
        cancel() {
            throw Error("Not implemented");
        }
    }
    ;
    Pjb.prototype.kB = function(a) {
        if (_.vj[15]) {
            var b = a.o;
            const D = a.o = a.getMap();
            b && a.g && (a.j ? (b = b.__gm.h,
            b.set(b.get().xh(a.g))) : a.g && _.fKa(a.g, b) && (_.ub(a.h || [], _.Vg),
            a.h = null));
            if (D) {
                var c = a.get("layerId");
                b = a.get("spotlightDescription");
                var d = a.get("paintExperimentIds")
                  , e = a.get("styler")
                  , f = a.get("roadmapStyler")
                  , g = a.get("mapsApiLayer")
                  , k = a.get("darkLaunch")
                  , m = a.get("mapFeatures")
                  , q = a.get("clickableCities")
                  , t = a.get("travelMapRequest")
                  , v = a.get("searchPipeMetadata")
                  , x = a.get("overlayLayer")
                  , y = a.get("caseExperimentIds")
                  , A = a.get("airQualityPipeMetadata")
                  , C = a.get("directionsPipeParameters");
                const E = new _.Gq;
                c = c.split("|");
                E.layerId = c[0];
                for (let J = 1; J < c.length; ++J) {
                    const [S,...W] = c[J].split(":");
                    E.parameters[S] = W.join(":")
                }
                b && (E.spotlightDescription = new _.Pq(b));
                d && (E.paintExperimentIds = d.slice(0));
                e && (E.roadmapStyler = new _.Xp(e));
                f && (E.roadmapStyler = new _.Xp(f));
                t && (E.travelMapRequest = new _.xla(t));
                g && (E.mapsApiLayer = new _.Hq(g));
                m && (E.mapFeatures = m);
                q && (E.clickableCities = q);
                v && (E.searchPipeMetadata = new _.ws(v));
                x && (E.overlayLayer = new _.Qq(x));
                y && (E.caseExperimentIds = y.slice(0));
                A && (E.airQualityPipeMetadata = new _.nla(A));
                C && (E.directionsPipeParameters = new _.kla(C));
                E.darkLaunch = !!k;
                b = E;
                a.g = b;
                a.j = a.get("renderOnBaseMap");
                a.j ? (a = D.__gm.h,
                a.set(a.get().sf(b))) : Ojb(a, D, b);
                _.ai(D, "Lg");
                _.Zh(D, 148282)
            }
        }
    }
    ;
    _.Jg("search_impl", new Pjb);
});

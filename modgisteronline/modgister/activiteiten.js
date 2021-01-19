(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    504: function(t, i, e) {
        "use strict";
        e.r(i),
        function(t) {
            e.d(i, "activiteitenAMD", function() {
                return s
            });
            var n = e(505)
              , r = e(506)
              , c = e(507)
              , a = e(508)
              , o = e(512)
              , s = t.module("ActiviteitenAMD", []);
            s.filter("inschrijvingenCount", n.a.prototype.inschrijvingenCount).filter("inschrijfperiode", n.a.prototype.inschrijfperiode),
            s.service("activiteitenResource", r.a.$inject).service("activiteitenService", c.a.$inject),
            s.controller("activiteitenOverzichtController", a.a.$inject).controller("activiteitenDetailController", o.a.$inject)
        }
        .call(this, e(1))
    },
    505: function(t, i, e) {
        "use strict";
        (function(t) {
            e.d(i, "a", function() {
                return r
            });
            var n = e(0)
              , r = function() {
                function i() {}
                return i.prototype.inschrijvingenCount = function() {
                    return function(t, i, e) {
                        var r = "";
                        return r = 0 === e ? "nvt" : String(e),
                        Object(n.h)("{0} ({1}/{2})", t, i, r)
                    }
                }
                ,
                i.prototype.inschrijfperiode = function() {
                    return function(i, e) {
                        return Object(n.h)("{0} - {1}", t(i.toString(), n.c).format("DD MMM HH:mm"), t(e.toString(), n.c).format("DD MMM HH:mm"))
                    }
                }
                ,
                i
            }()
        }
        ).call(this, e(14))
    },
    506: function(t, i, e) {
        "use strict";
        e.d(i, "a", function() {
            return n
        });
        var n = function() {
            function t(t) {
                this.$resource = t,
                this.createResource(this.activiteiten, this.$resource)
            }
            return t.prototype.createResource = function(t, i) {
                var e = globalSettings.apiHost + "api/personen/:persoonId/activiteiten"
                  , n = e + "/:activiteitId"
                  , r = n + "/onderdelen"
                  , c = r + "/:onderdeelId"
                  , a = c + "/inschrijvingen";
                this.activiteiten = {
                    getAll: function(t) {
                        return i(e, {
                            persoonId: "@persoonId"
                        }).get({
                            persoonId: t
                        }).$promise
                    },
                    getById: function(t, e) {
                        return i(n, {
                            persoonId: "@persoonId",
                            activiteitId: "@activiteitId"
                        }).get({
                            persoonId: t,
                            activiteitId: e
                        }).$promise
                    },
                    onderdelen: {
                        getAll: function(t, e) {
                            return i(r, {
                                persoonId: "@persoonId",
                                activiteitId: "@activiteitId"
                            }).get({
                                persoonId: t,
                                activiteitId: e
                            }).$promise
                        },
                        getById: function(t, e, n) {
                            return i(c, {
                                persoonId: "@persoonId",
                                activiteitId: "@activiteitId",
                                onderdeelId: "@onderdeelId"
                            }).get({
                                persoonId: t,
                                activiteitId: e,
                                onderdeelId: n
                            }).$promise
                        },
                        inschrijven: function(t, e, n) {
                            return i(a, {
                                persoonId: "@persoonId",
                                activiteitId: "@activiteitId",
                                onderdeelId: "@onderdeelId"
                            }).save({
                                persoonId: t,
                                activiteitId: e,
                                onderdeelId: n
                            }).$promise
                        },
                        uitschrijven: function(t, e, n) {
                            return i(a, {
                                persoonId: "@persoonId",
                                activiteitId: "@activiteitId",
                                onderdeelId: "@onderdeelId"
                            }).remove({
                                persoonId: t,
                                activiteitId: e,
                                onderdeelId: n
                            }).$promise
                        }
                    }
                }
            }
            ,
            t.$inject = ["$resource", t],
            t
        }()
    },
    507: function(t, i, e) {
        "use strict";
        (function(t) {
            e.d(i, "a", function() {
                return r
            });
            var n = e(0)
              , r = function() {
                function i(t, i) {
                    this.$q = t,
                    this.activiteitenResource = i
                }
                return i.prototype.getActiviteiten = function(t) {
                    return this.activiteitenResource.activiteiten.getAll(t)
                }
                ,
                i.prototype.getActiviteit = function(t, i) {
                    return this.activiteitenResource.activiteiten.getById(t, i)
                }
                ,
                i.prototype.getOnderdelenByActiviteitId = function(t, i) {
                    return this.activiteitenResource.activiteiten.onderdelen.getAll(t, i)
                }
                ,
                i.prototype.getOnderdeelById = function(t, i, e) {
                    return this.activiteitenResource.activiteiten.onderdelen.getById(t, i, e)
                }
                ,
                i.prototype.maakNieuweInschrijving = function(t, i, e) {
                    return this.activiteitenResource.activiteiten.onderdelen.inschrijven(t, i, e)
                }
                ,
                i.prototype.verwijderInschrijving = function(t, i, e) {
                    return this.activiteitenResource.activiteiten.onderdelen.uitschrijven(t, i, e)
                }
                ,
                i.prototype.isActiviteitExpired = function(t) {
                    if (Object(n.w)(t))
                        return !1;
                    var i = t.AantalInschrijvingen < t.MinimumAantalInschrijvingenPerActiviteit || 0 === t.MinimumAantalInschrijvingenPerActiviteit
                      , e = t.AantalInschrijvingen > t.MaximumAantalInschrijvingenPerActiviteit || 0 === t.MaximumAantalInschrijvingenPerActiviteit;
                    return (!i || !e) && this.isPeriodeVerlopen(t.EindeInschrijfdatum)
                }
                ,
                i.prototype.isActiviteitValid = function(t) {
                    if (Object(n.w)(t))
                        return !1;
                    var i = t.AantalInschrijvingen >= t.MinimumAantalInschrijvingenPerActiviteit && 0 !== t.MinimumAantalInschrijvingenPerActiviteit
                      , e = t.AantalInschrijvingen <= t.MaximumAantalInschrijvingenPerActiviteit && 0 !== t.MaximumAantalInschrijvingenPerActiviteit;
                    return i && e && !this.isPeriodeVerlopen(t.EindeInschrijfdatum)
                }
                ,
                i.prototype.isInschrijvenMogelijk = function(i, e) {
                    if (Object(n.w)(i))
                        return !1;
                    var r = t() > t(e.StartInschrijfdatum.toString(), n.c) && t() < t(e.EindeInschrijfdatum.toString(), n.c)
                      , c = e.IsIngeschreven || i.AantalInschrijvingen < i.MaximumAantalInschrijvingenPerActiviteit || 0 === i.MaximumAantalInschrijvingenPerActiviteit
                      , a = e.IsIngeschreven || e.AantalPlaatsenBeschikbaar > 0 || 0 === e.MaxAantalDeelnemers;
                    return r && !e.IsVerplichtIngeschreven && c && a
                }
                ,
                i.prototype.isPeriodeVerlopen = function(i) {
                    return t(i) < t()
                }
                ,
                i.$inject = ["$q", "activiteitenResource", i],
                i
            }()
        }
        ).call(this, e(14))
    },
    508: function(t, i, e) {
        "use strict";
        (function(t) {
            e.d(i, "a", function() {
                return r
            });
            var n = e(0)
              , r = function() {
                function i(t, i, n, r, c) {
                    this.$scope = t,
                    this.$location = i,
                    this.$templateCache = n,
                    this.currentUser = r,
                    this.activiteitenService = c,
                    this.COLUMN_WIDTH_PERIODE = 156,
                    this.COLUMN_WIDTH_AANTALLEN = 174,
                    this.PERIODE_TEMPLATE_URL = "/Content/app/scripts/elo/activiteiten/views/gridtemplates/periode-cell-template.html",
                    this.AANTALLEN_TEMPLATE_URL = "/Content/app/scripts/elo/activiteiten/views/gridtemplates/aantallen-cell-template.html",
                    this.ACTIVITEITEN_ROW_TEMPLATE = "/Content/app/scripts/elo/activiteiten/views/gridtemplates/activiteiten-grid-row-template.html",
                    t.vm = this,
                    n.put(this.AANTALLEN_TEMPLATE_URL, e(509)),
                    n.put(this.ACTIVITEITEN_ROW_TEMPLATE, e(510)),
                    n.put(this.PERIODE_TEMPLATE_URL, e(511)),
                    this.activiteitenGridRows = [],
                    this.init()
                }
                return i.prototype.init = function() {
                    var i = this;
                    this.gridColumnDefinitions = [{
                        field: "Titel",
                        displayName: "Activiteiten"
                    }, {
                        field: "StartInschrijfdatum",
                        displayName: "Inschrijvingsperiode",
                        width: this.COLUMN_WIDTH_PERIODE,
                        cellTemplate: this.PERIODE_TEMPLATE_URL,
                        resizable: !1
                    }, {
                        field: "AantalInschrijvingen",
                        displayName: "Inschrijvingen (min/max)",
                        width: this.COLUMN_WIDTH_AANTALLEN,
                        cellTemplate: this.AANTALLEN_TEMPLATE_URL,
                        resizable: !1
                    }],
                    this.activiteitenService.getActiviteiten(this.currentUser.relatedPersons.current.id).then(function(e) {
                        i.activiteitenGridRows = t.map(e.Items, function(t) {
                            var e = t;
                            return {
                                isExpired: i.activiteitenService.isActiviteitExpired(t),
                                isValid: i.activiteitenService.isActiviteitValid(t),
                                data: e
                            }
                        })
                    })
                }
                ,
                i.prototype.onRowClick = function(t, i) {
                    var e = Object(n.h)("{0}/{1}", "/elo/activiteiten", t.data.Id);
                    return this.$location.path(e),
                    !1
                }
                ,
                i.CONTROLLER_NAME = "activiteitenOverzichtController",
                i.$inject = ["$scope", "$location", "$templateCache", "currentUser", "activiteitenService", i],
                i
            }()
        }
        ).call(this, e(3))
    },
    509: function(t, i) {
        t.exports = '<div class="ngCellText" style="text-align:center;" data-ng-class="{\'valid-activiteit\': row.entity.data.isValid}">\r\n    <span data-ng-bind="row.entity.data.AantalInschrijvingen | inschrijvingenCount: row.entity.data.MinimumAantalInschrijvingenPerActiviteit: row.entity.data.MaximumAantalInschrijvingenPerActiviteit"></span>\r\n</div>'
    },
    510: function(t, i) {
        t.exports = '<div>\r\n    <div data-ng-repeat="col in renderedColumns" data-ng-class="col.colIndex();" class="ngCell {{col.cellClass}}">\r\n        <div class="ngVerticalBar" data-ng-class="{ ngVerticalBarVisible: !$last  }">&nbsp;</div>\r\n        <div data-ng-cell data-ng-class="{\'overdue\': row.entity.isExpired}"></div>\r\n    </div>\r\n</div>\r\n'
    },
    511: function(t, i) {
        t.exports = '<div class="ngCellText">\r\n    <span class="grid-date">{{row.entity.data.StartInschrijfdatum | inschrijfperiode: row.entity.data.EindeInschrijfdatum}}</span>\r\n</div>'
    },
    512: function(t, i, e) {
        "use strict";
        (function(t, n) {
            e.d(i, "a", function() {
                return d
            });
            var r = e(5)
              , c = e(8)
              , a = e(0)
              , o = Contracts.Bronnen.Enums.BronSoort
              , s = Contracts.Bronnen.Enums.BijlageContentStatus
              , d = function() {
                function i(t, i, e, n, r, c, a, o, s, d, v) {
                    var l = this;
                    this.$scope = t,
                    this.$route = i,
                    this.$routeParams = e,
                    this.$location = n,
                    this.$timeout = r,
                    this.$filter = c,
                    this.currentUser = a,
                    this.activiteitenService = o,
                    this.$window = s,
                    this.downloadTokenService = d,
                    this.toastService = v,
                    this.$scope.vm = this,
                    this.isActiviteitExpired = function() {
                        return l.activiteitenService.isActiviteitExpired(l.activiteit)
                    }
                    ,
                    this.isActiviteitValid = function() {
                        return l.activiteitenService.isActiviteitValid(l.activiteit)
                    }
                    ,
                    this.initialize()
                }
                return i.prototype.initialize = function() {
                    var i = this;
                    this.returnUrl = t.isDefined(this.$routeParams.returnUrl) ? decodeURIComponent(this.$routeParams.returnUrl) : null;
                    var e = parseInt(this.$routeParams.activiteitId, a.b);
                    this.activiteitenService.getActiviteit(this.currentUser.relatedPersons.current.id, e).then(function(t) {
                        i.activiteit = t
                    }),
                    this.activiteitenService.getOnderdelenByActiviteitId(this.currentUser.relatedPersons.current.id, e).then(function(t) {
                        i.activiteitOnderdelen = n.map(t.Items, function(t) {
                            return i.activiteitenService.getOnderdeelById(i.currentUser.relatedPersons.current.id, e, t.Id).then(function(i) {
                                t.Bijlagen = i.Bijlagen
                            }),
                            t
                        })
                    }).finally(function() {
                        i.$scope.$broadcast("NG_REPEAT_FINISHED", "activiteiten")
                    })
                }
                ,
                i.prototype.getInschrijfStartEnEinddatum = function() {
                    var t = this.$filter("inschrijfperiode");
                    return Object(a.w)(this.activiteit) ? "" : t(this.activiteit.StartInschrijfdatum, this.activiteit.EindeInschrijfdatum)
                }
                ,
                i.prototype.onTerugClick = function() {
                    t.isDefined(this.returnUrl) && null != this.returnUrl ? this.$location.path(this.returnUrl) : this.$timeout(function() {
                        window.history.back()
                    }, 0)
                }
                ,
                i.prototype.onActiviteitClick = function(t) {
                    var i = this;
                    if (this.isInschrijvenMogelijk(t)) {
                        var e = this.currentUser.relatedPersons.current.id;
                        t.IsIngeschreven = !t.IsIngeschreven,
                        t.IsIngeschreven ? this.activiteitenService.maakNieuweInschrijving(e, t.ActiviteitId, t.Id).then(function(e) {
                            i.activiteit.AantalInschrijvingen++,
                            t.MaxAantalDeelnemers > 0 && t.AantalPlaatsenBeschikbaar--
                        }, function(i) {
                            t.IsIngeschreven = !1
                        }) : this.activiteitenService.verwijderInschrijving(e, t.ActiviteitId, t.Id).then(function(e) {
                            i.activiteit.AantalInschrijvingen--,
                            t.MaxAantalDeelnemers > 0 && t.AantalPlaatsenBeschikbaar++
                        }, function(i) {
                            t.IsIngeschreven = !0
                        })
                    }
                }
                ,
                i.prototype.onBijlageClick = function(t) {
                    Object(a.A)(t.Url)
                }
                ,
                i.prototype.isInschrijvenMogelijk = function(t) {
                    return this.activiteitenService.isInschrijvenMogelijk(this.activiteit, t) && this.currentUser.hasPrivilege(r.a.Activiteiten, c.a.Create)
                }
                ,
                i.prototype.getContentUri = function(t) {
                    return t || null
                }
                ,
                i.prototype.getContentUri2 = function(t, i) {
                    var e = n.find(t, function(t) {
                        return t.rel === i || t.Rel === i
                    });
                    return e.href || e.Href
                }
                ,
                i.prototype.onOpenAttachment = function(t, i) {
                    var e = this;
                    t.Status === s.Available ? this.openAttachment(t) : this.activiteitenService.getOnderdeelById(this.currentUser.relatedPersons.current.id, this.activiteit.Id, i.Id).then(function(r) {
                        var c = n.find(r.Bijlagen, function(i) {
                            return i.Id === t.Id
                        });
                        c ? c.Status === s.Available ? (i.Bijlagen[i.Bijlagen.indexOf(t)] = c,
                        e.openAttachment(c)) : e.toastService.showInformation("Bijlage nog niet beschikbaar", "Bijlage wordt toegevoegd. Een moment geduld, s.v.p.") : e.toastService.showError("Bijlage niet gevonden", "De geselecteerde bijlage kon niet worden gevonden en is mogelijk verwijderd.")
                    })
                }
                ,
                i.prototype.openAttachment = function(t) {
                    switch (t.BronSoort) {
                    case o.Url:
                        this.$window.open(t.Url, "_blank");
                        break;
                    case o.Bestand:
                        this.downloadTokenService.downloadFromLocation(Object(a.j)(t.Links, a.a.Contents));
                        break;
                    case o.Scorm:
                        this.downloadTokenService.openTabToLocation(Object(a.j)(t.Links, a.a.Contents))
                    }
                }
                ,
                i.$inject = ["$scope", "$route", "$routeParams", "$location", "$timeout", "$filter", "currentUser", "activiteitenService", "$window", "downloadTokenService", "toastService", i],
                i
            }()
        }
        ).call(this, e(1), e(3))
    }
}]);

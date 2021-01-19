(window.webpackJsonp = window.webpackJsonp || []).push([[8], {
    118: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
            return i
        }),
        function(e) {
            e[e.Huur = 0] = "Huur",
            e[e.Koop = 1] = "Koop",
            e[e.School = 2] = "School",
            e[e.Digitaal = 3] = "Digitaal",
            e[e.Alle = -1] = "Alle",
            e[e.Geen = -2] = "Geen"
        }(i || (i = {}))
    },
    586: function(e, t, n) {
        "use strict";
        n.r(t),
        function(e) {
            n.d(t, "leermiddelenAMD", function() {
                return d
            });
            var i = n(587)
              , r = n(590)
              , a = n(591)
              , o = n(593)
              , l = n(595)
              , d = e.module("LeermiddelenAMD", []);
            d.controller("leermiddelenOverzichtController", i.a.$inject),
            d.service("leermiddelenService", r.a.$inject),
            d.directive("smLeermiddelenSelectieDirective", a.a.$inject).directive("smLeermiddelenDetailsDirective", o.a.$inject),
            d.filter("naleveringWaarde", l.a.prototype.naleveringWaarde)
        }
        .call(this, n(1))
    },
    587: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return s
            });
            var i = n(4)
              , r = n(85)
              , a = n(0)
              , o = n(588)
              , l = n(118)
              , d = n(589)
              , s = function() {
                function t(e, t, n, r, a, l, d, s) {
                    var c = this;
                    this.$scope = e,
                    this.leermiddelenService = t,
                    this.currentUser = n,
                    this.tabService = r,
                    this.dialogService = a,
                    this.$window = l,
                    this.downloadTokenService = d,
                    this.toastService = s,
                    e.canOpenDigitaalLesmateriaal = !1,
                    e.filterLeermiddelen = function(t) {
                        c.filterLeermiddelen(e, t)
                    }
                    ,
                    e.filterPeriode = function(t) {
                        c.filterPeriode(e, t)
                    }
                    ,
                    e.filter = {
                        IsSchool: !1,
                        IsKoop: !1,
                        IsHuur: !1,
                        IsDigitaal: !0
                    },
                    this.getLeermiddelen(e, o.a.Huidige, !0),
                    e.selectItem = function(e, t) {
                        return c.selectItem(e, t)
                    }
                    ,
                    e.openLeermiddel = function(e) {
                        return c.openLeermiddel(e)
                    }
                    ,
                    e.isDigitaalMateriaal = function(e) {
                        return c.isDigitaalMateriaal(e)
                    }
                    ,
                    e.getLink = function(e) {
                        return c.getLink(e)
                    }
                    ,
                    e.onVerifyKennisnetInfo = function() {
                        return c.onVerifyKennisnetInfo()
                    }
                    ,
                    e.tabState = this.tabService.tabState,
                    this.tabService.subscribeTabAdded(this.tabAdded, this),
                    this.currentUser.roles.forEach(function(t) {
                        t === i.a.Leerling && (e.canOpenDigitaalLesmateriaal = !0)
                    })
                }
                return t.prototype.tabAdded = function(e) {
                    this.tabService.openTab(e)
                }
                ,
                t.prototype.getLeermiddelen = function(t, n, i) {
                    var r = this;
                    void 0 === n && (n = o.a.Huidige),
                    void 0 === i && (i = !1),
                    this.leermiddelenService.getAllLeermiddelen(n).then(function(n) {
                        t.items = n,
                        r.leermiddelen = n,
                        r.filterLeermiddelen(t),
                        0 === t.items.length && i && (t.filter.IsSchool = !0,
                        t.filter.IsHuur = !0,
                        t.filter.IsDigitaal = !0,
                        t.filter.IsKoop = !0,
                        r.filterLeermiddelen(t, !1)),
                        t.selectedItem = e.first(t.items)
                    })
                }
                ,
                t.prototype.filterPeriode = function(e, t) {
                    this.getLeermiddelen(e, t)
                }
                ,
                t.prototype.filterLeermiddelen = function(t, n) {
                    if (void 0 === n && (n = !1),
                    null != this.leermiddelen) {
                        var i = [];
                        t.filter.IsSchool && i.push(l.a.School),
                        t.filter.IsHuur && i.push(l.a.Huur),
                        t.filter.IsKoop && i.push(l.a.Koop),
                        t.filter.IsDigitaal && i.push(l.a.Digitaal),
                        this.$scope.items = e.filter(this.leermiddelen, function(t) {
                            return e.contains(i, t.Soort)
                        }),
                        this.selectItem(e.first(this.$scope.items), n)
                    }
                }
                ,
                t.prototype.selectItem = function(e, t) {
                    void 0 === t && (t = !1),
                    t && this.$scope.$broadcast("TOGGLE_TAB", "sheet-0", !0),
                    Object(a.w)(e) ? this.$scope.selectedItem = null : Object(a.w)(this.$scope.selectedItem) ? this.$scope.selectedItem = e : e.Id !== this.$scope.selectedItem.Id && (this.$scope.selectedItem = e)
                }
                ,
                t.prototype.openLeermiddel = function(t) {
                    var n = this
                      , i = function() {
                        return n.toastService.showError("Digitaal lesmateriaal", "Er is iets mis gegaan bij het openen van je digitale lesmateriaal. Probeer het later nog eens.", 7e3)
                    }
                      , r = e.find(t.Links, function(e) {
                        return "content" === e.Rel
                    });
                    r || i(),
                    this.downloadTokenService.openTabToLocation(r.Href, !1).catch(function(e) {
                        e && e.error && "string" == typeof e.error.data && 0 === e.error.data.indexOf("<!DOCTYPE html>") ? (e.tabRef.document.write(e.error.data),
                        e.tabRef.document.close()) : (e.tabRef.close(),
                        i())
                    })
                }
                ,
                t.prototype.isDigitaalMateriaal = function(e) {
                    return e === Contracts.DigitaalLesmateriaal.Enums.MateriaalType.Digitaal
                }
                ,
                t.prototype.getLink = function(e) {
                    if (e)
                        return Object(a.k)(e.Links, "content")
                }
                ,
                t.prototype.onVerifyKennisnetInfo = function() {
                    var e = this;
                    this.dialogService.showConfirm(d.a, d.b, [r.a.Cancel, r.a.Continue], function(t) {
                        t.clickedButtonType === r.a.Continue && e.$window.open("https://kn.nu/refsp", "_blank")
                    })
                }
                ,
                t.CONTROLLER_NAME = "leermiddelenOverzichtController",
                t.$inject = ["$scope", "leermiddelenService", "currentUser", "tabService", "dialogService", "$window", "downloadTokenService", "toastService", t],
                t
            }()
        }
        ).call(this, n(3))
    },
    588: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
            return i
        }),
        function(e) {
            e[e.Huidige = 0] = "Huidige",
            e[e.Alles = 1] = "Alles"
        }(i || (i = {}))
    },
    589: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }),
        n.d(t, "b", function() {
            return r
        });
        var i = "Kennisnetgegevens controleren"
          , r = "Je gaat naar een testpagina van Kennisnet. Heb je problemen met Leermiddelen? Maak een screenshot van de foutmelding en van de testpagina en stuur die met uitleg van je probleem naar je Magisterbeheerder."
    },
    590: function(e, t, n) {
        "use strict";
        (function(e, i) {
            n.d(t, "a", function() {
                return a
            });
            var r = n(118)
              , a = function() {
                function t(e, t, n) {
                    this.$q = e,
                    this.$resource = t,
                    this.currentUser = n;
                    var i = globalSettings.apiHost + "api/personen/:persoonId/lesmateriaal";
                    this.lesmateriaalResource = this.$resource(i)
                }
                return t.prototype.getAllLeermiddelen = function(t) {
                    var n = this
                      , i = this.$q.defer();
                    return this.getLeermiddelen(this.lesmateriaalResource, t).then(function(t) {
                        var r = [];
                        e.each(t.Items, function(e) {
                            r = r.concat(e)
                        }),
                        r = n.fillMissingData(r),
                        i.resolve(r)
                    }),
                    i.promise
                }
                ,
                t.prototype.bijwerkenGebruik = function(e) {
                    var t = this.$resource(globalSettings.apiHost + "api/personen/:persoonId/digitaallesmateriaal/gebruik/:ean", {
                        persoonId: "@persoonId",
                        ean: "@ean"
                    })
                      , n = {
                        persoonId: this.currentUser.relatedPersons.current.id,
                        ean: e
                    };
                    return t.save(n).$promise
                }
                ,
                t.prototype.getLeermiddelen = function(e, t) {
                    var n = {
                        persoonId: this.currentUser.relatedPersons.current.id,
                        DigitaalLicentieFilter: t
                    };
                    return e.get(n).$promise
                }
                ,
                t.prototype.fillMissingData = function(t) {
                    var n = 0;
                    return e.each(t, function(e) {
                        i.isDefined(e.Id) && 0 === e.Id && (e.Id = n++),
                        e.MateriaalType === Contracts.DigitaalLesmateriaal.Enums.MateriaalType.Digitaal && (e.Soort = r.a.Digitaal)
                    }),
                    t
                }
                ,
                t.$inject = ["$q", "$resource", "currentUser", t],
                t
            }()
        }
        ).call(this, n(3), n(1))
    },
    591: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n(118)
          , r = function() {
            function e(e, t) {
                var i = this;
                this.$rootScope = e,
                this.leermiddelenService = t,
                this.initialize = function(e) {
                    e.toggleStatus = function(t) {
                        return i.toggleStatus(e, t)
                    }
                    ,
                    e.togglePeriode = function(t) {
                        return i.togglePeriode(e, t)
                    }
                    ,
                    e.blockFold = function() {
                        return i.blockFold(e)
                    }
                    ,
                    e.showLeermiddelen = 0
                }
                ,
                this.template = n(592),
                this.replace = !0,
                this.link = function(e, t, n) {
                    return i.linkFn(e, t, n)
                }
            }
            return e.prototype.linkFn = function(e, t, n) {
                this.initialize(e)
            }
            ,
            e.prototype.blockFold = function(e) {
                e.fold = !e.fold
            }
            ,
            e.prototype.togglePeriode = function(e, t) {
                e.showLeermiddelen = t,
                e.filterPeriode(t)
            }
            ,
            e.prototype.toggleStatus = function(e, t) {
                switch (t) {
                case i.a.Alle:
                    e.filter.IsSchool = !0,
                    e.filter.IsHuur = !0,
                    e.filter.IsKoop = !0,
                    e.filter.IsDigitaal = !0;
                    break;
                case i.a.Geen:
                    e.filter.IsSchool = !1,
                    e.filter.IsHuur = !1,
                    e.filter.IsKoop = !1,
                    e.filter.IsDigitaal = !1
                }
                e.filterLeermiddelen(!1)
            }
            ,
            e.DIRECTIVE_NAME = "smLeermiddelenSelectieDirective",
            e.$inject = ["$rootScope", "leermiddelenService", function(t, n) {
                return new e(t,n)
            }
            ],
            e
        }()
    },
    592: function(e, t) {
        e.exports = '<div>\r\n    <div class="widget">\r\n        <div class="block" data-ng-class="{\'fold\': fold}">\r\n\r\n            <span data-ng-click="blockFold()">\r\n                <h3><span data-ng-class="{\'icon-up-arrow\': !fold, \'icon-down-arrow\': fold}"></span><b>Toon selectie</b></h3>\r\n            </span>\r\n            <div class="content">\r\n                <form>\r\n                    <ul class="widget-checkboxes">\r\n                        <li><span class="check"><input id="isSchool" type="checkbox" data-ng-model="filter.IsSchool" data-ng-click="toggleStatus(2)" /><label for="isSchool"><span></span>School</label></span></li>\r\n                        <li><span class="check"><input id="isHuur" type="checkbox" data-ng-model="filter.IsHuur" data-ng-click="toggleStatus(0)" /><label for="isHuur"><span></span>Huur</label></span></li>\r\n                        <li><span class="check"><input id="isKoop" type="checkbox" data-ng-model="filter.IsKoop" data-ng-click="toggleStatus(1)" /><label for="isKoop"><span></span>Koop</label></span></li>\r\n                        <li><span class="check"><input id="isDigitaal" type="checkbox" data-ng-model="filter.IsDigitaal" data-ng-click="toggleStatus(3)" /><label for="isDigitaal"><span></span>Digitaal</label></span></li>\r\n                    </ul>\r\n                </form>\r\n            </div>\r\n            <footer class="endlink">\r\n                <a data-ng-click="toggleStatus(-1)">alles tonen</a>\r\n                <a data-ng-click="toggleStatus(-2)">geen tonen</a>\r\n            </footer>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="widget" data-ng-show="filter.IsDigitaal">\r\n        <div class="block" data-ng-class="{\'fold\': foldPeriode}">\r\n            <span data-ng-click="foldPeriode=!foldPeriode">\r\n                <h3><span data-ng-class="{\'icon-up-arrow\': !foldPeriode, \'icon-down-arrow\': foldPeriode}"></span><b>Licenties</b></h3>\r\n            </span>\r\n            <div class="content">\r\n                <form>\r\n                    <div>\r\n                        <span class="radio-buttons">\r\n                            <span class="radio">\r\n                                <input type="radio" data-ng-model="showLeermiddelen" name="showLeermiddelen" value="1" id="showLeermiddelen1" data-ng-click="togglePeriode(1)"><label for="showLeermiddelen1">alle</label>\r\n                            </span>\r\n                            <span class="radio">\r\n                                <input type="radio" data-ng-model="showLeermiddelen" name="showLeermiddelen" value="0" id="showLeermiddelen2" data-ng-click="togglePeriode(0)"><label for="showLeermiddelen2">huidige</label>\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'
    },
    593: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = function() {
            function e() {
                var e = this;
                this.template = n(594),
                this.replace = !0,
                this.link = function(t, n, i) {
                    return e.linkFn(t, n, i)
                }
            }
            return e.prototype.linkFn = function(e, t, n) {
                var i = this;
                this.initialize(e),
                e.blockFold = function() {
                    e.fold = !e.fold
                }
                ,
                e.isDigitaalMateriaal = function(e) {
                    return i.isDigitaalMateriaal(e)
                }
            }
            ,
            e.prototype.initialize = function(e) {
                e.fold = !1
            }
            ,
            e.prototype.isDigitaalMateriaal = function(e) {
                return e === Contracts.DigitaalLesmateriaal.Enums.MateriaalType.Digitaal
            }
            ,
            e.DIRECTIVE_NAME = "smLeermiddelenDetailsDirective",
            e.$inject = [function() {
                return new e
            }
            ],
            e
        }()
    },
    594: function(e, t) {
        e.exports = '<div class="widget aside-wide-widget">\r\n    <div class="block" data-ng-class="{\'fold\': fold}">\r\n        <span data-ng-click="blockFold()">\r\n            <h3><span data-ng-class="{\'icon-up-arrow\': !fold, \'icon-down-arrow\': fold}"></span><b>Boekinformatie</b></h3>\r\n        </span>\r\n        <div class="content">\r\n            <dl class="list-dl" data-ng-show="isDigitaalMateriaal(selectedItem.MateriaalType)">\r\n                <dt>EAN</dt>\r\n                <dd data-ng-bind="selectedItem.EAN || \'-\'"></dd>\r\n            </dl>\r\n            <dl class="list-dl" data-ng-hide="isDigitaalMateriaal(selectedItem.MateriaalType)">\r\n                <dt>EAN</dt>\r\n                <dd data-ng-bind="selectedItem.EAN || \'-\'"></dd>\r\n                <dt>Intern nr</dt>\r\n                <dd data-ng-bind="selectedItem.BoekCode || \'-\'"></dd>\r\n                <dt>Bedrag </dt>\r\n                <dd data-ng-bind="(selectedItem.Bedrag | currency : amount : symbol) || \'-\'"></dd>\r\n                <dt>Uitleverdatum</dt>\r\n                <dd data-ng-bind="(selectedItem.Uitgeleverd | date:\'dd-MM-yyyy\') || \'-\'"></dd>\r\n                <dt>Nalevering </dt>\r\n                <dd data-ng-bind="selectedItem.Nalevering | naleveringWaarde"></dd>\r\n                <dt>Inleverdatum</dt>\r\n                <dd data-ng-bind="(selectedItem.Ingeleverd | date:\'dd-MM-yyyy\') || \'-\'"></dd>\r\n                <dt>Schadebedrag </dt>\r\n                <dd data-ng-bind="(selectedItem.Schadebedrag | currency : amount : symbol) || \'-\'"></dd>\r\n            </dl>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
    },
    595: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = function() {
            function e() {}
            return e.prototype.naleveringWaarde = function() {
                return function(e) {
                    return void 0 !== e ? e ? "Ja" : "Nee" : "-"
                }
            }
            ,
            e
        }()
    }
}]);

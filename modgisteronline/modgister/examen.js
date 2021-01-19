(window.webpackJsonp = window.webpackJsonp || []).push([[7], {
    117: function(e, n, t) {
        "use strict";
        (function(e) {
            t.d(n, "a", function() {
                return r
            });
            var i = t(0)
              , r = function() {
                function n(e, n, t) {
                    this.$routeParams = e,
                    this.profielService = n,
                    this.collectionResource = t
                }
                return n.prototype.getOpleidingGegevens = function(e) {
                    return this.profielService.getOpleiding(e).then(function(e) {
                        return {
                            Studie: e.Studie,
                            Klas: e.Klas,
                            ExamenNr: e.ExamenNr,
                            StamNr: e.StamNr,
                            Profielen: e.Profielen
                        }
                    })
                }
                ,
                n.prototype.getAdresGegevens = function(e) {
                    return this.profielService.getWoonGegevens(e).then(function(e) {
                        var n = Object(i.h)("{0} {1} {2}", e.Straatnaam, e.Huisnummer, e.Toevoeging).trim()
                          , t = Object(i.d)(e.Woonplaats.toLowerCase());
                        return {
                            adres: n,
                            postcode: e.Postcode,
                            woonPlaats: t
                        }
                    })
                }
                ,
                n.prototype.getAdresGegevensApi2 = function(n) {
                    var t = [{
                        rel: "self",
                        href: "api/personen/" + n + "/adressen"
                    }];
                    return this.collectionResource.get(t, "self").then(function(n) {
                        var t = e.findWhere(n.items, {
                            type: "Post"
                        });
                        t || (t = e.first(n.items));
                        var r = Object(i.h)("{0} {1} {2}", t.straat, t.huisnummer, t.toevoeging).trim()
                          , s = Object(i.d)(t.plaats.toLowerCase());
                        return {
                            adres: r,
                            postcode: t.postcode,
                            woonPlaats: s
                        }
                    })
                }
                ,
                n.prototype.getPersoonsGegevens = function(e, n) {
                    void 0 === n && (n = !1);
                    var t = Object(i.h)("{0} {1} {2}", n ? e.initials : e.firstName, e.prefixes ? e.prefixes : e.surname, e.prefixes ? e.surname : "").trim()
                      , r = e.officialPrefixes ? e.officialFirstNames + " " + e.officialPrefixes + " " + e.officialSurname : e.officialFirstNames + " " + e.officialSurname;
                    return {
                        firstName: e.firstName,
                        lastName: Object(i.h)("{0}{1}{2}", e.prefixes, e.prefixes ? " " : "", e.surname),
                        fullName: t,
                        officialName: r,
                        birthday: e.birthday ? e.birthday.format("D MMMM YYYY") : ""
                    }
                }
                ,
                n.prototype.getOneDriveForBusinessKoppelingDetails = function() {
                    return this.profielService.oneDriveForBusinessGekoppeld(this.$routeParams.success).then(this.createProviderResult)
                }
                ,
                n.prototype.createProviderResult = function(e) {
                    return {
                        IsGekoppeld: e.isCoupled,
                        IsEnabled: e.isEnabled,
                        OnlyAllowSchoolDomain: !Object(i.u)(e.allowedDomain),
                        Account: e.email
                    }
                }
                ,
                n.$inject = ["$routeParams", "profielService", "collectionResource", n],
                n
            }()
        }
        ).call(this, t(3))
    },
    576: function(e, n, t) {
        "use strict";
        t.r(n),
        function(e) {
            t.d(n, "examenAMD", function() {
                return d
            });
            var i = t(577)
              , r = t(578)
              , s = t(579)
              , a = t(117)
              , o = t(580)
              , c = t(582)
              , l = t(584)
              , d = e.module("ExamenAMD", []);
            d.controller("examenDetailController", r.a.$inject),
            d.service("examenService", s.a.$inject).service("gegevensOverzichtService", a.a.$inject),
            d.directive("smOfficieleExamenGegevensDirective", o.a.$inject).directive("smExamenRoosterDirective", c.a.$inject).directive("smExamenResultatenDirective", l.a.$inject),
            d.filter("itemDescription", i.a.prototype.itemDescription)
        }
        .call(this, t(1))
    },
    577: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return r
        });
        var i = t(0)
          , r = function() {
            function e() {}
            return e.prototype.itemDescription = function() {
                return function(e) {
                    var n = e.omschrijving ? e.omschrijving : e.titel;
                    return Object(i.o)(e.lokalen) ? n : n + " (" + e.lokalen[0].omschrijving + ")"
                }
            }
            ,
            e
        }()
    },
    578: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return s
        });
        var i = t(5)
          , r = t(8)
          , s = function() {
            function e(e, n) {
                this.examenService = e,
                this.currentUser = n,
                this.showExamenRooster = n.hasPrivilege(i.a.ExamenAfnamemomenten, r.a.Read)
            }
            return e.$inject = ["examenService", "currentUser", e],
            e
        }()
    },
    579: function(e, n, t) {
        "use strict";
        (function(e, i) {
            t.d(n, "a", function() {
                return s
            });
            var r = t(88)
              , s = function() {
                function n(e, n, t, i) {
                    this.$q = e,
                    this.hateOsResource = n,
                    this.aanmeldingenService = t,
                    this.currentUser = i,
                    this.isLoadingAanmelding = !1,
                    this.aanmeldingDefers = []
                }
                return n.prototype.getOpleidingGegevensForCurrentUser = function() {
                    var e = this.$q.defer();
                    return this.getAanmelding().then(function(n) {
                        e.resolve({
                            studie: n.studie ? n.studie.code : "",
                            klas: n.groep ? n.groep.code : ""
                        })
                    }),
                    e.promise
                }
                ,
                n.prototype.getExamengegevensForCurrentUser = function() {
                    var n = this
                      , t = this.$q.defer();
                    return this.getAanmelding().then(function(i) {
                        n.hateOsResource.get(i, "examengegevens").then(function(n) {
                            e.extend(n, {
                                profielen: i.profielen
                            }),
                            t.resolve(n)
                        })
                    }),
                    t.promise
                }
                ,
                n.prototype.getExamenwerkstuk = function(e) {
                    var n = this
                      , t = this.$q.defer();
                    return this.getAanmelding().then(function(e) {
                        n.hateOsResource.get(e, "werkstuk").then(function(e) {
                            t.resolve(e)
                        })
                    }),
                    t.promise
                }
                ,
                n.prototype.getExamenCombinatiecijfer = function(e) {
                    var n = this
                      , t = this.$q.defer();
                    return this.getAanmelding().then(function(i) {
                        if (i.heeftCombinatieCijfer) {
                            var r = {
                                links: [{
                                    rel: "self",
                                    href: "/api/aanmeldingen/" + e + "/examen/combinatiecijfer"
                                }]
                            };
                            n.hateOsResource.get(r).then(function(e) {
                                e.heeftCombinatieCijfer = !0,
                                t.resolve(e)
                            })
                        } else
                            t.resolve({
                                beoordeling: "",
                                isVoldoende: !0,
                                heeftCombinatieCijfer: !1
                            })
                    }),
                    t.promise
                }
                ,
                n.prototype.getExamenrooster = function(e) {
                    var n = this
                      , t = this.$q.defer();
                    return this.getAanmelding().then(function(e) {
                        var i = {
                            links: [{
                                rel: "self",
                                href: "/api/aanmeldingen/" + e.id + "/examens"
                            }]
                        };
                        n.hateOsResource.get(i).then(function(e) {
                            t.resolve(e)
                        })
                    }),
                    t.promise
                }
                ,
                n.prototype.getAanmelding = function() {
                    var e = this
                      , n = this.$q.defer();
                    return this.personId !== this.currentUser.relatedPersons.current.id || this.isLoadingAanmelding ? (this.personId = this.currentUser.relatedPersons.current.id,
                    this.getAanmeldingAsync().then(function() {
                        n.resolve(e.aanmelding)
                    })) : n.resolve(this.aanmelding),
                    n.promise
                }
                ,
                n.prototype.getAanmeldingAsync = function() {
                    var e = this
                      , n = this.$q.defer();
                    return this.aanmeldingDefers.push(n),
                    this.isLoadingAanmelding ? n.promise : (this.isLoadingAanmelding = !0,
                    this.aanmeldingenService.getAanmeldingen(r.a.Huidige, this.personId.toString()).then(function(n) {
                        n.length > 0 && e.aanmeldingenService.getAanmelding(n[0]).then(function(n) {
                            e.aanmelding = n,
                            i.each(e.aanmeldingDefers, function(n) {
                                n.resolve(e.aanmelding)
                            }),
                            e.isLoadingAanmelding = !1,
                            e.aanmeldingDefers = []
                        })
                    }),
                    n.promise)
                }
                ,
                n.$inject = ["$q", "hateOsResource", "aanmeldingenService", "currentUser", n],
                n
            }()
        }
        ).call(this, t(1), t(3))
    },
    580: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return i
        });
        var i = function() {
            function e() {
                this.template = t(581),
                this.replace = !0,
                this.scope = {},
                this.controller = r,
                this.controllerAs = "vm"
            }
            return e.$inject = [function() {
                return new e
            }
            ],
            e
        }()
          , r = function() {
            function e(e, n, t, i, r, s) {
                var a = this;
                this.$scope = e,
                this.$location = n,
                this.currentUser = t,
                this.gegevensOverzichtService = i,
                this.examenService = r,
                this.profielService = s,
                this.persoonsGegevens = this.gegevensOverzichtService.getPersoonsGegevens(this.currentUser.relatedPersons.current),
                this.examenService.getOpleidingGegevensForCurrentUser().then(function(e) {
                    a.opleidingGegevens = e
                }),
                this.examenService.getExamengegevensForCurrentUser().then(function(e) {
                    a.examengegevens = e
                }),
                this.profielService.getOfficieleGegevens(this.currentUser.relatedPersons.current.id).then(function(e) {
                    a.officieleGegevens = e
                })
            }
            return e.$inject = ["$scope", "$location", "currentUser", "gegevensOverzichtService", "examenService", "profielService"],
            e
        }()
    },
    581: function(e, n) {
        e.exports = '<div id="officiele-examen-gegevens-widget" class="widget widget-double">\r\n    <div class="block" data-sm-loading-indicator="{domain: \'afspraken\', hideEvent: \'NG_REPEAT_FINISHED\', overlay: false, timeout: 1000}">\r\n        <h3>\r\n            <span></span>\r\n            <b>Officiële gegevens</b>\r\n        </h3>\r\n        <div class="content">\r\n            <ul class="list multi-line">\r\n                <li>\r\n                    <strong>Officiële naam</strong>\r\n                    <span id="examen-gegevens-officiele-naam">{{vm.persoonsGegevens.officialName}}</span>\r\n                </li>\r\n                <li>\r\n                    <strong>Examennummer</strong>\r\n                    <span id="examen-gegevens-nummer">{{vm.examengegevens.examennummer || ""}}</span>\r\n                </li>\r\n                <li>\r\n                    <strong>Opleiding</strong>\r\n                    <span id="examen-gegevens-opleiding" data-ng-hide="vm.opleidingGegevens.klas === \'\'">{{vm.opleidingGegevens.studie}} / {{vm.opleidingGegevens.klas}}</span>\r\n                    <span id="examen-gegevens-opleiding" data-ng-show="vm.opleidingGegevens.klas === \'\'">{{vm.opleidingGegevens.studie}}</span>\r\n                </li>\r\n                <li>\r\n                    <strong>Profiel/Sector</strong>\r\n                    <span id="examen-gegevens-profiel">\r\n                        <span ng-repeat="profiel in vm.examengegevens.profielen">{{profiel.code}}</span>\r\n                    </span>\r\n                </li>\r\n                <li ng-show="vm.examengegevens.doetVroegtijdig">\r\n                    <strong>Vroegtijdig examen <span class="iconic icon-check"></span></strong>\r\n                </li>\r\n                <li ng-show="vm.examengegevens.gespreidExamen">\r\n                    <strong>Gespreid Examen<span class="iconic icon-check"></span></strong>\r\n                </li>\r\n                <li>\r\n                    <strong>Geboorte</strong>\r\n                    <span>\r\n                        <span id="examen-gegevens-geboorte-datum">Datum: {{vm.officieleGegevens.geboortedatum | date:\'d MMMM yyyy\'}}</span>\r\n                        <span id="examen-gegevens-geboorte-plaats">Plaats: {{vm.officieleGegevens.geboorteplaats}}</span>\r\n                        <span id="examen-gegevens-geboorte-gemeente">Gemeente: {{vm.officieleGegevens.geboortegemeente}}</span>\r\n                        <span id="examen-gegevens-geboorte-land">Land: {{vm.officieleGegevens.geboorteland}}</span>\r\n                    </span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <footer class="endlink"><a href="#/mijn-instellingen" title="">Mijn gegevens</a></footer>\r\n    </div>\r\n</div>\r\n'
    },
    582: function(e, n, t) {
        "use strict";
        (function(e) {
            t.d(n, "a", function() {
                return r
            });
            var i = t(88)
              , r = function() {
                function e() {
                    this.template = t(583),
                    this.replace = !0,
                    this.scope = {},
                    this.controller = s.$inject,
                    this.controllerAs = "vm"
                }
                return e.$inject = [function() {
                    return new e
                }
                ],
                e
            }()
              , s = function() {
                function n(n, t, r, s, a) {
                    var o = this;
                    this.$scope = n,
                    this.$location = t,
                    this.currentUser = r,
                    this.aanmeldingenService = s,
                    this.examenService = a,
                    this.aanmeldingenService.getAanmeldingen(i.a.Huidige, this.currentUser.relatedPersons.current.id.toString()).then(function(n) {
                        a.getExamenrooster(n[0].Id).then(function(n) {
                            o.eersteTijdvak = e.where(n.items, {
                                tijdvak: "eerste"
                            }),
                            o.tweedeTijdvak = e.where(n.items, {
                                tijdvak: "tweede"
                            })
                        })
                    })
                }
                return n.$inject = ["$scope", "$location", "currentUser", "aanmeldingenService", "examenService", n],
                n
            }()
        }
        ).call(this, t(3))
    },
    583: function(e, n) {
        e.exports = '<div id="examen-rooster-widget" class="widget widget-double">\r\n    <div class="block" data-sm-loading-indicator="{domain: \'afspraken\', hideEvent: \'NG_REPEAT_FINISHED\', overlay: false, timeout: 1000}">\r\n        <h3>\r\n            <span></span>\r\n            <b>Examen afnamemomenten</b>\r\n        </h3>\r\n        <div class="content">\r\n            <div ng-show="vm.eersteTijdvak.length">\r\n                <ul class="list multi-line">\r\n                    <li ng-repeat="examenItem in vm.eersteTijdvak | orderBy: \'begin\' ">\r\n                        <span class="extrainfo">\r\n                            <span data-ng-show="examenItem.heeftExtraTijd">extra tijd</span>\r\n                        </span>\r\n                        <strong data-ng-bind-template="{{examenItem.begin |date:\'EEE dd MMM HH:mm\'}}-{{examenItem.einde | date:\'HH:mm\'}}"></strong>\r\n                        <span>{{examenItem | itemDescription}}</span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n\r\n            <div ng-show="vm.tweedeTijdvak.length">\r\n                <h4>Tweede tijdvak</h4>\r\n\r\n                <ul class="list multi-line">\r\n                    <li ng-repeat="examenItem in vm.tweedeTijdvak | orderBy: \'begin\' " ng-class="{\'disabled\': !examenItem.lokalen.length}">\r\n                        <span class="extrainfo">\r\n                            <span data-ng-show="examenItem.heeftExtraTijd">extra tijd</span>\r\n                            <span data-ng-hide="examenItem.lokalen.length">nog niet ingedeeld</span>\r\n                        </span>\r\n                        <strong data-ng-bind-template="{{examenItem.begin |date:\'EEE dd MMM HH:mm\'}}-{{examenItem.einde | date:\'HH:mm\'}}"></strong>\r\n                        <span>{{examenItem | itemDescription}}</span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n\r\n            <p class="empty-message" data-ng-hide="vm.eersteTijdvak.length || vm.tweedeTijdvak.length">Geen rooster bekend</p>\r\n        </div>\r\n        <footer class="endlink"><a href="#/agenda" title="">volledige agenda</a></footer>\r\n    </div>\r\n</div>\r\n'
    },
    584: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return r
        });
        var i = t(88)
          , r = function() {
            function e() {
                this.template = t(585),
                this.replace = !0,
                this.scope = {},
                this.controller = s,
                this.controllerAs = "vm"
            }
            return e.$inject = [function() {
                return new e
            }
            ],
            e
        }()
          , s = function() {
            function e(e, n, t, r, s) {
                var a = this;
                this.$scope = e,
                this.$location = n,
                this.currentUser = t,
                this.aanmeldingenService = r,
                this.examenService = s,
                this.aanmeldingenService.getAanmeldingen(i.a.Huidige, this.currentUser.relatedPersons.current.id.toString()).then(function(e) {
                    s.getExamenwerkstuk(e[0].Id).then(function(e) {
                        a.examenwerkstuk = e
                    }),
                    s.getExamenCombinatiecijfer(e[0].Id).then(function(e) {
                        a.combinatiecijfer = e
                    })
                })
            }
            return e.$inject = ["$scope", "$location", "currentUser", "aanmeldingenService", "examenService"],
            e
        }()
    },
    585: function(e, n) {
        e.exports = '<div id="examen-resultaten-widget" class="widget widget-double">\r\n    <div class="block" data-sm-loading-indicator="{domain: \'afspraken\', hideEvent: \'NG_REPEAT_FINISHED\', overlay: false, timeout: 1000}">\r\n        <h3>\r\n            <span></span>\r\n            <b>Resultaten</b>\r\n        </h3>\r\n        <div class="content">\r\n            <dl class="list-dl">\r\n                <dt>Werkstuk</dt>\r\n                <dd data-ng-class="{\'insufficient\': !vm.examenwerkstuk.isVoldoende}">{{vm.examenwerkstuk.beoordeling}}</dd>\r\n            </dl>\r\n            <ul class="list multi-line werkstuk-omschrijving">\r\n                <li>\r\n                    <strong>Titel</strong>\r\n                    <span>{{vm.examenwerkstuk.titel}}</span>     \r\n                    <div ng-show="vm.examenwerkstuk.vakken.length > 0">\r\n                        (<span class="vakomschrijving" ng-repeat="vak in vm.examenwerkstuk.vakken">{{vak.omschrijving}}{{$last ? \'\' : \';&nbsp;\'}}</span>)\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n\r\n            <dl data-ng-show="vm.combinatiecijfer.heeftCombinatieCijfer" class="list-dl examen-resultaten  border-bottom">\r\n                <dt>\r\n                    Combinatiecijfer\r\n                </dt>\r\n                <dd data-ng-class="{\'insufficient\': !vm.combinatiecijfer.isVoldoende}">{{vm.combinatiecijfer.beoordeling}}</dd>\r\n                <dt ng-repeat-start="vak in vm.combinatiecijfer.vakken" class="resultaat-label">\r\n                    <span>{{vak.omschrijving}}</span>\r\n                </dt>\r\n                <dd ng-repeat-end data-ng-class="{\'insufficient\': !vak.isVoldoende}">\r\n                    {{vak.beoordeling}}\r\n                </dd>\r\n                <dt class="resultaat-label">\r\n                    <span>Werkstuk</span>\r\n                </dt>\r\n                <dd data-ng-class="{\'insufficient\': !vm.examenwerkstuk.isVoldoende}">\r\n                    {{vm.examenwerkstuk.beoordeling}}\r\n                </dd>\r\n            </dl>\r\n        </div>\r\n        <footer class="endlink"><a href="#/cijfers" title="">cijferoverzicht</a></footer>\r\n    </div>\r\n</div>\r\n'
    }
}]);

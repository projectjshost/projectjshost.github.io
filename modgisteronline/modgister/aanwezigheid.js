(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    138: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
            return i
        }),
        function(e) {
            e[e.Geoorloofd = 0] = "Geoorloofd",
            e[e.Ongeoorloofd = 1] = "Ongeoorloofd",
            e[e.Alles = 2] = "Alles",
            e[e.Geen = 3] = "Geen"
        }(i || (i = {}))
    },
    415: function(e, t, n) {
        "use strict";
        n.r(t),
        function(e) {
            n.d(t, "aanwezigheidAMD", function() {
                return c
            });
            var i = n(416)
              , o = n(418)
              , s = n(420)
              , r = n(422)
              , a = n(424)
              , d = n(426)
              , l = n(427)
              , c = e.module("AanwezigheidAMD", []);
            c.directive("smAanwezigheidFilter", i.a.$inject).directive("smInformatie", o.a.$inject).directive("smInformatieIcons", s.a.$inject).directive("smInstellingenSelectie", r.a.$inject).directive("smRadioSelect", a.a.$inject),
            c.controller("aanwezigheidController", d.a).controller("ziekmeldenController", l.a)
        }
        .call(this, n(1))
    },
    416: function(e, t, n) {
        "use strict";
        (function(e, i) {
            n.d(t, "a", function() {
                return o
            });
            var o = function() {
                function t(e, t) {
                    var i = this;
                    this.$timeout = e,
                    this.magisterLocale = t,
                    this.scope = {
                        selectedOptions: "=",
                        title: "@",
                        filterOptions: "=",
                        multiSelectOptions: "@"
                    },
                    this.template = n(417),
                    this.replace = !0,
                    this.link = function(e, t, n) {
                        return i.linkFn(e, t, n)
                    }
                }
                return t.prototype.linkFn = function(t, n, o) {
                    var s = this;
                    if ((e.isUndefined(t.filterOptions) || e.isUndefined(t.filterOptions.data)) && (t.filterOptions = {
                        data: [{
                            id: 1,
                            text: this.magisterLocale.AanwezigheidStrings.SELECTEER_EEN_OPTIE
                        }]
                    }),
                    e.isArray(t.filterOptions.data)) {
                        var r = i.pluck(t.filterOptions.data, "id");
                        this.$timeout(function() {
                            t.selectedOptions = r,
                            t.selectedItems = r
                        }),
                        t.$applyAsync()
                    }
                    t.selectAll = function() {
                        var e = i.pluck(t.filterOptions.data, "id");
                        s.$timeout(function() {
                            t.selectedOptions = e,
                            t.selectedItems = e
                        })
                    }
                    ,
                    t.selectNone = function() {
                        s.$timeout(function() {
                            t.selectedItems = t.selectedOptions = []
                        })
                    }
                    ,
                    t.onChange = function(e) {
                        t.selectedOptions = s.getDataIds(e.sender.dataItems())
                    }
                    ,
                    t.multiSelectOptions = i.extend({
                        placeholder: "Selecteer gebeurtenissen..."
                    }, t.multiSelectOptions),
                    t.onDataBound = function(e) {
                        t.selectAll()
                    }
                }
                ,
                t.prototype.getDataIds = function(e) {
                    var t = [];
                    return i.each(e, function(e) {
                        t.push(e.id)
                    }),
                    t
                }
                ,
                t.$inject = ["$timeout", "magisterLocale", function(e, n) {
                    return new t(e,n)
                }
                ],
                t
            }()
        }
        ).call(this, n(1), n(3))
    },
    417: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block" data-ng-class="{\'fold\': fold}">\r\n        <h3 data-ng-click="fold =!fold" data-ng-init="title=\'Filter\'"><span data-ng-class="{\'icon-up-arrow\': !fold, \'icon-down-arrow\': fold}"></span><b>{{title}}</b></h3>\r\n        <div class="content">\r\n            <form>\r\n                <div>\r\n                    <div class="fancy-select">\r\n                        <select data-kendo-multi-select="filterGebeurtenissen"\r\n                                multiple="multiple"\r\n                                class="select"\r\n                                ng-class="{\'all-items-selected\': selectedOptions.length == filterOptions.data.length}"\r\n                                data-k-ng-model="selectedItems"\r\n                                data-k-value-primitive="true"\r\n                                data-k-data-source="filterOptions"\r\n                                data-k-data-text-field="\'text\'"\r\n                                data-k-data-value-field="\'id\'"\r\n                                data-k-options="{placeholder: \'Selecteer gebeurtenissen...\'}"\r\n                                data-k-on-change="onChange(kendoEvent)"\r\n                                data-k-on-data-bound="onDataBound(kendoEvent)"></select>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <footer class="endlink">\r\n                <a href="" data-ng-click="selectNone()">geen tonen</a>\r\n                <a href="" data-ng-click="selectAll()">alles tonen</a>\r\n            </footer>\r\n        </div>\r\n    </div>\r\n</div>'
    },
    418: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = function() {
            function e() {
                var e = this;
                this.scope = {
                    items: "=",
                    title: "@"
                },
                this.template = n(419),
                this.replace = !0,
                this.link = function(t, n, i) {
                    return e.linkFn(t, n, i)
                }
            }
            return e.prototype.linkFn = function(e, t, n) {}
            ,
            e.$inject = [function() {
                return new e
            }
            ],
            e
        }()
    },
    419: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block" data-ng-class="{\'fold\': fold}">\r\n        <h3 data-ng-click="fold =!fold" data-ng-init="title=\'Informatie\'"><span data-ng-class="{\'icon-up-arrow\': !fold, \'icon-down-arrow\': fold}"></span><b>{{title}}</b></h3>\r\n        <div class="content">\r\n            <dl class="list-dl">\r\n                <dt data-ng-repeat-start="item in items" data-ng-bind="item.title"></dt>\r\n                <dd data-ng-repeat-end="" data-ng-bind="item.description"></dd>\r\n            </dl>\r\n        </div>\r\n    </div>\r\n</div>'
    },
    420: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = function() {
            function e() {
                var e = this;
                this.scope = {
                    items: "=",
                    title: "@"
                },
                this.template = n(421),
                this.replace = !0,
                this.link = function(t, n, i) {
                    return e.linkFn(t, n, i)
                }
            }
            return e.prototype.linkFn = function(e, t, n) {}
            ,
            e.$inject = [function() {
                return new e
            }
            ],
            e
        }()
    },
    421: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block" data-ng-class="{\'fold\': fold}">\r\n        <h3 data-ng-click="fold =!fold" data-ng-init="title=\'Informatie\'"><span data-ng-class="{\'icon-up-arrow\': !fold, \'icon-down-arrow\': fold}"></span><b>{{title}}</b></h3>\r\n        <div class="content">\r\n            <ul class="glyph-iconen">\r\n                <li data-ng-repeat="item in items">\r\n                    <span class="glyph" data-ng-class="item.cssClass"></span>\r\n                    {{item.description}}\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>'
    },
    422: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return i
            });
            var i = function() {
                function t() {
                    var e = this;
                    this.scope = {
                        selectedOptions: "=",
                        items: "=",
                        title: "@"
                    },
                    this.template = n(423),
                    this.replace = !0,
                    this.link = function(t, n, i) {
                        return e.linkFn(t, n, i)
                    }
                }
                return t.prototype.linkFn = function(t, n, i) {
                    t.onDataBound = function(n) {
                        var i = n.sender.element[0].id;
                        e.isUndefined(t.selectedOptions[i]) || null === t.selectedOptions[i] || n.sender.value(t.selectedOptions[i].name)
                    }
                    ,
                    t.onChange = function(e) {
                        var n = e.sender.element[0].id;
                        t.selectedOptions[n] = t.items[n].options[e.sender.selectedIndex]
                    }
                }
                ,
                t.$inject = [function() {
                    return new t
                }
                ],
                t
            }()
        }
        ).call(this, n(1))
    },
    423: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block" data-ng-class="{\'fold\': fold}">\r\n        <h3 data-ng-click="fold =!fold" data-ng-init="title=\'Instellingen\'"><span data-ng-class="{\'icon-up-arrow\': !fold, \'icon-down-arrow\': fold}"></span><b>{{title}}</b></h3>\r\n        <div class="content">\r\n            <fieldset>\r\n                <div data-ng-repeat="selector in items">\r\n                    <label for="{{selector.name}}" data-ng-bind="selector.name"></label>\r\n                    <div class="fancy-select">\r\n                        <select id="{{selector.name}}"\r\n                                class="select"\r\n                                data-kendo-drop-down-list="{{selector.name}}"\r\n                                data-k-data-value-field="\'name\'"\r\n                                data-k-data-text-field="\'name\'"\r\n                                data-k-data-source="selector.options"\r\n                                data-k-on-change="onChange(kendoEvent)"\r\n                                data-k-on-data-bound="onDataBound(kendoEvent)"\r\n                                >\x3c!--data-ng-model="selectedOptions[selector.name].name"--\x3e\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n        </div>\r\n    </div>\r\n</div>'
    },
    424: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var i = n(138)
          , o = function() {
            function e() {
                var e = this;
                this.scope = {
                    selectedOptions: "=",
                    title: "@"
                },
                this.template = n(425),
                this.replace = !0,
                this.link = function(t, n, i) {
                    return e.linkFn(t, n, i)
                }
            }
            return e.prototype.linkFn = function(e, t, n) {
                e.radioOptions = [{
                    id: 0,
                    name: "Geoorloofd",
                    selected: !0,
                    value: !0
                }, {
                    id: 1,
                    name: "Ongeoorloofd",
                    selected: !0,
                    value: !1
                }],
                e.isGeoorloofd = !0,
                e.isOngeoorloofd = !0,
                e.onChange = function(t) {
                    t ? e.isGeoorloofd = !e.isGeoorloofd : e.isOngeoorloofd = !e.isOngeoorloofd,
                    e.isGeoorloofd && e.isOngeoorloofd && (e.selectedOptions = i.a.Alles),
                    !e.isGeoorloofd && e.isOngeoorloofd && (e.selectedOptions = i.a.Geoorloofd),
                    e.isGeoorloofd && !e.isOngeoorloofd && (e.selectedOptions = i.a.Ongeoorloofd),
                    e.isGeoorloofd || e.isOngeoorloofd || (e.selectedOptions = i.a.Geen)
                }
            }
            ,
            e.$inject = [function() {
                return new e
            }
            ],
            e
        }()
    },
    425: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block" data-ng-class="{\'fold\': fold}">\r\n        <h3 data-ng-click="fold =!fold" data-ng-init="title=\'Selectie\'"><span data-ng-class="{\'icon-up-arrow\': !fold, \'icon-down-arrow\': fold}"></span><b>{{title}}</b></h3>\r\n        <div class="content">\r\n            <form>\r\n                <div data-ng-click="onChange(true)">\r\n                    <span class="check">\r\n                        <input type="checkbox" class="checkbox" name="Geoorloofd" data-ng-model="isGeoorloofd">\r\n                        <label for="Geoorloofd"><span></span>Geoorloofd</label>\r\n                    </span>\r\n                </div>\r\n                <div data-ng-click="onChange(false)">\r\n                    <span class="check">\r\n                        <input type="checkbox" class="checkbox" name="Ongeoorloofd" data-ng-checked="isOngeoorloofd">\r\n                        <label for="Ongeoorloofd"><span></span>Ongeoorloofd</label>\r\n                    </span>\r\n\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>'
    },
    426: function(e, t, n) {
        "use strict";
        (function(e, i, o) {
            n.d(t, "a", function() {
                return a
            });
            var s = n(138)
              , r = n(0)
              , a = function() {
                function t(t, n, o, s, r, a, d, l) {
                    var c = this;
                    this.$location = t,
                    this.$scope = n,
                    this.currentUser = o,
                    this.agendaService = s,
                    this.verantwoordingService = r,
                    this.absentiePeriodenService = a,
                    this.magisterLocale = d,
                    this.tabService = l,
                    this.iconClassOk = "ok",
                    this.iconClassInformation = "information",
                    this.iconClassFalse = "error",
                    this.iconAbsent = "ab",
                    this.iconVrijstelling = "vr",
                    this.iconTeLaat = "tl",
                    this.iconZiek = "zk",
                    this.iconUitgestuurd = "ui",
                    this.iconBoekenVergeten = "bv",
                    this.iconHuiswerkVergeten = "hv",
                    this.iconExamenRooster = "ex",
                    this.iconProefwerk = "pw",
                    this.iconTentamen = "tt",
                    this.iconSchriftelijkeOverhoring = "so",
                    this.iconMondelingeOverhoring = "mo",
                    this.absentieMeldenLink = "",
                    this.allOptions = {
                        data: [{
                            id: 1,
                            text: this.magisterLocale.AanwezigheidStrings.ABSENT
                        }, {
                            id: 2,
                            text: this.magisterLocale.AanwezigheidStrings.TE_LAAT
                        }, {
                            id: 3,
                            text: this.magisterLocale.AanwezigheidStrings.ZIEK
                        }, {
                            id: 4,
                            text: this.magisterLocale.AanwezigheidStrings.UIT_DE_LES
                        }, {
                            id: 6,
                            text: this.magisterLocale.AanwezigheidStrings.VRIJSTELLING
                        }, {
                            id: 7,
                            text: this.magisterLocale.AanwezigheidStrings.BOEK_VERGETEN
                        }, {
                            id: 8,
                            text: this.magisterLocale.AanwezigheidStrings.HUISWERK_VERGETEN
                        }]
                    },
                    this.afspraken = [],
                    this.filteredAfspraken = [],
                    this.afsprakenGroupedByReason = [],
                    this.afsprakenGroupedByMonth = [],
                    this.afsprakenGroupedByClass = [],
                    this.afsprakenGroupedByAllowed = [],
                    this.tableClass = [],
                    this.title = this.magisterLocale.AanwezigheidStrings.AFWEZIGHEID,
                    this.selectedItemIcons = {
                        1: {
                            description: this.magisterLocale.AanwezigheidStrings.TOETS,
                            cssClass: "icon-toets"
                        },
                        2: {
                            description: this.magisterLocale.AanwezigheidStrings.HUISWERK,
                            cssClass: "icon-huiswerk"
                        }
                    },
                    this.selectedItem = {
                        1: {
                            title: this.magisterLocale.AanwezigheidStrings.OMSCHRIJVING,
                            description: "-"
                        },
                        2: {
                            title: this.magisterLocale.AanwezigheidStrings.ONENGEOORLOOFD,
                            description: "-"
                        }
                    },
                    this.instellingenSelectors = {},
                    this.selectedInstellingen = {},
                    this.verantwoordingTypeOmschrijvingen = {
                        1: "absent",
                        2: "te laat",
                        3: "ziek",
                        4: "uit de les",
                        6: "vrijstelling",
                        7: "boek vergeten",
                        8: "huiswerk vergeten"
                    },
                    this.$scope.vm = this,
                    this.tabState = this.tabService.tabState,
                    this.tabService.subscribeTabAdded(this.tabAdded, this),
                    this.instellingenSelectors.Periode = {
                        name: "Periode",
                        options: [{
                            name: "-",
                            waarde: {
                                Start: "-",
                                Eind: "-"
                            }
                        }]
                    },
                    this.instellingenSelectors.Weergave = {
                        name: this.magisterLocale.AanwezigheidStrings.WEERGAVE,
                        options: [{
                            name: this.magisterLocale.AanwezigheidStrings.PERIODEOVERZICHT_LIJSTWEERGAVE,
                            waarde: "/afwezigheid"
                        }, {
                            name: this.magisterLocale.AanwezigheidStrings.PERIODEOVERZICHT_TOTALEN,
                            waarde: "/afwezigheid/totalen"
                        }]
                    },
                    this.$scope.getLesuurString = this.agendaService.buildLesuurString,
                    this.getAbsentiePerioden(),
                    this.getWeergaveInstelling(),
                    this.$scope.$watch("vm.selectedInstellingen.Periode", function(t) {
                        e.isDefined(t) && e.isDefined(t.waarde) && c.getAbsenties(t.waarde.Start, t.waarde.Eind)
                    }),
                    this.$scope.$watch("vm.selectedInstellingen.Weergave", function(t) {
                        if (e.isDefined(t))
                            c.$location.path(t.waarde);
                        else {
                            var n = i.find(c.instellingenSelectors.Weergave.options, function(e) {
                                return e.waarde === c.$location.path()
                            });
                            c.selectedInstellingen.Weergave = n
                        }
                    }),
                    this.$scope.$watch("vm.afspraken", function() {
                        return c.onSelectionChanged()
                    }),
                    this.$scope.$watch("vm.selectedOptions", function() {
                        return c.onSelectionChanged()
                    }),
                    this.$scope.$watch("vm.selectedGeoorloofd", function() {
                        return c.onSelectionChanged()
                    })
                }
                return t.prototype.tabAdded = function(e) {
                    "idWeergave" === e.id && this.tabService.openTab(e)
                }
                ,
                t.prototype.selectToday = function() {
                    if (e.isDefined(this.afsprakenGroupedByMonth[0]) && e.isDefined(this.afsprakenGroupedByMonth[0].items[0]))
                        for (var t, n = o().format("L"), s = this.afsprakenGroupedByMonth.length, r = 0; r < s; r++)
                            if (t = i.find(this.afsprakenGroupedByMonth[r].items, function(e) {
                                return o(e.start).format("L") === n
                            }),
                            e.isDefined(t))
                                return void this.updateDetails(t)
                }
                ,
                t.prototype.updateDetails = function(e) {
                    var t = this.tabService.getTab("idWeergave");
                    Object(r.w)(t) || this.tabService.openTab(t),
                    this.$scope.selectedRowId = e.Id,
                    this.selectedItem = {
                        1: {
                            title: this.magisterLocale.AanwezigheidStrings.OMSCHRIJVING,
                            description: e.Omschrijving
                        },
                        2: {
                            title: this.magisterLocale.AanwezigheidStrings.ONENGEOORLOOFD,
                            description: e.Geoorloofd ? "geoorloofd" : "ongeoorloofd"
                        }
                    }
                }
                ,
                t.prototype.isToets = function(e) {
                    return e.afspraakType !== Contracts.Agenda.Afspraken.Enums.AfspraakType.ExamenRooster && (e.InfoType === Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.Proefwerk || e.InfoType === Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.Tentamen || e.InfoType === Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.SchriftelijkeOverhoring || e.InfoType === Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.MondelingeOverhoring)
                }
                ,
                t.prototype.toggleMonthFold = function(t, n) {
                    e.isUndefined(n) || null === n ? "" === this.tableClass[t] ? this.tableClass[t] = "fold" : this.tableClass[t] = "" : this.tableClass[t] = n ? "fold" : ""
                }
                ,
                t.prototype.onSelectionChanged = function() {
                    this.filteredAfspraken = this.filterAbsenties(this.afspraken, this.selectedOptions, this.selectedGeoorloofd),
                    this.groupAbsenties(this.filteredAfspraken),
                    this.closeAllButFirstMonth(),
                    this.selectToday()
                }
                ,
                t.prototype.closeAllButFirstMonth = function() {
                    var t = this
                      , n = this.afsprakenGroupedByMonth.length;
                    if (0 !== n) {
                        var s, r = o();
                        i.each(this.afsprakenGroupedByMonth, function(n) {
                            t.toggleMonthFold(n.month, !0),
                            n.monthMoment <= r && (e.isUndefined(s) || null === s || n.monthMoment > s.monthMoment) && (s = n)
                        }),
                        e.isDefined(s) && null !== s ? this.toggleMonthFold(s.month, !1) : this.toggleMonthFold(this.afsprakenGroupedByMonth[n - 1].month, !1)
                    }
                }
                ,
                t.prototype.filterAbsenties = function(t, n, o) {
                    var a, d = this;
                    return e.isUndefined(t) || null === t ? t : (a = i.filter(t, function(e) {
                        return d.isAbsentieDiagram() ? e.Verantwoordingtype === Contracts.Absentie.Enums.VerantwoordingType.Absent || e.Verantwoordingtype === Contracts.Absentie.Enums.VerantwoordingType.Ziek || e.Verantwoordingtype === Contracts.Absentie.Enums.VerantwoordingType.Vrijstelling : !Object(r.t)(n) || i.any(n, function(t) {
                            return parseInt(t.toString(), r.b) === e.Verantwoordingtype
                        })
                    }),
                    e.isDefined(o) && (a = i.filter(a, function(e) {
                        switch (o) {
                        case s.a.Geoorloofd:
                            return !e.Geoorloofd;
                        case s.a.Ongeoorloofd:
                            return e.Geoorloofd;
                        case s.a.Alles:
                            return !0;
                        case s.a.Geen:
                            return !1
                        }
                        return !1
                    })),
                    a)
                }
                ,
                t.prototype.groupAbsenties = function(e) {
                    this.groupByReason(e),
                    this.groupByAllowed(e),
                    this.groupByMonth(e)
                }
                ,
                t.prototype.getAbsenties = function(t, n) {
                    var s = this
                      , r = e.isDefined(t) ? o(this.toCrossBrowserDateString(t)).format("YYYY-MM-DD") : o().day(o().day() - 31).format("YYYY-MM-DD")
                      , a = e.isDefined(n) ? o(this.toCrossBrowserDateString(n)).format("YYYY-MM-DD") : o().day(o().day() + 1).format("YYYY-MM-DD");
                    this.verantwoordingService.get(this.currentUser.relatedPersons.current.id, r, a).then(function(e) {
                        s.mapAbsenties(e),
                        i.each(e.Links, function(e) {
                            "absentiemelding" === e.Rel && (s.absentieMeldenLink = e.Href)
                        })
                    })
                }
                ,
                t.prototype.mapAbsenties = function(e) {
                    var t = e.Items
                      , n = [Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.MondelingeOverhoring, Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.Proefwerk, Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.Tentamen, Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.SchriftelijkeOverhoring]
                      , o = i.map(t, function(e) {
                        return e.Toets = i.any(n, function(t) {
                            return !(t !== (null == e.Afspraak ? -1 : e.Afspraak.InfoType))
                        }),
                        e
                    });
                    this.afspraken = o
                }
                ,
                t.prototype.toCrossBrowserDateString = function(e) {
                    return e.replace("0000Z", "Z")
                }
                ,
                t.prototype.groupByMonth = function(t) {
                    var n = this;
                    if (e.isDefined(t)) {
                        this.afsprakenGroupedByMonth = [];
                        var s = i.groupBy(t, function(e) {
                            return o(n.toCrossBrowserDateString("" + e.Start)).format("YYYY-MM-01")
                        });
                        i.each(s, function(e, t) {
                            var s = o(n.toCrossBrowserDateString(t))
                              , r = s.format("MMMM");
                            n.tableClass[r] = "";
                            var a = i.groupBy(e, function(e) {
                                return JSON.stringify({
                                    lesuur: e.Lesuur,
                                    start: e.Afspraak.Start
                                })
                            })
                              , d = [];
                            i.each(a, function(e, t) {
                                var o = e[0].Afspraak;
                                d.push({
                                    lesuurKey: t,
                                    start: o.Start,
                                    items: i.map(e, function(e) {
                                        return i.extend(e, {
                                            iconCode: n.getAbsentieIconCode(e)
                                        })
                                    }),
                                    afspraak: o
                                })
                            }),
                            n.afsprakenGroupedByMonth.push({
                                month: r,
                                monthMoment: s,
                                items: d
                            })
                        })
                    }
                }
                ,
                t.prototype.getAbsentieIconCode = function(e) {
                    switch (e.Verantwoordingtype) {
                    case Contracts.Absentie.Enums.VerantwoordingType.Telaat:
                        return this.iconTeLaat;
                    case Contracts.Absentie.Enums.VerantwoordingType.Ziek:
                        return this.iconZiek;
                    case Contracts.Absentie.Enums.VerantwoordingType.Uitgestuurd:
                        return this.iconUitgestuurd;
                    case Contracts.Absentie.Enums.VerantwoordingType.BoekenVergeten:
                        return this.iconBoekenVergeten;
                    case Contracts.Absentie.Enums.VerantwoordingType.HuiswerkVergeten:
                        return this.iconHuiswerkVergeten;
                    case Contracts.Absentie.Enums.VerantwoordingType.Absent:
                        return this.iconAbsent;
                    case Contracts.Absentie.Enums.VerantwoordingType.Vrijstelling:
                        return this.iconVrijstelling;
                    default:
                        return "?"
                    }
                }
                ,
                t.prototype.getVerantwoordingIconType = function(e) {
                    return e.Geoorloofd ? this.iconClassOk : this.iconClassFalse
                }
                ,
                t.prototype.getInfoTypeIcon = function(e) {
                    if (e.Afspraak.Type === Contracts.Agenda.Afspraken.Enums.AfspraakType.ExamenRooster)
                        return this.iconExamenRooster;
                    switch (e.Afspraak.InfoType) {
                    case Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.Proefwerk:
                        return this.iconProefwerk;
                    case Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.Tentamen:
                        return this.iconTentamen;
                    case Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.SchriftelijkeOverhoring:
                        return this.iconSchriftelijkeOverhoring;
                    case Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.MondelingeOverhoring:
                        return this.iconMondelingeOverhoring
                    }
                    return null
                }
                ,
                t.prototype.hasHuiswerk = function(e) {
                    return e.Afspraak.InfoType !== Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.None
                }
                ,
                t.prototype.afspraakIsAfgerond = function(e) {
                    return e.Afspraak.Afgerond ? this.iconClassOk : this.iconClassInformation
                }
                ,
                t.prototype.groupByReason = function(t) {
                    var n = this;
                    if (e.isDefined(t)) {
                        this.afsprakenGroupedByReason = [];
                        var o = i.groupBy(t, function(e) {
                            return e.Verantwoordingtype
                        })
                          , s = i.countBy(t, function(e) {
                            return e.Verantwoordingtype
                        });
                        i.each(o, function(e, t) {
                            var r = i.countBy(o[t], function(e) {
                                return e.Geoorloofd
                            });
                            n.afsprakenGroupedByReason.push({
                                reden: +t,
                                geoorloofd: r,
                                totalCount: s[t],
                                items: e
                            })
                        })
                    }
                }
                ,
                t.prototype.groupByAllowed = function(t) {
                    var n = this;
                    if (e.isDefined(t)) {
                        this.afsprakenGroupedByAllowed = [];
                        var o = i.groupBy(t, function(e) {
                            return e.Geoorloofd ? "geoorloofd" : "ongeoorloofd"
                        })
                          , s = i.countBy(t, function(e) {
                            return e.Geoorloofd ? "geoorloofd" : "ongeoorloofd"
                        });
                        i.each(o, function(e, t) {
                            var r = i.countBy(o[t], function(e) {
                                return e.Omschrijving
                            });
                            n.afsprakenGroupedByAllowed.push({
                                geoorloofd: t,
                                reden: r,
                                totalCount: s[t],
                                items: e
                            })
                        })
                    }
                }
                ,
                t.prototype.getWeergaveInstelling = function() {
                    var e = this;
                    this.selectedInstellingen.Weergave = i.find(this.instellingenSelectors.Weergave.options, function(t) {
                        return t.waarde === e.$location.path()
                    })
                }
                ,
                t.prototype.getAbsentiePerioden = function() {
                    var e = this;
                    this.absentiePeriodenService.get(this.currentUser.relatedPersons.current.id).then(function(t) {
                        e.instellingenSelectors.Periode.options = i.map(t.Items.filter(function(e) {
                            return o(e.Start) < o(Date.now())
                        }), function(e) {
                            return {
                                name: e.Omschrijving,
                                waarde: {
                                    Start: e.Start,
                                    Eind: e.Eind
                                }
                            }
                        }),
                        e.selectedInstellingen.Periode = e.getFirstCurrentPeriode(e.instellingenSelectors.Periode.options)
                    })
                }
                ,
                t.prototype.getFirstCurrentPeriode = function(e) {
                    var t, n, s = this, r = o(), a = i.filter(e, function(e) {
                        return t = o(s.toCrossBrowserDateString(e.waarde.Start)),
                        n = o(s.toCrossBrowserDateString(e.waarde.Eind)),
                        t <= r && n >= r
                    });
                    return i.first(a)
                }
                ,
                t.prototype.isAbsentieDiagram = function() {
                    return this.selectedInstellingen.Weergave.name === this.magisterLocale.AanwezigheidStrings.ABSENTIES_STAAFDIAGRAM || this.selectedInstellingen.Weergave.name === this.magisterLocale.AanwezigheidStrings.ABSENTIES_TAARTDIAGRAM
                }
                ,
                t.prototype.ziekMelden = function() {
                    this.$location.path("/afwezigheid/ziekmelden/" + btoa(this.absentieMeldenLink.substr(1)))
                }
                ,
                t.prototype.disableButton = function() {
                    return 6 === o(new Date).isoWeekday()
                }
                ,
                t.$inject = ["$location", "$scope", "currentUser", "agendaService", "verantwoordingService", "absentiePeriodenService", "magisterLocale", "tabService"],
                t
            }()
        }
        ).call(this, n(1), n(3), n(14))
    },
    427: function(e, t, n) {
        "use strict";
        (function(e, i, o) {
            n.d(t, "a", function() {
                return a
            });
            var s = n(4)
              , r = n(7)
              , a = function() {
                function t(t, n, o, r, a, d, l) {
                    var c = this;
                    if (this.$location = t,
                    this.$scope = n,
                    this.$routeParams = o,
                    this.currentUser = r,
                    this.aanwezigheidService = a,
                    this.applicationService = d,
                    this.cacheBuster = l,
                    this.showMeldingVersturenDialog = !1,
                    this.showDirtyDialog = !1,
                    this.childName = "",
                    this.opmerking = "",
                    this.TOAST_TIME = 15e3,
                    this.today = e((new Date).setHours(0, 0, 0, 0)),
                    this.tomorrow = e((new Date).setHours(0, 0, 0, 0)).add("days", 1),
                    this.$routeParams.absentieMeldenLink && this.currentUser.isInRole(s.a.Ouder) && this.absentieMeldenLinkCheck()) {
                        this.$scope.vm = this,
                        this.$scope.disabledDays = this.setDisabledDays();
                        var u = "(data.dates[0] && data.date < data.dates[0]) || (data.dates[1] && data.date > data.dates[1])"
                          , f = this.today.toDate().toString()
                          , h = this.tomorrow.toDate().toString();
                        this.$scope.agendaCalendarOptions = {
                            format: "dd-MM-yyyy",
                            footer: !1,
                            dates: n.disabledDays,
                            value: n.selectedDay,
                            month: {
                                content: "# if (data.date.toString() === '" + f + "' && (" + u + ")) { #\n                    <div id='today' class='disabledDay'>#= data.value #</div>\n                    # } else if (data.date.toString() === '" + h + "' && (" + u + ")) { #\n                    <div id='tomorrow' class='disabledDay'>#= data.value #</div>\n                    # } else if (data.date.toString() === '" + f + "') { #\n                    <div id='today'>#= data.value #</div>\n                    # } else if (data.date.toString() === '" + h + "') { #\n                    <div id='tomorrow'>#= data.value #</div>\n                    # } else if (" + u + ") { #\n                    <div class='disabledDay'>#= data.value #</div>\n                    # } else { #\n                    #= data.value #\n                    # } # "
                            },
                            open: function() {
                                i(".disabledDay").parent().removeClass("k-link"),
                                i(".disabledDay").parent().removeAttr("href"),
                                i(".k-header a").addClass("disabled"),
                                i(".k-header a").unbind(),
                                i(".k-header a").click(function(e) {
                                    e.preventDefault(),
                                    e.stopPropagation()
                                })
                            }
                        },
                        n.calendarOnChange = function(e) {
                            c.$scope.calendarSelectedDate = e.sender.value()
                        }
                        ,
                        this.childName = this.currentUser.getCurrentPerson().fullName
                    } else
                        this.goBack()
                }
                return t.prototype.onKeydown = function(e) {
                    e.preventDefault(),
                    e.stopImmediatePropagation()
                }
                ,
                t.prototype.absentieMeldenLinkCheck = function() {
                    var e;
                    try {
                        e = atob(this.$routeParams.absentieMeldenLink)
                    } catch (e) {
                        return !1
                    }
                    var t = Number(e.split("/")[2]);
                    return !!t && t === this.currentUser.getCurrentPerson().id
                }
                ,
                t.prototype.setDisabledDays = function() {
                    var e = [];
                    return 6 !== this.today.isoWeekday() && 7 !== this.today.isoWeekday() && e.push(this.today.toDate()),
                    5 !== this.today.isoWeekday() && 6 !== this.today.isoWeekday() && e.push(this.tomorrow.toDate()),
                    1 === e.length && e.push(e[0]),
                    0 === e.length ? (e.push(this.today.add("months", 2).toDate()),
                    e.push(this.tomorrow.add("months", 2).toDate()),
                    this.$scope.selectedDay = null) : this.$scope.selectedDay = e[0],
                    this.$scope.calendarSelectedDate = this.$scope.selectedDay,
                    e
                }
                ,
                t.prototype.onCheckDirty = function() {
                    "" !== this.opmerking || this.$scope.selectedDay.toISOString() !== this.$scope.calendarSelectedDate.toISOString() ? this.showDirtyDialog = !0 : this.goBack()
                }
                ,
                t.prototype.goBack = function() {
                    this.$location.path("/afwezigheid")
                }
                ,
                t.prototype.onShowMeldingVersturenDialog = function() {
                    var e = o.copy(this.$scope.calendarSelectedDate).setHours(0, 0, 0, 0);
                    this.today.isSame(e) ? this.vandaagMorgen = "vandaag" : this.vandaagMorgen = "morgen",
                    this.showMeldingVersturenDialog = !0
                }
                ,
                t.prototype.onMeldingVersturen = function() {
                    var e = this
                      , t = o.copy(this.$scope.calendarSelectedDate);
                    t.setDate(t.getDate() + 1);
                    var n = {
                        begin: this.$scope.calendarSelectedDate,
                        einde: t,
                        opmerking: this.opmerking.trim()
                    }
                      , i = atob(this.$routeParams.absentieMeldenLink);
                    this.aanwezigheidService.postAbsentie(i, n).then(function() {
                        var t = {
                            domain: "absenties",
                            url: i,
                            personId: e.currentUser.getCurrentPerson().id
                        };
                        e.cacheBuster.manualNoCache(t),
                        e.goBack()
                    }).catch(function(t) {
                        e.applicationService.showMessage(t.data.omschrijving, r.i.ERROR, e.TOAST_TIME, "Ziek melden")
                    }).finally(function() {
                        e.showMeldingVersturenDialog = !1
                    })
                }
                ,
                t.prototype.onCloseMeldingVersturenDialog = function() {
                    this.showMeldingVersturenDialog = !1
                }
                ,
                t.$inject = ["$location", "$scope", "$routeParams", "currentUser", "aanwezigheidService", "applicationService", "cacheBusterInterceptor"],
                t
            }()
        }
        ).call(this, n(14), n(15), n(1))
    }
}]);

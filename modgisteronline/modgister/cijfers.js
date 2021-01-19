(window.webpackJsonp = window.webpackJsonp || []).push([[6], {
    476: function(e, t, i) {
        "use strict";
        i.r(t),
        function(e) {
            i.d(t, "cijfersAMD", function() {
                return S
            });
            var o = i(477)
              , n = i(478)
              , r = i(479)
              , s = i(481)
              , c = i(483)
              , a = i(484)
              , l = i(486)
              , d = i(489)
              , f = i(491)
              , m = i(493)
              , u = i(495)
              , h = i(497)
              , p = i(498)
              , v = i(499)
              , g = i(500)
              , j = i(501)
              , b = i(502)
              , S = e.module("CijfersAMD", []);
            S.directive("smBerekendGemiddelde", d.a.$inject).directive("smCijferInformatie", f.a.$inject).directive("smWeergaveFilterOud", m.a.$inject).directive("smWeergaveInstellingenOud", u.a.$inject).directive("smCijfersoverzichtGrid", s.a.$inject).directive("smBerekening", r.a.$inject).directive("smCijfersDetail", b.a.$inject).directive("smWeergaveFilter", l.a.$inject).directive("smWeergaveInstellingen", a.a.$inject),
            S.controller("CijfersOverzichtControllerOud", h.a.$inject).controller("CijfersOverzichtController", n.a.$inject).controller("CijfersLaatstBehaaldeResultatenController", p.a.$inject).controller("ToetsboomController", v.a.$inject),
            S.service("cijfersOverzichtCommunicator", o.a.$inject).service("cijfersInvoerCommunicator", c.a.$inject).service("cijfersOverzichtGridAdapter", g.a.$inject).service("cijfersInvoerGridAdapter", j.a.$inject)
        }
        .call(this, i(1))
    },
    477: function(e, t, i) {
        "use strict";
        (function(e, o) {
            i.d(t, "a", function() {
                return d
            });
            var n, r = i(92), s = i(0), c = i(109), a = i(94), l = (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var i in t)
                    t.hasOwnProperty(i) && (e[i] = t[i])
            }
            ,
            function(e, t) {
                function i() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype,
                new i)
            }
            ), d = function(t) {
                function i(e, i, o, n) {
                    var r = t.call(this) || this;
                    return r.$q = e,
                    r.aanmeldingService = i,
                    r.currentUser = o,
                    r.cijfersService = n,
                    r
                }
                return l(i, t),
                i.prototype.setPeriodesSelectionFilter = function(e) {
                    this.selectedPeriodesSelectionType = e,
                    this.canGetCijfers() && this.getCijfers()
                }
                ,
                i.prototype.getAanmeldingen = function(t) {
                    var i = this;
                    this.aanmeldingService.getLeerlingAanmeldingen(this.currentUser.relatedPersons.current.id).then(function(o) {
                        i.aanmeldingen = o,
                        (o = o.filter(function(e) {
                            return e.links.cijfers
                        })).length > 0 && (e.each(o, function(e) {
                            e.omschrijving = i.getOmschrijvingLabel(e)
                        }),
                        i.callSubscribers(a.a.aanmeldingen, o),
                        t && i.setAanmelding(o[0]))
                    })
                }
                ,
                i.prototype.setAanmelding = function(e) {
                    this.selectedAanmelding = e,
                    this.callSubscribers(a.a.aanmelding, e),
                    this.getPeriodes()
                }
                ,
                i.prototype.setPeriodes = function(e) {
                    0 === e.length ? this.hasData = !1 : (this.selectedPeriodes = e,
                    this.callSubscribers(a.a.selectedPeriodes, e),
                    this.hasData = !0,
                    this.filterCijfers()),
                    this.callSubscribers(a.a.hasData, this.hasData)
                }
                ,
                i.prototype.setSelectedKolom = function(t, i) {
                    var o = this;
                    void 0 === i && (i = !0),
                    this.callSubscribers(a.a.kolom, t),
                    e.some(t.links, function(e) {
                        return "self" === e.Rel
                    }) ? this.cijfersService.getCijferKolomInfo(t).then(function(e) {
                        o.callSubscribers(a.a.kolomInfo, e)
                    }) : this.callSubscribers(a.a.kolomInfo, {
                        extraInfo: null
                    }),
                    i && this.getGerelateerdeKolommen(t)
                }
                ,
                i.prototype.setSelectedCijfer = function(e) {
                    this.callSubscribers(a.a.cijfer, e)
                }
                ,
                i.prototype.setKolomWeergave = function(e) {
                    this.callSubscribers(a.a.kolomweergave, e)
                }
                ,
                i.prototype.setCijfersoortFilter = function(e) {
                    this.selectedCijfersoortFilter = e,
                    this.callSubscribers(a.a.cijferSoort, e),
                    this.canGetCijfers() && this.getCijfers()
                }
                ,
                i.prototype.setVak = function(e) {
                    this.callSubscribers(a.a.selectedVak, e)
                }
                ,
                i.prototype.reset = function() {
                    this.selectedAanmelding = null,
                    this.selectedCijfersoortFilter = null,
                    this.allePeriodes = null,
                    this.selectedPeriodesSelectionType = null
                }
                ,
                i.prototype.getOmschrijvingLabel = function(e) {
                    var t = e.lesperiode.code + " " + e.studie.code;
                    return e.profielen.length > 0 && (t += " (" + (e.profielen[1] ? e.profielen[0].code + "/" + e.profielen[1].code : e.profielen[0].code) + ")"),
                    t
                }
                ,
                i.prototype.getPeriodes = function() {
                    var e = this;
                    this.cijfersService.getCijferperiodes(this.selectedAanmelding.id).then(function(t) {
                        e.allePeriodes = t,
                        e.callSubscribers(a.a.periodes, t),
                        e.canGetCijfers() && e.getCijfers()
                    })
                }
                ,
                i.prototype.getActievePeriode = function() {
                    var t = o().format("YYYY-MM-DD")
                      , i = e.filter(this.cijferPeriodes, function(e) {
                        return o(e.Start).format("YYYY-MM-DD") < t && o(e.Einde).format("YYYY-MM-DD") > t
                    });
                    return !Object(s.w)(i) && i.length > 0 ? i[0] : this.cijferPeriodes[0]
                }
                ,
                i.prototype.getDefaultPeriodes = function() {
                    switch (Object(s.w)(this.selectedPeriodesSelectionType) ? r.b.Alles : this.selectedPeriodesSelectionType) {
                    case r.b.Actief:
                        return [this.getActievePeriode()];
                    case r.b.Alles:
                    default:
                        return this.cijferPeriodes
                    }
                }
                ,
                i.prototype.canGetCijfers = function() {
                    return !Object(s.w)(this.selectedAanmelding) && (!Object(s.w)(this.selectedCijfersoortFilter) && (!Object(s.w)(this.allePeriodes) && !Object(s.w)(this.selectedPeriodesSelectionType)))
                }
                ,
                i.prototype.getCijfers = function() {
                    var t = this;
                    this.cijfersService.getCijfersByAanmeldingId(this.selectedAanmelding.id, this.selectedAanmelding.einde, null, null, this.selectedCijfersoortFilter).then(function(i) {
                        var o = e.filter(i, function(e) {
                            return !Object(s.w)(e.periode)
                        });
                        t.cijfers = o,
                        t.synchronizeCijferperiodes(),
                        t.setPeriodes(t.getDefaultPeriodes())
                    })
                }
                ,
                i.prototype.filterCijfers = function() {
                    var t = this
                      , i = e.filter(this.cijfers, function(i) {
                        return e.any(t.selectedPeriodes, function(e) {
                            return e.Naam === i.periode.code
                        })
                    });
                    this.callSubscribers(a.a.cijfers, i)
                }
                ,
                i.prototype.synchronizeCijferperiodes = function() {
                    var t = e.uniq(e.map(this.cijfers, function(e) {
                        return e.periode
                    }), function(e) {
                        return e.code
                    });
                    this.cijferPeriodes = e.filter(this.allePeriodes, function(i) {
                        return e.any(t, function(e) {
                            return e.code === i.Naam
                        })
                    }),
                    this.callSubscribers(a.a.cijferPeriodes, this.cijferPeriodes)
                }
                ,
                i.prototype.getGerelateerdeKolommen = function(t) {
                    var i = this;
                    this.callSubscribers(a.a.gerelateerdeKolommen, []),
                    t.isGemiddelde && e.some(t.links, function(e) {
                        return "gerelateerdeKolommen" === e.Rel
                    }) && this.cijfersService.getGerelateerdeKolommen(t).then(function(e) {
                        i.callSubscribers(a.a.gerelateerdeKolommen, e)
                    })
                }
                ,
                i.$inject = ["$q", "aanmeldingenService", "currentUser", "cijfersService", "$location", i],
                i
            }(c.a)
        }
        ).call(this, i(3), i(14))
    },
    478: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return n
        });
        var o = i(94)
          , n = function() {
            function e(e, t, i, n) {
                var r = this;
                this.$scope = e,
                this.$location = t,
                this.tabService = i,
                this.cijfersOverzichtCommunicator = n,
                this.tabState = this.tabService.tabState,
                this.tabService.subscribeTabAdded(this.tabAdded, this),
                this.cijfersOverzichtCommunicator.subscribe(o.a.aanmeldingen, function(e) {
                    0 === e.length && r.$location.path("/cijfers")
                }, this, this.$scope)
            }
            return e.prototype.tabAdded = function(e) {
                "idWeergave" === e.id && this.tabService.openTab(e)
            }
            ,
            e.prototype.setHasData = function(e) {
                this.hasData = e
            }
            ,
            e.$inject = ["$scope", "$location", "tabService", "cijfersOverzichtCommunicator", e],
            e
        }()
    },
    479: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return s
        });
        var o = i(104)
          , n = i(94)
          , r = i(0)
          , s = function() {
            function e() {
                this.template = i(480),
                this.replace = !0,
                this.controller = c.$inject,
                this.controllerAs = "vm",
                this.scope = {}
            }
            return e.$inject = [function() {
                return new e
            }
            ],
            e
        }()
          , c = function() {
            function e(e, t, i) {
                var o = this;
                this.$scope = e,
                this.tabService = t,
                this.cijfersOverzichtCommunicator = i,
                this.fold = !1,
                this.userClicked = !0,
                i.subscribe(n.a.kolom, function(e) {
                    o.setSelectedKolom(e)
                }, this, e),
                i.subscribe(n.a.gerelateerdeKolommen, function(e) {
                    o.setGerelateerdeKolom(e)
                }, this, e),
                i.subscribe(n.a.kolomweergave, function(e) {
                    o.setKolomWeergave(e)
                }, this, e),
                i.subscribe(n.a.userClicked, function(e) {
                    o.userClicked = e
                }, this, e),
                this.fold = !1,
                this.blockFold = function() {
                    o.fold = !o.fold
                }
            }
            return e.prototype.setSelectedKolom = function(e) {
                this.kolom = e
            }
            ,
            e.prototype.setGerelateerdeKolom = function(e) {
                this.gerelateerdeKolommen = e;
                var t = this.tabService.getTab("idBerekening");
                if (!Object(r.w)(this.kolom) && this.kolom.isGemiddelde && !Object(r.w)(this.gerelateerdeKolommen) && this.gerelateerdeKolommen.length > 0) {
                    if (!Object(r.w)(t)) {
                        var i = this.kolom.soort === o.a.Weegfactor
                          , n = this.kolom.soort === o.a.Gemiddelden
                          , s = this.kolom.soort === o.a.Cijfers
                          , c = this.kolom.type === o.b.Herkansing
                          , a = this.kolom.type === o.b.Docent;
                        this.showCijfer = !i,
                        this.showWeegfactor = n || i || s,
                        this.showDescription = c || a,
                        this.tabService.setEnableTab(t, !0),
                        this.userClicked && this.tabService.openTab(t)
                    }
                } else
                    t.getActive() ? this.tabService.subscribeTabActiveChanged(this.hideTab, this) : this.tabService.setEnableTab(t, !1);
                this.$scope.$evalAsync()
            }
            ,
            e.prototype.setKolomWeergave = function(e) {
                this.kolomweergave = e
            }
            ,
            e.prototype.hideTab = function(e) {
                "idBerekening" === e.id && (e.getActive() || (this.tabService.setEnableTab(e, !1),
                this.tabService.unSubscribeTabActiveChanged(this.hideTab)))
            }
            ,
            e.$inject = ["$scope", "tabService", "cijfersOverzichtCommunicator", e],
            e
        }()
    },
    480: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block" data-ng-class="{\'fold\': vm.fold}">\r\n        <h3 data-ng-click="vm.blockFold()"><span data-ng-class="{\'icon-up-arrow\': !vm.fold, \'icon-down-arrow\': vm.fold}"></span><b>Resultaten</b></h3>\r\n        <div class="content">\r\n            <div class="berekend-outer">\r\n                <div class="berekend-inner">\r\n                    <table class="cijfer-berekend">\r\n                        <tr>\r\n                            <th><strong>Omschrijving</strong></th>\r\n                            <th><strong>Cijfer</strong></th>\r\n                            <th><strong>Weging</strong></th>\r\n                        </tr>\r\n                        <tr data-ng-repeat="cijferKolom in vm.gerelateerdeKolommen">\r\n                            <td data-ng-if="vm.kolomweergave === 0 && !vm.showDescription">{{cijferKolom.CVak}}{{cijferKolom.Kolomnr}}</td>\r\n                            <td data-ng-if="vm.kolomweergave === 1 || vm.showDescription" data-ng-bind="cijferKolom.Kolomkop"></td>\r\n                            <td data-ng-if="vm.showCijfer" data-ng-class="{insufficient: !cijferKolom.IsVoldoende}" data-ng-bind="cijferKolom.Cijfer"></td>\r\n                            <td data-ng-if="!vm.showCijfer">&nbsp;</td>\r\n                            <td data-ng-if="vm.showWeegfactor" data-ng-bind="cijferKolom.Weegfactor"></td>\r\n                            <td data-ng-if="!vm.showWeegfactor">&nbsp;</td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
    },
    481: function(e, t, i) {
        "use strict";
        (function(e, o) {
            i.d(t, "a", function() {
                return d
            });
            var n, r = i(92), s = i(0), c = i(94), a = i(482), l = (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var i in t)
                    t.hasOwnProperty(i) && (e[i] = t[i])
            }
            ,
            function(e, t) {
                function i() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype,
                new i)
            }
            ), d = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.restrict = "E",
                    t.template = '<div id="cijferoverzichtgrid" class="cijfers-k-grid"></div>',
                    t.replace = !0,
                    t.transclude = !0,
                    t.controllerAs = "vm",
                    t.controller = f.$inject,
                    t.scope = {
                        setHasData: "&"
                    },
                    t.bindToController = !0,
                    t.link = function(e, i, o, n) {
                        return t.linkFn(e, i, o, n)
                    }
                    ,
                    t
                }
                return l(t, e),
                t.prototype.linkFn = function(e, t, i, o) {
                    var n = t.kendoGrid(o.getVakkenOptions())
                      , r = n.data("kendoGrid")
                      , s = function() {
                        return o.toggleHeaderPadding(n)
                    };
                    o.onGridInitialized(r),
                    window.addEventListener("resize", s),
                    e.$on("$destroy", function() {
                        return window.removeEventListener("resize", s)
                    })
                }
                ,
                t.$inject = [function() {
                    return new t
                }
                ],
                t
            }(a.a), f = function() {
                function t(e, t, i) {
                    this.$scope = e,
                    this.cijfersOverzichtGridAdapter = t,
                    this.cijfersOverzichtCommunicator = i,
                    this.kolomweergave = r.d.KolomKop,
                    this.codeClick = !0,
                    e.$on("$destroy", function() {
                        i.reset()
                    })
                }
                return t.prototype.onGridInitialized = function(e) {
                    var t = this;
                    this.cijfersOverzichtCommunicator.subscribe(c.a.kolomweergave, function(i) {
                        t.kolomweergave = i,
                        Object(s.w)(t.cijfers) || t.onCijfersChanged(e, t.cijfers, i)
                    }, this, this.$scope),
                    this.cijfersOverzichtCommunicator.subscribe(c.a.cijfers, function(i) {
                        t.cijfers = i,
                        t.onCijfersChanged(e, i, t.kolomweergave)
                    }, this, this.$scope),
                    this.cijfersOverzichtCommunicator.subscribe(c.a.hasData, function(e) {
                        t.setHasData({
                            hasData: e
                        })
                    }, this, this.$scope)
                }
                ,
                t.prototype.onCijfersChanged = function(e, t, i) {
                    this.codeClick = !0;
                    var o = this.cijfersOverzichtGridAdapter.transform(t, i);
                    this.applyFormatting(o),
                    e.setDataSource(new kendo.data.DataSource({
                        data: []
                    })),
                    e.setOptions({
                        columns: this.createGridColumns(o)
                    });
                    var n = new kendo.data.DataSource({
                        data: o,
                        sort: [{
                            field: "volgnummer",
                            dir: "asc"
                        }]
                    });
                    e.setDataSource(n),
                    e.refresh(),
                    e.select("td:eq(2)"),
                    this.cijfersOverzichtCommunicator.callSubscribers(c.a.userClicked, !1)
                }
                ,
                t.prototype.applyFormatting = function(t) {
                    var i = this;
                    e.each(t, function(t) {
                        e.each(t.kolommen, function(e) {
                            var t = [];
                            i.pushIf(t, "gemiddeldecolumn", function() {
                                return e.isGemiddelde
                            }),
                            i.pushIf(t, "heeftonderliggendekolommen", function() {
                                return e.data.cijfer && e.data.cijfer.heeftOnderliggendeKolommen
                            }),
                            i.pushIf(t, "docentkolom", function() {
                                return e.data.cijfer && e.data.cijfer.isDocentKolom
                            }),
                            i.pushIf(t, "herkansingKolom", function() {
                                return e.data.cijfer && e.data.cijfer.isHerkansingKolom
                            }),
                            i.pushIf(t, "teltnietmeecolumn", function() {
                                return !e.teltMee || e.isVrijstelling
                            }),
                            i.pushIf(t, "bijzonderecolumn", function() {
                                return e.moetInhalen
                            }),
                            i.pushIf(t, "insufficient", function() {
                                return !e.isVoldoende
                            }),
                            i.pushIf(t, "eloopdracht", function() {
                                return e.isEloOpdracht
                            }),
                            i.pushIf(t, "empty", function() {
                                return Object(s.p)(e.cijfer)
                            }),
                            e.cssClass = t.join(" ")
                        })
                    })
                }
                ,
                t.prototype.pushIf = function(e, t, i) {
                    i() && e.push(t)
                }
                ,
                t.prototype.getVakkenOptions = function() {
                    var e = this;
                    return {
                        sortable: !0,
                        dataSource: new kendo.data.DataSource({
                            data: []
                        }),
                        selectable: "cell",
                        change: function(t) {
                            e.onChange(t)
                        },
                        dataBound: function() {
                            var t = o(".k-grid");
                            e.toggleHeaderPadding(t)
                        }
                    }
                }
                ,
                t.prototype.toggleHeaderPadding = function(e) {
                    var t = e.find(".k-grid-content")
                      , i = e.find(".k-grid-header");
                    Object(s.t)(t) && (t.get(0).scrollHeight > t.innerHeight() ? i.removeClass("no-padding") : i.addClass("no-padding"))
                }
                ,
                t.prototype.onChange = function(e) {
                    var t = e.sender.select()[0];
                    if (t) {
                        var i = t.cellIndex
                          , o = e.sender.dataItem(t.parentNode);
                        if (this.codeClick ? this.codeClick = !1 : this.cijfersOverzichtCommunicator.callSubscribers(c.a.userClicked, !0),
                        Object(s.w)(o.kolommen[i - 2]))
                            e.sender.select("td:eq(2)"),
                            this.cijfersOverzichtCommunicator.callSubscribers(c.a.userClicked, !1);
                        else {
                            var n = o.kolommen[i - 2].data;
                            this.cijfersOverzichtCommunicator.setSelectedCijfer(n.cijfer),
                            this.cijfersOverzichtCommunicator.setSelectedKolom(n.kolom, !0)
                        }
                    }
                }
                ,
                t.prototype.createGridColumns = function(e) {
                    var t = [];
                    t.push({
                        field: "volgnummer",
                        hidden: !0
                    });
                    var i = this.extendWidth(e)
                      , o = this.calculateWidth(i);
                    return t.push({
                        width: o,
                        field: "omschrijving",
                        headerTemplate: '<span class="single-header">Vak</span>',
                        template: '# if(descriptionWidth < 200) { #    <span title="#: omschrijving #" class="text">#: omschrijving ##: bijzonderheden #</span># } else { #    <span title="#: omschrijving ##: bijzonderheden #" class="text bijzonderheden">#: bijzonderheden #</span><span title="#: omschrijving ##: bijzonderheden #" class="text bijzonderheden">#: omschrijving #</span># } #'
                    }),
                    (t = t.concat(this.createPeriodeColumns(e))).push({
                        template: '<span class="text">&nbsp;</span>'
                    }),
                    t
                }
                ,
                t.prototype.calculateWidth = function(t) {
                    return (5 + e.max(t, function(e) {
                        return e.descriptionWidth
                    }).descriptionWidth).toString(10) + "px"
                }
                ,
                t.prototype.extendWidth = function(t) {
                    return e.map(t, function(t) {
                        var i = (t.omschrijving + t.bijzonderheden).length;
                        return e.extend(t, {
                            descriptionWidth: Math.min(6 * i, 200)
                        })
                    })
                }
                ,
                t.prototype.createPeriodeColumns = function(t) {
                    var i = this
                      , o = []
                      , n = t.length ? t[0].kolommen : [];
                    return e.each(n, function(t, n) {
                        var r = e.find(o, function(e) {
                            return e.title === t.periode
                        });
                        r || (r = {
                            title: t.periode,
                            headerTemplate: '<span class="double-header">' + t.periode + "</span>",
                            columns: []
                        },
                        o.push(r)),
                        r.columns.push(i.createCijferKolom(t, n))
                    }),
                    o
                }
                ,
                t.prototype.createCijferKolom = function(e, t) {
                    var i = "kolommen[" + t + "]"
                      , o = "#=(" + i + ".data.cijfer !== null && " + i + ".data.cijfer.isDocentKolom === true ? '<i class=\"docent-icon\"></i>' : '') #"
                      , n = "#=(" + i + ".data.cijfer !== null && " + i + ".data.cijfer.isHerkansingKolom === true ? '<i class=\"herkansing-icon\"></i>' : '') #";
                    return {
                        headerTemplate: '<span class="gradeHeader">' + e.naam + "</span>",
                        field: i + ".cijfer",
                        width: "40px",
                        template: '<span id="#:' + i + ".vakCode #_" + e.naam + "_#:" + i + '.data.kolom.nummer #" title="#: ' + i + '.cijfer #" class="grade #: ' + i + '.cssClass #">' + o + n + "#= (" + i + ".cijfer ? $('<span>' + " + i + ".cijfer + '</span>').text() : '&nbsp;') #</span>"
                    }
                }
                ,
                t.$inject = ["$scope", "cijfersOverzichtGridAdapter", "cijfersOverzichtCommunicator", t],
                t
            }()
        }
        ).call(this, i(3), i(15))
    },
    482: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return o
        });
        var o = function() {
            return function() {}
        }()
    },
    483: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return s
        });
        var o, n = i(109), r = (o = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var i in t)
                t.hasOwnProperty(i) && (e[i] = t[i])
        }
        ,
        function(e, t) {
            function i() {
                this.constructor = e
            }
            o(e, t),
            e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype,
            new i)
        }
        ), s = function(e) {
            function t(t, i, o) {
                var n = e.call(this) || this;
                return n.$q = t,
                n.currentUser = i,
                n.cijfersService = o,
                n
            }
            return r(t, e),
            t.prototype.setKlasGroep = function(e) {}
            ,
            t.$inject = ["$q", "currentUser", "cijfersService", t],
            t
        }(n.a)
    },
    484: function(e, t, i) {
        "use strict";
        (function(e, o) {
            i.d(t, "a", function() {
                return c
            });
            var n = i(7)
              , r = i(92)
              , s = i(94)
              , c = function() {
                function t() {
                    var e = this;
                    this.template = i(485),
                    this.replace = !0,
                    this.controller = a.$inject,
                    this.controllerAs = "vm",
                    this.scope = {},
                    this.link = function(t, i, o, n) {
                        return e.linkFn(t, i, o, n)
                    }
                }
                return t.prototype.linkFn = function(t, i, o, n) {
                    var r = this;
                    n.getKolomweergaveInstelling().then(function(t) {
                        var o = n.getKolomweergave()
                          , s = e.find(o, function(e) {
                            return e.id === t.kolomType
                        });
                        r.initializeKolomweergave(i, n, s, o)
                    })
                }
                ,
                t.prototype.initializeKolomweergave = function(t, i, o, n) {
                    var r = t.find("#kolomweergave")
                      , s = e.indexOf(n, o);
                    r.kendoDropDownList({
                        dataTextField: "omschrijving",
                        dataValueField: "id",
                        dataSource: new kendo.data.DataSource({
                            data: n
                        }),
                        index: s
                    }),
                    r.data("kendoDropDownList").bind("select", function(e) {
                        i.saveKolomweergaveInstelling(e.item.index())
                    })
                }
                ,
                t.$inject = [function() {
                    return new t
                }
                ],
                t
            }()
              , a = function() {
                function e(e, t, i, o, n, r) {
                    var s = this;
                    this.$q = e,
                    this.currentUser = t,
                    this.instellingService = i,
                    this.applicationService = o,
                    this.magisterLocale = n,
                    this.cijfersOverzichtCommunicator = r,
                    this.fold = !1,
                    this.kolomweergaveEnOmschrijvingen = [],
                    this.fold = !1,
                    this.blockFold = function() {
                        s.fold = !s.fold
                    }
                }
                return e.prototype.getKolomweergave = function() {
                    var e = [];
                    return e.push({
                        id: r.d.KolomKop,
                        omschrijving: "Kolomkop"
                    }),
                    e.push({
                        id: r.d.KolomNummers,
                        omschrijving: "Kolomnummers"
                    }),
                    this.kolomweergaveEnOmschrijvingen = e,
                    e
                }
                ,
                e.prototype.saveKolomweergaveInstelling = function(e) {
                    var t = this
                      , i = {
                        kolomType: this.kolomweergaveEnOmschrijvingen[e].id,
                        hoogte: 0
                    };
                    this.instellingService.set(this.currentUser.person.id, "gridWeerGave", i).then(function() {
                        t.setSelectedKolomweergave(i)
                    }, function() {
                        t.applicationService.showMessage(t.magisterLocale.NotificationStrings.DESCRIPTION_FAILED_SAVE_CONFIGURATION, n.i.ERROR, n.e, t.magisterLocale.NotificationStrings.TITLE_SAVE_FAILED)
                    })
                }
                ,
                e.prototype.setSelectedKolomweergave = function(e) {
                    this.cijfersOverzichtCommunicator.callSubscribers(s.a.kolomweergave, e.kolomType)
                }
                ,
                e.prototype.getKolomweergaveInstelling = function() {
                    var e = this
                      , t = this.$q.defer();
                    return this.instellingService.get(this.currentUser.person.id, "gridWeerGave").then(function(i) {
                        var n;
                        n = o.isDefined(i) && null !== i ? i : {
                            kolomType: r.d.KolomNummers,
                            hoogte: 0
                        },
                        e.setSelectedKolomweergave(n),
                        t.resolve(n)
                    }),
                    t.promise
                }
                ,
                e.$inject = ["$q", "currentUser", "instellingService", "applicationService", "magisterLocale", "cijfersOverzichtCommunicator", e],
                e
            }()
        }
        ).call(this, i(3), i(1))
    },
    485: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block" data-ng-class="{\'fold\': vm.fold}">\r\n        <h3 data-ng-click="vm.blockFold()"><span data-ng-class="{\'icon-up-arrow\': !vm.fold, \'icon-down-arrow\': vm.fold}"></span><b>Toon overzicht</b></h3>\r\n        <div class="content">\r\n            <form action="#" method="post">\r\n                <div>\r\n                    <label>Kolomweergave</label>\r\n                    <div class="fancy-select">\r\n                        <select id="kolomweergave" class="select" name="kolomweergave"></select>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
    },
    486: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", function() {
                return a
            });
            var o, n = i(92), r = i(0), s = i(487), c = (o = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var i in t)
                    t.hasOwnProperty(i) && (e[i] = t[i])
            }
            ,
            function(e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t),
                e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype,
                new i)
            }
            ), a = function() {
                function e() {
                    var e = this;
                    this.template = i(488),
                    this.replace = !0,
                    this.controller = l.$inject,
                    this.controllerAs = "vm",
                    this.scope = {},
                    this.link = function(t, i, o, n) {
                        return e.linkFn(t, i, o, n)
                    }
                }
                return e.prototype.linkFn = function(e, t, i, o) {
                    var n = this
                      , r = o;
                    this.initializePeriodesSelect(t, o, []),
                    this.initializeCijferSoorten(t, o),
                    r.onAanmeldingenChangedInController = function(e) {
                        return n.initializeAanmeldingenSelect(t, o, e)
                    }
                    ,
                    r.onPeriodesChangedInController = function(e) {
                        return n.onPeriodesChanged(e, t, r)
                    }
                    ,
                    r.onCijfersoortFilterChangedInController = function(e) {
                        return n.onCijfersoortChanged(e)
                    }
                }
                ,
                e.prototype.initializeAanmeldingenSelect = function(e, t, i) {
                    var o = e.find("#aanmeldingenSelect");
                    o.kendoDropDownList({
                        dataTextField: "omschrijving",
                        dataValueField: "Id",
                        dataSource: new kendo.data.DataSource({
                            data: i
                        })
                    }),
                    o.data("kendoDropDownList").bind("select", function(e) {
                        t.setSelectedAanmelding(e.item.index())
                    })
                }
                ,
                e.prototype.initializeCijferSoorten = function(e, t) {
                    var i = e.find("#cijferSoortSelect");
                    i.kendoDropDownList({
                        dataTextField: "omschrijving",
                        dataValueField: "Id",
                        dataSource: new kendo.data.DataSource({
                            data: t.createCijferSoortEnOmschrijvingen()
                        })
                    }),
                    this.cijferSoortDropdown = i.data("kendoDropDownList"),
                    this.cijferSoortDropdown.select(function(e) {
                        return "Actieve cijferperiode" === e.omschrijving
                    }),
                    this.cijferSoortDropdown.bind("select", function(e) {
                        t.setSelectedCijferSoort(e.item.index())
                    }),
                    t.setSelectedCijferSoort(n.c.ActievePeriode)
                }
                ,
                e.prototype.onPeriodesChanged = function(e, t, i) {
                    Object(r.w)(this.periodesMultiSelect) ? this.initializePeriodesSelect(t, i, e) : (this.periodesMultiSelect.setDataSource(new kendo.data.DataSource({
                        data: []
                    })),
                    this.periodesMultiSelect.setDataSource(new kendo.data.DataSource({
                        data: e
                    })),
                    this.periodesMultiSelect.value(e.map(function(e) {
                        return e.VolgNummer.toString()
                    })))
                }
                ,
                e.prototype.onCijfersoortChanged = function(e) {
                    this.cijferSoortDropdown.value(e)
                }
                ,
                e.prototype.initializePeriodesSelect = function(e, t, i) {
                    var o = e.find("#periodeSelect");
                    o.kendoMultiSelect({
                        dataTextField: "Naam",
                        dataValueField: "VolgNummer",
                        dataSource: new kendo.data.DataSource({
                            data: i
                        }),
                        value: i
                    }),
                    this.periodesMultiSelect = o.data("kendoMultiSelect"),
                    this.periodesMultiSelect.bind("change", function(e) {
                        t.setSelectedPeriodes(e.sender.value())
                    })
                }
                ,
                e.$inject = [function() {
                    return new e
                }
                ],
                e
            }(), l = function(t) {
                function i(e, i) {
                    var o = t.call(this, e, i) || this;
                    return o.$scope = e,
                    o.fold = !1,
                    o.blockFold = function() {
                        o.fold = !o.fold
                    }
                    ,
                    o.onAanmeldingenChanged = function(e) {
                        return o.onAanmeldingenChangedInController(e)
                    }
                    ,
                    o.onPeriodesChanged = function(e) {
                        return o.onPeriodesChangedInController(e)
                    }
                    ,
                    o.onCijferSoortChanged = function(e) {
                        if (o.cijferSoortEnOmschrijvingen && o.onCijfersoortFilterChangedInController) {
                            var t = o.cijferSoortEnOmschrijvingen[e].omschrijving;
                            o.onCijfersoortFilterChangedInController(t)
                        }
                    }
                    ,
                    i.setPeriodesSelectionFilter(n.b.Alles),
                    i.getAanmeldingen(!0),
                    o
                }
                return c(i, t),
                i.prototype.setSelectedCijferSoort = function(e) {
                    this.cijfersOverzichtCommunicator.setCijfersoortFilter(e)
                }
                ,
                i.prototype.setSelectedPeriodes = function(t) {
                    var i = e.filter(this.periodes, function(i) {
                        return e.contains(t, i.VolgNummer)
                    });
                    this.cijfersOverzichtCommunicator.setPeriodes(i)
                }
                ,
                i.prototype.createCijferSoortEnOmschrijvingen = function() {
                    return this.cijferSoortEnOmschrijvingen = [{
                        id: n.c.Alle,
                        omschrijving: "Alle cijfers"
                    }, {
                        id: n.c.ActievePeriode,
                        omschrijving: "Actieve cijferperiode"
                    }, {
                        id: n.c.BerekendeKolommen,
                        omschrijving: "Berekende kolommen"
                    }, {
                        id: n.c.PtaKolommen,
                        omschrijving: "PTA - kolommen"
                    }],
                    this.cijferSoortEnOmschrijvingen
                }
                ,
                i.$inject = ["$scope", "cijfersOverzichtCommunicator", i],
                i
            }(s.a)
        }
        ).call(this, i(3))
    },
    487: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", function() {
                return r
            });
            var o = i(0)
              , n = i(94)
              , r = function() {
                function t(e, t) {
                    this.$scope = e,
                    this.cijfersOverzichtCommunicator = t,
                    t.subscribe(n.a.aanmeldingen, this.aanmeldingenChanged, this, e),
                    t.subscribe(n.a.cijferPeriodes, this.periodesChanged, this, e),
                    t.subscribe(n.a.cijferSoort, this.cijferSoortChanged, this, e)
                }
                return t.prototype.periodesChanged = function(e) {
                    this.periodes = e,
                    Object(o.w)(this.onPeriodesChanged) || this.onPeriodesChanged(e)
                }
                ,
                t.prototype.aanmeldingenChanged = function(e) {
                    this.aanmeldingen = e,
                    Object(o.w)(this.onAanmeldingenChanged) || this.onAanmeldingenChanged(e)
                }
                ,
                t.prototype.cijferSoortChanged = function(e) {
                    Object(o.w)(this.onCijferSoortChanged) || this.onCijferSoortChanged(e)
                }
                ,
                t.prototype.setSelectedAanmelding = function(e) {
                    this.cijfersOverzichtCommunicator.setAanmelding(this.aanmeldingen[e])
                }
                ,
                t.prototype.setSelectedPeriodes = function(t) {
                    var i = e.filter(this.periodes, function(i) {
                        return e.contains(t, i.VolgNummer)
                    });
                    this.cijfersOverzichtCommunicator.setPeriodes(i)
                }
                ,
                t
            }()
        }
        ).call(this, i(3))
    },
    488: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block" data-ng-class="{\'fold\': vm.fold}">\r\n        <h3 data-ng-click="vm.blockFold()"><span data-ng-class="{\'icon-up-arrow\': !vm.fold, \'icon-down-arrow\': vm.fold}"></span><b>Toon selectie</b></h3>\r\n        <div class="content">\r\n            <form>\r\n                <div>\r\n                    <label>Schooljaar</label>\r\n                    <div class="fancy-select">\r\n                        <select id="aanmeldingenSelect" class="select" name="Lesperiode"></select>\r\n                    </div>\r\n                </div>\r\n                <div>\r\n                    <label>Cijfersoort</label>\r\n                    <div class="fancy-select">\r\n                        <select id="cijferSoortSelect" class="select" name="Cijfersoort"></select>\r\n                    </div>\r\n                </div>\r\n                <div>\r\n                    <label>Cijferperiodes</label>\r\n                    <div class="fancy-select">\r\n                        <select id="periodeSelect" multiple="multiple" class="select" name="Cijferperiodes"></select>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
    },
    489: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", function() {
                return r
            });
            var o = i(92)
              , n = i(0)
              , r = function() {
                function t(e, t, o, n, r, s) {
                    var c = this;
                    this.$timeout = e,
                    this.currentUser = t,
                    this.cijfersServiceOud = o,
                    this.settingsService = n,
                    this.settingsWeergaveKey = r,
                    this.tabService = s,
                    this.template = i(490),
                    this.replace = !0,
                    this.link = function(e, t, i) {
                        return c.linkFn(e, t, i)
                    }
                }
                return t.prototype.linkFn = function(t, i, r) {
                    var s = this;
                    t.kolomWeergave = o.d.KolomKop,
                    t.$on("KolomWeergaveChanged", function(e, i) {
                        t.kolomWeergave = i
                    }),
                    t.fold = !1;
                    var c = this;
                    t.cijferOverzichtScope = t.$parent.$parent;
                    var a = function() {};
                    e(window).resize(a);
                    var l = t;
                    t.cijferOverzichtScope.$watch("currentSelectedCijfer", function(e, t) {
                        var i = s.tabService.getTab("idBerekening")
                          , o = s.tabService.getTab("idDetails");
                        if (!Object(n.w)(i) && !Object(n.w)(o))
                            if (null != e)
                                if (0 !== e.CijferKolom.Id) {
                                    var r = e.CijferKolom.Id
                                      , a = c.currentUser.relatedPersons.current.id;
                                    l.kolomSoort = e.CijferKolom.KolomSoort,
                                    c.cijfersServiceOud.getGerelateerdeKolommen(a, r, e.CijferKolom.KolomSoort).then(function(t) {
                                        l.showCijfer = !(l.kolomSoort === Contracts.Cijfers.Enums.KolomSoort.Weegfactor),
                                        l.showWeegfactor = l.kolomSoort === Contracts.Cijfers.Enums.KolomSoort.Gemiddelde || l.kolomSoort === Contracts.Cijfers.Enums.KolomSoort.Weegfactor || l.kolomSoort === Contracts.Cijfers.Enums.KolomSoort.Cijfer && e.CijferKolom.IsDocentKolom,
                                        l.gerelateerdKolommen = t,
                                        e.VakOntheffing || e.VakVrijstelling ? (s.tabService.openTab(o, !0),
                                        s.tabService.setEnableTab(i, !1)) : (s.tabService.setEnableTab(i, !0),
                                        s.tabService.openTab(i, !0))
                                    }, function(e) {
                                        s.tabService.openTab(o, !0),
                                        s.tabService.setEnableTab(i, !1),
                                        l.gerelateerdKolommen = []
                                    })
                                } else
                                    s.tabService.openTab(o, !0),
                                    s.tabService.setEnableTab(i, !1);
                            else
                                s.tabService.openTab(o, !0),
                                s.tabService.setEnableTab(i, !1)
                    }),
                    t.blockFold = function() {
                        t.fold = !t.fold
                    }
                }
                ,
                t.$inject = ["$timeout", "currentUser", "cijfersServiceOud", "settingsService", "settingsWeergaveKey", "tabService", function(e, i, o, n, r, s) {
                    return new t(e,i,o,n,r,s)
                }
                ],
                t
            }()
        }
        ).call(this, i(15))
    },
    490: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block" data-ng-class="{\'fold\': fold}">\r\n        <h3 data-ng-click="blockFold()"><span data-ng-class="{\'icon-up-arrow\': !fold, \'icon-down-arrow\': fold}"></span><b>Resultaten</b></h3>\r\n        <div class="content">\r\n            <div class="berekend-outer">\r\n                <div class="berekend-inner">\r\n                    <table class="cijfer-berekend">\r\n                        <tr>\r\n                            <th><strong>Omschrijving</strong></th>\r\n                            <th><strong>Cijfer</strong></th>\r\n                            <th><strong>Weging</strong></th>\r\n                        </tr>\r\n                        <tr data-ng-repeat="cijferKolom in vm.gerelateerdKolommen">\r\n                            <td data-ng-if="kolomWeergave === 0" data-ng-bind="cijferKolom.Kolomnr"></td>\r\n                            <td data-ng-if="kolomWeergave === 1" data-ng-bind="cijferKolom.Kolomkop"></td>\r\n                            <td data-ng-if="showCijfer" data-ng-class="{insufficient: !cijferKolom.voldoende}" data-ng-bind="cijferKolom.Cijfer"></td>\r\n                            <td data-ng-if="!showCijfer"></td>\r\n                            <td data-ng-if="showWeegfactor" data-ng-bind="cijferKolom.Weegfactor"></td>\r\n                            <td data-ng-if="!showWeegfactor"></td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
    },
    491: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return s
        });
        var o = i(0)
          , n = function() {
            function e(e) {
                if (this.naam = "",
                this.kopnaam = "",
                this.omschrijving = "",
                this.niveau = "",
                this.weging = "",
                this.beoordeling = "",
                this.invoer = "",
                this.werkomschrijving = "",
                this.soort = "",
                this.docent = "",
                this.eloOpdracht = 0,
                this.WerkinformatieDatumIngevoerd = null,
                void 0 !== e)
                    for (var t in e)
                        e.hasOwnProperty(t) && (this[t] = e[t])
            }
            return e.mapDTO = function(t, i, o) {
                var n = new e({})
                  , r = null != i.DatumIngevoerd ? i.DatumIngevoerd.toString() : "";
                return n.naam = t.KolomNaam || "",
                n.kopnaam = t.KolomKopnaam || "",
                n.niveau = t.KolomNiveau || "",
                n.omschrijving = t.KolomOmschrijving || "",
                n.beoordeling = i.CijferStr || "",
                n.weging = i.TeltMee ? i.Vrijstelling ? o.CijferStrings.VRIJSTELLING : t.Weging.toString() || "" : o.CijferStrings.TELT_NIET_MEE,
                n.soort = e.getKolomSoort(i) || "",
                n.werkomschrijving = t.WerkInformatieOmschrijving || "",
                n.invoer = r || "",
                n.docent = i.Docent || "",
                n.eloOpdracht = i.CijferKolomIdEloOpdracht,
                n.WerkinformatieDatumIngevoerd = n.WerkinformatieDatumIngevoerd,
                n
            }
            ,
            e.getKolomSoort = function(e) {
                var t = Contracts.Cijfers.Enums.KolomSoort[+e.CijferKolom.KolomSoort];
                return t = e.CijferKolom.IsHerkansingKolom && e.CijferKolom.HeeftOnderliggendeKolommen ? "Herkansingkolom" : e.CijferKolom.IsDocentKolom && e.CijferKolom.HeeftOnderliggendeKolommen ? "Docentkolom" : t
            }
            ,
            e
        }()
          , r = function() {
            function e(e, t, i, r, s) {
                var c = this;
                this.$scope = e,
                this.cijfersServiceOud = t,
                this.currentUser = i,
                this.magisterLocale = r,
                this.tabService = s,
                e.fold = !1,
                e.cijferInfo = this.defaultCijferInfoData,
                this.defaultCijferInfoData = new n({}),
                this.$scope.cijferOverzichtScope = this.$scope.$parent.$parent,
                this.$scope.openBerekendeKolom = function() {
                    if ("Herkansingkolom" === c.$scope.cijferInfo.soort || "DocentKolom" === c.$scope.cijferInfo.soort || "Gemiddelde" === c.$scope.cijferInfo.soort) {
                        var e = c.tabService.getTab("idBerekening");
                        Object(o.w)(e) || c.tabService.openTab(e, !0)
                    }
                }
                ,
                this.$scope.cijferOverzichtScope.$watch("currentSelectedCijfer", function(e, t) {
                    c.setSelectedCijfer(e, t)
                }),
                this.$scope.blockFold = function() {
                    c.$scope.fold = !c.$scope.fold
                }
            }
            return e.prototype.getKolomInfo = function(e) {
                var t = this
                  , i = e.CijferKolom.Id
                  , o = this.currentUser.relatedPersons.current.id
                  , r = this.$scope.cijferOverzichtScope.selectedAanmelding.Id;
                e.VakOntheffing || e.VakVrijstelling ? this.$scope.cijferInfo = new n({
                    naam: e.CijferKolom.KolomNaam || "",
                    kopnaam: e.CijferKolom.KolomKop || ""
                }) : this.cijfersServiceOud.getCijferKolomInfo(r, o, i).then(function(i) {
                    t.$scope.cijferInfo = n.mapDTO(i, e, t.magisterLocale)
                })
            }
            ,
            e.prototype.setSelectedCijfer = function(e, t) {
                Object(o.w)(e) || (!Object(o.p)(e.CijferStr) || e.CijferKolom.IsPTAKolom ? this.getKolomInfo(e) : this.$scope.cijferInfo = new n({
                    naam: e.CijferKolom.KolomNaam || "",
                    kopnaam: e.CijferKolom.KolomKop || "",
                    omschrijving: e.CijferKolom.KolomOmschrijving || "",
                    docent: e.Docent || ""
                }))
            }
            ,
            e
        }()
          , s = function() {
            function e() {
                this.template = i(492),
                this.replace = !0,
                this.controller = ["$scope", "cijfersServiceOud", "currentUser", "magisterLocale", "tabService", r]
            }
            return e.$inject = [function(t) {
                return new e
            }
            ],
            e
        }()
    },
    492: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block" data-ng-class="{\'fold\': fold}">\r\n        <h3 data-ng-click="blockFold()"><span data-ng-class="{\'icon-up-arrow\': !fold, \'icon-down-arrow\': fold}"></span><b>Informatie</b></h3>\r\n\r\n        <div class="content">\r\n            <dl class="list-dl">\r\n                <dt>Kolomnaam</dt>\r\n                <dd>{{cijferInfo.naam}}</dd>\r\n                <dt>Kolomkop</dt>\r\n                <dd>{{cijferInfo.kopnaam}}</dd>\r\n                <dt>Omschrijving</dt>\r\n                <dd data-ng-class="{\'content-more\': cijferInfo.omschrijving.length > 0}" title="{{cijferInfo.omschrijving}}">{{cijferInfo.omschrijving}}</dd>\r\n                <dt>Niveau</dt>\r\n                <dd>{{cijferInfo.niveau}}</dd>\r\n                <dt>Weging</dt>\r\n                <dd>{{cijferInfo.weging}}</dd>\r\n                <dt>Beoordeling</dt>\r\n                <dd data-ng-class="{\'content-more\': cijferInfo.beoordeling.length > 0}" title="{{cijferInfo.beoordeling}}">{{cijferInfo.beoordeling}}</dd>\r\n                <dt>Invoer</dt>\r\n                <dd>{{cijferInfo.invoer | date:\'dd-MM-yyyy\'}}</dd>\r\n                <dt>Docent</dt>\r\n                <dd>{{cijferInfo.docent}}</dd>\r\n                <dt>Toetsdatum</dt>\r\n                <dd>{{cijferInfo.WerkinformatieDatumIngevoerd | date:\'dd-MM-yyyy\'}}</dd>\r\n                <dt>Werkomschrijving</dt>\r\n                <dd data-ng-class="{\'content-more\': cijferInfo.werkomschrijving.length > 0}" title="{{cijferInfo.werkomschrijving}}">{{cijferInfo.werkomschrijving}}</dd>\r\n                <dt>Soort</dt>\r\n                <dd><span data-ng-class="{gemiddeldecolumn: cijferInfo.soort == \'Herkansingkolom\' || cijferInfo.soort == \'Docentkolom\' || cijferInfo.soort == \'Gemiddelde\'}" title="{{cijferInfo.soort}}" ng-click="openBerekendeKolom()">{{cijferInfo.soort}}</span></dd>\r\n                <dt data-ng-hide="cijferInfo.eloOpdracht == 0">ELO-opdracht</dt>\r\n                <dd data-ng-hide="cijferInfo.eloOpdracht == 0"><a class="gemiddeldecolumn" data-ng-href="#/elo/opdrachten/{{cijferInfo.eloOpdracht}}">opdracht detail</a></dd>\r\n            </dl>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
    },
    493: function(e, t, i) {
        "use strict";
        (function(e, o) {
            i.d(t, "a", function() {
                return s
            });
            var n = i(92)
              , r = i(0)
              , s = function() {
                function t(e) {
                    var t = this;
                    this.$timeout = e,
                    this.template = i(494),
                    this.replace = !0,
                    this.link = function(e, i, o) {
                        return t.linkFn(e, i, o)
                    }
                }
                return t.prototype.linkFn = function(e, t, i) {
                    var o = this.initializePeriodeSelect(t, e)
                      , n = this.initializeCijferSoortSelect(t, e)
                      , r = this.initializeAanmeldingenSelect(t);
                    e.fold = !1,
                    e.cijferOverzichtScope = e.$parent.$parent,
                    this.watchAanmeldingen(e, r),
                    this.watchCijferSoorten(e, n),
                    this.watchCijferPerioden(e, o),
                    e.blockFold = function() {
                        e.fold = !e.fold
                    }
                }
                ,
                t.prototype.initializeCijferSoortSelect = function(e, t) {
                    var i = this
                      , o = e.find("#cijferSoortSelect");
                    o.kendoDropDownList();
                    var n = o.data("kendoDropDownList");
                    return n.bind("select", function(e) {
                        var o = t.cijferOverzichtScope;
                        i.$timeout(function() {
                            o.cijferSoort = e.item.index()
                        }, 0)
                    }),
                    n
                }
                ,
                t.prototype.initializePeriodeSelect = function(e, t) {
                    var i = e.find("#periodeSelect");
                    return this.$timeout(function() {
                        e.find("input.k-input").prop("readonly", !0)
                    }, 0),
                    i.kendoMultiSelect({
                        dataTextField: "Naam",
                        dataValueField: "Id"
                    }),
                    i.data("kendoMultiSelect")
                }
                ,
                t.prototype.initializeAanmeldingenSelect = function(e) {
                    var t = e.find("#aanmeldingenSelect");
                    return t.kendoDropDownList({
                        dataTextField: "omschrijving",
                        dataValueField: "Id"
                    }),
                    t.data("kendoDropDownList")
                }
                ,
                t.prototype.watchAanmeldingen = function(e, t) {
                    var i = this;
                    e.cijferOverzichtScope.$watch("aanmeldingen", function(o, n) {
                        return i.onAanmeldingChanged(o, n, e, t)
                    })
                }
                ,
                t.prototype.onAanmeldingChanged = function(t, i, o, s) {
                    var c = this;
                    if (null != t) {
                        var a = this.mapAndReverseAanmeldingen(t);
                        o.aanmeldingen = a;
                        var l = new kendo.data.DataSource({
                            data: a
                        });
                        s.setDataSource(l),
                        Object(r.w)(o.cijferOverzichtScope.selectedAanmelding) && (o.cijferOverzichtScope.selectedAanmelding = e.first(a)),
                        s.select(function(e) {
                            return e.Id === o.cijferOverzichtScope.selectedAanmelding.Id
                        }),
                        s.bind("select", function(e) {
                            c.$timeout(function() {
                                o.cijferOverzichtScope.selectedAanmelding = o.aanmeldingen[e.item.index()],
                                o.cijferOverzichtScope.currentAanmeldingId === o.aanmeldingen[e.item.index()].Id ? o.cijferOverzichtScope.cijferSoort = n.a.actieveCijferPerioden : o.cijferOverzichtScope.cijferSoort = n.a.berekendeKolommen
                            }, 0)
                        })
                    }
                }
                ,
                t.prototype.watchCijferSoorten = function(e, t) {
                    e.cijferOverzichtScope.$watch("cijferSoort", function(e, i) {
                        Object(r.w)(e) || t.select(function(t) {
                            return t.value === e.toString()
                        })
                    })
                }
                ,
                t.prototype.watchCijferPerioden = function(e, t) {
                    var i = this;
                    e.cijferOverzichtScope.$watch("periodes", function(n, r) {
                        var s = new kendo.data.DataSource({
                            data: n
                        });
                        null != n && (e.periodes = n,
                        t.setDataSource(s),
                        t.value(n.map(function(e) {
                            return e.Id.toString()
                        })),
                        t.wrapper.addClass("all-items-selected")),
                        o.isDefined(r) && !o.isDefined(n) && null !== r && null !== n && (t.setDataSource(s),
                        t.value([]),
                        t.wrapper.addClass("all-items-selected")),
                        t.bind("change", function(n) {
                            var r = e.cijferOverzichtScope
                              , s = o.copy(n.sender.value());
                            s.sort(function(e, t) {
                                var i = r.periodes.filter(function(t) {
                                    return t.Id === e
                                })[0] || {
                                    VolgNummer: 0
                                }
                                  , o = r.periodes.filter(function(e) {
                                    return e.Id === t
                                })[0] || {
                                    VolgNummer: 0
                                };
                                return i.VolgNummer - o.VolgNummer
                            }),
                            t.value(s),
                            i.$timeout(function() {
                                r.gefilterdePeriodes = o.copy(t.dataItems()),
                                r.gefilterdePeriodes.length === r.periodes.length ? t.wrapper.addClass("all-items-selected") : t.wrapper.removeClass("all-items-selected")
                            }, 0)
                        })
                    })
                }
                ,
                t.prototype.mapAndReverseAanmeldingen = function(e) {
                    var t = e.map(function(e) {
                        e.Lesperiode,
                        e.Studie.Omschrijving,
                        e.Profiel;
                        return e
                    });
                    return t = t.reverse()
                }
                ,
                t.$inject = ["$timeout", function(e) {
                    return new t(e)
                }
                ],
                t
            }()
        }
        ).call(this, i(3), i(1))
    },
    494: function(e, t) {
        e.exports = '<div class="widget">\r\n        <div class="block" data-ng-class="{\'fold\': fold}">\r\n        <h3 data-ng-click="blockFold()"><span data-ng-class="{\'icon-up-arrow\': !fold, \'icon-down-arrow\': fold}"></span><b>Toon selectie</b></h3>\r\n\r\n        <div class="content">\r\n            <form>\r\n                  <div>\r\n                    <label>Schooljaar</label>\r\n                    <div class="fancy-select">\r\n                        <select id="aanmeldingenSelect" class="select" name="Lesperiode">\r\n                        </select>\r\n                    </div>\r\n                </div> \r\n                <div>\r\n                    <label>Cijfersoort</label>\r\n                    <div class="fancy-select">\r\n                        <select id="cijferSoortSelect" class="select" name="Cijfersoort">\r\n                            <option value="0">Alle cijfers</option>\r\n                            <option value="1" selected="selected">Actieve cijferperiode</option>\r\n                            <option value="2">Berekende kolommen</option>\r\n                            <option value="3">PTA-kolommen</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div>\r\n                    <label>Cijferperiodes</label>\r\n                    <div class="fancy-select">\r\n                        <select id="periodeSelect" multiple="multiple" data-placeholder="" class="select" name="Cijferperiodes">\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
    },
    495: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", function() {
                return r
            });
            var o = i(7)
              , n = function() {
                function t(e, t, i, o, n, r, s, c) {
                    this.$rootScope = e,
                    this.$scope = t,
                    this.$q = i,
                    this.applicationService = o,
                    this.magisterLocale = n,
                    this.instellingService = r,
                    this.settingsWeergaveKey = s,
                    this.currentUser = c,
                    t.fold = !1,
                    t.cijferOverzichtScope = t.$parent.$parent,
                    t.blockFold = function() {
                        t.fold = !t.fold
                    }
                }
                return t.prototype.getWeergaveInstelling = function() {
                    var t = this
                      , i = this.$q.defer();
                    return this.instellingService.get(this.currentUser.person.id, this.settingsWeergaveKey).then(function(o) {
                        if (e.isDefined(o) && null !== o) {
                            var n = o.kolomType;
                            t.$rootScope.$broadcast("KolomWeergaveChanged", n);
                            t.$scope.cijferOverzichtScope.toonKolomNummers = 0 === n,
                            t.$scope.cijferOverzichtScope.rijHoogteGroot = !1,
                            t.$scope.cijferOverzichtScope.rijHoogteNormaal = !0,
                            t.$scope.cijferOverzichtScope.rijHoogteKlein = !1,
                            i.resolve(o)
                        }
                    }),
                    i.promise
                }
                ,
                t.prototype.saveWeergaveInstelling = function(e) {
                    var t = this;
                    this.$scope.cijferOverzichtScope.toonKolomNummers = 0 === e.kolomType,
                    this.instellingService.set(this.currentUser.person.id, this.settingsWeergaveKey, e).then(function(i) {
                        t.$rootScope.$broadcast("KolomWeergaveChanged", e.kolomType)
                    }, function(e) {
                        t.applicationService.showMessage(t.magisterLocale.NotificationStrings.DESCRIPTION_FAILED_SAVE_CONFIGURATION, o.i.ERROR, o.e, t.magisterLocale.NotificationStrings.TITLE_SAVE_FAILED)
                    })
                }
                ,
                t.$inject = ["$rootScope", "$scope", "$q", "applicationService", "magisterLocale", "instellingService", "settingsWeergaveKey", "currentUser", t],
                t
            }()
              , r = function() {
                function t(e) {
                    var t = this;
                    this.$timeout = e,
                    this.template = i(496),
                    this.controller = n.$inject,
                    this.replace = !0,
                    this.link = function(e, i, o, n) {
                        return t.linkFn(e, i, o, n)
                    }
                }
                return t.prototype.linkFn = function(t, i, o, n) {
                    var r = this
                      , s = i.find("#kolomweergave");
                    s.kendoDropDownList();
                    var c = s.data("kendoDropDownList");
                    n.getWeergaveInstelling().then(function(t) {
                        e.isDefined(t) && null !== t && c.select(t.kolomType)
                    }),
                    c.bind("select", function(e) {
                        r.$timeout(function() {
                            var e = {
                                hoogte: "1",
                                kolomType: c.select()
                            };
                            n.saveWeergaveInstelling(e)
                        }, 0)
                    })
                }
                ,
                t.$inject = ["$timeout", function(e) {
                    return new t(e)
                }
                ],
                t
            }()
        }
        ).call(this, i(1))
    },
    496: function(e, t) {
        e.exports = '<div class="widget">\r\n        <div class="block" data-ng-class="{\'fold\': fold}">\r\n        <h3 data-ng-click="blockFold()"><span data-ng-class="{\'icon-up-arrow\': !fold, \'icon-down-arrow\': fold}"></span><b>Toon overzicht</b></h3>\r\n\r\n        <div class="content">\r\n            <form action="#" method="post">\r\n                <div>\r\n                    <label>Kolomweergave</label>\r\n                    <div class="fancy-select">\r\n                        <select id="kolomweergave" name="kolomweergave" data-placeholder="" class="select">\r\n                            <option value="0">Kolomnummers</option>\r\n                            <option value="1">Kolomkop</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                \x3c!--<div>\r\n                    <label>Rijhoogte</label>\r\n                    <div class="fancy-select">\r\n                        <select id="rijhoogte" name="Rijhoogte" data-placeholder="" class="select">\r\n                            <option value="0">Groot</option>\r\n                            <option value="1">Normaal</option>\r\n                            <option value="2">Klein</option>\r\n                        </select>\r\n                    </div>\r\n                </div>--\x3e\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
    },
    497: function(e, t, i) {
        "use strict";
        (function(e, o, n) {
            i.d(t, "a", function() {
                return a
            });
            var r = i(88)
              , s = i(92)
              , c = i(0)
              , a = function() {
                function t(t, i, o, n, r, s, c, a, l, d) {
                    var f = this;
                    this.$scope = t,
                    this.$filter = i,
                    this.aanmeldingenService = o,
                    this.vakkenService = n,
                    this.cijfersServiceOud = r,
                    this.cijferOverzichtAdapter = s,
                    this.instellingService = c,
                    this.magisterLocale = a,
                    this.currentUser = l,
                    this.tabService = d,
                    this.ORDERBY_FILTER = this.$filter("orderBy"),
                    this.ORDERBY_FILTER_PROPERTY = "volgnr",
                    this.firstLoad = !0,
                    this.SETTINGS_KEY = "NOTIFICATIE_VANAF",
                    this.defaultDateFormat = "YYYY-MM-DD HH:mm",
                    this.defaultFrom = {
                        vanafDatumCijfers: e().format(this.defaultDateFormat)
                    },
                    t.tabState = this.tabService.tabState,
                    this.tabService.subscribeTabAdded(this.tabAdded, this),
                    t.currentSelectedCijfer = null,
                    t.toonKolomNummers = !1,
                    t.gefilterdePeriodes = null,
                    t.cijferSoort = 1,
                    t.currentAanmeldingId = 0,
                    this.persoonId = l.relatedPersons.current.id.toString(),
                    this.GetAanmeldingen(),
                    this.SetSortCijfersOnScope(),
                    this.SetSortVakkenOnScope(),
                    this.SetSelectCijferOnScope(),
                    this.SetWatchAanmeldingen(),
                    this.SetWatchSelectedAanmelding(),
                    this.SetWatchCijfersoort(),
                    this.SetWatchGefilterdePeriodes(),
                    this.resetNotificationDate(),
                    t.getKolomHeading = function(e) {
                        return f.getKolomHeading(t, i, e)
                    }
                }
                return t.prototype.tabAdded = function(e) {
                    "idDetails" === e.id && this.tabService.openTab(e)
                }
                ,
                t.prototype.resetNotificationDate = function() {
                    var e = this;
                    this.instellingService.get(this.currentUser.person.id, this.SETTINGS_KEY, this.defaultFrom).then(function(t) {
                        var i = o.extend(t, e.defaultFrom);
                        e.instellingService.set(e.currentUser.person.id, e.SETTINGS_KEY, i)
                    })
                }
                ,
                t.prototype.GetAanmeldingen = function() {
                    var t = this;
                    this.aanmeldingenService.getAanmeldingen(r.a.HuidigeEnEerdere, this.persoonId).then(function(i) {
                        var n = o.filter(i, function(t) {
                            var i = e().format("YYYY-MM-DD");
                            return i < t.Einde && i > t.Start
                        })
                          , r = o.first(n);
                        Object(c.w)(r) && (r = o.first(i),
                        t.$scope.cijferSoort = s.a.berekendeKolommen),
                        Object(c.w)(r) || (t.$scope.currentAanmeldingId = r.Id),
                        t.$scope.aanmeldingen = i
                    })
                }
                ,
                t.prototype.SetSortCijfersOnScope = function() {
                    var e = this;
                    this.$scope.sortCijfers = function(t, i) {
                        var o = {};
                        o.key = t.KolomNummer,
                        o.desc = i,
                        e.$scope.sorting = o;
                        var n = e.$scope.cijferTable.vakken.sort(function(e, o) {
                            var n = e.cijfers.filter(function(e) {
                                return e.CijferKolom.KolomNummer === t.KolomNummer
                            })[0]
                              , r = o.cijfers.filter(function(e) {
                                return e.CijferKolom.KolomNummer === t.KolomNummer
                            })[0];
                            return n.CijferStr < r.CijferStr ? i ? -1 : 1 : r.CijferStr < n.CijferStr ? i ? 1 : -1 : 0
                        });
                        e.$scope.cijferTable.vakken = n
                    }
                }
                ,
                t.prototype.SetSortVakkenOnScope = function() {
                    var e = this;
                    this.$scope.sortVakken = function(t) {
                        var i = {
                            key: "Vak"
                        };
                        i.desc = t,
                        e.$scope.sorting = i;
                        var o = e.$scope.cijferTable.vakken.sort(function(e, i) {
                            return e.omschrijving.toLowerCase() < i.omschrijving.toLowerCase() ? t ? -1 : 1 : i.omschrijving.toLowerCase() < e.omschrijving.toLowerCase() ? t ? 1 : -1 : 0
                        });
                        e.$scope.cijferTable.vakken = o
                    }
                }
                ,
                t.prototype.SetSelectCijferOnScope = function() {
                    var e = this;
                    this.$scope.selectCijfer = function(t) {
                        t.selected = !0,
                        null != e.$scope.currentSelectedCijfer && (e.$scope.currentSelectedCijfer.selected = !1),
                        e.$scope.currentSelectedCijfer = t
                    }
                }
                ,
                t.prototype.AanmeldingSortByDatum = function(e, t, i) {
                    void 0 === i && (i = !0);
                    var o = 0
                      , n = 0
                      , r = 0
                      , s = 0;
                    return Object(c.w)(e) || (o = e.Start,
                    r = e.Einde),
                    Object(c.w)(t) || (n = t.Start,
                    s = t.Einde),
                    o < n || r < s ? i ? -1 : 1 : o > n || r > s ? i ? 1 : -1 : 0
                }
                ,
                t.prototype.SetWatchAanmeldingen = function() {
                    var t = this;
                    this.$scope.$watch("aanmeldingen", function(i, n) {
                        Object(c.w)(i) || (t.$scope.selectedAanmelding = o.first(t.$scope.aanmeldingen.filter(function(t) {
                            var i = e().format("YYYY-MM-DD");
                            return i < t.Einde && i > t.Start
                        })),
                        Object(c.w)(t.$scope.selectedAanmelding) && (t.$scope.selectedAanmelding = o.first(t.$scope.aanmeldingen.sort(function(e, i) {
                            return t.AanmeldingSortByDatum(e, i, !1)
                        }))))
                    })
                }
                ,
                t.prototype.SetWatchSelectedAanmelding = function() {
                    var e = this;
                    this.$scope.$watch("selectedAanmelding", function(t, i) {
                        Object(c.w)(t) || e.vakkenService.getVakken(e.persoonId, e.$scope.selectedAanmelding.Id.toString()).then(function(t) {
                            var i = t;
                            e.vakken = e.ORDERBY_FILTER(i, e.ORDERBY_FILTER_PROPERTY),
                            e.GetCijfersAndPeriodes()
                        })
                    })
                }
                ,
                t.prototype.SetWatchGefilterdePeriodes = function() {
                    var e = this;
                    this.$scope.$watch("gefilterdePeriodes", function(t, i) {
                        (null === i || null !== t && t.length !== i.length) && e.FilterCijfers(e.firstLoad)
                    })
                }
                ,
                t.prototype.SetWatchCijfersoort = function() {
                    var e = this;
                    this.$scope.$watch("cijferSoort", function(t, i) {
                        e.GetCijfersAndPeriodes()
                    })
                }
                ,
                t.prototype.GetCijfersAndPeriodes = function() {
                    var e = this;
                    if (void 0 !== this.$scope.selectedAanmelding) {
                        var t = this.$scope.selectedAanmelding.Id
                          , i = 1 === this.$scope.cijferSoort
                          , o = 2 === this.$scope.cijferSoort
                          , r = 3 === this.$scope.cijferSoort;
                        this.cijfersServiceOud.getOverzichtCijfers(this.persoonId, t, i, o, r).then(function(t) {
                            n.isDefined(t.Items) && null !== t.Items ? (e.cijfers = t.Items,
                            e.SetPeriodes(),
                            e.FilterCijfers(e.firstLoad)) : (e.$scope.cijferTable = {
                                emptyData: "",
                                kolommen: [],
                                periodes: [],
                                vakken: []
                            },
                            e.$scope.periodes = [],
                            e.SetPeriodes(),
                            e.FilterCijfers(!1))
                        })
                    }
                }
                ,
                t.prototype.FilterCijfers = function(e) {
                    var t = this;
                    if (void 0 === e && (e = !0),
                    void 0 !== this.cijfers) {
                        var i = this.cijfers.filter(function(e) {
                            return 0 !== t.$scope.gefilterdePeriodes.length && t.$scope.gefilterdePeriodes.some(function(t) {
                                return null === e.CijferPeriode || t.Naam === e.CijferPeriode.Naam
                            })
                        })
                          , o = this.cijferOverzichtAdapter.createCijfersTabel(i, this.vakken);
                        !Object(c.w)(i) && i.length > 0 && e && (o.vakken[0].cijfers[0].selected = !0,
                        this.$scope.currentSelectedCijfer = o.vakken[0].cijfers[0]),
                        this.$scope.cijferTable = o,
                        this.firstLoad = !1
                    }
                }
                ,
                t.prototype.SetPeriodes = function() {
                    var e = this.cijferOverzichtAdapter.createCijfersTabel(this.cijfers, this.vakken);
                    this.$scope.periodes = o.sortBy(e.periodes, function(e) {
                        return e.VolgNummer
                    }) || [],
                    this.$scope.gefilterdePeriodes = this.$scope.periodes
                }
                ,
                t.prototype.getKolomHeading = function(e, t, i) {
                    var o = t("capitalize");
                    return !e.toonKolomNummers && i.KolomKop ? o(i.KolomKop) : i.KolomNummer ? i.KolomNummer.toString() : o(i.KolomKop)
                }
                ,
                t.$inject = ["$scope", "$filter", "aanmeldingenService", "vakkenService", "cijfersServiceOud", "overzichtCijfersAdapter", "instellingService", "magisterLocale", "currentUser", "tabService", t],
                t
            }()
        }
        ).call(this, i(14), i(3), i(1))
    },
    498: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", function() {
                return o
            });
            var o = function() {
                function t(e, t, i, o, n, r) {
                    this.$scope = e,
                    this.$location = t,
                    this.tabService = i,
                    this.cijfersService = o,
                    this.aanmeldingenService = n,
                    this.currentUser = r,
                    this.heeftVO = !1,
                    this.heeftBVE = !1,
                    this.tabState = this.tabService.tabState,
                    this.tabService.subscribeTabAdded(this.tabAdded, this),
                    this.tabService.tabState.tabContainerVisible = !0,
                    this.initialize()
                }
                return t.prototype.tabAdded = function(e) {
                    "idDetails" === e.id && this.tabService.openTab(e)
                }
                ,
                t.prototype.setHasData = function(e) {
                    this.hasData = e
                }
                ,
                t.prototype.initialize = function() {
                    var t = this
                      , i = this.currentUser.relatedPersons.current.id;
                    this.aanmeldingenService.getLeerlingAanmeldingen(i).then(function(i) {
                        t.heeftVO = e(i).some(function(e) {
                            return null != e.links.cijfers
                        }),
                        t.heeftBVE = e(i).some(function(e) {
                            return null != e.links.examenprogrammaCijfers || null != e.links.onderwijsprogrammaCijfers
                        })
                    }),
                    this.cijfersService.getLaatstBehaaldeResultaten(i, 25, 0).then(function(e) {
                        t.cijfers = e.items,
                        t.cijfers.length > 0 && t.selectCijfer(t.cijfers[0]),
                        t.$scope.$broadcast("NG_REPEAT_FINISHED", "cijfers")
                    })
                }
                ,
                t.prototype.selectCijfer = function(e) {
                    this.selectedCijfer = e
                }
                ,
                t.prototype.onUitgebreideWeergave = function() {
                    this.$location.path("/cijfers/cijferoverzicht")
                }
                ,
                t.prototype.onToetsboom = function() {
                    this.$location.path("/cijfer/toetsboom")
                }
                ,
                t.$inject = ["$scope", "$location", "tabService", "cijfersService", "aanmeldingenService", "currentUser", t],
                t
            }()
        }
        ).call(this, i(3))
    },
    499: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", function() {
                return o
            });
            var o = function() {
                function t(e, t, i, o, n, r) {
                    this.$scope = e,
                    this.$location = t,
                    this.tabService = i,
                    this.aanmeldingenService = o,
                    this.toetsboomService = n,
                    this.currentUser = r,
                    this.activeTab = 1,
                    this.toetsboom = [],
                    this.examenboom = [],
                    this.initialize()
                }
                return t.prototype.initialize = function() {
                    var t = this;
                    this.tabState = this.tabService.tabState,
                    this.tabService.subscribeTabAdded(this.tabAdded, this),
                    this.tabService.tabState.tabContainerVisible = !0,
                    this.aanmeldingenService.getLeerlingAanmeldingen(this.currentUser.relatedPersons.current.id).then(function(i) {
                        i.every(function(e) {
                            return !(e.links.examenprogrammaCijfers || e.links.onderwijsprogrammaCijfers)
                        }) && t.$location.path("/cijfers"),
                        i = i.filter(function(e) {
                            return e.links.examenprogrammaCijfers || e.links.onderwijsprogrammaCijfers
                        }),
                        e.each(i, function(e) {
                            e.begin = e.begin ? new Date(e.begin) : null,
                            e.einde = e.einde ? new Date(e.einde) : null,
                            e.omschrijving = t.getOmschrijvingLabel(e)
                        }),
                        t.aanmeldingen = i
                    })
                }
                ,
                t.prototype.tabAdded = function(e) {
                    "idWeergave" === e.id && this.tabService.openTab(e)
                }
                ,
                t.prototype.onTabToetsboom = function() {
                    var e = this;
                    this.toetsBoomTab && (this.activeTab = 1,
                    this.toetsboomService.getToetsboom(this.selectedAanmelding.links.onderwijsprogrammaCijfers.href).then(function(t) {
                        e.toetsboom = e.mapToetsboom(-1, t)
                    }).catch(function() {
                        e.toetsboom = []
                    }).finally(function() {
                        e.$scope.$broadcast("NG_REPEAT_FINISHED", "cijfers")
                    }))
                }
                ,
                t.prototype.onTabExamenboom = function() {
                    var e = this;
                    this.examenBoomTab && (this.activeTab = 2,
                    this.toetsboomService.getToetsboom(this.selectedAanmelding.links.examenprogrammaCijfers.href).then(function(t) {
                        e.examenboom = e.mapToetsboom(-1, t)
                    }).catch(function() {
                        e.examenboom = []
                    }).finally(function() {
                        e.$scope.$broadcast("NG_REPEAT_FINISHED", "cijfers")
                    }))
                }
                ,
                t.prototype.onAanmeldingSelected = function(e) {
                    this.selectedAanmelding = e,
                    this.examenBoomTab = !1,
                    this.toetsBoomTab = !1,
                    this.toetsboom = null,
                    this.examenboom = null,
                    e.links.examenprogrammaCijfers && (this.examenBoomTab = !0,
                    this.onTabExamenboom()),
                    e.links.onderwijsprogrammaCijfers && (this.toetsBoomTab = !0,
                    this.examenboom || this.onTabToetsboom())
                }
                ,
                t.prototype.getOmschrijvingLabel = function(e) {
                    return e.lesperiode ? "(" + e.lesperiode.code + ") " + e.studie.code : "EX " + e.studie.code
                }
                ,
                t.prototype.mapToetsboom = function(t, i, o) {
                    var n = this;
                    void 0 === o && (o = 0);
                    var r, s = [];
                    return r = {
                        kolomId: i.kolomId,
                        volgnummer: i.volgnummer,
                        kolomnaam: i.kolomnaam,
                        omschrijving: i.omschrijving,
                        weegfactor: i.weegfactor,
                        toetsvorm: i.toetsvorm,
                        waarde: i.waarde,
                        studiepunten: i.studiepunten,
                        ingevoerdOp: i.ingevoerdOp,
                        behaaldOp: i.behaaldOp,
                        bovenliggendeId: i.bovenliggendeId,
                        heeftOnderliggende: i.onderliggende.length > 0,
                        parentId: t,
                        diepte: o,
                        ingeklapt: !1,
                        zichtbaar: !0,
                        teltMee: i.teltMee
                    },
                    s.push(r),
                    e.each(i.onderliggende, function(t) {
                        var r = n.mapToetsboom(i.kolomId, t, o + 1);
                        e.each(r, function(e) {
                            s.push(e)
                        })
                    }),
                    s
                }
                ,
                t.$inject = ["$scope", "$location", "tabService", "aanmeldingenService", "toetsboomService", "currentUser", t],
                t
            }()
        }
        ).call(this, i(3))
    },
    500: function(e, t, i) {
        "use strict";
        (function(e, o) {
            i.d(t, "a", function() {
                return c
            });
            var n = i(104)
              , r = i(0)
              , s = i(92)
              , c = function() {
                function t(e) {
                    this.$filter = e
                }
                return t.prototype.transformVak = function(t, i, o) {
                    void 0 === o && (o = s.d.KolomKop);
                    var n = this.transform(t, o);
                    return Object(r.w)(n) || 0 === n.length ? null : e.find(n, function(e) {
                        return e.code === i.code
                    })
                }
                ,
                t.prototype.transformLaatsteCijferEnBijzonderheden = function(t, i) {
                    var o = this;
                    void 0 === i && (i = s.d.KolomKop);
                    var c = this.transform(t, i);
                    return Object(r.w)(c) || 0 === c.length ? c : (e.each(c, function(t) {
                        var i = [o.getLastGradeColumn()];
                        e.each(t.kolommen, function(e) {
                            e.data.kolom.soort === n.a.Cijfers ? o.mergeLastGradeColumn(i[0], e) : i.push(e)
                        }),
                        t.kolommen = i
                    }),
                    c)
                }
                ,
                t.prototype.getLastGradeColumn = function() {
                    return {
                        periode: "Laatste",
                        naam: "Laatste",
                        cijfer: "",
                        teltMee: !0,
                        isVrijstelling: !1,
                        isVoldoende: !0,
                        isGemiddelde: !1,
                        moetInhalen: !1,
                        isEloOpdracht: !1,
                        ingevoerdOp: void 0,
                        data: {
                            kolom: null,
                            cijfer: null
                        },
                        __kolomnummer: null
                    }
                }
                ,
                t.prototype.mergeLastGradeColumn = function(e, t) {
                    (Object(r.w)(e.ingevoerdOp) || e.ingevoerdOp < t.ingevoerdOp) && (e.cijfer = t.cijfer,
                    e.teltMee = t.teltMee,
                    e.isVrijstelling = t.isVrijstelling,
                    e.isVoldoende = t.isVoldoende,
                    e.isGemiddelde = t.isGemiddelde,
                    e.moetInhalen = t.moetInhalen,
                    e.isEloOpdracht = t.isEloOpdracht,
                    e.ingevoerdOp = t.ingevoerdOp,
                    e.data = t.data)
                }
                ,
                t.prototype.transform = function(t, i) {
                    void 0 === i && (i = s.d.KolomKop);
                    var o = e.filter(t, function(e) {
                        return !Object(r.w)(e.periode) && !isNaN(e.kolom.nummer)
                    });
                    o = this.$filter("orderBy")(o, ["periode.volgnummer", "kolom.volgnummer"]);
                    var n = this.extractUniqueKoloms(o, i)
                      , c = this.extractRows(o, n, i);
                    return this.removeEmptyColumns(n, c),
                    c
                }
                ,
                t.prototype.extractRows = function(t, i, s) {
                    var c = this
                      , a = [];
                    return e.each(t, function(t) {
                        var l = e.find(a, function(e) {
                            return e.code === t.vak.code
                        });
                        Object(r.w)(l) && (l = {
                            code: t.vak.code,
                            omschrijving: t.vak.omschrijving,
                            bijzonderheden: "",
                            volgnummer: t.vak.volgnummer,
                            kolommen: o.copy(i)
                        },
                        a.push(l),
                        c.transformBijzonderhedenVak(l, t));
                        var d = c.findKolom(l.kolommen, s, t);
                        d.vakCode = l.code,
                        d.teltMee = t.teltMee,
                        d.isVrijstelling = t.isVrijstelling,
                        d.isVoldoende = t.isVoldoende,
                        d.isGemiddelde = t.kolom.isGemiddelde,
                        d.moetInhalen = t.moetInhalen,
                        d.isEloOpdracht = t.isEloOpdracht,
                        t.kolom.soort === n.a.Cijfers && (d.ingevoerdOp = t.ingevoerdOp),
                        c.transformBijzonderhedenKolom(d, t),
                        d.data.cijfer = t,
                        d.data.kolom = t.kolom
                    }),
                    a
                }
                ,
                t.prototype.findKolom = function(t, i, o) {
                    return e.find(t, function(e) {
                        return i === s.d.KolomKop ? e.__kolomnummer === o.kolom.nummer && e.periode === o.periode.code && e.naam === Object(r.d)(o.kolom.weergaveTitel) : e.__kolomnummer === o.kolom.nummer && e.periode === o.periode.code
                    })
                }
                ,
                t.prototype.extractUniqueKoloms = function(t, i) {
                    var o = this
                      , n = [];
                    return e.each(t, function(e) {
                        var t, c = o.findKolom(n, i, e);
                        Object(r.w)(c) && (t = i === s.d.KolomKop ? Object(r.d)(e.kolom.weergaveTitel) : e.kolom.nummer.toString(),
                        c = {
                            periode: Object(r.w)(e.periode) ? "" : e.periode.code,
                            naam: t,
                            cijfer: "",
                            teltMee: !0,
                            isVrijstelling: !1,
                            isVoldoende: !0,
                            isGemiddelde: !1,
                            moetInhalen: !1,
                            isEloOpdracht: !1,
                            ingevoerdOp: void 0,
                            data: {
                                kolom: {
                                    weergaveTitel: e.kolom.weergaveTitel,
                                    nummer: e.kolom.nummer,
                                    volgnummer: e.kolom.volgnummer,
                                    soort: e.kolom.soort,
                                    type: e.kolom.type,
                                    isGemiddelde: e.kolom.isGemiddelde,
                                    links: []
                                },
                                cijfer: null
                            },
                            __kolomnummer: e.kolom.nummer
                        },
                        n.push(c))
                    }),
                    n
                }
                ,
                t.prototype.transformBijzonderhedenVak = function(e, t) {
                    this.extendBijzonderheden(e, " (" + t.vak.niveau + ")", function() {
                        return t.vak.isHogerNiveau
                    }),
                    this.extendBijzonderheden(e, " (Vr)", function() {
                        return t.vak.isVrijstelling
                    }),
                    this.extendBijzonderheden(e, " (O)", function() {
                        return t.vak.heeftOntheffing
                    })
                }
                ,
                t.prototype.transformBijzonderhedenKolom = function(e, t) {
                    e.cijfer = Object(r.w)(t.waarde) ? "" : t.waarde,
                    (t.isVrijstelling || t.vak.isVrijstelling || t.vak.heeftOntheffing) && ((t.vak.isVrijstelling || t.vak.heeftOntheffing) && (e.cijfer = ""),
                    e.isVoldoende = !0,
                    e.isGemiddelde = !1)
                }
                ,
                t.prototype.extendBijzonderheden = function(e, t, i) {
                    i && i() && (e.bijzonderheden = e.bijzonderheden + t)
                }
                ,
                t.prototype.removeEmptyColumns = function(t, i) {
                    var o = [];
                    e.each(t, function(t, n) {
                        e.any(i, function(e) {
                            return !Object(r.p)(e.kolommen[n].cijfer)
                        }) || o.push(n)
                    }),
                    o.sort(function(e, t) {
                        return t - e
                    }),
                    e.each(o, function(o) {
                        e.each(i, function(e) {
                            e.kolommen.splice(o, 1)
                        }),
                        t.splice(o, 1)
                    })
                }
                ,
                t.$inject = ["$filter", t],
                t
            }()
        }
        ).call(this, i(3), i(1))
    },
    501: function(e, t, i) {
        "use strict";
        (function(e, o) {
            i.d(t, "a", function() {
                return s
            });
            var n = i(92)
              , r = i(0)
              , s = function() {
                function t(e) {
                    this.$filter = e
                }
                return t.prototype.transform = function(t, i) {
                    void 0 === i && (i = n.d.KolomKop);
                    var o = e.copy(t);
                    o = this.$filter("orderBy")(o, ["periode.volgnummer", "kolom.volgnummer"]);
                    var r = this.extractUniqueKoloms(o, i);
                    return this.extractRows(o, r)
                }
                ,
                t.prototype.extractUniqueKoloms = function(e, t) {
                    var i = [];
                    return o.each(e, function(e) {
                        var s = o.find(i, function(t) {
                            return t.__kolomnummer === e.kolom.nummer
                        });
                        Object(r.w)(s) && (s = {
                            periode: "nvt",
                            naam: t === n.d.KolomKop ? Object(r.d)(e.kolom.weergaveTitel) : e.kolom.nummer.toString(),
                            cijfer: "",
                            teltMee: !0,
                            isVrijstelling: !1,
                            isVoldoende: !0,
                            isGemiddelde: !1,
                            moetInhalen: !1,
                            isEloOpdracht: !1,
                            ingevoerdOp: void 0,
                            data: {
                                kolom: {
                                    weergaveTitel: e.kolom.weergaveTitel,
                                    nummer: e.kolom.nummer,
                                    volgnummer: e.kolom.volgnummer,
                                    soort: e.kolom.soort,
                                    type: e.kolom.type,
                                    isGemiddelde: e.kolom.isGemiddelde,
                                    links: e.kolom.links
                                },
                                cijfer: null
                            },
                            __kolomnummer: e.kolom.nummer
                        },
                        i.push(s))
                    }),
                    i
                }
                ,
                t.prototype.extractRows = function(t, i) {
                    var n = [];
                    return o.each(t, function(t) {
                        var s = o.find(n, function(e) {
                            return e.id === t.persoon.id
                        });
                        Object(r.w)(s) && (s = {
                            id: t.persoon.id,
                            volledigenaam: t.persoon.volledigenaam,
                            volgnummer: t.persoon.volgnummer,
                            kolommen: e.copy(i)
                        },
                        n.push(s)),
                        o.find(s.kolommen, function(e) {
                            return e.__kolomnummer === t.kolom.nummer
                        }).data.kolom = t.kolom
                    }),
                    n
                }
                ,
                t.$inject = ["$filter", t],
                t
            }()
        }
        ).call(this, i(1), i(3))
    },
    502: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return r
        });
        var o = i(94)
          , n = i(0)
          , r = function() {
            function e() {
                this.template = i(503),
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
            function e(e, t, i, n, r) {
                var s = this;
                this.$scope = e,
                this.$location = t,
                this.tabService = i,
                this.cijfersOverzichtCommunicator = n,
                this.cijfersService = r,
                this.fold = !1,
                this.userClicked = !1,
                n.subscribe(o.a.cijfer, function(e) {
                    s.setSelectedCijfer(e)
                }, this, e),
                n.subscribe(o.a.kolom, function(e) {
                    s.setSelectedKolom(e)
                }, this, e),
                n.subscribe(o.a.kolomInfo, function(e) {
                    s.setSelectedKolomInfo(e.extraInfo)
                }, this, e),
                n.subscribe(o.a.userClicked, function(e) {
                    s.userClicked = e
                }, this, e),
                this.fold = !1,
                this.blockFold = function() {
                    s.fold = !s.fold
                }
            }
            return e.prototype.setSelectedKolomInfo = function(e) {
                this.kolomInfo = e,
                this.$scope.$evalAsync()
            }
            ,
            e.prototype.setSelectedCijfer = function(e) {
                this.cijfer = e,
                this.$scope.$evalAsync(),
                this.setTabState()
            }
            ,
            e.prototype.setSelectedKolom = function(e) {
                this.kolom = e,
                this.$scope.$evalAsync(),
                this.setTabState()
            }
            ,
            e.prototype.openEloOpdracht = function() {
                var e = this;
                this.cijfer.isEloOpdracht && this.cijfersService.getEloOpdracht(this.cijfer).then(function(t) {
                    e.$location.path("/elo/opdrachten/" + t.Id)
                })
            }
            ,
            e.prototype.setTabState = function() {
                var e = this.tabService.getTab("idDetails");
                Object(n.w)(e) || Object(n.w)(this.kolom) || this.kolom.isGemiddelde || !this.userClicked || this.tabService.openTab(e)
            }
            ,
            e.$inject = ["$scope", "$location", "tabService", "cijfersOverzichtCommunicator", "cijfersService", e],
            e
        }()
    },
    503: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block" data-ng-class="{\'fold\': vm.fold}">\r\n        <h3 data-ng-click="vm.blockFold()"><span data-ng-class="{\'icon-up-arrow\': !vm.fold, \'icon-down-arrow\': vm.fold}"></span><b>Informatie</b></h3>\r\n        <div class="content">\r\n            <dl class="list-dl">\r\n                <dt>Kolomnaam</dt>\r\n                <dd>{{vm.cijfer.vak.code}}{{vm.kolom.nummer}}</dd>\r\n                \r\n                <dt>Kolomkop</dt>\r\n                <dd>{{vm.kolom.weergaveTitel}}</dd>\r\n                \r\n                <dt>Omschrijving</dt>\r\n                <dd data-ng-class="{\'content-more\': vm.kolomInfo.KolomOmschrijving.length > 0}" title="{{vm.kolomInfo.KolomOmschrijving}}">{{vm.kolomInfo.KolomOmschrijving}}</dd>\r\n                \r\n                <dt>Niveau</dt>\r\n                <dd>{{vm.kolomInfo.KolomNiveau}}</dd>\r\n                \r\n                <dt>Weging</dt>\r\n                <dd>{{vm.kolomInfo.Weging}}</dd>\r\n                \r\n                <dt>Beoordeling</dt>\r\n                <dd data-ng-class="{\'content-more\': vm.cijfer.waarde.length > 0}" title="{{vm.cijfer.waarde}}">{{vm.cijfer.waarde}}</dd>\r\n                \r\n                <dt>Invoer</dt>\r\n                <dd>{{vm.cijfer.ingevoerdOp | date:\'dd-MM-yyyy\'}}</dd>\r\n                \r\n                <dt>Docent</dt>\r\n                <dd>{{vm.cijfer.ingevoerdDoor.code}}</dd>\r\n                \r\n                <dt>Toetsdatum</dt>\r\n                <dd>{{vm.kolomInfo.WerkinformatieDatumIngevoerd | date:\'dd-MM-yyyy\'}}</dd>\r\n                \r\n                <dt>Werkomschrijving</dt>\r\n                <dd data-ng-class="{\'content-more\': vm.kolomInfo.WerkInformatieOmschrijving.length > 0}" title="{{vm.kolomInfo.WerkInformatieOmschrijving}}">{{vm.kolomInfo.WerkInformatieOmschrijving}}</dd>\r\n                \r\n                <dt>Soort</dt>\r\n                <dd><span data-ng-class="{gemiddeldecolumn: vm.cijfer.isGemiddelde}" title="{{vm.Kolomsoort[vm.kolom.soort]}}" data-ng-click="vm.openBerekendeKolom()">{{vm.Kolomsoort[vm.kolom.soort]}}</span></dd>\r\n                \r\n                <dt data-ng-show="vm.cijfer.isEloOpdracht">ELO-opdracht</dt>\r\n                <dd data-ng-show="vm.cijfer.isEloOpdracht"><a class="gemiddeldecolumn" data-ng-click="vm.openEloOpdracht()">opdracht detail</a></dd>\r\n            </dl>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
    },
    94: function(e, t, i) {
        "use strict";
        var o;
        i.d(t, "a", function() {
            return o
        }),
        function(e) {
            e[e.kolom = 0] = "kolom",
            e[e.gerelateerdeKolommen = 1] = "gerelateerdeKolommen",
            e[e.kolomweergave = 2] = "kolomweergave",
            e[e.cijfer = 3] = "cijfer",
            e[e.cijfers = 4] = "cijfers",
            e[e.kolomInfo = 5] = "kolomInfo",
            e[e.aanmeldingen = 6] = "aanmeldingen",
            e[e.aanmelding = 7] = "aanmelding",
            e[e.cijferPeriodes = 8] = "cijferPeriodes",
            e[e.selectedPeriodes = 9] = "selectedPeriodes",
            e[e.selectedVak = 10] = "selectedVak",
            e[e.periodes = 11] = "periodes",
            e[e.wijzigen = 12] = "wijzigen",
            e[e.verwijderen = 13] = "verwijderen",
            e[e.userClicked = 14] = "userClicked",
            e[e.cijferSoort = 15] = "cijferSoort",
            e[e.hasData = 16] = "hasData"
        }(o || (o = {}))
    }
}]);

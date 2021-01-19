(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
    110: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var a = Contracts.Agenda.Afspraken.Enums.AfspraakInfoType
          , i = function() {
            function e() {}
            return e.prototype.toetsTypeOmschrijving = function() {
                return function(e) {
                    switch (e) {
                    case a.Proefwerk:
                        return "Proefwerk";
                    case a.Tentamen:
                        return "Tentamen";
                    case a.SchriftelijkeOverhoring:
                        return "SO";
                    case a.MondelingeOverhoring:
                        return "MO";
                    default:
                        return "onbekend"
                    }
                }
            }
            ,
            e.prototype.afspraakStatus = function() {
                return function(e) {
                    var t = "";
                    return e && (e.isWijziging && (t = "alert"),
                    (e.afspraakType === Contracts.Agenda.Afspraken.Enums.AfspraakType.Les || e.afspraakType === Contracts.Agenda.Afspraken.Enums.AfspraakType.Algemeen || e.afspraakType === Contracts.Agenda.Afspraken.Enums.AfspraakType.Kwt) && e.id < 0 && (t += " alertRed")),
                    t
                }
            }
            ,
            e
        }()
    },
    139: function(e, t, n) {
        "use strict";
        (function(e, a) {
            n.d(t, "a", function() {
                return r
            });
            var i = n(0)
              , s = Contracts.Agenda.Afspraken.Enums.AfspraakType
              , r = function() {
                function t(t, n, a) {
                    this.$location = t,
                    this.$timeout = n,
                    this.settingsService = a,
                    this.toastDisplayTime = 5e3,
                    this.navigationSettingsDateKey = "AGENDA_NAVIGATION_SETTINGS_DATE",
                    this.viewTypes = [{
                        name: "afsprakenlijst",
                        type: "list",
                        selected: !1
                    }, {
                        name: "dagoverzicht",
                        type: "day",
                        selected: !1
                    }, {
                        name: "weekoverzicht",
                        type: "week",
                        selected: !1
                    }, {
                        name: "werkweekoverzicht",
                        type: "workWeek",
                        selected: !1
                    }],
                    "main_menu" === t.search().trk && (this.saveNavigatieDatum(e()),
                    t.search({}))
                }
                return t.prototype.selectViewType = function(e) {
                    var t = a.find(this.viewTypes, function(t) {
                        return e === t.type
                    });
                    Object(i.w)(t) || (a.each(this.viewTypes, function(e) {
                        e.selected = !1
                    }),
                    t.selected = !0)
                }
                ,
                t.prototype.getSelectedViewType = function() {
                    return a.find(this.viewTypes, function(e) {
                        return e.selected
                    })
                }
                ,
                t.prototype.openAfspraakDetails = function(e, t) {
                    var n = this;
                    if (void 0 === t && (t = "/agenda"),
                    this.heeftAfspraakDetails(e)) {
                        var a = "/agenda/" + (this.isLesDashboardNeeded(e) ? "huiswerk" : "afspraak") + "/" + e.id;
                        this.$timeout(function() {
                            n.$location.path(a).search("returnUrl", encodeURIComponent(t))
                        }, 0)
                    }
                }
                ,
                t.prototype.heeftAfspraakDetails = function(e) {
                    return !a.contains([s.Roostervrij, s.Standby, s.ExamenRooster, s.Studiehuis, s.RoostervrijeStudie, s.Stage, s.Intake, s.Maatregelen], e.afspraakType)
                }
                ,
                t.prototype.isLesDashboardNeeded = function(e) {
                    return e.afspraakType === s.Les || e.afspraakType === s.Kwt
                }
                ,
                t.prototype.toCrossBrowserDateString = function(e) {
                    return e.replace("0000Z", "Z")
                }
                ,
                t.prototype.isToets = function(e) {
                    var t = [Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.MondelingeOverhoring, Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.Proefwerk, Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.Tentamen, Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.SchriftelijkeOverhoring];
                    return a.any(t, function(t) {
                        return t === e
                    })
                }
                ,
                t.prototype.saveNavigatieDatum = function(e) {
                    this.settingsService.setSettingVolatile(this.navigationSettingsDateKey, e.toISOString())
                }
                ,
                t.prototype.loadNavigatieDatum = function(t) {
                    return e(this.settingsService.getSettingVolatile(this.navigationSettingsDateKey, t))
                }
                ,
                t
            }()
        }
        ).call(this, n(14), n(3))
    },
    140: function(e, t) {
        e.exports = '<div class="widget padding">\r\n    <div>\r\n        <span data-ng-bind-html="vm.inhoud"></span>\r\n    </div>\r\n</div>\r\n'
    },
    428: function(e, t, n) {
        "use strict";
        n.r(t),
        function(e) {
            n.d(t, "agendaAMD", function() {
                return y
            });
            var a = n(429)
              , i = n(430)
              , s = n(432)
              , r = n(110)
              , o = n(436)
              , c = n(437)
              , d = n(441)
              , p = n(442)
              , l = n(444)
              , u = n(445)
              , f = n(447)
              , h = n(450)
              , g = n(451)
              , A = n(453)
              , k = n(456)
              , m = n(458)
              , v = n(460)
              , w = n(462)
              , y = e.module("AgendaAMD", []);
            y.service("keuzewerktijdResource", o.a.$inject).service("agendaDashboardService", a.a.$inject),
            y.controller("agendaController", i.a.$inject).controller("afsprakenLijstController", s.a.$inject).controller("agendaAfspraakController", d.a.$inject).controller("agendaAfspraakNieuwController", p.a.$inject).controller("agendaHuiswerkController", l.a.$inject),
            y.directive("smAfsprakenLijst", c.a.$inject).directive("smAgendaAantekeningenDirective", f.a.$inject).directive("smAgendaAfspraakDetailBewerkenDirective", h.a.$inject).directive("smAgendaAfspraakDetailDirective", u.a.$inject).directive("smAgendaHuiswerkDetailDirective", g.a.$inject).directive("agendaInstellingen", A.a.$inject).directive("smAgendaKwtDeelnameDirective", k.a.$inject).directive("smAgendaLessenDagDirective", m.a.$inject).directive("smAgendaLessenVakDirective", v.a.$inject).directive("agendaLesuur", w.a.$inject),
            y.filter("toetsTypeOmschrijving", r.a.prototype.toetsTypeOmschrijving)
        }
        .call(this, n(1))
    },
    429: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var a = n(7)
          , i = function() {
            function e(e, t, n, a, i, s) {
                this.$q = e,
                this.$resource = t,
                this.applicationService = n,
                this.agendaResource = a,
                this.keuzewerktijdResource = i,
                this.magisterLocale = s
            }
            return e.prototype.addAfspraak = function(e, t) {
                return this.agendaResource.add(t, e)
            }
            ,
            e.prototype.removeAfspraak = function(e, t) {
                return this.agendaResource.delete(t, e)
            }
            ,
            e.prototype.getAfspraak = function(e, t, n) {
                return void 0 === n && (n = !0),
                this.agendaResource.getById(e, t, n)
            }
            ,
            e.prototype.updateAfspraak = function(e, t, n) {
                return this.agendaResource.update(e, t, n)
            }
            ,
            e.prototype.getAfspraakByDirection = function(e) {
                return this.agendaResource.getByDirection(e)
            }
            ,
            e.prototype.getKWTKeuzes = function(e, t, n) {
                var a = this
                  , i = this.$q.defer();
                return this.keuzewerktijdResource.get(e, t, n).then(function(e) {
                    i.resolve(e)
                }, function(e) {
                    a.handleErrorResult(e.data.Message),
                    i.reject(e)
                }),
                i.promise
            }
            ,
            e.prototype.getKWTKeuzeAfspraak = function(e, t) {
                var n = this
                  , a = this.$q.defer();
                return this.keuzewerktijdResource.getById(e, t).then(function(e) {
                    a.resolve(e)
                }, function(e) {
                    n.handleErrorResult(e.data.Message),
                    a.reject(e)
                }),
                a.promise
            }
            ,
            e.prototype.setKWTInschrijving = function(e, t) {
                return this.keuzewerktijdResource.add(e, t)
            }
            ,
            e.prototype.removeKWTInschrijving = function(e, t) {
                return this.keuzewerktijdResource.delete(e, t.Id)
            }
            ,
            e.prototype.handleErrorResult = function(e, t, n) {
                void 0 === t && (t = a.i.ERROR),
                void 0 === n && (n = 0),
                this.applicationService.showMessage(e, t, n)
            }
            ,
            e.$inject = ["$q", "$resource", "applicationService", "agendaResources", "keuzewerktijdResource", "magisterLocale", e],
            e
        }()
    },
    430: function(e, t, n) {
        "use strict";
        (function(e, a, i, s) {
            n.d(t, "a", function() {
                return A
            });
            var r, o = n(8), c = n(5), d = n(7), p = n(85), l = n(0), u = n(139), f = (r = Object.setPrototypeOf || {
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
            ), h = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var i in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }
            , g = Contracts.Agenda.Afspraken.Enums.AfspraakType, A = function(t) {
                function r(a, i, s, r, d, p, l, u, f, h, g, A, k) {
                    var m = t.call(this, r, s, g) || this;
                    m.$scope = a,
                    m.$routeParams = i,
                    m.$rootScope = d,
                    m.currentUser = p,
                    m.agendaDashboardService = l,
                    m.applicationService = u,
                    m.dialogService = f,
                    m.agendaService = h,
                    m.instellingService = A,
                    m.tabService = k,
                    m.kendoTemplate = n(431),
                    m.tabService.subscribeTabAdded(m.tabAdded, m),
                    a.tabState = m.tabService.tabState;
                    var v = m.getGeselecteerdeView(i.view)
                      , w = m.loadNavigatieDatum(e()).format("YYYY-MM-DD");
                    return m.initFromToDates(v, e(w)),
                    a.agendaDataSource = new kendo.data.SchedulerDataSource({
                        transport: {
                            read: function(e) {
                                return m.getAgendaItems(e)
                            }
                        }
                    }),
                    a.magNieuw = m.currentUser.hasPrivilege(c.a.Afspraken, o.a.Create),
                    a.weergaveTabIsActive = !0,
                    a.nieuweAfspraak = function() {
                        return m.redirectToNieuweAfspraak()
                    }
                    ,
                    a.bewerkenAfspraak = function() {
                        return m.redirectToBewerkenAfspraak()
                    }
                    ,
                    a.verwijderenAfspraak = function() {
                        return m.verwijderAfspraak()
                    }
                    ,
                    a.agendaOnChange = function(e) {
                        return m.verwerkAgendaSelectie(e)
                    }
                    ,
                    a.onChangeDate = function(e) {
                        return m.onChangeDate(e)
                    }
                    ,
                    a.updateFromToDates = function() {
                        return m.updateFromToDates(a)
                    }
                    ,
                    a.setCurrentTimePosition = function() {
                        return m.setCurrentTimePosition(0)
                    }
                    ,
                    a.updateTitle = function(e, t) {
                        return m.updateTitle(t, e)
                    }
                    ,
                    a.resetDetails = function() {
                        return m.resetDetails()
                    }
                    ,
                    a.changeSize = function(e) {
                        return m.changeSize(e)
                    }
                    ,
                    d.$on("MENU_TOGGLE", function() {
                        return m.onMenuToggle()
                    }),
                    a.$on("$destroy", function() {
                        s.cancel(m.asideToggleTimer),
                        s.cancel(m.menuToggleTimer)
                    }),
                    a.$watch("afsprakenCount", function(e) {
                        return m.onAfsprakenCountChange(e)
                    }),
                    m.selectViewType(v),
                    m.initAgendaOptions(v),
                    m.initAfspraakFilterCheckBoxes(),
                    m.initSizeOptions(),
                    m.updateTitle(e(m.vanDatum), v),
                    m.ensureAgendaAvailable(function(e) {
                        return m.onAgendaInitialized(e)
                    }),
                    m
                }
                return f(r, t),
                r.prototype.tabAdded = function(e) {
                    "idDetails" === e.id && this.tabService.openTab(e)
                }
                ,
                r.prototype.onChangeDate = function(e) {
                    this.$scope.agenda.date(e.toDate()),
                    this.$scope.updateFromToDates(this.$scope),
                    this.$scope.updateTitle(),
                    this.$scope.agendaDataSource.read(),
                    this.$scope.resetDetails(),
                    this.initializeSelectedDatePickerView(this.$scope.agenda)
                }
                ,
                r.prototype.onAgendaInitialized = function(e) {
                    this.initializeSelectedDatePickerView(this.$scope.agenda)
                }
                ,
                r.prototype.initializeSelectedDatePickerView = function(t) {
                    var n = t.view();
                    Object(l.w)(this.$scope.selectedView) ? this.$scope.selectedView = {
                        name: n.name,
                        selectedDate: e(t.options.date),
                        startDate: e(n.startDate()),
                        endDate: e(n.endDate())
                    } : (this.$scope.selectedView.name = n.name,
                    this.$scope.selectedView.selectedDate = e(t.options.date),
                    this.$scope.selectedView.startDate = e(n.startDate()),
                    this.$scope.selectedView.endDate = e(n.endDate()))
                }
                ,
                r.prototype.onAfsprakenCountChange = function(e) {
                    null != e && a.isDefined(e) && (this.$scope.dataAvailable = e > 0)
                }
                ,
                r.prototype.redirectToBewerkenAfspraak = function() {
                    this.$scope.magBewerken && this.$scope.kanBewerken && (Object(l.w)(this.$scope.agendaId) || this.$location.path("/agenda/afspraak/bewerken/" + this.$scope.agendaId))
                }
                ,
                r.prototype.redirectToNieuweAfspraak = function() {
                    Object(l.w)(this.$scope.start) || Object(l.w)(this.$scope.end) ? this.$location.path("/agenda/afspraak/nieuw") : this.$location.path("/agenda/afspraak/nieuw/" + this.$scope.start + "/" + this.$scope.end)
                }
                ,
                r.prototype.onMenuToggle = function() {
                    var e = this;
                    this.getGeselecteerdeView(this.$routeParams.view);
                    this.menuToggleTimer = this.$timeout(function() {
                        e.resizeScheduler()
                    }, 750)
                }
                ,
                r.prototype.resetDetails = function() {
                    this.$scope.weergaveTabIsActive = !0,
                    this.$scope.agendaLesuurEvent && (this.$scope.agendaLesuurEvent.begin = null,
                    this.$scope.agendaLesuurEvent.einde = null,
                    this.$scope.agendaLesuurEvent.omschrijving = "",
                    this.$scope.agendaLesuurEvent.locatie = "",
                    this.$scope.agendaLesuurEvent.vak = null,
                    this.$scope.agendaLesuurEvent.lokaal = null,
                    this.$scope.agendaLesuurEvent.docent = null,
                    this.$scope.agendaLesuurEvent.absentieType = null,
                    this.$scope.agendaLesuurEvent.absentieOmschrijving = null,
                    this.$scope.agendaLesuurEvent.isToets = null)
                }
                ,
                r.prototype.verwijderAfspraak = function() {
                    var e = this;
                    this.$scope.magVerwijderen && this.$scope.kanVerwijderen && this.dialogService.showConfirm("Afspraak verwijderen", "De afspraak definitief verwijderen?", [p.a.Ok, p.a.Cancel], function(t) {
                        t.clickedButtonType === p.a.Ok && e.agendaDashboardService.removeAfspraak(e.$scope.agendaId, e.currentUser.relatedPersons.current.id).then(function() {
                            e.applicationService.showMessage("Afspraak is verwijderd", d.i.INFORMATION, e.toastDisplayTime),
                            e.$scope.agendaDataSource = new kendo.data.SchedulerDataSource({
                                transport: {
                                    read: function(t) {
                                        return e.getAgendaItems(t)
                                    }
                                }
                            })
                        })
                    })
                }
                ,
                r.prototype.resizeScheduler = function() {
                    var e = i("#scheduler");
                    if (a.isDefined(e)) {
                        var t = e.data("kendoScheduler");
                        a.isDefined(t) && t.resize()
                    }
                }
                ,
                r.prototype.verwerkAgendaSelectie = function(t) {
                    var n = this;
                    if (t) {
                        t.preventDefault();
                        var a = t.events && t.events.length ? t.events[0] : void 0;
                        if (Object(l.w)(a))
                            this.$scope.start = e(t.start).format(),
                            this.$scope.end = e(t.end).format();
                        else if (a && 0 !== a.id || a.afspraakType === g.Maatregelen) {
                            var s = i("#" + t.sender._ariaId)
                              , r = !1;
                            s.off("click");
                            var o = this.getSelectedViewType().type;
                            "day" === o && (o = "dag");
                            var c = "/agenda/" + o;
                            s.is("tr") ? s.on("click", function() {
                                var e = s.hasClass("k-state-selected");
                                r && e ? n.openAfspraakDetails(a, c) : r = !0
                            }) : s.is("div") && s.on("click", function() {
                                var e = s.hasClass("k-state-selected");
                                r && e ? n.openAfspraakDetails(a, c) : r = !0
                            }),
                            this.selecteerAgendaItem(a),
                            this.$scope.start = e(a.begin).format(),
                            this.$scope.end = e(a.einde).format();
                            var d = this.tabService.getTab("idDetails");
                            Object(l.w)(d) || this.tabService.openTab(d)
                        } else
                            this.$scope.selectedAgendaItem = null,
                            this.deselecteerAgendaItem(a),
                            Object(l.w)(t.start) || Object(l.w)(t.end) || (this.$scope.start = e(t.start).format(),
                            this.$scope.end = e(t.end).format());
                        this.$scope.previousAgendaItem = a
                    }
                }
                ,
                r.prototype.deselecteerAgendaItem = function(e) {
                    var t = this.tabService.getTab("idWeergave");
                    Object(l.w)(t) || this.tabService.openTab(t),
                    this.$scope.selectedAgendaItem = null,
                    this.$scope.resetDetails(),
                    this.$scope.weergaveTabIsActive = !0,
                    this.$scope.magBewerken = this.currentUser.hasPrivilege(c.a.Afspraken, o.a.Update),
                    this.$scope.kanBewerken = !1,
                    this.$scope.magVerwijderen = this.currentUser.hasPrivilege(c.a.Afspraken, o.a.Delete),
                    this.$scope.kanVerwijderen = !1
                }
                ,
                r.prototype.selecteerAgendaItem = function(e) {
                    this.$scope.agendaId = e.id,
                    this.$scope.agendaLesuurEvent = e;
                    var t = e.afspraakType === Contracts.Agenda.Afspraken.Enums.AfspraakType.Persoonlijk || e.afspraakType === Contracts.Agenda.Afspraken.Enums.AfspraakType.Planning;
                    this.$scope.magBewerken = this.currentUser.hasPrivilege(c.a.Afspraken, o.a.Update),
                    this.$scope.kanBewerken = t && this.$scope.magBewerken,
                    this.$scope.magVerwijderen = this.currentUser.hasPrivilege(c.a.Afspraken, o.a.Delete),
                    this.$scope.kanVerwijderen = t && this.$scope.magVerwijderen
                }
                ,
                r.prototype.initFromToDates = function(t, n) {
                    var a, i;
                    switch (t) {
                    case "day":
                        a = e(n),
                        i = e(n);
                        break;
                    case "week":
                        a = e(n).weekday(0),
                        i = e(n).weekday(6);
                        break;
                    case "workWeek":
                        a = e(n).weekday(0),
                        i = e(n).weekday(4);
                        break;
                    default:
                        a = e(n),
                        i = e(a).add("days", 7)
                    }
                    this.vanDatum = a.format("YYYY-MM-DD"),
                    this.totDatum = i.format("YYYY-MM-DD")
                }
                ,
                r.prototype.updateTitle = function(t, n) {
                    if (null == n || null == t) {
                        var a = this.$scope.agenda.view();
                        n = a.name,
                        t = e(a.startDate())
                    }
                    switch (e.lang("nl"),
                    n) {
                    case "day":
                        this.$scope.viewName = t.format("dddd D MMMM");
                        break;
                    case "week":
                        this.$scope.viewName = "Week " + t.format("w, MMMM");
                        break;
                    case "workWeek":
                        this.$scope.viewName = "Werkweek " + t.format("w, MMMM");
                        break;
                    default:
                        this.$scope.viewName = "Afsprakenlijst"
                    }
                }
                ,
                r.prototype.updateFromToDates = function(t) {
                    var n = t.agenda.view()
                      , a = e(n.startDate())
                      , i = e(n.endDate());
                    this.vanDatum = a.format("YYYY-MM-DD"),
                    0 === a.diff(i, "days") && i.add("days", 1),
                    this.totDatum = i.format("YYYY-MM-DD"),
                    this.saveNavigatieDatum(e(this.vanDatum, "YYYY-MM-DD"))
                }
                ,
                r.prototype.getAgendaItems = function(e) {
                    var t = this;
                    e.success([]),
                    this.agendaService.getAfspraken(this.currentUser.relatedPersons.current.id, this.vanDatum, this.totDatum, !0).then(function(n) {
                        var a = t.agendaService.mapItemsToViewModel(n)
                          , i = t.mapAgendaItems(a);
                        t.$scope.afsprakenCount = i.length,
                        t.agendaData = i,
                        e.success(t.agendaData),
                        t.setCurrentTimePosition(0),
                        t.selecteerEersteAgendaItemMetJQuery(i)
                    })
                }
                ,
                r.prototype.selecteerEersteAgendaItemMetJQuery = function(e) {
                    null != e && 0 !== e.length && this.$timeout(function() {
                        var t = s.find(e, function(e) {
                            return i("#" + e.id).length > 0
                        });
                        if (a.isDefined(t) && null != t) {
                            var n = i("#" + t.id);
                            a.isDefined(kendo.support.mobileOS) && kendo.support.mobileOS && !1 !== kendo.support.mobileOS.tablet ? (n.trigger("touchstart"),
                            n.trigger("touchend")) : (n.trigger("mousedown"),
                            n.trigger("mouseup"))
                        }
                    }, 500)
                }
                ,
                r.prototype.mapAgendaItems = function(e) {
                    var t = s.chain(this.$scope.afspraakTypes).map(function(e) {
                        return e.selected ? e.types : null
                    }).flatten().value();
                    return e.filter(function(e) {
                        return t.some(function(t) {
                            return t === e.afspraakType
                        })
                    }).map(function(e) {
                        return h({}, e, {
                            start: e.begin.toDate(),
                            end: e.einde.toDate(),
                            schoolHour: e.lesuur
                        })
                    })
                }
                ,
                r.prototype.selectViewType = function(e) {
                    t.prototype.selectViewType.call(this, e),
                    this.$scope.viewTypes = this.viewTypes
                }
                ,
                r.prototype.initAgendaOptions = function(t) {
                    var n = this
                      , a = this.vanDatum
                      , r = this.totDatum
                      , o = e(a + " 07:30").toDate()
                      , c = e(r + " 18:00").toDate()
                      , d = "#if(date.getHours() === " + o.getHours() + " ){ # <div id='sm-start-workhour'></div> #}# #if ( date.getHours() === (moment().toDate()).getHours() ){ # <div id='sm-now'></div><strong class='sm-now'> # } else { # <strong id='hour#=kendo.toString(date, 'HH')#'> # } # #=kendo.toString(date, 'HH')#</strong>"
                      , p = +i("#scheduler").parents(".content-container").first().height();
                    this.$scope.agendaOptions = {
                        height: p,
                        footer: !1,
                        date: e(a).toDate(),
                        messages: {
                            allDay: "dag"
                        },
                        selectable: !0,
                        editable: !1,
                        dateHeaderTemplate: kendo.template(""),
                        minorTickCount: 2,
                        majorTimeHeaderTemplate: kendo.template(d),
                        views: [],
                        change: function(e) {
                            return n.verwerkAgendaSelectie(e)
                        },
                        workDayStart: o,
                        workDayEnd: c
                    },
                    s.each(this.viewTypes, function(e) {
                        n.setAgendaViewType(e, t)
                    })
                }
                ,
                r.prototype.ensureAgendaAvailable = function(e) {
                    if (a.isUndefined(this.$scope.agenda))
                        var t = this.$scope.$watch("agenda", function(n) {
                            Object(l.w)(n) || (t(),
                            e(n))
                        });
                    else
                        e(this.$scope.agenda)
                }
                ,
                r.prototype.changeSize = function(e) {
                    var t = this;
                    this.ensureAgendaAvailable(function(n) {
                        n.options.minorTickCount = e,
                        n.view(n.view().name),
                        t.$scope.resetDetails(),
                        t.$scope.setCurrentTimePosition()
                    })
                }
                ,
                r.prototype.setAgendaViewType = function(e, t) {
                    switch (e.type) {
                    case "day":
                        this.$scope.agendaOptions.views.push({
                            type: e.type,
                            title: e.name,
                            selected: t === e.type,
                            eventTemplate: this.kendoTemplate,
                            dateHeaderTemplate: void 0
                        });
                        break;
                    case "week":
                    case "workWeek":
                        this.$scope.agendaOptions.views.push({
                            type: e.type,
                            title: e.name,
                            selected: t === e.type,
                            eventTemplate: this.kendoTemplate,
                            dateHeaderTemplate: kendo.template("#=kendo.toString(date, 'ddd dd')#")
                        })
                    }
                }
                ,
                r.prototype.initSizeOptions = function() {
                    this.$scope.sizeOptions = [{
                        minorTickCount: 6,
                        title: "groot (10 minuten)"
                    }, {
                        minorTickCount: 4,
                        title: "normaal (15 minuten)"
                    }, {
                        minorTickCount: 2,
                        title: "klein (30 minuten)"
                    }]
                }
                ,
                r.prototype.initAfspraakFilterCheckBoxes = function() {
                    var e = s.filter(Contracts.Agenda.Afspraken.Enums.AfspraakType, function(e) {
                        return e !== Contracts.Agenda.Afspraken.Enums.AfspraakType.Les && e !== Contracts.Agenda.Afspraken.Enums.AfspraakType.Kwt
                    })
                      , t = [{
                        name: "lesrooster",
                        types: [Contracts.Agenda.Afspraken.Enums.AfspraakType.Les, Contracts.Agenda.Afspraken.Enums.AfspraakType.Kwt],
                        selected: !0
                    }, {
                        name: "afspraak",
                        types: e,
                        selected: !0
                    }];
                    this.$scope.afspraakTypes = t
                }
                ,
                r.prototype.setCurrentTimePosition = function(e) {
                    if (0 !== i("div#sm-now").length)
                        for (var t = i("#scheduler").data("kendoScheduler"), n = t.element.find("div.k-scheduler-content"), a = n.find("tr"), s = 0; s < a.length; s++) {
                            var r = t.slotByElement(a[s]);
                            if ("08" === kendo.toString(r.startDate, "HH")) {
                                this.scrollTo(t, i(a[s]).find("td:first")[0], n[0]);
                                break
                            }
                        }
                }
                ,
                r.prototype.scrollTo = function(e, t, n) {
                    e.view()._touchScroller ? e.view()._touchScroller.scrollTo(0, -t.offsetTop) : n.scrollTop = t.offsetTop
                }
                ,
                r.prototype.getGeselecteerdeView = function(e) {
                    return void 0 === e && (e = "week"),
                    "dag" === e ? "day" : "werkweek" === e ? "workWeek" : e
                }
                ,
                r.$inject = ["$scope", "$routeParams", "$timeout", "$location", "$rootScope", "currentUser", "agendaDashboardService", "applicationService", "dialogService", "agendaService", "settingsService", "instellingService", "tabService", r],
                r
            }(u.a)
        }
        ).call(this, n(14), n(1), n(15), n(3))
    },
    431: function(e, t) {
        e.exports = '<div class="afspraak">\n    <div class="afspraak-info">\n        <div class="title">\n            <span class="schoolHour" ng-if="dataItem.heeftLesUur">\n                {{ dataItem.schoolHour }}\n            </span>\n            <div id="{{dataItem.id.toString()}}" class="afspraak-title">\n                <strong class="title">{{ dataItem.title }}</strong>\n            </div>\n        </div>\n        <div class="afspraak-time">\n            #= kendo.toString(start, "HH:mm") # - #= kendo.toString(end, "HH:mm") #\n            <span ng-if="dataItem.locatie !== undefined && dataItem.locatie !== null && dataItem.locatie.length">\n                ({{ dataItem.locatie }})\n            </span>\n        </div>\n    </div>\n\n    <div class="icons-right">\n        <div class="icon-block">\n            <span data-ng-if="dataItem.heeftBijlagen" class="text-icon icon-only">\n                <i class="far fa-paperclip"></i>\n            </span>\n            <span data-ng-if="dataItem.isHerhalend" class="text-icon icon-only">\n                <i class="fas fa-repeat-alt"></i>\n            </span>\n\n            \x3c!--huiswerk--\x3e\n            <span data-ng-if="(!dataItem.heeftProefwerk && !dataItem.heeftTussentijdseToets && !dataItem.heeftSchriftelijkeOverhoring\n                    && !dataItem.heeftMondelingeOverhoring && !dataItem.isExamen) \n                    && (dataItem.heeftOnafgerondHuiswerk || dataItem.heeftAfgerondHuiswerk)"\n                ng-class="{ \'outline\' : !dataItem.heeftAfgerondHuiswerk }" class="agenda-text-icon"\n                icon-type="{{dataItem.heeftAfgerondHuiswerk ? \'ok\': \'information\'}}">Huiswerk</span>\n\n            <span data-ng-if="dataItem.heeftInformatie" class="agenda-text-icon outline"\n                icon-type="information">Informatie</span>\n\n            \x3c!--toetsen--\x3e\n            <span data-ng-if="dataItem.heeftProefwerk" class="text-icon" icon-type="information">Proefwerk</span>\n            <span data-ng-if="dataItem.heeftTussentijdseToets" class="text-icon" icon-type="information">Tentamen</span>\n            <span data-ng-if="dataItem.heeftSchriftelijkeOverhoring" class="text-icon" icon-type="information">SO</span>\n            <span data-ng-if="dataItem.heeftMondelingeOverhoring" class="text-icon" icon-type="information">MO</span>\n            <span data-ng-if="dataItem.isExamen" class="text-icon" icon-type="information">Examen</span>\n\n            \x3c!-- absentie, [1,3,6] = absent, ziek, vrijstelling --\x3e\n            <span data-ng-if="dataItem.isAbsent && dataItem.absentieType === 2" class="text-icon"\n                icon-type="ok">AB</span>\n            <span data-ng-if="dataItem.isAbsent && dataItem.absentieType === 3" class="text-icon"\n                icon-type="error">AB</span>\n\n            <span data-ng-if="dataItem.isZiek && dataItem.absentieType === 2" class="text-icon" icon-type="ok">ZK</span>\n            <span data-ng-if="dataItem.isZiek && dataItem.absentieType === 3" class="text-icon"\n                icon-type="error">ZK</span>\n\n            <span data-ng-if="dataItem.heeftVrijstelling" class="text-icon" icon-type="ok">VR</span>\n        </div>\n    </div>\n</div>'
    },
    432: function(e, t, n) {
        "use strict";
        (function(e, a, i) {
            n.d(t, "a", function() {
                return k
            });
            var s, r = n(8), o = n(5), c = n(7), d = n(85), p = n(0), l = n(100), u = n(433), f = n(139), h = (s = Object.setPrototypeOf || {
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
                s(e, t),
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
            }
            ), g = Contracts.Agenda.Afspraken.Enums.AfspraakType, A = Contracts.Agenda.Afspraken.Enums.AfspraakInfoType, k = function(t) {
                function n(n, a, i, s, c, d, p, l, u, f, h) {
                    var g = t.call(this, s, i, l) || this;
                    g.$scope = n,
                    g.$q = a,
                    g.applicationService = c,
                    g.dialogService = d,
                    g.agendaService = p,
                    g.$filter = u,
                    g.currentUser = f,
                    g.tabService = h,
                    g.magVerwijderen = !1,
                    g.magBewerken = !1,
                    g.magNieuw = !1,
                    g.kanVerwijderen = !1,
                    g.kanBewerken = !1,
                    g.showHuiswerk = !1,
                    t.prototype.selectViewType.call(g, "list"),
                    g.tabService.subscribeTabAdded(g.tabAdded, g),
                    g.tabState = g.tabService.tabState,
                    g.onChangeDate = function(e) {
                        return g.onChangeDateImpl(e)
                    }
                    ,
                    g.onChangeShowHuiswerk = function(e) {
                        return g.onChangeShowHuiswerkImpl(e)
                    }
                    ,
                    g.onAfsprakenLijstSelectionChanged = function(e, t) {
                        return void 0 === t && (t = !1),
                        g.onAfsprakenLijstSelectionChangedImpl(e, t)
                    }
                    ,
                    g.nieuweAfspraak = function() {
                        return g.nieuweAfspraakImpl()
                    }
                    ,
                    g.bewerkenAfspraak = function() {
                        return g.bewerkenAfspraakImpl()
                    }
                    ,
                    g.bevestigVerwijderenAfspraak = function() {
                        return g.bevestigVerwijderenAfspraakImpl()
                    }
                    ,
                    g.afdrukkenAfspraak = function() {
                        return g.afdrukkenAfspraakImpl()
                    }
                    ;
                    var A = g.loadNavigatieDatum(e());
                    return g.initializeDates(A),
                    g.initializeSelectedDatePickerView(g.start, g.end),
                    g.loadAfspraken(g.start, g.end, g.showHuiswerk),
                    g.magNieuw = g.currentUser.hasPrivilege(o.a.Afspraken, r.a.Create),
                    g.magBewerken = g.currentUser.hasPrivilege(o.a.Afspraken, r.a.Update),
                    g.magVerwijderen = g.currentUser.hasPrivilege(o.a.Afspraken, r.a.Delete),
                    g.kanBewerken = !1,
                    g.kanVerwijderen = !1,
                    g
                }
                return h(n, t),
                n.prototype.tabAdded = function(e) {
                    "idDetails" === e.id && this.tabService.openTab(e)
                }
                ,
                n.prototype.initializeDates = function(e) {
                    this.start = e.clone().startOf("day"),
                    this.end = this.start.clone().add("days", 7)
                }
                ,
                n.prototype.onChangeDateImpl = function(e) {
                    this.saveNavigatieDatum(e),
                    this.initializeDates(e),
                    this.initializeSelectedDatePickerView(this.start, this.end),
                    this.loadAfspraken(this.start, this.end, this.showHuiswerk)
                }
                ,
                n.prototype.onChangeShowHuiswerkImpl = function(e) {
                    this.showHuiswerk !== e && (this.showHuiswerk = e,
                    this.loadAfspraken(this.start, this.end, this.showHuiswerk))
                }
                ,
                n.prototype.onAfsprakenLijstSelectionChangedImpl = function(e, t) {
                    var n = this;
                    if (e)
                        if (this.afspraak = e,
                        this.$timeout(function() {
                            n.$scope.$apply()
                        }),
                        t)
                            this.openAfspraakDetails(e, "/agenda");
                        else {
                            var a = this.tabService.getTab("idDetails");
                            Object(p.w)(a) || this.tabService.openTab(a);
                            var i = e.afspraakType === g.Persoonlijk || e.afspraakType === g.Planning;
                            this.kanBewerken = i,
                            this.kanVerwijderen = i
                        }
                }
                ,
                n.prototype.loadAfspraken = function(e, t, n) {
                    var a = this;
                    void 0 === n && (n = !1);
                    var i = l.b.Actief;
                    n && (i = l.b.Alle),
                    this.agendaService.getAfspraken(this.currentUser.relatedPersons.current.id, e.format("YYYY-MM-DD"), t.format("YYYY-MM-DD"), !0, "1,3", i).then(function(i) {
                        var s = a.agendaService.mapItemsToViewModel(i);
                        s = a.processAfsprakenOverMeerdereDagen(s, e, t),
                        n && (s = a.filterAfsprakenOpHuiswerk(s, n)),
                        a.afspraken = s
                    })
                }
                ,
                n.prototype.processAfsprakenOverMeerdereDagen = function(t, n, s) {
                    var r = [];
                    return a.each(t, function(t) {
                        var a = t.einde.diff(t.begin, "days") + 1;
                        if (a > 1 || !t.isHeleDag)
                            for (var o = 1; o < a; o++) {
                                var c = e(t.datumBegin).add("days", o).toDate();
                                if (!(c < n.toDate() || c > s.toDate())) {
                                    var d = i.copy(t);
                                    d.datumBegin = c,
                                    r.push(d)
                                }
                            }
                        t.huiswerk && (t.huiswerk = t.huiswerk.replace(/<[(p)(\/p)(div)(br)].*?>/gm, " ").replace(/<[^>]+>/gm, ""))
                    }),
                    t = a.union(t, r),
                    a.filter(t, function(e) {
                        return e.datumBegin >= n.toDate() && e.datumBegin <= s.toDate()
                    })
                }
                ,
                n.prototype.filterAfsprakenOpHuiswerk = function(e, t) {
                    return t ? a.filter(e, function(e) {
                        return e.infoType === A.Huiswerk || e.infoType === A.MondelingeOverhoring || e.infoType === A.Proefwerk || e.infoType === A.SchriftelijkeOverhoring || e.infoType === A.Tentamen || null !== e.huiswerk && !0 === e.isAfgerond || !0 === e.heeftBijlagen
                    }) : a.filter(e, this.filterOpVervallenStatus)
                }
                ,
                n.prototype.filterOpVervallenStatus = function(e) {
                    return e.status !== Contracts.Agenda.Afspraken.Enums.AfspraakStatus.VervallenAutomatisch && e.status !== Contracts.Agenda.Afspraken.Enums.AfspraakStatus.VervallenHandmatig
                }
                ,
                n.prototype.initializeSelectedDatePickerView = function(e, t) {
                    Object(p.w)(this.view) ? this.view = {
                        name: "list",
                        selectedDate: e,
                        startDate: e,
                        endDate: t
                    } : (this.view.name = "list",
                    this.view.selectedDate = e,
                    this.view.startDate = e,
                    this.view.endDate = t)
                }
                ,
                n.prototype.nieuweAfspraakImpl = function() {
                    !this.afspraak || Object(p.w)(this.afspraak.begin) || Object(p.w)(this.afspraak.einde) ? this.$location.path("/agenda/afspraak/nieuw") : this.$location.path("/agenda/afspraak/nieuw/" + this.afspraak.begin.format() + "/" + this.afspraak.einde.format())
                }
                ,
                n.prototype.bewerkenAfspraakImpl = function() {
                    !Object(p.w)(this.afspraak.id) && this.kanBewerken && this.magBewerken && this.$location.path("/agenda/afspraak/bewerken/" + this.afspraak.id)
                }
                ,
                n.prototype.bevestigVerwijderenAfspraakImpl = function() {
                    var e = this;
                    this.magVerwijderen && this.kanVerwijderen && this.dialogService.showConfirm("Afspraak verwijderen", "De afspraak definitief verwijderen?", [d.a.Ok, d.a.Cancel], function(t) {
                        t.clickedButtonType === d.a.Ok && e.verwijderAfspraak()
                    })
                }
                ,
                n.prototype.afdrukkenAfspraakImpl = function() {
                    new u.a(this.$q,this.$filter,this.currentUser.person,this.currentUser.relatedPersons.current).exportPdf(this.afspraken)
                }
                ,
                n.prototype.verwijderAfspraak = function() {
                    var e = this;
                    this.agendaService.removeAfspraak(this.afspraak.id, this.currentUser.relatedPersons.current.id).then(function() {
                        e.applicationService.showMessage("Afspraak is verwijderd", c.i.INFORMATION, e.toastDisplayTime),
                        e.afspraken = a.filter(e.afspraken, function(t) {
                            return e.afspraak.id !== t.id
                        })
                    })
                }
                ,
                n.$inject = ["$scope", "$q", "$timeout", "$location", "applicationService", "dialogService", "agendaService", "settingsService", "$filter", "currentUser", "tabService", n],
                n
            }(f.a)
        }
        ).call(this, n(14), n(3), n(1))
    },
    433: function(e, t, n) {
        "use strict";
        (function(e, a, i) {
            n.d(t, "a", function() {
                return o
            });
            var s = n(434)
              , r = n(435)
              , o = function() {
                function t(e, t, n, a) {
                    this.$q = e,
                    this.$filter = t,
                    this.gebruiker = n,
                    this.leerling = a,
                    this.agendaExportHelper = new r.a,
                    this.separatorDateFormat = "dddd D MMMM"
                }
                return t.prototype.exportPdf = function(e) {
                    var t = this;
                    if (window.pdfMake)
                        return this.writePdf(e);
                    var a = this.$q.defer();
                    return n.e(13).then(n.bind(null, 654)).then(function() {
                        t.writePdf(e).then(function() {
                            a.resolve()
                        })
                    }),
                    a.promise
                }
                ,
                t.prototype.writePdf = function(e) {
                    var t = this.$q.defer();
                    return this.createDocumentDefinition(e).then(function(e) {
                        pdfMake.createPdf(e).download("Afsprakenlijst.pdf", function() {
                            t.resolve()
                        })
                    }),
                    t.promise
                }
                ,
                t.prototype.createDocumentDefinition = function(e) {
                    var t = this.$q.defer();
                    return t.resolve(this.generate(e)),
                    t.promise
                }
                ,
                t.prototype.generate = function(e) {
                    var t = this;
                    return {
                        info: {
                            title: "Afsprakenlijst",
                            author: "gebruiker"
                        },
                        pageSize: "A4",
                        pageOrientation: "portrait",
                        footer: function(e, n) {
                            return {
                                columns: [{
                                    text: "Gebruiker: " + t.gebruiker.fullName,
                                    fontSize: 8,
                                    margin: [40, 0, 0, 0]
                                }, {
                                    text: t.$filter("date")(new Date, "d MMMM yyyy HH:mm:ss"),
                                    alignment: "center",
                                    fontSize: 8
                                }, {
                                    text: e.toString() + " van " + n,
                                    alignment: "right",
                                    fontSize: 8,
                                    margin: [0, 0, 40, 0]
                                }]
                            }
                        },
                        content: this.buildContent(e),
                        images: {
                            pw: s.a.PW_IMG,
                            hw_information: s.a.HW_INFORMATION_IMG,
                            hw_ok: s.a.HW_OK_IMG,
                            mo: s.a.MO_IMG,
                            so: s.a.SO_IMG,
                            tt: s.a.TT_IMG,
                            ex: s.a.EX_IMG,
                            paperclip: s.a.PC_IMG,
                            ab_ok: s.a.AB_OK_IMG,
                            ab_error: s.a.AB_ERROR_IMG,
                            zk_ok: s.a.ZK_OK_IMG,
                            zk_error: s.a.ZK_ERROR_IMG,
                            vr: s.a.VR_IMG,
                            herhaling: s.a.HERHALING,
                            informatie: s.a.INFO
                        },
                        styles: {
                            header: {
                                fontSize: 16
                            },
                            normal: {
                                fontSize: 10
                            },
                            blokuur: {
                                fontSize: 10,
                                bold: !0
                            },
                            subheader: {
                                fontSize: 14
                            }
                        }
                    }
                }
                ,
                t.prototype.buildContent = function(t) {
                    var n = this
                      , i = [{
                        text: "Afsprakenlijst van " + this.leerling.fullName,
                        style: "header",
                        margin: [0, 0, 0, 12]
                    }]
                      , s = e.uniq(t, function(e) {
                        return a(e.datumBegin).format("YYYY-MM-DD")
                    });
                    return e.each(s, function(s) {
                        var r = e.filter(t, function(e) {
                            return a(e.datumBegin).format("YYYY-MM-DD") === a(s.datumBegin).format("YYYY-MM-DD")
                        });
                        i.push([{
                            text: a(s.datumBegin).format(n.separatorDateFormat),
                            style: "subheader",
                            margin: [0, 10, 0, 5]
                        }, n.renderDayGrid(a(s).format("YYYY-MM-DD"), r)])
                    }),
                    i
                }
                ,
                t.prototype.renderDayGrid = function(t, n) {
                    var a = this
                      , i = [];
                    return i.push({
                        table: {
                            widths: [60, 120, 70, "*"],
                            body: []
                        },
                        layout: {
                            hLineWidth: function() {
                                return 1
                            },
                            vLineWidth: function() {
                                return 0
                            },
                            hLineColor: function() {
                                return "gray"
                            },
                            vLineColor: function() {
                                return "gray"
                            },
                            paddingTop: function() {
                                return 2
                            },
                            paddingBottom: function() {
                                return 2
                            }
                        }
                    }),
                    e.each(n, function(e) {
                        var n = [];
                        n.push(a.renderKolom1(t, e)),
                        n.push(a.renderKolom2(e)),
                        n.push(a.renderKolom3(e)),
                        n.push(a.renderKolom4(e)),
                        i[0].table.body.push(n)
                    }),
                    i
                }
                ,
                t.prototype.renderKolom1 = function(e, t) {
                    return {
                        text: this.agendaExportHelper.getShortTime(t, e),
                        style: "normal"
                    }
                }
                ,
                t.prototype.renderKolom2 = function(e) {
                    var t = e.lesuur
                      , n = 0;
                    t.length > 0 && (n = 7);
                    var a = e.title;
                    return e.locatie && e.magLocatieZien && (a += " (" + e.locatie + ")"),
                    {
                        columns: [{
                            width: "auto",
                            text: t,
                            style: "blokuur"
                        }, {
                            width: "*",
                            text: a,
                            style: "normal"
                        }],
                        columnGap: n
                    }
                }
                ,
                t.prototype.renderKolom3 = function(e) {
                    var t = [];
                    switch (this.getAbsentieIcons(e, t),
                    e.infoType) {
                    case Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.Huiswerk:
                        this.getHuiswerkIcons(e, t);
                        break;
                    case Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.Proefwerk:
                        this.addIcon("pw", t, 40);
                        break;
                    case Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.Tentamen:
                        this.addIcon("tt", t, 40);
                        break;
                    case Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.SchriftelijkeOverhoring:
                        this.addIcon("so", t, 20);
                        break;
                    case Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.MondelingeOverhoring:
                        this.addIcon("mo", t, 20);
                        break;
                    case Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.Informatie:
                        this.addIcon("informatie", t, 40)
                    }
                    return e.heeftBijlagen && this.addIcon("paperclip", t),
                    e.isHerhalend && this.addIcon("herhaling", t),
                    {
                        columns: t,
                        columnGap: 2
                    }
                }
                ,
                t.prototype.renderKolom4 = function(e) {
                    var t = "-";
                    return e.huiswerk && (t = this.htmlToText(e.huiswerk)),
                    {
                        text: t,
                        style: "normal"
                    }
                }
                ,
                t.prototype.getAbsentieIcons = function(e, t) {
                    e.isAbsent && (2 === e.absentieType && this.addIcon("ab_ok", t),
                    3 === e.absentieType && this.addIcon("ab_error", t)),
                    e.isZiek && (2 === e.absentieType && this.addIcon("zk_ok", t),
                    3 === e.absentieType && this.addIcon("zk_error", t)),
                    e.heeftVrijstelling && this.addIcon("vr", t)
                }
                ,
                t.prototype.getHuiswerkIcons = function(e, t) {
                    (e.heeftOnafgerondHuiswerk || e.heeftAfgerondHuiswerk) && (e.isAfgerond ? this.addIcon("hw_ok", t, 40) : this.addIcon("hw_information", t, 40))
                }
                ,
                t.prototype.addIcon = function(e, t, n) {
                    void 0 === n && (n = 12),
                    t.push({
                        image: e,
                        height: 12,
                        width: n
                    })
                }
                ,
                t.prototype.htmlToText = function(e) {
                    var t;
                    t = String(e).replace(/<[(p)(div)].*?>/gm, " "),
                    t = String(t).replace(/<[(br)^>]+>/gm, " "),
                    t = String(t).replace(/<[^>]+>/gm, ""),
                    t = i("<div/>").html(t).text();
                    do {
                        t = t.replace("  ", " ").trim()
                    } while (t.indexOf("  ") > -1);return t
                }
                ,
                t
            }()
        }
        ).call(this, n(3), n(14), n(15))
    },
    434: function(e, t, n) {
        "use strict";
        var a;
        n.d(t, "a", function() {
            return a
        }),
        function(e) {
            e.PC_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAApCAYAAAC2qTBFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJkSURBVFhH7Zfxa9pAFMf3//8gUonFsIiFDDuCKDKErkTsUFxxFKltN6kbJS1p7XA0TEGc5bu7+JLGTi8xXkd/yAfuh7x35D7k5e4lb/CKSeTiksjFJZGLy8vIze7Rq1ehqyqUXT50FA87sBzKR0S+nN2GrmSQSq0YaQ3VbxOaGI5cObuJQtoTyUIrHsA8buNjSYfix/dg2jQ/BHlywSeW1mFac0oQP09Q9PLvTzClsAg5cs/EjtY8mfHx/mJOqozuIwUFbC/3j9gcdoeVc9W7ddeA5sqx0t5RTMB2cqvEWvtQXAEVte80z6Nfw46b09GKsHPjywnF2Mg3YC+VboKukV3kciYsioqIJxdDrFdRFzk2Cq1fFBezudyWYkrlHGPKhLGZXPA4WCNmzWiuyzOxUnQxTnQ5GWLjW1zeyO4QUsTOUd7l1yqM02iC4XLspoY0MT6kyU3RK9H293riqP3UP19QjCOWc5gILeRt/2nHWCyUNvBl6e2WK8YRy3XLdGMmQp169GlvEcvU8NU/MlaJ9VFVA2LdDT/mGEK5YZ1E3jYwpBgsEzlPwmjisj/AkREUO8WDs70YJ5qcyg5WirlPqfQkExwyxTjisl5UaRHWqEcUc5ngR91Azv+A1FCsX0kpZRCx3JSdbySgfBhQcA2SxThiOYZ1oPkL6s1r/KH4EhJLGSRUDo+3MPPewhns5KtonV1h6Dh4uBng82GgvBLFOOFynNk1Wu9WbwJ/8D+rC3linGhyLnMMz0wUc9QxfKksCpXN/0mjsIHcMtPfDsZLrUs+seX+B4lcXBK5uCRycXnFcsBf82K1oTbdaEsAAAAASUVORK5CYII=",
            e.HERHALING = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAuCAYAAACF6SFvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKYSURBVGhD7Zfva9pAGMf3/78QcURpaIaCQ0soBmGCjhQpihQ3kK0dK3NOfJHSFqVChbxQvsttl9Wcl593IVnxA8+bPHKPH3PP3eMbvCKOMnnlKJNXjjJ5JRuZ3QoTow6lUkfn+4Y+FCcTGXuso1B4+zeKGtqShDKRub+ovchIFMqHjCSh/MhIEEouY68wux6hZ7TRqKpOM8eIEkfEDQGh+DLrKcwzjf9FZEWxBtOi9WIQQ2aLxaAJpcgpnkJoFw+0bnQiymww6/rs8zQizTdj+TUsiWKZ3xdBkVnPzE2c8IpWmuhd38He0c/FINpp5mzrqy5ahonJI30UQojMCsPqYVHl/QhWAgmXKPeMZzcoHfyIUC9Y5raD0n5BEu/6QiKE0AngcQBtP+9E47NNk/4Eyiy6qmfBQkFDb06TAoTOZusRqp66Tpzf0KQ/ATJrDGvMgqd93NOsEO7UrOowf/Ka3canBlO7YmJBs34EyNzBVJkFjVuaSx/LZC/mFr7SnB8BMjfQPYslu8iScnhICMlw3kyEfSsLyTKcnvHbt9YIDVXFyVkfs2f6TAjpPcM7zcpos21jDVDdm9e0yxVNCLB0TjN2BhQ7zRwWh7d/6xvNERgREuJ9tcFEL3vWJCF8z7ATgOL8Ov92EUeEhJDMbu0c2exucELKBEBw/r8MP7TRGUzx5C7oI0IimcwWT7/GaJ3y1ixDn/DuokPCZVgCRP5EiTMlh0QpYD3PbgghnsxyjHqQiORQzr+87IYIxJJZDurcomlE9eM88htxyd2bUWpdTB62tGA8su8ZtQnd6MK8msJ6TibhEl+GIP00k0MyGUIa94wgyWUIHKH/V4bACEmZzRIiLkOQPjUnQ45MTjjK5JWjTF55RTLAb06LIvH2a11BAAAAAElFTkSuQmCC",
            e.ZK_OK_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJKSURBVGhD7Zm9TsJQGIaZvA+uwTtw5BIcXBwdGBhdnQizMYbEBSZjHEzYkAkHB3FASAyBpQmKQ5WE1DSQz36cnvY7P0BbSGljn+Qd6Pnpw/krKTlIKZl43KwUL3ce4PD2HA6uTiB3eRxr8J54b3RYhSI++PlcNtJ1uI+gCzrJKOJJkuZBJxlBHKdG1zAJkZeNIJ7E0eaRR10Q38dGDBp0owjiugZJCiUTjyOUTDyOUP6PeMmYubXXYUDVrV818fMMmm21r/xTF5bFCxOaT0WlXA4ltPjZaAKWbeszdzsKIO5JY1kAaQxlh0ulCJUve9mP9XEPefe6VrzRgt7yS9rQ65f96xtC2Zn40ZsBFnZiv8NF3b+uiNdr0GQVYTi48b5gkFB2I+6NoDrtonjZ+cxmxTRqoaQxlB2Ir5fxxYvexrbMFhSkekFC2Vq80HeXiNWFElkiPFz8xXDrfbcjSWMo24k32jBcYEtp85EwcYq6nIKGsoV4Ge6mrN14dK0pZ+HiltmGCn8GzEdQ0czOplAiixcGE9Zo+rx26sXNyU+UaOucEk38sQNjbLCYQL2hKScRxZ14J1D4k4USQdw/h4M8PBRxJ/nXEduoIdc7JaR4+CNNJ077gbnz82DDrPFQQoo7o/3rVp5rfquQvHRZG704xt/cMOvAqVCmDyW6+AZ6fdZmtbiTkOudEm1z7imUTDyOUDLxOELJxOMIRRBP7UvP1L5mTu2LfSSJoy6PNqKIp/bPKw5ODTbax4bFe+K95eVBWSmedDLxeAH4A0neiVp771jNAAAAAElFTkSuQmCC",
            e.ZK_ERROR_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJNSURBVGhD7Zm9TsJQGIa9IxcTFy+BhdHJOyDhBtycSEy4Ak2YHExgIw7KIgMMBhclJKBojVEDiaTaBprPfrSn/c4P0BZS2tgneQd6ek6fnr82ZQdSSiYeNwvFn88r0D48gpu9A7je3Y81eE28NjosQhL/eXmdV1I1uI2gCzqJSOJJkmZBJxFOHIdGVTEJEacNJ57E3mYRe50T38ZCDBp0o3DiqgpJCiUTjyOUTDyOUP6PeK/17Z69jAG8uee/9fH3N4xKclvN0zZMsXj2BaPTvFQuhhJavNvQwNJNdQy3oQDinjSWBZDGUDY4VfIwfDTn7VidM2i6x5XihRro85s0Qa8W/eMrQtmY+N3lACxsRL+Hp5x/XBLPlWE0xmMm/F6VvBsMEspmxL0elIedFy/av51RmbbKoaQxlA2IL5fxxfPewrb6NegI5wUJZW3xTtWdIuM29MgUYWHik5Z73rAeSRpDWU+8UIffGdYUFh+JI06Rp1PQUNYQL8KH5tQzGyeKcidM3OrXYcieAUYXhorRWRVKZPHOlWut3Swden5xsh0l2jynRBM/vrU3M5uZBu8FRTkJL27H24HC7yyUCOL+Phzk4SGJ22lWus5CDTnfKSHFw29pKnHaDhj268GKUWOhhBS3e5u9YxmKdxWSyYVTRy2O8Rc3fN7CA1emDiW6+Ar0qlNnsbidkPOdEm1xbimUTDyOUDLxOELJxOMIhRNP7UfP1H5mTu2HfSSJvS72NiKJp/bPKwYODVbaxoLFa+K1xelBWSiedDLxeAH4A/PlqDIHwwuhAAAAAElFTkSuQmCC",
            e.AB_OK_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKpSURBVGhD7Zkxa9tAFMc99Xv4M/QbdOxHyNClYwcP2Zw1XUJGYTpkjJZm6FDcITRkKAkUih1MsSGEaBFVahOUEoyCsXnVO93Z707vRKSCLFH94b/cuyf9dPfXGeQW1FQNeNmygh8MP8PLkz148eENtHo7pRrvifdGBptS4Dd/fosm7oLbMLIgk6kUeJWglZHJlAaOW8M1VsFmbDTwKq62srnqGvg2XsTnGtmoNHCuoUqmasDLMFUDXoap/k/w9sSXnQDjSYeds+vP5QxDqwWEjx6437psH2eqfwDvwFEoG1HhObSZeQo8evRhfL9xsBDDseZwdpHu40xVHNw9hzE2zadwKyB8OHLT8xT4eGLWuuDcixJEd5+MGm+qwuAqJqF/DPt3yfJxcbGDx1ZRi3crVWNMVRBcxURu85Un+rm4ZIGrWuA5qRpnqmLgKiZPP2FXjPVhsMKBdFx48C68HV1DgD1RfA0mYpypCoG3R8kKR78+rscOZ2IIBiM9Lgqc1TJ+0C/8acSZqgB4BxwBuYDL75tx9TAwO9XiosDNU+U2UsfKPH7Yg/X8LFPlB3dPk1gsrmGfG1954JCtz8r466EH4lUxemymyg2+XtkM0bhkgbd6DvRlkgZXXF03VU7wTUyCUN964QdJQeKSDb6z/hGz1ampcoLL08OMibI6beKtP5Rj2eDHcPaE1fh9+cHVdVPlA1fn9azP13vvwX1Ipqitt4N3YU/WNsdqtqlygduOPOpXN9Nkknw4Ba6dKmEI4VIMx0diCP3L5x2JVDnA7T8ymr8OIcBpMi4KPKXlHILpBbw7Ya5hMVXOjG/XVA14GaZqwMswVQNehqk08Np+9KztZ+bafthHVXHVzdVGpcBr++eVEm4NNm3jhcV74r3NeFBZwauuBrxcAfwFsxe0MLJZ2d4AAAAASUVORK5CYII=",
            e.AB_ERROR_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAvCAYAAACc5fiSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKwSURBVGhD7Zkxa9tAGIb7j7wUsvQnePGYwfQHFAqdC5kLhUKGUjo1YOIli7OVDmmXekigxYFSC1M7dZ1giEmKjRoL27zVnXT2d6fvRKSCLFG98IK57z7p8d2rM8gPUFCV4FnLCv7zoIGz3cf4+PARTio7mVrcU9xbMNgUAf/zaySbuAtuw4JFMJmKgOcJWlkwmdLAxdZwjXmwGRsNPI+rrWyuuga+jQfxvhZsVBo415AnU5XgWZiqBM/CVP8neLs1CDsBt1Vj5/ROp+EMQ0sPi7GD8Ys628eZ6h/Aa7jqh41C/WO0mXkKfDUewO1t7Lly2NcUNy+jfZyp0oNXjyHvfX2JO/lhgKtqdJ4Cd1tmrY5RT5aw6rwzarypUoOrmCxO93HR8eRnLi52cN8qav5uRWqMqVKCq5iE29xwZD8XlzhwVfM+7UVqnKnSgauYTM/Qk2OHmC3FQDQuPHgd35vn8ETPrX8NJmKcqVKBt5vBCq++vFmPDbtyCLOmHhcFzmruf9Gn/GnEmSoFeA0jCenh9+vNuPoy6B5pcVHg5qlydxs8FyJus+az9fw4UyUHrx4FsXDPccGNLx2MyNbHZbxz4GAhikaPzVSJwdcrGyMalzjwk8oeJteyjFmDq+umSgi+iYnX17deehjmmcQlHnxn/SNmq1NTJQQPTw8zJsrqtPG3fhiOxYPv40aW/eflLVfXTZUMXJ3X3UO+XnmC8TCYorbeDl7Hj7C2OVbjTZUI3HbkUX/9cBlMCr+cAtdOlf4Ei7kc9o/ECSav7nckUiUAt//IaH7+2d94X2FcFHhE8ym8b+/h7DLXsJgqYca3a6oSPAtTleBZmKoEz8JUGnhhX3oW9jVzYV/sC+Vx1c3VFoqAF/bPKyWxNaJpGw+suKe4txkPKit43lWCZ62CggN/AbHlh5brvcLdAAAAAElFTkSuQmCC",
            e.VR_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAYAAAC8jpA0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJ8SURBVGhD7ZlPSxtBGIdz6vfwM/Qb9OhHCPgZcrC3Xu0leJRQRGgP5iIUoZAeCtFTAv4heBBFCXoJVhrKSotsCJXX+c1kdmcn78S4aye7uAvPYWfezTzZ+c1s2FRo1KeiUUr7gpWuH32htzvv6c2nFao0ql7BmBgbDpwbSEj3h4fyAu7DFgFc4GQ6goR0noQ1cDIdQSSN6eAuygN2VCLpPN5ljX23I+lFLLp5gRsrzRXniVLaF6W0L16J9LdDuiIcA9pqMv2ak2tZRcE+LYnzrUCd2kc4Cqh38VnWsJ/D8Hzpxkf6+kcNeHZeY/oV68NkjZYO7gZ09nvC33vVKI5gsD23eArpKr3r/1IjDX84BmpR7wEF8Wwo6Xtqd5K1S91TUt8noNZess9FKukoIg/XtMFFxIoG2lzSlUaNmneyWsyK3ceTTtqISO9kun/tdiz7zPi4pePo/GdpMyItq2+XutI5uVDd0pvUktEeU/fY7uNJLW1GZN1sP76kEO1GNAAvXaPqxUDVh6e0atTPIr20IyJcNICOgLl7/BypNvonZuV7XPsUGaTjiIS3u5O2HTYaQEvbRyhmpDprv2fIJB1FZHxJazg/4KMB7HjEW51o67r3e45s0lFE1CL6cMNHA3CZXtaL2Wc8QBSRmw61ZUanowH4hVgX7eqLyoU4Z0wyS8e7iByajQbgpQXNbWrLTAlvsX3yT9gk2aWNXQSH6/eIUxp0dL7H4vr6dL/FC0gbD5oZv/xmSguWzyf7NWqeWJgvIu2bUtoXpbQvSmlfsNKFfAFZyFe9hXypDvJ4t+27DBLShfyjSIPpwAWLWJwYE2PbkTBhpfNOKe2HPj0CDbqKai+Yu2QAAAAASUVORK5CYII=",
            e.INFO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAAvCAYAAADuBlhhAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAWjSURBVHhe7ZzNSyNJGId3Tvs3eJ2jR5mTV485evQqQxYdkCEggsjCJCCuJ4moEMxCSAaFsBmIDCoKGfADkewugbDMrkGGleAOGHJwlVnlt/XWR+x0umMykzJO5n3gBburuvrt9JOq6or0d2AYS7BcjDVYLsYavnL9tJnHs8g6vv9hCU+eL3Jw1IKcIDfIkWY0yPXXP1V5oFejHBzuIFfIGS8a5DJiPQuv481vJfz76T9dwjAKcoLcIEeMYF7UyUXdnBGLpWLugxwxgnkNkXVymV6LrGSYViBX/HqvOrnM5J17LaZVyBVyhtxxUycXVaJgmHbw84blYr4YlouxBsvFWIPlYqzBcjHWYLkYa/S8XJXfdzE+qfKnGN290CWMbfy86Y5c5RyG9bmcMZz9qCu0SfEtBqmNsTjGl7KYX0hhfPMz23q0fERyRn1O4eb/jPDgmPvnpjtyXZeRPypgZzODITrn7BZ2xHb+7FpXaIdr7EQp7xTSvdBZmS/eSlHvMLBc7eH7QbbD34jRcDidQ0/8ItqRz+Rh6WG5ighTGzM5lPWerxqWq0P4fZDO/ecFROfi6A+K7eAyAgs5FC9d9dzhFK16gvRKCoNjqqzvRQyjPxdQ/qTLJWbIyWD/topiNo3AC70tSvdX6O8Ekme6TLc1GNlCXv6f3A3KB1mMyGMW0T+VRvJPk6SitLmG4cllPDU5Ur1QCuHtU1zpOuVsolZWH648XN+iyh+HCEfu2qZ25w8ebs5p8nTzuOV6GcOQlmpoMnYnyKs9JU+1iNjqGgJUdyKB6VUxmaf4pYgKlZ/tYVQfE5jLyLLQj8vok22LG1a7/0auBEYjqr4K500VOYTU/kGRy5AWqe/VLpKrMdlmf0jsf6mPDaax45hC7q/SNaQQMjkuibx1biNZZQs98c5HExig46fWVD0Zx3LI95KrJISkcz+dySD5Tsxj3+UQ1nMz065t5PWKcPO45QrGEMqeoHKr99+WtQQxxE70Pt9h8QJpKUpMTIDre5HK9pq8IQPivKrXuJss901nsXFS/2+76qaKGxjZRdEU1XIRx4Qy2Di/0QU3yAuRaH9o754HlMsCpidEGxNvUZuj+30mgga5TnblF2tgqVDr/RT62oNr2PD+D+SOQtdK4ebxD4suSm/iMse7JyYfuUwbC7+6PnhCPwQ8N72Lc1iUFerwG44ac9HkM3L//Usr4kl3wZmHoA258gmSuDEv4movLXOYPtI7LELnoXDz1cll5iX3ynXU/AarG2V6QIdcsrQeP7kac9H4yFU5LSCZTGOUhtWQHp5lONpuWS6TcwpRWtZxx+uUZw42UNfwDcll6jWXy7RjWa7bC+wsqXnZk7FlDMv535acI0VnXW23LNd7zOs5W7NguSzI9Zh6rquDtJrjiblRbf6oaWi7Zbma5/yQ0LVSuOlduUwb7c65ZHk9XyqXmht51BN8vlxmO47YB7XdLejaKNz0rlxNnhbN43tf1IhnVy5TL/D6VG5LbqsobWfUUouz7fM9jND1RA7VcoqDhjz0b6q0HFJb+zPI9bo1RD2E7jR0bRRuuiPXfb8tdkQuwVkOI/LmiRvb0jqXHblwcYhxnQct4tbW7IJxBKbcbZtcFjE0SzlnMD6ZlXk15nGJ4rr6osgFZn2N03Px2pqgV2/Zaeg8FG66I5eRxxW1m9EpuQjPFfpjlOq+6ZblIj4cI2zENr80VH3arr5H1LHiPji5JdfB/PJQK/R3i8xy0TmSQTJfxpXH0kqnkecU4aa7wyLTE7BcjDVYLsYaLBdjDZaLsUZLcvGLSJh2aflFJPwKJaZdWn6FEr/8jWkHcqTll78Rpveig8hKloxxQ06QG0Ysr16LaJCLX7jL0U6QKy2/cNdA3RwdaCb5HBwmyAlyw2sodOIrF8N8KSwXYw2Wi7EGy8VYAvgf6zu1wMPwdTwAAAAASUVORK5CYII=",
            e.HW_INFORMATION_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAAtCAYAAACnOylXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAV3SURBVHhe7ZzNS2NXGIebVf+GbF26lFm5zdKlS7cyWIwgEhgEGQrGjc0qdDBCUCEkohjIQOwwilIXWpEh0yKE4tQwixkuU4sSBqtY5Nfzno+bk5sbkzi3E1PfB14w5957PszDec85yv0GDBMwLBUTOL5S/fC6hCdz6/j2uwWEnr7g4HCDnCA3yJFm1En1x59V+YBfZRwc3iBXyBkvdVIZoZ7E1/Hy1wr+vvlHX2EYBTlBbpAjRiwvrlQ0nRmhWCamFeSIEcubCl2pzCxFFjJMO5ArfrOVK5VZlPMsxbQLuULOkDs2rlR0kYJhOsHPG5aK+SJYKiZwWComcFgqJnBYKiZwWComcFiqXqVUkN/NcPFMFzwcHrxUB4vUhwyyji5ooIw49fP5HprecgdOMaPGuVjWJT0CS3V/WKomsFT357+Wqmdhqe4PS9UElur+3Ecqk9L8fuEN9fl9OTdn2FnJITKhxh8aSyEyV0C2RPdcYyep6sh/UrcbSpmUKE8jfaoLNJX1tChPIWFn2Oop8os5DI6rNsITaYyuHMO50dcJu2+fjpGYS6HPfPaV6lKMj9p6gaHMCa506ddG/s5E2DxuqW5PkZhS4+7/Po/EUhEz88voH6OyAg7ELab+2P61ekbyAeln6rmhjQ+6jKhic16Uj4lnb3XRxz2MUH3jGcSLb7Bz9AbZxYwUJjy7h4q5T/ctMisEl+2r8JfqEuX1DMJ0/1K5a0IRpp82D1CqNiIgqa728/Lz0LothkDMXpsLW5D/ena6i4i4ZyBjTUmyLIWByfq+ACeIkxDzh7igj7dCvmnxeVJIdilvcLnYzsm2oz/rf8fVfaPZL7pRhmM77Ol3RYyZhBoUG45uCkWoPveAVP2xNCLP/EKlhKCkcn5q/mwNLcrsfn2bk6+ws0tiWPVrAd36yq8w0Kz+67eIiWuhhWP12fTtZU1RF7ffDiq7axgUPz8EoQjqF4XN405/zh6G9biHk7vIH52i8tmeIgizrspjR146Q/a5mLlWTkS2O0RUPDu6fS7vvJCS1dZZpm+jq8ci7XljC6PUthmLt282+lpkNiOFkjOhSZtdhvpFYfPoF+oXv21hxCzSdYQnMkgcKVEINaPpxbcWKS5z4znyc+IZne5KS+Jnaz1VWqmv1zc6kIqiTy7206J9Tz7tEqZfNo9eKsPVZwelo0Okk2oRHXqaQ954ZaU1ORtZ4qj2c9isOsjOiOeSb920ZPqmBGxBG1JFVt/XFv5jYlwf9fUuQv2isOl5qe76MjqRyqa8qrbqNRnELpEW5clD5EUqDP9YE8ek0Nj2oVwj1dUt2qMFdf0OsQltSGWuXR0V5FotNFVEyZutvzLULwqb3pdKzyJU5m7Pb6soF9f01ry5VM7rAhK/NH6JSir7rEmvqybTGBR1NhwvyB2e2A16z63MkYWYVdLvGtPVxe97iGZ1Ix1IZZ9RdXvBTn2gsOl9qcTCOT+r+h4aT8ldojxnGlvGEH3Zd0ml01N4YhnRhSISSwVEp1Nydglbuz1CLcKpPrNgr6EOPKlN63xKc/VuV6Urcb1/eg0zS6KdhTUM6/Mx9++QHUkluBXpVo97ROwKu4Ucgwib/4FUgsv3yCbNoaVIN/NbOPirjfR37eCgWMBoTIlE1/qmlhHbOGncXZkZ0ZxB2Zhr1nqqjqo6UY8YkUT0x3KIF63zqE6lIs7FpkGOuXsLdzMemwclFdN7sFRM4LBUTOCwVEzgsFRM4NwpFb+gg+mUli/o4FcJMZ3S8lVC/NIzphPIkZYvPSPMbEU3k4UsF+OFnCA3jFDeWYqok4pfJMvRSZArLV8ka6DpjB4wi3cODhPkBLnhTXk2vlIxzJfAUjGBw1IxAQP8C2cOCQIQoxI3AAAAAElFTkSuQmCC",
            e.HW_OK_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAAtCAYAAACnOylXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATvSURBVHhe7ZzPSxtbFMdd9f/InyDvP3Dpn+Cimy5dZJFlt8+NuAzyKIIbZ6NIqY8p1DaVUpKFlI4LXyRBIvIGYyNh+iJhJBhO77k/Zs6Mk5hMp83keb7wxeT+mjvOh3vOvYFZABYrYzFUrMyVCNW68zf8sfcSnv31HBY2V9jswMgEsoGMjFIEqvP/vskOSYOx2XEjK8hMXBGoGCj2tEZm4gqgwuUsqROb/ZjjoTCAilcpdlrHV6sAKk7K2WmN7FAFUCU1ZrMnNRVDxc7EVAwVOxNTMVTsTEzFULEzMRVDNQ8+c+Uz8tyd5PocmCpXUG15OJM+VKrJ9QubR1DHJnenUEqsH++S28fe4ukcJdbn1gxVejNUI8xQpfevhmpuzVClN0M1wgxVeqeByoS0pH/4g/GSHs7eNljdPvhDWSXl+y5U/tmGxc012O9hiRjjs26vvXGD5QOofYmW/3k9wAr4ehKWFd7bYHvkGsMBeN0qrO6RvmRui5+rUPfVOHKuiVCti/vTbW4OYTkon42pnjZUlg1f72WRIKkD9a4L9Vudd4ELW6KNGb91vkbGfg019TzBv9ol5WWwZXPR11JlhdopyGkM+1B3j8FqHENFACbli/vQ7czcfN8DX35SSoZqHTau1Rh+92jmQKGpcgjVBMoIqqXzjvzuX7+GAumHq9f+96aEauFLUz3kGzusN2W48kRCsYa+78AKfrc0fMMOWG9NG+UXl+pm262yKtNzw9WvfXUEpTfFsH1k3sXgnn2x4cgDUGiqfEJ1PwB/kGypjKBa/Xd039AaFLGqrOoyec3hBVgXeAEyvoYtGO/kAnsmj39wDC2s/F5VQD9YjYhJXUlcE6+RJ6DQVE87/FV1aMKyXhPsxiG8fLcWXbWCvKoD+wf4fQcqd+KryGMKHxxoi4/ty1ey7YqELMyzzNza11UR9uJuyr7BvUwAle+LvAw/3DrwwoTNnJjqiSfqRVg5vQCPJOlSmP80tgO4zIomk28NUv0Mw9MrlUPpcLfVxVZhPlWW3x/RFFBJybkOxPXXH7aboameOFTGRVh6twvlhgO1nhpPtAL7o64nYU2tRiE46vqi7Qe9gvWOYUmPa+ZWP9PjjPMEUPkdGxZN4o/3VSN514xNNfdQjXsYk0NFXYSNjsrdQhjELhFXiJ4DNoZCkQctmfY6hLYuHZkj0bELBobIDnGEJ4DK1C031AYD7gXcMiTP3lTzD5XZiWGZyTOsMmy4HVU+BqrSpSvD3KIZSzqEKjxr0nnVUGwWxJ/o8cKu3uFhj9i5VXBk0YeaEw9XIvSenEK7o38ymgIqekaVl4Sdav6hwsRZ0aMeutkhinHU/30MVDo8YQ7V9gRgXRfaGMJQeIYUXMMk4SiTsIc2B540LBovO81gMwB3njoL8zzwzPmY+R1yKqiErfC+sTy6ufj9pvofQCX81oZKkAsJHm7Fdv9T8dHwV3izA1uuGz5g1H0fWleHsBrfXZkV0ZxBJdWRfIo6OFGPXafukvOoaaFCf1Sbhjwk7lS5goo9v6ZiqNiZmIqhYmdiKoaKnYmpGCp2JqZiqNiZmIqhYmdiqgAqfkEHO61HvqCDXyXETuuRrxLil56x03rkS89QvFqxp3V8lUJFoOIXybKnMbLy6ItkjXA5ww6cvLPjRiaQjXjIo0qEisX6GTFUrMzFULEyFsAP8tIeB15HYfkAAAAASUVORK5CYII=",
            e.MO_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAuCAYAAACRfL+OAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKxSURBVGhD7ZpBSxtBFMebU7/HfoZ+A4/9GiIUevSYq6cGeknoQSlCyKFiQcEcqhh6SSoi6SGwhFokBCVYISGHxSVE/r43uzFvZifQRPaQ3fnDH3Tem8H32zezu7hv4KTJATG0EMinH2282znA2w9fUNiqZMJcC9fEtS1SAsjff2M1ybZglsw1cq2mEkDyAGNmrtWUBoRbyTYxyza3jwYkT90xs9klGpAsHaD/a65ZSgNim5AHSzkgZCkHhCzlgJClHBCylANClkoBiA8/Xg/jHjatORVsdoI4CRh1m4m4t3uF770Ao0mcxJqE8Ls+Pu7oua+1VLpAMEX7rGrJuUArjFNIJpD3zSEe4xiCAP7dkDyew5kEqB/a1l3NUukBCadRUfd/sGHkeI0HjmAwjqhIIN7hLUZqNETr7BSemFfY+oYidZZadzLEXlnGVrdUekCCW9T76gfU92X8CLV7Gg4HqHVNIA3U4xfQm6sTMUe6ilJ/qnIery8s8eUtlSqQ7eOBupraH77fw4DGBp0Gtk0gX6MYnh5QLs7Wszheg/NKtviSlkoXyOyKiwKL13x1x6h9riSAeL/i9qBtpm8V002cqzM5xPmBLb6cpVIGUsHGZVTkzeURCsUO2k/0S7+jCjaBJDpmoavRtiP5TVt8OUulDuQFAp0ZJQVnitZxlLs6kAr21J5ZRyDkaJuQGIx4NsktkJdDkKS2TjxuAsjFGRKNVVHmW7Bx90h0RPbvMrb43MktkvXnEGt8btuZIZ9U2z8z9qS6ChC29i4TincZPpRZa/ku8wogbG/3N+p3mXjbXT9LOSBkKQeELOWAkKUcELKUA0KWckDIUhoQ989uA4j7HMIA4j6YMYCw8tQlZnewEkDcR3cLxK3Ek7J00HItXJO5TaQWAsmrHBBDDoghB0QT8AzRawamqxIz8gAAAABJRU5ErkJggg==",
            e.SO_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAuCAYAAACYlx/0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALhSURBVGhD7VpBaxpBFG5O/R/+hNJ/kGN+Qu6BgkePHpNThV4MpSSUgEgx6KEQD2lQetnqQQwlsEjaiBRlSZUVCYuLKF93Zmfr7uyrxGQP3dn94GPA9944882bNzPoCyQcqQCiDeHtZRevj87x8s177Bwcx45s3Gz8bB6bEBLg5+8ZD6Q6jSvZfNi8KIQEUG3yHtm8KAQEYOlCBatCajsEBFB19T1SWRAQIK4F77Fk85MREIAKUo0yUgFEy0EFqEYZqQCi5aACVKOMVADRclABT2Hm5Bp1w8Z8JTpmWNgwDAO1iy/IhPw7qA0sTBfCl8Hx13s6skdB3+dSRuQC7DXHmIr+8DCDPjKhG77JWUPk/P6aibkwwbJc/9Fs7b+wUK+WAt/xHMqIVoD8Nbp84Da6lxeSvYTd6q0jxuCvAJnqUIhl49uVnBkV5G8sV5yFidOi3/Z0yohWgKux29HkDruUPcAm6uKB1u/IYnksofBryX3mP9qEfXvKiFYAJ505ZgPsU3Y/Pw5gMN/VGMU8Yfd4tvYrUPYtKSNaAbxJYQm9FS52fmZaYvnvbzf67RxoaFjM0UbjnLJvRxkRF8EScj1b9ObAqeT9wRC1Zht7UjX3/KY9LfB5mCWU77krdI2yb0cZEQvAWEG2ZWLqPwIF5pMhCqKYPV6AY5y6aRUXATw6Vf9DG8XOEN2JLytsA4fOnk+AAEFmTpwjUJztulZStQZs5uGde6TxVVfxFMjpJhqfK6SN0ROg32I3OwXvAe6+XqJ/08G+tKrrW98M5XfyZ87N8asCN8Hsd75ZXayWmE7Yvd5E/8FdRX4/0IKrHXgL2L63gHeKxOot4PDVGfGyY2KYY5Q/0duDvx5HirwG/3fKSAUQLQcVoBplpAKIloMKUI0yUgFEy0EFqEYZAQES/+No4n8eT/wfJBhUzQJq9RlCAiT+T1IeWLqwwLgWRjZuNn4q7f34pwBJQSqAaBOLhAsA/AH4fXcXEtcPxwAAAABJRU5ErkJggg==",
            e.TT_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAAtCAYAAACH+7TvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATKSURBVHhe7ZxPa+NGGMabU7+HP0LoN+gxH8HXpVDYY44+bk7NspcsPWzoxZiwYXMoxIUkuJAF23sIDsUgglMbHxIG18HGBCFhHN5939GM/EqytHHj4I1mHngImv+a38xoRkT+AayMlYVvsFLh/3bSgp92DuHHX3+HjV/eW78wEzfiRxzTlID/738TmWlRgdYv08STuMaVgG/B59PENa4IfFoiFmW0zofjj4AIfDvr8+347I/At5u7fJv4ckXgL8pgnS9zWfiGmcvCN8xcFr5h5rLwDTOXhW+YuVYI3wFHlfMoCWdBGdbPba4Vwm9Dy5+Bxz1VBaMi4eR+e0EZK/LhDYypUjvAEuZ63mVfQ3BvYHtR/HPZwk81l4VvmLm+C/iFD5dQFT54D7IZAA8zGN924PUOS1cfyajxVR2KZ31w7mfyOkxbCtJtX/lBeEIj2Mf44uchjPGxE9HUB9GflyHNBtDmQQfrkymxPh967S+wiWmo3bW7xe2Y+yO8bg5BuEEykudOoHZ2CoUwTR1qMh7buHMOlb4LY90XlPbkmJX3NHOtHX7hk0qDnepcdaHS7EINB4LUPebTnangw3Te2bR30PJuHfgZ0xU/C3AGKr/vgnM7Uu5CCeO3r1zMh7CFDp+EHe0h6C3VrrDtWJ9HfyP1zbCtAgTli7fj+gu7v2PYF0GcNxlCtdmBShsHgtwLYRl1DVXDx7L0PonqDfdMPtQOdZlPM9d64ZcuoEGcHiZQ2YvGvWoHU0W0ToMwDZ8GSfNczjwZvteBnoQ3gaN3KozNWl1epku6812o/qHCdBkIpNea17fVnP9ThLi+hKIanIXKDQgK9AW80WkvgrS0Ws1nObqEm2Nq83QIuzJM14+D5O4Gdj+UVdpyuJJ53Yt5/ieYa73wz4ayXuqcRNy7LvQoctAJOo4t+9G0ZagMKIbNjmXho990aYbOoHGswtLKKOFgo/DEPbGlW16fQlWyx+vEo0DXh23+RNfxvMx6ZVziXrLMtVb4elSLLi6HtCRGjMsqz5sK/z0urRTzePibB22oXo/wORxdsklOXaVLLUO9z/gmfJXOHwXLfcxV9TgI6suA/z8Gcpa51gp/71ZWm62Vwj+G3Wu1vqK8+4l87jfacRhZZTwSfrkfDN5vyFj4euaHHZ7lVcD/UwSbN1dAiZ8k0Im2PBV+arpFNhB+QQGN7pBTvAL4xX+CWb+ojNXD19e4mdUb0VQbCH+jdAkteZzxoZE4y5bxPI876L666WXgH6h6J314xdLpwQZ33XCXLs/hePaXxzbU6uDjiUUNNm/QTZ7/6TyPx8ygzSbCR2+diCANyVXncuHCWJ9x9U0vAz/sTOz4SXCeF7jx2g8HG0qdz4MXSzMYq/SrhL9ROoejgdpQ0kugu6AtPf2CKmyzofDJ4Ru+8KUGakovfRzYfqvOvEvBpzLxLB12Mg4Cfwh7KrwxYuH3I6gcfHyGZV9bv+Gb1ykHwmgIR3/9rd4f5BG+9XdnLgvfMHNZ+IaZy8I3zFwWvmHmsvANM5eFb5i5IvDth5r5duaHmvYT7Xw78xNt++MM+XbmjzOQ7OzPp+OznpSAb3+QKX8mno/6QSYtWiIok90EvkwTN+IXX+q5UuFb5V8WvsGy8I0VwFen2BPcE6GTbwAAAABJRU5ErkJggg==",
            e.EX_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAAAtCAYAAACpvpV9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARASURBVHhe7ZtBSyNJFMfX036PfATZbzEfwesgLMzRY47jaYW9OOxB2YsEGRkPA2bBGRQciM5hVpFAE+IaZFEaN5IQJHSQyH/qVVdVv+50KzsmptT3hz9jql5VJ/VLvX6VoX+C6MlIYD0h5cL6bfsQvyxu4Odf/8DM/DvxI5jWmtac1r5IKVj//NfTA/ImEz+eiQGxyCoFS0D5Y2KRlYNF2y9vkHh6zqZEB0t2lX/O7i4HS4oJ/0xMuBysvGDx9M0lsDw3l8Dy3FwCy3NzCSzPzSWwPDfXWGEtNAZmtmJ1G7XcseJ8c00G1s0Q0SDfreO93LHifHNNBFZQy+8X/39zCSzPzTUFWGtJurxs4lWmb+nfoe7qBvG9be5LG12VPlO6GSA8a+JNmY3dOEeX+sIAs+tNBNc6ErgdoFX/ilkVU1o5ws6Vmet2iO5FZg7t93hz0EbYj8NIUb+Hnc+fUHIxNezo/g5WF/dQOeuje6tDAYrd3mLzPcxc09lZZfVhzWK2DpIPVvrcRkSNvTO8Nm0Ljb661yk4YQfBBbnnFiZSYBxsC4vul/SvgkH3yFhDBI0QIY1Ltas5Tr6668/Mb2E1jPuiXhvVgyYqdQXuhlrUHDX7Xi0sNZfuU6Lr2r8xwM6GnfNh5ppMgVEo9U00saUPdnFV2++qrXyEQ/1he9hcTs87YoKtF6uP6p+mzcJSC9g63NM7idpfHST/iReeHGHO7KRS5RwhNQ5CvLWx3+JYqliTXaRcruOQQN+0saTb7PUV1KtzLK2smdgka0Sn35LxDzDXZGAVVoNtLLt49sEuAqya9Md32l1+e0rxQ+xvmTaWBlOx5SZa1N4/xwJv56lMv/6EqmalXo+kRns9tWM+0OvsWGb7Jcy+jx8013QLDJYOSam0xjy7Xkf1pKPuIzF0LnetIljzAQJqvxeWiRt04vSXcdWkx/h6d8AqfB8/Zq7pwiJvm/sU7ZKP2f4tLJ2YfKMUXff0fWu/nl085YfCWjuL0+I9esGwdk3qMWKFhfbHMAbZD1FeZO3KI9ca184aicvzC4S1EMTx3eAIlUv9J8LjXdc/dxzvqryfqMYPy77uoUIFTyo26xcGy1WD12YRl1UhoEvypOwt1TrUAFyduipOn4PU2UuX4Urjg/UOr82XI7o8HT1/0XlKHRvi9/aMYN3726ArLKi6smVvUjo7gK6cVzLno0hDUgfaeF3HCmumvIfNS1PA0KH5Kj7bta5tUWO/SM8J1h3qNv42ZXDOeYbdw+wvGKWVOvY7drGoyOigsv5+AmnQ2v6CkVxTg+u0sfnXrjm/PQNY4vGbS2B5bi6B5bm5BJbn5hJYnptLYHluLoHlubkcLHkwwT8XPpggj/z458JHfuRhOv9c+DAdSXaXP87uKlIKljwA7oeJwb0PgFvR9qMBUnQ8nmmtac2zqY8rF5bITwmsJySB9WQEfAcmKFKmirxApAAAAABJRU5ErkJggg==",
            e.PW_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAAuCAYAAADura1/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAWjSURBVHhe7ZzPSyNJFMd3T/t/5E8Y9j/w6J/gdRAWPHrMUU8reHHZw8ggSFgUAyskC6MkkIHosISIhG3E2YQQlMaNdAihSRDl7XtV9SrVbeeHYyZqd33hC3Z1daW7PlWvXrUkP4BVImXBJ1SR4H/9VIWf1/fhp19+hx+Xf7N+YyZuxI84jlIA/L//dcUFUY1Zv00TT+IaVgC8hR5PE9ewNHgKC1EXWcfD4bCvwdvZHm+HZ70GbxO5eJv4mtLgoypbx8umLPgE2ZQFnyCbsuATZFMWfIJsKnng179A1h2op0Y9tGErqt6cve3SzQygsB99fhY2NWPwDjiqvYDuBuA267D2YTfimnm6CHl+e9nrgnPtgeu3YTuy7nwdD/APA2hgp1LHOtdd6NyJj8ByHwoHLwj/0IU+3UerBqmo8y/oeID3r2A1UL4H6QsVXrtNeB84Nz8vVOR0b5y+dOR57JiCR6drUH0QJyH/MXRuTl5Vg88pR59/SccX/HIZCj6dVA+3fwUdOnQdSH04g8Ktigh4zNe8++MSqp6RiGGu0Lg4g6W02S55F5aOm+D07lVFFNZ1TkvwTtWRHftYzj91aNAfvStYCbR5JgfqwIW1QHkFTuiWMCnc0GV7sHLaxnyBGpLq+10oHB8ZSwo/vwfb6SPYuMAlUEwEPMbzkeC3sD/FMjmAajE3LP9Gm5of+E3VweLB8ZjB+z64ogOUFPjFsifXY1TnVuYLOhlHSKsa/q6eyeB7UKhcQqZyBY6C0Lkoi85PVz1o9GRZ3+P8w4PsIQPpQnaT20TnVD4A93ByaJR/bIJgRANWlOUQmhxw/W4b8qf4+TUcBALYPUYXBjYc+G7g3+MjwG+dwYm4X7ON59nUfMDjCM9w57TOZIcxeFTnGjP+nT2jPi8L2BGBZDAHWy3ZDgGlshQDurmERV2PzBm8D1m1tIwK9Wt12Wb1OFSmBiR/lvBnT5S550fieFHlDTzAdD1+hjuODAwehQM0+1dRRyNyAHwa684YOtnU9wFvZvUYwvs8o3subGypugwegQU6DJ3C2U7q1yuBcmGOHCoEb7TEQeTaGE7mRq7xCmbHKakyBal1KQePMZDlIOHPO1KDS0Uxbi9c94COh5ElE1FXgz8oQ96j62YLnWzq+4APqY/h3KmF1mZjjQ+2MSkJG3ZgdpP/9uGEQmzYdTnFeMaObJcH020dFuhY3Vu1iLnDObWBCekO1VWg9bqvnnfgyRAfcl5FOfl5fK8ytAc+Hy3B30NH5SnuefHRhHiuTc0xuQt5DHjZCZPA06yrgWPmByM0EfxySYZWlbBJ2GoW78g1XYZ29Xy8vu+q9X6CpgeP4ue5w3ocHWdkU68S/NNnfHRnhj2u3WEIV7NaJ2/qM7pNWDqQ99yo/Kmue8LzTjnjq5/29H0Gk9jn29SrBD/9Gr+rOyyQeY/w2AF13BbnGrWmaL/xN8Pl67qQr4k4b+QTw0GYMXcEkZ4GPLedg8wNHWMfXDty+ZmBTb1K8OOyer11+vpFlKUQmMjqzcSRLfbLPlQV6LHgeUDdUfuhrR2/6qV7Cu3r34tlAe/npg4r4dm5XoLMNe7nBcyngEfrPfxb3s5FeRx49PT7+Bxs1PkE1uU9ujfcTTDoseB1ho7iJE9bvbQh6SVAOV2C7I0cjPCAyZm614Z+mcQwnwgenVJLy+MJ8G029WrBkyPf3H2tPZ5Zxps7vXVE9XseFD6XYUHVHw9+uJ/nPXrUueH6bprf3DFsFA0Cr23s158OnswRZRbJnqkZg7d+zTZlwSfIpiz4BNmUBZ8gm7LgE2RTFnyCbMqCT5BNafD2S5Px9sgvTdqvScfbI78mbX8YId4e+cMIJDvr4+nwbCcFwNsfP4qfiefEHz9iUVigC2zC9zZN3IhfOLybigRvFX9Z8AmVBZ9QWfCJFMD/CYCJbx4uM98AAAAASUVORK5CYII="
        }(a || (a = {}))
    },
    435: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return a
            });
            var a = function() {
                function t() {
                    this.apiDateFormat = "YYYY-MM-DD"
                }
                return t.prototype.getShortTime = function(t, n) {
                    if (t) {
                        var a = e(n, this.apiDateFormat)
                          , i = e(n, this.apiDateFormat).add(1, "day")
                          , s = e(t.begin)
                          , r = e(t.einde);
                        return this.isAfspraakDurationWholeDay(t) ? "hele dag" : this.isAfspraakOverMeerdereDagen(t) ? a.isBefore(s) ? s.format("HH:mm") + " - 00:00" : i.isAfter(r) ? "00:00 - " + r.format("HH:mm") : "hele dag" : s.format("HH:mm") + " - " + r.format("HH:mm")
                    }
                }
                ,
                t.prototype.isAfspraakDurationWholeDay = function(t) {
                    var n = e(t.begin)
                      , a = e(t.einde);
                    return e.duration(a.diff(n)).asDays() >= 1 && this.isTimeAtStartOfTheDay(t.begin) && this.isTimeAtStartOfTheDay(t.einde)
                }
                ,
                t.prototype.isTimeAtStartOfTheDay = function(t) {
                    var n = e(t);
                    return 0 === n.hours() && 0 === n.minutes() && 0 === n.seconds()
                }
                ,
                t.prototype.isAfspraakOverMeerdereDagen = function(t) {
                    var n = e(t.begin)
                      , a = e(t.einde);
                    return this.isTimeAtStartOfTheDay(t.einde) && a.subtract(1, "minutes"),
                    !n.isSame(a, "day")
                }
                ,
                t
            }()
        }
        ).call(this, n(14))
    },
    436: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = function() {
            function e(e) {
                this.$resource = e,
                this.keuzeUrl = globalSettings.apiHost + "api/leerlingen/:persoonId/keuzewerktijd/inschrijvingen/:inschrijvingId",
                this.keuzesUrl = globalSettings.apiHost + "api/leerlingen/:persoonId/keuzewerktijd/keuzes",
                this.inschrijvingenUrl = globalSettings.apiHost + "api/leerlingen/:persoonId/keuzewerktijd/inschrijvingen"
            }
            return e.prototype.get = function(e, t, n) {
                return this.$resource(this.keuzesUrl, {
                    persoonId: ":persoonId"
                }, {
                    execute: {
                        method: "GET"
                    }
                }).execute({
                    persoonId: e,
                    van: t,
                    tot: n
                }).$promise
            }
            ,
            e.prototype.getById = function(e, t) {
                return this.$resource(this.keuzeUrl, {
                    persoonId: ":persoonId",
                    inschrijvingId: ":inschrijvingId"
                }, {
                    execute: {
                        method: "GET"
                    }
                }).execute({
                    persoonId: e,
                    inschrijvingId: t
                }).$promise
            }
            ,
            e.prototype.add = function(e, t) {
                return this.$resource(this.inschrijvingenUrl, {
                    persoonId: e
                }, {
                    execute: {
                        method: "POST"
                    }
                }).execute({
                    persoonId: e
                }, t).$promise
            }
            ,
            e.prototype.delete = function(e, t) {
                return this.$resource(this.keuzeUrl, {
                    persoonId: e,
                    inschrijvingId: t
                }, {
                    execute: {
                        method: "DELETE"
                    }
                }).execute({
                    persoonId: e,
                    inschrijvingId: t
                }).$promise
            }
            ,
            e.$inject = ["$resource", e],
            e
        }()
    },
    437: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return i
            });
            var a = n(0)
              , i = function() {
                function e() {
                    var e = this;
                    this.scope = {
                        afspraken: "=",
                        selectionChanged: "&"
                    },
                    this.template = n(438),
                    this.replace = !0,
                    this.controller = s.$inject,
                    this.controllerAs = "ctrl",
                    this.link = function(t, n, a, i) {
                        return e.linkFn(t, n, a, i)
                    }
                }
                return e.prototype.linkFn = function(e, t, n, a) {}
                ,
                e.$inject = [function() {
                    return new e
                }
                ],
                e
            }()
              , s = function() {
                function t(e, t) {
                    this.$scope = e,
                    this.$window = t,
                    this.initializeGrid(),
                    this.selectedAfspraak = void 0
                }
                return t.prototype.initializeGrid = function() {
                    var t = this
                      , i = this.createDataSource(this.$scope.afspraken);
                    if (this.afsprakenLijstOptions = {
                        columns: [{
                            title: "Tijd",
                            width: "65px"
                        }, {
                            title: "Omschrijving",
                            width: "220px"
                        }, {
                            title: "Huiswerk"
                        }, {
                            title: "",
                            width: "25px"
                        }, {
                            title: "",
                            width: "104px"
                        }, {
                            field: "datumBegin",
                            hidden: !0,
                            groupHeaderTemplate: kendo.template(n(439))
                        }],
                        dataSource: i,
                        rowTemplate: e.proxy(kendo.template(n(440)), i),
                        selectable: "row",
                        change: function(e) {
                            var n = e.sender.dataItem(e.sender.select()[0]);
                            t.onChange(n)
                        },
                        dataBound: function(e) {
                            e.sender.table.find('span[data-today="true"]').toggleClass("today")
                        }
                    },
                    Object(a.w)(this.$scope.afsprakenLijst))
                        var s = this.$scope.$watch("afsprakenLijst", function(e) {
                            Object(a.w)(e) || (s(),
                            t.onGridInitialized(e))
                        });
                    else
                        this.onGridInitialized(this.$scope.afsprakenLijst)
                }
                ,
                t.prototype.onChange = function(e) {
                    void 0 === this.selectionChanged && void 0 !== this.$scope.selectionChanged && (this.selectionChanged = this.$scope.selectionChanged()),
                    void 0 !== this.selectionChanged && (this.selectionChanged(e, this.selectedAfspraak === e),
                    this.selectedAfspraak = e)
                }
                ,
                t.prototype.onGridInitialized = function(e) {
                    var t = this;
                    this.$scope.$watch("afspraken", function(n) {
                        Object(a.w)(n) || 0 === n.length || t.onAfsprakenChanged(n, e)
                    })
                }
                ,
                t.prototype.onAfsprakenChanged = function(e, t) {
                    var n = this.createDataSource(e);
                    t.setDataSource(n),
                    t.refresh(),
                    t.select("tr:eq(2)")
                }
                ,
                t.prototype.createDataSource = function(e) {
                    return new kendo.data.DataSource({
                        data: e,
                        group: [{
                            field: "datumBegin"
                        }],
                        sort: [{
                            field: "begin",
                            dir: "asc"
                        }]
                    })
                }
                ,
                t.$inject = ["$scope", "$window", t],
                t
            }()
        }
        ).call(this, n(15))
    },
    438: function(e, t) {
        e.exports = '<div id="afsprakenLijst" data-kendo-grid="afsprakenLijst" data-k-options="ctrl.afsprakenLijstOptions" data-responsive-grid-options class="sm-grid grid-no-header"></div>\r\n'
    },
    439: function(e, t) {
        e.exports = '\x3c!--\n    NOTE! helaas geen angular directives mogelijk in de groupheader template... Request naar KENDO?\n    Als je hier een rowindex had was het makkelijker...\n--\x3e\n#\nvar today = new Date();\nvar date = kendo.parseDate(value);\nvar isToday = today.getMonth() == date.getMonth() && today.getDate() == date.getDate();\n#\n<span class="group-header-content" data-today="#=isToday#">\n    <strong>#= kendo.toString(value, \'dddd d MMMM\')# </strong>\n    <span class="iconic"></span>\n</span>\n'
    },
    440: function(e, t) {
        e.exports = '<tr ng-class="{\'important-row\': (dataItem.status === 4 || dataItem.status === 5)} " data-ng-cloak>\n    \x3c!-- begin group cell --\x3e\n    #= new Array(this.group().length + 1).join(\'<td class="k-group-cell"></td>\') #\n    \x3c!-- end group cell  --\x3e\n    <td>\n        <span>\n            <span ng-if="dataItem.isHeleDag === true">hele dag</span>\n            <span ng-if="!dataItem.isHeleDag" data-ng-bind-template="{{dataItem.begin.toDate() | date: \'HH:mm\'}} - {{dataItem.einde.toDate() | date: \'HH:mm\'}}"></span>\n        </span>\n    </td>\n    <td>\n        <span>\n            <span ng-if="dataItem.lesuur && dataItem.lesuur !== \'0\'" class="nrblock" ng-bind="dataItem.lesuur"></span>\n            <span data-ng-bind-template="{{dataItem.title}}"></span>\n            <span data-ng-bind-template="({{dataItem.locatie}})" data-ng-if="dataItem.locatie && dataItem.locatie.length && dataItem.magLocatieZien"></span>\n        </span>\n\n    </td>\n    <td>\n        <span class="more" ng-if="dataItem.huiswerk">\n            <span ng-bind="dataItem.huiswerk"></span>\n            &nbsp;\n        </span>\n    </td>\n    <td class="icon-column">\n        \x3c!-- absentie, [1,6] = absent, ziek, vrijstelling --\x3e\n        <span data-ng-if="dataItem.isAbsent && dataItem.absentieType === 2" class="text-icon" icon-type="ok">AB</span>\n        <span data-ng-if="dataItem.isAbsent && dataItem.absentieType === 3" class="text-icon" icon-type="error">AB</span>\n        <span data-ng-if="dataItem.isZiek && dataItem.absentieType === 2" class="text-icon" icon-type="ok">ZK</span>\n        <span data-ng-if="dataItem.isZiek && dataItem.absentieType === 3" class="text-icon" icon-type="error">ZK</span>\n        <span data-ng-if="dataItem.heeftVrijstelling" class="text-icon" icon-type="ok">VR</span>\n    </td>\n    <td class="icon-column">\n        \x3c!-- Bijlagen en herhaling --\x3e\n        <span data-ng-if="dataItem.heeftBijlagen" class="text-icon icon-only">\n            <i class="far fa-paperclip"></i>\n        </span>\n        <span data-ng-if="dataItem.isHerhalend" class="text-icon icon-only">\n            <i class="fas fa-repeat-alt"></i>\n        </span>\n\n        \x3c!--huiswerk--\x3e\n        <span data-ng-if="(!dataItem.heeftProefwerk && !dataItem.heeftTussentijdseToets && !dataItem.heeftSchriftelijkeOverhoring\n            && !dataItem.heeftMondelingeOverhoring && !dataItem.isExamen)\n            && (dataItem.heeftOnafgerondHuiswerk || dataItem.heeftAfgerondHuiswerk)" class="agenda-text-icon default-width"\n                ng-class="{\'outline\': !dataItem.heeftAfgerondHuiswerk}"\n                icon-type="{{dataItem.heeftAfgerondHuiswerk ? \'ok\': \'information\'}}">Huiswerk</span>\n\n        <span data-ng-if="dataItem.heeftInformatie" class="agenda-text-icon default-width outline" icon-type="information">Informatie</span>\n\n        \x3c!--toetsen--\x3e\n        <span data-ng-if="dataItem.heeftProefwerk" class="agenda-text-icon default-width" icon-type="information">Proefwerk</span>\n        <span data-ng-if="dataItem.heeftTussentijdseToets" class="agenda-text-icon default-width" icon-type="information">Tentamen</span>\n        <span data-ng-if="dataItem.heeftSchriftelijkeOverhoring" class="agenda-text-icon" icon-type="information">SO</span>\n        <span data-ng-if="dataItem.heeftMondelingeOverhoring" class="agenda-text-icon" icon-type="information">MO</span>\n        <span data-ng-if="dataItem.isExamen" class="agenda-text-icon default-width" icon-type="information">Examen</span>\n    </td>\n</tr>\n'
    },
    441: function(e, t, n) {
        "use strict";
        (function(e, a, i) {
            n.d(t, "a", function() {
                return f
            });
            var s = n(8)
              , r = n(5)
              , o = n(4)
              , c = n(7)
              , d = n(85)
              , p = n(98)
              , l = n(0)
              , u = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var i in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }
              , f = function() {
                function t(e, t, n, a, i, s, r, o, c, d, p, l, u, f) {
                    var h = this;
                    this.$scope = e,
                    this.$q = t,
                    this.$location = n,
                    this.$routeParams = a,
                    this.$timeout = i,
                    this.$window = s,
                    this.currentUser = r,
                    this.agendaDashboardService = o,
                    this.dialogService = c,
                    this.applicationService = d,
                    this.magisterLocale = p,
                    this.tabService = l,
                    this.downloadTokenService = u,
                    this.agendaService = f,
                    this.toastDisplayTime = 5e3,
                    e.vm = this,
                    this.tabService.subscribeTabAdded(this.tabAdded, this),
                    this.tabState = this.tabService.tabState,
                    this.terug = function() {
                        return h.terugImpl()
                    }
                    ,
                    this.initialize(e)
                }
                return t.prototype.tabAdded = function(e) {
                    "idDetails" === e.id && this.tabService.openTab(e)
                }
                ,
                t.prototype.initialize = function(t) {
                    var n = this;
                    this.anonymousRouteParams = this.$routeParams,
                    this.allowEdit = this.currentUser.isInRole(o.a.Leerling),
                    this.returnUrl = e.isDefined(this.anonymousRouteParams.returnUrl) ? decodeURIComponent(this.anonymousRouteParams.returnUrl) : null,
                    this.persoonId = this.currentUser.relatedPersons.current.id,
                    this.afspraakId = +this.anonymousRouteParams.afspraakId,
                    t.$watch("vm.afspraak.Type", function() {
                        if (Object(l.w)(n.$scope.vm.afspraak))
                            n.$scope.vm.typeOmschrijving = n.magisterLocale.AgendaStrings.AFSPRAAK;
                        else
                            switch (n.$scope.vm.afspraak.Type) {
                            case Contracts.Agenda.Afspraken.Enums.AfspraakType.Persoonlijk:
                                n.$scope.vm.typeOmschrijving = n.magisterLocale.AgendaStrings.PERSOONLIJKE_AFSPRAAK;
                                break;
                            case Contracts.Agenda.Afspraken.Enums.AfspraakType.Planning:
                                n.$scope.vm.typeOmschrijving = n.magisterLocale.AgendaStrings.PLANNING_AFSPRAAK;
                                break;
                            default:
                                n.$scope.vm.typeOmschrijving = n.magisterLocale.AgendaStrings.AFSPRAAK
                            }
                    }),
                    this.agendaDashboardService.getAfspraak(this.persoonId, this.afspraakId).then(function(e) {
                        n.afspraak = e;
                        var c, d = a(n.toCrossBrowserDateString(n.afspraak.Start)), p = a(n.toCrossBrowserDateString(n.afspraak.Einde)), l = -1 === d.diff(p, "days");
                        i.extend(n.afspraak, {
                            isHeleDag: l,
                            magLocatieZien: !(n.currentUser.isInRole(o.a.Ouder) && n.afspraak.Type === Contracts.Agenda.Afspraken.Enums.AfspraakType.Persoonlijk)
                        }),
                        n.allowEdit && (n.allowEdit = null !== e.Aantekening || null !== e.Inhoud || 0 !== e.InfoType),
                        1 === n.afspraak.HerhaalStatus && n.afspraak.Herhaling && (c = u({}, n.afspraak.Herhaling, {
                            BeginDatum: new Date(n.afspraak.Herhaling.BeginDatum),
                            EindDatum: n.afspraak.Herhaling.EindDatum ? new Date(n.afspraak.Herhaling.EindDatum) : void 0,
                            Wekelijks: n.afspraak.Herhaling.Wekelijks ? u({}, n.afspraak.Herhaling.Wekelijks, {
                                dagenLijst: n.agendaService.getWeekDays(n.afspraak.Herhaling.Wekelijks.Dagen)
                            }) : void 0
                        }),
                        n.afspraak.recurrencePattern = n.agendaService.composeRecurrencePattern(c, d, p, l));
                        var f = n.afspraak.Type === Contracts.Agenda.Afspraken.Enums.AfspraakType.Persoonlijk || n.afspraak.Type === Contracts.Agenda.Afspraken.Enums.AfspraakType.Planning;
                        t.vm.magWijzigen = f && n.currentUser.hasPrivilege(r.a.Afspraken, s.a.Update),
                        t.vm.magVerwijderen = f && n.currentUser.hasPrivilege(r.a.Afspraken, s.a.Delete),
                        t.vm.magAfronden = n.currentUser.hasPrivilege(r.a.Afspraken, s.a.Update)
                    })
                }
                ,
                t.prototype.toCrossBrowserDateString = function(e) {
                    return e.toString().replace("0000Z", "Z")
                }
                ,
                t.prototype.hideFunctions = function() {
                    return this.$scope.vm.magVerwijderen && this.$scope.vm.magWijzigen
                }
                ,
                t.prototype.showEdit = function() {
                    return this.allowEdit
                }
                ,
                t.prototype.verwijderAfspraak = function() {
                    var e = this;
                    this.$scope.vm.magVerwijderen && this.dialogService.showConfirm(this.magisterLocale.AgendaStrings.AFSPRAAK_VERWIJDEREN, this.magisterLocale.AgendaStrings.AFSPRAAK_DEFINITIEF_VERWIJDEREN, [d.a.Ok, d.a.Cancel], function(t) {
                        t.clickedButtonType === d.a.Ok && e.agendaDashboardService.removeAfspraak(e.afspraakId, e.persoonId).then(function() {
                            e.applicationService.showMessage(e.magisterLocale.AgendaStrings.AFSPRAAK_IS_VERWIJDERD, c.i.INFORMATION, e.toastDisplayTime),
                            e.$location.path("/agenda")
                        })
                    })
                }
                ,
                t.prototype.wijzigAfspraak = function() {
                    this.$scope.vm.magWijzigen && this.$location.search("returnUrl", this.$location.url()).path("/agenda/afspraak/bewerken/" + this.afspraakId)
                }
                ,
                t.prototype.terugImpl = function() {
                    e.isDefined(this.returnUrl) && null != this.returnUrl ? this.$location.url(this.$location.path(this.returnUrl).path()) : this.$location.path("/agenda")
                }
                ,
                t.prototype.afspraakAfronden = function() {
                    this.magAfronden && (this.afspraak.Afgerond = !0,
                    this.updateAfspraak())
                }
                ,
                t.prototype.afrondenOngedaanMaken = function() {
                    this.magAfronden && (this.afspraak.Afgerond = !1,
                    this.updateAfspraak())
                }
                ,
                t.prototype.updateAfspraak = function() {
                    var e = this;
                    this.agendaDashboardService.updateAfspraak(this.persoonId, this.afspraakId, this.afspraak).then(function(t) {
                        e.afspraak.Afgerond ? e.applicationService.showMessage(e.magisterLocale.AgendaStrings.AFRONDEN_PLANNING_AFSPRAAK_GOED_GEGAAN, c.i.INFORMATION, e.toastDisplayTime, e.magisterLocale.AgendaStrings.PLANNING_AFSPRAAK_AFGEROND) : e.applicationService.showMessage(e.magisterLocale.AgendaStrings.AFRONDEN_ONGEDAAN_MAKEN_GOED_GEGAAN, c.i.INFORMATION, e.toastDisplayTime, e.magisterLocale.AgendaStrings.AFRONDEN_ONGEDAAN_MAKEN)
                    }, function(t) {
                        e.afspraak.Afgerond ? e.applicationService.showMessage(e.magisterLocale.AgendaStrings.AFRONDEN_PLANNING_AFSPRAAK_MIS_GEGAAN, c.i.INFORMATION, e.toastDisplayTime, e.magisterLocale.AgendaStrings.PLANNING_AFSPRAAK_AFGEROND) : e.applicationService.showMessage(e.magisterLocale.AgendaStrings.AFRONDEN_ONGEDAAN_MAKEN_MIS_GEGAAN, c.i.INFORMATION, e.toastDisplayTime, e.magisterLocale.AgendaStrings.AFRONDEN_ONGEDAAN_MAKEN)
                    })
                }
                ,
                t.prototype.showAfspraakInPopup = function() {
                    var t = {
                        inhoud: this.afspraak.Inhoud
                    }
                      , a = this.afspraak.Omschrijving && this.afspraak.Omschrijving.length > 0 ? this.afspraak.Omschrijving : this.magisterLocale.AgendaStrings.AFSPRAAK;
                    this.dialogService.showDialog({
                        title: a,
                        template: n(140),
                        buttons: [d.a.Ok],
                        callback: function(t, n) {
                            t.clickedButtonType === d.a.Ok ? (e.isDefined(t.data),
                            n.resolve({
                                shouldClose: !0
                            })) : n.resolve({
                                shouldClose: !0
                            })
                        },
                        size: p.a.large,
                        viewModel: t
                    })
                }
                ,
                t.prototype.onOpenAttachment = function(e) {
                    var t = this;
                    2 === e.Status ? this.openAttachment(e) : this.agendaDashboardService.getAfspraak(this.persoonId, this.afspraakId, !1).then(function(n) {
                        i.each(n.Bijlagen, function(n) {
                            n.Id === e.Id && (0 === n.Status ? t.applicationService.showMessage("Bezig met toevoegen, even geduld.", c.i.INFORMATION, 5e3, "Bijlage niet geladen") : t.openAttachment(e))
                        })
                    })
                }
                ,
                t.prototype.openAttachment = function(e) {
                    e.Url ? this.$window.open(e.Url, "_blank") : this.downloadTokenService.downloadFromLocation(Object(l.j)(e.Links, l.a.Contents))
                }
                ,
                t.$inject = ["$scope", "$q", "$location", "$routeParams", "$timeout", "$window", "currentUser", "agendaDashboardService", "dialogService", "applicationService", "magisterLocale", "tabService", "downloadTokenService", "agendaService", t],
                t
            }()
        }
        ).call(this, n(1), n(14), n(3))
    },
    442: function(e, t, n) {
        "use strict";
        (function(e, a, i) {
            n.d(t, "a", function() {
                return l
            });
            var s = n(5)
              , r = n(8)
              , o = n(85)
              , c = n(7)
              , d = n(98)
              , p = n(0)
              , l = function() {
                function t(e, t, n, a, i, s, r, o, c) {
                    this.$scope = e,
                    this.$q = t,
                    this.$location = n,
                    this.$routeParams = a,
                    this.$window = i,
                    this.currentUser = s,
                    this.agendaDashboardService = r,
                    this.dialogService = o,
                    this.applicationService = c,
                    this.ToastDisplayTime = 5e3,
                    this.initialize(e)
                }
                return t.prototype.setInfoType = function(e, t) {
                    return e === Contracts.Agenda.Afspraken.Enums.AfspraakType.Persoonlijk ? !Object(p.w)(t) && t.length > 0 ? Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.Informatie : Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.None : e === Contracts.Agenda.Afspraken.Enums.AfspraakType.Planning && !Object(p.w)(t) && t.length > 0 ? Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.Huiswerk : Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.None
                }
                ,
                t.prototype.initialize = function(t) {
                    var n, o, c = this;
                    t.wysiwyg = {
                        tools: ["bold", "italic", "underline", "justifyLeft", "justifyCenter", "justifyRight", "insertUnorderedList", "insertOrderedList", {
                            name: "fullsize",
                            tooltip: "Volledig scherm",
                            template: '<a data-ng-click="volledigScherm();" role="button" class="k-tool k-group-start k-group-end" title="Volledig scherm"><span class="k-tool-icon k-fullsize">Volledig scherm</span></a>'
                        }],
                        messages: {
                            bold: "Vet",
                            italic: "Cursief",
                            underline: "Onderstrepen",
                            justifyLeft: "Links uitlijnen",
                            justifyCenter: "Centreren",
                            justifyRight: "Rechts uitlijnen",
                            insertUnorderedList: "Opsommingstekens",
                            insertOrderedList: "Nummering",
                            fullsize: "Volledig scherm"
                        }
                    },
                    t.calendarOnChange = function(e) {
                        c.$scope.calendarSelectedDate = e.sender.value(),
                        c.setDatum()
                    }
                    ,
                    t.uren = ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"],
                    t.terug = function() {
                        c.returnUrl ? c.$location.url(c.returnUrl) : c.$location.url("/agenda")
                    }
                    ,
                    t.volledigScherm = function() {
                        return c.volledigScherm()
                    }
                    ,
                    t.isDirty = function() {
                        return c.isDirty()
                    }
                    ,
                    t.canOpslaan = function() {
                        return c.canOpslaan()
                    }
                    ,
                    t.opslaan = function() {
                        return c.opslaan()
                    }
                    ,
                    t.verwijderenAfspraak = function() {
                        return c.verwijderAfspraak()
                    }
                    ,
                    t.$watch("start", function(e) {
                        c.setDatum()
                    }),
                    t.$watch("eind", function(e) {
                        c.setDatum()
                    }),
                    t.$watch("afspraak.DuurtHeleDag", function(e) {
                        c.setDatum()
                    }),
                    t.$watch("afspraak.Type", function(e) {
                        if (!Object(p.w)(c.$scope.afspraak))
                            switch (c.$scope.afspraak.InfoType = c.setInfoType(e, c.$scope.afspraak.Omschrijving),
                            c.$scope.afspraak.Type) {
                            case Contracts.Agenda.Afspraken.Enums.AfspraakType.Persoonlijk:
                                c.$scope.typeOmschrijving = "Persoonlijke afspraak";
                                break;
                            case Contracts.Agenda.Afspraken.Enums.AfspraakType.Planning:
                                c.$scope.typeOmschrijving = "Planning afspraak";
                                break;
                            default:
                                c.$scope.typeOmschrijving = "Onbekend"
                            }
                    }),
                    t.$watch("afspraak.Inhoud", function(e) {
                        Object(p.w)(c.$scope.afspraak) || (c.$scope.afspraak.InfoType = c.setInfoType(c.$scope.afspraak.Type, e))
                    }),
                    this.anonymousRouteParams = this.$routeParams,
                    this.afspraakId = +this.anonymousRouteParams.id,
                    this.persoonId = this.currentUser.person.id,
                    e.isDefined(this.anonymousRouteParams.returnUrl) && (this.returnUrl = decodeURIComponent(this.anonymousRouteParams.returnUrl)),
                    isNaN(this.afspraakId) || Object(p.w)(this.afspraakId) ? (t.titel = "Afspraak maken",
                    t.persoonlijk = !0,
                    t.afspraak = {
                        Id: 0,
                        Links: null,
                        Start: a({
                            hour: 8
                        }).toDate(),
                        Einde: a({
                            hour: 8,
                            minute: 30
                        }).toDate(),
                        DuurtHeleDag: !1,
                        Omschrijving: "",
                        LesuurVan: null,
                        LesuurTotMet: null,
                        Type: Contracts.Agenda.Afspraken.Enums.AfspraakType.Persoonlijk,
                        Inhoud: null,
                        InfoType: Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.None,
                        Afgerond: !1,
                        Aantekening: null,
                        Vakken: null,
                        Docenten: null,
                        Lokatie: "",
                        Status: Contracts.Agenda.Afspraken.Enums.AfspraakStatus.GeroosterdHandmatig,
                        Lokalen: null,
                        Groepen: null,
                        OpdrachtId: 0,
                        HeeftBijlagen: !1,
                        Bijlagen: null,
                        WeergaveType: Contracts.Agenda.Afspraken.Enums.WeergaveType.Vrij,
                        TaakAangemaaktOp: null,
                        TaakGewijzigdOp: null,
                        HerhaalStatus: 0,
                        Herhaling: null
                    },
                    Object(p.w)(this.anonymousRouteParams.start) || Object(p.w)(this.anonymousRouteParams.end) ? (n = a(),
                    o = a().minutes(30)) : (n = a(this.anonymousRouteParams.start),
                    o = a(this.anonymousRouteParams.end)),
                    0 === n.hours() && 0 === o.hours() && (n = n.hours(8),
                    o = o.hours(8).minutes(30)),
                    this.$scope.afspraak.Start = n.toDate(),
                    this.$scope.afspraak.Einde = o.toDate(),
                    t.start = this.roundDownToHalfHour(n),
                    t.eind = this.roundDownToHalfHour(o),
                    t.originalAfspraak = i.clone(t.afspraak),
                    t.agendaCalendarOptions = {
                        value: t.afspraak.Start,
                        format: "dd-MM-yyyy",
                        footer: !1
                    }) : (t.titel = "Afspraak wijzigen",
                    this.agendaDashboardService.getAfspraak(this.persoonId, this.afspraakId).then(function(e) {
                        t.afspraak = i.clone(e),
                        t.magVerwijderen = c.currentUser.hasPrivilege(s.a.Berichten, r.a.Update),
                        t.kanVerwijderen = t.afspraak.Type === Contracts.Agenda.Afspraken.Enums.AfspraakType.Persoonlijk || t.afspraak.Type === Contracts.Agenda.Afspraken.Enums.AfspraakType.Planning && t.magVerwijderen,
                        t.afspraak.Start = a(t.afspraak.Start).toDate(),
                        t.afspraak.Einde = a(t.afspraak.Einde).toDate(),
                        t.start = a(t.afspraak.Start).format("HH:mm"),
                        t.eind = a(t.afspraak.Einde).format("HH:mm"),
                        t.originalAfspraak = i.clone(t.afspraak),
                        t.agendaCalendarOptions = {
                            value: t.afspraak.Start,
                            format: "dd-MM-yyyy",
                            footer: !1
                        }
                    }, function(e) {}))
                }
                ,
                t.prototype.roundDownToHalfHour = function(e) {
                    return e.minutes() > 0 && e.minutes() < 30 || 0 === e.minutes() ? e.minutes(0).format("HH:mm") : e.minutes() >= 30 ? e.minutes(30).format("HH:mm") : void 0
                }
                ,
                t.prototype.verwijderAfspraak = function() {
                    var e = this;
                    this.dialogService.showConfirm("Afspraak verwijderen", "De afspraak definitief verwijderen?", [o.a.Ok, o.a.Cancel], function(t) {
                        t.clickedButtonType === o.a.Ok && e.agendaDashboardService.removeAfspraak(e.afspraakId, e.persoonId).then(function(t) {
                            e.applicationService.showMessage("Afspraak is verwijderd", c.i.INFORMATION, e.ToastDisplayTime),
                            e.ignoreDirty = !0,
                            e.$location.path("/agenda")
                        }, function(e) {})
                    })
                }
                ,
                t.prototype.setDatum = function() {
                    var e;
                    if (!Object(p.w)(this.$scope.afspraak))
                        if (null !== this.$scope.calendarSelectedDate && !1 !== i.isDate(this.$scope.calendarSelectedDate) || (this.$scope.afspraak.Start = this.$scope.originalAfspraak.Start,
                        this.$scope.calendarSelectedDate = a(this.$scope.originalAfspraak.Start).toDate()),
                        this.$scope.afspraak.DuurtHeleDag)
                            e = a(a(this.$scope.calendarSelectedDate).format("YYYY-MM-DD 00:00")).toDate(),
                            0 !== a(this.$scope.afspraak.Start).diff(a(e)) && (this.$scope.afspraak.Start = e),
                            this.$scope.afspraak.Einde = a(this.$scope.afspraak.Start).add("days", 1).toDate();
                        else {
                            if (this.$scope.start >= this.$scope.eind) {
                                var t = this.$scope.uren.indexOf(this.$scope.start);
                                t !== this.$scope.uren.length - 1 ? this.$scope.eind = this.$scope.uren[t + 1] : (this.$scope.start = this.$scope.uren[t - 1],
                                this.$scope.eind = this.$scope.uren[t])
                            }
                            e = a(a(this.$scope.calendarSelectedDate).format("YYYY-MM-DD ") + this.$scope.start).toDate(),
                            0 !== a(this.$scope.afspraak.Start).diff(a(e)) && (this.$scope.afspraak.Start = e);
                            var n = a(a(this.$scope.calendarSelectedDate).format("YYYY-MM-DD ") + this.$scope.eind).toDate();
                            0 !== a(this.$scope.afspraak.Einde).diff(a(n)) && (this.$scope.afspraak.Einde = n)
                        }
                }
                ,
                t.prototype.volledigScherm = function() {
                    var t = this
                      , a = {
                        inhoud: this.$scope.afspraak.Inhoud
                    };
                    this.dialogService.showDialog({
                        title: "Inhoud",
                        template: n(443),
                        buttons: [o.a.Ok, o.a.Cancel],
                        callback: function(n, a) {
                            n.clickedButtonType === o.a.Ok && e.isDefined(n.data) ? (t.$scope.afspraak.Inhoud = n.data.inhoud,
                            a.resolve({
                                shouldClose: !0
                            })) : a.resolve({
                                shouldClose: !0
                            })
                        },
                        size: d.a.large,
                        viewModel: a,
                        frameless: !0
                    })
                }
                ,
                t.prototype.isDirty = function() {
                    return !this.ignoreDirty && !i.isEqual(this.$scope.afspraak, this.$scope.originalAfspraak)
                }
                ,
                t.prototype.canOpslaan = function() {
                    return !Object(p.w)(this.$scope.afspraak) && !Object(p.p)(this.$scope.afspraak.Omschrijving)
                }
                ,
                t.prototype.opslaan = function() {
                    var e = this;
                    this.canOpslaan() && (Object(p.w)(this.$scope.afspraak.Inhoud) || "" === this.$scope.afspraak.Inhoud ? this.$scope.afspraak.InfoType = Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.None : this.$scope.afspraak.InfoType = Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.Informatie,
                    isNaN(this.afspraakId) || Object(p.w)(this.afspraakId) ? this.agendaDashboardService.addAfspraak(this.$scope.afspraak, this.persoonId).then(function(t) {
                        e.applicationService.showMessage("Afspraak is toegevoegd", c.i.INFORMATION, e.ToastDisplayTime),
                        e.ignoreDirty = !0,
                        history.back()
                    }, function(e) {}) : this.agendaDashboardService.updateAfspraak(this.persoonId, this.afspraakId, this.$scope.afspraak).then(function(t) {
                        e.applicationService.showMessage("Afspraak is gewijzigd", c.i.INFORMATION, e.ToastDisplayTime),
                        e.ignoreDirty = !0,
                        history.back()
                    }, function(e) {}))
                }
                ,
                t.$inject = ["$scope", "$q", "$location", "$routeParams", "$window", "currentUser", "agendaDashboardService", "dialogService", "applicationService", t],
                t
            }()
        }
        ).call(this, n(1), n(14), n(3))
    },
    443: function(e, t) {
        e.exports = "<div class=\"aantekeningen maxheight profiel-editor\">\r\n    <div class=\"widget wide wysiwyg k-content\">\r\n        <textarea id=\"editor\"\r\n                  data-kendo-editor=\"editor\"\r\n                  data-ng-model=\"vm.inhoud\"\r\n                  data-k-options=\"{encoded: false}\"\r\n                  data-k-tools=\"['bold', 'italic', 'underline', 'justifyLeft', 'justifyCenter', 'justifyRight', 'insertUnorderedList', 'insertOrderedList']\"\r\n                  data-k-messages=\"{bold:'Vet', italic:'Cursief', underline:'Onderstrepen',justifyLeft:'Links uitlijnen', justifyCenter:'Centreren', justifyRight:'Rechts uitlijnen', insertUnorderedList:'Opsommingstekens', insertOrderedList:'Nummering'}\"></textarea>\r\n    </div>\r\n</div>"
    },
    444: function(e, t, n) {
        "use strict";
        (function(e, a, i) {
            n.d(t, "a", function() {
                return f
            });
            var s = n(8)
              , r = n(5)
              , o = n(4)
              , c = n(7)
              , d = n(85)
              , p = n(98)
              , l = n(0)
              , u = n(100)
              , f = function() {
                function t(e, t, n, a, i, s, r, o, c, d, p, l, f, h, g) {
                    var A = this;
                    this.$scope = e,
                    this.$q = t,
                    this.$location = n,
                    this.$routeParams = a,
                    this.$timeout = i,
                    this.$window = s,
                    this.currentUser = r,
                    this.agendaDashboardService = o,
                    this.opdrachtenService = c,
                    this.studiewijzerService = d,
                    this.dialogService = p,
                    this.applicationService = l,
                    this.magisterLocale = f,
                    this.tabService = h,
                    this.downloadTokenService = g,
                    this.visibilityState = u.c,
                    this.toastDisplayTime = 5e3,
                    this.heeftHuiswerk = !1,
                    this.afspraakTypeToets = [Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.MondelingeOverhoring, Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.Proefwerk, Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.Tentamen, Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.SchriftelijkeOverhoring],
                    this.kwtEnumWaarde = Contracts.Agenda.Afspraken.Enums.AfspraakType.Kwt,
                    e.vm = this,
                    this.tabState = this.tabService.tabState,
                    this.terug = function() {
                        return A.terugImpl()
                    }
                    ,
                    this.initialize(e),
                    this.tabService.subscribeTabAdded(this.tabAdded, this)
                }
                return t.prototype.tabAdded = function(e) {
                    "idLesrooster" === e.id && this.tabService.openTab(e),
                    "idAantekeningen" === e.id && this.tabService.setEnableTab(e, this.isLeerling)
                }
                ,
                t.prototype.initialize = function(t) {
                    var n = this;
                    this.pageState = 0,
                    this.anonymousRouteParams = this.$routeParams,
                    this.returnUrl = e.isDefined(this.anonymousRouteParams.returnUrl) ? decodeURIComponent(this.anonymousRouteParams.returnUrl) : null,
                    this.persoonId = this.currentUser.relatedPersons.current.id,
                    this.afspraakId = +this.anonymousRouteParams.huiswerkId,
                    this.isLeerling = this.currentUser.isInRole(o.a.Leerling),
                    this.getAfspraak().then(function() {
                        n.$q.all([n.getOpdracht(), n.getStudiewijzers()]).then(function(e) {
                            n.$scope.vm.setalles = a()
                        }, function(e) {
                            n.$scope.vm.setalles = "?"
                        }).finally(function() {
                            n.setVisibility(t)
                        })
                    })
                }
                ,
                t.prototype.getAfspraak = function() {
                    var e = this
                      , t = this.$q.defer();
                    return this.agendaDashboardService.getAfspraak(this.persoonId, this.afspraakId).then(function(n) {
                        e.heeftHuiswerk = n.InfoType === Contracts.Agenda.Afspraken.Enums.AfspraakInfoType.Huiswerk,
                        e.handleKWTLes(n),
                        e.les = n,
                        e.isPersoonlijkeOfPlanningAfspraak = e.les.Type === Contracts.Agenda.Afspraken.Enums.AfspraakType.Persoonlijk || e.les.Type === Contracts.Agenda.Afspraken.Enums.AfspraakType.Planning;
                        var a = e.afspraakTypeToets.some(function(t) {
                            return t === e.les.InfoType
                        });
                        e.agendaBijzonderheden = {
                            isToets: a,
                            les: {
                                inhoud: e.les.Inhoud,
                                infoType: e.les.InfoType,
                                isAfgerond: e.les.Afgerond,
                                heeftBijlagen: e.les.HeeftBijlagen
                            }
                        },
                        t.resolve(!0)
                    }),
                    t.promise
                }
                ,
                t.prototype.handleKWTLes = function(e) {
                    var t = this;
                    if (this.heeftKWTKeuzes = !1,
                    this.kwtKeuzeIsGesloten = !1,
                    this.kwtKeuzeGemaakt = !1,
                    e.Type === Contracts.Agenda.Afspraken.Enums.AfspraakType.Kwt) {
                        var n = this.$q.defer()
                          , s = a(e.Start).utc().format("YYYY-MM-DD HH:mm")
                          , r = a(e.Einde).utc().format("YYYY-MM-DD HH:mm");
                        return this.agendaDashboardService.getKWTKeuzes(this.persoonId, s, r).then(function(e) {
                            var s = i.first(e.Items);
                            t.KWTPostObjects = s.Keuzes,
                            t.KWTKeuzes = t.createKeuzeViewObject(s),
                            t.selectedKWTKeuze = i.first(t.KWTKeuzes),
                            t.$scope.vm.setkwt = a(),
                            t.setVisibility(t.$scope),
                            t.kwtKeuzeIsGesloten = s.MagInschrijven,
                            t.kwtKeuzeGemaakt = i.some(s.Keuzes, function(e) {
                                return t.isIngeschreven(e.Status)
                            }),
                            t.heeftKWTKeuzes = e.Items.length > 0,
                            n.resolve(!0)
                        }),
                        n.promise
                    }
                    return null
                }
                ,
                t.prototype.getStudiewijzers = function() {
                    var e = this
                      , t = this.$q.defer();
                    return this.hasStudieWijzersPrivilege() ? this.studiewijzerService.getAll(this.persoonId, i.map(this.les.Vakken, function(e) {
                        return e.Id
                    })).then(function(n) {
                        n.Items && (e.studiewijzers = n.Items,
                        t.resolve(!0))
                    }, function(e) {
                        t.resolve(!1)
                    }) : t.resolve(!0),
                    t.promise
                }
                ,
                t.prototype.getOpdracht = function() {
                    var e = this
                      , t = this.$q.defer();
                    return this.hasOpdrachtenPrivilege() && 0 !== this.les.OpdrachtId ? this.opdrachtenService.getById(this.persoonId, this.les.OpdrachtId).then(function(n) {
                        e.opdracht = n,
                        t.resolve(!0)
                    }, function(e) {}) : t.resolve(!0),
                    t.promise
                }
                ,
                t.prototype.heeftHuiswerkEnIsLeerling = function() {
                    return this.heeftHuiswerk && this.isLeerling
                }
                ,
                t.prototype.afrondenOngedaanMaken = function() {
                    this.les.Afgerond = !1,
                    this.updateAfspraak()
                }
                ,
                t.prototype.terugImpl = function() {
                    e.isDefined(this.returnUrl) && null != this.returnUrl ? this.$location.url(this.$location.path(this.returnUrl).path()) : this.$location.path("/agenda")
                }
                ,
                t.prototype.huiswerkInleveren = function() {
                    this.les.Afgerond = !0,
                    this.updateAfspraak()
                }
                ,
                t.prototype.showHuiswerkInPopup = function() {
                    var t = {
                        inhoud: this.les.Inhoud
                    };
                    this.dialogService.showDialog({
                        title: "Huiswerk",
                        template: n(140),
                        buttons: [d.a.Ok],
                        callback: function(t, n) {
                            t.clickedButtonType === d.a.Ok ? (e.isDefined(t.data),
                            n.resolve({
                                shouldClose: !0
                            })) : n.resolve({
                                shouldClose: !0
                            })
                        },
                        size: p.a.large,
                        viewModel: t
                    })
                }
                ,
                t.prototype.selectStudiewijzer = function(e) {
                    this.$location.path("/elo/studiewijzer/" + e.Id)
                }
                ,
                t.prototype.SelectKWT = function(e) {
                    this.selectedKWTKeuze = e
                }
                ,
                t.prototype.KwtIsDisabled = function(e) {
                    return !(Object(l.w)(e) || !this.KwtIsFull(e) && e.MagInschrijven)
                }
                ,
                t.prototype.KwtIsFull = function(e) {
                    return !(Object(l.w)(e) || 0 !== e.MaxDeelnemers && e.MaxDeelnemers !== e.AantalDeelnemers)
                }
                ,
                t.prototype.KwtIsSubscribed = function(e) {
                    return e.Status !== Contracts.Agenda.KWT.Enums.KeuzewerktijdStatus.NietIngeschreven
                }
                ,
                t.prototype.CreateDisabledString = function(e) {
                    var t = "";
                    return this.KwtIsFull(e) && (t = "vol"),
                    e.MagInschrijven || ("" !== t ? t += " - gesloten" : t = "gesloten"),
                    t
                }
                ,
                t.prototype.UnsubscribeKWT = function(e) {
                    var t = this;
                    if (e.Status !== Contracts.Agenda.KWT.Enums.KeuzewerktijdStatus.VerplichtIngeschreven && !this.hasPendingKWTCalls) {
                        this.hasPendingKWTCalls = !0;
                        var n = i.findWhere(this.KWTPostObjects, {
                            Id: e.Id
                        });
                        this.agendaDashboardService.removeKWTInschrijving(this.persoonId, n).then(function() {
                            t.hasPendingKWTCalls = !1,
                            t.applicationService.showMessage("Het uitschrijven voor de KWT les is goed gegaan", c.i.INFORMATION, t.toastDisplayTime, "KWT Uitschrijven"),
                            t.handleKWTLes(t.les)
                        }, function(e) {
                            t.hasPendingKWTCalls = !1,
                            Object(l.w)(e.Message) || t.applicationService.showMessage(e.Message, c.i.WARNING, t.toastDisplayTime, "KWT Uitschrijven")
                        })
                    }
                }
                ,
                t.prototype.SubscribeKWT = function(e) {
                    var t = this;
                    if (e.Status !== Contracts.Agenda.KWT.Enums.KeuzewerktijdStatus.VerplichtIngeschreven && !this.KwtIsDisabled(e) && !this.hasPendingKWTCalls) {
                        this.$scope.debug = "1. start subscribe > pending = true",
                        this.hasPendingKWTCalls = !0;
                        var n = i.findWhere(this.KWTPostObjects, {
                            Id: e.Id
                        });
                        this.agendaDashboardService.setKWTInschrijving(this.persoonId, n).then(function() {
                            t.hasPendingKWTCalls = !1,
                            t.handleKWTLes(t.les),
                            t.applicationService.showMessage("Het inschrijven voor de KWT les is goed gegaan", c.i.INFORMATION, t.toastDisplayTime, "KWT Inschrijven")
                        }, function(e) {
                            t.hasPendingKWTCalls = !1,
                            Object(l.w)(e.Message) || t.applicationService.showMessage(e.Message, c.i.WARNING, t.toastDisplayTime, "KWT Inschrijven")
                        })
                    }
                }
                ,
                t.prototype.ToggleSubscribeKWT = function(e) {
                    this.highLightedKwtKeuzeIsGekozen = this.isIngeschreven(e.Status),
                    this.selectedKWTKeuze.Id === e.Id ? e.Status === Contracts.Agenda.KWT.Enums.KeuzewerktijdStatus.Ingeschreven ? this.UnsubscribeKWT(e) : e.Status === Contracts.Agenda.KWT.Enums.KeuzewerktijdStatus.NietIngeschreven ? this.SubscribeKWT(e) : e.Status === Contracts.Agenda.KWT.Enums.KeuzewerktijdStatus.VerplichtIngeschreven && this.applicationService.showMessage("Het is niet mogelijk om je voor deze les uit te schrijven", c.i.WARNING, this.toastDisplayTime, "KWT Uitschrijven") : this.selectedKWTKeuze = e
                }
                ,
                t.prototype.createKeuzeViewObject = function(e) {
                    var t = this
                      , n = [];
                    return i.each(e.Keuzes, function(s) {
                        var r = i.pluck(s.Lokalen, "Naam").join(", ")
                          , o = i.pluck(s.Docenten, "Naam").join(", ");
                        n.push({
                            Id: s.Id,
                            Tijdstip: Object(l.h)("{0} - {1}", a(s.Begin).format("HH:mm"), a(s.Einde).format("HH:mm")),
                            AantalDeelnemers: s.AantalDeelnemers,
                            MaxDeelnemers: t.createMaxDeelnemersString(s.MaxDeelnemers),
                            Ruimte: r,
                            Omschrijving: s.Omschrijving,
                            Docent: o,
                            Status: s.Status,
                            IsEnabled: !t.KwtIsFull(s),
                            MagInschrijven: e.MagInschrijven
                        })
                    }),
                    n
                }
                ,
                t.prototype.createMaxDeelnemersString = function(t) {
                    return null === t ? "onbeperkt" : e.isUndefined(t) ? "?" : t
                }
                ,
                t.prototype.updateAfspraak = function() {
                    var e = this;
                    this.agendaDashboardService.updateAfspraak(this.persoonId, this.afspraakId, this.les).then(function(t) {
                        e.les.Afgerond ? e.applicationService.showMessage(e.magisterLocale.AgendaStrings.AFRONDEN_HUISWERK_GOED_GEGAAN, c.i.INFORMATION, e.toastDisplayTime, e.magisterLocale.AgendaStrings.HUISWERK_AFGEROND) : e.applicationService.showMessage(e.magisterLocale.AgendaStrings.AFRONDEN_ONGEDAAN_MAKEN_GOED_GEGAAN, c.i.INFORMATION, e.toastDisplayTime, e.magisterLocale.AgendaStrings.AFRONDEN_ONGEDAAN_MAKEN)
                    }, function(t) {
                        e.les.Afgerond ? e.applicationService.showMessage(e.magisterLocale.AgendaStrings.AFRONDEN_HUISWERK_MIS_GEGAAN, c.i.INFORMATION, e.toastDisplayTime, e.magisterLocale.AgendaStrings.HUISWERK_AFGEROND) : e.applicationService.showMessage(e.magisterLocale.AgendaStrings.AFRONDEN_ONGEDAAN_MAKEN_MIS_GEGAAN, c.i.INFORMATION, e.toastDisplayTime, e.magisterLocale.AgendaStrings.AFRONDEN_ONGEDAAN_MAKEN)
                    })
                }
                ,
                t.prototype.setVisibility = function(e) {
                    Object(l.u)(e.vm.les.Inhoud) || (this.pageState |= u.c.huiswerkInhoud),
                    Object(l.w)(e.vm.les.Bijlagen) || Object(l.o)(e.vm.les.Bijlagen) || (this.pageState |= u.c.huiswerkAttachments),
                    (this.pageState & u.c.huiswerkInhoud) !== u.c.huiswerkInhoud && (this.pageState & u.c.huiswerkAttachments) !== u.c.huiswerkAttachments || (this.pageState |= u.c.huiswerkBlock),
                    0 !== e.vm.les.OpdrachtId && (this.pageState |= u.c.eloOpdrachtBlock),
                    Object(l.w)(e.vm.studiewijzers) || Object(l.o)(e.vm.studiewijzers) || (this.pageState |= u.c.studiewijzersBlock),
                    Object(l.w)(e.vm.KWTKeuzes) || Object(l.o)(e.vm.KWTKeuzes) || (this.pageState |= u.c.KWTBlock)
                }
                ,
                t.prototype.isIngeschreven = function(e) {
                    return e === Contracts.Agenda.KWT.Enums.KeuzewerktijdStatus.Ingeschreven || e === Contracts.Agenda.KWT.Enums.KeuzewerktijdStatus.VerplichtIngeschreven
                }
                ,
                t.prototype.getVisibility = function(e) {
                    return (this.pageState & e) === e
                }
                ,
                t.prototype.hasStudieWijzersPrivilege = function() {
                    return this.currentUser.hasPrivilege(r.a.Studiewijzers, s.a.Read)
                }
                ,
                t.prototype.hasOpdrachtenPrivilege = function() {
                    return this.currentUser.hasPrivilege(r.a.EloOpdracht, s.a.Read)
                }
                ,
                t.prototype.onOpenAttachment = function(e) {
                    var t = this;
                    2 === e.Status ? this.openAttachment(e) : this.agendaDashboardService.getAfspraak(this.persoonId, this.afspraakId, !1).then(function(n) {
                        i.each(n.Bijlagen, function(n) {
                            n.Id === e.Id && (0 === n.Status ? t.applicationService.showMessage("Bezig met toevoegen, even geduld.", c.i.INFORMATION, 5e3, "Bijlage niet geladen") : t.openAttachment(e))
                        })
                    })
                }
                ,
                t.prototype.openAttachment = function(e) {
                    e.Url ? this.$window.open(e.Url, "_blank") : this.downloadTokenService.downloadFromLocation(Object(l.j)(e.Links, l.a.Contents))
                }
                ,
                t.$inject = ["$scope", "$q", "$location", "$routeParams", "$timeout", "$window", "currentUser", "agendaDashboardService", "opdrachtenService", "studiewijzerService", "dialogService", "applicationService", "magisterLocale", "tabService", "downloadTokenService", t],
                t
            }()
        }
        ).call(this, n(1), n(14), n(3))
    },
    445: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = function() {
            function e(e) {
                var t = this;
                this.$timeout = e,
                this.template = n(446),
                this.replace = !0,
                this.link = function(e, n, a) {
                    return t.linkFn(e, n, a)
                }
            }
            return e.prototype.linkFn = function(e, t, n) {}
            ,
            e.$inject = ["$timeout", function(t) {
                return new e(t)
            }
            ],
            e
        }()
    },
    446: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block" data-ng-class="{\'fold\': fold}">\r\n        <h3 data-ng-click="blockFold()"><span data-ng-class="{\'icon-up-arrow\': !fold, \'icon-down-arrow\': fold}"></span><b>Informatie</b></h3>\r\n        <div class="content">\r\n            <dl class="list-dl">\r\n                <dt>Datum</dt>\r\n                <dd>{{vm.afspraak.Start | date: \'EEE dd-MM\'}}</dd>\r\n                <dt>Tijdstip</dt>\r\n                <dd data-ng-show="vm.afspraak.isHeleDag">hele dag</dd>\r\n                <dd data-ng-hide="vm.afspraak.isHeleDag" data-ng-bind-template="{{vm.afspraak.Start | date: \'HH:mm\'}} - {{vm.afspraak.Einde | date: \'HH:mm\'}}"></dd>\r\n                <dt data-ng-if="vm.afspraak.magLocatieZien">Locatie</dt>\r\n                <dd data-ng-if="vm.afspraak.magLocatieZien">{{vm.afspraak.Lokatie}}</dd>\r\n                <dt>Docent</dt>\r\n                <dd class="no-ellipsis">{{vm.afspraak.Docenten | commaseparated: \', \': \'Naam\'}}</dd>\r\n                <dt ng-if="vm.afspraak.recurrencePattern" id="recurrencePatternHeader">Herhalingspatroon</dt>\r\n                <div ng-if="vm.afspraak.recurrencePattern" id="recurrencePatternText" ng-bind="vm.afspraak.recurrencePattern"></div>\r\n            </dl>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
    },
    447: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return o
            });
            var a = n(85)
              , i = n(98)
              , s = n(7)
              , r = n(0)
              , o = function() {
                function t(e, t, a, i, s) {
                    var r = this;
                    this.$timeout = e,
                    this.agendaDashboardService = t,
                    this.applicationService = a,
                    this.dialogService = i,
                    this.magisterLocale = s,
                    this.template = n(448),
                    this.replace = !0,
                    this.link = function(e, t, n) {
                        return r.linkFn(e, t, n)
                    }
                }
                return t.prototype.openAantekeningenDialog = function(t) {
                    var s = {
                        inhoud: t.vm.les.Aantekening
                    };
                    this.dialogService.showDialog({
                        title: "Mijn Aantekeningen",
                        template: n(449),
                        buttons: [a.a.Save, a.a.Cancel],
                        callback: function(n, i) {
                            n.clickedButtonType === a.a.Save && e.isDefined(n.data) && (t.vm.les.Aantekening = n.data.inhoud),
                            i.resolve({
                                shouldClose: !0
                            })
                        },
                        size: i.a.large,
                        viewModel: s
                    })
                }
                ,
                t.prototype.linkFn = function(t, n, a) {
                    var i = this;
                    t.$watch("vm.les.Aantekening", function(n, a) {
                        Object(r.w)(n) ? i.aantekening = void 0 : (e.isUndefined(a) && (i.aantekening = e.copy(n)),
                        i.onChange(t, n))
                    }),
                    t.openAantekeningenDialog = function() {
                        return i.openAantekeningenDialog(t)
                    }
                }
                ,
                t.prototype.onChange = function(t, n) {
                    e.equals(this.aantekening, n) || (this.aantekening = n,
                    this.updateAfspraak(t))
                }
                ,
                t.prototype.updateAfspraak = function(e) {
                    var t = this;
                    this.agendaDashboardService.updateAfspraak(e.vm.persoonId, e.vm.afspraakId, e.vm.les).then(function() {
                        t.applicationService.showMessage("aantekening is opgeslagen", s.i.INFORMATION, 5e3, t.magisterLocale.NotificationStrings.TITLE_SAVE_SUCCES)
                    }, function() {
                        t.applicationService.showMessage("aantekening is niet opgeslagen", s.i.ERROR, 5e3, t.magisterLocale.NotificationStrings.TITLE_SAVE_FAILED)
                    })
                }
                ,
                t.$inject = ["$timeout", "agendaDashboardService", "applicationService", "dialogService", "magisterLocale", function(e, n, a, i, s) {
                    return new t(e,n,a,i,s)
                }
                ],
                t
            }()
        }
        ).call(this, n(1))
    },
    448: function(e, t) {
        e.exports = "<div class=\"widget\">\r\n    <div class=\"block\">\r\n        <h3><span class=\"block-menu icon-fullsize\" data-ng-click=\"openAantekeningenDialog();\"></span><b>Mijn aantekeningen</b></h3>\r\n        <div class=\"content aantekeningen\">\r\n            <div class=\"widget wide wysiwyg k-content\">\r\n                <textarea id=\"editor\"\r\n                          data-kendo-editor=\"editor\"\r\n                          data-k-options=\"{encoded: false}\"\r\n                          data-ng-model=\"vm.les.Aantekening\"\r\n                          data-k-tools=\"['bold', 'italic', 'underline', 'justifyLeft', 'justifyCenter', 'justifyRight', 'insertUnorderedList', 'insertOrderedList']\"\r\n                          data-k-messages=\"{bold:'Vet', italic:'Cursief', underline:'Onderstrepen',justifyLeft:'Links uitlijnen', justifyCenter:'Centreren', justifyRight:'Rechts uitlijnen', insertUnorderedList:'Opsommingstekens', insertOrderedList:'Nummering'}\"\r\n                          data-ng-blur=\"\"></textarea>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"
    },
    449: function(e, t) {
        e.exports = "<div class=\"wysiwyg\" style=\"height:100%;overflow:hidden;border-left: 1px solid #ccc !important;border-right: 1px solid #ccc !important;\">\r\n    <textarea id=\"editor\"\r\n              data-kendo-editor=\"editor\"\r\n              data-k-options=\"{encoded: false}\"\r\n              data-ng-model=\"vm.inhoud\"\r\n              data-k-tools=\"['bold', 'italic', 'underline', 'justifyLeft', 'justifyCenter', 'justifyRight', 'insertUnorderedList', 'insertOrderedList']\"\r\n              data-k-messages=\"{bold:'Vet', italic:'Cursief', underline:'Onderstrepen',justifyLeft:'Links uitlijnen', justifyCenter:'Centreren', justifyRight:'Rechts uitlijnen', insertUnorderedList:'Opsommingstekens', insertOrderedList:'Nummering'}\"\r\n              data-ng-blur=\"onChange()\"\r\n              style=\"height: 100%;\"></textarea>\r\n</div>"
    },
    450: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = function() {
            function e(e) {
                var t = this;
                this.$timeout = e,
                this.replace = !0,
                this.link = function(e, n, a) {
                    return t.linkFn(e, n, a)
                }
            }
            return e.prototype.linkFn = function(e, t, n) {}
            ,
            e.$inject = ["$timeout", function(t) {
                return new e(t)
            }
            ],
            e
        }()
    },
    451: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = function() {
            function e(e) {
                var t = this;
                this.$timeout = e,
                this.template = n(452),
                this.replace = !0,
                this.link = function(e, n, a) {
                    return t.linkFn(e, n, a)
                }
            }
            return e.prototype.linkFn = function(e, t, n) {}
            ,
            e.$inject = ["$timeout", function(t) {
                return new e(t)
            }
            ],
            e
        }()
    },
    452: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block" data-ng-class="{\'fold\': fold}">\r\n        <h3 data-ng-click="fold=!fold" ng-init="fold=false"><span data-ng-class="{\'icon-up-arrow\': !fold, \'icon-down-arrow\': fold}"></span><b>Informatie</b></h3>\r\n        <div class="content">\r\n            <dl class="list-dl">\r\n                <dt>Lesuur</dt>\r\n                <dd data-ng-bind="vm.les.LesuurVan"></dd>\r\n                <dt>Begin</dt>\r\n                <dd data-ng-bind="vm.les.Start | date: \'dd MMM HH:mm\'"></dd>\r\n                <dt>Eind</dt>\r\n                <dd data-ng-bind="vm.les.Einde | date: \'dd MMM HH:mm\'"></dd>\r\n                <dt>Locatie</dt>\r\n                <dd data-ng-bind="vm.les.Lokatie"></dd>\r\n                <dt>Vak</dt>\r\n                <dd data-ng-bind="vm.les.Vakken | commaseparated: \', \': \'Naam\'"></dd>\r\n                <dt>Docent</dt>\r\n                <dd data-ng-bind="vm.les.Docenten | commaseparated: \', \': \'Naam\'"></dd>\r\n\r\n                <dt ng-if="vm.agendaBijzonderheden.isToets || vm.agendaBijzonderheden.les.inhoud || vm.agendaBijzonderheden.les.heeftBijlagen">Lesinformatie</dt>\r\n                <dd data-ng-if="vm.agendaBijzonderheden.isToets">\r\n                    <span data-ng-show="event.afspraakType !== 103 && vm.agendaBijzonderheden.les.infoType === 2" class="agenda-text-icon" icon-type="information">Proefwerk</span>\r\n                    <span data-ng-show="event.afspraakType !== 103 && vm.agendaBijzonderheden.les.infoType === 3" class="agenda-text-icon" icon-type="information">Tentamen</span>\r\n                    <span data-ng-show="event.afspraakType !== 103 && vm.agendaBijzonderheden.les.infoType === 4" class="agenda-text-icon" icon-type="information">SO</span>\r\n                    <span data-ng-show="event.afspraakType !== 103 && vm.agendaBijzonderheden.les.infoType === 5" class="agenda-text-icon" icon-type="information">MO</span>\r\n                    <span data-ng-show="event.afspraakType === 103" class="agenda-text-icon" icon-type="information">Examen</span>\r\n                </dd>\r\n                \r\n                <dd data-ng-if="(vm.agendaBijzonderheden.les.inhoud || vm.agendaBijzonderheden.les.heeftBijlagen) && !vm.agendaBijzonderheden.isToets">\r\n                    <span data-ng-show="vm.agendaBijzonderheden.les.isAfgerond && vm.agendaBijzonderheden.les.infoType !== 6" class="agenda-text-icon" icon-type="ok">Huiswerk</span>\r\n                    <span data-ng-show="!vm.agendaBijzonderheden.les.isAfgerond && vm.agendaBijzonderheden.les.infoType !== 6" class="agenda-text-icon outline" icon-type="information">Huiswerk</span>\r\n                    <span data-ng-show="vm.agendaBijzonderheden.les.isAfgerond && vm.agendaBijzonderheden.les.infoType === 6" class="agenda-text-icon" icon-type="ok">Informatie</span>  \r\n                    <span data-ng-show="!vm.agendaBijzonderheden.les.isAfgerond && vm.agendaBijzonderheden.les.infoType === 6" class="agenda-text-icon" icon-type="information">Informatie</span>  \r\n                </dd>\r\n\r\n                <dt data-ng-if="vm.les.Type === vm.kwtEnumWaarde">Aantal/Max</dt>\r\n                <dd data-ng-if="vm.les.Type === vm.kwtEnumWaarde" data-ng-bind-template="{{vm.selectedKWTKeuze.AantalDeelnemers}} / {{vm.selectedKWTKeuze.MaxDeelnemers}}"></dd>\r\n            </dl>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
    },
    453: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return i
            });
            var a = n(454)
              , i = function() {
                function e() {
                    this.scope = {
                        views: "=",
                        sizeOptions: "=",
                        showHuiswerkCallback: "&",
                        changeSizeCallback: "&"
                    },
                    this.template = n(455),
                    this.replace = !0,
                    this.controller = s.$inject,
                    this.controllerAs = "ctrl"
                }
                return e.$inject = [function() {
                    return new e
                }
                ],
                e
            }()
              , s = function() {
                function t(e, t, n, a, i, s, r) {
                    var o = this;
                    this.$scope = e,
                    this.$location = t,
                    this.$timeout = n,
                    this.applicationService = a,
                    this.instellingService = i,
                    this.magisterLocale = s,
                    this.currentUser = r,
                    this.showHuiswerk = "0",
                    this.agendaSettings = {
                        view: "list",
                        sizeOption: "2"
                    },
                    this.loadSettings();
                    for (var c = 0; c < e.views.length; c++)
                        if (!0 === e.views[c].selected) {
                            this.view = e.views[c].type;
                            break
                        }
                    this.sizeOption = this.agendaSettings.sizeOption,
                    this.changeShowHuiswerk(),
                    this.viewOnChange = function(e) {
                        return o.updateAgendaViewByName(e.sender.value())
                    }
                    ,
                    this.sizeOnChange = function(e) {
                        return o.updateAgendaSizeBySize(e.sender.value())
                    }
                }
                return t.prototype.changeShowHuiswerk = function() {
                    void 0 === this.showHuiswerkCallback ? void 0 !== this.$scope.showHuiswerkCallback && (this.showHuiswerkCallback = this.$scope.showHuiswerkCallback(),
                    void 0 !== this.showHuiswerkCallback && this.showHuiswerkCallback("0" !== this.showHuiswerk)) : this.showHuiswerkCallback("0" !== this.showHuiswerk)
                }
                ,
                t.prototype.updateAgendaViewByName = function(e, t) {
                    var n, i = this;
                    switch (void 0 === t && (t = !0),
                    e) {
                    case a.a.WorkWeek:
                        e = e,
                        n = "/agenda/werkweek";
                        break;
                    case a.a.Week:
                        e = e,
                        n = "/agenda/week";
                        break;
                    case a.a.Day:
                        e = e,
                        n = "/agenda/dag";
                        break;
                    case a.a.Agenda:
                    default:
                        e = a.a.Agenda,
                        n = "/agenda"
                    }
                    this.agendaSettings.view = e,
                    t ? this.saveSettings(function() {
                        return i.$location.path(n)
                    }) : this.$location.path(n)
                }
                ,
                t.prototype.updateAgendaSizeBySize = function(e, t) {
                    void 0 === t && (t = !0),
                    this.agendaSettings.sizeOption = e,
                    t && this.saveSettings(),
                    this.changeSize()
                }
                ,
                t.prototype.changeSize = function() {
                    if (void 0 !== this.$scope.changeSizeCallback) {
                        var e = this.$scope.changeSizeCallback();
                        void 0 !== e && e(this.sizeOption)
                    }
                }
                ,
                t.prototype.saveSettings = function(e) {
                    void 0 === e && (e = function() {}
                    ),
                    this.instellingService.set(this.currentUser.person.id, "agendaSetting", this.agendaSettings).then(function() {
                        e()
                    }, function() {
                        e()
                    })
                }
                ,
                t.prototype.loadSettings = function() {
                    var t = this;
                    this.instellingService.get(this.currentUser.person.id, "agendaSetting").then(function(n) {
                        e.isDefined(n) && null !== n && ((e.isUndefined(n.view) || null === n.view) && (n.view = a.a.Agenda),
                        (e.isUndefined(n.sizeOption) || null === n.sizeOption) && (n.sizeOption = t.sizeOption),
                        t.agendaSettings = n,
                        t.view === a.a.Agenda && n.view !== t.view && t.updateAgendaViewByName(n.view, !1),
                        t.view !== a.a.Agenda && t.sizeOption !== n.sizeOption && t.$timeout(function() {
                            t.sizeOption = n.sizeOption,
                            t.updateAgendaSize(!1)
                        }))
                    }, function() {})
                }
                ,
                t.prototype.updateAgendaSize = function(e) {
                    void 0 === e && (e = !0);
                    var t = this.sizeOption;
                    this.updateAgendaSizeBySize(t, e)
                }
                ,
                t.$inject = ["$scope", "$location", "$timeout", "applicationService", "instellingService", "magisterLocale", "currentUser", t],
                t
            }()
        }
        ).call(this, n(1))
    },
    454: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = function() {
            function e() {}
            return e.Agenda = "agenda",
            e.Day = "day",
            e.Week = "week",
            e.WorkWeek = "workWeek",
            e
        }()
    },
    455: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block" data-ng-class="{\'fold\': fold}" >\r\n        <h3 data-ng-click="fold=!fold" data-ng-init="fold=false"><span data-ng-class="{\'icon-up-arrow\': !fold, \'icon-down-arrow\': fold}"></span><b>Instellingen</b></h3>\r\n        <div class="content">\r\n            <form>\r\n                <div>\r\n                    <label>Weergave</label>\r\n                    <div class="fancy-select">\r\n                        <select id="views"\r\n                                class="select"\r\n                                data-kendo-drop-down-list="weergave"\r\n                                data-k-data-value-field="\'type\'"\r\n                                data-k-data-text-field="\'name\'"\r\n                                data-k-data-source="views"\r\n                                data-k-on-change="ctrl.viewOnChange(kendoEvent)"\r\n                                data-k-ng-model="ctrl.view"\r\n                                data-k-value-primitive="true"></select>\r\n                    </div>\r\n                </div>\r\n                <div data-ng-hide="ctrl.view === \'list\'">\r\n                    <label>Rijhoogte</label>\r\n                    <div class="fancy-select">\r\n                        <select id="rijhoogte"\r\n                                class="select"\r\n                                data-kendo-drop-down-list="rijhoogte"\r\n                                data-k-data-value-field="\'minorTickCount\'"\r\n                                data-k-data-text-field="\'title\'"\r\n                                data-k-data-source="sizeOptions"\r\n                                data-k-on-change="ctrl.sizeOnChange(kendoEvent)"\r\n                                data-k-ng-model="ctrl.sizeOption"\r\n                                data-k-value-primitive="true"></select>\r\n                    </div>\r\n                </div>\r\n                <div data-ng-show="ctrl.view === \'list\'">\r\n                    <label>Toon selectie</label>\r\n                    <span class="radio-buttons">\r\n                        <span class="radio">\r\n                            <input type="radio" data-ng-model="ctrl.showHuiswerk" name="showHuiswerk" value="0" data-ng-change="ctrl.changeShowHuiswerk()" id="showHuiswerk1"><label for="showHuiswerk1">alles</label>\r\n                        </span>\r\n                        <span class="radio">\r\n                            <input type="radio" data-ng-model="ctrl.showHuiswerk" name="showHuiswerk" value="1" data-ng-change="ctrl.changeShowHuiswerk()" id="showHuiswerk2"><label for="showHuiswerk2">lesinformatie</label>\r\n                        </span>\r\n                    </span>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
    },
    456: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = function() {
            function e(e) {
                var t = this;
                this.$timeout = e,
                this.template = n(457),
                this.replace = !0,
                this.link = function(e, n, a) {
                    return t.linkFn(e, n, a)
                }
            }
            return e.prototype.linkFn = function(e, t, n) {}
            ,
            e.$inject = ["$timeout", function(t) {
                return new e(t)
            }
            ],
            e
        }()
    },
    457: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block" data-ng-class="{\'fold\': foldKwtDeelname}">\r\n        <h3 data-ng-click="foldKwtInformatie=!foldKwtInformatie" ng-init="foldKwtInformatie=false"><span data-ng-class="{\'icon-up-arrow\': !foldKwtInformatie, \'icon-down-arrow\': foldKwtInformatie}"></span><b>KWT uur</b></h3>\r\n        <h3 data-ng-click="foldKwtDeelname=!foldKwtDeelname" ng-init="foldKwtDeelname=false"><span data-ng-class="{\'icon-up-arrow\': !foldKwtDeelname, \'icon-down-arrow\': foldKwtDeelname}"></span><b>Deelname</b></h3>\r\n        <div class="content">\r\n            <dl class="list-dl">\r\n                <dt>Inschrijving</dt>\r\n                <dd data-ng-bind-template="tot {{vm.selectedKWTKeuze.Einde |date: dd-MM-YYYY}}"></dd>\r\n            </dl>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
    },
    458: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return a
            });
            var a = function() {
                function t(e, t, a, i) {
                    var s = this;
                    this.$location = e,
                    this.$routeParams = t,
                    this.agendaService = a,
                    this.currentUser = i,
                    this.template = n(459),
                    this.replace = !0,
                    this.link = function(e, t, n) {
                        return s.linkFn(e, t, n)
                    }
                }
                return t.prototype.linkFn = function(e, t, n) {
                    var a = this;
                    e.setSelectedAfspraak = function(e) {
                        return a.setSelectedAfspraak(e)
                    }
                    ,
                    this.initialize(e)
                }
                ,
                t.prototype.initialize = function(t) {
                    var n = this
                      , a = this.$routeParams;
                    t.currentAfspraakId = +a.huiswerkId,
                    this.persoonId = this.currentUser.relatedPersons.current.id,
                    t.$watch("vm.les", function(a, i) {
                        null != a && (n.vanDatum = e(a.Start).format("YYYY-MM-DD"),
                        n.totDatum = e(a.Start).format("YYYY-MM-DD"),
                        n.mergeResources(t))
                    })
                }
                ,
                t.prototype.mergeResources = function(e) {
                    var t = this;
                    e.$broadcast("START-LOADING"),
                    this.getAfspraken().then(function(n) {
                        t.afsprakenResult = n,
                        t.createListForView(e),
                        e.$broadcast("STOP-LOADING")
                    })
                }
                ,
                t.prototype.getAfspraken = function() {
                    return this.agendaService.getAfspraken(this.persoonId, this.vanDatum, this.totDatum).then(function(e) {
                        return e.filter(function(e) {
                            return e.afspraakType === Contracts.Agenda.Afspraken.Enums.AfspraakType.Les || e.afspraakType === Contracts.Agenda.Afspraken.Enums.AfspraakType.Kwt
                        })
                    })
                }
                ,
                t.prototype.createListForView = function(e) {
                    var t = this.afsprakenResult;
                    t = this.agendaService.orderByDateTime(t),
                    this.agendaItemsVandaag = t,
                    e.lessen = this.agendaItemsVandaag
                }
                ,
                t.prototype.setSelectedAfspraak = function(e) {
                    this.$location.path("/agenda/huiswerk/" + e.id)
                }
                ,
                t.$inject = ["$location", "$routeParams", "agendaService", "currentUser", function(e, n, a, i) {
                    return new t(e,n,a,i)
                }
                ],
                t
            }()
        }
        ).call(this, n(14))
    },
    459: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block" data-ng-class="{\'fold\': fold}">\r\n        <h3 data-ng-click="blockFold()">\r\n            <b data-ng-bind-template="Lessen van {{vm.les.Start | date: \'EEE d MMM\'}}"></b>\r\n        </h3>\r\n        <div class="content">\r\n            <ul class="list agenda-list" data-ng-show="lessen.length">\r\n                <li data-ng-repeat="les in lessen" data-ng-class="{\'alert\':les.isWijziging}">\r\n                    <a data-ng-class="{\'current\': les.id === currentAfspraakId}" data-ng-click="setSelectedAfspraak(les);" title="">\r\n                        <span class="time" data-ng-bind-template="{{les.start | date:\'HH:mm\'}} - {{les.einde | date:\'HH:mm\'}}"></span>\r\n                        <span data-ng-show="{{les.lesuur != \'\'}}" class="nrblock" data-ng-bind="les.lesuur"></span>\r\n                        <span class="classroom" data-ng-bind="les.omschrijving"></span>\r\n                    </a>\r\n                </li>\r\n            </ul>   \r\n        </div>\r\n    </div>\r\n</div>\r\n'
    },
    460: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var a = n(0)
          , i = function() {
            function e(e, t, a, i, s, r) {
                var o = this;
                this.$q = e,
                this.$timeout = t,
                this.$location = a,
                this.$routeParams = i,
                this.agendaDashboardService = s,
                this.currentUser = r,
                this.template = n(461),
                this.replace = !0,
                this.link = function(e, t, n) {
                    return o.linkFn(e, t, n)
                }
            }
            return e.prototype.linkFn = function(e, t, n) {
                var a = this;
                this.persoonId = this.currentUser.relatedPersons.current.id,
                this.afspraakId = e.vm.afspraakId,
                e.selectNextAfspraak = function() {
                    return a.selectNextAfspraak(e)
                }
                ,
                e.selectPreviousAfspraak = function() {
                    return a.selectPreviousAfspraak(e)
                }
            }
            ,
            e.prototype.selectNextAfspraak = function(e) {
                var t = this
                  , n = Object(a.j)(e.vm.les.Links, a.a.Next);
                Object(a.w)(n) || this.agendaDashboardService.getAfspraakByDirection(n).then(function(e) {
                    t.$location.path("/agenda/huiswerk/" + e.Id)
                })
            }
            ,
            e.prototype.selectPreviousAfspraak = function(e) {
                var t = this
                  , n = Object(a.j)(e.vm.les.Links, a.a.Prev);
                Object(a.w)(n) || this.agendaDashboardService.getAfspraakByDirection(n).then(function(e) {
                    t.$location.path("/agenda/huiswerk/" + e.Id)
                })
            }
            ,
            e.$inject = ["$q", "$timeout", "$location", "$routeParams", "agendaDashboardService", "currentUser", function(t, n, a, i, s, r) {
                return new e(t,n,a,i,s,r)
            }
            ],
            e
        }()
    },
    461: function(e, t) {
        e.exports = '<div class="widget lesvak-prev-next">\r\n    <div class="block">\r\n        <h3><b>Lessen {{vm.les.Vakken[0].Naam}}</b></h3>\r\n        <div class="content content-auto">\r\n            <ul class="list">\r\n                <li>\r\n                    <a>\r\n                        <span class="prev icon-up-arrow" data-ng-click="selectPreviousAfspraak();" data-ng-class="{disabled: (vm.les.Links | getLinkNavigateUrl: \'Prev\') == null}"></span>\r\n                        <span class="current ellipsis" data-ng-bind-template="Les {{vm.les.LesuurVan}} {{vm.les.Omschrijving}}" title="Les {{vm.les.LesuurVan}} {{vm.les.Omschrijving}}"></span>\r\n                        <span class="next icon-up-arrow" data-ng-click="selectNextAfspraak();" data-ng-class="{disabled: (vm.les.Links | getLinkNavigateUrl: \'Next\') == null}"></span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
    },
    462: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var a = n(4)
          , i = n(0)
          , s = n(100)
          , r = function() {
            function e() {
                var e = this;
                this.scope = {
                    event: "="
                },
                this.template = n(463),
                this.replace = !0,
                this.controller = o.$inject,
                this.controllerAs = "ctrl",
                this.link = function(t, n, a, i) {
                    return e.linkFn(t, n, a, i)
                }
            }
            return e.prototype.linkFn = function(e, t, n, a) {
                var i = a;
                e.fold = !1,
                e.blockFold = function() {
                    e.fold = !e.fold
                }
                ,
                e.showBegin = function() {
                    return !0
                }
                ,
                e.showEinde = function() {
                    return !0
                }
                ,
                e.showOmschrijving = function() {
                    return !0
                }
                ,
                e.showVak = function() {
                    return !0
                }
                ,
                e.showDocent = function() {
                    return !0
                }
                ,
                e.showAbsentie = function() {
                    return i.showAbsentie(e.event)
                }
                ,
                e.getAbsentieText = function() {
                    return i.getAbsentieText(e.event)
                }
                ,
                e.showHuiswerkAfgerond = function() {
                    return i.showHuiswerkAfgerond(e.event)
                }
                ,
                e.showHuiswerkNietAfgerond = function() {
                    return i.showHuiswerkNietAfgerond(e.event)
                }
                ,
                e.showHuiswerkIsToets = function() {
                    return i.showHuiswerkIsToets(e.event)
                }
                ,
                e.showHuiswerkIcon = function() {
                    return i.showHuiswerkIcon(e.event)
                }
                ,
                e.showHuiswerk = function() {
                    return i.showHuiswerk(e.event)
                }
                ,
                e.showLocatie = function() {
                    return i.showLocatie(e.event)
                }
                ,
                e.showHerhaling = function() {
                    return i.showHerhaling(e.event)
                }
            }
            ,
            e.$inject = [function() {
                return new e
            }
            ],
            e
        }()
          , o = function() {
            function e(e) {
                this.currentUser = e
            }
            return e.prototype.showAbsentie = function(e) {
                return !Object(i.w)(e) && (-1 !== [1, 3, 6].indexOf(e.verantwoordingType) && (e.absentieType === s.a.geoorloofd || e.absentieType === s.a.ongeoorloofd))
            }
            ,
            e.prototype.getAbsentieText = function(e) {
                return Object(i.w)(e) ? "" : e.absentieOmschrijving
            }
            ,
            e.prototype.showHuiswerkAfgerond = function(e) {
                return !Object(i.w)(e) && e.isAfgerond
            }
            ,
            e.prototype.showHuiswerkNietAfgerond = function(e) {
                return !Object(i.w)(e) && ((!Object(i.p)(e.huiswerk) || e.heeftBijlagen) && !e.isAfgerond)
            }
            ,
            e.prototype.showHuiswerkIsToets = function(e) {
                return !Object(i.w)(e) && (e.isToets || e.isExamen)
            }
            ,
            e.prototype.showHuiswerkIcon = function(e) {
                return !Object(i.w)(e) && !e.isToets && (!Object(i.p)(e.huiswerk) && 6 !== e.infoType)
            }
            ,
            e.prototype.showHuiswerk = function(e) {
                return !Object(i.w)(e) && !Object(i.p)(e.huiswerk)
            }
            ,
            e.prototype.showLocatie = function(e) {
                return !Object(i.w)(e) && !(this.currentUser.isInRole(a.a.Ouder) && e.afspraakType === Contracts.Agenda.Afspraken.Enums.AfspraakType.Persoonlijk)
            }
            ,
            e.prototype.showHerhaling = function(e) {
                return !Object(i.w)(e) && (e.isHerhalend && !!e.herhaling && (6 === e.infoType || 0 === e.infoType))
            }
            ,
            e.$inject = ["currentUser", e],
            e
        }()
    },
    463: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block" data-ng-class="{\'fold\': fold}">\r\n        <h3 data-ng-click="blockFold()"><span data-ng-class="{\'icon-up-arrow\': !fold, \'icon-down-arrow\': fold}"></span><b>Afspraak</b></h3>\r\n        <div class="content">\r\n            <dl class="list-dl">\r\n                <dt data-ng-if="showBegin()">Begin</dt>\r\n                <dd data-ng-if="showBegin()" data-ng-bind="event.begin.toDate() | date: \'dd MMM HH:mm\'"></dd>\r\n                <dt data-ng-if="showEinde()">Eind</dt>\r\n                <dd data-ng-if="showEinde()" data-ng-bind="event.einde.toDate() | date: \'dd MMM HH:mm\'"></dd>\r\n                <dt data-ng-if="showOmschrijving()">Omschrijving</dt>\r\n                <dd data-ng-if="showOmschrijving()" data-ng-bind="event.title"></dd>\r\n                <dt data-ng-if="showLocatie()">Locatie</dt>\r\n                <dd data-ng-if="showLocatie()" data-ng-bind="event.locatie"></dd>\r\n                <dt data-ng-if="showVak()">Vak</dt>\r\n                <dd data-ng-if="showVak()" data-ng-bind="event.vak"></dd>\r\n                <dt data-ng-if="showDocent()">Docent</dt>\r\n                <dd data-ng-if="showDocent()" data-ng-bind="event.docent" class="no-ellipsis"></dd>\r\n                <dt data-ng-if="showHuiswerkIsToets()">\r\n                    Lesinformatie\r\n                </dt>\r\n                <dd data-ng-if="showHuiswerkIsToets()">\r\n                    <span data-ng-show="!event.isExamen && event.infoType === 2" class="agenda-text-icon" icon-type="information">Proefwerk</span>\r\n                    <span data-ng-show="!event.isExamen && event.infoType === 3" class="agenda-text-icon" icon-type="information">Tentamen</span>\r\n                    <span data-ng-show="!event.isExamen && event.infoType === 4" class="agenda-text-icon" icon-type="information">SO</span>\r\n                    <span data-ng-show="!event.isExamen && event.infoType === 5" class="agenda-text-icon" icon-type="information">MO</span>\r\n                    <span data-ng-show="event.isExamen" class="agenda-text-icon" icon-type="information">Examen</span>\r\n                </dd>\r\n\r\n                <dt data-ng-if="showHuiswerkIcon()">\r\n                    Lesinformatie\r\n                </dt>\r\n                <dd data-ng-if="showHuiswerkIcon()">\r\n                    <span data-ng-show="event.isAfgerond && event.infoType !== 6" class="agenda-text-icon" icon-type="ok">Huiswerk</span>\r\n                    <span data-ng-show="!event.isAfgerond && event.infoType !== 6" class="agenda-text-icon outline" icon-type="information">Huiswerk</span>\r\n                </dd>\r\n\r\n                <dt data-ng-if="showAbsentie()">\r\n                    Registraties\r\n                </dt>\r\n                <dd data-ng-if="showAbsentie()">\r\n                    \x3c!-- absentie, [1, 3, 6] = absent, ziek, vrijstelling --\x3e\r\n                    <span class="text-icon" data-ng-show="([1].indexOf(event.verantwoordingType) != -1) && event.absentieType === 2"\r\n                        icon-type="ok" title="{{getAbsentieText()}}">AB</span>\r\n                    <span class="text-icon" data-ng-show="([1].indexOf(event.verantwoordingType) != -1) && event.absentieType === 3"\r\n                        icon-type="error" title="{{getAbsentieText()}}">AB</span>\r\n\r\n                    <span class="text-icon" data-ng-show="([3].indexOf(event.verantwoordingType) != -1) && event.absentieType === 2"\r\n                        icon-type="ok" title="{{getAbsentieText()}}">ZK</span>\r\n                    <span class="text-icon" data-ng-show="([3].indexOf(event.verantwoordingType) != -1) && event.absentieType === 3"\r\n                        icon-type="error" title="{{getAbsentieText()}}">ZK</span>\r\n                    <span class="text-icon" data-ng-show="([6].indexOf(event.verantwoordingType) != -1)" icon-type="ok" title="{{getAbsentieText()}}">VR</span>\r\n                </dd>\r\n                \x3c!-- Herhalingspatroon --\x3e\r\n                <dt data-ng-if="showHerhaling()" id="recurrencePatternHeader">Herhalingspatroon</dt>\r\n                <div data-ng-if="showHerhaling()" id="recurrencePatternText" data-ng-bind="event.recurrencePattern"></div>\r\n                \x3c!-- Huiswerk/informatie --\x3e\r\n                <dt ng-if="showHuiswerk()" id="huiswerk-info">\r\n                    <span class="title" ng-if="event.infoType !== 6">Huiswerk</span>\r\n                    <span class="title" ng-if="event.infoType === 6">Informatie</span>\r\n                </dt>\r\n                <div data-ng-if="showHuiswerk()" id="huiswerk-info-text" data-ng-bind-html="event.huiswerk"></div>\r\n            </dl>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
    }
}]);

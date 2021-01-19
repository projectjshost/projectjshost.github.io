(window.webpackJsonp = window.webpackJsonp || []).push([[21], {
    119: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
            return r
        }),
        function(e) {
            e[e.NietGeselecteerd = 0] = "NietGeselecteerd",
            e[e.Voorlopig = 1] = "Voorlopig",
            e[e.Definitief = 2] = "Definitief"
        }(r || (r = {}))
    },
    623: function(e, t, n) {
        "use strict";
        n.r(t),
        function(e) {
            n.d(t, "vakkenPakketKeuzeAMD", function() {
                return p
            });
            var r = n(624)
              , i = n(625)
              , o = n(626)
              , a = n(629)
              , s = n(630)
              , c = n(631)
              , d = n(632)
              , l = n(634)
              , u = n(636)
              , p = e.module("BerichtenAMD", []);
            p.service("vakkenPakketKeuzeService", r.a.$inject).service("vpkVakkenService", i.a.$inject),
            p.controller("VakkenPakketKeuzeController", o.a.$inject).controller("OverzichtStepController", a.a.$inject).controller("StudiePakketKeuzeStepController", s.a.$inject).controller("VakkenKeuzeStepController", c.a.$inject),
            p.directive("overzichtStep", function() {
                return l.a
            }).directive("studieProfielStep", function() {
                return d.a
            }).directive("vakKeuzeStep", function() {
                return u.a
            })
        }
        .call(this, n(1))
    },
    624: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r = function() {
            function e(e, t) {
                this.$q = e,
                this.$resource = t,
                this.STUDIE_PROFIEL_KEUZE_URI = globalSettings.apiHost + "api/personen/:persoonId/vakkenpakketkeuze/studies",
                this.VAKKEN_KEUZE_URI = globalSettings.apiHost + "api/personen/:persoonId/vakkenpakketkeuze/studies/:studieId/profiel/:profielId",
                this.WORKFLOW_RESULTAAT_PUT_URI = globalSettings.apiHost + "api/personen/:persoonId/vakkenpakketkeuze/studies/:studieId/profiel/:profielId/aanmelding/:aanmeldingId",
                this.isDirty = !1
            }
            return e.prototype.saveVakkenPakketKeuze = function(e, t, n, r, i) {
                var o = this.$q.defer();
                return this.$resource(this.WORKFLOW_RESULTAAT_PUT_URI, {
                    persoonId: e,
                    studieId: t,
                    profielId: n,
                    aanmeldingId: r
                }).save(i, function(e) {
                    o.resolve(!0)
                }),
                o.promise
            }
            ,
            e.prototype.getStudiesEnPakketten = function(e) {
                var t = this.$q.defer();
                return this.$resource(this.STUDIE_PROFIEL_KEUZE_URI, {
                    persoonId: e
                }).get(function(e) {
                    t.resolve(e)
                }),
                t.promise
            }
            ,
            e.prototype.getVakkenVoorStudiePakket = function(e, t, n) {
                var r = this.$q.defer();
                return this.$resource(this.VAKKEN_KEUZE_URI, {
                    persoonId: e,
                    studieId: t,
                    profielId: n
                }).get(function(e) {
                    r.resolve(e)
                }),
                r.promise
            }
            ,
            e.prototype.setDirty = function(e) {
                this.isDirty = e
            }
            ,
            e.prototype.getDirty = function() {
                return this.isDirty
            }
            ,
            e.$inject = ["$q", "$resource", e],
            e
        }()
    },
    625: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return r
            });
            var r = function() {
                function t(e, t) {
                    this.$q = e,
                    this.$resource = t
                }
                return t.prototype.addIdToArrayItems = function(t) {
                    return e.each(t, function(e, t) {
                        e.UniqueId = t
                    }),
                    t
                }
                ,
                t.prototype.createViewGroepen = function(t) {
                    var n, r, i = this, o = [], a = e.groupBy(t, "IdVoorwaarde"), s = e.groupBy(a[-1], "VakDeel"), c = e.toArray(a), d = e.filter(c, function(e) {
                        return e.length > 0 && -1 !== e[0].IdVoorwaarde
                    }), l = e.union(e.toArray(s), e.toArray(d));
                    return e.each(l, function(t) {
                        r = e.first(t);
                        var a = i.createViewVakken(t);
                        n = {
                            Id: o.length,
                            Omschrijving: r.GroepOmschrijving,
                            KeuzeGroepType: i.getKeuzeGroepType(r),
                            MinAantalKeuzes: r.Min,
                            MaxAantalKeuzes: r.Max,
                            IsFolded: !1,
                            Vakken: a,
                            GekozenVakken: e.reject(a, function(e) {
                                return !e.IsGeselecteerd
                            })
                        },
                        o.push(n)
                    }),
                    o
                }
                ,
                t.prototype.checkAllGroepen = function(t, n) {
                    var r = e.pluck(t, "UniqueId")
                      , i = !0
                      , o = e.groupBy(n, "IdVoorwaarde");
                    return e.each(o, function(t) {
                        var n = e.first(t)
                          , o = e.pluck(t, "UniqueId")
                          , a = e.intersection(o, r);
                        0 !== n.Min && a.length < n.Min && (i = !1),
                        0 !== n.Max && a.length > n.Max && (i = !1)
                    }),
                    i
                }
                ,
                t.prototype.createViewVakken = function(t) {
                    var n, r = this, i = [];
                    return e.each(t, function(e) {
                        n = {
                            UniqueId: e.UniqueId,
                            Id: e.VakCode,
                            Omschrijving: e.VakOmschrijving,
                            Afkorting: e.VakCode,
                            IsVerplicht: e.IsVerplicht,
                            SLU: 0,
                            KeuzeGroepType: r.getKeuzeGroepType(e),
                            IsGeselecteerd: e.IsSelected
                        },
                        i.push(n)
                    }),
                    i
                }
                ,
                t.prototype.getKeuzeGroepType = function(e) {
                    return 1 === e.VakDeel ? "verplicht" : 2 === e.VakDeel ? "profiel" : (e.VakDeel,
                    "vrij")
                }
                ,
                t.$inject = ["$q", "vakkenPakketKeuzeService", t],
                t
            }()
        }
        ).call(this, n(3))
    },
    626: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return k
            });
            var r, i = n(7), o = n(5), a = n(8), s = n(627), c = n(119), d = n(0), l = n(106), u = n(628), p = (r = Object.setPrototypeOf || {
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
            ), k = function(t) {
                function n(e, n, r, i, o, a, s, c) {
                    var d = t.call(this, e, new u.a) || this;
                    return d.$scope = e,
                    d.$location = n,
                    d.$q = r,
                    d.applicationService = i,
                    d.vakkenPakketKeuzeService = o,
                    d.vpkVakkenService = a,
                    d.currentUser = s,
                    d.settingsService = c,
                    d.persoonId = d.currentUser.relatedPersons.current.id.toString(),
                    d.$scope.isVoltooienToegestaan = function() {
                        return d.isVoltooienToegestaan()
                    }
                    ,
                    d.setDirty(!1),
                    d.$scope.isDirty = function() {
                        return d.getDirty()
                    }
                    ,
                    d
                }
                return p(n, t),
                n.prototype.onClose = function() {
                    this.$location.search("").path(s.a)
                }
                ,
                n.prototype.isFinishEnabled = function() {
                    return !1
                }
                ,
                n.prototype.isVoltooienToegestaan = function() {
                    if (this.getDirty() && !Object(d.w)(this.model.SelectedStudie) && !Object(d.w)(this.model.ProfielVakken) && !e.some(this.model.FirstCallResponse, function(e) {
                        return 2 === e.StatusCode
                    })) {
                        var t = this.model.SelectedStudie.Id;
                        if (!Object(d.w)(this.model.ProfielVakken[t])) {
                            var n;
                            n = Object(d.t)(this.model.SelectedProfiel) ? this.model.SelectedProfiel.Id : "0";
                            var r = this.model.ProfielVakken[t][n];
                            return this.vpkVakkenService.checkAllGroepen(this.model.SelectedVakken, r)
                        }
                    }
                    return !1
                }
                ,
                n.prototype.getInitStep = function() {
                    var t = this
                      , n = this.$q.defer()
                      , r = !this.currentUser.hasPrivilege(o.a.Vakkenpakketkeuze, a.a.Create) || !this.currentUser.hasPrivilege(o.a.Vakkenpakketkeuze, a.a.Update);
                    return this.vakkenPakketKeuzeService.getStudiesEnPakketten(this.persoonId).then(function(i) {
                        var o = e.find(i.Items, function(e) {
                            return e.StatusCode !== c.a.NietGeselecteerd && (r && (e.StatusCode = c.a.Definitief),
                            !0)
                        });
                        t.model.FirstCallResponse = i.Items,
                        !Object(d.w)(o) || r ? n.resolve("vakkenpakketoverzichtstep") : n.resolve("studieprofielkeuzestep")
                    }),
                    n.promise
                }
                ,
                n.prototype.onFinish = function() {
                    var e = this;
                    if (this.getDirty()) {
                        var t;
                        t = Object(d.w)(this.$scope.model.SelectedProfiel) ? "0" : this.model.SelectedProfiel.Id;
                        var n = this.model.SelectedStudie.Id
                          , r = this.model.ProfielVakken[n][t];
                        if (this.vpkVakkenService.checkAllGroepen(this.model.SelectedVakken, r)) {
                            var o = this.createWorkflowResultDTO(this.model.SelectedVakken, r)
                              , a = this.$scope.model.AanmeldingId || 0;
                            this.vakkenPakketKeuzeService.saveVakkenPakketKeuze(this.persoonId, n.toString(), t, a.toString(), o).then(function() {
                                e.applicationService.showMessage("Het indienen van je keuze is gelukt.", i.i.INFORMATION, 5e3, "Vakkenpakketkeuze opsturen"),
                                e.setDirty(!1)
                            })
                        }
                    }
                }
                ,
                n.prototype.getDirty = function() {
                    return this.vakkenPakketKeuzeService.getDirty()
                }
                ,
                n.prototype.setDirty = function(e) {
                    this.vakkenPakketKeuzeService.setDirty(e)
                }
                ,
                n.prototype.createWorkflowResultDTO = function(t, n) {
                    var r, i = [];
                    return e.each(t, function(t) {
                        r = e.findWhere(n, {
                            UniqueId: t.UniqueId
                        }),
                        Object(d.t)(r) && (r.IsSelected = !0,
                        i.push(r))
                    }),
                    {
                        PersoonId: this.persoonId,
                        StudieId: this.model.SelectedStudie.Id,
                        GekozenVakken: i
                    }
                }
                ,
                n.$inject = ["$scope", "$location", "$q", "applicationService", "vakkenPakketKeuzeService", "vpkVakkenService", "currentUser", "settingsService", n],
                n
            }(l.a)
        }
        ).call(this, n(3))
    },
    627: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r = "/vandaag"
    },
    628: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r = function() {
            return function() {}
        }()
    },
    629: function(e, t, n) {
        "use strict";
        (function(e, r) {
            n.d(t, "a", function() {
                return k
            });
            var i, o = n(4), a = n(5), s = n(8), c = n(119), d = n(16), l = n(0), u = n(97), p = (i = Object.setPrototypeOf || {
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
                i(e, t),
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
            }
            ), k = function(t) {
                function n(e, n, r, i, o, a) {
                    var s = t.call(this, e) || this;
                    return s.$timeout = n,
                    s.vakkenPakketKeuzeService = r,
                    s.vpkVakkenService = i,
                    s.profielService = o,
                    s.currentUser = a,
                    s
                }
                return p(n, t),
                n.prototype.onInit = function() {
                    var t = this;
                    this.currentUser.isInRole(o.a.Leerling) ? this.$scope.model.LeerlingName = this.currentUser.person.fullName : this.$scope.model.LeerlingName = this.currentUser.relatedPersons.current.fullName,
                    this.$scope.model.OpenPrintScreen = function() {
                        t.OpenPrintScreen()
                    }
                    ,
                    this.jqueryResizeDetector = e(window).resize(this.setScrollbar),
                    this.setScrollbar()
                }
                ,
                n.prototype.beforeGoForward = function() {}
                ,
                n.prototype.OpenPrintScreen = function() {
                    this.removeScrollbar(),
                    Object(l.B)(),
                    this.setScrollbar()
                }
                ,
                n.prototype.setScrollbar = function() {
                    var t = e(window).height();
                    e("#vakkenkeuze-samenvatting").css({
                        "max-height": t - 250
                    })
                }
                ,
                n.prototype.removeScrollbar = function() {
                    e("#vakkenkeuze-samenvatting").css({
                        "max-height": "100%"
                    })
                }
                ,
                n.prototype.canGoBackward = function() {
                    var e = !this.currentUser.hasPrivilege(a.a.Vakkenpakketkeuze, s.a.Create) || !this.currentUser.hasPrivilege(a.a.Vakkenpakketkeuze, s.a.Update);
                    return !r.some(this.$scope.model.FirstCallResponse, function(e) {
                        return e.StatusCode === c.a.Definitief
                    }) && !e
                }
                ,
                n.prototype.canBeActivated = function() {
                    if (!Object(d.b)(this.model.ProfielVakken)) {
                        var e;
                        if (e = Object(l.w)(this.$scope.model.SelectedProfiel) ? "0" : this.model.SelectedProfiel.Id,
                        !Object(l.t)(this.model.SelectedStudie))
                            return !1;
                        var t = this.model.SelectedStudie.Id
                          , n = this.model.ProfielVakken[t][e];
                        return this.vpkVakkenService.checkAllGroepen(this.model.SelectedVakken, n)
                    }
                }
                ,
                n.prototype.canGoForward = function() {
                    return !0
                }
                ,
                n.prototype.goBackward = function() {}
                ,
                n.$inject = ["$scope", "$timeout", "vakkenPakketKeuzeService", "vpkVakkenService", "profielService", "currentUser", n],
                n
            }(u.a)
        }
        ).call(this, n(15), n(3))
    },
    630: function(e, t, n) {
        "use strict";
        (function(e, r) {
            n.d(t, "a", function() {
                return k
            });
            var i, o = n(5), a = n(8), s = n(119), c = n(0), d = n(3), l = n(16), u = n(97), p = (i = Object.setPrototypeOf || {
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
                i(e, t),
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
            }
            ), k = function(t) {
                function n(e, n, r, i) {
                    var o = t.call(this, e) || this;
                    return o.$timeout = n,
                    o.currentUser = r,
                    o.vakkenPakketKeuzeService = i,
                    o.persoonId = o.currentUser.relatedPersons.current.id.toString(),
                    e.onProfielDropdownChange = function(t, n) {
                        return o.onProfielDropdownChange(e, t.sender.value(), n)
                    }
                    ,
                    e.SelectStudie = function(e) {
                        o.selectStudie(e)
                    }
                    ,
                    e.clickStudieCheckbox = function(e, t) {
                        o.clickStudieCheckbox(e, t)
                    }
                    ,
                    e.$watch("model.studiePakketKeuze", function(e) {
                        o.selectStudie(e)
                    }),
                    e.$watch("model.FirstCallResponse", function(e) {
                        Object(c.w)(e) || (o.setDataForStep(e),
                        o.setScrollbar())
                    }),
                    e.onKeuzeRadioButtonClick = function(e) {
                        return o.onKeuzeRadioButtonClick(e)
                    }
                    ,
                    o
                }
                return p(n, t),
                n.prototype.setDirty = function(e) {
                    this.vakkenPakketKeuzeService.setDirty(e)
                }
                ,
                n.prototype.setScrollbar = function() {
                    var t = e(window).height()
                      , n = e("#studiekeuzesteptableitems").height();
                    n + 250 >= t ? e("#studiekeuzesteptable").css({
                        "max-height": t - 250,
                        overflow: "auto"
                    }) : e("#studiekeuzesteptable").css({
                        "max-height": n + 50
                    }),
                    e("#studiekeuzestepscreen").css({
                        height: "100%"
                    })
                }
                ,
                n.prototype.setDataForStep = function(e) {
                    this.studieDTOs = e,
                    this.model.Studies = this.createViewStudies(e);
                    var t = r.find(this.model.Studies, function(e) {
                        return e.IsSelected
                    });
                    Object(c.t)(t) && this.selectStudie(t.Id)
                }
                ,
                n.prototype.onInit = function() {
                    this.jqueryResizeDetector = e(window).resize(this.setScrollbar),
                    this.$timeout(this.setScrollbar, 200)
                }
                ,
                n.prototype.enableGoForward = function() {
                    return !Object(c.w)(this.model.SelectedStudie)
                }
                ,
                n.prototype.canGoForward = function() {
                    return !Object(c.w)(this.model.SelectedStudie)
                }
                ,
                n.prototype.beforeGoForward = function() {
                    this.jqueryResizeDetector.off()
                }
                ,
                n.prototype.goBackward = function() {}
                ,
                n.prototype.canBeActivated = function() {
                    var e = !r.some(this.$scope.model.FirstCallResponse, function(e) {
                        return e.StatusCode === s.a.Definitief
                    })
                      , t = !this.currentUser.hasPrivilege(o.a.Vakkenpakketkeuze, a.a.Create) || !this.currentUser.hasPrivilege(o.a.Vakkenpakketkeuze, a.a.Update);
                    return e && !t
                }
                ,
                n.prototype.clickStudieCheckbox = function(e, t, n) {
                    this.vakkenPakketKeuzeService.setDirty(!0),
                    t ? this.deselectStudie() : this.selectStudie(e, n)
                }
                ,
                n.prototype.deselectStudie = function() {
                    this.model.SelectedStudie = null,
                    r.each(this.model.Studies, function(e) {
                        e.IsSelected = !1
                    })
                }
                ,
                n.prototype.selectStudie = function(e, t) {
                    this.model.SelectedStudie = r.first(r.filter(this.model.Studies, function(t) {
                        var n = t.Id === e;
                        return t.IsSelected = n,
                        t.IsSelected
                    })),
                    Object(c.t)(this.model.SelectedStudie) && (this.$scope.model.studiePakketKeuze !== this.model.SelectedStudie.Id && (this.$scope.model.studiePakketKeuze = this.$scope.model.SelectedStudie.Id),
                    Object(c.w)(t) ? (Object(d.isEmpty)(this.model.SelectedStudie.SelectedProfielId) && !Object(l.b)(this.model.SelectedStudie.ProfielKeuzes) && (this.model.SelectedStudie.SelectedProfielId = r.first(this.model.SelectedStudie.ProfielKeuzes).Afkorting),
                    this.selectProfiel(this.model.SelectedStudie.SelectedProfielId)) : this.selectProfiel(t))
                }
                ,
                n.prototype.selectProfiel = function(e) {
                    var t = this;
                    this.$scope.model.SelectedProfiel = r.find(this.model.SelectedStudie.ProfielKeuzes, function(t) {
                        return t.Afkorting === e || t.Id === e
                    });
                    r.find(this.$scope.model.Studies, function(e) {
                        return e.Id === t.$scope.model.SelectedStudie.Id && (e.SelectedProfielId = t.$scope.model.SelectedProfiel.Id,
                        !0)
                    })
                }
                ,
                n.prototype.onProfielDropdownChange = function(e, t, n) {
                    this.selectStudie(n.Id, t)
                }
                ,
                n.prototype.createViewStudies = function(e) {
                    var t, n, i, o, a = this, s = [], d = r.groupBy(e, "Id");
                    return r.each(d, function(e) {
                        0 !== (n = r.first(e)).AanmeldingId && (a.model.AanmeldingId = n.AanmeldingId),
                        i = r.find(e, function(e) {
                            if (0 !== e.StatusCode)
                                return e.HuidigProfiel === e.ProfielCode
                        }),
                        o = Object(c.w)(i) ? "" : i.ProfielId;
                        var d = a.createViewProfielen(e);
                        t = {
                            Id: n.Id,
                            Omschrijving: n.Omschrijving,
                            MinSLU: 0,
                            IsSelected: "" !== n.Status,
                            ProfielKeuzes: d,
                            AanmeldingId: n.AanmeldingId,
                            SelectedProfielId: o
                        },
                        s.push(t)
                    }),
                    s
                }
                ,
                n.prototype.createViewProfielen = function(e) {
                    var t, n = [];
                    r.first(e).HeeftProfiel && r.each(e, function(e) {
                        t = {
                            Afkorting: e.ProfielCode,
                            Id: e.ProfielId,
                            Omschrijving: e.ProfielOmschrijving
                        },
                        n.push(t)
                    });
                    return n
                }
                ,
                n.prototype.createPostObjects = function(e) {
                    return null
                }
                ,
                n.prototype.onKeuzeRadioButtonClick = function(e) {
                    var t = r.find(this.model.Studies, function(e) {
                        return e.IsSelected
                    });
                    e === t || !1 === e.IsSelected ? e.IsSelected = !0 : (Object(c.t)(t) && (t.IsSelected = !1),
                    this.selectStudie(e.Id))
                }
                ,
                n.$inject = ["$scope", "$timeout", "currentUser", "vakkenPakketKeuzeService", n],
                n
            }(u.a)
        }
        ).call(this, n(15), n(3))
    },
    631: function(e, t, n) {
        "use strict";
        (function(e, r) {
            n.d(t, "a", function() {
                return c
            });
            var i, o = n(0), a = n(97), s = (i = Object.setPrototypeOf || {
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
                i(e, t),
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
            }
            ), c = function(t) {
                function n(e, n, r, i, a, s) {
                    var c = t.call(this, e) || this;
                    return c.$timeout = n,
                    c.applicationService = r,
                    c.currentUser = i,
                    c.vakkenPakketKeuzeService = a,
                    c.vpkVakkenService = s,
                    c.$scope.model.ProfielVakken = [],
                    e.CannotSelectCheck = function(e, t) {
                        return c.cannotSelectCheck(e, t)
                    }
                    ,
                    e.ToggleVakSelectie = function(e, t) {
                        return c.toggleVakSelectie(e, t)
                    }
                    ,
                    e.GenerateSelectedString = function(e, t) {
                        return c.generateSelectedString(e, t)
                    }
                    ,
                    e.ToggleGroupFold = function(e) {
                        return c.toggleGroupFold(e)
                    }
                    ,
                    e.GenerateMinMaxString = function(e, t) {
                        return c.generateMinMaxString(e, t)
                    }
                    ,
                    e.$watch("model.SelectedStudie", function(e) {
                        Object(o.w)(e) || c.setDataForStep()
                    }),
                    e.$watch("model.SelectedProfiel", function(e) {
                        Object(o.w)(e) || c.setDataForStep()
                    }),
                    e.enableGoForward = function() {
                        return c.canGoForward()
                    }
                    ,
                    c
                }
                return s(n, t),
                n.prototype.onInit = function() {
                    this.setDataForStep(),
                    this.jqueryResizeDetector = e(window).resize(this.setScrollbar),
                    this.$timeout(this.setScrollbar, 200)
                }
                ,
                n.prototype.setScrollbar = function() {
                    var t = e(window).height();
                    e("#vakkenpakketkeuze-content").css({
                        "max-height": t - 250,
                        position: "relative"
                    }),
                    e("#vakkenkeuze-overzicht").css({
                        "max-height": t - 250
                    }),
                    e("#vakkenkeuzestepscreen").css({
                        height: "100%"
                    })
                }
                ,
                n.prototype.isNextStepAvailable = function() {
                    return this.canGoForward()
                }
                ,
                n.prototype.setDataForStep = function() {
                    var e, t = this, n = this.currentUser.relatedPersons.current.id.toString(), r = this.model.SelectedStudie.Id.toString();
                    e = Object(o.w)(this.model.SelectedStudie.SelectedProfielId) ? "0" : this.model.SelectedStudie.SelectedProfielId,
                    Object(o.w)(this.$scope.model.ProfielVakken[r]) && (this.$scope.model.ProfielVakken[r] = {}),
                    Object(o.w)(this.$scope.model.ProfielVakken[r][e]) ? this.vakkenPakketKeuzeService.getVakkenVoorStudiePakket(n, r, e).then(function(n) {
                        t.$scope.model.ProfielVakken[r][e] = t.vpkVakkenService.addIdToArrayItems(n.Items),
                        t.$scope.model.Vakken = t.vpkVakkenService.createViewGroepen(t.$scope.model.ProfielVakken[r][e]),
                        t.fillInitiallySelectedVakken(),
                        t.setScrollbar()
                    }) : (this.$scope.model.Vakken = this.vpkVakkenService.createViewGroepen(this.$scope.model.ProfielVakken[r][e]),
                    this.fillInitiallySelectedVakken())
                }
                ,
                n.prototype.canGoForward = function() {
                    var e;
                    e = Object(o.w)(this.$scope.model.SelectedProfiel) ? "0" : this.model.SelectedProfiel.Id;
                    var t = this.model.SelectedStudie.Id
                      , n = this.model.ProfielVakken[t][e];
                    return this.vpkVakkenService.checkAllGroepen(this.model.SelectedVakken, n)
                }
                ,
                n.prototype.beforeGoForward = function() {
                    this.jqueryResizeDetector.off()
                }
                ,
                n.prototype.canBeActivated = function() {
                    var e = !r.some(this.$scope.model.FirstCallResponse, function(e) {
                        return 2 === e.StatusCode
                    })
                      , t = Object(o.t)(this.model.SelectedStudie);
                    return e && t
                }
                ,
                n.prototype.resetKeuzes = function() {
                    this.model.Overzicht = {
                        verplicht: [],
                        profiel: [],
                        vrij: []
                    },
                    this.model.SelectedVakken = []
                }
                ,
                n.prototype.toggleGroupFold = function(e) {
                    e.IsFolded = !e.IsFolded
                }
                ,
                n.prototype.fillInitiallySelectedVakken = function() {
                    var e = this;
                    this.resetKeuzes(),
                    r.each(this.$scope.model.Vakken, function(t) {
                        r.each(t.Vakken, function(n) {
                            (n.IsVerplicht || n.IsGeselecteerd) && (e.addVakToOverview(t.KeuzeGroepType, n),
                            e.addVakToSelectedVakken(n)),
                            n.IsVerplicht && (t.Vakken = r.without(t.Vakken, n))
                        }),
                        0 === t.Vakken.length && (e.model.Vakken = r.without(e.model.Vakken, t))
                    })
                }
                ,
                n.prototype.checkForMax = function(e, t) {
                    return !e.IsGeselecteerd && 0 !== t.MaxAantalKeuzes && t.GekozenVakken.length === t.MaxAantalKeuzes
                }
                ,
                n.prototype.checkIfPreviouslySelected = function(e) {
                    return r.some(this.model.SelectedVakken, function(t) {
                        return t.Id === e.Id && t.$$hashKey !== e.$$hashKey
                    })
                }
                ,
                n.prototype.generateMinMaxString = function(e, t) {
                    return 0 !== e && 0 !== t ? "(min " + e + " / max " + t + ")" : 0 !== e ? "(min " + e + ")" : 0 !== t ? "(max " + t + ")" : ""
                }
                ,
                n.prototype.getPreviousSelection = function(e) {
                    var t = r.filter(this.model.SelectedVakken, function(t) {
                        return t.Id === e.Id && t.$$hashKey !== e.$$hashKey
                    });
                    return {
                        verplicht: "verplicht vak",
                        vrij: "vrije keuze vak",
                        profiel: "profielvak"
                    }[r.first(t).KeuzeGroepType] || "vak"
                }
                ,
                n.prototype.generateSelectedString = function(e, t) {
                    var n = "";
                    return this.checkForMax(e, t) ? n = " - Maximum te selecteren vakken bereikt." : this.checkIfPreviouslySelected(e) && (n = " - Reeds geselecteerd als " + this.getPreviousSelection(e)),
                    n
                }
                ,
                n.prototype.cannotSelectCheck = function(e, t) {
                    return !!this.checkForMax(e, t) || this.checkIfPreviouslySelected(e)
                }
                ,
                n.prototype.addVakToOverview = function(e, t) {
                    this.model.Overzicht[e].push(t)
                }
                ,
                n.prototype.addKeuzeToGroep = function(e, t) {
                    e.GekozenVakken.push(t)
                }
                ,
                n.prototype.addVakToSelectedVakken = function(e) {
                    return !r.contains(this.model.SelectedVakken, e) && (this.model.SelectedVakken.push(e),
                    !0)
                }
                ,
                n.prototype.toggleVakSelectie = function(e, t) {
                    this.setScrollbar(),
                    this.vakkenPakketKeuzeService.setDirty(!0),
                    t.IsGeselecteerd && !this.cannotSelectCheck(t, e) ? (this.addKeuzeToGroep(e, t),
                    this.addVakToSelectedVakken(t),
                    this.addVakToOverview(e.KeuzeGroepType, t)) : (this.removeKeuzeFromGroep(e, t),
                    this.removeVakFromSelectedVakken(t),
                    this.removeVakFromOverview(e.KeuzeGroepType, t)),
                    this.toggleSelectionInDTOs(t)
                }
                ,
                n.prototype.removeVakFromOverview = function(e, t) {
                    this.model.Overzicht[e] = r.without(this.model.Overzicht[e], t)
                }
                ,
                n.prototype.removeVakFromSelectedVakken = function(e) {
                    return !!r.contains(this.model.SelectedVakken, e) && (this.model.SelectedVakken = r.without(this.model.SelectedVakken, e),
                    !0)
                }
                ,
                n.prototype.removeKeuzeFromGroep = function(e, t) {
                    e.GekozenVakken = r.reject(e.GekozenVakken, function(e) {
                        return e.UniqueId === t.UniqueId
                    })
                }
                ,
                n.prototype.toggleSelectionInDTOs = function(e) {
                    var t, n = this.$scope.model.SelectedStudie.Id;
                    t = this.$scope.model.SelectedProfiel ? this.$scope.model.SelectedProfiel.Id : "0",
                    r.findWhere(this.$scope.model.ProfielVakken[n][t], {
                        UniqueId: e.UniqueId
                    }).IsSelected = e.IsGeselecteerd
                }
                ,
                n.$inject = ["$scope", "$timeout", "applicationService", "currentUser", "vakkenPakketKeuzeService", "vpkVakkenService", n],
                n
            }(a.a)
        }
        ).call(this, n(15), n(3))
    },
    632: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r = {
            restrict: "E",
            scope: !1,
            template: n(633)
        }
    },
    633: function(e, t) {
        e.exports = '<div class="sheet" id="studiekeuzestepscreen">\r\n    <div class="intro">\r\n        <strong>Status</strong>\r\n        Kies een studie en profiel.\r\n    </div>\r\n    <div class="table-block" id="studiekeuzesteptable">\r\n        <span data-ng-bind="studiePakketKeuze"></span>\r\n        <table class="table-grid-layout" id="studiekeuzesteptableitems">\r\n            <colgroup>\r\n                <col width="80">\r\n                <col width="250">\r\n                <col width="100%">\r\n            </colgroup>\r\n            <thead>\r\n                <tr>\r\n                    <th>Keuze</th>\r\n                    <th>Studie</th>\r\n                    <th>Profiel</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody >\r\n                <tr data-ng-repeat="studie in model.Studies" id="studieKeuzeRegel{{studie.Id}}">\r\n                    <td data-ng-click="clickStudieCheckbox(studie.Id,studie.IsSelected)">\r\n                        <span class="check">\r\n\r\n                            <input type="checkbox" data-ng-model="studie.IsSelected" data-ng-change="onKeuzeRadioButtonClick(studie)" />\r\n                            <label><span></span></label>\r\n                        </span>\r\n\r\n                    </td>\r\n                    <td data-ng-bind-template="{{studie.Omschrijving + studie.$dirty}}" data-ng-click="clickStudieCheckbox(studie.Id,studie.IsSelected)"></td>\r\n                    <td data-ng-show="studie.ProfielKeuzes" data-ng-click="selectStudie(studie.Id)">\r\n                        <div class="fancy-select" style="width:30%; min-width: 200px;">\r\n                            <span class="k-widget k-dropdown k-header select">\r\n                                <select data-k-on-data-bound="onDataBound(kendoEvent)"\r\n                                        data-k-value="studie.SelectedProfielId"\r\n                                        data-k-on-change="onProfielDropdownChange(kendoEvent, studie)"\r\n                                        data-k-data-source="studie.ProfielKeuzes"\r\n                                        data-k-data-text-field="\'Omschrijving\'"\r\n                                        data-k-data-value-field="\'Id\'"\r\n                                        class="select" id="studie{{studie.Id}}dropdown"\r\n                                        data-kendo-drop-down-list="studie{{studie.Id}}dropdown"\r\n                                        data-role="dropdownlist">\r\n                                    \x3c!--<option data-ng-repeat="profielKeuze in studie.ProfielKeuzes" value="profielKeuze" data-ng-bind="profielKeuze.Omschrijving"></option>--\x3e\r\n                                </select>\r\n                            </span>\r\n                        </div>\r\n                    </td>\r\n                    <td data-ng-hide="studie.ProfielKeuzes" class="no-data">geen</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>'
    },
    634: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r = {
            restrict: "E",
            scope: !1,
            template: n(635)
        }
    },
    635: function(e, t) {
        e.exports = '<div id="overzichtstepscreen">\r\n    <div class="col double-col">\r\n        <div class="widget double-widget">\r\n            <div class="block">\r\n                <h3>Vakkenpakketkeuze</h3>\r\n                <div class="content resume" id="vakkenkeuze-samenvatting">\r\n                    <span class="printOnly"><strong>Leerling:</strong>&nbsp;<br />{{model.LeerlingName}}<br /><br /></span>\r\n                    <strong>Studie:</strong>&nbsp;<br />{{model.SelectedStudie.Omschrijving}}<br /><br />\r\n                    <strong>Profiel/sector:</strong>&nbsp;<br />{{model.SelectedProfiel.Omschrijving}}<br /><br />\r\n                    <br />\r\n                    <strong>Gemeenschappelijke vakken</strong><br />\r\n                    <div data-ng-repeat="vak in model.Overzicht.verplicht | orderBy:\'Omschrijving\'"><span data-ng-bind="vak.Omschrijving"></span></div><br />\r\n                    <br />\r\n                    <strong>Profiel/Sector vakken</strong><br />\r\n                    <div data-ng-repeat="vak in model.Overzicht.profiel | orderBy:\'Omschrijving\'"><span data-ng-bind="vak.Omschrijving"></span></div><br />\r\n                    <br />\r\n                    <strong>Vrije keuze vakken</strong><br />\r\n                    <div data-ng-repeat="vak in model.Overzicht.vrij | orderBy:\'Omschrijving\'"><span data-ng-bind="vak.Omschrijving"></span></div><br />\r\n                    <br /><br />\r\n                    <a class="primary-button col-noprint" data-ng-click="onFinish()" data-ng-class="{\'disabled\': !isVoltooienToegestaan()}">opslaan</a>\r\n                    <span class="printOnly printSignature">\r\n                        <strong class="signatureLine">Ondertekening:</strong><br /><br />\r\n                        <strong class="signatureLine">Plaats</strong><br />\r\n                        <strong class="signatureLine">Datum</strong><br /><br /><br />\r\n                        <strong class="signatureLine">Handtekening</strong>\r\n                    </span>\r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="col col-noprint">\r\n        <div class="widget">\r\n            <div class="block">\r\n                <h3>Delen</h3>\r\n                <div class="content">\r\n                    <ul class="icon-list">\r\n                        \x3c!--<li data-ng-show="model.HasEmail"><a><span class="glyph icon-mail"></span>{{model.Email}}</a></li>\r\n                        <li data-ng-hide="model.HasEmail"><a data-ng-click="model.OpenMailPopup()"><span class="glyph icon-mail"></span>Per email versturen</a></li>--\x3e\r\n                        <li><a data-ng-click="model.OpenPrintScreen()"><span class="glyph icon-print"></span>Afdrukken</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'
    },
    636: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r = {
            restrict: "E",
            scope: !1,
            template: n(637)
        }
    },
    637: function(e, t) {
        e.exports = '<div >\r\n    <div class="col double-col" id="vakkenkeuzestepscreen">\r\n        <div class="widget double-widget">\r\n            <div class="block ">\r\n                <h3>Keuze vakken</h3>\r\n                <div class="content">\r\n                    <div class="table-block" id="vakkenpakketkeuze-content">\r\n                        <table class="table-grid-layout" data-ng-repeat="KeuzeGroep in model.Vakken | orderBy:\'Id\'" data-ng-class="{\'fold\' : KeuzeGroep.IsFolded}">\r\n                            <colgroup>\r\n                                <col width="80">\r\n                                <col width="100%">\r\n                            </colgroup>\r\n                            <thead>\r\n                                <tr data-ng-click="ToggleGroupFold(KeuzeGroep)">\r\n                                    <th data-ng-class="{\'valid\':IsDone(KeuzeGroep)}">Keuze ({{KeuzeGroep.GekozenVakken.length}})</th>\r\n                                    <th>\r\n                                        <span class="icon-up-arrow"></span>{{KeuzeGroep.Omschrijving}}\r\n                                        <span data-ng-bind="GenerateMinMaxString(KeuzeGroep.MinAantalKeuzes, KeuzeGroep.MaxAantalKeuzes)"></span>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr data-ng-repeat="vak in KeuzeGroep.Vakken | orderBy:\'Omschrijving\'" data-ng-class="{ \'prev-selected\': CannotSelectCheck(vak,KeuzeGroep)}">\r\n                                    <td>\r\n                                        <span class="check">\r\n                                            <input type="checkbox" ng-disabled="CannotSelectCheck(vak,KeuzeGroep)" data-ng-click="ToggleVakSelectie(KeuzeGroep, vak)" class="" data-ng-model="vak.IsGeselecteerd" name="geselecteerdeVakken" id="groep{{KeuzeGroep.Id}}vak{{vak.Id}}" />\r\n                                            <label for="groep{{KeuzeGroep.Id}}vak{{vak.Id}}"><span></span></label>\r\n                                        </span>\r\n                                    </td>\r\n                                    <td ng-disabled="CannotSelectCheck(vak,KeuzeGroep)" data-ng-click="ToggleVakSelectie(KeuzeGroep, vak)"><span data-ng-bind="vak.Omschrijving"></span><span data-ng-bind="GenerateSelectedString(vak,KeuzeGroep)"></span></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="col">\r\n        <div class="widget">\r\n            <div class="block">\r\n                <h3>Gekozen vakkenpakket</h3>\r\n                <div class="content resume" id="vakkenkeuze-overzicht">\r\n                    <strong>Studie:</strong> &nbsp;<br />{{model.SelectedStudie.Omschrijving}}<br /><br />\r\n                    <strong>Profiel/Sector:</strong>&nbsp;<br />{{model.SelectedProfiel.Omschrijving}}<br />\r\n                    <br />\r\n                    <strong>Gemeenschappelijke vakken</strong><br />\r\n                    <div data-ng-repeat="vak in model.Overzicht.verplicht | orderBy:\'Omschrijving\'"><span data-ng-bind="vak.Omschrijving"></span></div><br />\r\n                    <br />\r\n                    <strong>Profiel/Sector vakken</strong><br />\r\n                    <div data-ng-repeat="vak in model.Overzicht.profiel | orderBy:\'Omschrijving\'"><span data-ng-bind="vak.Omschrijving"></span></div><br />\r\n                    <br />\r\n                    <strong>Vrije keuze vakken</strong><br />\r\n                    <div data-ng-repeat="vak in model.Overzicht.vrij | orderBy:\'Omschrijving\'"><span data-ng-bind="vak.Omschrijving"></span></div><br />\r\n                    <br />\r\n                    <a class="primary-button" data-ng-click="onFinish()" data-ng-class="{\'disabled\': !isVoltooienToegestaan()}">opslaan</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\x3c!-- col --\x3e\r\n</div>'
    },
    97: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r = function() {
            function e(e) {
                var t = this;
                this.$scope = e,
                this.$scope.$watch("active", function(e, n) {
                    !0 === e && t.onInit()
                }),
                this.$scope.canGoForward = function() {
                    return t.canGoForward()
                }
                ,
                this.$scope.beforeGoForward = function() {
                    return t.beforeGoForward()
                }
                ,
                this.$scope.canGoBackward = function() {
                    return t.canGoBackward()
                }
                ,
                this.$scope.beforeGoBackward = function() {
                    return t.beforeGoBackward()
                }
                ,
                this.$scope.canBeActivated = function() {
                    return t.canBeActivated()
                }
                ,
                this.$scope.enableGoForward = function() {
                    return t.enableGoForward()
                }
                ,
                this.model = this.$scope.model
            }
            return e.prototype.onInit = function() {
                throw new Error("The onInit method has not been implemented")
            }
            ,
            e.prototype.canGoForward = function() {
                throw new Error("The canGoForward method has not been implemented")
            }
            ,
            e.prototype.beforeGoForward = function() {
                throw new Error("The beforeGoForward method has not been implemented")
            }
            ,
            e.prototype.canGoBackward = function() {
                return !0
            }
            ,
            e.prototype.beforeGoBackward = function() {}
            ,
            e.prototype.canBeActivated = function() {
                return !0
            }
            ,
            e.prototype.enableGoForward = function() {
                return !0
            }
            ,
            e
        }()
    }
}]);

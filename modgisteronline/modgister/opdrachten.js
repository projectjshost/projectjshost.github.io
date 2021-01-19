(window.webpackJsonp = window.webpackJsonp || []).push([[11], {
    524: function(e, t, n) {
        "use strict";
        n.r(t),
        function(e) {
            n.d(t, "opdrachtenAMD", function() {
                return u
            });
            var i = n(95)
              , r = n(91)
              , o = n(525)
              , s = n(526)
              , a = n(528)
              , c = n(530)
              , d = n(532)
              , l = n(534)
              , p = n(536)
              , u = e.module("OpdrachtenAMD", []);
            u.controller("opdrachtenOverzichtController", o.a.$inject).controller("opdrachtenDetailsController", s.a.$inject),
            u.service("oneDriveForBusinessResource", i.a.$inject).service("bronHelper", r.a.$inject),
            u.directive("smOpdrachtenFileSelect", a.a.$inject).directive("smOpdrachtenInstellingenDirective", c.a.$inject).directive("smOpdrachtenSelectieFilter", d.a.$inject).directive("smOpdrachtenVersiesDirective", l.a.$inject),
            u.factory("opdrachtenVersieValidator", function() {
                return new p.a
            })
        }
        .call(this, n(1))
    },
    525: function(e, t, n) {
        "use strict";
        (function(e, i, r) {
            n.d(t, "a", function() {
                return s
            });
            var o = n(105)
              , s = function() {
                function t(e, t, n, i, r, o, s, a, c, d) {
                    this.$routeParams = e,
                    this.$scope = t,
                    this.$filter = n,
                    this.$location = i,
                    this.currentUser = r,
                    this.opdrachtenService = o,
                    this.tabService = s,
                    this.$window = a,
                    this.toastService = c,
                    this.magisterLocale = d,
                    t.tabState = this.tabService.tabState,
                    this.tabService.subscribeTabAdded(this.tabAdded, this),
                    this.initialize()
                }
                return t.prototype.tabAdded = function(e) {
                    "idWeergave" === e.id && this.tabService.openTab(e)
                }
                ,
                t.prototype.initialize = function() {
                    var t = this;
                    this.anonymousRouteParams = this.$routeParams,
                    this.$scope.opdrachten = null,
                    this.$scope.vakken = [],
                    this.$scope.rijHoogte = "normaal",
                    this.$scope.selectedOpdracht = null,
                    this.opdrachten = null,
                    this.persoonId = this.currentUser.relatedPersons.current.id,
                    this.initialOpdrachtStatus = e.isDefined(this.anonymousRouteParams.filter) ? decodeURIComponent(this.anonymousRouteParams.filter) : null,
                    this.opdrachtenService.getQuaynLeerlingEndpoint().then(function(e) {
                        t.$scope.shownQuaynLink = e.isGekoppeld && !!e.links.quaynHome
                    }),
                    this.$scope.getBeoordeling = function(e) {
                        return t.getBeoordeling(e)
                    }
                    ,
                    this.$scope.onClickQuaynCursistenPortaal = function() {
                        return t.onClickQuaynCursistenPortaal()
                    }
                    ,
                    this.$scope.$on("OPDRACHTEN_CHANGE_ROW_HEIGHT", function(n, i) {
                        e.isDefined(i) && null !== i && (t.$scope.rijHoogte = i.name.toLowerCase())
                    }),
                    this.$scope.$on("OPDRACHTEN_FILTER_VAK", function(n, i) {
                        e.isDefined(i) && null !== i && t.setSelectedVak(i)
                    }),
                    this.$scope.$on("OPDRACHTEN_FILTER_AANMELDING", function(n, i) {
                        e.isDefined(i) && null !== i && t.setSelectedAanmelding(i)
                    }),
                    this.$scope.$on("OPDRACHTEN_FILTER_STATUS", function(n, i) {
                        e.isDefined(i) && null !== i && t.setSelectedStatus(i)
                    }),
                    this.$scope.selectOpdracht = function(e) {
                        return t.selectOpdracht(e)
                    }
                }
                ,
                t.prototype.onClickQuaynCursistenPortaal = function() {
                    var e = this;
                    this.opdrachtenService.getQuaynSSOLink().then(function(t) {
                        e.$window.open(t.location, "_blank")
                    }).catch(function() {
                        e.toastService.showError(e.magisterLocale.NotificationStrings.TITLE_ERROR_DEFAULT, e.magisterLocale.OpdrachtenStrings.QUAYN_LINK_ERROR)
                    })
                }
                ,
                t.prototype.getBeoordeling = function(e) {
                    var t = null;
                    return null != e.Beoordeling && void 0 !== e.Beoordeling && (t = e.Beoordeling),
                    t
                }
                ,
                t.prototype.setSelectedVak = function(e) {
                    this.$scope.selectedVak = e,
                    this.filterOpdrachten()
                }
                ,
                t.prototype.setSelectedStatus = function(e) {
                    this.selectedStatus = e,
                    this.filterOpdrachten()
                }
                ,
                t.prototype.setSelectedAanmelding = function(t) {
                    var n = this
                      , r = 0
                      , s = 0
                      , a = 0;
                    this.$scope.selectedAanmelding = t;
                    var c = i(this.toCrossBrowserDateString("" + t.Start))
                      , d = i(this.toCrossBrowserDateString("" + t.Einde));
                    this.opdrachtenService.getAll(this.persoonId, c, d, o.a.alle, r, 250).then(function(t) {
                        if (e.isDefined(t.Items) && null !== t.Items && e.isDefined(t.TotalCount) && null !== t.TotalCount) {
                            n.handleOpdrachtenResponse(t, !0),
                            a += t.Items.length,
                            s = t.TotalCount;
                            for (var i = 1; a < s && i < 20; i++)
                                r += 250,
                                n.opdrachtenService.getAll(n.persoonId, c, d, o.a.alle, r, 250).then(function(t) {
                                    e.isDefined(t.Items) && null !== t.Items && n.handleOpdrachtenResponse(t, !1)
                                }),
                                a += 250 * i
                        }
                    })
                }
                ,
                t.prototype.toCrossBrowserDateString = function(e) {
                    return e.replace("0000Z", "Z")
                }
                ,
                t.prototype.handleOpdrachtenResponse = function(e, t) {
                    var n = this.opdrachtenService.assignStatus(e.Items);
                    if (n = this.opdrachtenService.assignOverdue(n),
                    t ? (this.$scope.vakken = this.opdrachtenService.getVakkenFromOpdrachten(n),
                    n = r.sortBy(n, "InleverenVoor"),
                    this.$scope.opdrachten = n,
                    this.opdrachten = n,
                    this.filterOpdrachten()) : (this.$scope.vakken = r.union(this.$scope.vakken, this.opdrachtenService.getVakkenFromOpdrachten(n)),
                    this.opdrachten = r.union(this.opdrachten, n),
                    this.opdrachten = r.sortBy(this.opdrachten, "InleverenVoor"),
                    this.$scope.opdrachten = this.opdrachten),
                    this.$scope.$broadcast("OPDRACHTEN_VAKKEN_RESET", this.$scope.vakken),
                    null !== this.initialOpdrachtStatus) {
                        var i;
                        switch (this.initialOpdrachtStatus) {
                        case "alle":
                            i = o.a.alle;
                            break;
                        case "ingeleverd":
                            i = o.a.ingeleverd;
                            break;
                        case "openstaand":
                            i = o.a.openstaand;
                            break;
                        case "beoordeeld":
                            i = o.a.beoordeeld;
                            break;
                        case "geen":
                            i = o.a.geen;
                            break;
                        default:
                            i = o.a.alle
                        }
                        this.initialOpdrachtStatus = null,
                        this.$scope.$broadcast("OPDRACHTEN_SET_FILTER_STATUS", o.a.geen),
                        this.$scope.$broadcast("OPDRACHTEN_SET_FILTER_STATUS", i)
                    }
                    this.filterOpdrachten()
                }
                ,
                t.prototype.filterOpdrachten = function() {
                    var e = this;
                    null != this.opdrachten && (this.$scope.opdrachten = r.filter(this.opdrachten, function(t) {
                        return "alle vakken" === e.$scope.selectedVak || t.Vak === e.$scope.selectedVak
                    }),
                    this.selectedStatus !== o.a.alle && (this.$scope.opdrachten = r.filter(this.$scope.opdrachten, function(t) {
                        return e.selectedStatus === o.a.afgesloten ? t.Afgesloten : e.selectedStatus === t.OpdrachtStatus
                    })))
                }
                ,
                t.prototype.selectOpdracht = function(e) {
                    this.$location.path("/elo/opdrachten/" + e)
                }
                ,
                t.$inject = ["$routeParams", "$scope", "$filter", "$location", "currentUser", "opdrachtenService", "tabService", "$window", "toastService", "magisterLocale", t],
                t
            }()
        }
        ).call(this, n(1), n(14), n(3))
    },
    526: function(e, t, n) {
        "use strict";
        (function(e, i, r) {
            n.d(t, "a", function() {
                return p
            });
            var o = n(5)
              , s = n(85)
              , a = n(7)
              , c = n(8)
              , d = n(0)
              , l = Contracts.Bronnen.Enums.BronType
              , p = function() {
                function t(e, t, n, i, r, s, a, d, l, p, u, h, v, m, f) {
                    this.$routeParams = e,
                    this.$scope = t,
                    this.$timeout = n,
                    this.$location = i,
                    this.currentUser = r,
                    this.opdrachtenService = s,
                    this.opdrachtenVersieValidator = a,
                    this.applicationService = d,
                    this.dialogService = l,
                    this.bronnenService = p,
                    this.tabService = u,
                    this.toastService = h,
                    this.magisterLocale = v,
                    this.syncHttpService = m,
                    this.downloadTokenService = f,
                    this.dirty = !1,
                    this.heeftSchrijfRechten = this.currentUser.hasPrivilege(o.a.EloOpdracht, c.a.Create),
                    t.tabState = this.tabService.tabState,
                    this.tabService.subscribeTabAdded(this.tabAdded, this),
                    this.initialize()
                }
                return t.prototype.tabAdded = function(e) {
                    "idVersies" === e.id && this.tabService.openTab(e),
                    "idBronnen" === e.id && this.tabService.setEnableTab(e, !1)
                }
                ,
                t.prototype.initialize = function() {
                    var t = this;
                    this.anonymousRouteParams = this.$routeParams,
                    this.$scope.returnUrl = e.isDefined(this.anonymousRouteParams.returnUrl) ? decodeURIComponent(this.anonymousRouteParams.returnUrl) : null,
                    this.persoonId = this.currentUser.relatedPersons.current.id,
                    this.opdrachtId = parseInt(this.$routeParams.opdrachtId, d.b),
                    this.$scope.$on("OPDRACHT_SELECT_VERSIE", function(e, n) {
                        return t.updateVersie(e, n)
                    }),
                    this.$scope.editOpdracht = function() {
                        return t.editOpdracht()
                    }
                    ,
                    this.$scope.sendOpdracht = function() {
                        return t.sendOpdracht()
                    }
                    ,
                    this.$scope.deleteAttachment = function(e) {
                        return t.deleteAttachment(t.$scope, e)
                    }
                    ,
                    this.$scope.handleDrop = function(e) {
                        var n = t.$scope.$eval(e.draggable.element.attr("id"));
                        t.internalHandleDrop(n)
                    }
                    ,
                    this.$scope.terug = function() {
                        return t.terug()
                    }
                    ,
                    this.$scope.handleManualAdd = function(e) {
                        return t.internalHandleDrop(e)
                    }
                    ,
                    this.$scope.onFileUploaded = function(e, n, i) {
                        return t.onFileUploaded(e, n, i)
                    }
                    ,
                    this.$scope.onFileUploadStarted = function(e, n, i) {
                        return t.onFileUploadStarted(e, n, i)
                    }
                    ,
                    this.$scope.getContentUri = function(e) {
                        return t.getContentUri(e)
                    }
                    ,
                    this.$scope.isDirty = function() {
                        return t.isDirty()
                    }
                    ,
                    this.$scope.$on("OPDRACHT_UPLOAD_FILE_COMPLETE", function(e, n) {
                        return t.uploadFileComplete(e, t.$scope, n)
                    }),
                    this.$scope.bijlageIsReadonly = function(e) {
                        return t.bijlageIsReadonly(e)
                    }
                    ,
                    this.$scope.getLinkType = function(e) {
                        return t.getLinkType(e)
                    }
                    ,
                    this.$scope.showQuaynToast = function() {
                        return t.showQuaynToast()
                    }
                    ,
                    this.ladenOpdracht(!0),
                    this.validateInleveren(),
                    this.$scope.isUploading = !1
                }
                ,
                t.prototype.getLinkType = function(e) {
                    return this.$scope.magInleveren || e.BronSoort !== Contracts.Bronnen.Enums.BronSoort.ScormMetWachtwoord && e.BronSoort !== Contracts.Bronnen.Enums.BronSoort.Scorm ? e.BronSoort === Contracts.Bronnen.Enums.BronSoort.Url && "" !== this.getQuaynLink(this.initieelOpdracht.Links) ? "Quayn" : "Standard" : "Scorm"
                }
                ,
                t.prototype.showQuaynToast = function() {
                    this.toastService.showInformation(this.magisterLocale.OpdrachtenStrings.OPDRACHTEN_QUAYN_TOAST_TITLE, this.magisterLocale.OpdrachtenStrings.OPDRACHTEN_QUAYN_TOAST_MESSAGE)
                }
                ,
                t.prototype.bijlageIsReadonly = function(e) {
                    var t = !this.$scope.magInleveren && (e.BronSoort === Contracts.Bronnen.Enums.BronSoort.ScormMetWachtwoord || e.BronSoort === Contracts.Bronnen.Enums.BronSoort.Scorm)
                      , n = e.BronSoort === Contracts.Bronnen.Enums.BronSoort.Url && "" !== this.getQuaynLink(this.initieelOpdracht.Links);
                    return t || n
                }
                ,
                t.prototype.ladenOpdracht = function(e) {
                    var t, n = this;
                    void 0 === e && (e = !1),
                    this.$scope.foldOpdracht = !1,
                    this.$scope.isSending = !1,
                    this.opdrachtenService.getById(this.persoonId, this.opdrachtId).then(function(r) {
                        t = i.findWhere(r.VersieNavigatieItems, {
                            Omschrijving: r.LaatsteOpdrachtVersienummer.toString()
                        }),
                        n.initieelOpdracht = n.opdrachtenService.assignStatusDetail(r),
                        n.$scope.opdracht = i.extend(n.initieelOpdracht, {
                            VersieNummer: parseInt(t.Omschrijving, d.b),
                            VersieId: t.Id
                        }),
                        n.$scope.isQuayn = "" !== n.getQuaynLink(r.Links),
                        n.$scope.magInleveren = r.MagInleveren && n.heeftSchrijfRechten,
                        n.$scope.opdracht.KanOpnieuwInleveren = r.OpnieuwInleveren,
                        e && !r.Afgesloten && n.autoStartOpdracht(),
                        e || n.$scope.$broadcast("OPDRACHT_VERVERSEN", n.$scope.opdracht),
                        n.bepaalFormStatus()
                    })
                }
                ,
                t.prototype.autoStartOpdracht = function() {
                    var t = e.isDefined(this.$scope.opdracht.GestartOp) && null !== this.$scope.opdracht.GestartOp
                      , n = this.$scope.opdracht.StatusLaatsteOpdrachtVersie === Contracts.ELO.Opdrachten.Enums.OpdrachtStatus.NietGestart || this.$scope.opdracht.StatusLaatsteOpdrachtVersie === Contracts.ELO.Opdrachten.Enums.OpdrachtStatus.Geen;
                    !t && n && this.heeftSchrijfRechten && !this.$scope.isQuayn && this.startOpdracht()
                }
                ,
                t.prototype.startOpdracht = function() {
                    var e = this
                      , t = this.mapToOpdrachtVersie();
                    t.GestartOp = new Date(r().format()),
                    t.Status = Contracts.ELO.Opdrachten.Enums.OpdrachtStatus.Gestart,
                    this.opdrachtenService.updateVersie(this.persoonId, t).then(function(t) {
                        e.ladenOpdracht()
                    }, function() {
                        e.$scope.$broadcast("HIDE_API_PROGRESS_INDICATOR", "opdrachten")
                    })
                }
                ,
                t.prototype.validateInleveren = function() {
                    return !!this.$scope.magInleveren || (this.$scope.isQuayn && this.toastService.showWarning(this.$scope.createTitle, this.magisterLocale.OpdrachtenStrings.EDIT_OPDRACHT_MAX_BEREIKT_MESSAGE),
                    !1)
                }
                ,
                t.prototype.editOpdracht = function() {
                    var e = this;
                    if (this.validateInleveren()) {
                        var t, r = !1;
                        if (i.each(this.$scope.opdracht.Bijlagen, function(e) {
                            e.BronSoort !== Contracts.Bronnen.Enums.BronSoort.Scorm && e.BronSoort !== Contracts.Bronnen.Enums.BronSoort.ScormMetWachtwoord || (r = !0,
                            t = e)
                        }),
                        r) {
                            var o = Object(d.j)(t.Links, d.a.Contents);
                            t.BronSoort === Contracts.Bronnen.Enums.BronSoort.ScormMetWachtwoord ? this.dialogService.showDialog({
                                title: "Wachtwoord vereist",
                                template: n(527),
                                buttons: [s.a.Ok, s.a.Cancel],
                                callback: function(n, i) {
                                    n.clickedButtonType !== s.a.Cancel ? null !== n.data ? (o = Object(d.j)(t.Links, d.a.Contents),
                                    e.openScorm(o, n.data.wachtwoord),
                                    i.resolve({
                                        shouldClose: !0
                                    })) : i.resolve({
                                        shouldClose: !1
                                    }) : i.resolve({
                                        shouldClose: !0
                                    })
                                }
                            }) : this.openScorm(o, "")
                        } else if (this.$scope.isQuayn) {
                            var a = this.convertToAPI2LinkDto(this.initieelOpdracht.Links)
                              , c = Object(d.k)(a.links, "quayn-toets");
                            this.syncHttpService.get(c).then(function(t) {
                                Object(d.A)(t.data.QuaynUri),
                                e.startOpdracht()
                            })
                        } else {
                            this.$scope.isEditable = !0,
                            this.$scope.foldOpdracht = !0,
                            this.$scope.opdracht.LeerlingBijlagen = [],
                            this.$scope.opdracht.LeerlingOpmerking = "",
                            this.$scope.attachments = [];
                            var l = this.tabService.getTab("idBronnen");
                            Object(d.w)(l) || (this.tabService.setEnableTab(l, !0),
                            this.tabService.openTab(l))
                        }
                    }
                }
                ,
                t.prototype.convertToAPI2LinkDto = function(e) {
                    return {
                        links: e
                    }
                }
                ,
                t.prototype.getQuaynLink = function(e) {
                    return e && e.length > 0 ? Object(d.k)(e, "quayn-toets") : ""
                }
                ,
                t.prototype.isDirty = function() {
                    return this.$scope.isEditable && (!Object(d.u)(this.$scope.opdracht.LeerlingOpmerking) || this.dirty)
                }
                ,
                t.prototype.openScorm = function(e, t) {
                    var n = e.replace("{key}", t);
                    this.downloadTokenService.openTabToLocation(n)
                }
                ,
                t.prototype.getContentUri = function(e) {
                    return e || null
                }
                ,
                t.prototype.sendOpdracht = function() {
                    var e = this;
                    if (!this.$scope.isUploading && !this.$scope.isSending) {
                        this.$scope.isSending = !0;
                        if (this.$scope.opdracht.LeerlingBijlagen = this.$scope.attachments,
                        !this.opdrachtenVersieValidator.validateOpdrachtVersie(this.$scope.opdracht, []))
                            return this.applicationService.showMessage("Geen opmerking ingevuld of bijlagen toegevoegd.", a.i.WARNING, 5e3),
                            void (this.$scope.isSending = !1);
                        this.dirty = !1;
                        var t = this.mapToOpdrachtVersie()
                          , n = this.tabService.getTab("idBronnen")
                          , i = this.tabService.getTab("idVersies");
                        Object(d.w)(n) || Object(d.w)(i) || (this.tabService.openTab(i),
                        this.tabService.setEnableTab(n, !1)),
                        t.Id > 0 ? this.opdrachtenService.updateVersie(this.currentUser.relatedPersons.current.id, t).then(function() {
                            e.applicationService.showMessage("Opdracht ingeleverd", a.i.INFORMATION, 5e3),
                            e.ladenOpdracht()
                        }) : (t.GestartOp = new Date(r().format()),
                        t.Status = Contracts.ELO.Opdrachten.Enums.OpdrachtStatus.OpnieuwInleveren,
                        this.opdrachtenService.createVersie(this.currentUser.relatedPersons.current.id, t).then(function(n) {
                            t.Id = n.Id,
                            t.Status = n.Status,
                            e.opdrachtenService.updateVersie(e.currentUser.relatedPersons.current.id, t).then(function() {
                                e.applicationService.showMessage("Opdracht ingeleverd", a.i.INFORMATION, 5e3),
                                e.ladenOpdracht()
                            })
                        })),
                        this.$scope.isSending = !0
                    }
                }
                ,
                t.prototype.internalHandleDrop = function(e) {
                    var t = this;
                    if (!Object(d.w)(e)) {
                        var n = this.currentUser.relatedPersons.current.id;
                        if ((e.Type & l.OneDriveForBusiness) === l.OneDriveForBusiness) {
                            this.$scope.$broadcast("SHOW_API_PROGRESS_INDICATOR", "opdrachten");
                            var r = Object(d.j)(e.Links, d.a.toLocal);
                            this.bronnenService.oneDriveForBusinessToLocal(r).then(function(n) {
                                var i = {
                                    Id: 0,
                                    Naam: e.Naam,
                                    ContentType: "",
                                    Datum: null,
                                    Grootte: 0,
                                    Url: "",
                                    UniqueId: n.id,
                                    BronSoort: Contracts.Bronnen.Enums.BronSoort.Bestand,
                                    Links: [{
                                        rel: "Self",
                                        href: Object(d.j)(e.Links, d.a.self)
                                    }, {
                                        rel: "Contents",
                                        href: Object(d.j)(e.Links, d.a.download)
                                    }]
                                };
                                t.$scope.attachments.push(i),
                                t.dirty = !0
                            }).catch(function(e) {
                                t.applicationService.showMessage(e.data.omschrijving || "Toevoegen van het betand is mislukt", a.i.WARNING, 5e3)
                            }).finally(function() {
                                t.$scope.$broadcast("HIDE_API_PROGRESS_INDICATOR", "opdrachten")
                            })
                        } else {
                            var o = e.Id;
                            if (void 0 === i.find(this.$scope.attachments, function(e) {
                                return e.Id === o
                            }))
                                this.bronnenService.getBron(n, o).then(function(e) {
                                    e.Type < l.Map ? (t.$scope.attachments.push({
                                        Id: e.Id,
                                        Naam: e.Naam,
                                        ContentType: e.ContentType,
                                        Datum: null,
                                        Grootte: e.Grootte,
                                        Url: "",
                                        UniqueId: e.UniqueId,
                                        BronSoort: e.BronSoort,
                                        Links: e.Links
                                    }),
                                    t.dirty = !0) : t.applicationService.showMessage("Een map kan niet als bijlage worden bijgevoegd.", a.i.WARNING, 2e3)
                                });
                            else
                                this.applicationService.showMessage("Een bijlage kan niet twee maal worden toegevoegd.", a.i.WARNING, 2e3)
                        }
                    }
                }
                ,
                t.prototype.updateVersie = function(e, t) {
                    if (this.$scope.opdracht = i.extend(this.initieelOpdracht, {
                        BeoordeeldOp: t.BeoordeeldOp,
                        InleverenVoor: t.InleverenVoor,
                        DocentOpmerking: t.DocentOpmerking,
                        LeerlingOpmerking: t.LeerlingOpmerking,
                        LeerlingBijlagen: t.LeerlingBijlagen,
                        FeedbackBijlagen: t.FeedbackBijlagen,
                        IngeleverdOp: t.IngeleverdOp,
                        VersieNummer: t.VersieNummer,
                        VersieId: t.Id,
                        Status: t.Status
                    }),
                    this.$scope.opdracht.Beoordeling = t.Beoordeling,
                    !Object(d.w)(t)) {
                        var n = i.max(this.$scope.opdracht.VersieNavigatieItems, function(e) {
                            return e.Omschrijving
                        });
                        if (t.VersieNummer > parseInt(n.Omschrijving, d.b)) {
                            var r = {
                                Id: -1,
                                Links: null,
                                Omschrijving: t.VersieNummer.toString()
                            };
                            this.$scope.opdracht.VersieNavigatieItems.push(r),
                            this.$scope.opdracht.LaatsteOpdrachtVersienummer = t.VersieNummer,
                            this.$scope.opdracht.VersieNummer = t.VersieNummer
                        }
                    }
                    this.bepaalFormStatus(),
                    this.$scope.attachments = t.LeerlingBijlagen
                }
                ,
                t.prototype.bepaalFormStatus = function() {
                    if (this.$scope.isEditable = !1,
                    this.$scope.isLaatsteVersie = this.$scope.opdracht.LaatsteOpdrachtVersienummer === this.$scope.opdracht.VersieNummer,
                    this.currentUser.hasPrivilege(o.a.EloOpdracht, c.a.Update) && this.$scope.isLaatsteVersie) {
                        this.$scope.createTitle = "Inleveren";
                        var e = !1;
                        i.each(this.$scope.opdracht.Bijlagen, function(t) {
                            t.BronSoort !== Contracts.Bronnen.Enums.BronSoort.Scorm && t.BronSoort !== Contracts.Bronnen.Enums.BronSoort.ScormMetWachtwoord || (e = !0)
                        }),
                        (e || this.$scope.isQuayn) && (this.$scope.createTitle = "Starten")
                    }
                }
                ,
                t.prototype.mapToOpdrachtVersie = function() {
                    return {
                        Id: this.$scope.opdracht.VersieId,
                        Links: this.$scope.opdracht.Links,
                        Titel: this.$scope.opdracht.Titel,
                        Vak: this.$scope.opdracht.Vak,
                        Status: this.$scope.opdracht.Status,
                        OpdrachtId: this.$scope.opdracht.Id,
                        LeerlingOpmerking: this.$scope.opdracht.LeerlingOpmerking,
                        DocentOpmerking: this.$scope.opdracht.DocentOpmerking,
                        LeerlingBijlagen: this.$scope.opdracht.LeerlingBijlagen,
                        FeedbackBijlagen: this.$scope.opdracht.FeedbackBijlagen,
                        GestartOp: this.$scope.opdracht.GestartOp,
                        InleverenVoor: this.$scope.opdracht.InleverenVoor,
                        IngeleverdOp: this.$scope.opdracht.IngeleverdOp,
                        Beoordeling: this.$scope.opdracht.Beoordeling,
                        BeoordeeldOp: this.$scope.opdracht.BeoordeeldOp,
                        VersieNummer: this.$scope.opdracht.VersieNummer,
                        IsTeLaat: this.$scope.opdracht.IsTeLaat
                    }
                }
                ,
                t.prototype.uploadFileComplete = function(e, t, n) {
                    var r = this;
                    t.isUploading = !1,
                    this.$scope.$broadcast("HIDE_API_PROGRESS_INDICATOR", "opdrachten"),
                    i.where(t.attachments, {
                        Naam: n.Naam
                    }).length ? this.$timeout(function() {
                        var e = a.i.WARNING;
                        r.applicationService.showMessage("Het bestand is reeds toegevoegd.", e, 3e3)
                    }, 0) : this.$timeout(function() {
                        t.attachments.push(n),
                        r.dirty = !0
                    }, 0)
                }
                ,
                t.prototype.onFileUploaded = function(e, t, n) {
                    var i = {
                        ContentType: t.type,
                        Naam: t.name,
                        UniqueId: e
                    };
                    this.uploadFileComplete(void 0, this.$scope, i)
                }
                ,
                t.prototype.onFileUploadStarted = function(e, t, n) {
                    this.$scope.isUploading = !0,
                    this.$scope.$broadcast("SHOW_API_PROGRESS_INDICATOR", "opdrachten")
                }
                ,
                t.prototype.deleteAttachment = function(e, t) {
                    e.attachments.splice(t, 1)
                }
                ,
                t.prototype.terug = function() {
                    e.isDefined(this.$scope.returnUrl) && null != this.$scope.returnUrl ? this.$location.path(this.$scope.returnUrl) : this.$timeout(function() {
                        window.history.back()
                    }, 0)
                }
                ,
                t.$inject = ["$routeParams", "$scope", "$timeout", "$location", "currentUser", "opdrachtenService", "opdrachtenVersieValidator", "applicationService", "dialogService", "bronnenService", "tabService", "toastService", "magisterLocale", "syncHttpService", "downloadTokenService", t],
                t
            }()
        }
        ).call(this, n(1), n(3), n(14))
    },
    527: function(e, t) {
        e.exports = '<div style="text-align: left;">\r\n    <p>\r\n        Voor dit scorm pakket is een wachtwoord vereist. Voer het wachtwoord hieronder in en klik op OK om het scorm pakket te openen.\r\n    </p>\r\n    <b>Wachtwoord</b>\r\n    <input type="password" data-ng-model="vm.wachtwoord"/>\r\n</div>'
    },
    528: function(e, t, n) {
        "use strict";
        (function(e, i) {
            n.d(t, "a", function() {
                return s
            });
            var r = n(85)
              , o = n(0)
              , s = function() {
                function t(e, t, i) {
                    var r = this;
                    this.$upload = e,
                    this.dialogService = t,
                    this.magisterLocale = i,
                    this.template = n(529),
                    this.link = function(e, t, n) {
                        return r.linkFn(e, t, n)
                    }
                    ,
                    this.apiHost = "",
                    globalSettings && (this.apiHost = globalSettings.apiHost)
                }
                return t.prototype.linkFn = function(e, t, n) {
                    var i = this;
                    e.clickFileUpload = function() {
                        return i.clickFileUpload(e)
                    }
                    ,
                    e.uploadFile = function() {
                        return i.uploadFile(e)
                    }
                    ,
                    e.selectedFile = "selecteer bestand"
                }
                ,
                t.prototype.uploadFile = function(t) {
                    var n = e("#hiddenUploadButton");
                    if (Object(o.y)(n[0].files))
                        this.dialogService.showConfirm(this.magisterLocale.NotificationStrings.TITEL_FILE_UPLOAD_NOT_SUPPORTED, this.magisterLocale.NotificationStrings.FILE_UPLOAD_NOT_SUPPORTED, [r.a.Ok], function(e) {});
                    else if (1 === n[0].files.length) {
                        var s = n[0].files[0];
                        this.formData = new FormData,
                        this.formData.append("uploadedFile", s),
                        t.$broadcast("START-LOADING-FOREVER"),
                        t.$broadcast("SHOW_API_PROGRESS_INDICATOR", "opdrachten"),
                        this.$upload.upload({
                            url: globalSettings.apiHost + "api/file",
                            file: s,
                            method: "POST",
                            headers: {
                                "Content-Type": s.type
                            }
                        }).success(function(e, n, r, o) {
                            t.$broadcast("STOP-LOADING"),
                            t.$broadcast("HIDE_API_PROGRESS_INDICATOR", "opdrachten");
                            var a = e.Value;
                            t.targetFile = {
                                Id: 0,
                                Naam: s.name,
                                ContentType: s.type,
                                Datum: null,
                                Grootte: 0,
                                Url: "",
                                UniqueId: null,
                                BronSoort: Contracts.Bronnen.Enums.BronSoort.Bestand,
                                Links: null
                            },
                            i.extend(t.targetFile, {
                                UniqueId: a
                            }),
                            t.$root.$broadcast("OPDRACHT_UPLOAD_FILE_COMPLETE", t.targetFile)
                        }).error(function(e, n, i, r) {
                            t.$broadcast("STOP-LOADING")
                        })
                    }
                }
                ,
                t.prototype.clickFileUpload = function(t) {
                    e("#hiddenUploadButton").val(""),
                    e("#hiddenUploadButton").click()
                }
                ,
                t.$inject = ["$upload", "dialogService", "magisterLocale", function(e, n, i) {
                    return new t(e,n,i)
                }
                ],
                t
            }()
        }
        ).call(this, n(15), n(3))
    },
    529: function(e, t) {
        e.exports = '<div>\r\n    <a data-ng-click="clickFileUpload()">bestand toevoegen van schijf</a>\r\n    \x3c!-- met een ng change directive gaat het event niet af, vandaar deze standaard onchange... --\x3e\r\n    <input id="hiddenUploadButton" data-ng-show="false" type="file" onchange="angular.element(this).scope().uploadFile(this)" name="files" data-ng-model="selectedFile"/>\r\n</div>\r\n'
    },
    530: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = function() {
            function e(e, t, i, r, o) {
                var s = this;
                this.$rootScope = e,
                this.currentUser = t,
                this.settingsService = i,
                this.applicationService = r,
                this.magisterLocale = o,
                this.linkFn = function(e, t, n) {
                    s.initialize(e),
                    e.blockFold = function() {
                        e.fold = !e.fold
                    }
                }
                ,
                this.template = n(531),
                this.replace = !0,
                this.link = function(e, t, n) {
                    return s.linkFn(e, t, n)
                }
            }
            return e.prototype.initialize = function(e) {
                e.fold = !1,
                e.sizes = [{
                    name: "Klein",
                    value: 0
                }, {
                    name: "Normaal",
                    value: 1
                }, {
                    name: "Groot",
                    value: 2
                }],
                e.size = e.sizes[1],
                this.persoonId = this.currentUser.person.id;
                var t = {
                    size: e.size
                };
                this.getUserSettings(e, t)
            }
            ,
            e.prototype.getUserSettings = function(e, t) {
                var n = {
                    name: "Normaal",
                    value: 1
                };
                e.size = n,
                this.$rootScope.$broadcast("OPDRACHTEN_CHANGE_ROW_HEIGHT", n)
            }
            ,
            e.$inject = ["$rootScope", "currentUser", "settingsService", "applicationService", "magisterLocale", function(t, n, i, r, o) {
                return new e(t,n,i,r,o)
            }
            ],
            e
        }()
    },
    531: function(e, t) {
        e.exports = '<div class="widget">\r\n        <div class="block" data-ng-class="{\'fold\': fold}" >\r\n        <h3 data-ng-click="blockFold()"><span data-ng-class="{\'icon-up-arrow\': !fold, \'icon-down-arrow\': fold}"></span><b>Instellingen</b></h3>\r\n        <div class="content">\r\n            <form method="post" action="#">\r\n                \x3c!--<div>\r\n                    <label>Rijhoogte</label>\r\n                    <div class="fancy-select">\r\n                        <a href="" data-ng-bind="size.name"></a>\r\n                        <select class="select" data-ng-model="size" data-ng-options="s.name for s in sizes" name="child" data-ng-change=\'setSize(size)\'>\r\n                        </select>\r\n                    </div>\r\n                </div>--\x3e\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
    },
    532: function(e, t, n) {
        "use strict";
        (function(e, i) {
            n.d(t, "a", function() {
                return a
            });
            var r = n(105)
              , o = n(88)
              , s = n(0)
              , a = function() {
                function t(t, i, r, o, s, a, c) {
                    var d = this;
                    this.$rootScope = t,
                    this.$timeout = i,
                    this.aanmeldingenService = r,
                    this.currentUser = o,
                    this.settingsService = s,
                    this.instellingService = a,
                    this.applicationService = c,
                    this.OPDRACHTEN_SETTINGS_KEY = "opdrachten_overzicht_instellingen",
                    this.OPDRACHTEN_SETTINGS_AANMELDING_KEY = "opdrachten_overzicht_instellingen_aanmelding",
                    this.initialize = function(t) {
                        t.fold = !1,
                        t.$on("OPDRACHTEN_VAKKEN_RESET", function(n, i) {
                            e.isDefined(i) && null !== i && e.isUndefined(t.vakken) && (t.vakken = i,
                            d.$rootScope.$broadcast("OPDRACHTEN_FILTER_VAK", t.selectedVak))
                        }),
                        d.getSettings(t),
                        d.getAanmeldingen(t)
                    }
                    ,
                    this.template = n(533),
                    this.replace = !0,
                    this.link = function(e, t, n) {
                        return d.linkFn(e, t, n)
                    }
                }
                return t.prototype.linkFn = function(e, t, n) {
                    var i = this;
                    this.initialize(e),
                    e.selectVak = function(t) {
                        return i.selectVak(e, t.sender.value())
                    }
                    ,
                    e.selectAanmelding = function(t) {
                        return i.selectAanmelding(e, t)
                    }
                    ,
                    e.toggleStatus = function(t) {
                        return i.toggleStatus(e, +t.sender.value())
                    }
                    ,
                    e.$on("OPDRACHTEN_SET_FILTER_STATUS", function(t, n) {
                        e.selectedStatus = n,
                        i.toggleStatus(e, e.selectedStatus)
                    }),
                    this.toggleStatus(e, e.selectedStatus),
                    e.blockFold = function() {
                        e.fold = !e.fold
                    }
                }
                ,
                t.prototype.getAanmeldingen = function(t) {
                    var n = this
                      , r = this.currentUser.relatedPersons.current.id.toString();
                    this.aanmeldingenService.getAanmeldingen(o.a.HuidigeEnEerdere, r).then(function(r) {
                        var o;
                        if (i.each(r, function(e) {
                            var t = Object(s.l)(new Date);
                            Object(s.l)(e.Start) < t && Object(s.l)(e.Einde) >= t && (o = e)
                        }),
                        t.aanmeldingen = r,
                        e.isDefined(o) && null !== o) {
                            var a = n.settingsService.getSettingVolatile(n.OPDRACHTEN_SETTINGS_AANMELDING_KEY, o.Id);
                            n.selectAanmeldingByAanmelding(t, a)
                        }
                    })
                }
                ,
                t.prototype.selectVak = function(e, t) {
                    e.selectedVak = t,
                    this.saveSettings(e),
                    this.$rootScope.$broadcast("OPDRACHTEN_FILTER_VAK", t)
                }
                ,
                t.prototype.selectAanmelding = function(e, t) {
                    this.selectAanmeldingByAanmelding(e, +t.sender.value())
                }
                ,
                t.prototype.selectAanmeldingByAanmelding = function(t, n) {
                    var r = i.find(t.aanmeldingen, function(e) {
                        return e.Id === n
                    });
                    e.isUndefined(r) || null === r || (t.selectedAanmelding = r.Id,
                    t.selectedAanmeldingOmschrijving = r.omschrijving,
                    this.settingsService.setSettingVolatile(this.OPDRACHTEN_SETTINGS_AANMELDING_KEY, r.Id),
                    this.$rootScope.$broadcast("OPDRACHTEN_FILTER_AANMELDING", r))
                }
                ,
                t.prototype.toggleStatus = function(e, t) {
                    e.selectedStatus = t,
                    this.saveSettings(e),
                    this.$rootScope.$broadcast("OPDRACHTEN_FILTER_STATUS", t)
                }
                ,
                t.prototype.saveSettings = function(e) {
                    if (!Object(s.w)(e.selectedVak) && !Object(s.w)(e.selectedStatus)) {
                        var t = {
                            vak: e.selectedVak,
                            status: e.selectedStatus
                        };
                        this.settingsService.setSettingVolatile(this.OPDRACHTEN_SETTINGS_KEY, t)
                    }
                }
                ,
                t.prototype.getSettings = function(e) {
                    var t = this
                      , n = {
                        vak: "alle vakken",
                        status: r.a.openstaand
                    }
                      , i = this.settingsService.getSettingVolatile(this.OPDRACHTEN_SETTINGS_KEY, n);
                    this.$timeout(function() {
                        e.selectedVak = i.vak,
                        t.$rootScope.$broadcast("OPDRACHTEN_FILTER_VAK", e.selectedVak),
                        e.selectedStatus = i.status,
                        t.$rootScope.$broadcast("OPDRACHTEN_FILTER_STATUS", +e.selectedStatus)
                    })
                }
                ,
                t.$inject = ["$rootScope", "$timeout", "aanmeldingenService", "currentUser", "settingsService", "instellingService", "applicationService", function(e, n, i, r, o, s, a) {
                    return new t(e,n,i,r,o,s,a)
                }
                ],
                t
            }()
        }
        ).call(this, n(1), n(3))
    },
    533: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block" data-ng-class="{\'fold\': fold}">\r\n        <h3 data-ng-click="blockFold()"><span data-ng-class="{\'icon-up-arrow\': !fold, \'icon-down-arrow\': fold}"></span><b>Instellingen</b></h3>\r\n\r\n        <div class="content">\r\n            <form method="post" action="#">\r\n                <div>\r\n                    <label>Vakken</label>\r\n                    <div class="fancy-select">\r\n                        <select id="selectVakken"\r\n                                class="select"\r\n                                data-kendo-drop-down-list="selectVakken"\r\n                                data-k-data-source="vakken"\r\n                                data-k-on-change="selectVak(kendoEvent)"\r\n                                data-k-value-primitive="true"\r\n                                data-ng-model="selectedVak">\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div>\r\n                    <label>Schooljaar</label>\r\n                    <div class="fancy-select">\r\n                        <select id="selectAanmeldingen"\r\n                                class="select"\r\n                                data-kendo-drop-down-list="selectAanmeldingen"\r\n                                data-k-data-source="aanmeldingen"\r\n                                data-k-data-value-field="\'Id\'"\r\n                                data-k-data-text-field="\'omschrijving\'"\r\n                                data-k-on-change="selectAanmelding(kendoEvent)"\r\n                                data-k-ng-model="selectedAanmelding"\r\n                                data-k-value-primitive="true">\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            \x3c!--<div class="content">--\x3e\r\n                <div>\r\n                    <label>Status</label>\r\n                    <div class="fancy-select">\r\n                        <select id="selectStatus"\r\n                                class="select"\r\n                                data-kendo-drop-down-list="selectStatus"\r\n                                data-k-on-change="toggleStatus(kendoEvent)"\r\n                                data-k-ng-model="selectedStatus"\r\n                                data-k-value-primitive="true">\r\n                            <option value="0">Alle</option>\r\n                            <option value="1">Ingeleverd</option>\r\n                            <option value="2">Openstaand</option>\r\n                            <option value="3">Beoordeeld</option>\r\n                            <option value="5">Afgesloten</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
    },
    534: function(e, t, n) {
        "use strict";
        (function(e, i, r) {
            n.d(t, "a", function() {
                return o
            });
            var o = function() {
                function t(e, t, i, r) {
                    var o = this;
                    this.$routeParams = e,
                    this.$rootScope = t,
                    this.currentUser = i,
                    this.opdrachtenService = r,
                    this.template = n(535),
                    this.replace = !0,
                    this.link = function(e, t, n) {
                        return o.linkFn(e, t, n)
                    }
                }
                return t.prototype.linkFn = function(t, n, i) {
                    var r = this;
                    this.parentScope = t.$parent.$parent.$parent,
                    t.isEditMode = !1,
                    this.parentScope.$watch("isEditable", function(n, i) {
                        e.isDefined(n) && null != n && (t.isEditMode = n)
                    }),
                    t.versies = [],
                    this.persoonId = this.currentUser.relatedPersons.current.id,
                    this.opdrachtId = this.$routeParams.opdrachtId,
                    t.$on("OPDRACHT_VERVERSEN", function(e) {
                        return r.LadenVersies(t)
                    }),
                    t.$on("OPDRACHT_DESELECT_VERSIE", function(e) {
                        t.selectedVersie = null
                    }),
                    this.LadenVersies(t),
                    this.inititalize(t)
                }
                ,
                t.prototype.LadenVersies = function(e) {
                    var t = this;
                    e.versies = [],
                    this.opdrachtenService.getById(this.persoonId, this.opdrachtId).then(function(n) {
                        i.each(n.VersieNavigatieItems, function(o) {
                            var s = i.filter(o.Links, function(e) {
                                return "Self" === e.Rel
                            });
                            t.opdrachtenService.getVersie(s[0].Href).then(function(i) {
                                var o = i;
                                if (e.versies.push(o),
                                i.VersieNummer === n.LaatsteOpdrachtVersienummer)
                                    if (null !== i.IngeleverdOp && n.OpnieuwInleveren && r(n.InleverenVoor) >= r() && n.MagInleveren) {
                                        var s = {
                                            Id: -1,
                                            Links: null,
                                            Titel: null,
                                            Vak: null,
                                            Status: null,
                                            OpdrachtId: null,
                                            LeerlingOpmerking: null,
                                            DocentOpmerking: null,
                                            LeerlingBijlagen: null,
                                            FeedbackBijlagen: null,
                                            GestartOp: null,
                                            IngeleverdOp: null,
                                            InleverenVoor: n.InleverenVoor,
                                            Beoordeling: null,
                                            BeoordeeldOp: null,
                                            VersieNummer: i.VersieNummer + 1,
                                            IsTeLaat: null,
                                            VersieId: -1,
                                            KanOpnieuwInleveren: !0,
                                            OpdrachtStatus: null,
                                            IsOverdue: null,
                                            StatusLaatsteOpdrachtVersie: null,
                                            LaatsteOpdrachtVersienummer: null,
                                            Bijlagen: null,
                                            Docenten: null,
                                            VersieNavigatieItems: null,
                                            Omschrijving: null,
                                            OpnieuwInleveren: null,
                                            extraInfoField: null,
                                            Afgesloten: null,
                                            MagInleveren: !1
                                        };
                                        e.versies.push(s),
                                        t.selectVersie(e, t.$rootScope, s)
                                    } else
                                        t.selectVersie(e, t.$rootScope, i);
                                e.versies.sort(function(e, t) {
                                    return e.VersieNummer >= t.VersieNummer ? -1 : 1
                                })
                            })
                        })
                    })
                }
                ,
                t.prototype.inititalize = function(e) {
                    var t = this;
                    e.fold = !1,
                    e.selectVersie = function(n) {
                        t.selectVersie(e, t.$rootScope, n)
                    }
                }
                ,
                t.prototype.selectVersie = function(e, t, n) {
                    e.selectedVersie = n,
                    t.$broadcast("OPDRACHT_SELECT_VERSIE", n)
                }
                ,
                t.$inject = ["$routeParams", "$rootScope", "currentUser", "opdrachtenService", function(e, n, i, r) {
                    return new t(e,n,i,r)
                }
                ],
                t
            }()
        }
        ).call(this, n(1), n(3), n(14))
    },
    535: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block">\r\n        <h3><b>Toon selectie</b></h3>\r\n        <div class="content versions">\r\n            <ul>\r\n                <li data-ng-class="{\'selected\': selectedVersie.Id == versie.Id}" data-ng-repeat="versie in versies" data-ng-click="selectVersie(versie)">\r\n                    <a data-ng-hide="versie.KanInleveren">\r\n                        <b data-ng-bind-template="Versie {{versie.VersieNummer}}"></b><i data-ng-bind="(versie.IngeleverdOp | date:\'dd-MM-yy\') || \'-\'"></i>\r\n                    </a>\r\n                    <a data-ng-show="versie.KanInleveren">\r\n                        <b>Nieuwe versie</b><i>Inleveren voor {{versie.InleverenVoor | date:\'dd-MM-yy\'}}</i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <footer class="endlink"></footer>\r\n    </div>\r\n</div>'
    },
    536: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = function() {
            function e() {}
            return e.prototype.validateOpdrachtVersie = function(e, t) {
                return this.validateComment(e.LeerlingOpmerking, t) || this.validateAttachments(e.LeerlingBijlagen, t)
            }
            ,
            e.prototype.validateComment = function(e, t) {
                var n = !0;
                return "" === (e = e || "") && (t.push("NO_COMMENT"),
                n = !1),
                n
            }
            ,
            e.prototype.validateAttachments = function(e, t) {
                var n = !0;
                return 0 === (e = e || []).length && (t.push("NO_ATTACHMENTS"),
                n = !1),
                n
            }
            ,
            e.$inject = [],
            e
        }()
    },
    87: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = function() {
            function e() {}
            return e.Map = "map",
            e.Bestand = "bestand",
            e.Html = "html",
            e.Url = "url",
            e.Scorm = "scorm",
            e.DigitaalLesmateriaal = "digitaalLesmateriaal",
            e.ScormMetWachtwoord = "scormMetWachtwoord",
            e.Noordhoff = "noordhoff",
            e
        }()
    },
    89: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n(0)
          , r = function() {
            function e(e, t) {
                this.fullName = e,
                this.isFolder = t,
                this.decomposeFileName(e)
            }
            return e.prototype.decomposeFileName = function(e) {
                !Object(i.w)(e) && e.length > 0 && ("." === e.substr(e.length - 1, 1) || -1 === e.lastIndexOf(".") ? this.name = e : (this.extension = e.substr(e.lastIndexOf(".") + 1, e.length),
                this.name = e.substr(0, e.lastIndexOf("."))))
            }
            ,
            e
        }()
    },
    91: function(e, t, n) {
        "use strict";
        (function(e, i) {
            n.d(t, "a", function() {
                return l
            });
            var r = n(90)
              , o = n(86)
              , s = n(0)
              , a = n(87)
              , c = n(89)
              , d = Contracts.Bronnen.Enums.BronType
              , l = function() {
                function t() {
                    this.videoExtensions = "mp4 avi 264 m2v vc1 yuv wmv f4v raw m2ts m3u8 ismv mov 3gpp 3gp 3g2 flv mkv m2v m1v mts ts trp mpg mpeg mp4 h264 mxf divx xvid vob asf",
                    this.audioExtensions = "aac aif aifc aiff au flac m4a mid midi mp3 mpa opus rmi snd wav",
                    this.IS_AANGEMELD_BIJ_KENNISNET_SESSIONCOOKIE_KEY = "isAangemeldBijKennisNet"
                }
                return t.prototype.getLink = function(e) {
                    switch (e.soort) {
                    case a.a.Url:
                        return e.url;
                    default:
                        return Object(s.m)(e.links, "download")
                    }
                }
                ,
                t.prototype.transformBronnen = function(t, n) {
                    var i = this;
                    return e.isUndefined(t) ? [] : t.map(function(e) {
                        return i.transformBron(e, n)
                    })
                }
                ,
                t.prototype.transformBron = function(e, t) {
                    return {
                        id: e.id,
                        parentId: e.parentId,
                        type: this.determineBronType(e),
                        rootMapId: t,
                        naam: e.naam,
                        privilege: e.privilege,
                        contentType: e.contentType,
                        grootte: e.grootte,
                        url: e.url,
                        links: e.links,
                        soort: e.soort,
                        gemaaktOp: e.gemaaktOp,
                        gewijzigdOp: e.gewijzigdOp,
                        mediaType: this.getMediaType(e.naam, e.url)
                    }
                }
                ,
                t.prototype.transformBronDtoToBron = function(e, t) {
                    return {
                        id: e.Id,
                        parentId: e.ParentId,
                        type: e.Type,
                        rootMapId: t,
                        naam: e.Naam,
                        privilege: this.firstCharacterToLowerCase(Contracts.Bronnen.Enums.BronPrivilege[e.Privilege]),
                        contentType: e.ContentType,
                        grootte: e.Grootte,
                        url: null,
                        links: e.Links,
                        soort: this.firstCharacterToLowerCase(Contracts.Bronnen.Enums.BronSoort[e.BronSoort]),
                        gemaaktOp: e.GemaaktOp,
                        gewijzigdOp: e.GewijzigdOp,
                        mediaType: null
                    }
                }
                ,
                t.prototype.firstCharacterToLowerCase = function(e) {
                    return e.slice(0, 1).toLowerCase() + e.slice(1)
                }
                ,
                t.prototype.determineBronType = function(e) {
                    var t = d.Onbekend;
                    return e.soort === a.a.Map && (t = d.Map),
                    e.soort === a.a.Bestand && (t = d.Document),
                    e.soort === a.a.Url && (t = d.Link),
                    t
                }
                ,
                t.prototype.getMediaType = function(e, t) {
                    var n = new c.a(e,!1).extension
                      , i = r.a.Anders;
                    return Object(s.u)(n) || (-1 !== this.videoExtensions.indexOf(n) && (i = r.a.Video),
                    -1 !== this.audioExtensions.indexOf(n) && (i = r.a.Audio)),
                    Object(s.u)(t) || -1 === t.indexOf("www.youtube.com") || (i = r.a.YouTube),
                    i
                }
                ,
                t.prototype.isFolder = function(e) {
                    return e.soort === a.a.Map
                }
                ,
                t.prototype.isFile = function(e) {
                    return e.soort === a.a.Bestand
                }
                ,
                t.prototype.convertToTreeNodes = function(e) {
                    var t = this;
                    return i.map(e, function(e) {
                        return t.convertToTreeNode(e)
                    })
                }
                ,
                t.prototype.convertToTreeNode = function(t) {
                    var n = {
                        id: t.id,
                        text: t.naam,
                        data: t
                    };
                    return e.isArray(t.links) || (n.data.links = this.createLinksArray(t)),
                    n
                }
                ,
                t.prototype.convertToListItems = function(e) {
                    var t = this;
                    return i.map(e, function(e) {
                        return t.convertToListItem(e)
                    })
                }
                ,
                t.prototype.convertToListItem = function(t) {
                    var n = {
                        id: t.id,
                        text: t.naam,
                        data: t
                    };
                    return e.isArray(t.links) || (n.data.links = this.createLinksArray(t)),
                    n
                }
                ,
                t.prototype.createLinksArray = function(e) {
                    var t = [];
                    return this.addLink(e, t, "self"),
                    this.addLink(e, t, "download"),
                    this.addLink(e, t, "parent"),
                    this.addLink(e, t, "children"),
                    t
                }
                ,
                t.prototype.addLink = function(e, t, n) {
                    Object(s.k)(e.links, n) && t.push({
                        rel: n,
                        href: e.links[n].href
                    })
                }
                ,
                t.prototype.convertToBron = function(e) {
                    return i.map(e, function(e) {
                        return e.data
                    })
                }
                ,
                t.prototype.isBronInRecycleBin = function(e) {
                    return e.rootMapId === o.a.Prullenbak
                }
                ,
                t.prototype.isMedia = function(e) {
                    return !Object(s.w)(e.mediaType) && i.contains([r.a.Audio, r.a.Video, r.a.YouTube], e.mediaType)
                }
                ,
                t.$inject = [t],
                t
            }()
        }
        ).call(this, n(1), n(3))
    },
    95: function(e, t, n) {
        "use strict";
        var i = function() {
            function e(e, t) {
                this.uris = t;
                var n = globalSettings.apiHost + "api/";
                this.detailResource = e(n + this.uris.root + "/:bronId", {
                    persoonId: "@persoonId",
                    bronId: "@Id"
                }, {
                    update: {
                        method: "PUT"
                    }
                }),
                this.rootResource = e(n + this.uris.root, {
                    persoonId: "@persoonId",
                    path: "@parentId",
                    bronId: "@bronId"
                }),
                this.rootItemsResource = e(n + this.uris.rootItems, {
                    persoonId: "@persoonId",
                    path: "@parentId",
                    bronId: "@bronId"
                }, {
                    save: {
                        method: "POST"
                    }
                }),
                this.mapItemsResource = e(n + this.uris.mapItems, {
                    persoonId: "@persoonId",
                    path: "@parentId",
                    bronId: "@bronId"
                }, {
                    save: {
                        method: "POST"
                    }
                }),
                this.downloadResource = e(n + this.uris.download, {
                    bronId: "@bronId"
                })
            }
            return e.prototype.root = function(e, t, n) {
                return this.rootResource.execute({
                    persoonId: e,
                    parentId: t,
                    bronId: n
                }).$promise
            }
            ,
            e.prototype.rootItems = function(e, t, n, i) {
                return this.rootItemsResource.execute({
                    persoonId: t,
                    uniqueId: n,
                    bronId: i
                }).$promise
            }
            ,
            e.prototype.saveRootItem = function(e, t) {
                var n = {
                    persoonId: t
                };
                return 0 === e.Id && e.UniqueId ? n.uniqueId = e.UniqueId : n.bronId = e.Id,
                this.rootItemsResource.save(n, e).$promise
            }
            ,
            e.prototype.saveItem = function(e, t, n) {
                var i = {
                    persoonId: t,
                    mapId: n
                };
                return 0 === e.Id && e.UniqueId ? i.uniqueId = e.UniqueId : i.bronId = e.Id,
                this.mapItemsResource.save(i, e).$promise
            }
            ,
            e.prototype.updateDetail = function(e, t, n) {
                return this.detailResource.update({
                    persoonId: t,
                    bronId: n
                }).$promise
            }
            ,
            e.prototype.download = function(e, t) {
                return this.detailResource.execute({
                    bronId: t
                }).$promise
            }
            ,
            e
        }();
        n.d(t, "a", function() {
            return s
        });
        var r, o = (r = Object.setPrototypeOf || {
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
        ), s = function(e) {
            function t(t) {
                return e.call(this, t, {
                    root: "documenten/onedriveforbusiness",
                    rootItems: "documenten/onedriveforbusiness/items",
                    map: "documenten/onedriveforbusiness/mappen/:mapId",
                    mapItems: "documenten/onedriveforbusiness/mappen/:mapId/items",
                    detail: "documenten/onedriveforbusiness/documenten/:documentId",
                    download: "documenten/onedriveforbusiness/documenten/:documentId/download",
                    toLocal: "documenten/onedriveforbusiness/documenten/:documentId/tolocal",
                    redirect: "documenten/onedriveforbusiness/documenten/:documentId/redirect"
                }) || this
            }
            return o(t, e),
            t.$inject = ["$resource", t],
            t
        }(i)
    }
}]);

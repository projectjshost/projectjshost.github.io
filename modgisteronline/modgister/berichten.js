(window.webpackJsonp = window.webpackJsonp || []).push([[4], {
    111: function(e, t, n) {
        "use strict";
        (function(e, r, i, o) {
            n.d(t, "a", function() {
                return u
            });
            var s = n(4)
              , c = n(7)
              , a = n(85)
              , p = n(0)
              , h = Contracts.Communicatie.Berichten
              , d = Contracts.Bronnen.Enums.BronType
              , u = function() {
                function t(e, t, n, r, i, o, s, c, a, p, h, d, u, l) {
                    var f = this;
                    this.$scope = e,
                    this.$q = t,
                    this.$location = n,
                    this.$routeParams = r,
                    this.$timeout = i,
                    this.$sanitize = o,
                    this.berichtenService = s,
                    this.applicationService = c,
                    this.bronnenService = a,
                    this.fileService = p,
                    this.currentUser = h,
                    this.dialogService = d,
                    this.magisterLocale = u,
                    this.loggingService = l,
                    this.$scope.vm = this,
                    this.sendEnabled = !0,
                    this.handleDrop = function(e) {
                        var t = f.$scope.$eval(e.draggable.element.attr("id"));
                        f.internalHandleDrop(t)
                    }
                    ,
                    this.handleDragStart = function(e) {
                        return f.internalHandlehandleDragStart(e)
                    }
                    ,
                    this.onFileUploaded = function(e, t) {
                        return f.internalOnFileUploaded(e)
                    }
                    ,
                    this.onAddFiles = function(e) {
                        return f.internalOnFileUploaded(e)
                    }
                    ,
                    this.handleManualAdd = function(e) {
                        return f.internalHandleDrop(e)
                    }
                }
                return t.prototype.getContentUri = function(e) {
                    return e.Url || e.Uri
                }
                ,
                t.prototype.bijlageToevoegen = function() {
                    e("#hiddenUploadButton").val(""),
                    e("#hiddenUploadButton").click()
                }
                ,
                t.prototype.goBack = function() {
                    r.isDefined(this.$routeParams.mapId) && r.isDefined(this.$routeParams.berichtId) ? this.$location.path("/berichten").search({
                        mapId: this.$routeParams.mapId || 0,
                        berichtId: this.$routeParams.berichtId || 0
                    }) : this.$location.path("/berichten")
                }
                ,
                t.prototype.verstuurBericht = function() {
                    var e = this;
                    if (this.sendEnabled && !Object(p.w)(this.bericht.Ontvangers) && !Object(p.o)(this.bericht.Ontvangers))
                        if (Object(p.p)(this.bericht.Onderwerp))
                            this.applicationService.showMessage("Het onderwerp is niet ingevuld", c.i.WARNING, c.e, "bericht versturen");
                        else {
                            this.sendEnabled = !1;
                            var t = this.currentUser.person.id
                              , n = this.bericht;
                            n.Id = 0,
                            n.Links = [],
                            this.currentUser.isInRole(s.a.Leerling) && (n.KopieOntvangers.length = 0),
                            this.berichtenService.verstuurBericht(t, n).then(function(t) {
                                t && (e.loggingService.logCustomEvent("Berichten: message send"),
                                e.applicationService.showMessage("Het bericht is succesvol verzonden.", c.i.INFORMATION, 2e3),
                                e.isSend = !0,
                                e.$location.path("/berichten"))
                            }, function() {
                                e.applicationService.showMessage("Onvoldoende rechten om bericht te versturen!", c.i.WARNING, c.e, "bericht versturen")
                            })
                        }
                }
                ,
                t.prototype.getBerichtDetails = function(e) {
                    var t = this.$q.defer()
                      , n = this.currentUser.person.id;
                    return this.berichtenService.getBerichtDetails(n, e, h.Enums.BerichtSoort.Bericht).then(function(e) {
                        t.resolve(e)
                    }),
                    t.promise
                }
                ,
                t.prototype.createInhoudPrefix = function(e) {
                    return "<br/><br/><br/><br/><hr/><b>Van:</b> " + e.Afzender.Naam + "<br/><b>Verzonden:</b> " + i(e.VerstuurdOp).format("LL") + "<br/><b>Aan:</b> " + e.Ontvangers[0].Naam + "<br/><b>Onderwerp:</b> " + e.Onderwerp + "<br/><br/>"
                }
                ,
                t.prototype.internalOnFileUploaded = function(e) {
                    var t = this;
                    0 !== e.length ? (this.loggingService.logCustomEvent("Berichten: attach external file(s)"),
                    this.$scope.$broadcast("SHOW_API_PROGRESS_INDICATOR", "berichten"),
                    o.each(e, function(e) {
                        t.fileService.uploadFile(e).then(function(n) {
                            var r = {
                                Naam: e.name,
                                ContentType: e.type,
                                Id: 0,
                                Datum: new Date,
                                Grootte: e.size,
                                Url: "",
                                UniqueId: n,
                                BronSoort: Contracts.Bronnen.Enums.BronSoort.Bestand,
                                Links: []
                            };
                            t.bericht.Bijlagen.push(r),
                            t.$scope.$broadcast("HIDE_API_PROGRESS_INDICATOR", "berichten")
                        })
                    })) : this.dialogService.showConfirm(this.magisterLocale.NotificationStrings.TITEL_FILE_UPLOAD_NOT_SUPPORTED, this.magisterLocale.NotificationStrings.FILE_UPLOAD_NOT_SUPPORTED, [a.a.Ok], function(e) {})
                }
                ,
                t.prototype.internalHandlehandleDragStart = function(e) {}
                ,
                t.prototype.bronToAnchorElement = function(e) {
                    var t = e.Uri;
                    return 0 !== t.indexOf("http") && (t = "http://" + t),
                    this.$sanitize(e.Naam),
                    this.$sanitize(t),
                    '<a href="' + t + '">' + e.Naam + "</a>"
                }
                ,
                t.prototype.internalHandleDrop = function(e) {
                    var t = this;
                    if (this.loggingService.logCustomEvent("Berichten: attach bron"),
                    !Object(p.w)(e))
                        if ((e.Type & d.OneDriveForBusiness) === d.OneDriveForBusiness) {
                            this.$scope.$broadcast("SHOW_API_PROGRESS_INDICATOR", "berichten");
                            var n = Object(p.j)(e.Links, p.a.toLocal);
                            this.bronnenService.oneDriveForBusinessToLocal(n).then(function(n) {
                                var r = {
                                    Id: 0,
                                    Naam: e.Naam,
                                    ContentType: "",
                                    Datum: null,
                                    Grootte: 0,
                                    Url: Object(p.j)(e.Links, p.a.download),
                                    UniqueId: n.id,
                                    BronSoort: Contracts.Bronnen.Enums.BronSoort.Bestand,
                                    Links: [{
                                        rel: "Self",
                                        href: Object(p.j)(e.Links, p.a.self)
                                    }, {
                                        rel: "Contents",
                                        href: Object(p.j)(e.Links, p.a.download)
                                    }]
                                };
                                t.bericht.Bijlagen.push(r),
                                t.$scope.$broadcast("HIDE_API_PROGRESS_INDICATOR", "berichten")
                            })
                        } else {
                            var r = this.currentUser.relatedPersons.current.id
                              , i = e.Id;
                            this.bronnenService.getBron(r, i).then(function(n) {
                                if (n.Type !== d.Link)
                                    (n.Type & d.Map) !== d.Map ? (n.Id = n.FileBlobId,
                                    n.UniqueId = "00000000-0000-0000-0000-000000000000",
                                    n.Url = Object(p.j)(e.Links, p.a.Contents),
                                    Object(p.w)(o.find(t.bericht.Bijlagen, function(e) {
                                        return e.Id === n.Id
                                    })) ? t.bericht.Bijlagen.push(n) : t.applicationService.showMessage("Een bijlage kan niet twee maal worden toegevoegd.", c.i.WARNING, 2e3)) : t.applicationService.showMessage("Een map kan niet als bijlage worden bijgevoegd.", c.i.WARNING, 2e3);
                                else {
                                    var r = t.bronToAnchorElement(n) + "<br/>";
                                    t.bericht.Inhoud += r
                                }
                            })
                        }
                }
                ,
                t.prototype.isBerichtDifferent = function(e, t) {
                    return !(!r.isDefined(e.Onderwerp) || e.Onderwerp === t.Onderwerp) || (!(!r.isDefined(e.Inhoud) || e.Inhoud === t.Inhoud) || (e.Ontvangers.length !== t.Ontvangers.length || !o.all(e.Ontvangers, function(e, n) {
                        var i = o.findWhere(t.Ontvangers, {
                            Id: e.Id
                        });
                        return r.isDefined(i)
                    })))
                }
                ,
                t.prototype.isDirty = function() {
                    return !this.isSend && this.isBerichtDifferent(this.bericht, this.originalBericht)
                }
                ,
                t.prototype.deleteAttachment = function(e) {
                    this.bericht.Bijlagen.splice(e, 1)
                }
                ,
                t.prototype.canSend = function() {
                    return !Object(p.w)(this.bericht) && !Object(p.p)(this.bericht.Onderwerp) && (!Object(p.w)(this.bericht.Ontvangers) && !Object(p.o)(this.bericht.Ontvangers) && this.sendEnabled)
                }
                ,
                t
            }()
        }
        ).call(this, n(15), n(1), n(14), n(3))
    },
    464: function(e, t, n) {
        "use strict";
        n.r(t),
        function(e) {
            n.d(t, "berichtenAMD", function() {
                return f
            });
            var r = n(95)
              , i = n(91)
              , o = n(465)
              , s = n(466)
              , c = n(467)
              , a = n(469)
              , p = n(470)
              , h = n(472)
              , d = n(474)
              , u = n(475)
              , l = n(660)
              , f = e.module("BerichtenAMD", []);
            f.directive("smBerichtenZoeken", p.a).directive("smContactPersonenZoeken", h.a.$inject),
            f.service(u.a.SERVICE_NAME, u.a.$inject).service("contactPersonenService", d.a.$inject).service("oneDriveForBusinessResource", r.a.$inject).service("bronHelper", i.a.$inject),
            f.controller("BerichtBeantwoordenController", o.a.$inject).controller("BerichtDoorsturenController", s.a.$inject).controller("BerichtOverzichtController", c.a.$inject).controller("NieuwBerichtController", a.a.$inject).controller("BerichtenNieuwController", l.a.$inject)
        }
        .call(this, n(1))
    },
    465: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return c
            });
            var r, i = n(0), o = n(111), s = (r = Object.setPrototypeOf || {
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
            ), c = function(t) {
                function n(e, n, r, i, o, s, c, a, p, h, d, u, l, f, v) {
                    var m = t.call(this, e, n, r, i, o, s, c, a, p, h, d, u, l, v) || this;
                    return m.tabService = f,
                    m.title = "Bericht beantwoorden",
                    m.tabState = m.tabService.tabState,
                    m.tabService.subscribeTabAdded(m.tabAdded, m),
                    m.initialize(),
                    m
                }
                return s(n, t),
                n.prototype.tabAdded = function(e) {
                    "idBronnen" === e.id && this.tabService.openTab(e)
                }
                ,
                n.prototype.initialize = function() {
                    var n = this
                      , r = parseInt(this.$routeParams.berichtId, i.b);
                    t.prototype.getBerichtDetails.call(this, r).then(function(r) {
                        r.Bijlagen = [];
                        var o = t.prototype.createInhoudPrefix.call(n, r);
                        r.Inhoud = o + r.Inhoud,
                        r.Ontvangers = [],
                        r.Ontvangers.push(r.Afzender),
                        n.$scope.$watch("ontvangers", function(e, t) {
                            Object(i.w)(e) || (n.bericht.Ontvangers = e)
                        }, !0);
                        r.Onderwerp = "Re: " + r.Onderwerp,
                        n.bericht = r,
                        n.originalBericht = e.copy(n.bericht)
                    })
                }
                ,
                n.CONTROLLER_NAME = "berichtBeantwoordenController",
                n.$inject = ["$scope", "$q", "$location", "$routeParams", "$timeout", "$sanitize", "berichtenService", "applicationService", "bronnenService", "fileService", "currentUser", "dialogService", "magisterLocale", "tabService", "loggingService", n],
                n
            }(o.a)
        }
        ).call(this, n(1))
    },
    466: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return c
            });
            var r, i = n(0), o = n(111), s = (r = Object.setPrototypeOf || {
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
            ), c = function(t) {
                function n(e, n, r, i, o, s, c, a, p, h, d, u, l, f, v) {
                    var m = t.call(this, e, n, r, i, o, s, c, a, p, h, d, u, l, v) || this;
                    return m.tabService = f,
                    m.title = "Bericht doorsturen",
                    m.tabState = m.tabService.tabState,
                    m.tabService.subscribeTabAdded(m.tabAdded, m),
                    m.initialize(),
                    m
                }
                return s(n, t),
                n.prototype.tabAdded = function(e) {
                    "idBronnen" === e.id && this.tabService.openTab(e)
                }
                ,
                n.prototype.initialize = function() {
                    var n = this
                      , r = parseInt(this.$routeParams.berichtId, i.b);
                    t.prototype.getBerichtDetails.call(this, r).then(function(r) {
                        var o = t.prototype.createInhoudPrefix.call(n, r);
                        r.Inhoud = o + r.Inhoud,
                        r.Ontvangers = [],
                        n.$scope.$watch("ontvangers", function(e, t) {
                            Object(i.w)(e) || (n.bericht.Ontvangers = e)
                        }, !0);
                        r.Onderwerp = "FW: " + r.Onderwerp,
                        n.bericht = r,
                        n.originalBericht = e.copy(n.bericht)
                    })
                }
                ,
                n.CONTROLLER_NAME = "berichtDoorsturenController",
                n.$inject = ["$scope", "$q", "$location", "$routeParams", "$timeout", "$sanitize", "berichtenService", "applicationService", "bronnenService", "fileService", "currentUser", "dialogService", "magisterLocale", "tabService", "loggingService", n],
                n
            }(o.a)
        }
        ).call(this, n(1))
    },
    467: function(e, t, n) {
        "use strict";
        (function(e, r, i) {
            n.d(t, "a", function() {
                return l
            });
            var o = n(7)
              , s = n(5)
              , c = n(8)
              , a = n(85)
              , p = n(103)
              , h = n(0)
              , d = n(468)
              , u = n(136)
              , l = function() {
                function t(t, n, r, i, o, s, c, a, p, h, d, u, l, f, v, m) {
                    var g = this;
                    this.$scope = t,
                    this.$timeout = n,
                    this.$q = r,
                    this.$location = i,
                    this.$filter = o,
                    this.$routeParams = c,
                    this.dialogService = a,
                    this.applicationService = p,
                    this.berichtenService = h,
                    this.mappenService = d,
                    this.folderValidator = u,
                    this.currentUser = l,
                    this.instellingService = f,
                    this.tabService = v,
                    this.downloadTokenService = m,
                    this.MAP_POSTVAK_IN = 1,
                    this.MAP_VERZONDEN_ITEMS = 2,
                    this.MAP_VERWIJDERDE_ITEMS = 3,
                    this.MAP_MEDEDELINGEN = 4,
                    this.skip = 25,
                    this.top = 25,
                    this.MESSAGE_READ_TIMEOUT = 1e3,
                    this.searchText = "",
                    this.SETTINGS_KEY = "NOTIFICATIE_VANAF",
                    this.defaultDateFormat = "YYYY-MM-DD HH:mm",
                    this.defaultFrom = {
                        vanafDatumBerichten: e().format(this.defaultDateFormat)
                    },
                    this.initialize(),
                    t.tabState = this.tabService.tabState,
                    this.tabService.subscribeTabAdded(this.tabAdded, this),
                    this.tabService.tabState.tabContainerVisible = !1,
                    t.mappenLijstVisible = !0,
                    t.selectMap = function(e) {
                        return g.selectMap(e)
                    }
                    ,
                    t.selectBericht = function(e) {
                        return g.selectBericht(e)
                    }
                    ,
                    t.getBerichtSoort = function(e) {
                        return g.getBerichtSoort(e)
                    }
                    ,
                    t.togglePanelVisibility = function(e) {
                        return g.togglePanelVisibility(e)
                    }
                    ,
                    t.verwijderBericht = function(e) {
                        return g.showVerwijderDialogOrVerwijderDirect(e)
                    }
                    ,
                    t.wijzigGelezenStatus = function(e) {
                        return g.wijzigGelezenStatus(e)
                    }
                    ,
                    t.mapLeegmaken = function() {
                        return g.mapLeegmaken()
                    }
                    ,
                    t.nieuwBericht = function() {
                        return g.nieuwBericht()
                    }
                    ,
                    t.berichtBeantwoorden = function(e) {
                        return g.berichtBeantwoorden(e)
                    }
                    ,
                    t.getAfzenders = function(e) {
                        return g.getAfzenders(e)
                    }
                    ,
                    t.getOntvangers = function(e) {
                        return g.getOntvangers(e)
                    }
                    ,
                    t.berichtDoorsturen = function(e) {
                        return g.berichtDoorsturen(e)
                    }
                    ,
                    t.onBerichtIsCheckedChanged = function(e) {
                        return g.onBerichtIsCheckedChanged(e)
                    }
                    ,
                    t.getNextBerichten = function() {
                        return g.getNextBerichten()
                    }
                    ,
                    t.handleDrop = function(e) {
                        return g.handleDrop(e)
                    }
                    ,
                    t.checkBijlageContentStatus = function(e) {
                        return g.checkBijlageContentStatus(e)
                    }
                    ,
                    t.onOpenAttachment = function(e) {
                        return g.onOpenAttachment(e)
                    }
                    ,
                    this.$scope.validateCreateFolder = function(e, t) {
                        return g.validateCreateFolder(e, t)
                    }
                    ,
                    this.$scope.validateRenameFolder = function(e, t) {
                        return g.validateRenameFolder(e, t)
                    }
                    ,
                    this.$scope.renameFolder = function(e) {
                        return g.renameFolder(e)
                    }
                    ,
                    this.$scope.createFolder = function(e) {
                        return g.createFolder(e)
                    }
                    ,
                    this.$scope.scrollActive = !0,
                    this.$scope.isMeerdereBerichtenChecked = !1,
                    this.$scope.html = function(e) {
                        return s.trustAsHtml(e)
                    }
                    ,
                    this.$scope.searchObject = {
                        searchText: "find me"
                    },
                    this.$scope.searchBerichten = function(e) {
                        return g.searchBerichten(e)
                    }
                    ,
                    this.$scope.searchActive = !1,
                    this.$scope.terug = function() {
                        return g.terug()
                    }
                    ,
                    this.$scope.searchFunction = {},
                    this.$scope.isSearching = !1
                }
                return t.prototype.onOpenAttachment = function(e) {
                    this.downloadTokenService.downloadFromLocation(Object(h.j)(e.Links, h.a.Self))
                }
                ,
                t.prototype.checkBijlageContentStatus = function(e) {
                    var t = this;
                    this.getBerichtDetails(this.$scope.selectedBerichtListItem).then(function(n) {
                        r(n.Bijlagen).findWhere({
                            Id: e.Id
                        }).Status === Contracts.Bronnen.Enums.BijlageContentStatus.InProgress && t.applicationService.showMessage("Bezig met toevoegen, even geduld.", o.i.INFORMATION, o.e, "Bijlage niet geladen")
                    })
                }
                ,
                t.prototype.tabAdded = function(e) {
                    "idWeergave" === e.id && this.tabService.openTab(e, !1)
                }
                ,
                t.prototype.mapExists = function(e, t) {
                    var n = this.$q.defer();
                    return this.getMappen(t).then(function(t) {
                        var o = r.findWhere(t, {
                            Naam: e
                        });
                        n.resolve(i.isDefined(o))
                    }),
                    n.promise
                }
                ,
                t.prototype.addToParent = function(e, t) {
                    e.parent = t,
                    e.ParentId = t.Id,
                    t.mappen.push(e)
                }
                ,
                t.prototype.removeFromParent = function(e) {
                    e.parent.mappen = r.without(e.parent.mappen, r.findWhere(e.parent.mappen, {
                        Id: e.Id
                    }))
                }
                ,
                t.prototype.moveToParent = function(e, t) {
                    this.removeFromParent(e),
                    this.addToParent(e, t)
                }
                ,
                t.prototype.handleDrop = function(e) {
                    var t = u.a.eventToDragDropIds(e);
                    switch (u.a.getMetaData(e)) {
                    case "map":
                        this.dropMap(t.dragId, t.dropId);
                        break;
                    case "bericht":
                        this.dropBericht(t);
                        break;
                    default:
                        console.warn("kon het droptype niet determineren.")
                    }
                }
                ,
                t.prototype.dropBericht = function(e) {
                    var t = this.getBerichtByBerichtId(e.dragId, this.$scope.berichtGroepen)
                      , n = this.findBerichtMapById(e.dropId, this.$scope.rootMap);
                    if (t.MapId !== n.Id) {
                        var r = t.MapId;
                        t.MapId = n.Id,
                        this.removeBerichtFromBerichtMap(t);
                        var i = this.berichtListItemToBerichtDTO(t);
                        this.berichtenService.verplaatsBericht(this.currentUser.person.id, i).then(function() {}, function(e) {
                            t.berichtGroep.berichten.push(t),
                            t.MapId = r
                        })
                    }
                }
                ,
                t.prototype.removeBerichtFromBerichtMap = function(e) {
                    e.berichtGroep.berichten = r.without(e.berichtGroep.berichten, r.findWhere(e.berichtGroep.berichten, {
                        Id: e.Id
                    }))
                }
                ,
                t.prototype.dropMap = function(e, t) {
                    var n = this;
                    if (e !== t) {
                        var r = this.findBerichtMapById(e, this.$scope.rootMap)
                          , s = r.parent;
                        if (t !== r.ParentId) {
                            var c = this.findBerichtMapById(t, this.$scope.rootMap)
                              , a = this.findBerichtMapById(t, r);
                            if (i.isDefined(a)) {
                                this.applicationService.showMessage("Een map kan niet naar een van zijn onderliggende mappen verplaatst worden.", o.i.ERROR, o.e)
                            } else
                                this.mapExists(r.Naam, c).then(function(e) {
                                    if (e) {
                                        var t = Object(h.h)("De map '{0}' bevat al een map met de naam '{1}'.", c.Naam, r.Naam);
                                        n.applicationService.showMessage(t, o.i.ERROR, o.e)
                                    } else {
                                        r.unserialized = !0,
                                        n.moveToParent(r, c);
                                        var i = n.currentUser.person.id
                                          , a = n.mappenService.convertBerichtMapToBerichtMapDTO(r);
                                        n.mappenService.wijzigMap(i, a).then(function(e) {
                                            n.applicationService.showMessage("De map is succesvol verplaatst.", o.i.INFORMATION, o.e),
                                            r.unserialized = !1
                                        }, function(e) {
                                            n.moveToParent(r, s)
                                        })
                                    }
                                })
                        }
                    }
                }
                ,
                t.prototype.findBerichtMapById = function(e, t) {
                    if (t.Id === e)
                        return t;
                    if (i.isDefined(t.mappen))
                        for (var n = 0; n < t.mappen.length; n++) {
                            var r = t.mappen[n];
                            if (r.Id === e)
                                return r;
                            var o = this.findBerichtMapById(e, r);
                            if (i.isDefined(o))
                                return o
                        }
                }
                ,
                t.prototype.initialize = function() {
                    var e = this;
                    i.isDefined(this.$routeParams.berichtId) && (this.berichtId = this.$routeParams.berichtId,
                    this.$location.path("/berichten").search({})),
                    this.$scope.isGebruikersMapVisible = this.$scope.isSysteemMapVisible = !0,
                    this.$scope.magNieuw = this.currentUser.hasPrivilege(s.a.Berichten, c.a.Create),
                    this.$scope.selectedType = p.a.None,
                    this.$scope.rootMap = {
                        Naam: "",
                        Id: 0,
                        ParentId: null,
                        BerichtenUri: "",
                        Links: [],
                        OngelezenBerichten: 0,
                        caption: "",
                        parent: null,
                        mappen: []
                    },
                    this.getMappen(this.$scope.rootMap).then(function(t) {
                        e.selecteerEersteMap(t)
                    }),
                    this.$scope.$on("SELECT-MAP-CHANGE", function(t) {
                        for (var n = [], r = 1; r < arguments.length; r++)
                            n[r - 1] = arguments[r];
                        e.selectMap(n[0])
                    }),
                    this.resetNotificationDate()
                }
                ,
                t.prototype.resetNotificationDate = function() {
                    var e = this;
                    this.instellingService.get(this.currentUser.person.id, this.SETTINGS_KEY, this.defaultFrom).then(function(t) {
                        var n = r.extend(t, e.defaultFrom);
                        e.instellingService.set(e.currentUser.person.id, e.SETTINGS_KEY, n)
                    })
                }
                ,
                t.prototype.selecteerEersteMap = function(e) {
                    var t = r.first(e);
                    i.isDefined(t) && null !== t && (t.isCollapsed = !1,
                    this.selectMap(t),
                    this.postVakInMap = t,
                    this.getOngelezenBerichtenCount(t))
                }
                ,
                t.prototype.togglePanelVisibility = function(e) {
                    return !e
                }
                ,
                t.prototype.showVerwijderDialogOrVerwijderDirect = function(e) {
                    this.$scope.magVerwijderen && (this.$scope.selectedType === p.a.Map ? 0 !== this.$scope.selectedMap.ParentId && (this.$scope.selectedMap.ParentId !== this.MAP_VERWIJDERDE_ITEMS && (this.$scope.selectedMap.mappen.length > 0 || this.$scope.berichtGroepen.length > 0) ? this.showVerwijderMapDialog() : this.verwijderMap()) : e.MapId === this.MAP_VERWIJDERDE_ITEMS ? !0 === this.$scope.isMeerdereBerichtenChecked ? this.showVerwijderMeerdereBerichtenDialog(this.berichtenService.getAllCheckedBerichten(this.$scope.berichtGroepen)) : this.showVerwijderBerichtDialog(e) : this.$scope.isMeerdereBerichtenChecked ? this.verwijderMeerdereBerichten(this.berichtenService.getAllCheckedBerichten(this.$scope.berichtGroepen)) : this.verwijderBericht(e))
                }
                ,
                t.prototype.showVerwijderBerichtDialog = function(e) {
                    var t = this;
                    if (!Object(h.w)(e)) {
                        var n = Object(h.h)("Het bericht <b>'{0}'</b> definitief verwijderen?", e.Onderwerp);
                        this.dialogService.showConfirm("Bericht verwijderen", n, [a.a.Ok, a.a.Cancel], function(n) {
                            n.clickedButtonType === a.a.Ok && t.verwijderBericht(e)
                        })
                    }
                }
                ,
                t.prototype.showVerwijderMapDialog = function() {
                    var e = this;
                    Object(h.w)(this.$scope.selectedMap) || this.dialogService.showConfirm("Map verwijderen", "De map " + this.$scope.selectedMap.Naam + " definitief verwijderen?", [a.a.Ok, a.a.Cancel], function(t) {
                        t.clickedButtonType === a.a.Ok && e.verwijderMap()
                    })
                }
                ,
                t.prototype.showVerwijderMeerdereBerichtenDialog = function(e) {
                    var t = this;
                    Object(h.w)(e) || this.dialogService.showConfirm("Berichten verwijderen", "De " + e.length + " geselecteerde berichten definitief verwijderen?", [a.a.Ok, a.a.Cancel], function(n) {
                        n.clickedButtonType === a.a.Ok && t.verwijderMeerdereBerichten(e)
                    })
                }
                ,
                t.prototype.getAfzenders = function(e) {
                    return this.$scope.selectedMap.Id === this.MAP_VERZONDEN_ITEMS ? this.getOntvangers(e) : e.Afzender.Naam
                }
                ,
                t.prototype.getOntvangers = function(e) {
                    if (void 0 !== e)
                        return this.$filter("concatenateItemsWithSeparator")(e.Ontvangers, "Naam", ";")
                }
                ,
                t.prototype.berichtListItemToBerichtDTO = function(e) {
                    return r.omit(e, ["berichtGroep", "isSelected", "isChecked", "totaleBijlageGrootte", "inhoud", "Ontvangers", "Bijlagen"])
                }
                ,
                t.prototype.verwijderMeerdereBerichten = function(e) {
                    var t = this
                      , n = this.$scope.selectedMap.Id === this.MAP_VERWIJDERDE_ITEMS
                      , i = r.map(e, function(e) {
                        return t.berichtListItemToBerichtDTO(e)
                    });
                    this.berichtenService.verwijderMeerdereBerichten(i, n).then(function(n) {
                        r.each(t.$scope.berichtGroepen, function(n) {
                            r.each(e, function(e) {
                                var i = r.indexOf(n.berichten, e);
                                -1 !== i && (n.berichten.splice(i, 1),
                                e.IsGelezen || (t.$scope.selectedMap.OngelezenBerichten--,
                                t.verrijkMapNaamMetAantalOngelezenBerichten(t.$scope.selectedMap)))
                            })
                        }),
                        t.$scope.selectedBerichtDetailItem = null,
                        t.$scope.isMeerdereBerichtenChecked = !1,
                        t.setMenuItemsState()
                    })
                }
                ,
                t.prototype.createFolder = function(e) {
                    var t = this
                      , n = e
                      , o = this.$scope.selectedMap
                      , s = this.mappenService.createMapDTO(n, o.Id)
                      , c = r.extend({
                        parent: o,
                        mappen: [],
                        selected: !1,
                        unserialized: !0,
                        isCollapsed: !0
                    }, s)
                      , a = c;
                    a.caption = c.Naam,
                    this.$scope.selectedMap.mappen.push(c),
                    this.mappenService.createMap(this.currentUser.relatedPersons.current.id, o.Id, n).then(function(e) {
                        i.copy(e, c),
                        a.caption = c.Naam,
                        c.unserialized = !1,
                        c.mappen = [],
                        c.parent = o,
                        c.isCollapsed = !0
                    }, function(e) {
                        t.removeFromParent(c)
                    })
                }
                ,
                t.prototype.verwijderMapInhoud = function(e) {
                    var t = this.currentUser.person.id;
                    this.berichtenService.verwijderMapInhoud(t, e)
                }
                ,
                t.prototype.verwijderMap = function() {
                    var e, t = this, n = this.currentUser.person.id, i = this.$scope.selectedMap, o = r.omit(this.$scope.selectedMap, "parent", "mappen");
                    this.removeFromParent(this.$scope.selectedMap),
                    this.$scope.selectedMap.ParentId === this.MAP_VERWIJDERDE_ITEMS ? e = this.mappenService.verwijderMap(n, o.Id) : (o.ParentId = this.MAP_VERWIJDERDE_ITEMS,
                    e = this.mappenService.wijzigMap(n, o)),
                    e.then(function(e) {}, function(e) {
                        t.$scope.selectedMap.parent.mappen.push(i)
                    })
                }
                ,
                t.prototype.verwijderBericht = function(e) {
                    var t = this
                      , n = this.currentUser.person.id
                      , i = this.berichtListItemToBerichtDTO(e);
                    (e.MapId === this.MAP_VERWIJDERDE_ITEMS ? this.berichtenService.verwijderBerichtDefinitief(n, i) : this.berichtenService.verplaatsBerichtNaarVerwijderd(n, i)).then(function(n) {
                        r.each(t.$scope.berichtGroepen, function(n) {
                            var i = r.indexOf(n.berichten, t.$scope.selectedBerichtListItem);
                            -1 !== i && (n.berichten.splice(i, 1),
                            t.$scope.selectedBerichtDetailItem = null,
                            !1 === e.IsGelezen && (t.$scope.selectedMap.OngelezenBerichten--,
                            t.verrijkMapNaamMetAantalOngelezenBerichten(t.$scope.selectedMap))),
                            t.setMenuItemsState()
                        })
                    })
                }
                ,
                t.prototype.getBerichtSoort = function(e) {
                    return e.Soort === Contracts.Communicatie.Berichten.Enums.BerichtSoort.Mededeling ? "Mededeling" : e.MapTitel
                }
                ,
                t.prototype.selectMap = function(e) {
                    var t = e.Id
                      , n = this.currentUser.person.id;
                    i.isDefined(this.$scope.selectedMap) && null !== this.$scope.selectedMap && (this.$scope.selectedMap.selected = !1),
                    0 === e.Id && (this.$scope.isGebruikersMapVisible = !1),
                    this.$scope.selectedMap = e,
                    this.$scope.selectedMap.selected = !0,
                    this.$scope.mappenLijstVisible = this.togglePanelVisibility(this.$scope.mappenLijstVisible),
                    this.$scope.searchActive || (this.$scope.selectedBerichtDetailItem = this.$scope.berichtGroepen = null,
                    this.getBerichten(n, t)),
                    this.getMappen(this.$scope.selectedMap),
                    this.$scope.viewModel = {
                        mapnaam: this.$scope.selectedMap.Naam
                    },
                    this.$scope.selectedType = p.a.Map,
                    this.$scope.magVerwijderen = this.currentUser.hasPrivilege(s.a.Berichten, c.a.Delete) && this.$scope.selectedType === p.a.Map && 0 !== this.$scope.selectedMap.ParentId
                }
                ,
                t.prototype.selectBericht = function(e, t) {
                    var n = this;
                    void 0 === t && (t = !0),
                    !0 === t && (this.berichtenService.checkAllBerichten(this.$scope.berichtGroepen, !1),
                    this.$scope.isMeerdereBerichtenChecked = !1),
                    this.$scope.selectedBerichtListItem = e,
                    e.Soort === Contracts.Communicatie.Berichten.Enums.BerichtSoort.Bericht && (e.isChecked = !0),
                    this.$scope.selectedType = p.a.Bericht,
                    this.getBerichtDetails(this.$scope.selectedBerichtListItem).then(function(e) {
                        e.IsGelezen || n.$timeout(function() {
                            Object(h.w)(n.$scope.selectedBerichtDetailItem) || n.$scope.selectedBerichtDetailItem.Id !== e.Id || n.wijzigBerichtGelezenStatus(e, !0)
                        }, n.MESSAGE_READ_TIMEOUT, !0),
                        n.setMenuItemsState()
                    })
                }
                ,
                t.prototype.onBerichtIsCheckedChanged = function(e) {
                    var t = this.berichtenService.getNumberOfBerichtenChecked(this.$scope.berichtGroepen);
                    if (this.$scope.isMeerdereBerichtenChecked = t > 1,
                    !0 === e.isChecked)
                        1 === t && this.selectBericht(e, !1);
                    else if (1 === t) {
                        var n = this.berichtenService.getAllCheckedBerichten(this.$scope.berichtGroepen)
                          , i = r.first(n);
                        Object(h.w)(i) || this.selectBericht(i)
                    }
                    this.setMenuItemsState()
                }
                ,
                t.prototype.wijzigGelezenStatus = function(e) {
                    if (!0 === this.$scope.isMeerdereBerichtenChecked) {
                        var t = this.berichtenService.getAllCheckedBerichten(this.$scope.berichtGroepen);
                        this.wijzigMeerdereBerichtGelezenStatus(t, e)
                    } else
                        this.wijzigBerichtGelezenStatus(this.$scope.selectedBerichtDetailItem, e)
                }
                ,
                t.prototype.mapLeegmaken = function() {
                    var e = this;
                    this.$scope.selectedMap.Id === this.MAP_VERWIJDERDE_ITEMS && this.$scope.magMapLeegmaken && this.dialogService.showConfirm("Map leegmaken", "Map verwijderde items leegmaken?", [a.a.Ok, a.a.Cancel], function(t) {
                        t.clickedButtonType === a.a.Ok && (e.verwijderMapInhoud(e.$scope.selectedMap.Id),
                        e.$scope.berichtGroepen = [],
                        e.$scope.selectedBerichtDetailItem = null,
                        e.$scope.magMapLeegmaken = !1)
                    })
                }
                ,
                t.prototype.validateRenameFolder = function(e, t) {
                    var n = r.pluck(this.$scope.rootMap.mappen, "Naam")
                      , i = r.pluck(this.$scope.selectedMap.parent.mappen, "Naam");
                    return this.folderValidator.validate(e, n, i, t)
                }
                ,
                t.prototype.validateCreateFolder = function(e, t) {
                    var n = r.pluck(this.$scope.rootMap.mappen, "Naam")
                      , i = r.pluck(this.$scope.selectedMap.mappen, "Naam");
                    return this.folderValidator.validate(e, n, i, t)
                }
                ,
                t.prototype.renameFolder = function(e) {
                    var t = this
                      , n = this.$scope.selectedMap.Naam
                      , i = r.omit(this.$scope.selectedMap, "parent", "mappen");
                    i.Naam = e,
                    this.$scope.selectedMap.Naam = e,
                    this.mappenService.wijzigMap(this.currentUser.relatedPersons.current.id, i).then(function(n) {
                        t.$scope.selectedMap.caption = e
                    }, function(e) {
                        t.$scope.selectedMap.Naam = n
                    })
                }
                ,
                t.prototype.wijzigMeerdereBerichtGelezenStatus = function(e, t) {
                    var n = this;
                    e = r.filter(e, function(e) {
                        return e.IsGelezen !== t
                    }),
                    r.each(e, function(e) {
                        n.wijzigBerichtGelezenStatus(e, t)
                    })
                }
                ,
                t.prototype.wijzigBerichtGelezenStatus = function(e, t) {
                    if (e.Soort === Contracts.Communicatie.Berichten.Enums.BerichtSoort.Bericht && this.$scope.magOngelezenMarkeren) {
                        var n = this.currentUser.person.id;
                        this.$scope.selectedBerichtListItem.IsGelezen = t,
                        t ? this.$scope.selectedMap.OngelezenBerichten > 0 && this.$scope.selectedMap.OngelezenBerichten-- : this.$scope.selectedMap.OngelezenBerichten++,
                        this.verrijkMapNaamMetAantalOngelezenBerichten(this.$scope.selectedMap),
                        this.berichtenService.wijzigBerichtGelezenStatus(n, e, t)
                    }
                }
                ,
                t.prototype.getOngelezenBerichtenCount = function(e) {
                    var t = this
                      , n = this.currentUser.person.id
                      , r = this.MAP_POSTVAK_IN;
                    this.berichtenService.getOngelezenBerichtenCount(n, r).then(function(n) {
                        e.OngelezenBerichten = n,
                        t.verrijkMapNaamMetAantalOngelezenBerichten(e)
                    })
                }
                ,
                t.prototype.verrijkMapNaamMetAantalOngelezenBerichten = function(e) {
                    if (e === this.postVakInMap) {
                        var t = e.OngelezenBerichten > 0 ? e.Naam + " (" + e.OngelezenBerichten + ")" : e.Naam
                          , n = e;
                        n.caption = t,
                        n.className = e.OngelezenBerichten > 0 ? "unread" : ""
                    }
                }
                ,
                t.prototype.getBerichten = function(e, t) {
                    var n = this
                      , o = []
                      , s = []
                      , c = [];
                    if (t === this.MAP_POSTVAK_IN) {
                        var a = this.berichtenService.getBerichten(e, this.MAP_MEDEDELINGEN);
                        a.then(function(e) {
                            s = e
                        }),
                        o.push(a)
                    }
                    var p = this.berichtenService.getBerichten(e, t);
                    p.then(function(e) {
                        c = e
                    }),
                    o.push(p),
                    this.$q.all(o).then(function() {
                        var e = s.concat(c);
                        n.$scope.berichtGroepen = n.groupByBerichtGroepen(e, !1),
                        t === n.MAP_POSTVAK_IN && i.isDefined(n.berichtId) && "" !== n.berichtId ? n.selecteerMeegegevenBericht() : n.selecteerEersteBericht(),
                        n.$scope.magMapLeegmaken = n.$scope.selectedMap.Id === n.MAP_VERWIJDERDE_ITEMS && n.$scope.berichtGroepen.length > 0;
                        var o = r.findWhere(n.$scope.rootMap.mappen, {
                            Id: n.MAP_POSTVAK_IN
                        })
                          , a = n.isParent(n.$scope.selectedMap, o);
                        n.$scope.magMapHernoemen = a,
                        n.$scope.magMapToevoegen = (a || n.$scope.selectedMap.Id === o.Id) && n.countNumberOfParents(n.$scope.selectedMap, 0) < 7 && n.$scope.magNieuw
                    })
                }
                ,
                t.prototype.countNumberOfParents = function(e, t) {
                    return t++,
                    Object(h.w)(e.parent) ? t : this.countNumberOfParents(e.parent, t)
                }
                ,
                t.prototype.isParent = function(e, t) {
                    return e.ParentId === t.Id || null != e.parent && this.isParent(e.parent, t)
                }
                ,
                t.prototype.groupByBerichtGroepen = function(n, i) {
                    var o = this;
                    void 0 === i && (i = !1);
                    var s, c = i ? this.$scope.berichtGroepen : [], a = function(n) {
                        var r = n.Soort === Contracts.Communicatie.Berichten.Enums.BerichtSoort.Bericht ? e(o.toCrossBrowserDateString("" + n.VerstuurdOp)) : e()
                          , i = r.format(t.SHORT_DATE_FORMAT);
                        return r.toDate().toDateString() === e().toDate().toDateString() ? i + " (vandaag)" : i
                    };
                    if (i) {
                        var p = r.first(n);
                        if (!Object(h.w)(p)) {
                            var u = a(p);
                            s = r.findWhere(c, {
                                titel: u
                            })
                        }
                    }
                    return Object(h.w)(s) && (s = new d.a),
                    r.each(n, function(e) {
                        var t = a(e);
                        s.titel !== t && ((s = new d.a).titel = t,
                        c.push(s)),
                        e.berichtGroep = s,
                        s.berichten.push(e)
                    }),
                    c
                }
                ,
                t.prototype.toCrossBrowserDateString = function(e) {
                    return e.replace("0000Z", "Z")
                }
                ,
                t.prototype.selecteerMeegegevenBericht = function() {
                    var e = parseInt(this.berichtId, h.b)
                      , t = this.getBerichtByBerichtId(e, this.$scope.berichtGroepen);
                    i.isDefined(t) && (this.selectBericht(t),
                    this.berichtId = null)
                }
                ,
                t.prototype.getBerichtByBerichtId = function(e, t) {
                    var n;
                    return r.find(t, function(t) {
                        var o = r.find(t.berichten, function(t) {
                            return t.Id === e
                        });
                        if (i.isDefined(o))
                            return n = o,
                            !0
                    }),
                    n
                }
                ,
                t.prototype.selecteerEersteBericht = function() {
                    var e, t = r.first(this.$scope.berichtGroepen);
                    i.isDefined(t) && (e = r.first(t.berichten),
                    i.isDefined(e) && this.selectBericht(e))
                }
                ,
                t.prototype.getBerichtDetails = function(e) {
                    var t = this
                      , n = this.$q.defer()
                      , r = this.currentUser.person.id;
                    return this.berichtenService.getBerichtDetails(r, e.Id, e.Soort).then(function(e) {
                        t.$scope.selectedBerichtDetailItem = e,
                        n.resolve(e)
                    }),
                    n.promise
                }
                ,
                t.prototype.getMappen = function(e) {
                    var t = this
                      , n = this.currentUser.person.id
                      , r = this.$q.defer();
                    return this.mappenService.getMappenByParentId(n, e.Id).then(function(n) {
                        e.hasOwnProperty("mappen") ? 0 === e.mappen.length ? t.addMappen(e, n) : t.mergeMappen(e, n) : t.addMappen(e, n),
                        r.resolve(n)
                    }),
                    r.promise
                }
                ,
                t.prototype.addMappen = function(e, t) {
                    var n = this;
                    r.each(t, function(t) {
                        n.addMapToParent(e, t)
                    }),
                    e.mappen = t
                }
                ,
                t.prototype.mergeMappen = function(e, t) {
                    var n = this
                      , o = [];
                    r.each(t, function(t) {
                        var s = r.findWhere(e.mappen, {
                            Id: t.Id
                        });
                        i.isDefined(s) ? s.Naam.toLowerCase() !== t.Naam.toLowerCase() && (t.Naam = s.Naam) : (n.addMapToParent(e, t),
                        o.push(t))
                    }),
                    e.mappen.concat(o)
                }
                ,
                t.prototype.addMapToParent = function(e, t) {
                    t.parent = e,
                    t.isCollapsed = !0,
                    t.caption = t.Naam
                }
                ,
                t.prototype.nieuwBericht = function() {
                    this.$location.path("/berichten/nieuw")
                }
                ,
                t.prototype.berichtBeantwoorden = function(e) {
                    this.$scope.magBeantwoorden && this.navigateToExistingBericht("/berichten/beantwoorden", e.MapId, e.Id)
                }
                ,
                t.prototype.berichtDoorsturen = function(e) {
                    this.$scope.magDoorsturen && this.navigateToExistingBericht("/berichten/doorsturen", e.MapId, e.Id)
                }
                ,
                t.prototype.navigateToExistingBericht = function(e, t, n) {
                    this.$location.path(e).search({
                        mapId: t,
                        berichtId: n
                    })
                }
                ,
                t.prototype.setMenuItemsState = function() {
                    var e = this.$scope.selectedBerichtListItem.Soort === Contracts.Communicatie.Berichten.Enums.BerichtSoort.Bericht;
                    this.$scope.isMeerdereBerichtenChecked ? (this.$scope.magBeantwoorden = !1,
                    this.$scope.magDoorsturen = !1) : (this.$scope.magDoorsturen = e && this.currentUser.hasPrivilege(s.a.Berichten, c.a.Create),
                    this.$scope.magBeantwoorden = e && this.currentUser.hasPrivilege(s.a.Berichten, c.a.Create)),
                    this.$scope.magVerwijderen = e && this.currentUser.hasPrivilege(s.a.Berichten, c.a.Delete) && (this.$scope.selectedType === p.a.Bericht || this.$scope.selectedType === p.a.Map && 0 !== this.$scope.selectedMap.ParentId),
                    this.$scope.magOngelezenMarkeren = e && this.currentUser.hasPrivilege(s.a.Berichten, c.a.Update)
                }
                ,
                t.prototype.getNextBerichten = function() {
                    var e = this
                      , t = this.currentUser.person.id
                      , n = this.$scope.selectedMap.Id
                      , r = {
                        top: this.top,
                        skip: this.skip
                    };
                    this.$scope.scrollActive = !1,
                    this.$scope.searchActive ? this.berichtenService.searchBerichten(this.currentUser.relatedPersons.current.id, this.searchText.toLowerCase(), r).then(function(t) {
                        e.$scope.berichtGroepen = e.groupByBerichtGroepen(t, !0),
                        e.$scope.scrollActive = !0
                    }) : this.berichtenService.getBerichten(t, n, Contracts.Communicatie.Berichten.Enums.BerichtSoort.Bericht, r).then(function(t) {
                        e.$scope.berichtGroepen = e.groupByBerichtGroepen(t, !0),
                        e.$scope.scrollActive = !0
                    }),
                    this.skip += this.top
                }
                ,
                t.prototype.searchBerichten = function(e) {
                    var t = this;
                    this.$scope.searchActive = !0,
                    this.$scope.berichtGroepen = [],
                    this.$scope.selectedBerichtDetailItem = null,
                    this.searchText = e,
                    this.top = 25,
                    this.skip = 25,
                    this.$scope.isSearching = !0,
                    this.berichtenService.searchBerichten(this.currentUser.relatedPersons.current.id, e.toLowerCase()).then(function(e) {
                        t.$scope.berichtGroepen = t.groupByBerichtGroepen(e, !1)
                    }).finally(function() {
                        t.$scope.isSearching = !1
                    })
                }
                ,
                t.prototype.terug = function() {
                    var e = this;
                    this.$scope.searchActive = !1,
                    this.$scope.searchFunction.clearSearchText(),
                    this.getMappen(this.$scope.rootMap).then(function(t) {
                        e.selecteerEersteMap(t)
                    })
                }
                ,
                t.SHORT_DATE_FORMAT = "LL",
                t.$inject = ["$scope", "$timeout", "$q", "$location", "$filter", "$sce", "$routeParams", "dialogService", "applicationService", "berichtenService", "mappenService", "folderValidator", "currentUser", "instellingService", "tabService", "downloadTokenService", t],
                t
            }()
        }
        ).call(this, n(14), n(3), n(1))
    },
    468: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r = function() {
            return function() {
                this.isVisible = !0,
                this.berichten = []
            }
        }()
    },
    469: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return s
            });
            var r, i = n(111), o = (r = Object.setPrototypeOf || {
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
            ), s = function(t) {
                function n(e, n, r, i, o, s, c, a, p, h, d, u, l, f, v) {
                    var m = t.call(this, e, n, r, i, o, s, c, a, p, h, d, u, l, v) || this;
                    return m.tabService = f,
                    m.title = "Nieuw bericht",
                    m.tabState = m.tabService.tabState,
                    m.tabService.subscribeTabAdded(m.tabAdded, m),
                    m.bericht = c.createNewBericht(),
                    e.vm = m,
                    m
                }
                return o(n, t),
                n.prototype.tabAdded = function(e) {
                    "idBronnen" === e.id && this.tabService.openTab(e)
                }
                ,
                n.prototype.isDirty = function() {
                    return !this.isSend && (!!(e.isDefined(this.bericht.Onderwerp) && this.bericht.Onderwerp.length > 0) || (this.bericht.Inhoud.length > 0 || (this.bericht.Ontvangers.length > 0 || this.bericht.Bijlagen.length > 0)))
                }
                ,
                n.CONTROLLER_NAME = "nieuwBerichtController",
                n.$inject = ["$scope", "$q", "$location", "$routeParams", "$timeout", "$sanitize", "berichtenService", "applicationService", "bronnenService", "fileService", "currentUser", "dialogService", "magisterLocale", "tabService", "loggingService", n],
                n
            }(i.a)
        }
        ).call(this, n(1))
    },
    470: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var r = n(7)
          , i = function() {
            function e(e, t) {
                this.$scope = e,
                this.applicationService = t,
                this.MINIMUM__SEARCH_TEXT_LENGTH = 3,
                this.searchObject = {
                    searchText: ""
                }
            }
            return e.prototype.onZoekClick = function() {
                this.searchObject.searchText.length < this.MINIMUM__SEARCH_TEXT_LENGTH ? this.applicationService.showMessage("De zoekterm moet minimaal drie tekens lang zijn.", r.i.WARNING, r.e) : this.$scope.searchFunction(this.searchObject)
            }
            ,
            e.prototype.onResetClick = function() {
                return this.clearSearchText(),
                !1
            }
            ,
            e.prototype.clearSearchText = function() {
                this.searchObject.searchText = ""
            }
            ,
            e.$inject = ["$scope", "applicationService", e],
            e
        }();
        function o() {
            return {
                template: n(471),
                replace: !0,
                controller: i.$inject,
                restrict: "A",
                controllerAs: "vm",
                scope: {
                    searchFunction: "&",
                    search: "="
                },
                link: function(e, t, n, r) {
                    e.search = e.search || {},
                    e.search.clearSearchText = function() {
                        return r.clearSearchText()
                    }
                }
            }
        }
    },
    471: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block search-field">\r\n        <h3><b>Zoeken</b></h3>\r\n        <div class="content-auto">\r\n            <fieldset>\r\n                <div>\r\n                    <label>Zoektermen</label>\r\n                    <span class="glyph icon-search" data-ng-click="vm.onZoekClick()"><a href=""></a></span>\r\n                    <span class="reset" data-ng-click="vm.onResetClick()"><a href="">&times;</a></span>\r\n                    <input type="search" id="seachterm" name="seachterm" data-ng-model="vm.searchObject.searchText" data-on-keyup="vm.onZoekClick()" data-keys="[13]" />\r\n                </div>\r\n            </fieldset>\r\n        </div>\r\n    </div>\r\n</div>'
    },
    472: function(e, t, n) {
        "use strict";
        (function(e, r, i) {
            n.d(t, "a", function() {
                return s
            });
            var o = n(0)
              , s = function() {
                function t(e, t) {
                    var r = this;
                    this.contactPersonen = e,
                    this.$timeout = t,
                    this.restrict = "A",
                    this.template = n(473),
                    this.replace = !0,
                    this.link = function(e, t, n) {
                        return r.linkFn(e, t, n)
                    }
                    ,
                    this.scope = {
                        ontvangers: "="
                    }
                }
                return t.prototype.linkFn = function(t, n, i) {
                    var o = this;
                    t.contactPersoonType = "Leerling",
                    t.getContactPersonen = function(e) {
                        return o.contactPersonen.getByString(e, t.contactPersoonType, 10, 0)
                    }
                    ,
                    t.onVorige = function(e) {
                        o.onNavigate(t, e)
                    }
                    ,
                    t.onVolgende = function(e) {
                        o.onNavigate(t, e)
                    }
                    ,
                    t.$watch("selectedContactPersoon", function(n, i) {
                        if (n !== i && e.isDefined(n)) {
                            var s = n;
                            if (e.isDefined(s) && null !== s)
                                r.some(t.ontvangers, function(e) {
                                    return e.Id === s.Id
                                }) || ("Project" === t.contactPersoonType ? o.contactPersonen.getByProject(s.Id).then(function(e) {
                                    var n = r.filter(e, function(e) {
                                        return !r.some(t.ontvangers, function(t) {
                                            return t.Id === e.Id
                                        })
                                    });
                                    t.ontvangers = t.ontvangers.concat(n)
                                }) : t.ontvangers.push(s))
                        }
                    }, !0),
                    t.verwijderOntvanger = function(e) {
                        return o.verwijderOntvanger(t, e)
                    }
                    ,
                    t.isInOntvangers = function(e) {
                        return o.isInOntvangers(t, e)
                    }
                    ,
                    t.onContactPersoonDropDownClick = function() {
                        return o.onContactPersoonDropDownClick()
                    }
                }
                ,
                t.prototype.onContactPersoonDropDownClick = function() {
                    i("#contacttypeselectie").data("kendoDropDownList").focus()
                }
                ,
                t.prototype.verwijderOntvanger = function(e, t) {
                    e.ontvangers.splice(t, 1)
                }
                ,
                t.prototype.isInOntvangers = function(e, t) {
                    return Object(o.e)(e.ontvangers, t)
                }
                ,
                t.prototype.onNavigate = function(e, t) {
                    var n = this;
                    e.getContactPersonenLink = function() {
                        return n.contactPersonen.getByLink(t)
                    }
                }
                ,
                t.$inject = ["contactPersonenService", "$timeout", function(e, n) {
                    return new t(e,n)
                }
                ],
                t
            }()
        }
        ).call(this, n(1), n(3), n(15))
    },
    473: function(e, t) {
        e.exports = '<div>\r\n    <div class="contact-personen">\r\n        <div class="fancy-select" data-ng-click="onContactPersoonDropDownClick()">\r\n            <select \r\n                    id="contacttypeselectie" \r\n                    name="contacttypeselectie"\r\n                    class="select"\r\n                    kendo-drop-down-list="contacttypeselectie"\r\n                    ng-model="contactPersoonType"\r\n                    required="required">\r\n                <option value="Leerling">Leerling</option>\r\n                <option value="Personeel">Personeel</option>\r\n                <option value="Project">Project</option>\r\n                <option value="Overig">Overig</option>\r\n            </select>\r\n        </div>\r\n        <div data-sm-type-ahead="type-ahead" data-selected-item="selectedContactPersoon" data-is-item-grayed="isInOntvangers" \r\n             data-leeg-veld="true" data-display-config="Naam, Code | false" data-get-items="getContactPersonen" data-get-items-link="getContactPersonenLink"\r\n             data-navigation="true" data-min-length="2" ng-model-options="{ debounce: 500 }"\r\n             data-on-vorige-c-b="onVorige(link)" data-on-volgende-c-b="onVolgende(link)"></div>\r\n    </div>\r\n    <div class="sm-checkbox" data-ng-hide="ontvangers.length === 0">\r\n        <div data-ng-repeat="ontvanger in ontvangers" data-ng-click="verwijderOntvanger($index);">\r\n            <a>{{ontvanger.Naam}} ({{ontvanger.Code}})</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
    },
    474: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var r = n(0)
          , i = function() {
            function e(e, t, n, r) {
                this.$q = e,
                this.$resource = t,
                this.cacheService = n,
                this.currentUser = r,
                this.CONTACT_PERSONEN_URL = "api/personen/:persoonId/contactpersonen",
                this.CONTACT_PERSONEN_PROJECT_URL = "api/personen/:persoonId/contactpersonen/projecten/:projectId",
                this.contactPersonenCache = n.createCache("apiContactPersonenCache", {
                    capacity: 500,
                    maxAge: 6e4,
                    recycleFreq: 3e4,
                    cacheFlushInterval: 6e5,
                    storageMode: "memory"
                }),
                this.localContactPersonenCache = n.createCache("localContactPersonenCache", {
                    capacity: 1,
                    maxAge: null,
                    deleteOnExpire: "aggressive",
                    storageMode: "memory"
                })
            }
            return e.prototype.cacheContactPersonen = function(e, t) {
                return Object(r.w)(e) ? null : (this.localContactPersonenCache.put(e, t),
                e)
            }
            ,
            e.prototype.popCachedContactPersonen = function(e) {
                var t = this.localContactPersonenCache.get(e);
                return this.localContactPersonenCache.remove(e),
                Object(r.w)(t) && (t = []),
                t
            }
            ,
            e.prototype.getByProject = function(e) {
                var t = this.$q.defer()
                  , n = {
                    projectId: e,
                    persoonId: this.currentUser.person.id
                };
                return this.$resource(globalSettings.apiHost + this.CONTACT_PERSONEN_PROJECT_URL).get(n, null, function(e) {
                    t.resolve(e.Items)
                }),
                t.promise
            }
            ,
            e.prototype.getByString = function(e, t, n, r) {
                var i = this.$q.defer()
                  , o = {
                    persoonId: this.currentUser.person.id,
                    contactPersoonType: t,
                    q: e,
                    top: n,
                    skip: r
                };
                return this.$resource(globalSettings.apiHost + this.CONTACT_PERSONEN_URL).get(o, null, function(e) {
                    i.resolve(e)
                }),
                i.promise
            }
            ,
            e.prototype.getByLink = function(e) {
                var t = this.$q.defer();
                return this.$resource(e).get(null, null, function(e) {
                    t.resolve(e)
                }),
                t.promise
            }
            ,
            e.$inject = ["$q", "$resource", "cacheService", "currentUser", e],
            e
        }()
    },
    475: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return i
            });
            var r = n(0)
              , i = function() {
                function t(e, t) {
                    this.$q = e,
                    this.$resource = t,
                    this.mappenResource = this.$resource(globalSettings.apiHost + "api/personen/:persoonId/berichten/mappen", {
                        persoonId: "@persoonId"
                    }, {
                        update: {
                            method: "PUT"
                        }
                    }),
                    this.mappenDeleteResource = this.$resource(globalSettings.apiHost + "api/personen/:persoonId/berichten/mappen/:mapId", {
                        persoonId: "@persoonId",
                        mapId: "@mapId"
                    }, {
                        verwijderMap: {
                            method: "DELETE"
                        }
                    })
                }
                return t.prototype.getMappenById = function(e, t, n) {
                    var r = this.$q.defer();
                    return 0 === t ? this.mappenResource.get({
                        persoonId: e
                    }, function(e) {
                        r.resolve(e.Items)
                    }) : this.mappenResource.get({
                        persoonId: e,
                        parentId: t
                    }, function(e) {
                        r.resolve(e.Items)
                    }),
                    r.promise
                }
                ,
                t.prototype.getMappenByParentId = function(t, n) {
                    var r = this.$q.defer()
                      , i = {
                        persoonId: t
                    };
                    return 0 !== n && e.extend(i, {
                        parentId: n
                    }),
                    this.mappenResource.get(i, function(e) {
                        r.resolve(e.Items)
                    }),
                    r.promise
                }
                ,
                t.prototype.wijzigMap = function(e, t) {
                    var n = this.$q.defer()
                      , r = {
                        persoonId: e
                    };
                    return this.mappenResource.update(r, t, function(e) {
                        n.resolve(e)
                    }, function(e) {
                        n.reject(e.data.Message)
                    }),
                    n.promise
                }
                ,
                t.prototype.convertBerichtMapToBerichtMapDTO = function(e) {
                    return {
                        Naam: e.Naam,
                        OngelezenBerichten: e.OngelezenBerichten,
                        Id: e.Id,
                        ParentId: e.ParentId,
                        BerichtenUri: e.BerichtenUri,
                        Links: null
                    }
                }
                ,
                t.prototype.createMapDTO = function(e, t) {
                    return {
                        Id: null,
                        Naam: e,
                        OngelezenBerichten: 0,
                        ParentId: t,
                        BerichtenUri: "",
                        Links: []
                    }
                }
                ,
                t.prototype.createMap = function(e, t, n) {
                    var i = this.$q.defer()
                      , o = {
                        persoonId: e,
                        parentId: t,
                        naam: n
                    };
                    return this.mappenResource.save(o, function(e) {
                        i.resolve(e)
                    }, function(e) {
                        var t = e;
                        Object(r.w)(e.data) || Object(r.w)(e.data.Message) || (t = e.data.Message),
                        i.reject(t)
                    }),
                    i.promise
                }
                ,
                t.prototype.verwijderMap = function(e, t) {
                    this.$q.defer();
                    var n = {
                        persoonId: e,
                        mapId: t
                    };
                    return this.mappenDeleteResource.verwijderMap(n).$promise
                }
                ,
                t.SERVICE_NAME = "mappenService",
                t.$inject = ["$q", "$resource", t],
                t
            }()
        }
        ).call(this, n(1))
    },
    660: function(e, t, n) {
        "use strict";
        var r = function() {
            function e(e, t, n) {
                var r = this;
                this.$window = e,
                this.$scope = t,
                this.unreadMessageService = n,
                this.messageEventHandler = function(e) {
                    return r.handleGuestMessage(e)
                }
                ,
                this.$window.addEventListener("message", this.messageEventHandler),
                this.$scope.$on("$destroy", function() {
                    r.$window.removeEventListener("message", r.messageEventHandler)
                })
            }
            return e.prototype.handleGuestMessage = function(e) {
                if (e.origin === this.$window.location.origin && e.data && "string" == typeof e.data.type)
                    switch (e.data.type) {
                    case "Number of unread messages":
                        this.unreadMessageService.setUnread(e.data.count)
                    }
            }
            ,
            e
        }();
        n.d(t, "a", function() {
            return s
        });
        var i, o = (i = Object.setPrototypeOf || {
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
        ), s = function(e) {
            function t(t, n, r) {
                var i = e.call(this, t, n, r) || this;
                return i.$window = t,
                i
            }
            return o(t, e),
            t.$inject = ["$window", "$scope", "unreadMessageService", t],
            t
        }(r)
    },
    87: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r = function() {
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
            return i
        });
        var r = n(0)
          , i = function() {
            function e(e, t) {
                this.fullName = e,
                this.isFolder = t,
                this.decomposeFileName(e)
            }
            return e.prototype.decomposeFileName = function(e) {
                !Object(r.w)(e) && e.length > 0 && ("." === e.substr(e.length - 1, 1) || -1 === e.lastIndexOf(".") ? this.name = e : (this.extension = e.substr(e.lastIndexOf(".") + 1, e.length),
                this.name = e.substr(0, e.lastIndexOf("."))))
            }
            ,
            e
        }()
    },
    91: function(e, t, n) {
        "use strict";
        (function(e, r) {
            n.d(t, "a", function() {
                return h
            });
            var i = n(90)
              , o = n(86)
              , s = n(0)
              , c = n(87)
              , a = n(89)
              , p = Contracts.Bronnen.Enums.BronType
              , h = function() {
                function t() {
                    this.videoExtensions = "mp4 avi 264 m2v vc1 yuv wmv f4v raw m2ts m3u8 ismv mov 3gpp 3gp 3g2 flv mkv m2v m1v mts ts trp mpg mpeg mp4 h264 mxf divx xvid vob asf",
                    this.audioExtensions = "aac aif aifc aiff au flac m4a mid midi mp3 mpa opus rmi snd wav",
                    this.IS_AANGEMELD_BIJ_KENNISNET_SESSIONCOOKIE_KEY = "isAangemeldBijKennisNet"
                }
                return t.prototype.getLink = function(e) {
                    switch (e.soort) {
                    case c.a.Url:
                        return e.url;
                    default:
                        return Object(s.m)(e.links, "download")
                    }
                }
                ,
                t.prototype.transformBronnen = function(t, n) {
                    var r = this;
                    return e.isUndefined(t) ? [] : t.map(function(e) {
                        return r.transformBron(e, n)
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
                    var t = p.Onbekend;
                    return e.soort === c.a.Map && (t = p.Map),
                    e.soort === c.a.Bestand && (t = p.Document),
                    e.soort === c.a.Url && (t = p.Link),
                    t
                }
                ,
                t.prototype.getMediaType = function(e, t) {
                    var n = new a.a(e,!1).extension
                      , r = i.a.Anders;
                    return Object(s.u)(n) || (-1 !== this.videoExtensions.indexOf(n) && (r = i.a.Video),
                    -1 !== this.audioExtensions.indexOf(n) && (r = i.a.Audio)),
                    Object(s.u)(t) || -1 === t.indexOf("www.youtube.com") || (r = i.a.YouTube),
                    r
                }
                ,
                t.prototype.isFolder = function(e) {
                    return e.soort === c.a.Map
                }
                ,
                t.prototype.isFile = function(e) {
                    return e.soort === c.a.Bestand
                }
                ,
                t.prototype.convertToTreeNodes = function(e) {
                    var t = this;
                    return r.map(e, function(e) {
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
                    return r.map(e, function(e) {
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
                    return r.map(e, function(e) {
                        return e.data
                    })
                }
                ,
                t.prototype.isBronInRecycleBin = function(e) {
                    return e.rootMapId === o.a.Prullenbak
                }
                ,
                t.prototype.isMedia = function(e) {
                    return !Object(s.w)(e.mediaType) && r.contains([i.a.Audio, i.a.Video, i.a.YouTube], e.mediaType)
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
        var r = function() {
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
            e.prototype.rootItems = function(e, t, n, r) {
                return this.rootItemsResource.execute({
                    persoonId: t,
                    uniqueId: n,
                    bronId: r
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
                var r = {
                    persoonId: t,
                    mapId: n
                };
                return 0 === e.Id && e.UniqueId ? r.uniqueId = e.UniqueId : r.bronId = e.Id,
                this.mapItemsResource.save(r, e).$promise
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
        var i, o = (i = Object.setPrototypeOf || {
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
        }(r)
    }
}]);

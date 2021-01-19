(window.webpackJsonp = window.webpackJsonp || []).push([[15], {
    101: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var o = n(0)
          , r = function() {
            function e(e, t) {
                this.$resource = e,
                this.$q = t,
                this.DPF_ENTRY_POINT = "api/leerlingen/:persoonId/portfolio",
                this.apiHost = globalSettings.apiHost
            }
            return e.prototype.get = function(e, t) {
                return void 0 === t && (t = "collection"),
                this.$resource(this.apiHost + this.getCollectionLink(e, t), {}, {
                    execute: {
                        method: "GET"
                    }
                }).execute({}).$promise
            }
            ,
            e.prototype.getSysteemMap = function(e, t, n) {
                var r = this
                  , i = this.$q.defer();
                return this.getEntryPoints(e).then(function(e) {
                    var a = Object(o.k)(e.links, t);
                    a ? r.$resource(r.apiHost + r.getLink(a), {}, {
                        execute: {
                            method: "GET"
                        }
                    }).execute(n).$promise.then(function(e) {
                        i.resolve(e)
                    }) : i.reject("Link niet gevonden")
                }),
                i.promise
            }
            ,
            e.prototype.delete = function(e) {
                return this.$resource(this.apiHost + e, {}, {
                    execute: {
                        method: "DELETE"
                    }
                }).execute({}).$promise
            }
            ,
            e.prototype.getEntryPoints = function(e) {
                return this.$resource(this.apiHost + this.DPF_ENTRY_POINT, {
                    persoonId: "@persoonId"
                }, {
                    execute: {
                        method: "GET",
                        cache: !0
                    }
                }).execute({
                    persoonId: e
                }).$promise
            }
            ,
            e.prototype.post = function(e, t, n, o) {
                void 0 === n && (n = "children");
                var r = this.$q.defer();
                return this.$resource(this.apiHost + this.getCollectionLink(e, n), {
                    sourceId: o
                }, {
                    execute: {
                        method: "POST"
                    }
                }).execute(t).$promise.then(function(e) {
                    r.resolve(e.location)
                }, function(e) {
                    r.reject(e)
                }),
                r.promise
            }
            ,
            e.prototype.getCollectionLink = function(e, t) {
                return this.getLink(Object(o.k)(e, t))
            }
            ,
            e.prototype.getLink = function(e) {
                return Object(o.u)(e) || 0 !== e.indexOf("/") || (e = e.substring(1, e.length)),
                e
            }
            ,
            e.$inject = ["$resource", "$q", e],
            e
        }()
    },
    112: function(e, t) {
        e.exports = '<div class="new-message-block"> \x3c!--TODO: andere class naam--\x3e\r\n    <ul>\r\n        <li class="text-input">\r\n            <label for="Naam">Naam </label>\r\n            <input type="text" required="required" data-ng-model="vm.caption" data-ng-class="{\'invalid-field\': vm.captionIsInValid}" />\r\n        </li>\r\n        <li class="text-input">\r\n            <label for="Naam">Url </label>\r\n            <input type="text" required="required" data-ng-model="vm.url" data-ng-class="{\'invalid-field\': vm.urlIsInValid}" />\r\n        </li>\r\n    </ul>\r\n</div>'
    },
    113: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var o = n(0)
          , r = Contracts.Bronnen.Enums.BronType
          , i = function() {
            function e() {}
            return e.prototype.bronIcon = function() {
                var e = {
                    audio: "audiofile",
                    image: "imagefile",
                    message: "word",
                    text: "word",
                    video: "videofile",
                    "application/msword": "word",
                    "application/pdf": "pdffile",
                    "application/vnd.ms-excel": "excel",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "excel",
                    "application/vnd.ms-powerpoint": "presentationfile",
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation": "presentationfile",
                    "application/vnd.visio": "presentationfile",
                    "application/vnd.ms-works": "word",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "word",
                    other: "unknownfile"
                };
                return function(t) {
                    return Object(o.w)(t) ? "unknownfile" : (t.type & r.Link) === r.Link ? "webpage" : (t.type & r.Map) === r.Map ? "map" : (t.type & r.Document) === r.Document ? function(t) {
                        if (null == t)
                            return "unknownfile";
                        var n = t.substr(0, t.lastIndexOf("/")).toLowerCase();
                        return "application" === n && (n = t),
                        e[n] || "unknownfile"
                    }(t.contentType) : "unknownfile"
                }
            }
            ,
            e
        }()
    },
    114: function(e, t, n) {
        "use strict";
        (function(e, o) {
            n.d(t, "a", function() {
                return r
            });
            var r = function() {
                function t(e, t, n) {
                    this.$q = e,
                    this.bronnenResource = t,
                    this.bronHelper = n,
                    this.ROOT_FOLDER = "beoordeeldeProducten",
                    this.beoordeeldeProducten = []
                }
                return t.prototype.getByOpdrachtId = function(t) {
                    return e.where(this.beoordeeldeProducten, {
                        opdrachtId: t
                    })
                }
                ,
                t.prototype.getBeoordeeldeProducten = function(t, n) {
                    var r = this;
                    return this.bronnenResource.getSysteemMap(t, this.ROOT_FOLDER, n).then(function(t) {
                        var n = e.map(t.items, function(e) {
                            return (o.isUndefined(e.vakOmschrijving) || null === e.vakOmschrijving || "" === e.vakOmschrijving) && (e.vakOmschrijving = "Overig"),
                            e.type = Contracts.Bronnen.Enums.BronType.Document,
                            e
                        });
                        return r.beoordeeldeProducten = n,
                        r.beoordeeldeProducten.forEach(function(e) {
                            o.isArray(e.links) || (e.links = r.bronHelper.createLinksArray(e))
                        }),
                        r.beoordeeldeProducten
                    })
                }
                ,
                t.prototype.getVakken = function() {
                    return e.uniq(e.map(this.beoordeeldeProducten, function(e) {
                        return {
                            id: e.opdrachtId,
                            omschrijving: e.vakOmschrijving
                        }
                    }), function(e) {
                        return e.omschrijving
                    })
                }
                ,
                t.$inject = ["$q", "bronnenResource", "bronHelper", t],
                t
            }()
        }
        ).call(this, n(3), n(1))
    },
    115: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var o = function() {
            function e() {}
            return e.Geen = "geen",
            e.Lezer = "lezer",
            e.Auteur = "auteur",
            e.Redacteur = "redacteur",
            e.Eigenaar = "eigenaar",
            e.MapEigenaar = "mapEigenaar",
            e
        }()
    },
    116: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var o = n(0)
          , r = function() {
            function e(e, t) {
                this.$q = e,
                this.$resource = t,
                this.apiHost = globalSettings.apiHost
            }
            return e.prototype.get = function(e, t) {
                void 0 === t && (t = "self");
                this.$q.defer();
                return this.$resource(this.apiHost + this.getSoortLink(e, t), {}, {
                    execute: {
                        method: "GET"
                    }
                }).execute({}).$promise
            }
            ,
            e.prototype.put = function(e, t, n) {
                void 0 === n && (n = "self");
                var o = this.$q.defer();
                return this.$resource(this.apiHost + this.getSoortLink(e, n), {}, {
                    execute: {
                        method: "PUT"
                    }
                }).execute(t).$promise.then(function(e) {
                    o.resolve(e.location)
                }, function(e) {
                    o.reject(e)
                }),
                o.promise
            }
            ,
            e.prototype.post = function(e, t, n) {
                void 0 === n && (n = "self");
                var o = this.$q.defer();
                return this.$resource(this.apiHost + this.getSoortLink(e, n), {}, {
                    execute: {
                        method: "POST"
                    }
                }).execute(t).$promise.then(function(e) {
                    o.resolve(e.location)
                }, function(e) {
                    o.reject(e)
                }),
                o.promise
            }
            ,
            e.prototype.delete = function(e) {
                return this.$resource(this.apiHost + this.getSoortLink(e), {}, {
                    execute: {
                        method: "DELETE"
                    }
                }).execute({}).$promise
            }
            ,
            e.prototype.getSoortLink = function(e, t) {
                return void 0 === t && (t = "self"),
                this.getLink(Object(o.k)(e, t))
            }
            ,
            e.prototype.getLink = function(e) {
                return Object(o.u)(e) || 0 !== e.indexOf("/") || (e = e.substring(1, e.length)),
                e
            }
            ,
            e.$inject = ["$q", "$resource", e],
            e
        }()
    },
    546: function(e, t, n) {
        "use strict";
        n.r(t),
        function(e) {
            n.d(t, "portfolioDocumentenAMD", function() {
                return b
            });
            var o = n(95)
              , r = n(91)
              , i = n(113)
              , a = n(101)
              , s = n(114)
              , d = n(547)
              , c = n(548)
              , u = n(549)
              , l = n(116)
              , p = n(550)
              , h = n(551)
              , f = n(552)
              , m = n(554)
              , v = n(555)
              , g = n(557)
              , b = e.module("portfolioDocumentenAMD", []);
            b.filter("bronIcon", i.a.prototype.bronIcon),
            b.service("bronnenResource", a.a.$inject).service("bronResource", l.a.$inject).service("oneDriveForBusinessResource", o.a.$inject).service("beoordeeldeProductenService", s.a.$inject).service("bronHelper", r.a.$inject).service("eloBronnenService", p.a.$inject).service("menuPrivilegeHelper", h.a.$inject).service("dialogHelper", c.a.$inject).service("dragDropHelper", d.a.$inject),
            b.controller("portfolioDocumentenController", m.a.$inject),
            b.directive("smBeoordeeldeProductenDirective", v.a).directive("smOverzichtMenuDirective", f.a.$inject).directive("smPortfolioMultimediaDirective", g.a),
            b.factory("bronnenValidator", function() {
                return new u.a
            })
        }
        .call(this, n(1))
    },
    547: function(e, t, n) {
        "use strict";
        (function(e, o) {
            n.d(t, "a", function() {
                return i
            });
            var r = n(0)
              , i = function() {
                function t() {}
                return t.prototype.createHintElement = function(t) {
                    var n = e.element(document.createElement(t.get(0).tagName));
                    return n.html(t.html()),
                    n.width(t.width()),
                    n.height(t.height()),
                    n.attr("id", t.attr("id")),
                    n.attr("class", t.attr("class")),
                    n.addClass("bron-drag-hint"),
                    n
                }
                ,
                t.prototype.getAttribute = function(e, t) {
                    if (e.length > 0) {
                        var n = o.first(e).getAttribute(t);
                        if (!Object(r.u)(n))
                            return parseInt(n, r.b)
                    }
                    return 0
                }
                ,
                t.$inject = [t],
                t
            }()
        }
        ).call(this, n(1), n(3))
    },
    548: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var o = n(7)
          , r = n(85)
          , i = function() {
            function e(e, t, n) {
                this.$q = e,
                this.applicationService = t,
                this.dialogService = n,
                this.TITLE = "ELO Bronnen"
            }
            return e.prototype.showUploadSuccessMessage = function(e) {
                var t = "De bron <b>" + (e || "") + "</b> is succesvol toegevoegd.";
                this.applicationService.showMessage(t, o.i.INFORMATION, o.e, this.TITLE)
            }
            ,
            e.prototype.showUploadErrorMessage = function(e) {
                var t = "Het toevoegen van bron <b>" + e + "</b> is mislukt.";
                this.applicationService.showMessage(t, o.i.ERROR, o.e, this.TITLE)
            }
            ,
            e.prototype.showKopieerResultMessage = function(e, t) {
                var n, r;
                e ? (n = "De bron <b>'" + t + "'</b> is succesvol gekopieerd.",
                r = o.i.INFORMATION) : (n = "Er is een fout opgetreden bij het kopieren van <b>'" + t,
                r = o.i.ERROR),
                this.applicationService.showMessage(n, r, o.e, this.TITLE)
            }
            ,
            e.prototype.showMovedBronErrorMessage = function(e) {
                var t = "Het verplaatsen van de map <b>" + e + "</b> is mislukt";
                this.applicationService.showMessage(t, o.i.ERROR, o.e)
            }
            ,
            e.prototype.showOverschrijvenDialog = function(e, t) {
                var n = this.$q.defer()
                  , o = "De bron <b>'" + e + "'</b> bestaat al in de map '<b>" + t + "</b>', overschrijven?";
                return this.dialogService.showConfirm("Bron overschrijven", o, [r.a.Ok, r.a.Cancel], function(e) {
                    n.resolve(e.clickedButtonType === r.a.Ok)
                }),
                n.promise
            }
            ,
            e.prototype.showMovedBronDialog = function() {
                this.applicationService.showMessage("De bron is succesvol verplaatst.", o.i.INFORMATION, o.e, this.TITLE)
            }
            ,
            e.prototype.showCreateFolderErrorMessage = function(e) {
                var t = "Het toevoegen van de map <b>" + e + "</b> is mislukt";
                this.applicationService.showMessage(t, o.i.ERROR, o.e)
            }
            ,
            e.prototype.bepaalVerwijderenDialogText = function(e, t, n) {
                var o = t ? " definitief verwijderen?" : " verwijderen?";
                return n ? "De bron <b>'" + e + "'</b> en alle onderliggende items" + o : "De bron <b>'" + e + "'</b>" + o
            }
            ,
            e.$inject = ["$q", "applicationService", "dialogService", e],
            e
        }()
    },
    549: function(e, t, n) {
        "use strict";
        (function(e, o) {
            n.d(t, "a", function() {
                return a
            });
            var r = n(86)
              , i = n(0)
              , a = function() {
                function t() {}
                return t.prototype.isValidBronTarget = function(e, t, n) {
                    return !0
                }
                ,
                t.prototype.isValidNaam = function(e, t, n, o) {
                    if (this.isNameEmpty(t, o))
                        return !1;
                    var r = this.getFullName(t, n.extension);
                    return !!this.isNameChanged(r, n.fullName, o) && (!!this.isNameUnique(e, r, o) && (!n.isFolder || !this.isNameSystemFolder(r, o)))
                }
                ,
                t.prototype.isValidUrl = function(e, t) {
                    return !(Object(i.u)(e) || !this.matchesRegExPattern(e, /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/)) || (t.push("Vul een geldige url in"),
                    !1)
                }
                ,
                t.prototype.isNameUnique = function(t, n, o) {
                    var r = e.pluck(t, "naam");
                    return !e.contains(r, n) || (o.push("De naam bestaat al."),
                    !1)
                }
                ,
                t.prototype.findDuplicate = function(t, n) {
                    return e.findWhere(t, {
                        naam: n
                    })
                }
                ,
                t.prototype.matchesRegExPattern = function(e, t) {
                    if (o.isUndefined(t) || Object(i.u)(e))
                        return !1;
                    var n = e.match(t);
                    return null !== n && n.length >= 1
                }
                ,
                t.prototype.isNameEmpty = function(e, t) {
                    return !o.isDefined(e) && (t.push("Naam opgeven."),
                    !0)
                }
                ,
                t.prototype.isNameChanged = function(e, t, n) {
                    return e.toLowerCase() !== t.toLowerCase() || (n.push("De naam is hetzelfde."),
                    !1)
                }
                ,
                t.prototype.isNameSystemFolder = function(e, t) {
                    for (var n in r.a)
                        if (isNaN(parseInt(n, 10)) && n.toLocaleUpperCase() === e.toLocaleUpperCase())
                            return t.push("Ongeldige naam."),
                            !0;
                    return !1
                }
                ,
                t.prototype.getFullName = function(e, t) {
                    var n = e;
                    return Object(i.p)(t) || (n += "." + t),
                    n
                }
                ,
                t.$inject = [],
                t
            }()
        }
        ).call(this, n(3), n(1))
    },
    550: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return o
            });
            var o = function() {
                function t(e, t, n, o, r) {
                    this.$q = e,
                    this.bronnenResource = t,
                    this.bronResource = n,
                    this.bronnenValidator = o,
                    this.bronHelper = r
                }
                return t.prototype.getSysteemMappen = function(e, t) {
                    var n = this
                      , o = [];
                    return t.forEach(function(t, r, i) {
                        o.push(n.getSysteemMap(e, t))
                    }),
                    this.$q.all(o)
                }
                ,
                t.prototype.getSysteemMap = function(e, t) {
                    var n = this
                      , o = this.$q.defer();
                    return this.bronnenResource.getSysteemMap(e, t).then(function(e) {
                        var t = e.items[0].id
                          , r = n.bronHelper.transformBronnen(e.items, t);
                        o.resolve(r)
                    }),
                    o.promise
                }
                ,
                t.prototype.get = function(e, t, n) {
                    var o = this
                      , r = this.$q.defer();
                    return this.bronnenResource.get(t, "children").then(function(e) {
                        var t = o.bronHelper.transformBronnen(e.items, n);
                        r.resolve(t)
                    }),
                    r.promise
                }
                ,
                t.prototype.copyBron = function(e, t, n, o) {
                    return this.createOrCopyBron(e, t, n, o)
                }
                ,
                t.prototype.createBron = function(e, t, n) {
                    return this.createOrCopyBron(e, t, n)
                }
                ,
                t.prototype.createOrCopyBron = function(e, t, n, o) {
                    var r = this
                      , i = this.$q.defer();
                    return this.bronnenResource.post(e, t, "children", o).then(function(e) {
                        var t = [{
                            Rel: "self",
                            Href: e
                        }];
                        r.bronResource.get(t).then(function(e) {
                            i.resolve(r.bronHelper.transformBron(e, n))
                        }, function(e) {
                            i.reject(e)
                        })
                    }, function(e) {
                        i.reject(e)
                    }),
                    i.promise
                }
                ,
                t.prototype.moveBron = function(t, n) {
                    var o = this.$q.defer()
                      , r = [];
                    if (this.bronnenValidator.isValidBronTarget(t, n, r)) {
                        var i = {
                            id: t.id,
                            parentId: n,
                            naam: t.naam,
                            url: t.url
                        };
                        this.updateBron(t.links, i).then(function(e) {
                            o.resolve(e)
                        }, function(e) {
                            o.reject(e)
                        })
                    } else
                        o.reject(e.first(r));
                    return o.promise
                }
                ,
                t.prototype.removeBron = function(e) {
                    return this.bronResource.delete(e.links)
                }
                ,
                t.prototype.updateBron = function(e, t) {
                    return this.bronResource.put(e, t)
                }
                ,
                t.$inject = ["$q", "bronnenResource", "bronResource", "bronnenValidator", "bronHelper", t],
                t
            }()
        }
        ).call(this, n(3))
    },
    551: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return c
            });
            var o = n(5)
              , r = n(8)
              , i = n(86)
              , a = n(0)
              , s = n(115)
              , d = n(87)
              , c = function() {
                function t(e) {
                    this.currentUser = e,
                    this.heeftSchrijfRechten = this.currentUser.hasPrivilege(o.a.Bronnen, r.a.Create)
                }
                return t.prototype.bepaalMapPrivileges = function(e, t) {
                    if (Object(a.t)(e)) {
                        t.magMapToevoegen = this.countNumberOfParents(e) < 6,
                        t.magDownloaden = !1;
                        var n = e.soort === d.a.Map && e.rootMapId === i.a.Prullenbak
                          , o = this.isSysteemMap(e.id);
                        switch (e.privilege) {
                        case s.a.MapEigenaar:
                        case s.a.Eigenaar:
                            return t.magToevoegen = this.heeftSchrijfRechten && !n,
                            t.magVerwijderen = !o && this.heeftSchrijfRechten && !n,
                            void (t.magWijzigen = !o && this.heeftSchrijfRechten && !n);
                        case s.a.Redacteur:
                            return t.magToevoegen = this.heeftSchrijfRechten && !n,
                            t.magVerwijderen = !1,
                            void (t.magWijzigen = !o && this.heeftSchrijfRechten && !n);
                        case s.a.Auteur:
                            return t.magToevoegen = this.heeftSchrijfRechten && !n,
                            t.magVerwijderen = !1,
                            void (t.magWijzigen = !1)
                        }
                    }
                    this.setPrivilegesToFalse(t)
                }
                ,
                t.prototype.bepaalBronPrivileges = function(e, t) {
                    if (Object(a.t)(e))
                        switch (t.magDownloaden = e.soort === d.a.Bestand && e.rootMapId !== i.a.Prullenbak,
                        e.privilege) {
                        case s.a.MapEigenaar:
                        case s.a.Eigenaar:
                            return t.magVerwijderen = this.heeftSchrijfRechten,
                            void (t.magWijzigen = this.heeftSchrijfRechten);
                        case s.a.Redacteur:
                            return t.magVerwijderen = !1,
                            void (t.magWijzigen = this.heeftSchrijfRechten);
                        case s.a.Auteur:
                            return t.magToevoegen = e.soort !== d.a.Map && this.heeftSchrijfRechten,
                            t.magVerwijderen = !1,
                            void (t.magWijzigen = !1)
                        }
                    this.setPrivilegesToFalse(t)
                }
                ,
                t.prototype.setPrivilegesToFalse = function(e) {
                    e.magToevoegen = !1,
                    e.magVerwijderen = !1,
                    e.magWijzigen = !1,
                    e.magDownloaden = !1
                }
                ,
                t.prototype.countNumberOfParents = function(e) {
                    return 0
                }
                ,
                t.prototype.isSysteemMap = function(t) {
                    return e.isDefined(i.a[t])
                }
                ,
                t.$inject = ["currentUser", t],
                t
            }()
        }
        ).call(this, n(1))
    },
    552: function(e, t, n) {
        "use strict";
        (function(e, o, r) {
            n.d(t, "a", function() {
                return p
            });
            var i = n(85)
              , a = n(7)
              , s = n(86)
              , d = n(0)
              , c = n(87)
              , u = n(89)
              , l = function() {
                function t(e, t, n, o, r, i, a, s, d, c, u, l, p) {
                    var h = this;
                    this.$rootScope = e,
                    this.$scope = t,
                    this.$q = n,
                    this.$timeout = o,
                    this.currentUser = r,
                    this.dialogService = i,
                    this.applicationService = a,
                    this.bronnenValidator = s,
                    this.bronnenService = d,
                    this.bronHelper = c,
                    this.menuPrivilegeHelper = u,
                    this.dialogHelper = l,
                    this.fileService = p,
                    this.uploadUrl = globalSettings.apiHost + "api/file",
                    this.menuToegang = {
                        magWijzigen: !1,
                        magVerwijderen: !1,
                        magDownloaden: !1,
                        magToevoegen: !1,
                        magMapToevoegen: !1
                    },
                    this.$scope.onUploadSelect = function(e) {
                        return h.uploadSelect(e)
                    }
                    ,
                    this.$scope.onUploadSuccess = function(e) {
                        return h.uploadSuccess(e)
                    }
                }
                return t.prototype.onMapChange = function(e) {
                    this.focusedBron = e,
                    this.menuPrivilegeHelper.bepaalMapPrivileges(e, this.menuToegang)
                }
                ,
                t.prototype.onBronChange = function(e) {
                    this.focusedBron = e,
                    this.menuPrivilegeHelper.bepaalBronPrivileges(e, this.menuToegang)
                }
                ,
                t.prototype.onRenameBron = function() {
                    this.menuToegang.magWijzigen && this.openRenameBronDialog()
                }
                ,
                t.prototype.openRenameBronDialog = function() {
                    var t = this
                      , o = new u.a(this.focusedBron.naam,this.focusedBron.soort === c.a.Map)
                      , r = {
                        mapnaam: o.name
                    };
                    this.dialogService.showDialog({
                        title: "Geef een nieuwe naam op",
                        template: n(107),
                        buttons: [i.a.Ok, i.a.Cancel],
                        callback: function(n, r) {
                            if (n.clickedButtonType === i.a.Ok) {
                                var s = [];
                                if (t.bronnenValidator.isValidNaam(t.getBronnen(), n.data.mapnaam, o, s)) {
                                    t.bronHelper.isFile(t.focusedBron) && (n.data.mapnaam += "." + o.extension);
                                    var d = t.focusedBron.naam;
                                    t.focusedBron.naam = n.data.mapnaam,
                                    t.$scope.onEditBron({
                                        bron: t.focusedBron
                                    });
                                    var c = {
                                        id: t.focusedBron.id,
                                        parentId: t.focusedBron.parentId,
                                        naam: n.data.mapnaam,
                                        url: t.focusedBron.url
                                    };
                                    t.bronnenService.updateBron(t.focusedBron.links, c).then(function(e) {}, function(e) {
                                        t.focusedBron.naam = d,
                                        t.$scope.onEditBron({
                                            bron: t.focusedBron
                                        })
                                    })
                                } else {
                                    var u = e.first(s);
                                    t.applicationService.showMessage(u, a.i.WARNING, a.e),
                                    r.resolve({
                                        shouldClose: !1,
                                        invalidPropertyNames: ["mapnaam"]
                                    })
                                }
                            }
                            r.resolve({
                                shouldClose: !0
                            })
                        },
                        viewModel: r
                    })
                }
                ,
                t.prototype.onDeleteBron = function() {
                    this.menuToegang.magVerwijderen && this.deleteBronDialog()
                }
                ,
                t.prototype.onDownloadBron = function() {
                    if (this.menuToegang.magDownloaden)
                        return this.bronHelper.getLink(this.focusedBron)
                }
                ,
                t.prototype.validateFolder = function(e, t) {
                    var n = new u.a("",!0);
                    return this.bronnenValidator.isValidNaam(this.getBronnen(), e, n, t)
                }
                ,
                t.prototype.createFolder = function(e) {
                    var t = this
                      , n = {
                        naam: e,
                        soort: c.a.Map
                    };
                    this.bronnenService.createBron(this.$scope.selectedFolder.data.links, n, this.$scope.selectedFolder.data.rootMapId).then(function(e) {
                        t.$scope.onAddBron({
                            bron: e
                        })
                    }, function(n) {
                        t.dialogHelper.showCreateFolderErrorMessage(e)
                    })
                }
                ,
                t.prototype.onUploadProgress = function(e) {}
                ,
                t.prototype.uploadSelect = function(t) {
                    var n = this;
                    e.each(t.files, function(e) {
                        var t = n.bronnenValidator.findDuplicate(n.getBronnen(), e.name);
                        Object(d.t)(t) ? n.dialogHelper.showOverschrijvenDialog(e.name, n.$scope.selectedFolder.data.naam).then(function(o) {
                            o && n.bronnenService.removeBron(t).then(function(o) {
                                n.$scope.onDeleteBron({
                                    bron: t
                                }),
                                n.uploadFile(e)
                            })
                        }) : n.uploadFile(e)
                    })
                }
                ,
                t.prototype.uploadFile = function(e) {
                    var t = this;
                    if (e && e.rawFile) {
                        var n = e.rawFile;
                        this.fileService.uploadFile(n).then(function(e) {
                            var o = {
                                naam: n.name,
                                soort: c.a.Bestand,
                                uniqueId: e
                            };
                            t.bronnenService.createBron(t.$scope.selectedFolder.data.links, o, t.$scope.selectedFolder.data.rootMapId).then(function(e) {
                                t.$scope.onAddBron({
                                    bron: e
                                }),
                                t.dialogHelper.showUploadSuccessMessage(n.name)
                            }, function(e) {
                                t.dialogHelper.showUploadErrorMessage(n.name)
                            }).finally(function() {
                                t.$rootScope.$broadcast("HIDE_API_PROGRESS_INDICATOR", "portfolio-upload")
                            })
                        })
                    }
                }
                ,
                t.prototype.onClickFileUpload = function() {
                    this.menuToegang.magToevoegen && (o("#hiddenPortfolfioDocumentenUploadButton").val(""),
                    o("#hiddenPortfolfioDocumentenUploadButton").click())
                }
                ,
                t.prototype.uploadSuccess = function(e) {
                    var t = this
                      , n = e.response
                      , o = {
                        naam: n.FileName,
                        soort: c.a.Bestand,
                        uniqueId: n.Value
                    };
                    this.bronnenService.createBron(this.$scope.selectedFolder.data.links, o, this.$scope.selectedFolder.data.rootMapId).then(function(e) {
                        t.$scope.onAddBron({
                            bron: e
                        }),
                        t.dialogHelper.showUploadSuccessMessage(n.FileName)
                    }, function(e) {
                        t.dialogHelper.showUploadErrorMessage(n.FileName)
                    }).finally(function() {
                        t.$rootScope.$broadcast("HIDE_API_PROGRESS_INDICATOR", "portfolio-upload")
                    })
                }
                ,
                t.prototype.onUploadError = function() {
                    var e = this;
                    return function(t) {
                        e.$rootScope.$broadcast("HIDE_API_PROGRESS_INDICATOR", "portfolio-upload"),
                        e.dialogHelper.showUploadErrorMessage(t.files[0].name)
                    }
                }
                ,
                t.prototype.onAddUrl = function() {
                    this.menuToegang.magToevoegen && this.openAddUrlDialog()
                }
                ,
                t.prototype.deleteBronDialog = function() {
                    var e = this
                      , t = this.dialogHelper.bepaalVerwijderenDialogText(this.focusedBron.naam, this.bronHelper.isBronInRecycleBin(this.focusedBron), this.bronHelper.isFolder(this.focusedBron));
                    this.dialogService.showConfirm("Bron verwijderen", t, [i.a.Ok, i.a.Cancel], function(t) {
                        t.clickedButtonType === i.a.Ok && e.moveOrDeleteBron()
                    })
                }
                ,
                t.prototype.moveOrDeleteBron = function() {
                    this.$scope.onDeleteBron({
                        bron: this.focusedBron
                    }),
                    this.bronHelper.isBronInRecycleBin(this.focusedBron) ? this.verwijderBron(this.focusedBron) : this.verplaatsBron(this.focusedBron)
                }
                ,
                t.prototype.openAddUrlDialog = function() {
                    var t = this;
                    this.dialogService.showDialog({
                        title: "URL toevoegen",
                        template: n(112),
                        buttons: [i.a.Ok, i.a.Cancel],
                        callback: function(n, o) {
                            if (n.clickedButtonType === i.a.Ok) {
                                var r = []
                                  , s = [];
                                if (t.isValidUrl(n.data.url, n.data.caption, s, r)) {
                                    var d = {
                                        naam: n.data.caption,
                                        url: n.data.url,
                                        soort: c.a.Url
                                    };
                                    t.bronnenService.createBron(t.$scope.selectedFolder.data.links, d, t.$scope.selectedFolder.data.rootMapId).then(function(e) {
                                        t.$scope.onAddBron({
                                            bron: e
                                        })
                                    })
                                } else {
                                    var u = e.first(r);
                                    t.applicationService.showMessage(u, a.i.WARNING, a.e),
                                    o.resolve({
                                        shouldClose: !1,
                                        invalidPropertyNames: s
                                    })
                                }
                            }
                            o.resolve({
                                shouldClose: !0
                            })
                        },
                        viewModel: {
                            caption: "",
                            url: "http://"
                        }
                    })
                }
                ,
                t.prototype.isValidUrl = function(e, t, n, o) {
                    var r = new u.a("",!1);
                    return this.bronnenValidator.isValidNaam(this.getBronnen(), t, r, o) ? !!this.bronnenValidator.isValidUrl(e, o) || (n.push("url"),
                    !1) : (n.push("caption"),
                    !1)
                }
                ,
                t.prototype.verplaatsBron = function(e) {
                    var t = this;
                    this.bronnenService.moveBron(e, s.a.Prullenbak).then(function(n) {
                        t.applicationService.showMessage("De bron <b>'" + e.naam + "'</b> is verplaatst naar de prullenbak.", a.i.INFORMATION, a.e),
                        t.setFocusedBronToFolder()
                    }, function(n) {
                        t.$scope.onAddBron(e),
                        e.parentId = void 0
                    })
                }
                ,
                t.prototype.verwijderBron = function(e) {
                    var t = this;
                    this.bronnenService.removeBron(e).then(function(n) {
                        t.applicationService.showMessage("De bron <b>'" + e.naam + "'</b> is verwijderd.", a.i.INFORMATION, a.e),
                        t.setFocusedBronToFolder()
                    }, function(n) {
                        t.$scope.onAddBron(e)
                    })
                }
                ,
                t.prototype.getBronnen = function() {
                    return this.bronHelper.convertToBron(this.$scope.currentBronnen)
                }
                ,
                t.prototype.setFocusedBronToFolder = function() {
                    this.focusedBron = this.$scope.selectedFolder.data,
                    this.menuPrivilegeHelper.bepaalMapPrivileges(this.focusedBron, this.menuToegang)
                }
                ,
                t.$inject = ["$rootScope", "$scope", "$q", "$timeout", "currentUser", "dialogService", "applicationService", "bronnenValidator", "eloBronnenService", "bronHelper", "menuPrivilegeHelper", "dialogHelper", "fileService"],
                t
            }()
              , p = function() {
                function e() {
                    var e = this;
                    this.scope = {
                        selectedBron: "=",
                        selectedFolder: "=",
                        currentBronnen: "=",
                        onEditBron: "&",
                        onAddBron: "&",
                        onDeleteBron: "&"
                    },
                    this.restrict = "E",
                    this.template = n(553),
                    this.replace = !0,
                    this.controllerAs = "vm",
                    this.controller = l,
                    this.link = function(t, n, o, r) {
                        return e.linkFn(t, n, o, r)
                    }
                }
                return e.prototype.linkFn = function(e, t, n, o) {
                    var r = this;
                    e.validateFolder = function(e, t) {
                        return o.validateFolder(e, t)
                    }
                    ,
                    e.createFolder = function(e) {
                        return o.createFolder(e)
                    }
                    ,
                    e.$watch("selectedFolder", function(e) {
                        o.onMapChange(r.getNodeData(e))
                    }, !1),
                    e.$watch("selectedBron", function(e) {
                        o.onBronChange(r.getNodeData(e))
                    }, !1)
                }
                ,
                e.prototype.getNodeData = function(e) {
                    return r.isUndefined(e) ? void 0 : e.data
                }
                ,
                e.$inject = [function() {
                    return new e
                }
                ],
                e
            }()
        }
        ).call(this, n(3), n(15), n(1))
    },
    553: function(e, t) {
        e.exports = '    <div class="head-bar">\r\n        <div>\r\n            <a title=""><span class="icon-more"></span></a>\r\n            <ul class="foldout">\r\n                <li><a data-ng-click="vm.onRenameBron()" data-ng-class="{\'grayed\': !vm.menuToegang.magWijzigen}">hernoemen</a></li>\r\n                <li><a data-ng-click="vm.onDeleteBron()" data-ng-class="{\'grayed\': !vm.menuToegang.magVerwijderen}">verwijderen</a></li>\r\n                <li><a data-sm-open-linked-resource="vm.onDownloadBron()" data-ng-class="{\'grayed\': !vm.menuToegang.magDownloaden}">downloaden</a></li>\r\n            </ul>\r\n        </div>\r\n        <div>\r\n            <a title=""><span class="icon-plus"></span></a>\r\n            <ul class="foldout">\r\n                <li>\r\n                    <a title="" href="" data-ng-show="(vm.menuToegang.magToevoegen)" data-ng-click="vm.onClickFileUpload()">\r\n                        bestanden toevoegen\r\n                    </a>\r\n                    <input id="hiddenPortfolfioDocumentenUploadButton"\r\n                           name="hiddenPortfolfioDocumentenUploadButton"\r\n                           type="file"\r\n                           kendo-upload\r\n                           data-k-async="{ saveUrl: \'{{vm.uploadUrl}}\', autoUpload: false }"\r\n                           data-k-select="onUploadSelect"\r\n                           data-k-success="onUploadSuccess"\r\n                           data-k-progress="vm.onUploadProgress"\r\n                           data-k-error="vm.onUploadError" />\r\n                    <a data-ng-show="(!vm.menuToegang.magToevoegen)" title="" href="" class="grayed">\r\n                        bestanden toevoegen\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a data-ng-class="{\'grayed\': !vm.menuToegang.magToevoegen || !vm.menuToegang.magMapToevoegen}"\r\n                       data-sm-single-input-dialog="{title: \'Map toevoegen\', label: \'Naam\'}"\r\n                       data-validate-input="validateFolder"\r\n                       data-handle-input="createFolder"\r\n                       data-enabled="vm.menuToegang.magToevoegen && vm.menuToegang.magMapToevoegen">map toevoegen</a>\r\n                </li>\r\n                <li>\r\n                    <a data-ng-class="{\'grayed\': !vm.menuToegang.magToevoegen}" data-ng-click="vm.onAddUrl();">URL toevoegen</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <h1>Portfoliodocumenten</h1>\r\n    </div>\r\n'
    },
    554: function(e, t, n) {
        "use strict";
        (function(e, o) {
            n.d(t, "a", function() {
                return c
            });
            var r, i = n(86), a = n(0), s = n(87), d = Contracts.Bronnen.Enums.BronType;
            !function(e) {
                e[e.PortfolioDocument = 0] = "PortfolioDocument",
                e[e.BeoordeeldProduct = 1] = "BeoordeeldProduct",
                e[e.BronnenToevoegen = 2] = "BronnenToevoegen"
            }(r || (r = {}));
            var c = function() {
                function t(e, t, n, o, r, i, s, d, c, u, l, p, h) {
                    var f = this;
                    this.$scope = e,
                    this.$q = t,
                    this.$routeParams = n,
                    this.$timeout = o,
                    this.currentUser = r,
                    this.bronHelper = i,
                    this.eloBronnenService = s,
                    this.bronnenService = d,
                    this.bronnenValidator = c,
                    this.fileService = u,
                    this.dialogHelper = l,
                    this.tabService = p,
                    this.dragDropHelper = h,
                    this.ROOT_FOLDERS = ["documenten", "prullenbak"],
                    this.BRONNEN_TAB = "idBronnen",
                    this.BEOORDEELDE_PRODUCTEN_TAB = "idBeoordeeldProducten",
                    this.MULTIMEDIA_TAB = "idMultimedia",
                    this.LOADING_INDICATOR_UPLOAD = "portfolio-upload",
                    this.treeData = new kendo.data.HierarchicalDataSource({
                        transport: {
                            read: function(e) {
                                f.loadTreeData().then(function(t) {
                                    e.success(t)
                                })
                            }
                        },
                        schema: {
                            model: {
                                id: "id"
                            }
                        }
                    }),
                    this.bronnen = new kendo.data.DataSource({
                        schema: {
                            model: {
                                id: "id"
                            }
                        }
                    }),
                    this.isLoaded = !1,
                    this.onManualAdd = function(e) {
                        return f.handleManualAdd(e)
                    }
                    ,
                    this.$scope.tabState = this.tabService.tabState,
                    this.tabService.subscribeTabAdded(this.tabAdded, this),
                    o(function() {
                        Object(a.v)(f.$routeParams.beoordeeldProductId) || (f.activateTab(f.BEOORDEELDE_PRODUCTEN_TAB),
                        f.activeBeoordeeldProductId = f.$routeParams.beoordeeldProductId)
                    })
                }
                return t.prototype.tabAdded = function(e) {
                    e.id === this.BRONNEN_TAB && this.tabService.openTab(e)
                }
                ,
                t.prototype.loadTreeData = function() {
                    var t = this.$q.defer()
                      , n = []
                      , o = !0
                      , r = !0;
                    return this.eloBronnenService.getSysteemMappen(this.currentUser.person.id, this.ROOT_FOLDERS).then(function(i) {
                        e.each(i, function(t) {
                            e.each(t, function(e) {
                                n.push({
                                    id: e.id,
                                    text: e.naam,
                                    selected: o,
                                    expanded: r,
                                    data: e
                                }),
                                o && (o = !1,
                                r = !1)
                            })
                        }),
                        t.resolve(n)
                    }),
                    t.promise
                }
                ,
                t.prototype.onDataBound = function() {
                    var e = this;
                    if (!1 === this.isLoaded) {
                        this.isLoaded = !0;
                        var t = this.currentUser.person.id
                          , n = this.treeData.at(0);
                        o.isDefined(n) && (this.selectedFolder = n,
                        this.eloBronnenService.get(t, n.data.links, n.data.rootMapId).then(function(t) {
                            e.updateView(n, t)
                        }))
                    }
                }
                ,
                t.prototype.handleManualAdd = function(e) {
                    (e.Type & d.OneDriveForBusiness) === d.OneDriveForBusiness && (e.BronSoort = Contracts.Bronnen.Enums.BronSoort.Bestand),
                    this.handleAddBron(this.bronHelper.transformBronDtoToBron(e, 0))
                }
                ,
                t.prototype.handleAddBron = function(e, t) {
                    var n = this;
                    if (!Object(a.w)(e)) {
                        var r = o.isDefined(t) ? t.id : this.selectedFolder.id
                          , s = this.getFolder(r);
                        if ((e.type & d.OneDriveForBusiness) === d.OneDriveForBusiness)
                            this.crossLoadFile(e, s);
                        else if (e.type !== d.Map) {
                            this.$scope.$broadcast("SHOW_API_PROGRESS_INDICATOR", this.LOADING_INDICATOR_UPLOAD);
                            var c = {
                                naam: e.naam,
                                soort: e.soort,
                                url: null,
                                uniqueId: null
                            };
                            this.getBronnen(s).then(function(t) {
                                n.validateAddBron(t, e.naam, s.naam, function(t, o) {
                                    t && n.deleteBron(n.bronHelper.transformBron(o, i.a.PortFolioDocumenten)),
                                    n.copyBron(c, e, s)
                                })
                            })
                        }
                    }
                }
                ,
                t.prototype.crossLoadFile = function(e, t) {
                    var n = this;
                    this.$scope.$broadcast("SHOW_API_PROGRESS_INDICATOR", this.LOADING_INDICATOR_UPLOAD);
                    var o = Object(a.j)(e.links, a.a.Upload);
                    o || (o = Object(a.j)(e.links, a.a.toLocal)),
                    this.bronnenService.oneDriveForBusinessToLocal(o).then(function(o) {
                        var r = {
                            naam: e.naam,
                            soort: s.a.Bestand,
                            url: Object(a.j)(e.links, a.a.download),
                            uniqueId: o.id
                        };
                        n.getBronnen(t).then(function(o) {
                            n.validateAddBron(o, e.naam, t.naam, function(o, a) {
                                o && n.deleteBron(n.bronHelper.transformBron(a, i.a.PortFolioDocumenten)),
                                n.createBron(r, e, t)
                            })
                        })
                    })
                }
                ,
                t.prototype.createBron = function(e, t, n) {
                    var o = this
                      , r = !1;
                    this.eloBronnenService.createBron(n.links, e, n.rootMapId).then(function(e) {
                        r = !0;
                        var t = o.bronHelper.transformBron(e, n.rootMapId);
                        o.selectedFolder.data.id === n.id && o.addBron(t)
                    }).finally(function() {
                        o.$scope.$broadcast("HIDE_API_PROGRESS_INDICATOR", o.LOADING_INDICATOR_UPLOAD),
                        o.dialogHelper.showKopieerResultMessage(r, t.naam)
                    })
                }
                ,
                t.prototype.copyBron = function(e, t, n) {
                    var o = this
                      , r = !1;
                    this.eloBronnenService.copyBron(n.links, e, n.rootMapId, t.id).then(function(e) {
                        r = !0;
                        var t = o.bronHelper.transformBron(e, n.rootMapId);
                        o.selectedFolder.data.id === n.id && o.addBron(t)
                    }).finally(function() {
                        o.$scope.$broadcast("HIDE_API_PROGRESS_INDICATOR", o.LOADING_INDICATOR_UPLOAD),
                        o.dialogHelper.showKopieerResultMessage(r, t.naam)
                    })
                }
                ,
                t.prototype.onAddBeoordeeldProduct = function(e) {
                    this.handleAddBron(e)
                }
                ,
                t.prototype.onDragEnter = function() {
                    var e = this;
                    return function(t, n) {
                        var o = e.dragDropHelper.getAttribute(n, "data-id")
                          , a = e.getFolder(o)
                          , s = e.dragDropHelper.getAttribute(t, "data-type");
                        return a.rootMapId !== i.a.Prullenbak || s !== r.BronnenToevoegen && s !== r.BeoordeeldProduct
                    }
                }
                ,
                t.prototype.addBron = function(e) {
                    this.bronHelper.isFolder(e) && this.addFolderToTree(e),
                    this.bronnen.add(this.bronHelper.convertToListItem(e))
                }
                ,
                t.prototype.editBron = function(e) {
                    this.bronHelper.isFolder(e) && this.treeData.get(e.id).set("text", e.naam);
                    var t = this.bronnen.get(e.id);
                    Object(a.t)(t) && t.set("text", e.naam)
                }
                ,
                t.prototype.deleteBron = function(e) {
                    this.bronHelper.isFolder(e) && this.removeFolderFromTree(e.id),
                    this.removeBronFromListView(e.id)
                }
                ,
                t.prototype.removeBronFromListView = function(e) {
                    var t = this.bronnen.get(e);
                    Object(a.t)(t) && this.bronnen.remove(t)
                }
                ,
                t.prototype.removeFolderFromTree = function(e) {
                    var t = this.treeData.get(e);
                    Object(a.t)(t) && this.treeData.remove(t)
                }
                ,
                t.prototype.addFolderToTree = function(e) {
                    this.treeData.get(this.selectedFolder.id).append(this.bronHelper.convertToTreeNode(e))
                }
                ,
                t.prototype.onSelectFolder = function() {
                    var e = this;
                    return function(t) {
                        var n = t.sender.dataItem(t.node);
                        e.selectedFolder !== n && (e.selectedFolder = n,
                        e.eloBronnenService.get(e.currentUser.person.id, n.data.links, n.data.rootMapId).then(function(t) {
                            e.updateView(n, t)
                        }),
                        e.bronHelper.isBronInRecycleBin(n.data) && e.activateTab(e.BEOORDEELDE_PRODUCTEN_TAB),
                        e.toggleTab(e.MULTIMEDIA_TAB, !e.bronHelper.isBronInRecycleBin(n.data)),
                        e.toggleTab(e.BRONNEN_TAB, !e.bronHelper.isBronInRecycleBin(n.data)))
                    }
                }
                ,
                t.prototype.onSelectBron = function(e) {
                    var t = !1;
                    Object(a.w)(this.selectedBron) || (t = this.selectedBron.data.id === e.data.id),
                    this.selectedBron = e,
                    t && this.bronHelper.isFolder(e.data) && this.openFolder(e),
                    this.bronHelper.isBronInRecycleBin(e.data) || this.changeTab(e)
                }
                ,
                t.prototype.getContentLink = function(e) {
                    return Object(a.w)(this.selectedBron) || this.selectedBron.data.id !== e.data.id || this.bronHelper.isFolder(e.data) ? null : this.bronHelper.getLink(e.data)
                }
                ,
                t.prototype.onDrop = function() {
                    var e = this;
                    return function(t) {
                        switch (parseInt(t.draggable.element.get(0).getAttribute("data-type"), a.b)) {
                        case r.PortfolioDocument:
                            e.ddMoveBron(t);
                            break;
                        case r.BeoordeeldProduct:
                            e.ddCopyBeoordeeldProduct(t);
                            break;
                        case r.BronnenToevoegen:
                            e.ddCopyBron(t)
                        }
                    }
                }
                ,
                t.prototype.onFileDrop = function() {
                    var t = this;
                    return function(n, o) {
                        var r = parseInt(t.getTargetElementId(o.target, 5), a.b)
                          , d = t.getFolder(r);
                        t.getBronnen(d).then(function(o) {
                            e.each(n, function(e) {
                                t.validateAddBron(o, e.name, d.naam, function(n, o) {
                                    n && t.deleteBron(t.bronHelper.transformBron(o, i.a.PortFolioDocumenten)),
                                    t.$scope.$broadcast("SHOW_API_PROGRESS_INDICATOR", t.LOADING_INDICATOR_UPLOAD),
                                    t.fileService.uploadFile(e).then(function(n) {
                                        var o = {
                                            naam: e.name,
                                            soort: s.a.Bestand,
                                            uniqueId: n
                                        };
                                        t.eloBronnenService.createBron(d.links, o, d.rootMapId).then(function(n) {
                                            t.selectedFolder.data.id === d.id && t.addBron(n),
                                            t.dialogHelper.showUploadSuccessMessage(e.name)
                                        }, function(n) {
                                            t.dialogHelper.showUploadErrorMessage(e.name)
                                        }).finally(function() {
                                            t.$scope.$broadcast("HIDE_API_PROGRESS_INDICATOR", t.LOADING_INDICATOR_UPLOAD)
                                        })
                                    })
                                })
                            })
                        })
                    }
                }
                ,
                t.prototype.getTargetElementId = function(e, t) {
                    var n = e.getAttribute("data-id");
                    return 0 !== t && Object(a.u)(n) ? this.getTargetElementId(e.parentElement, t - 1) : n
                }
                ,
                t.prototype.getFolder = function(e) {
                    var t = this.selectedFolder.data;
                    if (o.isNumber(e)) {
                        var n = this.treeData.get(e);
                        Object(a.t)(n) && (t = n.data)
                    }
                    return t
                }
                ,
                t.prototype.getBronnen = function(e) {
                    var t = this.$q.defer();
                    return e.id === this.selectedFolder.data.id ? t.resolve(this.bronHelper.convertToBron(this.bronnen.data())) : this.eloBronnenService.get(this.currentUser.person.id, e.links, e.rootMapId).then(function(e) {
                        t.resolve(e)
                    }),
                    t.promise
                }
                ,
                t.prototype.ddMoveBron = function(e) {
                    var t = this.bronnen.getByUid(e.draggable.element.get(0).getAttribute("data-uid"))
                      , n = parseInt(e.dropTarget.get(0).getAttribute("data-id"), a.b)
                      , o = this.getFolder(n);
                    t.data.parentId !== o.id && this.moveBron(t.data, o)
                }
                ,
                t.prototype.moveBron = function(e, t) {
                    var n = this;
                    this.getBronnen(t).then(function(o) {
                        n.validateAddBron(o, e.naam, t.naam, function(o, r) {
                            o && n.deleteBron(n.bronHelper.transformBron(r, i.a.PortFolioDocumenten)),
                            n.eloBronnenService.moveBron(e, t.id).then(function(t) {
                                n.removeBronFromListView(e.id),
                                n.bronHelper.isFolder(e) && n.removeFolderFromTree(e.id),
                                n.dialogHelper.showMovedBronDialog()
                            }).catch(function(t) {
                                n.dialogHelper.showMovedBronErrorMessage(e.naam)
                            })
                        })
                    })
                }
                ,
                t.prototype.ddCopyBron = function(e) {
                    if (!this.isTargetPrullenbak(e)) {
                        var t = e.draggable.element.get(0).getAttribute("id")
                          , n = this.$scope.$eval(t);
                        (n.Type & d.OneDriveForBusiness) === d.OneDriveForBusiness && (n.BronSoort = Contracts.Bronnen.Enums.BronSoort.Bestand),
                        this.ddCopy(e, this.bronHelper.transformBronDtoToBron(n, 0))
                    }
                }
                ,
                t.prototype.ddCopyBeoordeeldProduct = function(e) {
                    if (!this.isTargetPrullenbak(e)) {
                        var t = e.draggable.element.get(0).getAttribute("data-id")
                          , n = this.$scope.$eval(t);
                        this.ddCopy(e, n)
                    }
                }
                ,
                t.prototype.ddCopy = function(e, t) {
                    var n, r = this.getDropTarget(e);
                    o.isDefined(r) && r.data.soort === s.a.Map && (n = r.data),
                    this.handleAddBron(t, n)
                }
                ,
                t.prototype.isTargetPrullenbak = function(e) {
                    var t = this.getDropTarget(e);
                    return o.isDefined(t) && this.getFolder(t.data.id).rootMapId === i.a.Prullenbak
                }
                ,
                t.prototype.getDropTarget = function(e) {
                    var t = this.bronnen.get(e.dropTarget.get(0).getAttribute("data-id"));
                    return Object(a.w)(t) && (t = this.treeData.get(e.dropTarget.get(0).getAttribute("data-id"))),
                    t
                }
                ,
                t.prototype.onCreateHintElement = function() {
                    var e = this;
                    return function(t) {
                        return e.dragDropHelper.createHintElement(t)
                    }
                }
                ,
                t.prototype.expandTreeNode = function(e) {
                    Object(a.t)(this.selectedFolder) && this.selectedFolder.id === e.id && e.set("expanded", !e.expanded)
                }
                ,
                t.prototype.openFolder = function(e) {
                    var t = this;
                    this.eloBronnenService.get(this.currentUser.person.id, e.data.links, e.data.rootMapId).then(function(n) {
                        t.selectNode(e.data.id),
                        t.selectedFolder = e,
                        t.updateView(t.treeData.get(e.data.id), n)
                    })
                }
                ,
                t.prototype.selectNode = function(e) {
                    var t = this.treeData.get(this.selectedFolder.data.id);
                    t.set("selected", !1),
                    t.set("expanded", !0);
                    var n = this.treeData.get(e);
                    n.set("selected", !0),
                    n.set("expanded", !0)
                }
                ,
                t.prototype.updateView = function(t, n) {
                    var r = this
                      , i = e.sortBy(n, function(e) {
                        return e.naam.toLowerCase()
                    })
                      , a = e.filter(i, function(e) {
                        return r.bronHelper.isFolder(e)
                    })
                      , s = e.filter(i, function(e) {
                        return !r.bronHelper.isFolder(e)
                    })
                      , d = this.bronHelper.convertToTreeNodes(a)
                      , c = this.bronHelper.convertToListItems(a)
                      , u = this.bronHelper.convertToListItems(s);
                    e.each(d, function(e) {
                        var n = r.treeData.get(e.id);
                        o.isUndefined(n) && t.append(e)
                    });
                    var l = c.concat(u);
                    this.bronnen.data(l)
                }
                ,
                t.prototype.validateAddBron = function(e, t, n, o) {
                    var r = this
                      , i = this.bronnenValidator.findDuplicate(e, t);
                    Object(a.t)(i) ? this.dialogHelper.showOverschrijvenDialog(t, n).then(function(e) {
                        e ? r.eloBronnenService.removeBron(i).then(function(t) {
                            o(e, i)
                        }) : r.$scope.$broadcast("HIDE_API_PROGRESS_INDICATOR", r.LOADING_INDICATOR_UPLOAD)
                    }) : o(!1)
                }
                ,
                t.prototype.changeTab = function(e) {
                    this.bronHelper.isMedia(e.data) ? this.tabService.openTab(this.tabService.getTab(this.MULTIMEDIA_TAB)) : this.tabService.openTab(this.tabService.getTab(this.BRONNEN_TAB))
                }
                ,
                t.prototype.toggleTab = function(e, t) {
                    this.tabService.setEnableTab(this.tabService.getTab(e), t)
                }
                ,
                t.prototype.activateTab = function(e) {
                    this.tabService.openTab(this.tabService.getTab(e))
                }
                ,
                t.$inject = ["$scope", "$q", "$routeParams", "$timeout", "currentUser", "bronHelper", "eloBronnenService", "bronnenService", "bronnenValidator", "fileService", "dialogHelper", "tabService", "dragDropHelper", t],
                t
            }()
        }
        ).call(this, n(3), n(1))
    },
    555: function(e, t, n) {
        "use strict";
        (function(e, o) {
            n.d(t, "a", function() {
                return a
            });
            var r = n(0)
              , i = function() {
                function t(e, t, n, o) {
                    this.$scope = e,
                    this.beoordeeldeProductenService = t,
                    this.currentUser = n,
                    this.dragDropHelper = o,
                    this.beoordeeldeProducten = new kendo.data.DataSource({
                        schema: {
                            model: {
                                id: "id"
                            }
                        }
                    }),
                    this.initialize()
                }
                return t.prototype.initialize = function() {
                    var t = this
                      , n = this.currentUser.person.id;
                    this.beoordeeldeProductenService.getBeoordeeldeProducten(n).then(function(n) {
                        n = e.sortBy(n, function(e) {
                            return e.naam.toLowerCase()
                        }),
                        t.beoordeeldeProducten.data(n),
                        o.isDefined(t.$scope.setBron) && (t.selectedBron = t.beoordeeldeProducten.get(t.$scope.setBron))
                    })
                }
                ,
                t.prototype.onSelectProduct = function(e) {
                    this.selectedBron = e
                }
                ,
                t.prototype.onAddBron = function() {
                    Object(r.t)(this.selectedBron) && this.$scope.addBron({
                        bron: this.selectedBron
                    })
                }
                ,
                t.prototype.onCreateHintElement = function() {
                    var e = this;
                    return function(t) {
                        return e.dragDropHelper.createHintElement(t)
                    }
                }
                ,
                t.$inject = ["$scope", "beoordeeldeProductenService", "currentUser", "dragDropHelper"],
                t
            }();
            function a() {
                return {
                    replace: !0,
                    template: n(556),
                    restrict: "EA",
                    controller: i,
                    controllerAs: "vm",
                    scope: {
                        addBron: "&",
                        setBron: "="
                    }
                }
            }
        }
        ).call(this, n(3), n(1))
    },
    556: function(e, t) {
        e.exports = '<div class="widget aside-wide-widget">\r\n    <mg-panel heading="Beoordeelde producten">\r\n        <content>\r\n            <kendo-list-view id="beoordeeldproductenLijst"\r\n                             data-k-data-source="vm.beoordeeldeProducten" class="list sources">\r\n                <li k-template class="{{dataItem | bronIcon}}"\r\n                    data-sm-drag-drop="{drag: true}"\r\n                    data-hint-element="vm.onCreateHintElement()"\r\n                    data-ng-class="{\'selected\': dataItem.id === vm.selectedBron.id}"\r\n                    data-type="1"\r\n                    data-id="{{dataItem}}">\r\n                    <a ng-click="vm.onSelectProduct(dataItem)"><span data-ng-bind="dataItem.naam" class="ellipsis"></span></a>\r\n                </li>\r\n            </kendo-list-view>\r\n        </content>\r\n        <footer>\r\n            <a data-ng-click="vm.onAddBron()" id="beoordeelde-producten-toevoegen" data-ng-class="{\'disabled\': !vm.selectedBron}">voeg bron toe</a>\r\n        </footer>\r\n    </mg-panel>\r\n    \x3c!--<sm-panel-widget panel-title="Beoordeelde producten">\r\n        <kendo-list-view id="beoordeeldproductenLijst"\r\n                         data-k-data-source="vm.beoordeeldeProducten" class="list sources">\r\n            <li k-template class="{{dataItem | bronIcon}}"\r\n                data-sm-drag-drop="{drag: true}"\r\n                data-hint-element="vm.onCreateHintElement()"\r\n                data-ng-class="{\'selected\': dataItem.id === vm.selectedBron.id}"\r\n                data-type="1"\r\n                data-id="{{dataItem}}">\r\n                <a ng-click="vm.onSelectProduct(dataItem)"><span data-ng-bind="dataItem.naam" class="ellipsis"></span></a>\r\n            </li>\r\n        </kendo-list-view>\r\n        <footer class="endlink">\r\n            <a data-ng-click="vm.onAddBron()" id="beoordeelde-producten-toevoegen" data-ng-class="{\'disabled\': !vm.selectedBron}">voeg bron toe</a>\r\n        </footer>\r\n    </sm-panel-widget>--\x3e\r\n</div>'
    },
    557: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return s
            });
            var o = n(7)
              , r = n(0)
              , i = n(90)
              , a = function() {
                function t(e, t, n, o, r, i) {
                    var a = this;
                    this.$scope = e,
                    this.$sce = t,
                    this.$timeout = n,
                    this.applicationService = o,
                    this.bronHelper = r,
                    this.downloadTokenService = i,
                    this.YOUTUBE_EMBEDDED_URL = "https://www.youtube.com/embed/",
                    this.$scope.getContentUri = function() {
                        return a.getContentUri()
                    }
                }
                return t.prototype.onSelectedBronChanged = function(t, n) {
                    var o = this;
                    if (!Object(r.w)(t) && e.isDefined(t.data) && t !== n) {
                        var a = Object(r.m)(t.data.links, "download");
                        switch (this.$scope.mediaType = t.data.mediaType,
                        t.data.mediaType) {
                        case i.a.Audio:
                            this.$scope.videoSource = "",
                            this.$scope.downloadLink = a,
                            this.downloadTokenService.getLocation(a).then(function(e) {
                                o.$scope.audioSource = e
                            });
                            break;
                        case i.a.Video:
                            this.$scope.audioSource = "",
                            this.$scope.downloadLink = a,
                            this.downloadTokenService.getLocation(a).then(function(e) {
                                o.$scope.videoSource = e
                            });
                            break;
                        case i.a.YouTube:
                            this.$scope.audioSource = "",
                            this.$scope.videoSource = "";
                            var s = Object(r.g)(t.data.url, "v");
                            if (Object(r.u)(s)) {
                                var d = t.data.url
                                  , c = t.data.url.indexOf("/v/");
                                -1 !== c && (s = t.data.url.substr(c + 3, t.data.url.length - c + 3),
                                d = this.YOUTUBE_EMBEDDED_URL + s)
                            } else
                                d = this.YOUTUBE_EMBEDDED_URL + s;
                            this.$scope.youTubeUrl = this.$sce.trustAsResourceUrl(d + "?autoplay=1");
                            break;
                        case i.a.Anders:
                            this.$scope.audioSource = "",
                            this.$scope.videoSource = ""
                        }
                    }
                }
                ,
                t.prototype.onVideoError = function(e, t) {
                    var n = this;
                    e.src === e.baseURI || Object(r.p)(this.$scope.videoSource) || this.$timeout(function() {
                        n.applicationService.showMessage("Video kan niet afgespeeld worden.", o.i.ERROR, o.e, "Fout bij afspelen")
                    })
                }
                ,
                t.prototype.getContentUri = function() {
                    return this.$scope.downloadLink
                }
                ,
                t.$inject = ["$scope", "$sce", "$timeout", "applicationService", "bronHelper", "downloadTokenService"],
                t
            }();
            function s() {
                return {
                    restrict: "E",
                    template: n(123),
                    scope: {
                        selectedBron: "="
                    },
                    controller: a,
                    link: function(e, t, n, o) {
                        var r = t.find(".smVideo")
                          , i = r[0];
                        r.on("error", function(e) {
                            return o.onVideoError(i, e)
                        }),
                        e.$watch("selectedBron", function(e, t) {
                            return o.onSelectedBronChanged(e, t)
                        })
                    }
                }
            }
        }
        ).call(this, n(1))
    },
    87: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var o = function() {
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
        var o = n(0)
          , r = function() {
            function e(e, t) {
                this.fullName = e,
                this.isFolder = t,
                this.decomposeFileName(e)
            }
            return e.prototype.decomposeFileName = function(e) {
                !Object(o.w)(e) && e.length > 0 && ("." === e.substr(e.length - 1, 1) || -1 === e.lastIndexOf(".") ? this.name = e : (this.extension = e.substr(e.lastIndexOf(".") + 1, e.length),
                this.name = e.substr(0, e.lastIndexOf("."))))
            }
            ,
            e
        }()
    },
    91: function(e, t, n) {
        "use strict";
        (function(e, o) {
            n.d(t, "a", function() {
                return u
            });
            var r = n(90)
              , i = n(86)
              , a = n(0)
              , s = n(87)
              , d = n(89)
              , c = Contracts.Bronnen.Enums.BronType
              , u = function() {
                function t() {
                    this.videoExtensions = "mp4 avi 264 m2v vc1 yuv wmv f4v raw m2ts m3u8 ismv mov 3gpp 3gp 3g2 flv mkv m2v m1v mts ts trp mpg mpeg mp4 h264 mxf divx xvid vob asf",
                    this.audioExtensions = "aac aif aifc aiff au flac m4a mid midi mp3 mpa opus rmi snd wav",
                    this.IS_AANGEMELD_BIJ_KENNISNET_SESSIONCOOKIE_KEY = "isAangemeldBijKennisNet"
                }
                return t.prototype.getLink = function(e) {
                    switch (e.soort) {
                    case s.a.Url:
                        return e.url;
                    default:
                        return Object(a.m)(e.links, "download")
                    }
                }
                ,
                t.prototype.transformBronnen = function(t, n) {
                    var o = this;
                    return e.isUndefined(t) ? [] : t.map(function(e) {
                        return o.transformBron(e, n)
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
                    var t = c.Onbekend;
                    return e.soort === s.a.Map && (t = c.Map),
                    e.soort === s.a.Bestand && (t = c.Document),
                    e.soort === s.a.Url && (t = c.Link),
                    t
                }
                ,
                t.prototype.getMediaType = function(e, t) {
                    var n = new d.a(e,!1).extension
                      , o = r.a.Anders;
                    return Object(a.u)(n) || (-1 !== this.videoExtensions.indexOf(n) && (o = r.a.Video),
                    -1 !== this.audioExtensions.indexOf(n) && (o = r.a.Audio)),
                    Object(a.u)(t) || -1 === t.indexOf("www.youtube.com") || (o = r.a.YouTube),
                    o
                }
                ,
                t.prototype.isFolder = function(e) {
                    return e.soort === s.a.Map
                }
                ,
                t.prototype.isFile = function(e) {
                    return e.soort === s.a.Bestand
                }
                ,
                t.prototype.convertToTreeNodes = function(e) {
                    var t = this;
                    return o.map(e, function(e) {
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
                    return o.map(e, function(e) {
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
                    Object(a.k)(e.links, n) && t.push({
                        rel: n,
                        href: e.links[n].href
                    })
                }
                ,
                t.prototype.convertToBron = function(e) {
                    return o.map(e, function(e) {
                        return e.data
                    })
                }
                ,
                t.prototype.isBronInRecycleBin = function(e) {
                    return e.rootMapId === i.a.Prullenbak
                }
                ,
                t.prototype.isMedia = function(e) {
                    return !Object(a.w)(e.mediaType) && o.contains([r.a.Audio, r.a.Video, r.a.YouTube], e.mediaType)
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
        var o = function() {
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
            e.prototype.rootItems = function(e, t, n, o) {
                return this.rootItemsResource.execute({
                    persoonId: t,
                    uniqueId: n,
                    bronId: o
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
                var o = {
                    persoonId: t,
                    mapId: n
                };
                return 0 === e.Id && e.UniqueId ? o.uniqueId = e.UniqueId : o.bronId = e.Id,
                this.mapItemsResource.save(o, e).$promise
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
            return a
        });
        var r, i = (r = Object.setPrototypeOf || {
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
        ), a = function(e) {
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
            return i(t, e),
            t.$inject = ["$resource", t],
            t
        }(o)
    }
}]);

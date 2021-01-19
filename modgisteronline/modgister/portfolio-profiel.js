(window.webpackJsonp = window.webpackJsonp || []).push([[16], {
    101: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return o
        });
        var n = i(0)
          , o = function() {
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
            e.prototype.getSysteemMap = function(e, t, i) {
                var o = this
                  , r = this.$q.defer();
                return this.getEntryPoints(e).then(function(e) {
                    var s = Object(n.k)(e.links, t);
                    s ? o.$resource(o.apiHost + o.getLink(s), {}, {
                        execute: {
                            method: "GET"
                        }
                    }).execute(i).$promise.then(function(e) {
                        r.resolve(e)
                    }) : r.reject("Link niet gevonden")
                }),
                r.promise
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
            e.prototype.post = function(e, t, i, n) {
                void 0 === i && (i = "children");
                var o = this.$q.defer();
                return this.$resource(this.apiHost + this.getCollectionLink(e, i), {
                    sourceId: n
                }, {
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
            e.prototype.getCollectionLink = function(e, t) {
                return this.getLink(Object(n.k)(e, t))
            }
            ,
            e.prototype.getLink = function(e) {
                return Object(n.u)(e) || 0 !== e.indexOf("/") || (e = e.substring(1, e.length)),
                e
            }
            ,
            e.$inject = ["$resource", "$q", e],
            e
        }()
    },
    116: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return o
        });
        var n = i(0)
          , o = function() {
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
            e.prototype.put = function(e, t, i) {
                void 0 === i && (i = "self");
                var n = this.$q.defer();
                return this.$resource(this.apiHost + this.getSoortLink(e, i), {}, {
                    execute: {
                        method: "PUT"
                    }
                }).execute(t).$promise.then(function(e) {
                    n.resolve(e.location)
                }, function(e) {
                    n.reject(e)
                }),
                n.promise
            }
            ,
            e.prototype.post = function(e, t, i) {
                void 0 === i && (i = "self");
                var n = this.$q.defer();
                return this.$resource(this.apiHost + this.getSoortLink(e, i), {}, {
                    execute: {
                        method: "POST"
                    }
                }).execute(t).$promise.then(function(e) {
                    n.resolve(e.location)
                }, function(e) {
                    n.reject(e)
                }),
                n.promise
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
                this.getLink(Object(n.k)(e, t))
            }
            ,
            e.prototype.getLink = function(e) {
                return Object(n.u)(e) || 0 !== e.indexOf("/") || (e = e.substring(1, e.length)),
                e
            }
            ,
            e.$inject = ["$q", "$resource", e],
            e
        }()
    },
    558: function(e, t, i) {
        "use strict";
        i.r(t),
        function(e) {
            i.d(t, "portfolioProfielAMD", function() {
                return c
            });
            var n = i(101)
              , o = i(116)
              , r = i(559)
              , s = i(560)
              , l = i(562)
              , c = e.module("portfolioProfielAMD", []);
            c.service("bronnenResource", n.a.$inject).service("bronResource", o.a.$inject).service("portfolioProfielService", r.a.$inject),
            c.controller("portfolioProfielController", s.a.$inject),
            c.directive("smProfielFotoDirective", l.a.$inject)
        }
        .call(this, i(1))
    },
    559: function(e, t, i) {
        "use strict";
        (function(e, n) {
            i.d(t, "a", function() {
                return r
            });
            var o = i(0)
              , r = function() {
                function t(e, t, i) {
                    this.$q = e,
                    this.bronnenResource = t,
                    this.bronResource = i,
                    this.VERPLICHTE_ONDERDELEN_ENTRY_POINT = "verplichteProfielOnderdelen",
                    this.ONDERDELEN_ENTRY_POINT = "profielOnderdelen"
                }
                return t.prototype.getOnderdelen = function(t) {
                    return this.$q.all([this.getOnderdeelTitels(t), this.getLeerlingOnderdelen(t)]).then(function(t) {
                        var i = []
                          , n = t[0];
                        return e.each(n, function(n) {
                            var o = e.findWhere(t[1], {
                                verplichtOnderdeelId: n.id
                            });
                            i.push({
                                id: n.id,
                                titel: n.titel,
                                verplichtOnderdeelId: n.id,
                                volgnummer: n.volgnummer,
                                inhoud: o ? o.inhoud : "",
                                bijlageToegestaan: n.bijlageToegestaan,
                                gewijzigdOp: o ? o.gewijzigdOp : null,
                                links: o ? o.links : n.links,
                                heeftBijlage: o ? o.heeftBijlage : n.heeftBijlage
                            })
                        }),
                        i
                    })
                }
                ,
                t.prototype.getBijlage = function(e) {
                    return this.bronResource.get(e, "bijlage")
                }
                ,
                t.prototype.saveBijlage = function(e, t) {
                    var i = this;
                    return this.bronResource.post(t.links, e, "bijlage").then(function(e) {
                        return i.bronResource.get([{
                            Rel: "self",
                            Href: e
                        }]).then(function(e) {
                            return e
                        })
                    })
                }
                ,
                t.prototype.getOrCreateOnderdeel = function(e, t) {
                    var i = this
                      , n = this.$q.defer();
                    return Object(o.k)(t.links, "bijlage") ? n.resolve(t) : this.saveOnderdeel(e, t).then(function(e) {
                        i.bronResource.get([{
                            Rel: "self",
                            Href: e
                        }]).then(function(e) {
                            n.resolve(e)
                        })
                    }),
                    n.promise
                }
                ,
                t.prototype.deleteBijlage = function(e) {
                    return this.bronResource.delete(e.links)
                }
                ,
                t.prototype.getOnderdeelTitels = function(e) {
                    return this.bronnenResource.getSysteemMap(e, this.VERPLICHTE_ONDERDELEN_ENTRY_POINT).then(function(e) {
                        return e.items
                    })
                }
                ,
                t.prototype.getLeerlingOnderdelen = function(e) {
                    return this.bronnenResource.getSysteemMap(e, this.ONDERDELEN_ENTRY_POINT).then(function(e) {
                        return e.items
                    })
                }
                ,
                t.prototype.getOnderdeelDetails = function(e) {
                    return this.bronResource.get(e)
                }
                ,
                t.prototype.saveOrUpdateOnderdeel = function(e, t) {
                    var i = this
                      , n = this.$q.defer();
                    return (t.gewijzigdOp ? this.updateOnderdeel(t) : this.saveOnderdeel(e, t)).then(function(e) {
                        var t = [{
                            Rel: "self",
                            Href: e
                        }];
                        n.resolve(i.getOnderdeelDetails(t))
                    }, function(e) {
                        n.reject(e)
                    }),
                    n.promise
                }
                ,
                t.prototype.saveOnderdeel = function(e, t) {
                    var i = this
                      , n = this.$q.defer()
                      , o = {
                        verplichtOnderdeelId: t.verplichtOnderdeelId,
                        inhoud: t.inhoud
                    };
                    return this.getOnderdeelEntryPoint(e).then(function(e) {
                        i.bronnenResource.post([e], o, i.ONDERDELEN_ENTRY_POINT).then(function(e) {
                            n.resolve(e)
                        }, function(e) {
                            n.reject(e)
                        })
                    }),
                    n.promise
                }
                ,
                t.prototype.getOnderdeelEntryPoint = function(e) {
                    var t = this
                      , i = this.$q.defer();
                    return this.onderdeelEntryPoint ? i.resolve(this.onderdeelEntryPoint) : this.bronnenResource.getEntryPoints(e).then(function(e) {
                        var r = Object(o.k)(e.links, t.ONDERDELEN_ENTRY_POINT);
                        n.isDefined(r) && (t.onderdeelEntryPoint = {
                            Rel: t.ONDERDELEN_ENTRY_POINT,
                            Href: r
                        },
                        i.resolve(t.onderdeelEntryPoint))
                    }),
                    i.promise
                }
                ,
                t.prototype.updateOnderdeel = function(e) {
                    var t = {
                        inhoud: e.inhoud
                    };
                    return this.bronResource.put(e.links, t)
                }
                ,
                t.$inject = ["$q", "bronnenResource", "bronResource", t],
                t
            }()
        }
        ).call(this, i(3), i(1))
    },
    560: function(e, t, i) {
        "use strict";
        (function(e, n) {
            i.d(t, "a", function() {
                return d
            });
            var o = i(85)
              , r = i(7)
              , s = i(98)
              , l = i(0)
              , c = i(94)
              , d = function() {
                function t(e, t, i, n, o, r, s, l) {
                    var d = this;
                    this.$scope = e,
                    this.$q = t,
                    this.$sce = i,
                    this.currentUser = n,
                    this.applicationService = o,
                    this.portfolioProfielService = r,
                    this.panelCommunicator = s,
                    this.dialogService = l,
                    this.profielOnderdelen = [],
                    this.SubscriptionEnum = c.a,
                    this.getOnderdelen(),
                    this.panelCommunicator.subscribe(c.a.userClicked, function(e) {
                        d.onEdit(e)
                    }, this, this.$scope)
                }
                return t.prototype.getOnderdelen = function() {
                    var t = this;
                    this.portfolioProfielService.getOnderdelen(this.currentUser.person.id).then(function(i) {
                        i = e.sortBy(i, function(e) {
                            return e.volgnummer
                        }),
                        t.profielOnderdelen = i
                    })
                }
                ,
                t.prototype.onButtonClick = function(e) {
                    this.panelCommunicator.callSubscribers(e.name, e.params)
                }
                ,
                t.prototype.onEdit = function(e) {
                    var t = this
                      , c = {
                        inhoud: this.profielOnderdelen[e.index].inhoud
                    };
                    this.dialogService.showDialog({
                        title: this.profielOnderdelen[e.index].titel,
                        template: i(561),
                        buttons: [o.a.Ok, o.a.Cancel],
                        callback: function(i, s) {
                            if (i.clickedButtonType === o.a.Ok)
                                if (n.isDefined(i.data))
                                    if (i.data.inhoud.length > 1e4) {
                                        var c = "De maximale lengte van de tekst is 10.000 karakters.<br>Huidige tekst heeft: " + Object(l.h)(i.data.inhoud.length, 0, 3, ".", "") + ".";
                                        t.applicationService.showMessage(c, r.i.WARNING, r.e),
                                        s.resolve({
                                            shouldClose: !1,
                                            invalidPropertyNames: ["inhoud"]
                                        })
                                    } else {
                                        var d = t.profielOnderdelen[e.index];
                                        d.inhoud = i.data.inhoud,
                                        t.portfolioProfielService.saveOrUpdateOnderdeel(t.currentUser.person.id, d).then(function(i) {
                                            t.profielOnderdelen[e.index] = i,
                                            s.resolve({
                                                shouldClose: !0
                                            })
                                        }, function(e) {
                                            t.applicationService.showMessage(e.data.omschrijving, r.i.WARNING, r.e),
                                            s.resolve({
                                                shouldClose: !1,
                                                invalidPropertyNames: ["inhoud"]
                                            })
                                        })
                                    }
                                else
                                    s.resolve({
                                        shouldClose: !0
                                    });
                            else
                                s.resolve({
                                    shouldClose: !0
                                })
                        },
                        size: s.a.large,
                        viewModel: c,
                        frameless: !0
                    })
                }
                ,
                t.prototype.getOrCreateOnderdeel = function(e) {
                    var t = this
                      , i = this.$q.defer();
                    return this.portfolioProfielService.getOrCreateOnderdeel(this.currentUser.person.id, this.profielOnderdelen[e]).then(function(n) {
                        t.profielOnderdelen[e] = n,
                        i.resolve(n)
                    }),
                    i.promise
                }
                ,
                t.prototype.trustAsHtml = function(e) {
                    return this.$sce.trustAsHtml(e)
                }
                ,
                t.$inject = ["$scope", "$q", "$sce", "currentUser", "applicationService", "portfolioProfielService", "panelCommunicator", "dialogService", t],
                t
            }()
        }
        ).call(this, i(3), i(1))
    },
    561: function(e, t) {
        e.exports = "<div class=\"profiel-editor maxheight\">\r\n  <div class=\"wysiwyg\">\r\n    <textarea id=\"editor\"\r\n              kendo-editor=\"editor\"\r\n              ng-model=\"vm.inhoud\"\r\n              k-options=\"{encoded: false}\"\r\n              k-tools=\"['bold', 'italic', 'underline', 'justifyLeft', 'justifyCenter', 'justifyRight', 'insertUnorderedList', 'insertOrderedList','createLink','unlink']\"\r\n              k-messages=\"{bold: 'Vet', italic: 'Cursief', underline: 'Onderstrepen', justifyLeft: 'Links uitlijnen', justifyCenter: 'Centreren', justifyRight: 'Rechts uitlijnen',\r\n                         insertUnorderedList: 'Opsommingstekens', insertOrderedList: 'Nummering', createLink: 'Link toevoegen', unlink:'Verwijder link', dialogInsert: 'Toevoegen',\r\n                       dialogCancel: 'Annuleren', linkOpenInNewWindow: ' ', linkWebAddress: 'Internetadres', linkText: 'Tekst', linkToolTip: 'Scherminfo'}\"></textarea>\r\n  </div>\r\n</div>"
    },
    562: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return l
        });
        var n = i(7)
          , o = i(0)
          , r = i(94)
          , s = function() {
            function e(e, t, i, n, o) {
                this.$scope = e,
                this.applicationService = t,
                this.fileService = i,
                this.portfolioProfielService = n,
                this.panelCommunicator = o,
                this.fotoUrl = "",
                this.FOTO_UPLOAD_DOMAIN = "profiel-upload",
                this.VALID_EXTENSIONS = ["JPG", "GIF", "PNG"],
                this.initialize()
            }
            return e.prototype.initialize = function() {
                var e = this;
                this.onAddFiles = function(t) {
                    e.internalFileAdded(t)
                }
                ,
                this.onFileDrop = function() {
                    return function(t) {
                        e.internalFileAdded(t)
                    }
                }
                ,
                this.panelCommunicator.subscribe(r.a.wijzigen, function() {
                    e.wijzigen()
                }, this, this.$scope),
                this.panelCommunicator.subscribe(r.a.verwijderen, function() {
                    e.onDelete()
                }, this, this.$scope),
                this.$scope.$watch("onderdeel", function(t) {
                    Object(o.w)(t) || (e.onderdeel = t,
                    Object(o.k)(t.links, "bijlage") && t.heeftBijlage && e.getBijlage(t))
                })
            }
            ,
            e.prototype.getBijlage = function(e) {
                var t = this;
                this.portfolioProfielService.getBijlage(e.links).then(function(e) {
                    t.bijlage = e,
                    t.fotoUrl = t.getFotoUrlFromBijlage(e) + "?nocache=" + (new Date).getTime().toString()
                })
            }
            ,
            e.prototype.getFotoUrlFromBijlage = function(e) {
                var t = Object(o.k)(e.links, "download");
                return Object(o.w)(t) ? "" : t
            }
            ,
            e.prototype.internalFileAdded = function(e) {
                var t = this;
                Object(o.z)(e[0].name, this.VALID_EXTENSIONS) ? (this.$scope.$broadcast("SHOW_API_PROGRESS_INDICATOR", this.FOTO_UPLOAD_DOMAIN),
                this.fileService.uploadFile(e[0]).then(function(e) {
                    var i = {
                        uniqueId: e
                    };
                    t.$scope.getOnderdeel().then(function(e) {
                        t.portfolioProfielService.saveBijlage(i, e).then(function(e) {
                            t.bijlage = e,
                            t.fotoUrl = t.getFotoUrlFromBijlage(e) + "?nocache=" + (new Date).getTime().toString()
                        })
                    })
                }).finally(function() {
                    t.$scope.$broadcast("HIDE_API_PROGRESS_INDICATOR", t.FOTO_UPLOAD_DOMAIN)
                })) : this.applicationService.showMessage("Alleen foto's van het type JPG, GIF of PNG kunnen gebruikt worden.", n.i.WARNING, n.e)
            }
            ,
            e.prototype.onDelete = function() {
                var e = this;
                this.bijlage && this.portfolioProfielService.deleteBijlage(this.bijlage).then(function(t) {
                    e.fotoUrl = "",
                    e.bijlage = null
                })
            }
            ,
            e.$inject = ["$scope", "applicationService", "fileService", "portfolioProfielService", "panelCommunicator"],
            e
        }()
          , l = function() {
            function e() {
                var e = this;
                this.scope = {
                    onderdeel: "=",
                    getOnderdeel: "&"
                },
                this.template = i(563),
                this.replace = !1,
                this.controllerAs = "vm",
                this.restrict = "EA",
                this.controller = s,
                this.link = function(t, i, n, o) {
                    return e.linkFn(t, i, n, o)
                }
            }
            return e.prototype.linkFn = function(e, t, i, n) {
                n.wijzigen = function() {
                    t.find("#hiddenUploadButton").val(""),
                    t.find("#hiddenUploadButton").click()
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
    563: function(e, t) {
        e.exports = '<div data-sm-drag-drop="{drag: false, drop: false, fileDrop: true}"\r\n     data-file-drop="vm.onFileDrop()">\r\n    <div data-sm-loading-indicator="{domain: \'profiel-upload\', className: \'icon-paper bronnen-loading-indicator\', overlay: false}"></div>\r\n    <div class="drop-placeholder" data-ng-if="vm.fotoUrl === \'\'">\r\n        <span class="iconic icon-originalsize"></span>\r\n        <span class="label">sleep een foto<br />(optimale resolutie 320 x 240)</span>\r\n    </div>\r\n    <img mg-http-src="{{vm.fotoUrl}}" class="photo" alt="profielfoto" data-ng-if="vm.fotoUrl !== \'\'" />\r\n    <input id="hiddenUploadButton" type="file" data-ng-file-select="vm.onAddFiles($files)" data-ng-show="false" />\r\n</div>\r\n'
    },
    94: function(e, t, i) {
        "use strict";
        var n;
        i.d(t, "a", function() {
            return n
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
        }(n || (n = {}))
    }
}]);

(window.webpackJsonp = window.webpackJsonp || []).push([[14], {
    101: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var r = n(0)
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
            e.prototype.getSysteemMap = function(e, t, n) {
                var o = this
                  , i = this.$q.defer();
                return this.getEntryPoints(e).then(function(e) {
                    var a = Object(r.k)(e.links, t);
                    a ? o.$resource(o.apiHost + o.getLink(a), {}, {
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
            e.prototype.post = function(e, t, n, r) {
                void 0 === n && (n = "children");
                var o = this.$q.defer();
                return this.$resource(this.apiHost + this.getCollectionLink(e, n), {
                    sourceId: r
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
                return this.getLink(Object(r.k)(e, t))
            }
            ,
            e.prototype.getLink = function(e) {
                return Object(r.u)(e) || 0 !== e.indexOf("/") || (e = e.substring(1, e.length)),
                e
            }
            ,
            e.$inject = ["$resource", "$q", e],
            e
        }()
    },
    113: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var r = n(0)
          , o = Contracts.Bronnen.Enums.BronType
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
                    return Object(r.w)(t) ? "unknownfile" : (t.type & o.Link) === o.Link ? "webpage" : (t.type & o.Map) === o.Map ? "map" : (t.type & o.Document) === o.Document ? function(t) {
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
        (function(e, r) {
            n.d(t, "a", function() {
                return o
            });
            var o = function() {
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
                    var o = this;
                    return this.bronnenResource.getSysteemMap(t, this.ROOT_FOLDER, n).then(function(t) {
                        var n = e.map(t.items, function(e) {
                            return (r.isUndefined(e.vakOmschrijving) || null === e.vakOmschrijving || "" === e.vakOmschrijving) && (e.vakOmschrijving = "Overig"),
                            e.type = Contracts.Bronnen.Enums.BronType.Document,
                            e
                        });
                        return o.beoordeeldeProducten = n,
                        o.beoordeeldeProducten.forEach(function(e) {
                            r.isArray(e.links) || (e.links = o.bronHelper.createLinksArray(e))
                        }),
                        o.beoordeeldeProducten
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
            return r
        });
        var r = function() {
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
    537: function(e, t, n) {
        "use strict";
        n.r(t),
        function(e) {
            n.d(t, "beoordeeldeProductenAMD", function() {
                return u
            });
            var r = n(91)
              , o = n(113)
              , i = n(101)
              , a = n(114)
              , d = n(538)
              , s = n(541)
              , c = n(543)
              , l = n(545)
              , u = e.module("BeoordeeldeProductenAMD", []);
            u.service("bronnenResource", i.a.$inject).service("beoordeeldeProductenService", a.a.$inject).service("bronHelper", r.a.$inject),
            u.controller("BeoordeeldeProductenController", d.a.$inject),
            u.directive("smBeoordeeldeproductenDetailsDirective", s.a.$inject).directive("smBeoordeeldeproductenWeergaveDirective", c.a.$inject).directive("smOpenBronDirective", l.a.$inject),
            u.filter("bronIcon", o.a.prototype.bronIcon)
        }
        .call(this, n(1))
    },
    538: function(e, t, n) {
        "use strict";
        (function(e, r) {
            n.d(t, "a", function() {
                return i
            });
            var o = n(0)
              , i = function() {
                function t(e, t, r, o, i) {
                    this.$scope = e,
                    this.$window = t,
                    this.currentUser = r,
                    this.beoordeeldeProductenService = o,
                    this.tabService = i,
                    this.beoordeeldeProductenOverzichtOptions = {
                        selectable: "row",
                        dataSource: {
                            group: {
                                field: "vakOmschrijving",
                                dir: "asc"
                            }
                        },
                        rowTemplate: kendo.template(n(539)),
                        columns: [{
                            field: "opdrachtnaam",
                            title: "Opdracht"
                        }, {
                            field: "beoordeling",
                            title: "Beoordeling"
                        }, {
                            field: "ingeleverdOp",
                            title: "Ingeleverd"
                        }, {
                            field: "docentnaam",
                            title: "Docent"
                        }, {
                            field: "vakOmschrijving",
                            hidden: !0,
                            groupHeaderTemplate: kendo.template(n(540))
                        }]
                    },
                    this.ALLE_VAKKEN = "Alle",
                    this.enableToggleDetailTab = !0,
                    this.$scope.tabState = this.tabService.tabState,
                    this.tabService.subscribeTabAdded(this.tabAdded, this)
                }
                return t.prototype.tabAdded = function(e) {
                    "idDetails" === e.id && this.tabService.openTab(e)
                }
                ,
                t.prototype.onPeriodeChange = function(e) {
                    this.enableToggleDetailTab = !1,
                    this.removeVakFilter(),
                    this.loadData(e)
                }
                ,
                t.prototype.onVakChange = function(e) {
                    this.enableToggleDetailTab = !1,
                    this.addVakFilter(e)
                }
                ,
                t.prototype.loadData = function(t) {
                    var n = this;
                    this.beoordeeldeProductenService.getBeoordeeldeProducten(this.currentUser.person.id, t).then(function(t) {
                        var r = e.uniq(t, function(e) {
                            return e.opdrachtId
                        });
                        n.vakken = n.getSortedFilterVakken(),
                        n.beoordeeldeProductenOverzicht.dataSource.data(r),
                        n.beoordeeldeProductenOverzicht.refresh(),
                        n.setSelectedGridRow()
                    })
                }
                ,
                t.prototype.addVakFilter = function(e) {
                    r.isDefined(e) && (e.omschrijving === this.ALLE_VAKKEN ? this.removeVakFilter() : this.beoordeeldeProductenOverzicht.dataSource.filter({
                        field: "vakOmschrijving",
                        operator: "eq",
                        value: e.omschrijving
                    }),
                    this.setSelectedGridRow())
                }
                ,
                t.prototype.removeVakFilter = function() {
                    Object(o.w)(this.beoordeeldeProductenOverzicht) || this.beoordeeldeProductenOverzicht.dataSource.filter({})
                }
                ,
                t.prototype.onSelectedProductChange = function(t) {
                    this.$scope.selectedOpdracht = t;
                    var n = this.beoordeeldeProductenService.getByOpdrachtId(this.$scope.selectedOpdracht.opdrachtId);
                    this.$scope.selectedBeoordeeldeProducten = e.sortBy(n, function(e) {
                        return e.naam.toLowerCase()
                    }),
                    this.enableToggleDetailTab && this.tabService.openTab(this.tabService.getTab("idDetails")),
                    this.enableToggleDetailTab = !0
                }
                ,
                t.prototype.getSortedFilterVakken = function() {
                    var t = this.beoordeeldeProductenService.getVakken();
                    return t.push({
                        id: 0,
                        omschrijving: this.ALLE_VAKKEN
                    }),
                    e.sortBy(t, function(e) {
                        return e.omschrijving
                    })
                }
                ,
                t.prototype.setSelectedGridRow = function() {
                    this.beoordeeldeProductenOverzicht.select("tr:eq(2)")
                }
                ,
                t.$inject = ["$scope", "$window", "currentUser", "beoordeeldeProductenService", "tabService", t],
                t
            }()
        }
        ).call(this, n(3), n(1))
    },
    539: function(e, t) {
        e.exports = '<tr>\n    <td class="k-group-cell"></td>\n    <td><span><span ng-bind="dataItem.opdrachtnaam"></span></span></td>\n    <td><span><span ng-bind="dataItem.beoordeling"></span></span></td>\n    <td><span>#= kendo.toString(kendo.parseDate(ingeleverdOp, \'yyyy-MM-dd\'), \'dd/MM/yyyy\') #</span></td>\n    <td><span><span ng-bind="dataItem.docentnaam"></span></span></td>\n</tr>\n'
    },
    540: function(e, t) {
        e.exports = "<span class='group-header-content'><strong>#= value #</strong><span class='iconic'></span></span>"
    },
    541: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d
        });
        var r = n(90)
          , o = n(0)
          , i = n(115)
          , a = function() {
            function e(e, t, n) {
                var r = this;
                this.$scope = e,
                this.$location = t,
                this.bronHelper = n,
                this.$scope.$watch("selectedOpdracht", function() {
                    r.selectedBeoordeeldProduct = null
                })
            }
            return e.prototype.onSelectBron = function(e) {
                var t = !1;
                if (Object(o.w)(this.selectedBeoordeeldProduct) || (t = this.selectedBeoordeeldProduct.id === e.id),
                this.selectedBeoordeeldProduct = e,
                t) {
                    var n = this.transformBeoordeeldProduct(e);
                    return this.bronHelper.getLink(n)
                }
                return null
            }
            ,
            e.prototype.onOpenInPorfolioDocumenten = function() {
                Object(o.w)(this.selectedBeoordeeldProduct) || this.$location.path("elo/portfolio/documenten").search({
                    beoordeeldProductId: this.selectedBeoordeeldProduct.id
                })
            }
            ,
            e.prototype.transformBeoordeeldProduct = function(e) {
                return {
                    id: e.id,
                    parentId: -23,
                    naam: e.naam,
                    grootte: e.grootte,
                    contentType: e.contentType,
                    privilege: i.a.MapEigenaar,
                    type: null,
                    soort: e.soort.toString(),
                    url: e.url,
                    links: e.links,
                    rootMapId: -23,
                    mediaType: r.a.Anders
                }
            }
            ,
            e.$inject = ["$scope", "$location", "bronHelper"],
            e
        }()
          , d = function() {
            function e() {
                this.restrict = "E",
                this.template = n(542),
                this.replace = !0,
                this.controllerAs = "vm",
                this.controller = a
            }
            return e.$inject = [function() {
                return new e
            }
            ],
            e
        }()
    },
    542: function(e, t) {
        e.exports = '<div>\r\n    <sm-panel-widget panel-title="Opdracht">\r\n        <p class="opdracht-omschrijving" data-ng-bind="selectedOpdracht.opdrachtOmschrijving"></p>\r\n    </sm-panel-widget>\r\n    <sm-panel-widget panel-title="Beoordeelde producten">\r\n        <ul class="list sources">\r\n            <li data-ng-repeat="product in selectedBeoordeeldeProducten"\r\n                class="{{product | bronIcon}}"\r\n                data-ng-class="{\'selected\': product.id === vm.selectedBeoordeeldProduct.id}">\r\n                <a data-sm-open-linked-resource="vm.onSelectBron(product)"><span data-ng-bind="product.naam"></span></a>\r\n            </li>\r\n        </ul>\r\n        <footer class="endlink">\r\n            <a data-ng-click="vm.onOpenInPorfolioDocumenten()"\r\n               id="beoordeelde-producten-toevoegen"\r\n               data-ng-class="{\'disabled\': !vm.selectedBeoordeeldProduct}">\r\n                open in Portfoliodocumenten\r\n            </a>\r\n        </footer>\r\n    </sm-panel-widget>\r\n</div>'
    },
    543: function(e, t, n) {
        "use strict";
        (function(e, r, o, i) {
            n.d(t, "a", function() {
                return c
            });
            var a = n(88)
              , d = n(0)
              , s = function() {
                function t(e, t, n) {
                    this.$scope = e,
                    this.aanmeldingenService = t,
                    this.currentUser = n,
                    this.laadPeriodeLijst()
                }
                return t.prototype.laadPeriodeLijst = function() {
                    var e = this;
                    this.aanmeldingenService.getAanmeldingen(a.a.HuidigeEnEerdere, this.currentUser.person.id.toString()).then(function(t) {
                        var n = t.map(function(e) {
                            return {
                                id: e.Id,
                                einde: e.Einde,
                                title: e.Lesperiode + " " + e.Groep.Omschrijving + " " + (e.Profiel ? " (" + (e.Profiel2 ? e.Profiel + "/" + e.Profiel2 : e.Profiel) + ")" : ""),
                                start: e.Start
                            }
                        });
                        e.aanmeldingen = e.sortAanmeldingen(n),
                        e.aanmeldingen.splice(0, 0, {
                            id: 0,
                            title: "Alle",
                            start: e.aanmeldingen[e.aanmeldingen.length - 1].start,
                            einde: e.aanmeldingen[0].einde
                        })
                    })
                }
                ,
                t.prototype.getCurrentOrDefaultAanmelding = function(t) {
                    var n = e.filter(t, function(e) {
                        var t = r().format("YYYY-MM-DD");
                        return null != e.einde && null != e.start && (t <= e.einde.toString() && t >= e.start.toString())
                    })
                      , i = e.first(n);
                    return o.isUndefined(i) && (i = e.first(t)),
                    i
                }
                ,
                t.prototype.verwerkPeriodeSelectie = function(t) {
                    var n = e.find(this.aanmeldingen, function(e) {
                        return e.id === parseInt(t, d.b)
                    })
                      , o = {
                        begin: n.start ? r(n.start).format("YYYY-MM-DD") : void 0,
                        einde: n.einde ? r(n.einde).format("YYYY-MM-DD") : void 0
                    };
                    this.$scope.changedPeriode({
                        periode: o
                    })
                }
                ,
                t.prototype.verwerkVakkenSelectie = function(t) {
                    var n = e.find(this.$scope.vakken, function(e) {
                        return e.id === parseInt(t, d.b)
                    });
                    this.$scope.changedVak({
                        selectedVak: n
                    })
                }
                ,
                t.prototype.sortAanmeldingen = function(t) {
                    return e.sortBy(t, function(e) {
                        return e.start
                    }).reverse()
                }
                ,
                t.$inject = ["$scope", "aanmeldingenService", "currentUser"],
                t
            }()
              , c = function() {
                function e() {
                    var e = this;
                    this.scope = {
                        vakken: "=",
                        changedVak: "&",
                        changedPeriode: "&"
                    },
                    this.restrict = "E",
                    this.template = n(544),
                    this.replace = !0,
                    this.controller = s,
                    this.controllerAs = "vm",
                    this.link = function(t, n, r, o) {
                        return e.linkFn(t, n, r, o)
                    }
                }
                return e.prototype.linkFn = function(e, t, n, r) {
                    var o = this;
                    e.onDataBoundPeriode = function(t) {
                        return o.onDataBoundPeriodeInternal(r, e, t)
                    }
                    ,
                    e.onAanmeldingChange = function(e) {
                        return r.verwerkPeriodeSelectie(e.sender.value())
                    }
                    ,
                    e.onVakChange = function(e) {
                        return o.onVakChangeInternal(r, e.sender.value())
                    }
                }
                ,
                e.prototype.onDataBoundPeriodeInternal = function(e, t, n) {
                    var i = e.getCurrentOrDefaultAanmelding(e.aanmeldingen);
                    if (!o.isUndefined(i)) {
                        this.setSelectedItemPeriode(i.id, n.sender.element);
                        var a = {
                            begin: i.start ? r(i.start).format("YYYY-MM-DD") : void 0,
                            einde: i.einde ? r(i.einde).format("YYYY-MM-DD") : void 0
                        };
                        t.changedPeriode({
                            periode: a
                        })
                    }
                }
                ,
                e.prototype.setSelectedItemPeriode = function(e, t) {
                    i("#periode").data("kendoDropDownList").value(e.toString())
                }
                ,
                e.prototype.onAanmeldingChange = function(e, t) {
                    e.verwerkPeriodeSelectie(t)
                }
                ,
                e.prototype.onVakChangeInternal = function(e, t) {
                    e.verwerkVakkenSelectie(t)
                }
                ,
                e.$inject = [function() {
                    return new e
                }
                ],
                e
            }()
        }
        ).call(this, n(3), n(14), n(1), n(15))
    },
    544: function(e, t) {
        e.exports = '<div class="widget aside-wide-widget">\r\n    <sm-panel-widget panel-title="Instellingen">\r\n        <fieldset>\r\n            <label for="periode">Schooljaar</label>\r\n            <div class="fancy-select">\r\n                <select id="periode" name="periode"\r\n                        class="select"\r\n                        data-kendo-drop-down-list="periode"\r\n                        data-k-data-value-field="\'id\'"\r\n                        data-k-data-text-field="\'title\'"\r\n                        data-k-data-source="vm.aanmeldingen"\r\n                        data-k-on-change="onAanmeldingChange(kendoEvent)"\r\n                        data-k-on-data-bound="onDataBoundPeriode(kendoEvent)"></select>\r\n            </div>\r\n        </fieldset>\r\n        <fieldset>\r\n            <label for="periode">Vak</label>\r\n            <div class="fancy-select">\r\n                <select id="vak"\r\n                        class="select"\r\n                        data-kendo-drop-down-list="vak"\r\n                        data-k-data-value-field="\'id\'"\r\n                        data-k-data-text-field="\'omschrijving\'"\r\n                        data-k-data-source="vakken"\r\n                        data-k-on-change="onVakChange(kendoEvent)"></select>\r\n            </div>\r\n        </fieldset>\r\n    </sm-panel-widget>\r\n</div>'
    },
    545: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var r = n(0)
          , o = n(87)
          , i = function() {
            function e(e, t) {
                this.$scope = e,
                this.$window = t
            }
            return e.prototype.onSelectBron = function(e) {
                if (this.$scope.openSelectedBron(e))
                    switch (e.soort) {
                    case o.a.Url:
                        this.openBron(e);
                        break;
                    default:
                        this.downloadBron(e)
                    }
            }
            ,
            e.prototype.openBron = function(e) {
                var t = e.url;
                -1 === t.indexOf("http://") && (t = "http://" + t),
                this.$window.open(t, "_blank")
            }
            ,
            e.prototype.downloadBron = function(e) {
                var t = Object(r.m)(e.links, "download");
                Object(r.u)(t) || 0 !== t.indexOf("/") || (t = t.substring(1, t.length)),
                this.$window.open(globalSettings.apiHost + t, "_blank")
            }
            ,
            e.$inject = ["$scope", "$window"],
            e
        }()
          , a = function() {
            function e() {
                this.scope = {
                    openSelectedBron: "&",
                    bron: "="
                },
                this.template = '<a data-ng-click="vm.onSelectBron(bron)"><span data-ng-bind="bron.naam"></span></a> ',
                this.replace = !1,
                this.controllerAs = "vm",
                this.controller = i
            }
            return e.$inject = [function() {
                return new e
            }
            ],
            e
        }()
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
            return o
        });
        var r = n(0)
          , o = function() {
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
                return l
            });
            var o = n(90)
              , i = n(86)
              , a = n(0)
              , d = n(87)
              , s = n(89)
              , c = Contracts.Bronnen.Enums.BronType
              , l = function() {
                function t() {
                    this.videoExtensions = "mp4 avi 264 m2v vc1 yuv wmv f4v raw m2ts m3u8 ismv mov 3gpp 3gp 3g2 flv mkv m2v m1v mts ts trp mpg mpeg mp4 h264 mxf divx xvid vob asf",
                    this.audioExtensions = "aac aif aifc aiff au flac m4a mid midi mp3 mpa opus rmi snd wav",
                    this.IS_AANGEMELD_BIJ_KENNISNET_SESSIONCOOKIE_KEY = "isAangemeldBijKennisNet"
                }
                return t.prototype.getLink = function(e) {
                    switch (e.soort) {
                    case d.a.Url:
                        return e.url;
                    default:
                        return Object(a.m)(e.links, "download")
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
                    var t = c.Onbekend;
                    return e.soort === d.a.Map && (t = c.Map),
                    e.soort === d.a.Bestand && (t = c.Document),
                    e.soort === d.a.Url && (t = c.Link),
                    t
                }
                ,
                t.prototype.getMediaType = function(e, t) {
                    var n = new s.a(e,!1).extension
                      , r = o.a.Anders;
                    return Object(a.u)(n) || (-1 !== this.videoExtensions.indexOf(n) && (r = o.a.Video),
                    -1 !== this.audioExtensions.indexOf(n) && (r = o.a.Audio)),
                    Object(a.u)(t) || -1 === t.indexOf("www.youtube.com") || (r = o.a.YouTube),
                    r
                }
                ,
                t.prototype.isFolder = function(e) {
                    return e.soort === d.a.Map
                }
                ,
                t.prototype.isFile = function(e) {
                    return e.soort === d.a.Bestand
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
                    Object(a.k)(e.links, n) && t.push({
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
                    return e.rootMapId === i.a.Prullenbak
                }
                ,
                t.prototype.isMedia = function(e) {
                    return !Object(a.w)(e.mediaType) && r.contains([o.a.Audio, o.a.Video, o.a.YouTube], e.mediaType)
                }
                ,
                t.$inject = [t],
                t
            }()
        }
        ).call(this, n(1), n(3))
    }
}]);

(window.webpackJsonp = window.webpackJsonp || []).push([[19], {
    564: function(e, t, n) {
        "use strict";
        n.r(t),
        function(e) {
            n.d(t, "studiewijzerAMD", function() {
                return p
            });
            var r = n(95)
              , i = n(91)
              , o = n(565)
              , a = n(566)
              , s = n(568)
              , c = n(570)
              , l = n(572)
              , d = n(574)
              , u = n(575)
              , p = e.module("StudiewijzerAMD", []);
            p.service("oneDriveForBusinessResource", r.a.$inject).service("bronHelper", i.a.$inject),
            p.directive("studiewijzerBronnen", o.a.$inject).directive("studiewijzerMultimedia", a.a.$inject).directive("studiewijzerOnderdeelDirective", s.a.$inject).directive("studiewijzerSelectie", c.a.$inject).directive("weergaveInstellingen", l.a.$inject),
            p.controller("overzichtController", d.a.$inject).controller("studiewijzerDetailController", u.a.$inject)
        }
        .call(this, n(1))
    },
    565: function(e, t, n) {
        "use strict";
        (function(e, r) {
            n.d(t, "a", function() {
                return l
            });
            var i = n(5)
              , o = n(8)
              , a = n(0)
              , s = Contracts.Bronnen.Enums.BronType
              , c = function() {
                function t(e, t, n, r) {
                    var i = this;
                    this.$scope = e,
                    this.$cookieStore = t,
                    this.bronnenService = n,
                    this.currentUser = r,
                    this.BRON_TYPE_MAP = 255,
                    this.IS_AANGEMELD_BIJ_KENNISNET_SESSIONCOOKIE_KEY = "isAangemeldBijKennisNet",
                    e.addSelectedBron = function() {
                        i.addSelectedBron()
                    }
                    ,
                    e.createHintElement = function(e) {
                        return i.createHintElement(e)
                    }
                    ,
                    e.getBronnenUrl = function(e) {
                        i.getBronnenUrl(e)
                    }
                    ,
                    e.navigationToParent = function() {
                        return i.navigationToParent()
                    }
                    ,
                    e.selectBron = function(e) {
                        i.selectBron(e)
                    }
                    ,
                    e.selectItem = function(e) {
                        i.selectItem(e)
                    }
                    ,
                    e.selectParent = function() {
                        i.selectParent()
                    }
                    ,
                    e.getContentUri = function(e) {
                        return i.getContentUri(e)
                    }
                    ,
                    this.handleDragStart = function(e, t) {
                        return i.internalHandlehandleDragStart(e, t)
                    }
                    ,
                    this.initialize()
                }
                return t.prototype.initialize = function() {
                    this.currentUser.hasPrivilege(i.a.Bronnen, o.a.Read) && this.getBronnen(),
                    this.$scope.showAddBron = !0
                }
                ,
                t.prototype.createHintElement = function(t) {
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
                t.prototype.getBronnenUrl = function(e) {
                    var t = this
                      , n = parseInt(Object(a.g)(e, "parentId"), a.b);
                    this.$scope.$broadcast("SHOW_API_PROGRESS_INDICATOR", "bronnen"),
                    this.bronnenService.getBron(this.currentUser.person.id, n).then(function(e) {
                        t.$scope.bronnen = e,
                        t.$scope.selectedBron = e,
                        t.$scope.projectFolder = t.$scope.selectedBron,
                        t.getBronnenChildren(e)
                    })
                }
                ,
                t.prototype.getBronnen = function(e) {
                    var t = this;
                    if (this.$scope.$broadcast("SHOW_API_PROGRESS_INDICATOR", "bronnen"),
                    Object(a.w)(this.$scope.bronnen) || (this.$scope.bronnen.bestanden = null,
                    this.$scope.bronnen.mappen = null),
                    Object(a.w)(e)) {
                        var n = this.createRootBron();
                        this.$scope.bronnen = n,
                        this.$scope.selectedBron = n,
                        this.bronnenService.getRoot(this.currentUser.person.id).then(function(e) {
                            t.verwerkGetBronnen(e)
                        })
                    } else
                        this.$scope.bronnen = parent,
                        this.bronnenService.getBronByUri(e).then(function(e) {
                            t.$scope.selectedBron = e,
                            t.getBronnenChildren(e)
                        })
                }
                ,
                t.prototype.getBronnenChildren = function(e) {
                    var t = this;
                    this.bronnenService.getBronnen(e).then(function(e) {
                        t.verwerkGetBronnen(e)
                    })
                }
                ,
                t.prototype.verwerkGetBronnen = function(t) {
                    var n = this;
                    e.isDefined(t && t.Items) && null !== t && null !== t.Items && (this.bronnenService.addStateToBronnen(t, null, this.$scope),
                    Object(a.w)(this.$scope.excludedMap) || (t.Items = r.filter(t.Items, function(e) {
                        return e.Naam !== n.$scope.excludedMap
                    })),
                    this.$scope.bronnen.mappen = r.filter(t.Items, function(e) {
                        return (e.Type & s.Map) === s.Map
                    }),
                    this.$scope.bronnen.bestanden = r.filter(t.Items, function(e) {
                        return (e.Type & s.Map) !== s.Map
                    })),
                    this.$scope.$broadcast("HIDE_API_PROGRESS_INDICATOR", "bronnen")
                }
                ,
                t.prototype.selectItem = function(e) {
                    var t;
                    Object(a.w)(e) || (t = Object(a.j)(e.Links, a.a.Self)),
                    this.getBronnen(t)
                }
                ,
                t.prototype.selectBron = function(e) {
                    return this.$scope.selectedFile = e,
                    !0
                }
                ,
                t.prototype.addSelectedBron = function() {
                    this.$scope.manualAddHandler && !Object(a.w)(this.$scope.selectedFile) && this.$scope.selectedFile.Id && this.$scope.manualAddHandler(this.$scope.selectedFile)
                }
                ,
                t.prototype.getContentUri = function(e) {
                    return this.isBronSelected(e) ? this.getBronUri(e) : null
                }
                ,
                t.prototype.navigationToParent = function() {
                    return !e.isUndefined(this.$scope.selectedBron) && null !== this.$scope.selectedBron && (!(!e.isUndefined(this.$scope.projectFolder) && null !== this.$scope.projectFolder) || this.$scope.projectFolder.Id !== this.$scope.selectedBron.Id)
                }
                ,
                t.prototype.selectParent = function() {
                    var e;
                    this.navigationToParent() && (this.$scope.selectedBron && (e = Object(a.j)(this.$scope.selectedBron.Links, a.a.Parent)),
                    this.getBronnen(e))
                }
                ,
                t.prototype.internalHandlehandleDragStart = function(e, t) {
                    r.find(this.$scope.bronnen.bestanden, function(e) {
                        return t === e.Id
                    }).Type !== s.Document && (e.dataTransfer.effectAllowed = "none")
                }
                ,
                t.prototype.createRootBron = function() {
                    var e;
                    return e = this.$scope.onlyShowProjectFolders ? "Selecteer een projectfolder" : "Bibliotheken",
                    {
                        Id: null,
                        Links: [],
                        BronSoort: Contracts.Bronnen.Enums.BronSoort.Bestand,
                        Naam: e,
                        Referentie: 0,
                        Uri: "",
                        Grootte: 0,
                        Privilege: Contracts.Bronnen.Enums.BronPrivilege.Eigenaar,
                        Type: s.Onbekend,
                        ContentType: "",
                        GewijzigdOp: new Date,
                        GeplaatstDoor: "",
                        GemaaktOp: new Date,
                        FileBlobId: 0,
                        ParentId: 0,
                        parent: null,
                        UniqueId: "",
                        Volgnr: 0,
                        ModuleSoort: null
                    }
                }
                ,
                t.prototype.isBronSelected = function(e) {
                    return !!Object(a.t)(this.$scope.selectedFile) && e === this.$scope.selectedFile
                }
                ,
                t.prototype.getBronUri = function(e) {
                    return Object(a.j)(e.Links, a.a.Contents)
                }
                ,
                t.$inject = ["$scope", "$cookieStore", "bronnenService", "currentUser"],
                t
            }()
              , l = function() {
                function e() {
                    var e = this;
                    this.template = n(124),
                    this.replace = !0,
                    this.link = function(t, n, r) {
                        return e.linkFn(t, n, r)
                    }
                    ,
                    this.controller = c
                }
                return e.prototype.linkFn = function(e, t, n) {
                    e.onlyShowProjectFolders = !0,
                    e.showAddBron = !1,
                    e.$on("LOAD_PROJECT_FOLDER", function(t, n) {
                        e.getBronnenUrl(n)
                    })
                }
                ,
                e.$inject = [function() {
                    return new e
                }
                ],
                e
            }()
        }
        ).call(this, n(1), n(3))
    },
    566: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r = function() {
            function e() {
                var e = this;
                this.template = n(567),
                this.replace = !0,
                this.link = function(t, n, r) {
                    return e.linkFn(t, n, r)
                }
            }
            return e.prototype.linkFn = function(e, t, n) {}
            ,
            e.DIRECTIVE_NAME = "studiewijzerMultimedia",
            e.$inject = [function() {
                return new e
            }
            ],
            e
        }()
    },
    567: function(e, t) {
        e.exports = '<div class="widget">\r\n\t <div class="block">\r\n\t\t <h3><b>Multimedia</b></h3>\r\n\t     <div data-sm-studiewijzer-multimedia="studiewijzerMultimedia"></div>\r\n\t </div>\r\n</div>'
    },
    568: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var r = n(8)
          , i = n(5)
          , o = n(0)
          , a = n(96)
          , s = function() {
            function e(e, t, r, i, o, a) {
                var s = this;
                this.$sce = e,
                this.$rootScope = t,
                this.$window = r,
                this.$route = i,
                this.studiewijzerProjectService = o,
                this.currentUser = a,
                this.template = n(569),
                this.replace = !0,
                this.link = function(e, t, n) {
                    return s.linkFn(e, t, n)
                }
                ,
                this.scope = !0
            }
            return e.prototype.linkFn = function(e, t, n) {
                var o = this;
                e.projectFolder = null,
                this.initialize(e),
                e.$watch("folding.allFolded", function(t) {
                    t && (e.fold = !0,
                    e.folding.allUnFolded = !1)
                }),
                e.$watch("folding.allUnFolded", function(t) {
                    t && (e.fold = !1,
                    e.folding.allFolded = !1)
                }),
                e.showBronnen = function() {
                    var t = o.currentUser.hasPrivilege(i.a.Bronnen, r.a.Read);
                    return null !== e.projectFolder && -1 !== e.item.Id && t
                }
                ,
                e.blockFold = function(t) {
                    if (e.folding.allFolded = !1,
                    e.folding.allUnFolded = !1,
                    e.fold = !e.fold,
                    !e.fold && -1 !== t) {
                        o.currentUser.relatedPersons.current.id;
                        var n = o.$route.current.params.studiewijzerId
                          , r = o.$route.current.$$route.studiewijzerType;
                        o.laadOnderdeel(e, n, r, t)
                    }
                }
                ,
                e.bijlageClick = function(t) {
                    o.determineOpeningFile(e, t)
                }
                ,
                e.projectFolderClick = function(e) {
                    o.$rootScope.$broadcast("LOAD_PROJECT_FOLDER", e)
                }
                ,
                e.html = function(e) {
                    return o.$sce.trustAsHtml(e)
                }
                ,
                e.$on("LOAD_ONDERDEEL", function(t) {
                    for (var n = [], r = 1; r < arguments.length; r++)
                        n[r - 1] = arguments[r];
                    var i = n[0]
                      , a = n[1]
                      , s = n[2];
                    e.item.Id === s && o.laadOnderdeel(e, i, a, s)
                }),
                e.getContentUri = function(e) {
                    return o.getContentUri(e)
                }
                ,
                e.moduleSoortMap = Contracts.ELO.Enums.ModuleSoort.Map
            }
            ,
            e.prototype.getContentUri = function(e) {
                return e.MediaType !== a.a.Video && e.MediaType !== a.a.Audio ? e.Uri : null
            }
            ,
            e.prototype.laadOnderdeel = function(e, t, n, r) {
                var i = this
                  , a = this.currentUser.relatedPersons.current.id;
                this.studiewijzerProjectService.getOnderdeel(a, n, t, r).then(function(t) {
                    e.htmlInhoud = t.Omschrijving,
                    e.localBronnen = i.studiewijzerProjectService.getBronnen(t.Bronnen),
                    e.projectFolder = Object(o.k)(t.Links, "ProjectFolder")
                })
            }
            ,
            e.prototype.initialize = function(e) {
                var t = this;
                e.fold = !1;
                var n = this.currentUser.relatedPersons.current.id
                  , r = this.$route.current.params.studiewijzerId
                  , i = this.$route.current.$$route.studiewijzerType;
                e.$watch("item", function(a) {
                    -1 === a.Id || e.folding.allFolded || t.studiewijzerProjectService.getOnderdeel(n, i, r, a.Id).then(function(n) {
                        e.htmlInhoud = n.Omschrijving,
                        e.localBronnen = t.studiewijzerProjectService.getBronnen(n.Bronnen),
                        e.projectFolder = Object(o.k)(n.Links, "ProjectFolder")
                    })
                })
            }
            ,
            e.prototype.determineOpeningFile = function(e, t) {
                switch (t.MediaType) {
                case a.a.Video:
                    this.$rootScope.$broadcast("PLAY_VIDEO", t.Uri, t.Extension);
                    break;
                case a.a.Audio:
                    this.$rootScope.$broadcast("PLAY_AUDIO", t.Uri, t.Extension)
                }
            }
            ,
            e.$inject = ["$sce", "$rootScope", "$window", "$route", "studiewijzerProjectService", "currentUser", function(t, n, r, i, o, a) {
                return new e(t,n,r,i,o,a)
            }
            ],
            e
        }()
    },
    569: function(e, t) {
        e.exports = '<div class="block" data-ng-class="{\'fold\': fold, \'inleiding-onderdeel\':item.Titel == \'Inleiding\'}">\r\n    <h3 class="{{item.Kleur | mapColor: \'background\'}}">\r\n        <span class="color-label"></span>\r\n        <span data-ng-class="{\'icon-up-arrow\': fold != true, \'icon-down-arrow\': fold}" data-ng-click="blockFold(item.Id)"></span>\r\n        <span class="icon-map-open" data-ng-if="showBronnen()" data-ng-click="projectFolderClick(projectFolder)"></span>\r\n        <b data-ng-click="blockFold(item.Id)">{{item.Titel}}</b>\r\n        <strong data-ng-show="fold">{{item.Omschrijving | stripHtmlShowFirstLine}} &nbsp;</strong>\r\n    </h3>\r\n    <div class="content content-auto {{item.Kleur | mapColor: \'coloring\'}}">\r\n        <div class="clearfix user-content">\r\n            <strong data-ng-if="item.TotEnMet != undefined" class="onderdeel-vantot">\r\n                {{item.Van | date:\'dd MMM\'}} t/m {{item.TotEnMet | date:\'dd MMM\'}}\r\n            </strong>\r\n            <div data-ng-bind-html="html(htmlInhoud)"></div>\r\n        </div>\r\n        <ul data-ng-if="localBronnen && localBronnen.length > 0" class="sources">\r\n            <li data-ng-repeat="bijlage in localBronnen">\r\n                <div ng-if="bijlage.ModuleSoort === moduleSoortMap">\r\n\r\n                    <span class="mg-icon" ng-class="{\'icon-map-closed\': bijlage.Collapsed, \'icon-map-open\': !bijlage.Collapsed}"></span>\r\n                    <a data-ng-bind="bijlage.Naam" ng-click="bijlage.Collapsed = !bijlage.Collapsed"></a>\r\n\r\n                    <ul ng-hide="bijlage.Collapsed" ng-if="bijlage.Bijlagen && bijlage.Bijlagen.length && bijlage.Bijlagen.length > 0">\r\n                        <li ng-repeat="mapBijlage in bijlage.Bijlagen">\r\n                            <a class="right" data-ng-show="mapBijlage.UriThumbnailSmall">\r\n                                <figure>\r\n                                    <img ng-if="mapBijlage.UriThumbnailSmall !== undefined"\r\n                                         mg-http-src="{{mapBijlage.UriThumbnailSmall}}"\r\n                                         height="48"\r\n                                         alt=""\r\n                                         data-sm-preview="{{mapBijlage.Uri}}"\r\n                                         data-show-preview="mapBijlage.MediaType === 2 && mapBijlage.UriThumbnailSmall"\r\n                                         data-preview-title="{{mapBijlage.Naam}}" />\r\n\r\n                                    <img ng-if="mapBijlage.UriThumbnailSmall === undefined"\r\n                                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII="\r\n                                         height=" 48"\r\n                                         alt=""\r\n                                         data-sm-preview="{{mapBijlage.Uri}}"\r\n                                         data-show-preview="mapBijlage.MediaType === 2 && mapBijlage.UriThumbnailSmall"\r\n                                         data-preview-title="{{mapBijlage.Naam}}" />\r\n                                </figure>\r\n                            </a>\r\n\r\n                            <span class="{{mapBijlage | determineFileIcon}}"></span>\r\n\r\n                            \x3c!-- bron of scorm niet audio/video --\x3e\r\n                            <a data-sm-open-linked-resource="getContentUri(mapBijlage)"\r\n                               data-ng-if="(mapBijlage.ModuleSoort === 1 || mapBijlage.ModuleSoort === 3) && !mapBijlage.IsAudioOrVideo"\r\n                               data-ng-bind="mapBijlage.Naam"></a>\r\n\r\n                            \x3c!-- bron of scorm audio/video --\x3e\r\n                            <a data-ng-click="bijlageClick(mapBijlage)"\r\n                               data-sm-open-linked-resource="getContentUri(mapBijlage)"\r\n                               data-ng-if="(mapBijlage.ModuleSoort === 1 || mapBijlage.ModuleSoort === 3) && mapBijlage.IsAudioOrVideo"\r\n                               data-ng-bind="mapBijlage.Naam"></a>\r\n\r\n                            \x3c!-- een href naar een pagina binnen de applicatie (elo opdracht) (hoeft niet via open-linked-resource directive) --\x3e\r\n                            <a data-ng-href="#/elo/opdrachten/{{mapBijlage.Referentie}}"\r\n                               data-ng-if="mapBijlage.ModuleSoort === 2"\r\n                               data-ng-bind="mapBijlage.Naam"></a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div ng-if="bijlage.ModuleSoort !== moduleSoortMap">\r\n                    <a class="right" data-ng-show="bijlage.UriThumbnailSmall">\r\n                        <figure>\r\n                            <img ng-if="bijlage.UriThumbnailSmall !== undefined"\r\n                                 mg-http-src="{{bijlage.UriThumbnailSmall}}"\r\n                                 height="48"\r\n                                 alt=""\r\n                                 data-sm-preview="{{bijlage.Uri}}"\r\n                                 data-show-preview="bijlage.MediaType === 2 && bijlage.UriThumbnailSmall"\r\n                                 data-preview-title="{{bijlage.Naam}}" />\r\n\r\n                            <img ng-if="bijlage.UriThumbnailSmall === undefined"\r\n                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII="\r\n                                 height="48"\r\n                                 alt=""\r\n                                 data-sm-preview="{{bijlage.Uri}}"\r\n                                 data-show-preview="bijlage.MediaType === 2 && bijlage.UriThumbnailSmall"\r\n                                 data-preview-title="{{bijlage.Naam}}" />\r\n                        </figure>\r\n                    </a>\r\n\r\n                    <span class="{{bijlage | determineFileIcon}}"></span>\r\n\r\n                    \x3c!-- bron of scorm niet audio/video --\x3e\r\n                    <a data-sm-open-linked-resource="getContentUri(bijlage)"\r\n                       data-ng-if="(bijlage.ModuleSoort === 1 || bijlage.ModuleSoort === 3) && !bijlage.IsAudioOrVideo"\r\n                       data-ng-bind="bijlage.Naam"></a>\r\n\r\n                    \x3c!-- bron of scorm audio/video --\x3e\r\n                    <a data-ng-click="bijlageClick(bijlage)"\r\n                       data-sm-open-linked-resource="getContentUri(bijlage)"\r\n                       data-ng-if="(bijlage.ModuleSoort === 1 || bijlage.ModuleSoort === 3) && bijlage.IsAudioOrVideo"\r\n                       data-ng-bind="bijlage.Naam"></a>\r\n\r\n                    \x3c!-- een href naar een pagina binnen de applicatie (elo opdracht) (hoeft niet via open-linked-resource directive) --\x3e\r\n                    <a data-ng-href="#/elo/opdrachten/{{bijlage.Referentie}}"\r\n                       data-ng-if="bijlage.ModuleSoort === 2"\r\n                       data-ng-bind="bijlage.Naam"></a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <footer class="endlink"></footer>\r\n    </div>\r\n</div>'
    },
    570: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r = function() {
            function e(e, t, r, i, o) {
                var a = this;
                this.studiewijzerProjectService = e,
                this.$rootScope = t,
                this.$routeParams = r,
                this.$location = i,
                this.magisterLocale = o,
                this.template = n(571),
                this.replace = !0,
                this.link = function(e, t, n) {
                    return a.linkFn(e, t, n)
                }
            }
            return e.prototype.linkFn = function(e, t, n) {
                var r = this;
                this.studiewijzerProjectService.getAll().then(function(t) {
                    e.selectStudiewijzer = function(e) {
                        return r.selectItemByClickEvent(e)
                    }
                    ,
                    r.$routeParams.overzichtType && r.$routeParams.geselecteerdVak && (e.selectedId = +r.$routeParams.selectedId,
                    r.actueel = +r.$routeParams.overzichtType,
                    r.vak = r.$routeParams.geselecteerdVak,
                    e.items = r.studiewijzerProjectService.filter(r.actueel, r.vak)),
                    e.actueelString = 0 === r.actueel ? r.magisterLocale.StudiewijzerStrings.WIDGET_STUDIEWIJZERS_ACTUEEL : r.magisterLocale.StudiewijzerStrings.WIDGET_STUDIEWIJZERS_ARCHIEF
                })
            }
            ,
            e.prototype.selectItemByClickEvent = function(e) {
                this.redirect(e)
            }
            ,
            e.prototype.redirect = function(e) {
                switch (e.Type) {
                case 0:
                    this.$location.path("/elo/studiewijzer/" + e.Id).search("overzichtType", this.actueel.toString()).search("geselecteerdVak", this.vak).search("selectedId", e.Id);
                    break;
                case 1:
                    this.$location.path("/elo/studiewijzer/project/" + e.Id).search("overzichtType", this.actueel.toString()).search("geselecteerdVak", this.vak).search("selectedId", e.Id)
                }
            }
            ,
            e.$inject = ["studiewijzerProjectService", "$rootScope", "$routeParams", "$location", "magisterLocale", function(t, n, r, i, o) {
                return new e(t,n,r,i,o)
            }
            ],
            e
        }()
    },
    571: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block">\r\n        <h3><b>{{actueelString}}</b></h3>\r\n        <div class="content projects">\r\n            <ul>\r\n                <li data-ng-repeat="studiewijzer in items | orderBy: \'Titel\'" data-ng-class="{\'selected\': selectedId === studiewijzer.Id }">\r\n                    <a data-ng-click="selectStudiewijzer(studiewijzer)">\r\n                        <span>{{studiewijzer.Titel}}</span>\r\n                        <span>{{studiewijzer.VakCodes.join()}}</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>'
    },
    572: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return o
            });
            var r = n(7)
              , i = n(0)
              , o = function() {
                function t(e, t, r, i, o, a) {
                    var s = this;
                    this.$timeout = e,
                    this.$routeParams = t,
                    this.currentUser = r,
                    this.instellingService = i,
                    this.applicationService = o,
                    this.magisterLocale = a,
                    this.ALLE_VAKKEN = "Alle vakken",
                    this.STUDIEWIJZER_SETTINGS_KEY = "studiewijzer_overzicht_instellingen",
                    this.template = n(573),
                    this.replace = !0,
                    this.link = function(e, t, n) {
                        return s.linkFn(e, t, n)
                    }
                }
                return t.prototype.linkFn = function(e, t, n) {
                    var r = this;
                    this.initialize(e),
                    e.filterVakken = function(t) {
                        return r.filter(e, t.sender.value())
                    }
                    ,
                    e.filterActueel = function() {
                        return r.filter(e, e.selectedVak)
                    }
                    ,
                    e.blockFold = function() {
                        e.fold = !e.fold
                    }
                    ,
                    e.setCollapsed = function(t) {
                        return r.setCollapsed(t, e)
                    }
                    ,
                    e.blockFold = function() {
                        e.fold = !e.fold
                    }
                }
                ,
                t.prototype.initialize = function(e) {
                    e.fold = !1,
                    e.studiewijzerOverzichtScope = e.$parent.$parent,
                    e.filter = 0,
                    e.selectedVak = this.ALLE_VAKKEN,
                    this.$routeParams.overzichtType && this.$routeParams.geselecteerdVak && (e.filter = parseInt(this.$routeParams.overzichtType, i.b),
                    e.selectedVak = this.$routeParams.geselecteerdVak),
                    e.studiewijzerOverzichtScope.$watch("vakken", function(t, n) {
                        null != t && (e.vakken = t,
                        e.selectedVak = t[0])
                    }),
                    this.filter(e, e.selectedVak),
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
                    e.collapsed = 0,
                    this.persoonId = this.currentUser.person.id;
                    var t = {
                        size: e.size,
                        collapsed: e.collapsed
                    };
                    this.getUserSettings(e, t)
                }
                ,
                t.prototype.filter = function(e, t) {
                    var n = parseInt(e.filter, i.b);
                    e.studiewijzerOverzichtScope.filterItems(n, t)
                }
                ,
                t.prototype.getUserSettings = function(t, n) {
                    var r = this
                      , i = {
                        size: {
                            name: "Normaal",
                            value: 1
                        },
                        collapsed: 0
                    };
                    this.instellingService.get(this.currentUser.person.id, this.STUDIEWIJZER_SETTINGS_KEY, i).then(function(n) {
                        e.isDefined(n) && null !== n && (t.size = t.sizes[1],
                        t.collapsed = n.collapsed,
                        r.$timeout(function() {
                            t.studiewijzerOverzichtScope.rijHoogte = n.size.name.toLowerCase()
                        }, 0))
                    })
                }
                ,
                t.prototype.setCollapsed = function(e, t) {
                    var n = {
                        size: t.size,
                        collapsed: e
                    };
                    this.saveSettings(n)
                }
                ,
                t.prototype.saveSettings = function(e) {
                    var t = this;
                    this.instellingService.set(this.currentUser.person.id, this.STUDIEWIJZER_SETTINGS_KEY, e).then(function(e) {}, function(e) {
                        t.applicationService.showMessage(t.magisterLocale.NotificationStrings.DESCRIPTION_FAILED_SAVE_CONFIGURATION, r.i.ERROR, 2e3, t.magisterLocale.NotificationStrings.TITLE_SAVE_FAILED)
                    })
                }
                ,
                t.DIRECTIVE_NAME = "weergaveInstellingen",
                t.$inject = ["$timeout", "$routeParams", "currentUser", "instellingService", "applicationService", "magisterLocale", function(e, n, r, i, o, a) {
                    return new t(e,n,r,i,o,a)
                }
                ],
                t
            }()
        }
        ).call(this, n(1))
    },
    573: function(e, t) {
        e.exports = '<div class="widget">\r\n    <div class="block" data-ng-class="{\'fold\': fold}">\r\n        <h3 data-ng-click="blockFold()"><span data-ng-class="{\'icon-up-arrow\': !fold, \'icon-down-arrow\': fold}"></span><b>Instellingen</b></h3>\r\n        <div class="content">\r\n            <form>\r\n                <div>\r\n                    <label>Overzicht</label>\r\n                    <span class="radio-buttons">\r\n                        <span class="radio">\r\n                            <input type="radio" data-ng-model="filter" name="weergave" value="0" id="filter1" data-ng-change="filterActueel()"><label for="filter1">actueel</label>\r\n                        </span>\r\n                        <span class="radio">\r\n                            <input type="radio" data-ng-model="filter" name="weergave" value="1" id="filter2" data-ng-change="filterActueel()"><label for="filter2">archief</label>\r\n                        </span>\r\n                    </span>\r\n                </div>\r\n                <div>\r\n                    <label>Vakken</label>\r\n                    <div class="fancy-select">\r\n                        <select class="select"\r\n                                data-kendo-drop-down-list="vakken"\r\n                                data-k-data-source="vakken"\r\n                                data-k-on-change="filterVakken(kendoEvent)"\r\n                                data-k-value-primitive="true"\r\n                                data-k-ng-model="selectedVak">\r\n                        </select>\r\n                        \x3c!--<a href="" data-ng-bind="selectedVak"></a>\r\n                        <select class="select" data-ng-model="selectedVak" data-ng-options="v for v in vakken" name="child" data-ng-change="filterVakken()"></select>--\x3e\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>'
    },
    574: function(e, t, n) {
        "use strict";
        (function(e, r) {
            n.d(t, "a", function() {
                return o
            });
            var i = n(96)
              , o = function() {
                function t(e, t, n, r, i, o, a) {
                    var s = this;
                    this.$scope = e,
                    this.$filter = t,
                    this.$timeout = n,
                    this.$location = r,
                    this.currentUser = i,
                    this.studiewijzerProjectService = o,
                    this.tabService = a,
                    this.TYPE_OVERZICHT_ACTUEEL = 0,
                    this.ALLE_VAKKEN = "Alle vakken",
                    this.ORDERBY_FILTER = this.$filter("orderBy"),
                    this.ORDERBY_PROPERTY = "Titel",
                    this.initialize(),
                    this.$scope.filterItems = function(e, t) {
                        var n = s.studiewijzerProjectService.filter(e, t);
                        s.actueel = e,
                        s.vak = t,
                        s.$scope.items = s.ORDERBY_FILTER(n, s.ORDERBY_PROPERTY)
                    }
                    ,
                    this.$scope.selectStudiewijzer = function(e) {
                        return s.selectItemByClickEvent(e)
                    }
                    ,
                    this.$scope.keyup = function(e) {
                        return s.handleKeyboardEvent(e)
                    }
                }
                return t.prototype.initialize = function() {
                    var t = this;
                    this.$scope.tabState = this.tabService.tabState,
                    this.tabService.subscribeTabAdded(this.tabAdded, this),
                    this.$scope.items = null,
                    this.$scope.vakken = [],
                    this.$scope.rijHoogte = "normaal",
                    this.$scope.selectedItem = null,
                    this.studiewijzerprojecten = [],
                    this.persoonId = this.currentUser.relatedPersons.current.id,
                    this.actueel = this.TYPE_OVERZICHT_ACTUEEL,
                    this.vak = this.ALLE_VAKKEN,
                    this.studiewijzerProjectService.getAll().then(function(n) {
                        t.$scope.items = t.studiewijzerProjectService.filter(t.actueel, t.vak),
                        t.$scope.items = e.sortBy(t.$scope.items, "Titel"),
                        t.$scope.vakken = t.studiewijzerProjectService.getVakCodes(),
                        r.isUndefined(t.$scope.selectedItem) && (t.$scope.selectedItem = t.selectFirstItem(t.$scope.items))
                    })
                }
                ,
                t.prototype.tabAdded = function(e) {
                    "idWeergave" === e.id && this.tabService.openTab(e)
                }
                ,
                t.prototype.selectFirstItem = function(t) {
                    return e.first(t)
                }
                ,
                t.prototype.selectItemByClickEvent = function(e) {
                    this.$scope.selectedItem = e,
                    this.redirect(e)
                }
                ,
                t.prototype.handleKeyboardEvent = function(e) {
                    var t = this;
                    this.$timeout(function() {
                        var n = t.$scope.items.indexOf(t.$scope.selectedItem);
                        switch (e.keyCode) {
                        case 38:
                            t.$scope.selectedItem = t.studiewijzerProjectService.selectItem(t.$scope.items, n, "-", 0) || t.$scope.selectedItem;
                            break;
                        case 40:
                            t.$scope.selectedItem = t.studiewijzerProjectService.selectItem(t.$scope.items, n, "+", t.$scope.items.length - 1) || t.$scope.selectedItem;
                            break;
                        case 13:
                            t.redirect(t.$scope.selectedItem)
                        }
                    }, 0)
                }
                ,
                t.prototype.redirect = function(e) {
                    switch (e.Type) {
                    case i.d.studiewijzer:
                        this.$location.path("/elo/studiewijzer/" + e.Id).search("overzichtType", this.actueel.toString()).search("geselecteerdVak", this.vak).search("selectedId", e.Id.toString());
                        break;
                    case i.d.project:
                        this.$location.path("/elo/studiewijzer/project/" + e.Id).search("overzichtType", this.actueel.toString()).search("geselecteerdVak", this.vak).search("selectedId", e.Id.toString())
                    }
                }
                ,
                t.$inject = ["$scope", "$filter", "$timeout", "$location", "currentUser", "studiewijzerProjectService", "tabService", t],
                t
            }()
        }
        ).call(this, n(3), n(1))
    },
    575: function(e, t, n) {
        "use strict";
        (function(e, r) {
            n.d(t, "a", function() {
                return c
            });
            var i = n(8)
              , o = n(5)
              , a = n(0)
              , s = n(96)
              , c = function() {
                function t(t, n, r, i, o, s, c, l, d, u) {
                    var p = this;
                    this.$route = t,
                    this.$routeParams = n,
                    this.$scope = r,
                    this.$location = i,
                    this.$timeout = o,
                    this.currentUser = s,
                    this.settingsService = c,
                    this.instellingService = l,
                    this.studiewijzerProjectService = d,
                    this.tabService = u,
                    this.STUDIEWIJZER_SETTINGS_KEY = "studiewijzer_overzicht_instellingen",
                    this.anonymousRouteParams = this.$routeParams,
                    this.$scope.tabState = this.tabService.tabState,
                    this.tabService.subscribeTabAdded(this.tabAdded, this),
                    this.$scope.returnUrl = e.isDefined(this.anonymousRouteParams.returnUrl) ? decodeURIComponent(this.anonymousRouteParams.returnUrl) : null;
                    var h = this.$route.current.params.studiewijzerId
                      , m = this.$route.current.$$route.studiewijzerType;
                    this.studiewijzerProjectService.getDetail(s.relatedPersons.current.id, m, +h).then(function(e) {
                        r.studiewijzer = e,
                        r.studiewijzer.Type = m,
                        r.projectFolder = Object(a.k)(e.Links, "ProjectFolder")
                    }),
                    r.terug = function() {
                        return p.terug()
                    }
                    ,
                    r.showBronnen = function() {
                        return p.showBronnen(p.$route.current.$$route.studiewijzerType)
                    }
                    ,
                    this.$scope.projectFolderClick = function(e) {
                        p.tabService.openTab(p.tabService.getTab("idBronnen")),
                        p.$scope.$broadcast("LOAD_PROJECT_FOLDER", e)
                    }
                    ,
                    this.initializeFolding(r)
                }
                return t.prototype.tabAdded = function(e) {
                    "idStudiewijzers" === e.id && this.tabService.openTab(e),
                    "idBronnen" === e.id && this.tabService.setEnableTab(e, this.showBronnen(this.$route.current.$$route.studiewijzerType))
                }
                ,
                t.prototype.showBronnen = function(e) {
                    var t = this.currentUser.hasPrivilege(o.a.Bronnen, i.a.Read);
                    return e === s.d.project && t
                }
                ,
                t.prototype.initializeFolding = function(e) {
                    var t = this;
                    this.currentUser.relatedPersons.current.id;
                    e.folding = {
                        allFolded: !0,
                        allUnFolded: !1
                    },
                    e.foldAll = function() {
                        e.folding.allFolded = !0
                    }
                    ,
                    e.unFoldAll = function() {
                        e.folding.allUnFolded = !0;
                        var n = t.$route.current.params.studiewijzerId
                          , i = t.$route.current.$$route.studiewijzerType;
                        t.studiewijzerProjectService.getDetail(t.currentUser.relatedPersons.current.id, i, +n).then(function(e) {
                            r.each(e.Onderdelen.Items, function(n) {
                                if (-1 !== n.Id) {
                                    var r = t.$route.current.$$route.studiewijzerType;
                                    t.$scope.$broadcast("LOAD_ONDERDEEL", e.Id, r, n.Id)
                                }
                            })
                        })
                    }
                    ,
                    e.terugNaarOverzicht = function() {
                        t.$location.path("/elo/studiewijzer")
                    }
                }
                ,
                t.prototype.terug = function() {
                    e.isDefined(this.$scope.returnUrl) && null != this.$scope.returnUrl ? this.$location.path(this.$scope.returnUrl) : this.$timeout(function() {
                        window.history.back()
                    }, 0)
                }
                ,
                t.$inject = ["$route", "$routeParams", "$scope", "$location", "$timeout", "currentUser", "settingsService", "instellingService", "studiewijzerProjectService", "tabService", t],
                t
            }()
        }
        ).call(this, n(1), n(3))
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
                return d
            });
            var i = n(90)
              , o = n(86)
              , a = n(0)
              , s = n(87)
              , c = n(89)
              , l = Contracts.Bronnen.Enums.BronType
              , d = function() {
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
                    var t = l.Onbekend;
                    return e.soort === s.a.Map && (t = l.Map),
                    e.soort === s.a.Bestand && (t = l.Document),
                    e.soort === s.a.Url && (t = l.Link),
                    t
                }
                ,
                t.prototype.getMediaType = function(e, t) {
                    var n = new c.a(e,!1).extension
                      , r = i.a.Anders;
                    return Object(a.u)(n) || (-1 !== this.videoExtensions.indexOf(n) && (r = i.a.Video),
                    -1 !== this.audioExtensions.indexOf(n) && (r = i.a.Audio)),
                    Object(a.u)(t) || -1 === t.indexOf("www.youtube.com") || (r = i.a.YouTube),
                    r
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
                    return e.rootMapId === o.a.Prullenbak
                }
                ,
                t.prototype.isMedia = function(e) {
                    return !Object(a.w)(e.mediaType) && r.contains([i.a.Audio, i.a.Video, i.a.YouTube], e.mediaType)
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
            return a
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
            return o(t, e),
            t.$inject = ["$resource", t],
            t
        }(r)
    }
}]);

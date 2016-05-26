/**
 * Created by piec on 13.03.16.
 */

/**
 * @description Konfiguracja routera dla korzenia routera.
 * @param {type} $stateProvider
 * @param {type} $urlRouterProvider
 * @returns {undefined}
 */
function routing($stateProvider, $urlRouterProvider) {
    //******************** Defaultowy stan aplikacji ***************************\\
    $urlRouterProvider.otherwise("/application");
    //**************************************************************************\\

    $stateProvider
        .state('application', {
            url: "/application",
            templateUrl: "modules/mainApp/application/application.html",
            controller: "ApplicationController",
            controllerAs: "appCtrl"
        })
        .state('application.exploreData', {
            url: "/exploreData",
            templateUrl: "modules/mainApp/exploreData/exploreData.html",
            controller: "ExploreDataController",
            controllerAs: "exploreCtrl"
        })
        .state('application.przedzialyKlasowe', {
            url: "/przedzialyKlasowe",
            templateUrl: "modules/mainApp/przedzialyKlasowe/przedzialyKlasowe.html",
            controller: "PrzedzialyKlasoweController",
            controllerAs: "przedzialyCtrl"
        })
        .state('application.liczebnoscWzgledna', {
            url: "/liczebnoscWzgledna",
            controller: "LiczebnoscWzglednaController",
            controllerAs: "liczWzglCtrl",
            templateUrl: "modules/mainApp/liczebnoscWzgledna/liczebnoscWzgledna.html"
        })
        .state('application.natezenieIP', {
            url: "/natezenieIP",
            controller: "NatezenieIPController",
            controllerAs: "natezenieCtrl",
            templateUrl: "modules/mainApp/natezenieIP/natezenieIP.html"
        })
        .state('application.zmianaLogowan', {
            url: "/zmianaLogowan",
            controller: "ZmianaLogowanController",
            controllerAs: "logowaniaCtrl",
            templateUrl: "modules/mainApp/zmianaLogowan/zmianaLogowan.html"
        })
        .state('application.wykresy', {
            url: "/wykresy",
            template: "<h1>wykresy</h1>"
        })
        .state('application.iloscLogowan', {
            url: "/iloscLogowan",
            templateUrl: "modules/mainApp/iloscLogowan/iloscLogowan.html"
        })
        .state('application.obciazenie', {
            url: "/obciazenie",
            controller: "ObciazenieController",
            controllerAs: "obciazenieCtrl",
            templateUrl: "modules/mainApp/obciazenie/obciazenie.html"
        })
        .state('application.maintaining', {
            url: "/maintaining",
            controller: "MaintainController",
            controllerAs: "maintainCtrl",
            templateUrl: "modules/mainApp/maintaining/maintaining.html"
        })

}

export default routing;
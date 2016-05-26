/**
 * Created by danielslaby on 01/05/16.
 */
function TEST() {
    return {
        restrict: 'E',
        templateUrl: 'modules/directives/dataExploration/dataExploration.html',
        controller: DataExplorationController,
        controllerAs: "exploreCtrl"
    };
}

class DataExplorationController {
    constructor($log, $timeout, $mdSidenav) {
        let self = this;
        self.$l = $log;
        self.$timeout = $timeout;
        self.$mdSidenav = $mdSidenav;
        self.defaultValues();
    }

    defaultValues() {
        let self = this;
        self.members = [
            {
                name: "Anna Gese",
                pic: "anna_gese.jpg"
            },
            {
                name: "Michal Szewczyk",
                pic: "michal_szewczyk.jpg"
            },
            {
                name: "Daniel Slaby",
                pic: "daniel_slaby.jpg"
            }
        ];
        self.options = [
            {
                name: "Przedzialy klasowe"
            }
            , {name: "Liczebnosc wzgledna jednostek statystycznych z niekompletnymi danymi"}
            , {name: "Wskaznik natezenia zmian IP dla kazdego uzytkownika"}
            , {name: "Wspolczynnik korelacji pomiedzy Iloscia zabezpieczen a czasem"}
            , {name: "Wykres zmiany ilosci logowan na dzien w czasie"}
            , {name: "Wykres z naniesionymi 3 wykresami: zmiany ilosci kont danej klasy w czasie"}
            , {
                name: `Wartosc minimalna funkcji prawdopodobienstwa zmiennej losowej przedstawiajacej
                        ilosc logowan w danym dniu`
            },
            {name: "Prognoza obciazenia systemu dla danego dnia"},
            {name: "Godzina i dzien tygodnia najbardziej dogodne do przeprowadzenia prac"}

        ];
    }

}

export default TEST;
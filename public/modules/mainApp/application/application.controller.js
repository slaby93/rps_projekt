/**
 * Created by piec on 5/1/2016.
 */

class ApplicationController {
    constructor($log, $http, $timeout, $mdSidenav, $state) {
        let self = this;
        self.$l = $log;
        self.$state = $state;
        self.$timeout = $timeout;
        self.$mdSidenav = $mdSidenav;
        self.defaultValues();
        self.startFullPage();
        // $http.get('/data', (err,data)=> {
        //     self.$l.log("ERR",err);
        //     self.$l.log("DATa",data);
        // });


        // $http({
        //     method: 'GET',
        //     url: '/data'
        // }).then(function successCallback(response) {
        //     // this callback will be called asynchronously
        //     // when the response is available
        //     self.$l.log("RESP", response);
        // }, function errorCallback(response) {
        //     // called asynchronously if an error occurs
        //     // or server returns response with an error status.
        //     self.$l.log("ERR", response);
        // });
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
        self.autoScrolling = true;
        self.blockEval = false;

        self.options = [
            {
                name: "Przedzialy klasowe",
                state: "application.przedzialyKlasowe"
            }
            , {
                name: "Liczebnosc wzgledna jednostek statystycznych z niekompletnymi danymi",
                state: "application.liczebnoscWzgledna"
            }
            , {
                name: "Wskaznik natezenia zmian IP dla kazdego uzytkownika",
                state: "application.natezenieIP"
            }
            , {
                name: "Wspolczynnik korelacji pomiedzy Iloscia zabezpieczen a czasem",
                state: "application.korelacje"
            }
            , {
                name: "Wykres zmiany ilosci logowan na dzien w czasie",
                state: "application.zmianaLogowan"
            }
            , {
                name: "Wykres z naniesionymi 3 wykresami: zmiany ilosci kont danej klasy w czasie",
                state: "application.wykresy"
            }
            , {
                name: `Wartosc minimalna funkcji prawdopodobienstwa zmiennej losowej przedstawiajacej
                        ilosc logowan w danym dniu`,
                state: "application.iloscLogowan"
            },
            {
                name: "Prognoza obciazenia systemu dla danego dnia",
                state: "application.obciazenie"
            },
            {
                name: "Godzina i dzien tygodnia najbardziej dogodne do przeprowadzenia prac",
                state: "application.maintaining"
            }

        ];
    }

    startFullPage() {
        let self = this;
        self.$timeout(()=> {
            $(document).ready(function () {
                $('#fullpage').fullpage({
                    resize: true,
                    // autoScrolling: false
                });
            });
        });
    }

    toggleRight() {
        let self = this;
        self.$mdSidenav('right').toggle();

    }

    handleClick(option) {
        let self = this;
        self.$state.go(option.state);
    }

    scrollDown() {
        let self = this;
        let val = $('#equationsNav md-list').scrollTop() + 200;
        $('#equationsNav md-list').scrollTop(val);
    }


    scrollUp() {
        let self = this;
        let val = $('#equationsNav md-list').scrollTop() - 200;
        $('#equationsNav md-list').scrollTop(val);
    }


}

export default ApplicationController;
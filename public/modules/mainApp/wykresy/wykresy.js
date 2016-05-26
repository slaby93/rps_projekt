/**
 * Created by piec on 5/1/2016.
 */

class ApplicationController {
    constructor($log, $http, $timeout, $mdSidenav) {
        let self = this;
        self.$l = $log;
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
    }

    startFullPage() {
        let self = this;
        self.$timeout(()=> {
            $(document).ready(function () {
                $('#fullpage').fullpage({
                    resize: true,
                    controlArrows: true,
                    navigation: true
                });
            });
        });
    }

    toggleRight() {
        let self = this;
        self.$mdSidenav('right').toggle();

    }


}

export default ApplicationController;
/**
 * Created by danielslaby on 23/04/16.
 */

class CalculatedDataService {
    constructor($log, $q, $window, $rootScope, $http) {
        let self = this;
        self.$l = $log;
        self.$q = $q;
        self.$http = $http;
        self.$rootScope = $rootScope;
        self.$window = $window;
    }

    defaultValues() {
        let self = this;

    };

    get przedzialyKlasowe() {
        let self = this;
        return new Promise((resolve, reject)=> {
            self.$http({
                method: 'GET',
                url: `/getUserClasses`
            }).then((data)=> {
                resolve(data);
            }, (err)=> {
                reject(err)
            });
        });
    }

    get natezenieZmianIp() {
        let self = this;
        return new Promise((resolve, reject)=> {
            self.$http({
                method: 'GET',
                url: `/getRatioOfIpChanges`
            }).then((data)=> {
                resolve(data);
            }, (err)=> {
                reject(err)
            });
        });
    }

    get getAktywnoscUserowNaKwartal() {
        let self = this;
        return new Promise((resolve, reject)=> {
            self.$http({
                method: 'GET',
                url: `/getClassUserChanges`
            }).then((data)=> {
                resolve(data);
            }, (err)=> {
                reject(err)
            });
        });
    }

    get obciazenie() {
        let self = this;
        return new Promise((resolve, reject)=> {
            self.$http({
                method: 'GET',
                url: `/getSuitableDates`
            }).then((data)=> {
                resolve(data);
            }, (err)=> {
                reject(err)
            });
        });
    }

    get dogodneDni() {
        let self = this;
        return new Promise((resolve, reject)=> {
            self.$http({
                method: 'GET',
                url: `/getMaintaining`
            }).then((data)=> {
                resolve(data);
            }, (err)=> {
                reject(err)
            });
        });
    }

}
export default CalculatedDataService;
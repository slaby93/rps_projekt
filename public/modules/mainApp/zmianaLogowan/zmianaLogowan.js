/**
 * Created by piec on 5/1/2016.
 */

import moment from 'moment';

class ZmianaLogowanController {
    constructor($log, $timeout, CalculatedDataService, $scope) {
        let self = this;
        self.$l = $log;
        self.$timeout = $timeout;
        self.$scope = $scope;
        self.CalculatedDataService = CalculatedDataService;
        self.defaultValues();
        console.log("ZmianaLogowanController");
        let omitFirst = true;
        self.$scope.$watch(()=> {
            return self.chosen;
        }, ()=> {
            if (omitFirst) {
                omitFirst = false;
                return;
            }
            self.startAmCharts();
        });
    }

    defaultValues() {
        let self = this;
        self.chosen = 'Klasa 1';
        MathJax.Hub.Config({
            skipStartupTypeset: true,
            messageStyle: "none",
            "HTML-CSS": {
                showMathMenu: false
            }
        });
        MathJax.Hub.Configured();

        self.latex = {
            test: ` P( X \\ge 25,66 ) = 1 - P( X < 25,66 ) = 1 - P(z < 2,83) = 1 - \\Phi(2,83) = 1 -  0,99767 = 0.00233 \\`
        };


        self.CalculatedDataService.getAktywnoscUserowNaKwartal.then((response)=> {
            self.chartData = response.data;
            self.startAmCharts();
        })
    }

    startAmCharts() {
        let self = this;
        let configs = [];
        _.forEach(self.chartData, (data)=> {
            configs.push({
                "type": "serial",
                "categoryField": "date",
                "startDuration": 1,
                "categoryAxis": {
                    "gridPosition": "start"
                },
                "chartScrollbar": {
                    "enabled": true
                },
                "trendLines": [],
                "graphs": [
                    {
                        "fillAlphas": 1,
                        "id": "AmGraph-1",
                        "title": "graph 1",
                        "type": "column",
                        "valueField": "value"
                    }
                ],
                "guides": [],
                "valueAxes": [
                    {
                        "id": "ValueAxis-1",
                        "logarithmic": true,
                        "title": "Axis title"
                    }
                ],
                "allLabels": [],
                "balloon": {},
                "titles": [
                    {
                        "id": "Title-1",
                        "size": 15,
                        "text": data.class
                    }
                ],
                "dataProvider": data.data
            });
        });

        switch (self.chosen) {
            case 'Klasa 1':
                self.$l.debug("Klasa 1");
                AmCharts.makeChart($('.chartdiv')[0], configs[0]);
                break;
            case 'Klasa 2':
                self.$l.debug("Klasa 2");
                AmCharts.makeChart($('.chartdiv')[0], configs[1]);
                break;
            case 'Klasa 3':
                self.$l.debug("Klasa 3");
                AmCharts.makeChart($('.chartdiv')[0], configs[2]);
                break;
            default:
                AmCharts.makeChart($('.chartdiv')[0], configs[0]);
        }
        ;
        // AmCharts.makeChart($('.chartdiv')[1], configs[1]);
        // AmCharts.makeChart($('.chartdiv')[2], configs[2]);

    }


}

export default ZmianaLogowanController;
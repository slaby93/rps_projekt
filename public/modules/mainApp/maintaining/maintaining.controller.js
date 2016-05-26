/**
 * Created by piec on 5/1/2016.
 */

class MaintainController {
    constructor($log, $timeout, CalculatedDataService) {
        let self = this;
        self.$l = $log;
        self.$timeout = $timeout;
        self.CalculatedDataService = CalculatedDataService;
        self.defaultValues();
        console.log("MaintainController");
    }

    defaultValues() {
        let self = this;

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


        self.CalculatedDataService.dogodneDni.then((response)=> {
            self.$l.debug("DATA", response);
            self.chartData = response.data;
            self.startAmCharts();
        })
    }

    startAmCharts() {
        let self = this;
        let config = {
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
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "bullet": "round",
                    "id": "AmGraph-1",
                    "title": "Aktywność",
                    "valueField": "value"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": "Axis title"
                }
            ],
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "useGraphSettings": true
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 15,
                    "text": "Diagram aktywnosci użytkowników w tygodniu z podziałem na godziny"
                }
            ],
            "dataProvider": self.chartData
        };
        self.$l.debug(self.chartData);
        AmCharts.makeChart($('.chartdiv')[0], config);

    }


}

export default MaintainController ;
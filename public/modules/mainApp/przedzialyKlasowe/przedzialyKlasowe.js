/**
 * Created by piec on 5/1/2016.
 */

class PrzedzialyKlasoweController {
    constructor($log, $timeout, CalculatedDataService) {
        let self = this;
        self.$l = $log;
        self.$timeout = $timeout;
        self.CalculatedDataService = CalculatedDataService;
        self.defaultValues();
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


        self.CalculatedDataService.przedzialyKlasowe.then((response)=> {
            self.$l.debug("DATA", response);
            self.chartData = response.data;
            self.startAmCharts();
        })
    }

    startAmCharts() {
        let self = this;
        let config = {
            "type": "pie",
            "angle": 12,
            "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
            "depth3D": 15,
            "titleField": "class",
            "valueField": "value",
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "align": "center",
                "markerType": "circle"
            },
            "titles": [],
            "dataProvider": self.chartData
        };
        AmCharts.makeChart($('.chartdiv')[0], config);

    }


}

export default PrzedzialyKlasoweController;
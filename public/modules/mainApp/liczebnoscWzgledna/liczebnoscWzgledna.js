/**
 * Created by piec on 5/1/2016.
 */

class LiczebnoscWzglednaController {
    constructor($log, $timeout) {
        let self = this;
        self.$l = $log;
        self.$timeout = $timeout;
        self.$l.debug("TEST");
        self.defaultValues();
        self.startAmCharts();

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
        }

        self.chartData = [{
            "country": "USA",
            "visits": 4252
        }, {
            "country": "China",
            "visits": 1882
        }, {
            "country": "Japan",
            "visits": 1809
        }, {
            "country": "Germany",
            "visits": 1322
        }, {
            "country": "UK",
            "visits": 1122
        }, {
            "country": "France",
            "visits": 1114
        }, {
            "country": "India",
            "visits": 984
        }, {
            "country": "Spain",
            "visits": 711
        }, {
            "country": "Netherlands",
            "visits": 665
        }, {
            "country": "Russia",
            "visits": 580
        }, {
            "country": "South Korea",
            "visits": 443
        }, {
            "country": "Canada",
            "visits": 441
        }, {
            "country": "Brazil",
            "visits": 395
        }, {
            "country": "Italy",
            "visits": 386
        }, {
            "country": "Australia",
            "visits": 384
        }, {
            "country": "Taiwan",
            "visits": 338
        }, {
            "country": "Poland",
            "visits": 328
        }];
    }

    startAmCharts() {
        let self = this;
        let config = {
            "type": "serial",
            "categoryField": "category",
            "angle": 2,
            "depth3D": 4,
            "startDuration": 1,
            "fontSize": 12,
            "handDrawScatter": 3,
            "handDrawThickness": 2,
            "theme": "black",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "chartCursor": {
                "enabled": true
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "bullet": "round",
                    "id": "AmGraph-1",
                    "title": "graph 1",
                    "type": "smoothedLine",
                    "valueField": "column-1"
                },
                {
                    "balloonText": "[[title]] of [[category]]:[[value]]",
                    "bullet": "square",
                    "id": "AmGraph-2",
                    "title": "graph 2",
                    "type": "smoothedLine",
                    "valueField": "column-2"
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
                    "text": "Chart Title"
                }
            ],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": 8,
                    "column-2": 5
                },
                {
                    "category": "category 2",
                    "column-1": 6,
                    "column-2": 7
                },
                {
                    "category": "category 3",
                    "column-1": 2,
                    "column-2": 3
                },
                {
                    "category": "category 4",
                    "column-1": 1,
                    "column-2": 3
                },
                {
                    "category": "category 5",
                    "column-1": 2,
                    "column-2": 1
                },
                {
                    "category": "category 6",
                    "column-1": 3,
                    "column-2": 2
                },
                {
                    "category": "category 7",
                    "column-1": 6,
                    "column-2": 8
                }
            ]
        };
        AmCharts.makeChart($('.chartdiv')[0], config);

    }

}

export default LiczebnoscWzglednaController;
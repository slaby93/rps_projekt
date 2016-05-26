/**
 * Created by piec on 13.03.16.
 */
// -----------------------------------------------------   Libs imports          ------------------------------------------------------------------------------------------

import 'jquery';
import * as angular from 'angular';
import * as ui_router from 'angular-ui-router';
import * as angular_local_storage from 'angular-local-storage';
import * as angular_material from 'angular-material';
import * as ngMessages from 'angular-messages';
import * as angular_moment from 'angular-moment';
// import * as amMap from 'amcharts/ammap3';
import * as amCharts from 'amcharts/amcharts3';
import * as serial from 'amcharts/amcharts3/amcharts/serial.js';
import * as pie from 'amcharts/amcharts3/amcharts/pie.js';
import * as lodash from 'lodash';
// import * as mathJax from 'mathjax';
import * as fullpage from 'fullpage.js';

// -----------------------------------------------------   Config imports        ------------------------------------------------------------------------------------------
import routing from './routing';
// -----------------------------------------------------   Controllers imports   ------------------------------------------------------------------------------------------
import ApplicationController from './application/application.controller';
import ExploreDataController from './exploreData/exploreData.controller';
import PrzedzialyKlasoweController from './przedzialyKlasowe/przedzialyKlasowe';
import LiczebnoscWzglednaController from './liczebnoscWzgledna/liczebnoscWzgledna';
import NatezenieIPController  from './natezenieIP/natezenieIP.controller';
import ZmianaLogowanController  from './zmianaLogowan/zmianaLogowan';
import MaintainController  from './maintaining/maintaining.controller';
import ObciazenieController  from './obciazenie/obciazenie';
// -----------------------------------------------------   Services imports      ------------------------------------------------------------------------------------------
import CalculatedDataService from './../services/calculatedData';
// -----------------------------------------------------   Directives imports    ------------------------------------------------------------------------------------------
import DataExplorationDirective from '../directives/dataExploration/dataExploration.directive';
import MathJaxBindingDirective from '../directives/mathjaxBinding/mathJaxBinding.directive';
// -----------------------------------------------------   Other imports         ------------------------------------------------------------------------------------------
import Main from '../mainApp/main';
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
angular.module("mainApp", ['ui.router', 'LocalStorageModule', 'ngMaterial', 'ngMessages', 'angularMoment'])
    .controller("ApplicationController", ApplicationController)
    .controller("ExploreDataController", ExploreDataController)
    .controller("PrzedzialyKlasoweController", PrzedzialyKlasoweController)
    .controller("LiczebnoscWzglednaController", LiczebnoscWzglednaController)
    .controller("NatezenieIPController", NatezenieIPController)
    .controller("ZmianaLogowanController", ZmianaLogowanController)
    .controller("ObciazenieController", ObciazenieController)
    .controller("MaintainController", MaintainController)
    .directive("exploreData", DataExplorationDirective)
    .directive("mathjaxBind", MathJaxBindingDirective)
    .service('CalculatedDataService', CalculatedDataService)
    .config(routing)
    .run(Main);


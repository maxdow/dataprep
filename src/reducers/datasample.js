import { OBJECTS, WP_DATATYPES } from "../datatypes.constants.js"

export const dataSample = {
    [OBJECTS.WP]: [{
        name: "Test",
        id: 12,
        data: [{
            [WP_DATATYPES.TYPE_NAME]: "WP1",
            [WP_DATATYPES.TYPE_LAT]: 23.24,
            [WP_DATATYPES.TYPE_LNG]: 3.34,
        }, {
            [WP_DATATYPES.TYPE_NAME]: "WP2",
            [WP_DATATYPES.TYPE_LAT]: 28.92,
            [WP_DATATYPES.TYPE_LNG]: 6.15,
        }, {
            [WP_DATATYPES.TYPE_NAME]: "WP3",
            [WP_DATATYPES.TYPE_LAT]: 32.1,
            [WP_DATATYPES.TYPE_LNG]: 6.12,
        }]
    }, {
        name: "Test 2",
        id: 123,
        data: [{
            [WP_DATATYPES.TYPE_NAME]: "WP1",
            [WP_DATATYPES.TYPE_LAT]: 13.12,
            [WP_DATATYPES.TYPE_LNG]: 4.2,
        }, {
            [WP_DATATYPES.TYPE_NAME]: "WP2",
            [WP_DATATYPES.TYPE_LAT]: 22.3,
            [WP_DATATYPES.TYPE_LNG]: 4.8,
        }]
    }],
    [OBJECTS.FPL]: [{
        name: "FlightPlan test",
        id: 1,
        etd: new Date(),
        speed: 340,
        data: [{
            [WP_DATATYPES.TYPE_NAME]: "WP__",
            [WP_DATATYPES.TYPE_LAT]: 48.893615361480215,
            [WP_DATATYPES.TYPE_LNG]: 2.4829101562500013,
            [WP_DATATYPES.TYPE_FL]: 185
        }, {
            [WP_DATATYPES.TYPE_NAME]: "WP__",
            [WP_DATATYPES.TYPE_LAT]: 48.516604348867475,
            [WP_DATATYPES.TYPE_LNG]: 4.240722656249999,
            [WP_DATATYPES.TYPE_FL]: 255,
            "timestamp": "2016-05-01T09:40:35.979Z"
        }, {
            [WP_DATATYPES.TYPE_NAME]: "WP__",
            [WP_DATATYPES.TYPE_LAT]: 47.2195681123155,
            [WP_DATATYPES.TYPE_LNG]: 5.29541015625,
            [WP_DATATYPES.TYPE_FL]: 310,
            "timestamp": "2016-05-01T09:58:21.115Z"
        }, {
            [WP_DATATYPES.TYPE_NAME]: "WP__",
            [WP_DATATYPES.TYPE_LAT]: 45.429298732573784,
            [WP_DATATYPES.TYPE_LNG]: 5.51513671875,
            [WP_DATATYPES.TYPE_FL]: 310,
            "timestamp": "2016-05-01T10:19:55.197Z"
        }, {
            [WP_DATATYPES.TYPE_NAME]: "WP__",
            [WP_DATATYPES.TYPE_LAT]: 43.96119063892024,
            [WP_DATATYPES.TYPE_LNG]: 5.20751953125,
            [WP_DATATYPES.TYPE_FL]: 315,
            "timestamp": "2016-05-01T10:37:44.026Z"
        }, {
            [WP_DATATYPES.TYPE_NAME]: "WP__",
            [WP_DATATYPES.TYPE_LAT]: 43.32517767999295,
            [WP_DATATYPES.TYPE_LNG]: 1.7358398437500004,
            [WP_DATATYPES.TYPE_FL]: 335,
            "timestamp": "2016-05-01T11:08:55.714Z"
        }, {
            [WP_DATATYPES.TYPE_NAME]: "WP__",
            [WP_DATATYPES.TYPE_LAT]: 44.24519901522129,
            [WP_DATATYPES.TYPE_LNG]: -0.28564453125000056,
            [WP_DATATYPES.TYPE_FL]: 330,
            "timestamp": "2016-05-01T11:29:40.778Z"
        }, {
            [WP_DATATYPES.TYPE_NAME]: "WP__",
            [WP_DATATYPES.TYPE_LAT]: 46.73986059969266,
            [WP_DATATYPES.TYPE_LNG]: -0.725097656249999,
            [WP_DATATYPES.TYPE_FL]: 330,
            "timestamp": "2016-05-01T11:59:51.009Z"
        }, {
            [WP_DATATYPES.TYPE_NAME]: "WP__",
            [WP_DATATYPES.TYPE_LAT]: 47.9605023889151,
            [WP_DATATYPES.TYPE_LNG]: 0.7250976562500011,
            [WP_DATATYPES.TYPE_FL]: 330,
            "timestamp": "2016-05-01T12:18:41.127Z"
        }, {
            [WP_DATATYPES.TYPE_NAME]: "WP__",
            [WP_DATATYPES.TYPE_LAT]: 47.989921667414166,
            [WP_DATATYPES.TYPE_LNG]: 3.14208984375,
            [WP_DATATYPES.TYPE_FL]: 320,
            "timestamp": "2016-05-01T12:38:10.530Z"
        }, {
            [WP_DATATYPES.TYPE_NAME]: "WP__",
            [WP_DATATYPES.TYPE_LAT]: 46.52863469527168,
            [WP_DATATYPES.TYPE_LNG]: 4.50439453125,
            [WP_DATATYPES.TYPE_FL]: 290,
            "timestamp": "2016-05-01T12:58:57.253Z"
        }, {
            [WP_DATATYPES.TYPE_NAME]: "WP__",
            [WP_DATATYPES.TYPE_LAT]: 45.274886437048934,
            [WP_DATATYPES.TYPE_LNG]: 4.724121093749998,
            [WP_DATATYPES.TYPE_FL]: 295,
            "timestamp": "2016-05-01T13:14:06.920Z"
        }, {
            [WP_DATATYPES.TYPE_NAME]: "WP__",
            [WP_DATATYPES.TYPE_LAT]: 44.52784279845551,
            [WP_DATATYPES.TYPE_LNG]: 2.7026367187499996,
            [WP_DATATYPES.TYPE_FL]: 290,
            "timestamp": "2016-05-01T13:33:32.883Z"
        }, {
            [WP_DATATYPES.TYPE_NAME]: "WP__",
            [WP_DATATYPES.TYPE_LAT]: 45.08903556483102,
            [WP_DATATYPES.TYPE_LNG]: 1.1645507812499996,
            [WP_DATATYPES.TYPE_FL]: 280,
            "timestamp": "2016-05-01T13:48:18.790Z"
        }, {
            [WP_DATATYPES.TYPE_NAME]: "WP__",
            [WP_DATATYPES.TYPE_LAT]: 46.225452882269394,
            [WP_DATATYPES.TYPE_LNG]: 0.9448242187499992,
            [WP_DATATYPES.TYPE_FL]: 260,
            "timestamp": "2016-05-01T14:02:04.677Z"
        }, {
            [WP_DATATYPES.TYPE_NAME]: "WP__",
            [WP_DATATYPES.TYPE_LAT]: 46.164614496897116,
            [WP_DATATYPES.TYPE_LNG]: 2.7026367187499996,
            [WP_DATATYPES.TYPE_FL]: 190,
            "timestamp": "2016-05-01T14:16:44.927Z"
        }]
    }]
};




export const defaultDataSample = {
    [OBJECTS.WP]: {
        [WP_DATATYPES.TYPE_NAME]: "WP__",
        [WP_DATATYPES.TYPE_LAT]: 10,
        [WP_DATATYPES.TYPE_LNG]: 10,
    },
    [OBJECTS.FPL]: {
        [WP_DATATYPES.TYPE_NAME]: "WP__",
        [WP_DATATYPES.TYPE_LAT]: 10,
        [WP_DATATYPES.TYPE_LNG]: 10,
        [WP_DATATYPES.TYPE_FL]: 330
    }
};

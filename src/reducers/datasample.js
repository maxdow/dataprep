import {OBJECTS,WP_DATATYPES} from "../datatypes.constants.js"

export const dataSample = {
    [OBJECTS.WP]: [
        {
            name: "Test",
            id : 12,
            data: [
                {
                    [WP_DATATYPES.TYPE_NAME]: "WP1",
                    [WP_DATATYPES.TYPE_LAT]: 1000000,
                    [WP_DATATYPES.TYPE_LNG]: 1500000,
                }, {
                    [WP_DATATYPES.TYPE_NAME]: "WP2",
                    [WP_DATATYPES.TYPE_LAT]: 0,
                    [WP_DATATYPES.TYPE_LNG]: 0,
                }, {
                    [WP_DATATYPES.TYPE_NAME]: "WP3",
                    [WP_DATATYPES.TYPE_LAT]: 1100000,
                    [WP_DATATYPES.TYPE_LNG]: 1700000,
                }
            ]
        },
        {
            name: "Test 2",
            id : 123,
            data: [
                {
                    [WP_DATATYPES.TYPE_NAME]: "WP1",
                    [WP_DATATYPES.TYPE_LAT]: 1300000,
                    [WP_DATATYPES.TYPE_LNG]: 2300000,
                }, {
                    [WP_DATATYPES.TYPE_NAME]: "WP2",
                    [WP_DATATYPES.TYPE_LAT]: 1200000,
                    [WP_DATATYPES.TYPE_LNG]: 3200000,
                }
            ]
        }
    ],
    [OBJECTS.FPL] : [
        {
            name : "FlightPlan test",
            id:1,
            data : [
                {
                    [WP_DATATYPES.TYPE_NAME]: "WP1",
                    [WP_DATATYPES.TYPE_LAT]: 1300000,
                    [WP_DATATYPES.TYPE_LNG]: 2300000,
                    [WP_DATATYPES.TYPE_FL]: 230
                }, {
                    [WP_DATATYPES.TYPE_NAME]: "WP2",
                    [WP_DATATYPES.TYPE_LAT]: 1200000,
                    [WP_DATATYPES.TYPE_LNG]: 3200000,
                    [WP_DATATYPES.TYPE_FL]: 320
                }
            ]
        }
    ]
};




export const defaultDataSample = {
  [OBJECTS.WP] : {
    [WP_DATATYPES.TYPE_NAME]: "WP__",
    [WP_DATATYPES.TYPE_LAT]: 10,
    [WP_DATATYPES.TYPE_LNG]: 10,
  },
  [OBJECTS.FPL] : {
    [WP_DATATYPES.TYPE_NAME]: "WP__",
    [WP_DATATYPES.TYPE_LAT]: 10,
    [WP_DATATYPES.TYPE_LNG]: 10,
    [WP_DATATYPES.TYPE_FL]: 330
  }
};
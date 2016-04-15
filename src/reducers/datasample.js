import {OBJECTS,WP_DATATYPES} from "../datatypes.constants.js"

export const dataSample = {
    [OBJECTS.WP]: [
        {
            name: "Test",
            id : 12,
            data: [
                {
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
                }
            ]
        },
        {
            name: "Test 2",
            id : 123,
            data: [
                {
                    [WP_DATATYPES.TYPE_NAME]: "WP1",
                    [WP_DATATYPES.TYPE_LAT]: 13.12,
                    [WP_DATATYPES.TYPE_LNG]: 4.2,
                }, {
                    [WP_DATATYPES.TYPE_NAME]: "WP2",
                    [WP_DATATYPES.TYPE_LAT]: 22.3,
                    [WP_DATATYPES.TYPE_LNG]: 4.8,
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
                    [WP_DATATYPES.TYPE_LAT]: 22.22,
                    [WP_DATATYPES.TYPE_LNG]: 4.5,
                    [WP_DATATYPES.TYPE_FL]: 230
                }, {
                    [WP_DATATYPES.TYPE_NAME]: "WP2",
                    [WP_DATATYPES.TYPE_LAT]: 23.23,
                    [WP_DATATYPES.TYPE_LNG]: 5.5,
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
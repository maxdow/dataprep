import {OBJECTS,WP_DATATYPES} from "../datatypes.constants.js"

export const dataSample = {
    [OBJECTS.WP]: [
        {
            groupName: "Test",
            data: [
                {
                    [WP_DATATYPES.TYPE_NAME]: "WP1",
                    [WP_DATATYPES.TYPE_LAT]: 1252344.271424327,
                    [WP_DATATYPES.TYPE_LNG]: 2661231.5767766964,
                    [WP_DATATYPES.TYPE_FL]: 100
                }, {
                    [WP_DATATYPES.TYPE_NAME]: "WP2",
                    [WP_DATATYPES.TYPE_LAT]: 1000000,
                    [WP_DATATYPES.TYPE_LNG]: 2000000,
                    [WP_DATATYPES.TYPE_FL]: 500
                }, {
                    [WP_DATATYPES.TYPE_NAME]: "WP3",
                    [WP_DATATYPES.TYPE_LAT]: 1100000,
                    [WP_DATATYPES.TYPE_LNG]: 2500000,
                    [WP_DATATYPES.TYPE_FL]: 50
                }
            ]
        },
        {
            groupName: "Test 2",
            data: [
                {
                    [WP_DATATYPES.TYPE_NAME]: "WP1",
                    [WP_DATATYPES.TYPE_LAT]: 1352344.271424327,
                    [WP_DATATYPES.TYPE_LNG]: 2561231.5767766964,
                    [WP_DATATYPES.TYPE_FL]: 100
                }, {
                    [WP_DATATYPES.TYPE_NAME]: "WP2",
                    [WP_DATATYPES.TYPE_LAT]: 1100000,
                    [WP_DATATYPES.TYPE_LNG]: 2100000,
                    [WP_DATATYPES.TYPE_FL]: 500
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
    [WP_DATATYPES.TYPE_FL]: 100
  }
};
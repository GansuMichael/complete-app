import {
    getEl
} from "./helpers.js";

export function filterData(data) {

    const start =
    getEl("startDate").value;

    const end =
    getEl("endDate").value;

    return data.filter(item => {

        return (

            (!start || item.date >= start)

            &&

            (!end || item.date <= end)

        );

    });

}
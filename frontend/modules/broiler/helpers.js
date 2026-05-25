export function getEl(id) {

    return document.getElementById(id);

}

export function formatNumber(num = 0) {

    return Number(num).toLocaleString(undefined, {

        minimumFractionDigits: 0,

        maximumFractionDigits: 2

    });

}
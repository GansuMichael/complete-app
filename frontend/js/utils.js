// =====================================
// FORMAT NUMBER
// =====================================

function formatNumber(value){

    return Number(value || 0)
    .toLocaleString();

}

// =====================================
// FORMAT DATE
// =====================================

function formatDate(date){

    return new Date(date)
    .toLocaleDateString();

}

// =====================================
// GENERATE ID
// =====================================

function generateId(){

    return Math.random()
    .toString(36)
    .substring(2,9);

}

// =====================================
// SHOW ALERT
// =====================================

function showAlert(message){

    alert(message);

}
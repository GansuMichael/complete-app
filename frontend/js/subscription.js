// =====================================
// CHECK SUBSCRIPTION
// =====================================

async function checkSubscription(){

    const auth =
    await getAuth();

    const response =
    await apiRequest(
        "/api/subscription"
    );

    if(
        response.plan === "free"
    ){

        premiumFeature.style.display =
        "none";

        upgradeBtn.style.display =
        "block";

    }else{

        premiumFeature.style.display =
        "block";

        upgradeBtn.style.display =
        "none";

    }

}

// =====================================
// UPGRADE
// =====================================

upgradeBtn.addEventListener(

    "click",

    ()=>{

        window.location.href =
        "./upgrade.html";

    }

);
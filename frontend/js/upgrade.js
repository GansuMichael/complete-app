// =========================================
// SUBSCRIPTION SYSTEM
// =========================================

// =========================================
// USER STATE
// =========================================

const currentUser = {

    name:
       localStorage.getItem("name"),
 
    email:
       localStorage.getItem("email")
 
 };
 
 // =========================================
 // INIT
 // =========================================
 
 document.addEventListener(
    "DOMContentLoaded",
    initUpgrade
 );
 
 // =========================================
 // INIT FUNCTION
 // =========================================
 
 function initUpgrade() {
 
    setupButtons();
 
    checkSubscriptionStatus();
 
 }
 
 // =========================================
 // BUTTON EVENTS
 // =========================================
 
 function setupButtons() {
 
    const paystackBtn =
       document.getElementById(
          "paystackBtn"
       );
 
    const finalBtn =
       document.getElementById(
          "finalUpgradeBtn"
       );
 
    if (paystackBtn) {
 
       paystackBtn.addEventListener(
          "click",
          startUpgrade
       );
 
    }
 
    if (finalBtn) {
 
       finalBtn.addEventListener(
          "click",
          startUpgrade
       );
 
    }
 
 }
 
 // =========================================
 // START PAYMENT
 // =========================================
 
 function startUpgrade() {
 
    if (!currentUser.email) {
 
       alert(
          "Please login first"
       );
 
       window.location.href =
          "./login.html";
 
       return;
    }
 
    paystackPayment(currentUser);
 
 }
 
 // =========================================
 // CHECK PLAN
 // =========================================
 
 function checkSubscriptionStatus() {
 
    const plan =
       localStorage.getItem(
          "subscription"
       );
 
    if (plan === "premium") {
 
       showPremiumBadge();
 
    } else {
 
       showFreeBadge();
 
    }
 
 }
 
 // =========================================
 // FREE BADGE
 // =========================================
 
 function showFreeBadge() {
 
    createStatusBox(
       "FREE PLAN",
       "#dc2626"
    );
 
 }
 
 // =========================================
 // PREMIUM BADGE
 // =========================================
 
 function showPremiumBadge() {
 
    createStatusBox(
       "PREMIUM ACTIVE",
       "#16a34a"
    );
 
 }
 
 // =========================================
 // UI STATUS BOX
 // =========================================
 
 function createStatusBox(
    text,
    color
 ) {
 
    const box =
       document.createElement("div");
 
    box.style.position =
       "fixed";
 
    box.style.top = "15px";
 
    box.style.right = "15px";
 
    box.style.padding =
       "10px 15px";
 
    box.style.background =
       color;
 
    box.style.color =
       "white";
 
    box.style.borderRadius =
       "8px";
 
    box.style.fontWeight =
       "bold";
 
    box.style.zIndex =
       "9999";
 
    box.innerText = text;
 
    document.body.appendChild(box);
 
 }
 
 // =========================================
 // PREMIUM ACCESS GUARD
 // =========================================
 
 function requirePremium() {
 
    const plan =
       localStorage.getItem(
          "subscription"
       );
 
    if (plan !== "premium") {
 
       alert(
          "Upgrade required to access this feature."
       );
 
       window.location.href =
          "./upgrade.html";
 
       return false;
 
    }
 
    return true;
 
 }
 
 // =========================================
 // EXPORTS
 // =========================================
 
 window.requirePremium =
    requirePremium;
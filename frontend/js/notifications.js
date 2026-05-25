function showNotification(message){

    if(Notification.permission === 'granted'){
 
       new Notification(message);
 
    }
 
 }
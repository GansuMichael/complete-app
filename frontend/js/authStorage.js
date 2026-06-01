async function saveUserOffline(user) {

    return new Promise((resolve, reject) => {
    
        const transaction =
            db.transaction(
                ["auth"],
                "readwrite"
            );
    
        const store =
            transaction.objectStore("auth");
    
        const request =
            store.put({
    
                id: 1,
    
                user
    
            });
    
        request.onsuccess =
            () => resolve(true);
    
        request.onerror =
            () => reject(request.error);
    
    });
    
    }
    
    async function getUserOffline() {
    
    return new Promise((resolve) => {
    
        const transaction =
            db.transaction(
                ["auth"],
                "readonly"
            );
    
        const store =
            transaction.objectStore("auth");
    
        const request =
            store.get(1);
    
        request.onsuccess =
            () =>
                resolve(
                    request.result
                );
    
    });
    
    }
    
    window.saveUserOffline =
    saveUserOffline;
    
    window.getUserOffline =
    getUserOffline;
    
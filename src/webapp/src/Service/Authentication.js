
export const Authentication = {
    login,
    logout,
};

function login(username, password) {

    // return new Promise((resolve,reject) => {
    //     setTimeout(() => {
    //         if (username==="even" && password==="123"){
    //             resolve(1)
    //         }else{
    //             reject(-1)
    //         }
    //     }, 1000)
    // })
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ strategy:"local", username: username,  password:password })
    };

    return fetch(`https://uroflow.unionoftra.sh/api/authentication`, requestOptions)
    .then(res => {
        if (res.status === 201){
            return res.json()
        }else{
            return Promise.reject("fail in authentication")
        }
    })
    .then(user => {
        return user;
    }).catch(e => Promise.reject(e))

}

function logout() {
    // remove user from local storage to log user out
    // window.localStorage.removeItem('currentUser');
    return
}

function getCurrentUser(){
    return {user:"sqs"}
}



/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    // setTimeout(()=>{
    //     // return millis;
    //     return 24;
    // },millis)

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(millis);
        }, millis);
    });
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
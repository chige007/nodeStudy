console.log(async function(){
    return 4
}());


var interview = (round) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let random = Math.random();
            if (random < 0.5) {
                console.log(`success for ${round}`)
                resolve(round);
            } else {
                let error = new Error('fail');
                error.round = round;
                reject(error);
            }
        }, 500);
    })
}

(async function () {
    try {
        await interview(1);
        await interview(2);
        await interview(3);
    } catch (err) {
        return console.log(`cry at ${err.round}`);
    }
    console.log('smile')
})();
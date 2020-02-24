var interview = (round) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let random = Math.random();
            if (random < 0.5) {
                resolve(round);
            } else {
                let error = new Error('fail');
                error.round = round;
                reject(error);
            }
        }, 500);
    })
}
interview(1)
    .then(res => {
        console.log(`success for ${res}`);
        return interview(2);
    })
    .then(res => {
        console.log(`success for ${res}`);
        return interview(3);
    })
    .then(res => {
        console.log(`success for ${res}`);
        console.log('smile');
    })
    .catch(err => {
        console.log(`cry for ${err.round}`);
    })
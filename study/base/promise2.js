var interview = (company) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let random = Math.random();
            if (random < 0.5) {
                resolve(company);
            } else {
                let error = new Error('fail');
                error.company = company;
                reject(error);
            }
        }, 500);
    });
}

Promise.all([
    interview('tecent'),
    interview('alibaba')
]).then(res => {
    console.log('success');
}).catch(err => {
    console.log(`cry for ${err.company}`);
})
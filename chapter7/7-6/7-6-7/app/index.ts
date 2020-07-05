setTimeout(() => {
    import('./utils')
        .then((utils) => {
            console.log(utils.add(1, 2));
        })
        .catch((error) => {
            console.log(error);
        });
}, 1000);

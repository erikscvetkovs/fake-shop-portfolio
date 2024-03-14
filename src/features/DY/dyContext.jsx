const setDYContext = (type, data) => {
    window.DY = window.DY || {};
    // eslint-disable-next-line
    if (data !== undefined) {
        window.DY.recommendationContext = { type: type, data: data };
    } else {
        window.DY.recommendationContext = { type: type };
    }
}

export default setDYContext;
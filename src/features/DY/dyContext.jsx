const setDYContext = (type, data) => {
    window.DY = window.DY || {};
    /* eslint-disable no-undef */
    if (data !== undefined) {
        DY.recommendationContext = { type: type, data: data };
    } else {
        DY.recommendationContext = { type: type };
    }
}

export default setDYContext;
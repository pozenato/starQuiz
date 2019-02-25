const getPeople = payload => ({
    method: 'get',
    url: payload,
});

const requests = {
    getPeople,
};

export default requests;

//const token = '';

function setInterceptors(instance) {
    instance.interceptors.request.use(
        (config) => {
            // config.headers.Authorization = token;
            return config;
        },
        (error) => {
            return Promise.reject(error.response);
        }
    );
    instance.interceptors.response.use(
        (config) => {
            return config.data;
        },
        (error) => {

            return Promise.reject(error.response);
        }
    );
    return instance;
}

export { setInterceptors };

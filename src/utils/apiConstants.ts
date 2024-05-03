class APIConstants {
    BASE_URL = 'https://api.trendifyapp.tech/api/v1';

    // Controllers
    AUTH = this.BASE_URL + '/auth';
    USER = this.BASE_URL + '/user';
    WATCHERS = this.BASE_URL + '/watchers';

    // Auth Endpoints
    LOGIN = this.AUTH + '/login';

    // User Endpoints
    GET_USER = this.USER + '/';

    // Watchers Endpoints
    RENDER_IMAGE = this.WATCHERS + '/snapshots/render';
    GET_SNAPSHOT = (id: string) => this.WATCHERS + `/snapshots/preview/${id}`;
    CREATE_WATCHER = this.WATCHERS + '/';
    GET_WATCHERS = this.WATCHERS + '/';
    GET_HIT_HISTORY_FOR_CHART = this.WATCHERS + '/chart-history';
    GET_WATCHER = (id: string) => this.WATCHERS + `/${id}`;
    UPDATE_WATCHER = (id: string) => this.WATCHERS + `/${id}`;
}

const API_CONSTANTS = new APIConstants();
export default API_CONSTANTS;

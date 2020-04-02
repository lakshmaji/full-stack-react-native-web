export class ApiEndpoints {

    static BASE_URL = 'http://staging.example.com';

    static removeWhiteSpaces(urlString) {
        return urlString.replace(/^\s+|\s+$/gm, '');
    }

    static PORTAL_CONFIG() {
        return this.removeWhiteSpaces(`/core/config/portal_config`);
    }

}

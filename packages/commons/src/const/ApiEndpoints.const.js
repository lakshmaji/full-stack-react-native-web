export class ApiEndpoints {

    static removeWhiteSpaces(urlString) {
        return urlString.replace(/^\s+|\s+$/gm, '');
    }

    static GET_ALL_COMMENTS() {
        return this.removeWhiteSpaces(`comments`);
    }

    static GET_ALL_POSTS() {
        return this.removeWhiteSpaces(`posts`);
    }

}

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

    static CREATE_POST() {
        return this.removeWhiteSpaces(`posts`);
    }

    static DELETE_POST(id) {
        return this.removeWhiteSpaces(`posts/${id}`);
    }

    static GET_POST(id) {
        return this.removeWhiteSpaces(`posts/${id}`);
    }

    static POST_COMMENT(id) {
        return this.removeWhiteSpaces(`posts/${id}/comment`);
    }

    static GET_COMMENT(id) {
        return this.removeWhiteSpaces(`posts/${id}/comment`);
    }

    static REGISTER() {
        return this.removeWhiteSpaces(`auth/register`);
    }

    static LOGIN() {
        return this.removeWhiteSpaces(`auth/login`);
    }
    static LOGOUT() {
        return this.removeWhiteSpaces(`auth/logout`);
    }

}

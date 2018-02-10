export default {
    /**
    * 生成Guid
    */
    genGuid(splitStr) {
        /* eslint-disable */
        splitStr = splitStr || '';
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return (S4() + S4() + splitStr + S4() + splitStr + S4().substr(0, 3) + splitStr + S4() + splitStr + S4() + S4() + S4()).toLowerCase();
        /* eslint-enable */
    },
    /**
     * 游客标记
     */
    getGuestToken() {
        const key = 'guest_token';
        if (window.guest_token) {
            return window.guest_token;
        }
        try {
            window.guest_token = localStorage.getItem(key);
            if (window.guest_token) {
                return window.guest_token;
            }
            window.guest_token = this.genGuid('');
            localStorage.setItem(key, window.guest_token);
            return window.guest_token;
        } catch (e) {
            window.guest_token = this.genGuid('');
            return window.guest_token;
        }
    },
};

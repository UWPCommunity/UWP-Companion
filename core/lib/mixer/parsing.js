function isMixer(url) {
    if (typeof url == 'string') {
        let match = url.match(/^http.*mixer\..[a-z]{0,4}?(?=\/)(.+)/);
        return (match && match[1]) ? true : false;
    } else console.error('Incorrect data recieved while checking domain');
}

export default {
    isMixer
}
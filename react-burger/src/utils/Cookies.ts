export function getCookie(name: string) {
    const matches = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([$?*|{}\]\\^])/g, '\\$1') + '=([^;]*)')
    );
    if (matches && matches[1] === 'undefined') return false;
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookies(name: string, value: string, props: {path: string, expires: string | Date}) {
    props = {
        // @ts-ignore
        path: '/',
        ...props
    };

    let exp: string | Date = props.expires;
    if (typeof exp == 'number' && exp) {
        const d = new Date();
        d.setTime(d.getTime() + exp * 1000);
        exp = props.expires = d;
    }
    // @ts-ignore
    if (exp && exp.toUTCString) {
        // @ts-ignore
        props.expires = exp.toUTCString();
    }
    value = encodeURIComponent(value);
    let updatedCookie = name + '=' + value;
    for (const propName in props) {
        updatedCookie += '; ' + propName;
        // @ts-ignore
        const propValue = props[propName];
        if (propValue !== true) {
            updatedCookie += '=' + propValue;
        }
    }
    document.cookie = updatedCookie;
}
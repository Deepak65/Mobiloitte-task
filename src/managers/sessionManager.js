import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const sessionManager = {
    setDataInCookies,
    getDataFromCookies,
    removeDataFromCookies,
    setDataInLocalStorage,
    getDataFromLocalStorage,
    removeDataFromLocalStorage
};

function setDataInCookies(data, key) {
    cookies.set(key, JSON.stringify(data), {path: '/'});
}

function setDataInLocalStorage(data, key) {
    localStorage[key] = JSON.stringify(data);
}

function getDataFromCookies(key) {
    return cookies.get(key)
}

function getDataFromLocalStorage(key) {
    try {
        return localStorage[key] ? JSON.parse(localStorage[key]) : false;
    } catch (err) {
        return err;
    }
}

function removeDataFromCookies(key) {
    cookies.remove(key, {path: '/'});
}

function removeDataFromLocalStorage(key) {
    return localStorage.removeItem(key);
}

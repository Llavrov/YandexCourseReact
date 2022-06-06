import {objectBurger} from "./types";

export function checkResponse(res: any) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}
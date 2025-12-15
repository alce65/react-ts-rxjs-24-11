import type { Observable } from "rxjs"
import { fetchDataV2 } from "../../../core/services/data.fetch.v2"
import type { Country } from "../types/country";


const URL_BASE = 'https://restcountries.com/v3.1';
const URL = URL_BASE + '/name';
const apiOptions = '?fields=name,capital';

// export const getAllUsers = fetchDataV2<User[]>(urlAPI)

// export const getUserById = (id: User['id']): Observable<User> => {
//     const url = urlAPI + '/' + id
//     return fetchDataV2<User>(url)()
// }

export const searchCountries = (query: string): Observable<Country[]> => {
    const url = URL + '/' + query + apiOptions
    return fetchDataV2<Country[]>(url)()
}

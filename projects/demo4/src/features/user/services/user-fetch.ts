import type { Observable } from "rxjs"
import { fetchDataV2 } from "../../../core/services/data.fetch.v2"
import type { User } from "../types/user"

const urlAPI = 'https://jsonplaceholder.typicode.com/users'

export const getAllUsers = fetchDataV2<User[]>(urlAPI)

export const getUserById = (id: User['id']): Observable<User> => {
    const url = urlAPI + '/' + id
    return fetchDataV2<User>(url)()
}

export const searchUsers = (query: string): Observable<User[]> => {
    const url = urlAPI + '?' + query
    return fetchDataV2<User[]>(url)()
}

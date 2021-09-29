import { authenticationService } from '../services/auth.service';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUser();
    if (currentUser && currentUser.token) {
        return { Authorization: `Token ${currentUser.token}` };
    } else {
        return {};
    }
}
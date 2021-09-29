import { authenticationService } from "../services/auth.service";

export const handleResponse = (response) => {
  const data = response && response.data;
  if (response.status !== 200) {
    if ([401, 403].indexOf(response.status) !== -1) {
      authenticationService.logout();
      window.location.reload()
    }
    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }
  return data
};

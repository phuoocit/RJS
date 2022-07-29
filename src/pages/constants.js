export const required = (val) => val && val.length;
export const maxLength = (len) => (val) => !(val) || (val.length <= len);
export const minLength = (len) => (val) => val && (val.length >= len);
export const isNumber = (val) => !isNaN(Number(val));

export const ADD_STAFF = 'add_staff';
export const DELETE_STAFF = 'delete_staff';
export const LOADING_STAFF = 'loading_staff';
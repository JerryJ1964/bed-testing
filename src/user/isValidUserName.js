export function isValidUsername(username) {
  return /^[a-zA-Z0-9_]+$/.test(username);
}

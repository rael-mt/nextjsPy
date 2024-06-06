export const APP_KEY = 'accessToken';

export function getStorageItem(key: string) {
  if (typeof window === 'undefined') return;
  
  const data = window.localStorage.getItem(`${key}`);
  if(data === null) return
  const tokenObjto = {
    token: data
  }
  const keyData = JSON.stringify(tokenObjto)
  return keyData!
}

export function setStorageItem(key: string, value: unknown) {
  if (typeof window === 'undefined') return;

  const data = JSON.stringify(value);

  return window.localStorage.setItem(`${APP_KEY}_${key}`, data);
}
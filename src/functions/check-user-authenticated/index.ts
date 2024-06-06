import { getStorageItem } from '@/utils'


export const checkUserAuthenticated = () => {
                                                   
    const userToken = getStorageItem('accessToken');
    
    return !!userToken;
}
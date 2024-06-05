import { getStorageItem } from '@/utils'


export const checkUserAuthenticated = () => {
                                                   
    const userToken = getStorageItem('token');
    console.log('userToken', userToken)
    
    return !!userToken;
}
import { APP_ROUTER } from "@/constants/app-routes";
/** 
* 
*@param asPath
*@returns
*/
export const checkIsPublicRoute = (asPath: string) => {
    const appPublicRoutes = Object.values(APP_ROUTER.public);

    return appPublicRoutes.includes(asPath);
}
export namespace Store {
  export interface localState {
    localLang: Locale,
    elementLangType: {
      [key: string]: any
    }
  }
}
export enum Locale {
  zn = 'zn',
  en = 'en'
}
export interface UserType extends LoginType{
  userId?: string,
  username?: string,
  token?: string | undefined,
  userInfo?: {},
  phone?: string,
  namespace?: string,
  roles?: [],
  name?:string
}

export interface LoginType{
  username?: string,
  password?: string
}

export interface RouteType{
  routes: any[],
  addRoutes: any[]
}

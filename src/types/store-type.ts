export namespace Store {
  export interface locale {
    state: {
      localLang: Locale,
      elementLangType: any
    } | any,
    reset(): void,
    changeState(state: any): void
  }
}
export type Locale = 'zhCn'
  | 'en'
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

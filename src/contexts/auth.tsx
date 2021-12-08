import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../services/api"

//Export 1: Context
// - Exports vars and functions as component children
// - Used by the Provider and the individual web components

type AuthContextData = {
    signinUrl: string,
    accessToken: string | null  //token can be null before login
}

export const AuthContext = createContext({} as AuthContextData)


//Export 2: Provider
// - Uses the Context
// - Used by index.tsx around the <App/>

type AuthProviderData = {
    children: ReactNode
}

type AuthResponse = {
    access_token: string,
    refresh_token: string
}

export function AuthProvider(props: AuthProviderData) {

    //Children 1: signinUrl
    //Used by the <a>Login no ML</a> tag
    const signinUrl = 'http://localhost:2000/ml'

    //Children 2: accessToken
    //After login, page will reload with code in the url.
    //Use the code to get the accessToken, export it as one of the componen't children
    
    const [ accessToken, setAccessToken ] = useState<string | null>(null)

    useEffect(() => {
        //Check for the 'code' in the url
        const url = window.location.href    //http://localhost:3001/?code=TG-abfksf....
        if (url.includes('?code=')) {
            const [ urlWithoutCode, code ] = url.split('?code=')
            window.history.pushState({}, '', urlWithoutCode)  //send the user to the same page, but without the 'code' in the brownser's address bar
            
            //Change the code for the accessToken
            console.log(code)
            api.post<AuthResponse>(
                'ml/auth', 
                {code: code}    //body
            ).then(response => {
                const accessToken = response.data.access_token
                console.log(accessToken)
                setAccessToken(accessToken)
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ signinUrl, accessToken }}>
            {props.children}
        </AuthContext.Provider>
    )
}
class AuthService {
    constructor(){
        this.authenticated = false
        // när vi är går in lär vi inte inloggade
    }
    login = () => {
        this.authenticated = true
        setTimeout(()=> {
           
            return this.authenticated
        } , 1000)
    }
    logout = ()=> {
    this.authenticated = false
    setTimeout(()=> {

        return this.authenticated
    } , 1000)
    }

    isAuthenticated = () => {
        return this.authenticated
    }
}
// exportersr en distans av denna (antar authService)
export default new AuthService()
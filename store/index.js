import vuex from 'vuex'

//user module
export default new vuex.Store({
    state : {
        user : {
            name : '',
            surname : '',
            email : '',
            isAdmin: false,
            token : '',
            loginRequired : true,
        }
    },
    mutations : {
        setUser(state, payload){
            state.user.name = payload.name
            state.user.surname = payload.surname
            state.user.email = payload.email
            state.user.isAdmin = payload.isAdmin
            state.user.token = payload.token
        },
        setLoginRequired(state, payload){
            state.user.loginRequired = payload
        },
        setToken(state, payload){
            state.user.token = payload
        },
        setDefaultUser(state){
            state.user.name = ''
            state.user.surname = ''
            state.user.email = ''
            state.user.isAdmin = false
            state.user.token = ''
        }
    },
    actions : {
        setUser(context, payload){
            context.commit('setUser', payload)
        },
        setLoginRequired(context, payload){
            context.commit('setLoginRequired', payload)
        },
        setToken(context, payload){
            context.commit('setToken', payload)
        },
        setDefaultUser(context){
            context.commit('setDefaultUser')
        }
    },  
    getters : {
        getUser(state){
            return state.user
        }

    }
})

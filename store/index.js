export const state = () => ({
    dynamicClass: false,
    dynamicClass2: false,
})

export const mutations = {
    setDynamicClass(state, val){
        state.dynamicClass = val
    },
    setDynamicClass2(state, val){
        state.dynamicClass2 = val
    },
}
export const actions = {
    
}
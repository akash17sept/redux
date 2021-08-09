export const incrementAction = (payload) => {
    // debugger;
    return {
    type: "INCREMENT",
    payload
    }
}

export const decrementAction = (payload) => {
    return {
    type: "DECREMENT",
    payload
    }
}

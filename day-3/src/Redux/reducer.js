const reducer = (oldState, action) => {
    console.log(oldState, action);
    switch (action.type) {
        case "Add":
            return { ...oldState, count: oldState.count + action.payload };
        case "Reduce":
            return { ...oldState.count - action.payload }
        default:
            return oldState;
    }
};
export { reducer };
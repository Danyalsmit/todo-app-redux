
export const addNumber=(addValue)=>{
    return{
        type:"add",
        payload:{

            id:new Date().getTime().toString(),
            addValue:addValue,
        }}

}

export const change=(value)=>{
    return{
        type:"SET_INPUT_VALUE",
        payload: value,
    }
}

export const removeInput=()=>{
    return{
        type:"remove-input-val",
        payload:'',

    }
}

export const deleteValue=(value)=>{
    console.log(value)
    return{
        type:"SET_delete_VALUE",
        payload: value,
    }
}

export const updateValue=(value)=>{
    console.log(value)

    return{
        type:"UPDATE_ITEM",
        payload: value,
    }
}
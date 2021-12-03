import {
    createAction,
    createReducer,
    AnyAction,
    PayloadAction,
} from '@reduxjs/toolkit'

const isOpenFalse = createAction<boolean>('isOpenFalse')
const isOpenTrue = createAction<boolean>('isOpenTrue')

function isActionWithNumberPayload(action: AnyAction): action is PayloadAction<boolean> {
    return typeof action.payload === 'boolean'
}

const switchReducer = createReducer(
    {
        isOpen: true
    },
    (builder) => {
        builder
            .addCase(isOpenFalse, (state, action) => { state.isOpen = action.payload })
            .addCase(isOpenTrue, (state, action) => { state.isOpen = action.payload })
            .addMatcher(isActionWithNumberPayload, (state, action) => { })
            .addDefaultCase((state, action) => state)
    }
)

export { isOpenFalse, isOpenTrue }

export default switchReducer
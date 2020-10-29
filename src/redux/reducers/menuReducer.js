const initialState = {
    isMenuOpen: false
 }

const MENU_TOGGLE = 'MENU_TOGGLE'

export const toggleMenu = () => {
    return { 
            type: 'MENU_TOGGLE',
         }
} 

export default function (state = initialState, action){
    switch (action.type) {
        case MENU_TOGGLE:
            return {isMenuOpen: state.isMenuOpen=!state.isMenuOpen}
        default:
            return state    
    }
}
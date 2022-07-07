import {configureStore} from '@reduxjs/toolkit'
import navbarSlice from './navbarSlice.js'
import projectSlice  from './projectSlice.js'
export default configureStore({
    reducer: {
        navbar: navbarSlice,
        projects: projectSlice
    }
})
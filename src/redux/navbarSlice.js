import {createSlice} from '@reduxjs/toolkit'

const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        navbars: [
            {
                name: 'Home',
                path: '#home'
            },
            {
                name: 'About Me',
                path: '#about'

            },
            {
                name: 'Projects',
                path: '#projects'
            },
            {
                name: 'My Timeline',
                path: '#timeline'
            }
        ]
    },
    reducers: {}
})

export default navbarSlice.reducer;
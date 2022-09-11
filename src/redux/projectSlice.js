import {createSlice} from '@reduxjs/toolkit';

export const projectSlice = createSlice({
    name: "projectSlice",
    initialState: {
        projects: [
            {   
                img: require('../assets/images/projectImg/isd-com.PNG'),
                title: 'Clone interface ISD-soft.com',
                technologies: ['HTML5, ', ' SCSS, ', ' Javscript ES6, ', ' Github Page'],
                linkDemo: 'https://kyphong2k.github.io/ISD-software/',
                linkRespository: 'https://github.com/kyphong2k/ISD-software.git',
                dateFinished: 'Mar 12 2012 10:00:00 AM'
            },
            {   
                img: require('../assets/images/projectImg/restaurant-coffee.PNG'),
                title: 'Build Interface following Figma Design',
                technologies: ['HTML5, ', ' SCSS,', ' Javscript ES6, ', ' Github Page, ', 'Figma'],
                linkDemo: 'https://kyphong2k.github.io/restaurant-coffee/',
                linkRespository: 'https://github.com/kyphong2k/restaurant-coffee.git',
                dateFinished: 'Mar 14 2012 10:00:00 AM'
            },
            {
                img: require('../assets/images/projectImg/themoviecollection.PNG'),
                title: 'Built Movies Website use API',
                technologies: ['ReactJS, Redux-toolkit, tailwindcss'],
                linkRespository: 'https://github.com/kyphong2k/TheMoviesCollection.git',
                dateFinished: 'Mar 14 2012 10:00:00 AM'
            }
        ] 
    },
    reducers: {
        
    }
})

export default projectSlice.reducer;

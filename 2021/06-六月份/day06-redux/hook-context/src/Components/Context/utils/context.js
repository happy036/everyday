import React from 'react';
const themes={
    light:{
        foreground:'#000000',
        background:'#eeeeee'
    }
}
const mainContext=React.createContext(themes.light)
export default mainContext
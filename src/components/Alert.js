import React from 'react';

export default function Alert(prop) {
    const capital = (word)=>{
        let newString = word.toLowerCase();
        return newString.charAt(0).toUpperCase() + newString.slice(1);
        
    }
    return (
            <div style = {{height: '50px'}}>
            {prop.alert && <div className={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capital(prop.alert.type)}</strong> {prop.alert.msg}
                
            </div>}
            </div>
        
    );
}

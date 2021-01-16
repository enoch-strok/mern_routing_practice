import React from 'react';
const WordPageParameters = props => {

    return (
        <div>
            {isNaN(+props.id) ? <p 
            style={{
                color: props.textColor, 
                backgroundColor: props.backgroundColor
                }}>
                    The word is: {props.id}
                </p>
                : 
                <p>The number is: {props.id}</p>
            }

        </div>
    )
}
export default WordPageParameters;
import Typing from 'react-typing-animation';
import React from 'react';

export const AnimatedTypingComponent = (props) => {
    return (
    <Typing speed={200}>
        <span>{props.val}</span>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={20} />
    </Typing>
    )
};
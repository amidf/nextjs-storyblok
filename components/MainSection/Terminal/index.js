import React, { useRef, useEffect } from 'react';
import * as S from './styled';
import useGraph, { READ_MODE } from './useGraph';

const Terminal = () => {
    const ref = useRef();
    const { messages, mode, send } = useGraph();

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            send(e.target.innerText);
            e.target.innerText = '';
        }
    }

    const onClick = (e) => {
        e.target.querySelector('[contenteditable="true"]')?.focus();
    }

    useEffect(() => {
        if (!ref) return;
        ref.current.scrollTop = ref.current.scrollHeight + 20;
        ref.current.querySelector('[contenteditable="true"]')?.focus();
    }, [ref, messages])
    
    return (
        <S.Terminal ref={ref} onClick={onClick}>
            {messages.map(({ text, cmd }, i) => (
                <S.Line type={cmd} key={i}>
                    {['ai-log', 'ai'].includes(cmd) && <S.Root>ai: </S.Root>}
                    {['human-log', 'human'].includes(cmd) && <S.Root>human: </S.Root>}
                    {text}
                </S.Line>
            ))}
    
            {mode !== READ_MODE && (
                <S.Line style={{marginTop: 8}}>
                    <S.Root>$: </S.Root>
                    <S.Input autoFocus contentEditable onKeyDown={onKeyDown}></S.Input>
                </S.Line>
            )}
        </S.Terminal>
    )
}

export default Terminal;

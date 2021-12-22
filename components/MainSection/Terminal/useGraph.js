import { useEffect, useState } from 'react';

export const INIT_MODE = 0;
export const WRITE_MODE = 1;
export const READ_MODE = 2;
export const CALL_MODE = 2;

const useGraph = () => {
    const [socket, setSocket] = useState();
    const [messages, setMessages] = useState([]);
    const [mode, setMode] = useState(INIT_MODE);

    const addMessage = (msg) => setMessages((data => [...data, msg]));

    useEffect(() => {
        const url = process.env.GATSBY_DOCS_BACKEND_URL;
        const socket = new WebSocket(url);
        setSocket(socket);

        const handleIntersection = (entries) => {
            if (socket?.readyState !== 1) return;
            entries.map((entry) => {
                if (entry.isIntersecting) {
                    socket.send((JSON.stringify({ 
                        cmd: "navigation", 
                        currentSection: entry.target.id, 
                        nextSection: entry.target.nextSibling?.id, 
                        prevSection: entry.target.previousSibling?.id 
                    })));
                }
            });
        }

        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(handleIntersection, { threshold: .5 });
        sections.forEach(section => observer.observe(section));

        socket.onopen = () => {
            addMessage({ cmd: 'log', text: 'Enter your phone number to start a call\n or press "Enter" to start a chat now.' });
            setMode(INIT_MODE);
        }

        socket.onclose = () => {
            addMessage({ cmd: 'log', text: 'Connection interrupted' });
            setMode(READ_MODE);
        }

        socket.onmessage = ({ data }) => {
            const msg = JSON.parse(data);
            switch(msg.cmd) {
                case 'start_call':
                    setMode(READ_MODE);
                    return;
                
                case 'start_chat':
                    setMode(WRITE_MODE); 
                    return;
                
                case 'end_dialog':
                    setMode(INIT_MODE);
                    return;

                case 'error':
                    setMode(INIT_MODE);
                    addMessage(msg);
                    return;

                case 'ai':
                case 'log':
                case 'ai-log':
                case 'human-log':
                    addMessage(msg);
                    return;

                case 'click':
                    document.getElementById(msg.selector)?.click();
                    return;
                
                case 'goto':
                    document.getElementById(msg.section)?.scrollIntoView(true);
                    return;
            }
        }

        return () => {
            observer.disconnect();
            socket.close();
            setSocket(null);
        }
    }, []);

    const clean = () => setMessages([]);

    const send = (text) => {
        if (socket?.readyState !== 1) return;
    
        if (mode === INIT_MODE) {
            socket.send((JSON.stringify({ cmd: "call", payload: text })));
    
            if (text) addMessage({ cmd: 'human', text });
            else addMessage({ cmd: 'log', text: 'Chat mode activated.' });
    
            addMessage({ cmd: 'log', text: 'The dialog is initializing, please wait...' });
            setMode(READ_MODE);
            return;
        }
    
        addMessage({ cmd: 'human', text });
        socket.send((JSON.stringify({ cmd: "client", text })));
    }

    return { send, clean, mode, messages };
}

export default useGraph;
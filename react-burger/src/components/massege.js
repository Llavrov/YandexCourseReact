import React from 'react';

export function Massage(){
    let timeFadeOut = 8000
    let text = [
        'Where are you from?🌎',
        'What\'s your biggest life challenge? 🔑',
        'What do you for a living? 🧿'
    ]
    const massageStyle = {
        'background': 'white',
        'color': 'black',
        'display': 'inline-block',
        'padding': '20px',
        'borderRadius': '10px',
        'margin': '10px',
        'opacity': 0.7,
        'position': 'relative'
    }
    const btnStyle = {
        'position': 'absolute',
        'top': '20px',
        'right': '20px',
    }
    // Hook for close massage
    const [isOpen, setOpen] = React.useState(true);

    // Fade out after { timeFadeOut } milliseconds
    React.useEffect(() => {
        setTimeout(() => setOpen(false), timeFadeOut)
    }, []);

    return isOpen ? (
        <div style={massageStyle}>
            <svg style={btnStyle} onClick={() => setOpen(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9 7.58579L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L10.4142 9L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L9 10.4142L1.70711 17.7071C1.31658 18.0976 0.683417 18.0976 0.292893 17.7071C-0.0976311 17.3166 -0.0976311 16.6834 0.292893 16.2929L7.58579 9L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="black"/>
            </svg>
            <h3>Ask this to boost!</h3>
            <ul style={{'listStyle': 'none'}}>
                { text.map((item,index) => {
                        return (<li>{index+1 + ') '}{item}</li>)
                    }
                )}
            </ul>
        </div>
    ) : <></>
}
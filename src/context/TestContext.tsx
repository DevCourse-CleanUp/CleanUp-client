import styled from "styled-components";

function TestContext() {
    return (
        <TestContextStyle>
            <h1>TestContext</h1>
            <br />
            <div className="button-size">
                <h2>Button Size(fontSize, padding)</h2>
                <button className="large">theme.buttonSize.large</button>
                <button className="medium">theme.buttonSize.medium</button>
                <button className="small">theme.buttonSize.small</button>
            </div>
            <div className="colors">
                <h2>Colors</h2>
                <button className="primary">theme.color.primary</button>
                <button className="secondary">theme.color.secondary</button>
                <button className="thirdary">theme.color.thirdary</button>
                <button className="game">theme.color.game</button>
                <p className="text1">theme.color.text1</p>
                <p className="text2">theme.color.text2</p>
            </div>
            <div className="header-text">
                <h2>Header Text Style<br />(color, fontSize, fontWeight, textShadow)</h2>
                <p className="default">theme.headerText.default</p>
            </div>
        </TestContextStyle>
    )
}

const TestContextStyle = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;


    h2 {
        margin-top: 10px;
        margin-bottom: 10px;
        color: black;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;  
    }

    .button-size {
        margin-bottom: 20px;
        button {
            background-color: ${({theme}) => theme.color.primary};
            color: ${({theme}) => theme.buttonScheme.abled.color};
            border: 0px;
            font-weight: 700;
            margin-bottom: 10px;
        }
    }
    

    .large {
        font-size: ${({theme}) => theme.buttonSize.large.fontSize};
        padding: ${({theme}) => theme.buttonSize.large.padding};
        border-radius: ${({theme}) => theme.borderRadius.default};
    }

    .medium {
        font-size: ${({theme}) => theme.buttonSize.medium.fontSize};
        padding: ${({theme}) => theme.buttonSize.medium.padding};
        border-radius: ${({theme}) => theme.borderRadius.default};
    }

    .small {
        font-size: ${({theme}) => theme.buttonSize.small.fontSize};
        padding: ${({theme}) => theme.buttonSize.small.padding};
        border-radius: ${({theme}) => theme.borderRadius.default};
    }

    .colors {
        margin-bottom: 20px;

        button {
            font-size: ${({theme}) => theme.buttonSize.large.fontSize};
            padding: ${({theme}) => theme.buttonSize.large.padding};
            border-radius: ${({theme}) => theme.borderRadius.default};
            color: ${({theme}) => theme.buttonScheme.abled.color};
            border: 0px;
            font-weight: 700;
            margin-bottom: 10px;
        }

        .primary {
            background: ${({theme}) => theme.color.primary};
        }

        .secondary {
            background: ${({theme}) => theme.color.secondary};
        }

        .thirdary {
            background: ${({theme}) => theme.color.thirdary};
        }

        .game {
            background: ${({theme}) => theme.color.game};

        }

        p {
            font-size: 1.5rem;
        }

        .text1 {
            color: ${({theme}) => theme.color.text1};
        }

        .text2 {
            color: ${({theme}) => theme.color.text2};
        }
    }

    .header-text {
        p {
            color: ${({theme}) => theme.headerText.default.color};
            font-size: ${({theme}) => theme.headerText.default.fontSize};
            font-weight: ${({theme}) => theme.headerText.default.fontWeight};
            text-shadow: ${({theme}) => theme.headerText.default.textShadow};
        }
    }
`;

export default TestContext;

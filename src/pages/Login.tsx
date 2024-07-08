import styled from "styled-components";
import InputBox from "../components/common/InputBox";
import Button from "../components/common/Button";

const Login = () => {
    return (
        <>
            <LoginStyle>
                <form className="form">
                    <fieldset className="email">
                        <InputBox placeholder="이메일" inputType="email" />
                    </fieldset>
                    <fieldset className="password">
                        <InputBox placeholder="비밀번호" inputType="password" />
                    </fieldset>
                </form>
                <div className="button">
                    <Button size='large' scheme="abled">
                        Login
                    </Button>
                </div>
                <div>
                    <p>회원가입</p>
                </div>
            </LoginStyle>
        </>
    )
}

const LoginStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 12px;

    fieldset {
        display: flex;
        flex-direction: row;
        border: none;

        input {
            width: 300px;
            height: 45px;
            text-align: center;
            border: 2px solid #DDD;
        }

        svg {
            fill: ${({theme}) => theme.color.secondary};
        }
    }

    p {
        color: ${({theme}) => theme.color.text2};
    }
`;

export default Login;

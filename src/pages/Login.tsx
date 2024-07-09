import styled from "styled-components";
import InputBox from "../components/common/InputBox";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcFullTrash } from "react-icons/fc";
import { useRecoilState } from "recoil";
import { loginState } from "../store/loginStore";

interface LoginProps {
    email: string;
    password: string;
}

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

    const {register, handleSubmit, watch} = useForm<LoginProps>();
 
    const onSubmit = (data: LoginProps) => {
        // 모델, hook, api 작업 차후에
        // 로그인 hook => setIsLoggedIn(true)
        console.log(data);
    }

    return (
        <>
            <LoginStyle>
                <div className="title">
                    <FcFullTrash size="200" />
                    <h1>Clean Up</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="email">
                        <InputBox placeholder="이메일" inputType="email" {...register("email", {required: true})} />
                    </fieldset>
                    <fieldset className="password">
                        <InputBox placeholder="비밀번호" inputType="password" {...register("password", {required: true})} />
                    </fieldset>
                    <fieldset className="button">
                        <Button size="large" scheme="abled" type="submit" disabled={!watch("email") || !watch("password")}>
                            {"Login"}
                        </Button>
                    </fieldset>
                </form>
                <Link to={"/signup"}>
                    {"회원가입"}
                </Link>
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

    .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 50%;
        margin-bottom: 0;
        padding-bottom: 0;

        svg {
            height: 140px;
        }

        h1 {
            font-size: 6rem;
            color: ${({theme}) => theme.headerText.default.color};
            font-weight: ${({theme}) => theme.headerText.default.fontWeight};
            text-shadow: -3px 0px #bbb, 0px 3px #bbb, 3px 0px #bbb, 0px -3px #bbb;
            margin-bottom: 20px;
        }
    }

    fieldset {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: none;

        input {
            width: 300px;
            height: 45px;
            text-align: center;
            border: 2px solid #DDD;
        }

        button {
            margin-top: 20px;
            width: 150px;
        }

        svg {
            fill: ${({theme}) => theme.color.secondary};
        }
    }

    a {
        color: ${({theme}) => theme.color.text2};
        text-decoration: none;
    }
`;

export default Login;

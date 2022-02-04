import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

function AuthPage({ setUser }) {
    return (
        <main>
            <h1>Please sign up to begin shopping!</h1>
            <SignUpForm setUser={setUser}/>
            <LoginForm setUser={setUser}/>
        </main>
    )
}

export default AuthPage;
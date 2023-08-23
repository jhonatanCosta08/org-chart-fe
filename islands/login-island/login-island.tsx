import {loginStyles} from "../../static/routes-styles/loginStyles.ts";
import {useState} from "https://esm.sh/stable/preact@10.15.1/denonext/hooks.js";
import {createClient} from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
    "https://frowzelvdptuduccwhlq.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyb3d6ZWx2ZHB0dWR1Y2N3aGxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3OTE5NzIsImV4cCI6MjAwNTM2Nzk3Mn0.Tjl-GpIEtOILHM23RX3m93YuMLddHuPN-wW58cKVvrM"
);


export default function LoginIsland() {
    const [loginPage, setLoginPage] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const states = {
        signIn: {
            name: 'signIn',
            actionLabel: 'SIGN IN',
            toggleLabel: 'GO TO SIGN UP',
            supabaseAction: 'signInWithPassword'
        },
        signUp: {
            name: 'signUp',
            actionLabel: 'SIGN UP',
            toggleLabel: 'GO TO SIGN IN',
            supabaseAction: 'signUp'
        }
    };
    const [action, setAction] = useState(states.signIn);

    function toggleLoginConteiner(): void {
        switch (action.name) {
            case 'signIn':
                setAction(states.signUp);
                break;
            case "signUp":
                setAction(states.signIn);
                break;
        }
    }

    async function handleSignUpClick(event): void {
        event.preventDefault();
        const { data, error } = await supabase.auth[action.supabaseAction]({
            email: email,
            password: password,
        })
        if(!error) {
            console.log("data", data);
            window.location.href = '/dashboard';
        }
    }

    return (
        <>
            <div className='login-container' style={loginStyles.loginContainer}>
                <div className='login-box' style={loginStyles.loginBox}>
                    <img src="/img/logo-two.jpeg" alt="drawer-logo" style={loginStyles.loginLogo}/>

                    <div style={loginStyles.loginTitleContainer}>
                        <h1 style={loginStyles.loginTitle}>{action.actionLabel}</h1>
                    </div>

                    <form onSubmit={handleSignUpClick}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                        </div>

                        <div className="mb-6" style={loginStyles.btnContainer}>
                            <button type="submit" style={loginStyles.loginBtn}>{action.actionLabel}</button>
                            OR
                            <button onClick={() => toggleLoginConteiner()} type="button" style={loginStyles.loginBtn}>
                                {action.toggleLabel}
                            </button>
                        </div>

                        <div className="mb-6" style={loginStyles.btnContainer}>
                            <a href="#">Forgot password?</a>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
}
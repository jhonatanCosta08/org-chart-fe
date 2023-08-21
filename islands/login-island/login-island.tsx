import {loginStyles} from "../../static/routes-styles/loginStyles.ts";
import {useState} from "https://esm.sh/stable/preact@10.15.1/denonext/hooks.js";


export default function LoginIsland() {
    const [loginPage, setLoginPage] = useState(true);

    function toggleLoginConteiner(page: 'sign-in' | 'sign-up'): void {
        switch (page) {
            case "sign-in":
                setLoginPage(true);
                break;
            case "sign-up":
                setLoginPage(false);
                break;
        }
    }

    return (
        <>
            <div className='login-container' style={loginStyles.loginContainer}>
                <div className='login-box' style={loginStyles.loginBox}>
                    <img src="/img/logo-two.jpeg" alt="drawer-logo" style={loginStyles.loginLogo}/>

                    <div style={loginStyles.loginTitleContainer}>
                        <h1 style={loginStyles.loginTitle}>{loginPage ? 'SIGN IN' : 'SIGN UP'}</h1>
                    </div>

                    <form>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                            <input type="email" id="email" className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                        </div>

                        <div className="mb-6" style={loginStyles.btnContainer}>
                            <button type="submit" style={loginStyles.loginBtn}>{loginPage ? 'SIGN IN' : 'SIGN UP'}</button>
                            OR
                            <button onClick={() => toggleLoginConteiner(loginPage ? 'sign-up' : 'sign-in')} type="button" style={loginStyles.loginBtn}>
                                {loginPage ? 'GO TO SIGN IN' : 'GO TO SIGN UP'}
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
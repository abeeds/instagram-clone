import './login.css';

function LogInBox() {
    return ( 
        <div className="LogInBox">
            <a id='LogInText'>Log In</a>

            {/* Form */}
            <form className='LogInFields' method="post">
                <label>
                    Username<br/>
                    <input id="username" type="text" name="username" maxLength={64} required/>
                </label>

                <label>
                    Password<br/>
                    <input id="password" type="password" name="password" maxLength={32} required/>
                </label>

                <input type='submit' value='Submit'/>
            </form>

        </div>
    )
}

export default LogInBox;
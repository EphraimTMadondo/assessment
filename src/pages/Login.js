function LoginPage() {
  
  return (
    <div className="container">
        <section class="hero">
            <div class="hero-body">
                <p class="title">
                Login
                </p>
                <p class="subtitle">
                Enter Username and Password to Login
                </p>
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control">
                        <input class="input" type="text" />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input class="input" type="password" />
                    </div>
                </div>
                <button class="button is-primary">Login</button>
            </div>
        </section>
    </div>
  );
}

export default LoginPage;

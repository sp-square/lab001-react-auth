function AuthPage() {
  return (
    <section id="auth-form">
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" minLength={6} required />
        </div>
        {error && <p>{error}</p>}
        <button className="btn">
          Log In / Sign Up
        </button>
      </form>
      <button className="btn-alt">
        Create a new user / Log in
      </button>
    </section>
  );
}

export default AuthPage;

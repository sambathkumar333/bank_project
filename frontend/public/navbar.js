function NavBar(){   
  const [user, setUser] = React.useState();  
  setInterval(() => {
    const user = localStorage.getItem("Name");
    setUser(user);
  },500);
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
      <a className="navbar-brand" href="#">BadBank</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">All Data</a>
          </li>   
          
        </ul>            
      </div>    
      <div>
        <ul className="navbar-nav">
        <li className="nav-item">          
            <label>{user}</label>
          </li>         
          
        </ul>
          
        </div>  
      
    </nav>
  );
}
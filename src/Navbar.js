function Navbar(){
    return (
    <>
    <div className="navbar">
<div className="logo">
<p>HF</p>
</div>
<div className="menu">
  <ul>
    <li>
      <a href='/'><i className="bi bi-camera-reels-fill"></i>LIVE</a></li>
    <li><a href='/'><i className="bi bi-postcard-fill"></i>MEMBERSHIP</a></li>
    <li><a href='/'><i className="bi bi-clipboard-data-fill"></i>PLANS</a></li>
    <li><a href='/'><i className="bi bi-grid-fill"></i>MORE</a></li>
  </ul>
</div>
<div className="login"><p><i className="bi bi-person-fill"></i>Login</p></div>
</div>
    </>
    )
}
export default Navbar;
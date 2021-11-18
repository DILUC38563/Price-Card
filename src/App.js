
import './App.css';

function App() {
  return (
    <div className="App">
        <div className = "First">
          <h2>Free</h2>
          <h4 className = "more">$0<span className = "less">/month</span></h4>
          <div className = "border"></div>
          <div className = "content">
          <p>✓ Single User</p>
          <p>✓ 5GB Storage</p>
          <p>✓ Unlimited Public Projects</p>
          <p>✓ Community Access</p>
          <p className = "light">✘ Unlimited Private Projects</p>
          <p className = "light">✘ Dedicated Phone Support</p>
          <p className = "light">✘ Free Subdomain</p>
          <p className = "light">✘ Monthly Status Reports</p>
          <button className = "button">Button</button>
          </div>
        </div>


        <div className = "First">
          <h2>Plus</h2>
          <h4 className = "more">$9<span className = "less">/month</span></h4>
          <div className = "border"></div>
          <div className = "content">
          <p className = "bold">✓ 5 Users</p>
          <p>✓ 50GB Storage</p>
          <p>✓ Unlimited Public Projects</p>
          <p>✓ Community Access</p>
          <p>✓ Unlimited Private Projects</p>
          <p>✓ Dedicated Phone Support</p>
          <p>✓ Free Subdomain</p>
          <p className = "light">✘ Monthly Status Reports</p>
          <button className = "button">Button</button>
          </div>
        </div>  


        <div className = "First">
          <h2>Pro</h2>
          <h4 className = "more">$49<span className = "less">/month</span></h4>
          <div className = "border"></div>
          <div className = "content">
          <p className = "bold">✓ Unlimited Users</p>
          <p>✓ 150GB Storage</p>
          <p>✓ Unlimited Public Projects</p>
          <p>✓ Community Access</p>
          <p>✓ Unlimited Private Projects</p>
          <p>✓ Dedicated Phone Support</p>
          <p>✓ Free Subdomain</p>
          <p>✓ Monthly Status Reports</p>
          <button className = "button">Button</button>
          </div>
        </div>  

    </div>
  );
}

export default App;

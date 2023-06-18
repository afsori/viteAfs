import {
	Link,
} from "react-router-dom";

function Chart() {
  return (
    <div>
      <div>Chart page</div>
      <Link style={{marginRight:'10px'}} to="/">Home page</Link>
      <Link style={{marginRight:'10px'}} to="/about">About Page</Link>
      <Link style={{marginRight:'10px'}} to="/blog">Blog App Page</Link>
      <Link style={{marginRight:'10px'}} to="/chart">Chart App Page</Link>
    </div>
  )
}

export default Chart
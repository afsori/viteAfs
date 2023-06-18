import { Outlet } from "react-router-dom"

function LayoutBlogPage() {
  return (
    <div>
      <h2>Blog Layout</h2>
      <Outlet />  
    </div>
  )
}

export default LayoutBlogPage
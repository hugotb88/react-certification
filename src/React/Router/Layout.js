import { Outlet, Link } from "react-router-dom";

/*
The Layout component has <Outlet> and <Link> elements.
The <Outlet> renders the current route selected.
<Link> is used to set the URL and keep track of browsing history.
Anytime we link to an internal path, we will use <Link> instead of <a href="">.
The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu
*/

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/events">Football Event</Link>
          </li>
          <li>
            <Link to="/lists">Lists on React</Link>
          </li>
          <li>
            <Link to="/keys">Keys on React</Link>
          </li>
          <li>
            <Link to="/formBasic">Basic Form</Link>
          </li>
          <li>
            <Link to="/formSubmit">Submit Form</Link>
          </li>
          <li>
            <Link to="/formMultipleFields">Submit Form with Multiple Fields</Link>
          </li>
          <li>
            <Link to="/formTextarea">Form with Textarea attribute</Link>
          </li>
          <li>
            <Link to="/formSelect">Form with Select (dropdown)</Link>
          </li>
          <li>
            <Link to="/cssInline">CSS Inline</Link>
          </li>
          <li>
            <Link to="/cssJavaScriptObject">CSS using JavaScript Object</Link>
          </li>
          <li>
            <Link to="/cssModule">CSS Module example</Link>
          </li>
          <li>
            <Link to="/headerWithSASS">SASS Example</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
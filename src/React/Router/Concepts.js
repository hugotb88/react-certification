/*
Create React App doesn't include page routing.
React Router is the most popular solution.
*/

// To add React Youter
npm i -D react-router-dom

// Components related
- Layout.js
- Home.js
- Blog.js
- Contact.js
- NoPage.js

** Review the index.js page

/*

We wrap our content first with <BrowserRouter>.
Then we define our <Routes>. An application can have multiple <Routes>. Our basic example only uses one.
<Route>s can be nested. The first <Route> has a path of / and renders the Layout component.
The nested <Route>s inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs.
The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.
Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.

*/

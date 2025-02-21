import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./React/Router/Layout";
import Blogs from "./React/Router/Blog";
import Contact from "./React/Router/Contact";
import NoPage from "./React/Router/NoPage";
import Home from "./React/Router/Home";
import Football from "./React/Events/Football";
import Garage from './React/Lists/Garage';
import GarageKeyExample from './React/Lists/GarageKeyExample';
import MyForm from './React/Forms/MyForm';
import MyformSubmit from './React/Forms/MyFormSubmit';
import MyFormMultipleFields from './React/Forms/MyFormMultipleFields';
import FormTextarea from './React/Forms/TextArea';
import FormSelect from './React/Forms/Select';
import { CSSInline } from './React/Styling/CSSInline';
import { CSSJavaScriptObject } from './React/Styling/CSSJavaScriptObject';
import './React/Styling/exampleStylesheet.css';
import { CarWithCSSModule } from './React/Styling/CarWithCSSModule';
import { HeaderWithSASS } from './React/Styiling_SASS/HeaderWithSASS';
import CarUseState  from './React/Hooks/useState/useState_example';
import Timer from './React/Hooks/useEffect/useEffects_example';
import Counter from './React/Hooks/useEffect/useEffect_example_2';
import { Component1 } from './React/Hooks/useContext/Component1';
import UseRefBasic from './React/Hooks/useRef/useRef_basic';
import UseRefAccesingDOM from './React/Hooks/useRef/useRef_accesingDOM';
import UseRefTrackingStateChanges from './React/Hooks/useRef/useRef_trackingStateChanges';
/*

We wrap our content first with <BrowserRouter>.
Then we define our <Routes>. An application can have multiple <Routes>. Our basic example only uses one.
<Route>s can be nested. The first <Route> has a path of / and renders the Layout component.
The nested <Route>s inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs.
The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.
Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.

*/
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Layout/> } >
                    <Route index element={ <Home /> } />
                    <Route path="blogs" element={ <Blogs /> } />
                    <Route path="contact" element={ <Contact /> } />
                    <Route path="events" element={ <Football /> } />
                    <Route path="lists" element={ <Garage /> } />
                    <Route path="keys" element={ <GarageKeyExample /> } />
                    <Route path="formBasic" element={ <MyForm /> } />
                    <Route path="formSubmit" element={ <MyformSubmit /> } />
                    <Route path="formMultipleFields" element={ <MyFormMultipleFields /> } />
                    <Route path="formTextarea" element={ <FormTextarea /> } />
                    <Route path="formSelect" element={ <FormSelect /> } />
                    <Route path="CSSInline" element={ <CSSInline /> } />
                    <Route path="CSSJavaScriptObject" element={ <CSSJavaScriptObject /> } />
                    <Route path="cssModule" element={ <CarWithCSSModule /> } />
                    <Route path="headerWithSASS" element={ <HeaderWithSASS /> } />
                    <Route path="useStateExample" element={ <CarUseState /> } />
                    <Route path="useEffectExample" element={ <Timer /> } />
                    <Route path="useEffectExample2" element={ <Counter /> } />
                    <Route path="useContextExample" element={ <Component1 /> } />
                    <Route path="useRefBasicExample" element={ <UseRefBasic /> } />
                    <Route path="useRefAccesingDOMExample" element={ <UseRefAccesingDOM /> } />
                    <Route path="useRefTrackingStateChanges" element={ <UseRefTrackingStateChanges /> } />
                    <Route path="*" element={ <NoPage /> } />
                </Route>
            </Routes>
        </BrowserRouter>
        
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
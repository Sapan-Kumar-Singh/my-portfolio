import { useEffect, useRef, useState } from "react";
import { useLocation} from "react-router-dom";
import Navbar from "./src/navbar";
import SocialMedia from "./src/components/socialMedia";
import InfiniteScroll from "react-infinite-scroll-component";
import HomePage from "./src/pages/homePage";
import AboutPage from "./src/pages/aboutPage";
import ResumePage from "./src/pages/resumePage";
import Services from "./src/pages/servicesPage";
import Skills from "./src/pages/skills";
import PageNotFound from "./src/pages/pageNotFound";
import ContactPage from "./src/pages/contactPage";

const App = () => {
  const [pages, setPages] = useState([
    { key: "/", component: <HomePage /> },
]);
  const extraPages = useRef([
    { key: "about", component: <AboutPage /> },
    { key: "resume", component: <ResumePage /> },
    { key: "services", component: <Services /> },
    { key: "skills", component: <Skills /> },
    { key: "projects", component: <PageNotFound/> },
    { key: "contact", component: <ContactPage /> },
  ]);
  const [count, setCount] = useState(1); // Start with preloaded pages
  const [hasMore, setHasMore] = useState(true);
  const location = useLocation();

  const fetchMorePage = () => {
    if (count >extraPages.current.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      const nextPage = extraPages.current[count - 1]; // Adjust index for preloaded pages
      if (nextPage) {
        setPages((prevPages) => [...prevPages, nextPage]);
        setCount((prevCount) => prevCount + 1);
      }
    }, 500);
  };

  useEffect(() => {
    const currentPath = location.pathname.slice(1) || "/";
    const currentIndex = extraPages.current.findIndex((page) => page.key === currentPath);
  
    if (currentIndex >= 0 && currentIndex + 1 > pages.length) {
      setPages([
        ...pages,
        ...extraPages.current.slice(0, currentIndex + 1),
      ]);
      setCount(currentIndex + 1);
    }
  
    // Prevent unnecessary scrolls
    const scrollToSection = () => {
      const section = document.getElementById(currentPath);
      if (section) {
        const currentScroll = window.scrollY; 
        const targetOffset = section.offsetTop;
        if (Math.abs(currentScroll - targetOffset) > 50) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
  
    const timer = setTimeout(scrollToSection, 200);
    return () => clearTimeout(timer);
  }, [location]);
  
 
  return (
    <>
      <div className="fixed t-0 z-10 w-full">
        <Navbar />
      </div>

      <SocialMedia />

      <div className="pt-20">
        <InfiniteScroll
          next={fetchMorePage}
          hasMore={hasMore}
          loader={<div>Loading more content...</div>}
          dataLength={pages.length}
        >
          {pages.map((page, index) => (
            <div key={`${index}_${page.key}`} id={page.key}>
              {page.component}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default App;

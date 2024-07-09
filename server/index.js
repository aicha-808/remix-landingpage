import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts, Link, NavLink } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Bars3Icon, PlayCircleIcon, MegaphoneIcon, ArrowRightCircleIcon, PaperAirplaneIcon, CogIcon, Cog6ToothIcon, UserGroupIcon, UserMinusIcon, StarIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import PropTypes from "prop-types";
import { Carousel } from "flowbite-react";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
      /* @__PURE__ */ jsx("link", { href: "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css", rel: "stylesheet" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" }),
      /* @__PURE__ */ jsx("link", { href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Montserrat:wght@400;700&display=swap", rel: "stylesheet" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { className: "max-w-screen-3xl px-5 py-1", children: [
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App
}, Symbol.toStringTag, { value: "Module" }));
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return /* @__PURE__ */ jsx("nav", { className: "bg-white px-2 py-4 mt-3 fixed top-0 left-0 right-0", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx(Link, { to: "#home", className: "space-x-3 rtl:space-x-reverse", children: /* @__PURE__ */ jsx("span", { className: "text-3xl font-semibold text-blue-600 font-display px-1", children: "Colab" }) }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setMenuOpen(!menuOpen),
          type: "button",
          className: "border inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
          "aria-controls": "navbar-default",
          "aria-expanded": menuOpen ? "true" : "false",
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle navigation" }),
            /* @__PURE__ */ jsx(Bars3Icon, { className: "h-6 w-6" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hidden md:flex flex-grow justify-center", children: [
      /* @__PURE__ */ jsxs("ul", { className: "font-medium flex mx-auto text-lg p-4 space-x-8 rtl:space-x-reverse", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "#home", className: "font-sans block py-2 px-3 text-gray-900 rounded border-0 hover:border-b-2 hover:border-indigo-500 md:p-0 dark:text-white", children: "Home" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "#projects", className: "font-sans block py-2 px-3 text-gray-900 rounded hover:border-b-2 hover:border-green-500 md:p-0 dark:text-white", children: "Projects" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "#services", className: "font-sans block py-2 px-3 text-gray-900 rounded hover:border-b-2 hover:border-green-500 md:p-0 dark:text-white", children: "Services" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "#blog", className: "font-sans block py-2 px-3 text-gray-900 rounded hover:border-b-2 hover:border-green-500 md:p-0 dark:text-white", children: "Blog" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "#about", className: "font-sans block py-2 px-3 text-gray-900 rounded hover:border-b-2 hover:border-green-500 md:p-0 dark:text-white", children: "About" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "#contacts", className: "font-sans block py-2 px-3 text-gray-900 rounded hover:border-b-2 hover:border-green-500 md:p-0 dark:text-white", children: "Contacts" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 text-lg items-center", children: [
        /* @__PURE__ */ jsx(NavLink, { to: "/signin", className: "font-medium", children: "Sign In" }),
        /* @__PURE__ */ jsx(NavLink, { to: "/login", className: "font-medium p-1 w-20 bg-blue-500 text-white text-center rounded", children: "Log In" })
      ] })
    ] })
  ] }) });
}
function Home() {
  return /* @__PURE__ */ jsxs("section", { className: "container mx-auto  mt-40  px-3 lg:flex lg:justify-between md:flex md:justify-between", id: "home", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2 h-auto mx-auto w-block", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-blue-500 lg:text-sm px-3 font-semibold font-display text-xl", children: "A Trusted Digital Agency" }),
      /* @__PURE__ */ jsx("div", { className: "lg:w-80 mb-2 w-80", children: /* @__PURE__ */ jsx("h4", { className: "font-bold text-3xl font-sans", children: "We’re A Creative Digital Agency." }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:w-96 px-3 mb-2 w-block md:w-96", children: /* @__PURE__ */ jsx("p", { className: "lg:text-md text-lg font-display ", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. " }) }),
      /* @__PURE__ */ jsxs("div", { className: "bouton mt-8 flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("button", { className: "p-1 text-lg w-48  lg:p-1 lg:w-32 lg:text-sm bg-blue-500 text-white rounded font-sans", children: " Get started" }),
        /* @__PURE__ */ jsxs("button", { className: "p-1 text-lg w-48 lg:p-1 lg:w-32  lg:text-sm ml-3 flex items-center space-x-2 font-sans", children: [
          /* @__PURE__ */ jsx(PlayCircleIcon, { className: "h-4 w-4 text-green-500 mr-1" }),
          "How It Works"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: " lg:w-1/2 lg:h-auto  mt-0 mx-0 lg:px-5 ", children: /* @__PURE__ */ jsx("img", { src: "/home.png", alt: "homeImg", className: "h-64 w-96 object-cover lg:max-w-lg" }) })
  ] });
}
function Logo() {
  return /* @__PURE__ */ jsxs("section", { className: "container grid grid-cols-2 gap-3 lg:flex lg:justify-between items-center mt-9 lg:mt-24 md:flex lg:justify-between   px-3 mx-auto ", id: "projects", children: [
    /* @__PURE__ */ jsx("div", { className: " w-32 h-15  mb-3", children: /* @__PURE__ */ jsx("img", { src: "/logo1.png", alt: "", className: " fill " }) }),
    /* @__PURE__ */ jsx("div", { className: " w-32 h-15 mb-3", children: /* @__PURE__ */ jsx("img", { src: "/logo2.jpg", alt: "", className: " fill" }) }),
    /* @__PURE__ */ jsx("div", { className: " w-32 h-15 mb-3", children: /* @__PURE__ */ jsx("img", { src: "/logo3.png", alt: "", className: " fill" }) }),
    /* @__PURE__ */ jsx("div", { className: " w-32 h-15 mb-3", children: /* @__PURE__ */ jsx("img", { src: "/logo4.jpg", alt: "", className: " fill" }) })
  ] });
}
const Entete = ({ titre, sousTitre, desc }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { className: "text-blue-500 md:block  px-3 font-semibold text-center font-display text-xl", children: titre }),
    /* @__PURE__ */ jsx("div", { className: "w-block mb-3 md:w-block", children: /* @__PURE__ */ jsx("h4", { className: "font-bold text-2xl lg:text-3xl text-center font-sans", children: sousTitre }) }),
    /* @__PURE__ */ jsx("div", { className: "w-3/5 px-3 mb-3 md:w-block mx-auto", children: /* @__PURE__ */ jsx("p", { className: "text-md text-center font-display", children: desc }) })
  ] });
};
Entete.propTypes = {
  titre: PropTypes.string.isRequired,
  sousTitre: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};
const CardService = ({ Icon, titre, desc, Fleche }) => {
  return /* @__PURE__ */ jsxs("div", { className: "mt-8 md:w-auto border rounded-md p-4 w-80 mx-auto h-auto lg:h-75 lg:w-96 sm:w-block sm:h-auto \r\n    hover:bg-blue-600  hover:text-white", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-3", children: /* @__PURE__ */ jsx("div", { className: " rounded-full bg-blue-500 flex items-center justify-center p-3", children: /* @__PURE__ */ jsx(Icon, { className: "h-9 w-9 text-white" }) }) }),
    /* @__PURE__ */ jsx("h4", { className: "text-center mb-3 font-semibold font-sans text-xl", children: titre }),
    /* @__PURE__ */ jsx("div", { className: "text-center mb-3  flex items-center justify-center", children: /* @__PURE__ */ jsx("p", { className: "text-md font-sans", children: desc }) }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-3", children: /* @__PURE__ */ jsx(Fleche, { className: "h-6 w-6 " }) })
  ] });
};
CardService.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  titre: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  Fleche: PropTypes.elementType.isRequired
};
const Services = () => {
  const cardData = [
    { Icon: MegaphoneIcon, titre: "SEO", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Fleche: ArrowRightCircleIcon },
    { Icon: PaperAirplaneIcon, titre: "Marketing", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Fleche: ArrowRightCircleIcon },
    { Icon: CogIcon, titre: "Promotion", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Fleche: ArrowRightCircleIcon }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "container lg:mx-auto  lg:mt-24 mt-9 w-block md:w-block", id: "services", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:flex items-center lg:justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(
      Entete,
      {
        titre: "Our Services",
        sousTitre: "Perfect Solution For Your Business",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-0", children: cardData.map((card, index) => /* @__PURE__ */ jsx(
      CardService,
      {
        Icon: card.Icon,
        titre: card.titre,
        desc: card.desc,
        Fleche: card.Fleche
      },
      index
    )) })
  ] });
};
const BlogSingle = ({ Icon, titre, desc }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex mb-2 gap-8", children: [
    /* @__PURE__ */ jsx("div", { className: "left", children: /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center p-2", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-white" }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "", children: [
      /* @__PURE__ */ jsx("h4", { className: " mb-2 font-semibold text-lg font-sans text-xl ", children: titre }),
      /* @__PURE__ */ jsx("div", { className: " mb-2  w-80 lg:text-xs text-md font-sans", children: /* @__PURE__ */ jsx("p", { children: desc }) })
    ] })
  ] }) });
};
BlogSingle.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  titre: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};
const Blog = () => {
  const blogdata = [
    { Icon: Cog6ToothIcon, titre: "Working Process", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { Icon: UserGroupIcon, titre: "Dedicated Team", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { Icon: UserMinusIcon, titre: "24/7 Support", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "container mt-9 mx-auto  lg:flex lg:justify-between lg:mt-24 w-auto", id: "blog", children: [
    /* @__PURE__ */ jsxs("div", { className: "left w-3/5 h-[40rem] md:w-block  p-1 md:h-auto ", children: [
      /* @__PURE__ */ jsxs("div", { className: "top", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-blue-500 md:block lg:text-lg  font-semibold mb-2 font-display text-xl", children: "Why You Choose Us?" }),
        /* @__PURE__ */ jsx("div", { className: "w-96 mb-2 md:w-block px-4", children: /* @__PURE__ */ jsx("h4", { className: "font-bold  text-2xl lg:text-xl font-sans", children: "Specialist in aviding clients on financial challenges" }) }),
        /* @__PURE__ */ jsx("div", { className: "w-96 px-3 mb-2 md:w-block px-2", children: /* @__PURE__ */ jsx("p", { className: "text-md font-sans", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. " }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 mt-8 ", children: blogdata.map((blog, index) => /* @__PURE__ */ jsx(
        BlogSingle,
        {
          Icon: blog.Icon,
          titre: blog.titre,
          desc: blog.desc
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "  p-3  ", children: /* @__PURE__ */ jsx("img", { src: "/etudiant.jpg", alt: "", className: " h-auto  lg:me-auto lg:rounded-lg lg:h-auto lg:max-w-full" }) })
  ] });
};
const About = () => {
  return /* @__PURE__ */ jsxs("section", { className: "container mx-auto mt-9 md:mt-24 lg:mt-24 md:w-auto", id: "about", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(
      Entete,
      {
        titre: "Client Testmonials",
        sousTitre: "What our clients tell about us?"
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: " w-1/2 mx-auto h-96  ", children: /* @__PURE__ */ jsxs(Carousel, { className: "mt-0 pt-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "dark:bg-gray-700 dark:text-white border  rounded-lg p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "profil flex gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center p-1", children: /* @__PURE__ */ jsx("img", { src: "/avatar.jfif", className: "h-6 w-6", alt: "" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold font-sans", children: "Jane Cooper" }),
              /* @__PURE__ */ jsx("p", { className: "font-sans ", children: "01/01/2021" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "icone flex gap-2", children: [
            /* @__PURE__ */ jsx(StarIcon, { className: "h-4 w-4 text-orange-500" }),
            /* @__PURE__ */ jsx(StarIcon, { className: "h-4 w-4 text-orange-500" }),
            /* @__PURE__ */ jsx(StarIcon, { className: "h-4 w-4 text-orange-500" }),
            /* @__PURE__ */ jsx(StarIcon, { className: "h-4 w-4 text-orange-500" }),
            /* @__PURE__ */ jsx(StarIcon, { className: "h-4 w-4 text-orange-500" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "font-semibold px-3 mt-3 display", children: "Amazing Service" }),
        /* @__PURE__ */ jsx("div", { className: " px-3 mb-3 md:w-block", children: /* @__PURE__ */ jsx("p", { className: "text-xs leading-5 font-sans", children: "Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde.   Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad.  Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde.   Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde. Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad." }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "dark:bg-gray-700 dark:text-white border  rounded-lg p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "profil flex gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center p-1", children: /* @__PURE__ */ jsx("img", { src: "/avatar.jfif", className: "h-6 w-6", alt: "" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold font-sans", children: "Jonh Denis" }),
              /* @__PURE__ */ jsx("p", { className: "font-sans ", children: "01/01/2021" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "icone flex gap-2", children: [
            /* @__PURE__ */ jsx(StarIcon, { className: "h-4 w-4 text-orange-500" }),
            /* @__PURE__ */ jsx(StarIcon, { className: "h-4 w-4 text-orange-500" }),
            /* @__PURE__ */ jsx(StarIcon, { className: "h-4 w-4 text-orange-500" }),
            /* @__PURE__ */ jsx(StarIcon, { className: "h-4 w-4 text-orange-500" }),
            /* @__PURE__ */ jsx(StarIcon, { className: "h-4 w-4 text-orange-500" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "font-semibold px-3 mt-3 display", children: "Amazing Service" }),
        /* @__PURE__ */ jsx("div", { className: " px-3 mb-3 md:w-block", children: /* @__PURE__ */ jsx("p", { className: "text-xs leading-5 font-sans", children: "Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde.   Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad.  Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde.   Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde. Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad." }) })
      ] })
    ] }) })
  ] });
};
function Contact() {
  return /* @__PURE__ */ jsxs("section", { className: "container mt-9 p-5 lg:mx-auto md:mx-auto lg:flex lg:justify-between lg:mt-24 md:w-auto", id: "contacts", children: [
    /* @__PURE__ */ jsxs("div", { className: " lg:w-1/2 h-64 w-block ", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-blue-500 block font-display text-xl font-semibold", children: "Contact Us" }),
      /* @__PURE__ */ jsx("div", { className: "lg:w-80 mt-3 w-auto", children: /* @__PURE__ */ jsx("h4", { className: "font-bold  text-3xl font-sans", children: "Ready to get started?" }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:w-96  mt-4 w-block", children: /* @__PURE__ */ jsx("p", { className: "lg:text-md text-lg font-sans", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. " }) }),
      /* @__PURE__ */ jsx("div", { className: "bouton mt-6 ", children: /* @__PURE__ */ jsx("button", { className: "p-1 text-lg w-48 lg:py-2 lg:px-3  lg:w-32 bg-blue-500 text-white rounded font-sans", children: "Get In Touch" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:w-1/2 h-64 lg:h-64 md:w-block ", children: /* @__PURE__ */ jsx("img", { src: "/entre.jpg", alt: "homeImg", className: "h-auto lg:cover lg:max-w-lg lg:me-auto" }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("section", { className: "container mx-auto mt-9  lg:mt-24 :w-auto font-display", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:flex lg:justify-between  lg:gap-2  grid-cols-1 gap-1  ", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-24", children: [
          " ",
          /* @__PURE__ */ jsx("h1", { className: "self-center  font-semibold whitespace-nowrap text-dark-600 bg-blue-600 font-display text-3xl", children: "Cölab" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-96 mt-3 md:w-block", children: /* @__PURE__ */ jsx("p", { className: "text-sm leading-4 font-sans leading-5", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas lorem arcu adipiscing quis. " }) }),
        /* @__PURE__ */ jsxs("div", { className: " flex gap-3 mt-3", children: [
          /* @__PURE__ */ jsx("span", { className: "", children: /* @__PURE__ */ jsx("i", { className: "fab fa-facebook" }) }),
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("i", { className: "fab fa-linkedin" }) }),
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("i", { className: "fab fa-pinterest" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold", children: "Links" }),
        /* @__PURE__ */ jsxs("ul", { className: "w-block mt-2 font-display leading-5", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            " ",
            /* @__PURE__ */ jsx(Link, { to: "/about", className: "text-sm", children: "About" })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            " ",
            /* @__PURE__ */ jsx(Link, { to: "/services", className: "text-sm", children: "Services" })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            " ",
            /* @__PURE__ */ jsx(Link, { to: "/blog", className: "text-sm", children: "Blog" })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            " ",
            /* @__PURE__ */ jsx(Link, { to: "/about", className: "text-sm", children: "About" })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            " ",
            /* @__PURE__ */ jsx(Link, { to: "/Contact", className: "text-sm", children: "Contacts" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold  leading-4", children: "Our Office" }),
        /* @__PURE__ */ jsx("div", { className: "w-96 mt-3 md:w-block", children: /* @__PURE__ */ jsx("p", { className: "text-sm font-display  leading-5", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas lorem arcu adipiscing quis. " }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "mt-4 font-display" }),
    /* @__PURE__ */ jsx("p", { className: "text-center mt-2  leading-4 text-sm", children: "© 2022 All Righjt Reserved" })
  ] });
}
const Plan = ({ prix, mois, title, desc, text1, text2, text3, text4, text5, butName, classNameText4, classNameText5 }) => {
  return /* @__PURE__ */ jsxs("div", { className: "p-4 hover:bg-blue-600 hover:rounded-lg hover:text-white hover:scroll-my-6", children: [
    /* @__PURE__ */ jsxs("h3", { className: "", children: [
      /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold font-sans", children: [
        prix,
        "  "
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-xs text-gray font-sans", children: mois })
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "font-semibold  text-lg mt-3 font-dispay", children: title }),
    /* @__PURE__ */ jsx("div", { className: "lg:w-48 w-block mt-2 lg:text-sm text-gray font-sans text-lg", children: /* @__PURE__ */ jsx("p", { children: desc }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-2 text-sm text-gray  font-sans", children: [
      /* @__PURE__ */ jsxs("p", { className: "", children: [
        /* @__PURE__ */ jsx("i", { className: "fas fa-check-circle" }),
        /* @__PURE__ */ jsx("span", { className: "ml-2", children: text1 })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "", children: [
        /* @__PURE__ */ jsx("i", { className: "fas fa-check-circle" }),
        /* @__PURE__ */ jsx("span", { className: "ml-2", children: text2 })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "", children: [
        /* @__PURE__ */ jsx("i", { className: "fas fa-check-circle" }),
        /* @__PURE__ */ jsx("span", { className: "ml-2", children: text3 })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: classNameText4, children: [
        /* @__PURE__ */ jsx("i", { className: "fas fa-check-circle" }),
        /* @__PURE__ */ jsx("span", { className: "ml-2", children: text4 })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: classNameText5, children: [
        /* @__PURE__ */ jsx("i", { className: "fas fa-check-circle" }),
        /* @__PURE__ */ jsx("span", { className: "ml-2", children: text5 })
      ] })
    ] }),
    /* @__PURE__ */ jsx("button", { className: "rounded-lg py-2 px-9 mt-24 border hover:bg-white font-sans", children: butName })
  ] });
};
Plan.propTypes = {
  title: PropTypes.string.isRequired,
  prix: PropTypes.string.isRequired,
  mois: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired,
  text4: PropTypes.string.isRequired,
  text5: PropTypes.string.isRequired,
  butName: PropTypes.string.isRequired,
  classNameText4: PropTypes.string,
  classNameText5: PropTypes.string
};
const Pricing = () => {
  const planData = [
    { prix: "$19", mois: "/month", title: "Starter", desc: "Unleash the power of automation.", text1: "Multi-step Zaps", text2: "3 Premium Apps", text3: "2 Users team", classNameText4: "hidden", classNameText5: "hidden", butName: "Choose plan" },
    { prix: "$54", mois: "/month", title: "Professional", desc: "Advanced tools to take your work to the next level.", text1: "Multi-step Zaps", text2: "Unlimited Premium Apps", text3: "50 Users team", text4: "Shared Workspace", classNameText5: "hidden", butName: "Choose plan" },
    { prix: "$89", mois: "/month", title: "Company", desc: "Automation plus enterprise-grade features.", text1: "Multi-step Zap", text2: "Unlimited Premium Apps", text3: "Unlimited Users Team", text4: "Advanced Admin", text5: "Custom Data Retention", butName: "Choose plan" }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "container mx-auto  mt-24 md:w-auto ", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(
      Entete,
      {
        titre: "Pricing Plan",
        sousTitre: "Choose Your Plan",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border rounded-md mt-8 mx-auto p-5 w-4/5 sm:mx-block md:mx-block", children: planData.map((plan, index) => /* @__PURE__ */ jsx(
      Plan,
      {
        prix: plan.prix,
        mois: plan.mois,
        title: plan.title,
        desc: plan.desc,
        text1: plan.text1,
        text2: plan.text2,
        text3: plan.text3,
        text4: plan.text4,
        text5: plan.text5,
        classNameText4: plan.classNameText4,
        classNameText5: plan.classNameText5,
        butName: plan.butName
      },
      index
    )) })
  ] });
};
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: " ", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Home, {}),
    /* @__PURE__ */ jsx(Logo, {}),
    /* @__PURE__ */ jsx(Services, {}),
    /* @__PURE__ */ jsx(Blog, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Pricing, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DQH8Ta4P.js", "imports": ["/assets/components-Cy-I24B7.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-DwxQsT2t.js", "imports": ["/assets/components-Cy-I24B7.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-DCLNYQBr.js", "imports": ["/assets/components-Cy-I24B7.js"], "css": [] } }, "url": "/assets/manifest-930c9826.js", "version": "930c9826" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "unstable_singleFetch": false, "unstable_fogOfWar": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};

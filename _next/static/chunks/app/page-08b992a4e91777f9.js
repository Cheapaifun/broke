(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        1538: function(e, t, a) {
            Promise.resolve().then(a.bind(a, 9931))
        },
        9931: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return A
                }
            });
            var s = a(7437),
                i = a(2265),
                r = a(5293),
                l = a(535),
                n = a(1994),
                o = a(3335);

            function c() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, o.m6)((0, n.W)(t))
            }
            let d = (0, l.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline"
                        },
                        size: {
                            default: "h-10 px-4 py-2",
                            sm: "h-9 rounded-md px-3",
                            lg: "h-11 rounded-md px-8",
                            icon: "h-10 w-10"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                m = i.forwardRef((e, t) => {
                    let {
                        className: a,
                        variant: i,
                        size: l,
                        asChild: n = !1,
                        ...o
                    } = e, m = n ? r.g7 : "button";
                    return (0, s.jsx)(m, {
                        className: c(d({
                            variant: i,
                            size: l,
                            className: a
                        })),
                        ref: t,
                        ...o
                    })
                });

            function h(e) {
                let {
                    children: t
                } = e;
                return (0, s.jsxs)("div", {
                    className: "relative",
                    children: [(0, s.jsx)("svg", {
                        width: "0",
                        height: "0",
                        children: (0, s.jsxs)("filter", {
                            id: "distressed",
                            children: [(0, s.jsx)("feTurbulence", {
                                type: "fractalNoise",
                                baseFrequency: "0.02",
                                numOctaves: "3"
                            }), (0, s.jsx)("feDisplacementMap", { in: "SourceGraphic",
                                scale: "2"
                            })]
                        })
                    }), (0, s.jsx)("h1", {
                        className: "text-5xl md:text-7xl font-bold text-white mb-8  [filter:url(#distressed)]  [text-shadow:2px_2px_0_#666,-2px_-2px_0_#666]",
                        children: t
                    })]
                })
            }
            m.displayName = "Button";
            var p = a(9653),
                x = a(3462);
            let u = e => {
                    let {
                        text: t,
                        className: a
                    } = e, r = (0, p._)(), l = (0, i.useRef)(null), [n, o] = (0, i.useState)(!1);
                    return (0, i.useEffect)(() => {
                        let e = new IntersectionObserver(t => {
                            let [a] = t;
                            a.isIntersecting && (o(!0), e.unobserve(a.target))
                        }, {
                            threshold: .1
                        });
                        return l.current && e.observe(l.current), () => {
                            l.current && e.unobserve(l.current)
                        }
                    }, []), (0, i.useEffect)(() => {
                        n && r.start(e => ({
                            opacity: 1,
                            transition: {
                                delay: .03 * e
                            }
                        }))
                    }, [n, r]), (0, s.jsx)("div", {
                        ref: l,
                        className: a,
                        children: t.split(" ").map((e, t) => (0, s.jsx)(x.E.span, {
                            custom: t,
                            initial: {
                                opacity: 0
                            },
                            animate: r,
                            className: "inline-block mr-1",
                            children: e
                        }, t))
                    })
                },
                b = {
                    crying: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Broke%20AF%20pic1-WU94vRai6k650GJiISRmM3N3ugpdQb.png",
                    teary: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Broke%20AF%20pic2-r4uVs4y0skynwFuGIgNLwpS6GpIZEd.png",
                    sad: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Broke%20AF%20pic3-BTbvkDKirAtoCfjpoBS2yPfh7HJ2eW.png",
                    formal: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Broke%20AF%20pic4-GtapFDvrVOsM86sdj4dd6Oe4GRihPy.png"
                };

            function g(e) {
                let {
                    position: t,
                    imageVariant: a,
                    className: i
                } = e;
                return (0, s.jsxs)("div", {
                    className: "relative",
                    children: [(0, s.jsx)(x.E.img, {
                        src: b[a],
                        alt: "Bart Simpson ".concat(a),
                        initial: {
                            opacity: 0,
                            scale: .8
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: .5
                        },
                        className: c("w-64 h-64 md:w-96 md:h-96 object-contain relative z-10", "left" === t ? "order-first" : "right" === t ? "order-last" : "", i)
                    }), (0, s.jsx)("div", {
                        className: "absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black to-transparent z-20"
                    })]
                })
            }

            function f(e) {
                let {
                    position: t,
                    children: a,
                    className: i,
                    hasBackground: r = !1
                } = e;
                return (0, s.jsxs)(x.E.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5
                    },
                    viewport: {
                        once: !0
                    },
                    className: c("relative p-6 text-white max-w-2xl", r && "bg-gray-800 rounded-3xl", "left" === t ? "ml-16" : "right" === t ? "mr-16" : "", i),
                    children: ["center" !== t && r && (0, s.jsx)("div", {
                        className: c("absolute w-4 h-4 bg-gray-800 rotate-45", "left" === t ? "-left-2" : "-right-2", "top-1/2 -translate-y-1/2")
                    }), a]
                })
            }
            var y = a(7648);

            function v() {
                return (0, s.jsx)("div", {
                    className: "flex gap-4",
                    children: [{
                        name: "Twitter",
                        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/twitter%20black-FQskw6qFiS6AEAto3WlC5G4oZYe4mS.png",
                        url: "https://x.com/broke_af_sol?s=21"
                    }, {
                        name: "Telegram",
                        icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telegram%20black-N9r8qKUHjP8DAPMlYA2yoUUlOxCBjj.png",
                        url: "https://t.me/Broke_af_sol"
                    }].map(e => (0, s.jsx)(x.E.div, {
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: .95
                        },
                        children: (0, s.jsx)(y.default, {
                            href: e.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "block transition-transform hover:scale-110",
                            children: (0, s.jsx)("img", {
                                src: e.icon || "/placeholder.svg",
                                alt: e.name,
                                className: "w-8 h-8"
                            })
                        })
                    }, e.name))
                })
            }
            var j = a(8614),
                w = a(2489);
            let k = [{
                title: "Dev Wallet Buy",
                content: "We'll buy 1.5 $SOL worth of tokens from the dev wallet."
            }, {
                title: "DEX Update",
                content: "If the community supports us, we'll sell $300 worth of tokens to fund a DEX update."
            }, {
                title: "Community Building",
                content: "After the DEX update, we'll reach out to key opinion leaders (KOLs) and callers willing to support us by accepting $BROKE tokens."
            }, {
                title: "No False Promises",
                content: "We'll aim for growth but won't make unrealistic promises."
            }, {
                title: "Team Building",
                content: "If we bond well as a community, we'll build a solid team with early supporters and investors."
            }];

            function N() {
                let [e, t] = (0, i.useState)(!1);
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(m, {
                        onClick: () => t(!0),
                        className: "bg-white text-black hover:bg-gray-200 transition-all hover:scale-105 font-bold flex items-center gap-2",
                        children: [(0, s.jsx)("img", {
                            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xFC2neO3leemWPtr0KqgTTSSwbB5y4.png",
                            alt: "Roadmap",
                            className: "w-4 h-4"
                        }), "Roadmap"]
                    }), (0, s.jsx)(j.M, {
                        children: e && (0, s.jsxs)("div", {
                            className: "fixed inset-0 z-[99999] flex items-start justify-center pt-20",
                            children: [(0, s.jsx)(x.E.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                className: "absolute inset-0 bg-black/50",
                                onClick: () => t(!1)
                            }), (0, s.jsxs)(x.E.div, {
                                initial: {
                                    scale: .95,
                                    opacity: 0
                                },
                                animate: {
                                    scale: 1,
                                    opacity: 1
                                },
                                exit: {
                                    scale: .95,
                                    opacity: 0
                                },
                                className: "relative z-[99999] bg-black/90 backdrop-blur-lg p-8 rounded-2xl border border-white/10 w-[95%] max-w-2xl max-h-[calc(100vh-8rem)] overflow-y-auto",
                                style: {
                                    overscrollBehavior: "contain",
                                    scrollbarWidth: "thin",
                                    scrollbarColor: "rgba(255,255,255,0.2) transparent"
                                },
                                onClick: e => e.stopPropagation(),
                                children: [(0, s.jsxs)("div", {
                                    className: "sticky top-0 bg-black/90 backdrop-blur-lg pb-6 z-10",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex justify-between items-center",
                                        children: [(0, s.jsxs)("div", {
                                            className: "flex items-center gap-3",
                                            children: [(0, s.jsx)("img", {
                                                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iOAzzKfNz8tiHmrm0jIVBagCrOzlEc.png",
                                                alt: "DEXSCREENER",
                                                className: "w-8 h-8"
                                            }), (0, s.jsx)(x.E.h2, {
                                                className: "text-3xl font-bold text-white",
                                                initial: {
                                                    y: 20,
                                                    opacity: 0
                                                },
                                                animate: {
                                                    y: 0,
                                                    opacity: 1
                                                },
                                                transition: {
                                                    delay: .2
                                                },
                                                children: "Our Roadmap: Simple and Honest"
                                            })]
                                        }), (0, s.jsx)("button", {
                                            onClick: () => t(!1),
                                            className: "text-white hover:text-gray-300",
                                            children: (0, s.jsx)(w.Z, {
                                                size: 24
                                            })
                                        })]
                                    }), (0, s.jsx)(x.E.p, {
                                        className: "text-gray-300 mt-4",
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: .3
                                        },
                                        children: "We don't have flashy plans or fake promises. Here's what we'll do:"
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "space-y-6",
                                    children: k.map((e, t) => (0, s.jsxs)(x.E.div, {
                                        initial: {
                                            x: 50,
                                            opacity: 0
                                        },
                                        animate: {
                                            x: 0,
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: .4 + .1 * t
                                        },
                                        className: "flex items-start gap-4",
                                        children: [(0, s.jsx)(x.E.div, {
                                            initial: {
                                                scale: 0
                                            },
                                            animate: {
                                                scale: 1
                                            },
                                            transition: {
                                                delay: .4 + .1 * t
                                            },
                                            className: "w-6 h-6 rounded-full bg-white text-black flex items-center justify-center font-bold flex-shrink-0 mt-1",
                                            children: t + 1
                                        }), (0, s.jsxs)("div", {
                                            children: [(0, s.jsx)("h3", {
                                                className: "text-xl font-semibold text-white mb-2",
                                                children: e.title
                                            }), (0, s.jsx)("p", {
                                                className: "text-gray-300",
                                                children: e.content
                                            })]
                                        })]
                                    }, t))
                                }), (0, s.jsx)(x.E.div, {
                                    className: "mt-8 pt-6 border-t border-white/10",
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: .9
                                    },
                                    children: (0, s.jsx)("p", {
                                        className: "text-white font-medium",
                                        children: "All we need is your support. Together, we'll make something real."
                                    })
                                })]
                            })]
                        })
                    })]
                })
            }
            var E = a(1723);

            function B(e) {
                let {
                    isOpen: t,
                    onClose: a,
                    message: i
                } = e;
                return (0, s.jsx)(j.M, {
                    children: t && (0, s.jsx)(x.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "fixed inset-0 z-[9999] flex items-start justify-center bg-black/50 pt-20",
                        onClick: a,
                        children: (0, s.jsxs)(x.E.div, {
                            initial: {
                                y: -50,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            exit: {
                                y: 50,
                                opacity: 0
                            },
                            className: "bg-black/90 backdrop-blur-lg border border-white/10 rounded-lg p-6 shadow-lg max-w-md w-11/12",
                            onClick: e => e.stopPropagation(),
                            children: [(0, s.jsxs)("div", {
                                className: "flex justify-between items-start mb-4",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, s.jsx)(E.Z, {
                                        className: "text-white w-6 h-6"
                                    }), (0, s.jsx)("span", {
                                        className: "text-2xl",
                                        children: "\uD83D\uDE0A"
                                    })]
                                }), (0, s.jsx)("button", {
                                    onClick: a,
                                    className: "text-white/60 hover:text-white transition-colors",
                                    children: (0, s.jsx)(w.Z, {
                                        size: 24
                                    })
                                })]
                            }), (0, s.jsx)("p", {
                                className: "text-white text-lg mb-4",
                                children: i
                            }), (0, s.jsx)("div", {
                                className: "flex justify-end",
                                children: (0, s.jsx)("button", {
                                    onClick: a,
                                    className: "bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors",
                                    children: "Got it!"
                                })
                            })]
                        })
                    })
                })
            }

            function I() {
                let [e, t] = (0, i.useState)(!1);
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(m, {
                        onClick: e => {
                            e.preventDefault(), t(!0)
                        },
                        className: "bg-white text-black hover:bg-gray-200 transition-all hover:scale-105 font-bold flex items-center gap-2",
                        children: [(0, s.jsx)("img", {
                            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WZFeDGK54fAHAuflQ14mpTuS3nc4Up.png",
                            alt: "DEXSCREENER",
                            className: "w-4 h-4"
                        }), "DEXSCREENER"]
                    }), (0, s.jsx)(B, {
                        isOpen: e,
                        onClose: () => t(!1),
                        message: "DEX will be paid just after bonding, keep with us!"
                    })]
                })
            }

            function A() {
                return (0, s.jsxs)("main", {
                    className: "min-h-screen bg-black text-white pt-24",
                    children: [(0, s.jsxs)("header", {
                        className: "fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-black/50 backdrop-blur-sm",
                        children: [(0, s.jsx)(v, {}), (0, s.jsxs)("div", {
                            className: "flex gap-4",
                            children: [(0, s.jsx)(N, {}), (0, s.jsx)(I, {})]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "container mx-auto px-4 py-12",
                        children: [(0, s.jsxs)("div", {
                            className: "text-center mb-16",
                            children: [(0, s.jsx)(h, {
                                children: "Broke AF"
                            }), (0, s.jsx)(u, {
                                text: "Building Broke AF for everyone starting from nothing. Will Grow together and build together.",
                                className: "mt-4 mb-8 text-lg md:text-xl font-semibold text-gray-300 max-w-2xl mx-auto"
                            }), (0, s.jsxs)("div", {
                                className: "my-8 flex flex-col items-center",
                                children: [(0, s.jsxs)("div", {
                                    className: "relative mb-4",
                                    children: [(0, s.jsx)(x.E.img, {
                                        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Broke%20AF%20pic1-tb9d1KuB3raMjApS7S2koovicPJ2gH.png",
                                        alt: "Crying Bart",
                                        initial: {
                                            opacity: 0,
                                            scale: .8,
                                            rotate: -5
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1,
                                            rotate: 0
                                        },
                                        transition: {
                                            duration: .8,
                                            ease: "easeOut",
                                            scale: {
                                                type: "spring",
                                                stiffness: 100
                                            }
                                        },
                                        className: "w-64 h-64 md:w-96 md:h-96 relative z-10"
                                    }), (0, s.jsx)(x.E.div, {
                                        className: "absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black to-transparent z-20",
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: .5,
                                            duration: .5
                                        }
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "max-w-2xl mx-auto",
                                    children: [(0, s.jsx)(x.E.h2, {
                                        className: "text-2xl font-bold mb-4",
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: .3,
                                            duration: .5
                                        },
                                        children: "Part 1: The Beginning"
                                    }), (0, s.jsx)(u, {
                                        text: "I'm just a regular Gen-Z kid with big dreams and an empty wallet. Like most people my age, I entered crypto with hope—hope that I could change my life, break free from struggles, and build something meaningful. But life had other plans. Every step forward felt like two steps back. Losses piled up, and my dreams seemed further away than ever.",
                                        className: "mb-4 text-sm md:text-base"
                                    })]
                                })]
                            }), (0, s.jsx)(m, {
                                variant: "outline",
                                size: "lg",
                                className: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-lg px-8 py-6",
                                asChild: !0,
                                children: (0, s.jsx)(y.default, {
                                    href: "https://pump.fun",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "Support Broke AF"
                                })
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "space-y-24",
                            children: [(0, s.jsxs)("section", {
                                className: "flex flex-col items-center text-center",
                                children: [(0, s.jsx)(g, {
                                    position: "center",
                                    imageVariant: "sad",
                                    className: "mb-4"
                                }), (0, s.jsxs)(f, {
                                    position: "center",
                                    hasBackground: !1,
                                    children: [(0, s.jsx)("h2", {
                                        className: "text-2xl font-bold mb-4",
                                        children: "Part 2: The Struggles"
                                    }), (0, s.jsx)(u, {
                                        text: "I started small. My first crypto journey began with $10. Over time, I managed to turn that into $800. I thought I was on the path to success, but I was wrong. I lost it all in bad trades and wrong decisions. I tried again, built it back up, and lost again. Now, I'm here, starting over with just $50, trying to build something real—not just for me, but for everyone who has felt the same struggles.",
                                        className: "mb-4"
                                    })]
                                })]
                            }), (0, s.jsxs)("section", {
                                className: "flex flex-col items-center text-center",
                                children: [(0, s.jsx)(g, {
                                    position: "center",
                                    imageVariant: "formal",
                                    className: "mb-4"
                                }), (0, s.jsxs)(f, {
                                    position: "center",
                                    hasBackground: !1,
                                    children: [(0, s.jsx)("h2", {
                                        className: "text-2xl font-bold mb-4",
                                        children: "Part 3: The Realization"
                                    }), (0, s.jsx)(u, {
                                        text: "After seeing countless scams and fake promises in the crypto space, I knew I didn't want to follow that path. I've seen people like me—dreamers, hustlers—fall into traps that left them broke and hopeless. That's why I decided to create BrokeAF. It's not about hype or fake promises. It's about honesty, community, and a shared journey. This isn't just my project; it's for everyone who has ever felt stuck but refused to give up.",
                                        className: "mb-4"
                                    })]
                                })]
                            }), (0, s.jsxs)("section", {
                                className: "flex flex-col items-center text-center",
                                children: [(0, s.jsx)(g, {
                                    position: "center",
                                    imageVariant: "teary",
                                    className: "mb-4"
                                }), (0, s.jsxs)(f, {
                                    position: "center",
                                    hasBackground: !1,
                                    children: [(0, s.jsx)("h2", {
                                        className: "text-2xl font-bold mb-4",
                                        children: "Part 4: The Vision"
                                    }), (0, s.jsx)(u, {
                                        text: "BrokeAF isn't just a token; it's a movement. It's a space for people who are broke today but believe in a better tomorrow. Together, we'll build something meaningful. It doesn't matter if we hit the moon or not—what matters is the community we create, the lessons we learn, and the connections we make along the way. This is more than a crypto project; it's our story.",
                                        className: "mb-4"
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [851, 971, 117, 744], function() {
            return e(e.s = 1538)
        }), _N_E = e.O()
    }
]);
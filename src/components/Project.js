import React from "react";


export const projectsData = [
  {
    id:0,
    title: "Blog",
    description: "A full-stack Blog solution with React and Python.",
    image:"https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA=",
    category: "fullstack",
    technologies: ["React", "Python", "PostgreSQL"],
    github: "https://github.com/teeladnoni/blogger_web/tree/master",
    demo: "https://blog-demo-dx5q.onrender.com/",
  },
  {
    id:1,
    title: "Portfolio Website",
    description: "Modern portfolio website with React and Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    category: "frontend",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/teeladnoni/Portfolio",
    demo: "/",
  },
  {
    id:2,
    title: "CodePoints",
    description: "A simple web app to store and organize key points from your coding journey. Perfect for saving concepts, " + 
    "snippets, and tips as you learn and grow.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000",
    category: "backend",
    technologies: ["Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/teeladnoni/code-point",
    demo: "https://teeladnoni.github.io/code-point/",
  },
];

export const categories = ["All", "Fullstack", "Frontend", "Backend"];

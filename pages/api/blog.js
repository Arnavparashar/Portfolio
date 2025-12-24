// Mock API for blog posts
export default function handler(req,res){
  // Only include curated external posts for now (your Medium article)
  const posts = [
    {
      id: 1,
      title: "I built a portfolio optimization model from scratch — here's what surprised me",
      excerpt: 'A walkthrough of building a portfolio optimization model, key lessons and implementation notes.',
      slug: 'portfolio-optimization-model',
      url: 'https://medium.com/@arnav.parashar2000/i-built-a-portfolio-optimization-model-from-scratch-heres-what-surprised-me-07605fffd57d?source=social.linkedin',
      source: 'Medium'
    }
  ];
  res.status(200).json(posts);
}

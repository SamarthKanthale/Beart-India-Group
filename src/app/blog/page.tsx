
import { BlogPostCard } from "@/components/blog/blog-post-card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Beart India Group Insights',
  description: 'Stay updated with the latest news, articles, and insights from Beart India Group on investments, finance, technology, and software solutions.',
  keywords: ['Beart India Group blog', 'investment news', 'finance articles', 'technology insights', 'software solutions blog', 'market updates', 'Nifty 50', 'SIP', 'market volatility'],
  alternates: {
    canonical: '/blog',
  },
};

// Sample Blog Post Data
const blogPosts = [
  {
    id: 1,
    imageSrc: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Roller coaster with stock market symbols representing market ups and downs",
    imageHint: "market volatility",
    tag: "Markets",
    title: "Navigating Market Volatility: Turning Uncertainty into Opportunity",
    description: "Recent geopolitical tensions, particularly the escalating India-Pakistan situation, have led to significant market volatility. On May 9, 2025, the Nifty 50 index dropped by 1.10%, closing at 24,008.00. Such fluctuations can be unsettling, but they also present unique opportunities for savvy investors.",
    authorName: "Beart India Insights",
    date: "May 10, 2025",
    readTime: "5 min read",
    link: "/blog/navigating-market-volatility",
  },
  {
    id: 2,
    imageSrc: "https://images.pexels.com/photos/8062358/pexels-photo-8062358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "A sapling growing into a tree, symbolizing gradual financial growth through SIPs",
    imageHint: "growth sapling",
    tag: "Investing",
    title: "The Power of SIPs: Building Wealth One Step at a Time",
    description: "Systematic Investment Plans (SIPs) are a disciplined approach to investing, allowing individuals to invest fixed amounts regularly. This method is especially effective in volatile markets, as it averages out the cost of investments over time.",
    authorName: "Beart India Insights",
    date: "April 20, 2025",
    readTime: "4 min read",
    link: "/blog/power-of-sips",
  },
  {
    id: 3,
    imageSrc: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Business team meeting around a table discussing Nifty 50 performance",
    imageHint: "team meeting",
    tag: "Economy",
    title: "Understanding Nifty 50: A Barometer of India’s Economic Health",
    description: "The Nifty 50 index comprises 50 of India’s largest and most liquid stocks across various sectors. It serves as a benchmark for the Indian equity market and reflects the country’s economic health.",
    authorName: "Beart India Insights",
    date: "February 28, 2025",
    readTime: "6 min read",
    link: "/blog/understanding-nifty-50",
  },
];

const getCardTitle = (fullTitle: string) => {
  const colonIndex = fullTitle.indexOf(':');
  if (colonIndex !== -1) {
    return fullTitle.substring(0, colonIndex).trim();
  }
  return fullTitle;
};

export default function BlogPage() {
  return (
    <div className="container mx-auto flex-grow py-8 sm:py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-top-8 duration-700">Our Insights</h1>
       {blogPosts.length === 0 ? (
          <div className="text-center text-muted-foreground animate-in fade-in duration-500">
            <p>No blog posts available yet. Check back soon!</p>
          </div>
        ) : (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post, index) => (
              <div key={post.id} className={`animate-in fade-in zoom-in-95 duration-500 flex`} style={{ animationDelay: `${index * 150}ms`}}>
                <BlogPostCard
                  imageSrc={post.imageSrc}
                  imageAlt={post.imageAlt}
                  imageHint={post.imageHint}
                  tag={post.tag}
                  title={getCardTitle(post.title)}
                  description={post.description}
                  authorName={post.authorName}
                  date={post.date}
                  readTime={post.readTime}
                  link={post.link}
                />
              </div>
            ))}
           </div>
        )}
    </div>
  );
}

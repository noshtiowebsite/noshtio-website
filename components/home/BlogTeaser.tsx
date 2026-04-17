import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "The Rise of Home Kitchens in Urban India",
    excerpt: "How home-based food businesses are revolutionizing the culinary landscape and creating new opportunities for women entrepreneurs.",
    date: "March 15, 2024",
    readTime: "5 min read"
  },
  {
    title: "Zero Commission: A Game Changer for Food Vendors",
    excerpt: "Exploring how removing platform fees is transforming the economics of food delivery and benefiting both vendors and customers.",
    date: "March 10, 2024",
    readTime: "4 min read"
  },
  {
    title: "Traditional Recipes Meet Modern Technology",
    excerpt: "How digital platforms are helping preserve and promote India's diverse culinary heritage while supporting local artisans.",
    date: "March 5, 2024",
    readTime: "6 min read"
  }
];

export default function BlogTeaser() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, stories, and trends from the world of local food and vendor entrepreneurship
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-full h-48 bg-gradient-to-br from-navy to-electricBlue rounded-lg mb-4 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl font-display font-bold mb-2">📝</div>
                  <div className="text-sm opacity-80">Article</div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold text-navy mb-3 line-clamp-2">
                {article.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>

              <a href="#" className="text-gold hover:text-gold/80 font-medium inline-flex items-center">
                Read More
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="bg-navy text-white px-8 py-3 rounded-lg hover:bg-navy/90 transition-colors duration-300 font-medium inline-flex items-center">
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
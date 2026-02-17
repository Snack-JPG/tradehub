import { MetadataRoute } from "next";
import categories from "@/data/categories.json";
import locations from "@/data/locations.json";
import trades from "@/data/trades.json";
import blogPosts from "@/data/blog-posts.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tradehub.directory";

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/list-your-business`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // Category pages (e.g., /plumbers)
  categories.forEach((category) => {
    routes.push({
      url: `${baseUrl}/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // Category + Location pages (e.g., /plumbers/solihull)
  categories.forEach((category) => {
    locations.forEach((location) => {
      routes.push({
        url: `${baseUrl}/${category.slug}/${location.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    });
  });

  // Individual trade profile pages
  trades.forEach((trade) => {
    routes.push({
      url: `${baseUrl}/trades/${trade.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });

  // Blog post pages
  blogPosts.forEach((post) => {
    routes.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });

  // Emergency pages (plumbers, electricians, locksmiths only)
  const emergencyTrades = ["plumbers", "electricians", "locksmiths"];
  emergencyTrades.forEach((trade) => {
    locations.forEach((location) => {
      routes.push({
        url: `${baseUrl}/emergency/${trade}/${location.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  });

  return routes;
}

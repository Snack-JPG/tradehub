import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mjbelectrical.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Explicitly allow AI/LLM crawlers
      {
        userAgent: [
          'CCBot',
          'ChatGPT-User',
          'GPTBot',
          'Google-Extended',
          'anthropic-ai',
          'Claude-Web',
          'PerplexityBot',
          'Bytespider'
        ],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

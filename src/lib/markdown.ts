import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Automatically import all markdown files from the content directory
const posts = import.meta.glob('../content/*.md', { query: '?raw', import: 'default' });

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  content?: string;
}

// Calculate reading time based on word count (average 200 words per minute)
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  
  return minutes === 1 ? '1 min read' : `${minutes} min read`;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const allPosts = await Promise.all(
      Object.entries(posts).map(async ([path, loadContent]) => {
        const content = await loadContent() as string;
        const id = path.split('/').pop()?.replace(/\.md$/, '') || '';
        const matterResult = matter(content);
        
        // Calculate reading time from content
        const readTime = calculateReadingTime(matterResult.content);
        
        return {
          id,
          readTime,
          ...(matterResult.data as { title: string; date: string; excerpt: string }),
        };
      })
    );

    // Sort posts by date (newest first)
    return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    return [];
  }
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  try {
    const path = `../content/${id}.md`;
    const loadContent = posts[path];
    
    if (!loadContent) {
      return null;
    }

    const content = await loadContent() as string;
    const matterResult = matter(content);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Calculate reading time from content
    const readTime = calculateReadingTime(matterResult.content);

    return {
      id,
      content: contentHtml,
      readTime,
      ...(matterResult.data as { title: string; date: string; excerpt: string }),
    };
  } catch (error) {
    return null;
  }
} 
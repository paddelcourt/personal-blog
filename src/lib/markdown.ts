import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Direct imports for testing
import algorithmicTrust from '../content/algorithmic-trust.md?raw';
import asyncCommunication from '../content/async-communication.md?raw';
import digitalOwnership from '../content/digital-ownership-web3.md?raw';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  content?: string;
}

const markdownFiles = {
  'algorithmic-trust': algorithmicTrust,
  'async-communication': asyncCommunication,
  'digital-ownership-web3': digitalOwnership,
};

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const allPosts = Object.entries(markdownFiles).map(([id, content]) => {
      const matterResult = matter(content);
      
      return {
        id,
        ...(matterResult.data as { title: string; date: string; excerpt: string; readTime: string }),
      };
    });

    // Sort posts by date
    return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error('Error in getAllPosts:', error);
    return [];
  }
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  try {
    const content = markdownFiles[id as keyof typeof markdownFiles];
    
    if (!content) {
      return null;
    }

    const matterResult = matter(content);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id,
      content: contentHtml,
      ...(matterResult.data as { title: string; date: string; excerpt: string; readTime: string }),
    };
  } catch (error) {
    console.error('Error in getPostById:', error);
    return null;
  }
} 
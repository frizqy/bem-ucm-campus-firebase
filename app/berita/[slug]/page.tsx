import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { getConnection } from '@/lib/query';
import { RowDataPacket } from 'mysql2/promise';
interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
    const db = await getConnection();
    
    const sql = "SELECT slug FROM news"; 
    
    const [news] = await db.query(sql); 
    
    return Array.isArray(news) ? news.map((article: any) => ({
        slug: article.slug,
    })) : [];
}
export default async function NewsArticle({ params }: PageProps) {
    const { slug } = await params;
    
    const db = await getConnection(); 
    const sql = `SELECT * FROM news WHERE slug = ?`; 
    const [articles] = await db.query(sql, [slug]);
    
    const article = (articles as RowDataPacket[])[0];
    
    if (!article) {
        return null; 
    }

    const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

  return (
    <div className="min-h-screen">
      <Header />
        <main className="py-12 px-4">
          <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-xl">
            <div className="mb-6">
              <span className="inline-block bg-blue-600 text-white px-4 py-1 text-sm font-medium rounded-full tracking-wide uppercase">
                {article.category}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
                {article.title}
            </h1>
            
            <div className="flex items-center text-gray-500 mb-8 text-sm">
              <span>{article.date}</span>
            </div>
            
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-80 object-cover rounded-xl mb-10 shadow-lg"
            />
            
            <div className="text-lg text-gray-700 space-y-8">
              {article.content1 && <p className="leading-relaxed whitespace-pre-line">{article.content}</p>}
            </div>
          </div>
        </main>
      <Footer />
    </div>
  );
}
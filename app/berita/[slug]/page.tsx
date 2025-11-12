import newsData from '../../news.json';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { promises } from 'dns';

export async function generateStaticParams() {
  return newsData.map(article => ({
    slug: article.slug,
  }));
}

export default async function NewsArticle({ params: { slug } }) {
  const article = await getResponse(`/berita/${slug}`);
  
  if (!article) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <Header />
        <main>
          <div className="max-w-4xl mx-auto p-6">
            <div className="mb-6">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                {article.category}
              </span>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <span>{article.date}</span>
              <span className="mx-2">•</span>
            </div>
            
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <div className="prose max-w-none flex flex-col gap-6">
              <p className="text-gray-700 leading-relaxed">{article.content1}</p>
              <p className="text-gray-700 leading-relaxed">{article.content1}</p>
              <p className="text-gray-700 leading-relaxed">{article.content1}</p>
            </div>
          </div>
        </main>
      <Footer />
    </div>
  );
}
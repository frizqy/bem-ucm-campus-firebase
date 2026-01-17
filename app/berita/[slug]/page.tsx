import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { ref, get, query, orderByChild, equalTo } from "firebase/database";
import { database } from '@/firebase/firebaseconfig';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const newsRef = ref(database, 'event');
    const snapshot = await get(newsRef);

    if (!snapshot.exists()) return [];

    const data = snapshot.val();
    
    return Object.values(data).map((article: any) => ({
        slug: article.slug,
    }));
}

export default async function NewsArticle({ params }: { params: { slug: string } }) {
    const { slug } = params;
    
    const newsRef = ref(database, 'event');
    const newsQuery = query(newsRef, orderByChild('slug'), equalTo(slug));
    
    const snapshot = await get(newsQuery);
    
    if (!snapshot.exists()) {
        notFound();
    }

    const data = snapshot.val();
    const articleId = Object.keys(data)[0];
    const article = data[articleId];

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
                        className="w-full h-auto object-cover rounded-lg mb-6"
                    />
                    
                    <div className="prose max-w-none">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                            {article.content}
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
import { useState } from 'react';

export default function TestReader({ articles }) {
    const [articleIdx, setArticleIdx] = useState(0);

    const handlePrev = () => {
        setArticleIdx(articleIdx - 1);
    };

    const handleNext = () => {
        setArticleIdx(articleIdx + 1);
    };

    const currentArticle = articles[articleIdx];
    const isFirst = articleIdx === 0;
    const isLast = articleIdx === articles.length - 1;

    return (
        <div>
            <div>
                <div>
                    <button onClick={handlePrev} disabled={isFirst}>
                        Prev
                    </button>
                    <button onClick={handleNext} disabled={isLast}>
                        Next
                    </button>
                </div>
                <p>
                    {articleIdx + 1}/{articles.length}
                </p>
            </div>
            <article>
                <h2>{currentArticle.topic}</h2>
                <p>{currentArticle.text}</p>
            </article>
            <br />
            <br />
            <br />
        </div>
    );
}

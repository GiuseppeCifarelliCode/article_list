import {useState, useEffect} from 'react';
import './App.css';

function ArticleList() {
  const articles = [
    { title: 'React Basics', description: 'Introduction to React.'},
    { title: 'State and Props', description: 'How State and Props works.'},
    { title: 'useEffect Hook', description: 'SideEffect gestion.'}
  ];

  const [searchInput, setSearchInput] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(articles);

  useEffect(() => {
    const results = articles.filter(article => article.title.toLowerCase().includes(searchInput.toLowerCase()));
    setFilteredArticles(results);
  }, [searchInput]);

  return (
    <div>
      <div>
        <input placeholder='Cerca Articoli' onChange={(e) => setSearchInput(e.target.value)}></input>
      </div>

      <div>
        <ul>
          {filteredArticles.map((articles,index) => (
            <li key={index}>
              <h2>{articles.title}</h2>
              <p>{articles.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ArticleList;

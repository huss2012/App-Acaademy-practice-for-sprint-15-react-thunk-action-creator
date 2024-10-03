import { useParams } from 'react-router-dom';
import './SingleArticle.css';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const SingleArticle = ({ articles }) => {
  const { id } = useParams();
  const singleArticle = articles.find(article => article.id === Number(id));
  const history = useHistory();

  if (singleArticle === undefined) {
  //one possible solution to redirect the user to the home page when the singleArticle is undefined:
    // history.push('/');
    // return null;
  //Second solution is to use switch and Route to re-render the all app:
    return (
      <>
        <Switch>
          <Route excat path='/'></Route>
        </Switch>
      </>
    )
  }

  return (
    <div className='singleArticle'>
      <h1>{singleArticle.title}</h1>
      <img
        src={singleArticle.imageUrl}
        alt={singleArticle.title}
      />
      <p>
        {singleArticle.body}
      </p>
    </div>
  );
};

export default SingleArticle;

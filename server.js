
import jsonServer from 'json-server';
import auth from 'json-server-auth';
import cors from 'cors';

 const { create, router: _router, defaults, bodyParser } = jsonServer;

const app = create();
const router = _router('db.json');
const middlewares = defaults();

// Bind the router db to the auth middleware
app.db = router.db;

//To remove cross origin resource access error
app.use(cors());
//To parse the req.body to json format
app.use(bodyParser);

//Allow to use middlewares in this case json-server-auth
app.use(middlewares);

//For authentication Process
app.use(auth);

//To handle all routes
app.use(router);

app.listen(8000, () => {
    console.log('🚀 JSON Server is running at http://localhost:8000');
});

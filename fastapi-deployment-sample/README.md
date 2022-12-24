## startup

spin up containers

```bash
docker-compose up --build
```

starting up services separately

```bash
cd backend
conda activate fastapi-react
uvicorn app.main:app

cd ../frontend
npm start
```

## notes

```bash
conda create -n fastapi-react python=3.10
conda activate fastapi-react

create-react-app frontend
```

- class components not recommened
- aync/await not working --> have to use react hooks
- useEffect builtin or import useAsync hook from react-async module
    - async fetch methods: <https://css-tricks.com/fetching-data-in-react-using-react-async/>

- returning a string from fastapi is stupid, always return a json. it's the most stright forward / standard syntax of the internet



## tutoiral

- <https://www.erraticbits.ca/post/2021/fastapi/>
- <https://github.com/jclement/fastapi-deployment-sample>

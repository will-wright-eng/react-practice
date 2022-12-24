## startup

```bash
docker-compose up -d --build my-app
# -d is for daemon mode
docker ps

# CONTAINER ID   IMAGE                     COMMAND                  CREATED        STATUS          PORTS                  NAMES
# 9dc33c745965   react-docker-app-my-app   "/docker-entrypoint.…"   43 hours ago   Up 12 seconds   0.0.0.0:3000->80/tcp   react-docker-app-my-app-1
```

http://0.0.0.0:3001

> 500 Internal Server Error
> nginx/1.18.0

```bash
docker-compose down
```
## notes

- based on create-react-app
- added files for simple config setup
	- Dockerfile
	- .dockerignore
	- nginx.conf
	- docker-compose.yml

### kill all containers

*bash one liner*

```bash
for i in $(docker ps --format "{{.ID}}"); do docker kill $i; done
```

### capture recent-unique command history

```bash
history | tail -n 1000 | cut -c 8- | sort | uniq
```


## tutorial

https://towardsdev.com/react-app-in-docker-a1128c7147ba
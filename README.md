# GraphQL 스터디

## 환경구성

- apollo(graphql)
- prisma
- postgresql

## 프로젝트 초기 세팅

1. 인스톨

```shell
yarn install
```

2. 도커 Postgresql DB 세팅

도커 컨테이너 생성 후 DB 접속

```shell
docker pull postgres

docker volume create ohou-postgres-volume

docker run \
  --name ohou-postgres \
  -p 5432:5432 \
  -e POSTGRES_PASSWORD="Test1234$" \
  -v ohou-postgres-volume:/var/lib/postgresql/data \
  -d postgres

docker exec --user="root" -it ohou-postgres "bash"
```

데이터베이스 생성

```sql
CREATE DATABASE graphql;
```

3. 테이블 생성

`prisma schema` 로 테이블을 생성하고, `/prisma/seed.ts` 파일을 실행하여, 초기 데이터를 생성합니다.

```shell
yarn generate
```

4. 서버 실행

`yarn dev` 명령어로 개발 서버를 실행합니다.

```shell
yarn dev
```

## 참조

- [Docker에 PostgreSQL 설치하기](https://xeppetto.github.io/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4/WSL-and-Docker/15-Docker-PostGreSQL/)

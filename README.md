# GraphQL 스터디

## 설정

```shell
yarn dlx prisma init
```

## 도커

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

postgresql

```shell
psql -U postgres
SELECT datname FROM pg_database; -- 전체 데이터베이스 이름 출력
SELECT datname FROM pg_database WHERE datistemplate = false; -- 사용자가 생성한 데이터베이스 이름만 출력

CREATE DATABASE graphql;
\c graphql; -- 데이터베이스 변경

SELECT * FROM PG_TABLES; -- PostgreSQL 내 모든 테이블 이름 조회
SELECT * FROM PG_TABLES WHERE schemaname='public'; -- 사용자가 생성한 테이블 이름 조회
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name; -- 사용자가 생성한 테이블의 이름 정보만 조회
```

## 참조

- [Docker에 PostgreSQL 설치하기](https://xeppetto.github.io/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4/WSL-and-Docker/15-Docker-PostGreSQL/)

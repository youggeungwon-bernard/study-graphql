import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from '@graphql-tools/schema';

const prisma = new PrismaClient();

const typeDefs = `
  type User {
    email: String!
    name: String
  }

  type Query {
    allUsers: [User!]!
  }
`;

const resolvers = {
  Query: {
    allUsers: () => {
      return prisma.user.findMany();
    }
  }
};

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

const server = new ApolloServer({ schema });

server.listen(4000).then(() => console.log('Server is running on http://localhost:4000'));

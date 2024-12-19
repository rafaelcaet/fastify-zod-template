import { z } from "zod";
import { FastifyTypedInstance } from "../types";
import { randomUUID } from "node:crypto";

interface IUser {
  id: string;
  name: string;
  email: string;
}

const users: IUser[] = [];

export async function routes(app: FastifyTypedInstance) {
  app.get(
    "/users",
    {
      schema: {
        description: "Get a user",
        tag: ["users"],
        response: {
          200: z.array(
            z.object({
              id: z.string(),
              name: z.string(),
              email: z.string(),
            })
          ),
        },
      },
    },
    async () => {
      return users;
    }
  );

  app.post(
    "/users",
    {
      schema: {
        description: "Create a new user",
        tag: ["users"],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        response: {
          201: z.null().describe("User Created"),
        },
      },
    },
    async (req, res) => {
      const { name, email } = req.body;
      users.push({
        id: randomUUID(),
        name,
        email,
      });
      return res.status(201).send();
    }
  );
}

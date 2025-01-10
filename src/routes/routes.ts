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
  /*    GET     */
  app.get(
    "/users",
    {
      schema: {
        tags: ["users"],
        description: "Get a user",
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
  /*    POST    */
  app.post(
    "/users",
    {
      schema: {
        description: "Create a new user",
        tags: ["users"],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        response: {
          201: z.null().describe("User Created"),
        },
      },
    },
    async (req: any, res: any) => {
      const { name, email } = req.body;
      users.push({
        id: randomUUID(),
        name,
        email,
      });
      return res.status(201).send("User created successfully");
    }
  );
}

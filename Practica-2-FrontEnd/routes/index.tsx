import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { Job } from "../types.ts";
import {Menu} from "../islands/Menu.tsx"
export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Job[]>) => {
    const url = "https://www.arbeitnow.com/api/job-board-api";
    try {
      const response = await axios.get<{
        data:Job[]
      }>(url);
      if (response.data.length === 0) {
        return new Response("Api Failed", { status: 404 });
      }
      return ctx.render(response.data.data);
    } catch (error) {
      console.error(error);
      return new Response("Error", { status: 500 });
    }
  },
};

const Page = (props: PageProps<Job[]>) => {
    const data = props.data;
    return (
      <>
      <Menu data={data}/>
      </>
    );
  };

export default Page;
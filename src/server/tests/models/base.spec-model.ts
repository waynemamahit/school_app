import { Env, Hono } from "hono";

export default class BaseSpec {
  app: Hono<Env>;

  constructor(app: Hono<Env>) {
    this.app = app;
  }
}
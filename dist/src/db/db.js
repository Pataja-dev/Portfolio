"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var node_postgres_1 = require("drizzle-orm/node-postgres");
var pg_1 = require("pg");
var schema = require("../../drizzle/schema");
var client = new pg_1.Client({
    connectionString: process.env.DATABASE_URL,
});
client.connect();
exports.db = (0, node_postgres_1.drizzle)(client, { schema: schema });

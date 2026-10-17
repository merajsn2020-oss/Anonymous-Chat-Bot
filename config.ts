
const config = {
    source: {
        anti_crash: process.env.anti_crash === "true",
        database: {
            type:
                process.env.database_type ||
                process.env.DATABASE_TYPE ||
                "json",
            mongoURL: process.env.database_mongoURL || "",
            mysql: {
                host: process.env.database_msql_host || "",
                user: process.env.database_msql_user || "",
                password: process.env.database_msql_password || "",
                database: process.env.database_msql_database || ""
            }
        }
    },
    bot: {
        token:
            process.env.token ||
            process.env.TOKEN ||
            process.env.BOT_TOKEN ||
            "",
        support: {
            owners: JSON.parse(process.env.owners || "[]")
        }
    }
};

export default config;

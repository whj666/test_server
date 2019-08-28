const Koa = require("koa");
const serve = require("koa-static");
const path = require("path");
const fs = require("fs");

const app = new Koa();
const home = serve(path.join(__dirname) + "/lib/");

app.use(home);

app.use(ctx => {
    if (ctx.url === "/") {
        console.log("/");
    }
});

app.use(ctx => {
    if (ctx.url.startsWith("/test/") && !ctx.url.includes(".")) {
        ctx.type = "text/html";
        ctx.body = fs.createReadStream("./lib/test/index.html");
    }
});

app.listen(8080, () => {
    console.log("sever is starting at port 8080");
});

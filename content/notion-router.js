import notionRouter from "./notion-router.json"
export const notionRouterId = (routeName) => {
    return notionRouter.find(f => f.name == routeName).id
}
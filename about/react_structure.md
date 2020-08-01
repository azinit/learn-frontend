# React Structure
> @LivingDoc

There is a big problem to maintain and mutate long-living projects.

And it becomes more easy, if you choose **split your code-base by feature (FDD) instead of splitting by type.**

> I have the selection of materials about FDD with own conspect of one presentation [here](https://www.notion.so/Feature-Driven-Development-dfe306d664ae4780bcf999ccdd15e532)

### Principles of FDD

![principles-img](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/74cf09b2-ad8b-4e7d-9ac6-c66e3096c0da/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200801T085646Z&X-Amz-Expires=86400&X-Amz-Signature=a6f3d0cf9bd82b781073947c4af095878f8dd6427cebdf46680b22982547953b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

### FAQ

#### Where should I locate api modules?

This approach often recommends to locate data-access (API) module in some shared directory

> [@zmitry](https://www.codementor.io/@zmitry/react-app-structure-by-feature-guidelines-10wnfwp9eh)
>
> It also depends on your use case but you might have data access (API) as separate entity on top of your app or you can have it per feature. The case study shows that it's easier to coordinate data access from the single place rather than have it decentralized but it depends on your app.

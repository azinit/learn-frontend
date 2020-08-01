# React Structure
> @LivingDoc

There is a big problem to maintain and mutate long-living projects.

- And it becomes more easy, if you choose **split your code-base by feature (FDD) instead of splitting by type.**
 
- Another reason - that if you struct your project by type - it will be difficult to scale this in future. This approach has the static splitting and becouse of it - it difficult to add new features (every feature will affect few global modules - api/, store/, components/, pages/ and ...)

- Otherside - if you choose splitting by feature - every `feature` will be self-contained and independent from other env.

- Also, in first case, your modules are very interconnected - what has a bad affecting your codebase.

> [My selection of materials about FDD](https://www.notion.so/Feature-Driven-Development-dfe306d664ae4780bcf999ccdd15e532)

### Principles of FDD

> I have [own conspect of base FDD principles with additional explaining](https://www.notion.so/Summary-YouTube-Feature-Driven-Arhitecture-b8609fd4452b41f499703c841e56b8e9)

![principles-img](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/74cf09b2-ad8b-4e7d-9ac6-c66e3096c0da/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200801T085646Z&X-Amz-Expires=86400&X-Amz-Signature=a6f3d0cf9bd82b781073947c4af095878f8dd6427cebdf46680b22982547953b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

### FAQ

#### What structure should looks like?

I decided to stick with this structure:

```markdown
└── src/
    ├── app/                        # Base app resources
    │       ├── store/              #    Root *store* module, imports all features' slices
    ├── features/                   # Crucial app's features
    ├── pages/                      # App's pages (are build from features, shared)
    └── shared/                     # **Common** modules for dev
        ├── api/                    # Work with `API`
        │   ├── (index.ts)          #    Storage, access and logic of `API` instance
        │   ├── (some-entity-1.ts)  #    Implementing work with `API` of `SomeEntity1`
        │   ├── ...                 #
        │   └── (some-entity-n.ts)  #    Implementing work with `API` of `SomeEntityN`
        ├── components/             #   **Common used** React Components
        ├── helpers/                #   **Common used** Helpers modules
        ├── hocs/                   #   **Common used** React HOCs
        ├── hooks/                  #   **Common used** React Hooks
        ├── fixtures/               #   **Common used** Demo fixtures (before API connection)
        ├── get-env                 #   Module with **env**-vars
        └── mixins.scss             #   **Common used** SCSS миксины
```

```markdown
└── features/
    └── feature-name/
            ├── components/            # UI Components (`React`, `Canvas`)
            ├── effects/               # Side-effects with extra-logic of component (`Store`, `Components`)
            │   ├── (index.ts)         #    `Thunks` with effects implementing (`CRUD`-operationg and etc.)
            │   └── (helpers.ts)       #    Required `helpers` for effects
            ├── store/                 # Redux store of component
            │   ├── (index.ts)         #    `Slice` states for feature
            │   └── (types.d.ts)       #    Required `types` for slice
            ├── {...}/                 # Potentially, other **required** modules can be store here (but without fanaticism)
            └── index.ts               # Entry-point of feature (with defining public API of this feature)
```

#### What is a `feature`?

`Feature` - self-contained, user-facing, reusable, complex, with specific logic module.

> - *self-contained* - contains everything it needs
> - *user-facing* - we define feature based on user-facing functionality
> - *reusable* - can be used on different pages or screens
> - *complex* - more high-level abstraction than a component
> - *with specific logic* - module, that is responsible for specific part of app business logic


#### Where should I locate api modules?

This approach often recommends to locate data-access (API) module in some shared directory

> [@zmitry](https://www.codementor.io/@zmitry/react-app-structure-by-feature-guidelines-10wnfwp9eh)
>
> It also depends on your use case but you might have data access (API) as separate entity on top of your app or you can have it per feature. The case study shows that it's easier to coordinate data access from the single place rather than have it decentralized but it depends on your app.

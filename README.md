### Now-Build Nested Dependency Error

Example to demonstrate errors with `@now/node@canary` build with nested dependencies.

### Working Example: No Nested Dependencies

Run `now dev` in the `notnested_working` example, and confirm that the test passes:

```
cd notnested_working
now dev &

...
[ wait ]  compiling ...
> Ready! Available at http://localhost:3000
```

Test the API call using curl:

```
yarn test
$ curl -X GET "http://localhost:3000/api/index?year=2019"
✨  Done in 2.19s.
```

And confirm that the `now dev` log shows a valid compilation and no errors:

```
> GET /api/index?year=2019
> Building @now/node:backend/api/index.js
downloading user files...
installing dependencies for user's code...
missing `engines` in `package.json`, using default range: 8.10.x
installing to /.../nested-package-error/notnested_working/backend/api
yarn install v1.15.2
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.11s.
running user script...
tracing input files...
> Built @now/node:backend/api/index.js [2s]
API query:  1970-01-01T00:00:02+00:00
```



### Error: Nested Dependencies @now/node@canary

Run `now dev` in the `notnested_working` example, and confirm that the test passes:

```
cd nested_error
now dev &

...
[ wait ]  compiling ...
> Ready! Available at http://localhost:3000
```

Test the API call using curl:

```
yarn test
$ curl -X GET "http://localhost:3000/api/index?year=2019"
```

And confirm that the `now dev` log shows an error, missing dependency:

```
> GET /api/index?year=2019
> Building @now/node@canary:backend/api/index.js
downloading user files...
installing dependencies for user's code...
missing `engines` in `package.json`, using default range: 8.10.x
installing to /.../nested-package-error/nested_error/backend/api
yarn install v1.15.2
warning package.json: No license field
warning ../package.json: No license field
warning No license field
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.11s.
running user script...
tracing input files...
> Built @now/node@canary:backend/api/index.js [1s]
Cannot find module 'moment'
Did you forget to add it to "dependencies" in `package.json`?
```


### Working: Nested Dependencies @now/node@0.11.1

Run `now dev` in the `notnested_working` example, and confirm that the test passes:

```
yarn test
$ curl -X GET "http://localhost:3000/api/index?year=2019"
✨  Done in 4.40s.
```

And confirm that the `now dev` log shows no errors:

```
> Ready! Available at http://localhost:3000
> GET /api/index?year=2019
> Building @now/node@0.11.1:backend/api/index.js
downloading user files...
installing dependencies for user's code...
missing `engines` in `package.json`, using default range: 8.10.x
installing to /.../nested-package-error/nested_working/backend/api
yarn install v1.15.2
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.11s.
running user script...
compiling entrypoint with ncc...
ncc: Version 0.18.5
ncc: Compiling file index.js
> Built @now/node@0.11.1:backend/api/index.js [4s]
API query:  1970-01-01T00:00:02+00:00
```

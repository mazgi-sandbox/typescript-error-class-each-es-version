# typescript-error-class-each-es-version

TypeScript error class behavior in each ECMAScript version.

## prepare

```shellsession
echo "UID=$(id -u)" >> .env
echo "GID=$(id -g)" >> .env
```

## how to run

```shellsession
docker-compose up
```

and

```shellsession
docker-compose run app npm run ts-node -- --project tsconfig.es2019.json src/simple-error-class.ts
```

## examples

The output in my environment is [here](console.out.txt).

```shellsession
docker-compose up | sed 's/\x1b\[[0-9;]*m//g; s/\x1b(B//g' > console.out.txt
```

## links

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#Examples
  - `Function names in classes`

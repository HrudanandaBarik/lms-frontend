# LMS Frontend

### Setup instruction

1. Clone the project
```
  git clone https://github.com/HrudanandaBarik/lms-frontend.git
```

2. Move into the directory

```
  cd lms-frontend
```

3. install dependencies

```
   npm i
```

4. 4un the server

```
   npm run dev
```

### Setup instruction for tailwind

[Tail wind official instruction docs](https://tailwindcss.com/docs/installation)

1. Install tailwindcss

```
  npm install -D tailwindcss
```

2. Create tailwind config file

```
  npx tailwindcss init
```

3. Add file extensions to tailwind config file in the contents property

```
   "./src/**/*.{html,js,jsx,ts,tsx}"
```
4. Add the tailwind directives at the `index.css` file

```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```




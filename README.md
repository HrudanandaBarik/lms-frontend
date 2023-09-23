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

### Adding plugins and dependencies

```
 npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Configure auto import sort esline

1. Install simple import sort

```
  npm i -D eslint-plugin-simple-import-sort
```

2. Add rule in `.eslint.cjs`

```
  'simple-import-sort/imports': 'error'
```

3. Add simple-import-sort in the plugin array of `.eslintrc.cjs` file

```
    plugins: [..., 'simple-import-sort']
```

4. Open settings.json in vscode configuration settings

5. Add the following line

```
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true 
    }
```



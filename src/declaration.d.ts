// from https://github.com/facebook/create-react-app/blob/main/packages/react-scripts/lib/react-app.d.ts

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.less' {
  const classes: { [className: string]: string };
  export default classes;
}

declare var __CLIENT__: boolean;
declare var __SERVER__: boolean;

export function doSomething() {
  const config = useRuntimeConfig();
  console.log(config.public.logLevel);
}

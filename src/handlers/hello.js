async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from https://github.com/MicahSphelele' }),
  };
}

export const handler = hello;



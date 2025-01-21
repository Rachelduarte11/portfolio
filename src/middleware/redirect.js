export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  if (url.pathname === '/portofolio') {
    return Response.redirect('/', 301);
  }

  return next();
}
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const products = await fetch(
    'https://lopi2.azurewebsites.net/api/categories'
  ).then((res) => res.json());
  console.log(products);
  return products.map((product) => ({
    path: product,
  }));
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }) {
  const { path } = params;
  console.log(path);
}

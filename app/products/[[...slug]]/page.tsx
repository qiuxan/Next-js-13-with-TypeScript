import React from "react";
interface Props {
  searchParams: { sortOrder: string };
  params: {
    slug: string[];
  };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductPage {slug} {sortOrder}
    </div>
  );
};

export default ProductPage;

// app/all-products/page.tsx
import React, { Suspense } from "react";
import Loading from "../../../components/Loading";
import AllProductsClient from "./AllProductsClient";

export default function AllProductsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <AllProductsClient />
    </Suspense>
  );
}

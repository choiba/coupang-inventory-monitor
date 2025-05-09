import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sampleProducts = [
  { id: "1", name: "디로브 시크릿 친환경 실리콘 딜도 - 1개 S", stock: 75 },
  { id: "2", name: "디로브 시크릿 친환경 실리콘 딜도 - 1개 XL", stock: 57 },
  { id: "3", name: "디로브 시크릿 친환경 실리콘 딜도 - 1개 L", stock: 51 },
  { id: "4", name: "디로브 여자 모노키니 원피스 수영복 - M", stock: 34 },
  { id: "5", name: "디로브 여자 모노키니 원피스 수영복 - XL", stock: 28 },
];

export default function CoupangInventoryMonitor() {
  const [productList, setProductList] = useState(sampleProducts);

  const getAdStatus = (stock) => (stock === 0 ? "OFF" : "ON");

  const toggleAdStatus = (id) => {
    setProductList((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              stock: item.stock === 0 ? 1 : 0,
            }
          : item
      )
    );
  };

  return (
    <div className="p-6 grid gap-4">
      <h2 className="text-xl font-bold">쿠팡 재고 모니터링 및 광고 상태</h2>
      {productList.map((product) => (
        <Card key={product.id}>
          <CardContent className="flex flex-col gap-2 p-4">
            <div className="font-semibold">{product.name}</div>
            <div>재고: {product.stock}</div>
            <div>광고 상태: {getAdStatus(product.stock)}</div>
            <Button onClick={() => toggleAdStatus(product.id)}>
              재고 {product.stock === 0 ? "복구" : "0으로 설정"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

import Layout from "../components/layout";
import cafeBackgroundImage from "../assets/images/bg-cafe-2.jpg";
import useSWR from "swr";
import { Order } from "../lib/models";
import Loading from "../components/loading";
import { Alert, Button } from "@mantine/core";
import { IconAlertTriangleFilled, IconPlus } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function OrderPage() {
  const { data: orders, error } = useSWR<Order[]>("/order");

  return (
    <>
      <Layout>
        <section
          className="h-[500px] w-full text-white bg-orange-800 bg-cover bg-blend-multiply flex flex-col justify-center items-center px-4 text-center"
          style={{
            backgroundImage: `url(${cafeBackgroundImage})`,
          }}
        >
          <h1 className="text-5xl mb-2">ออเดอร์ทั้งหมด</h1>
          <h2>รายการออเดอร์ที่ถูกสั่งทั้งหมด</h2>
        </section>

        <section className="container mx-auto py-8">
          <div className="flex justify-between">
            <h1>รายการออเดอร์</h1>

            <Button
              component={Link}
              leftSection={<IconPlus />}
              to="/order/create"
              size="xs"
              variant="primary"
              className="flex items-center space-x-2"
            >
              สั่งเครื่องดื่ม
            </Button>
          </div>

          {!orders && !error && <Loading />}
          {error && (
            <Alert
              color="red"
              title="เกิดข้อผิดพลาดในการอ่านข้อมูล"
              icon={<IconAlertTriangleFilled />}
            >
              {error.message}
            </Alert>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {orders?.map((order) => (
              <div className="border border-solid border-neutral-200" key={order.order_id}>
                {/* <img
                  src="https://placehold.co/150x200"
              
                  className="w-full object-cover aspect-[3/4]"
                /> */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold line-clamp-2">Order #{order.order_id}</h2>
                  <p className="text-xs text-neutral-500">จำนวน: {order.quan}</p>
                  {/* <p className="text-xs text-neutral-500">สถานะ: {order.status}</p> */}
                </div>

                <div className="flex justify-end px-4 pb-2">
                  <Button component={Link} to={`/order/${order.order_id}`} size="xs" variant="default">
                    ดูรายละเอียด
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
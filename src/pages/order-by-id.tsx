import { Alert, Button, Container, Divider } from "@mantine/core";
import Layout from "../components/layout";
import { Link, useParams } from "react-router-dom";
import { Order } from "../lib/models";
import useSWR from "swr";
import Loading from "../components/loading";
import { IconAlertTriangleFilled, IconEdit } from "@tabler/icons-react";

export default function OrderByIdPage() {
  const { orderId } = useParams();

  const { data: order, isLoading, error } = useSWR<Order>(`/order/${orderId}`);

  return (
    <>
      <Layout>
        <Container className="mt-4">
          {/* You can use isLoading instead of !book */}
          {isLoading && !error && <Loading />}
          {error && (
            <Alert
              color="red"
              title="เกิดข้อผิดพลาดในการอ่านข้อมูล"
              icon={<IconAlertTriangleFilled />}
            >
              {error.message}
            </Alert>
          )}

          {!!order && (
            <>
              <h1>หมายเลขออเดอร์ {order.order_id} </h1>
             
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="col-span-2 px-4 space-y-2 py-4">
                <h3>รหัสเมนู</h3>
                  <p className="indent-4">
                    {order.id}

                  </p>
                  <h3>จำนวน</h3>
                  <p className="indent-4">
                    {order.quan}

                  </p>
                  <h3>หมายเหตุ</h3>
                  <p className="indent-4">
                    {order.detail}

                  </p>
                  


                 
                </div>
              </div>

              <Divider className="mt-4" />

              <Button
                color="blue"
                size="xs"
                component={Link}
                to={`/order/${order.order_id}/edit`}
                className="mt-4"
                leftSection={<IconEdit />}
              >
                แก้ไขข้อมูลคำสั่งซื้อ
              </Button>
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}

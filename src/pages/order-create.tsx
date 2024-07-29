import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import { Button, Container, Divider, NumberInput, Textarea, Select } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { notifications } from "@mantine/notifications";
import { Order } from "../lib/models";
import { Menu } from "../lib/models";
import useSWR from "swr";


export default function OrderCreatePage() {
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const { data: menus } = useSWR<Menu[]>('/menu');

  const orderCreateForm = useForm({
    initialValues: {
      detail: "",
      quan: 1,
    },

    validate: {
      quan: isNotEmpty("กรุณาระบุจำนวนของเมนู"),
    },
  });

  const handleSubmit = async (values: typeof orderCreateForm.values) => {
    try {
      setIsProcessing(true);
      const response = await axios.post<Order>(`/order`, values);
      notifications.show({
        title: "สั่งเครื่องดื่มสำเร็จ",
        message: "ออเดอร์ของคุณได้ถูกบันทึกเรียบร้อยแล้ว",
        color: "teal",
      });
     navigate(`/order/${response.data.order_id}`);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 422) {
          notifications.show({
            title: "ข้อมูลไม่ถูกต้อง",
            message: "กรุณาตรวจสอบข้อมูลที่กรอกใหม่อีกครั้ง",
            color: "red",
          });
        } else if (error.response?.status || 500 >= 500) {
          notifications.show({
            title: "เกิดข้อผิดพลาดบางอย่าง",
            message: "กรุณาลองใหม่อีกครั้ง",
            color: "red",
          });
        }
      } else {
        notifications.show({
          title: "เกิดข้อผิดพลาดบางอย่าง",
          message: "กรุณาลองใหม่อีกครั้ง หรือดูที่ Console สำหรับข้อมูลเพิ่มเติม",
          color: "red",
        });
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Layout>
        <Container className="mt-8">
           <h1 className="text-xl">สั่งเครื่องดื่ม</h1>

          <form onSubmit={orderCreateForm.onSubmit(handleSubmit)} className="space-y-8">
                <Select
                    label="เลือกเมนู"
                    placeholder="เลือกเมนู"
                    data={menus?.map(menu => ({ value: menu.id.toString(), label: `${menu.name} - ${menu.price}฿` })) || []}
                    {...orderCreateForm.getInputProps("id")}
                />

                <NumberInput
                    label="จำนวน"
                    placeholder="จำนวน"
                    {...orderCreateForm.getInputProps("quan")}
                    min={1}
                />

                <Textarea
                    label="หมายเหตุ"
                    placeholder="หมายเหตุหรือคำแนะนำพิเศษ (ถ้ามี)"
                    {...orderCreateForm.getInputProps("detail")}
                />
                <Divider />

                <Button type="submit" loading={isProcessing}>
                    บันทึกข้อมูล
                </Button>
          </form>
        </Container>
      </Layout>
    </>
  );
}

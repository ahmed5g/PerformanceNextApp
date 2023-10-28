import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { useStoreModel } from "@/Hooks/use-store-model";
import { Modal } from "@/components/ui/modal";
import { 
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl } from "@/components/ui/form";
import { Input }from "@/components/ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import toast from "react-hot-toast";
import { error } from "console";

const formSchema = z.object({
  name: z.string().min(1),
});

export const StoreModel = () => {
  const storeModel = useStoreModel();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", 
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

 
      const response = await axios.post("/api/stores", values);
      toast.success("Store created.");
      window.location.assign(`/${response.data.id}`);
    } catch (error) {
      toast.error("Somthing went wrong.");
    }finally{
      setLoading(false)
    }
  };

  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and categories"
      isOpen={storeModel.isOpen}
      onClose={storeModel.onClose}
    >
      <div className="space-y-4 py-2 pb-4">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input disabled={loading} 
                  placeholder="E-Commerce"
                   {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="pt-6 space-x-2 flex items-center justify-end">
            <Button
            disabled={loading} 
            variant={"outline"}
            onClick={storeModel.onClose}
            >
              Cancel
            </Button>
            <Button
            disabled={loading} 
            type="submit"
            > Continue </Button>
          </div>
        </form>
        </Form>
      </div>
    </Modal>
  );
};
